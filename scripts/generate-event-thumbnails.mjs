// 企画画像の縮小版を public/images/events/ に作る（npm run build の前に prebuild として自動で動く）
// Supabase の元画像は大きく、Cloudflare では next/image の縮小も効かないため、ビルド時に縮小版を作って静的ファイルとして配る
// ・失敗してもビルドは止めない（縮小版がない企画は、表示側で元画像に切り替わる）
// ・前回作った縮小版が残っていれば作り直さない（画像を差し替えると URL の ?t= が変わり、別ファイルとして作られる）

import { mkdir, readdir, rm, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import sharp from "sharp";

const TABLE = "MasterData142";
const OUT_DIR = path.join(process.cwd(), "public", "images", "events");
// src/utils/managers/eventThumbnailManager.ts の EVENT_THUMBNAIL_WIDTHS と同じ値にすること
const WIDTHS = [240, 600];
const CONCURRENCY = 6;
const FETCH_TIMEOUT_MS = 20_000;

// src/utils/managers/eventThumbnailManager.ts の eventThumbnailName と同じ決め方にすること
function eventThumbnailName(imageUrl, width) {
    if (!imageUrl) return null;
    let url;
    try {
        url = new URL(imageUrl);
    } catch {
        return null;
    }
    const match = url.pathname.match(/\/storage\/v1\/object\/public\/[^/]+\/(.+)$/);
    if (!match) return null;
    const stem = decodeURIComponent(match[1]).replace(/\.[^./]+$/, "").replace(/[^A-Za-z0-9_-]/g, "_");
    const version = (url.searchParams.get("t") ?? "0").replace(/[^A-Za-z0-9_-]/g, "_");
    return `${stem}-${version}-${width}.webp`;
}

async function fetchWithTimeout(url, init = {}) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
    try {
        return await fetch(url, { ...init, signal: controller.signal });
    } finally {
        clearTimeout(timer);
    }
}

async function fetchImageUrls(supabaseUrl, anonKey) {
    const res = await fetchWithTimeout(
        `${supabaseUrl}/rest/v1/${TABLE}?select=imageUrl&imageUrl=not.is.null`,
        { headers: { apikey: anonKey, Authorization: `Bearer ${anonKey}` } },
    );
    if (!res.ok) throw new Error(`企画データの取得に失敗しました (${res.status})`);
    const rows = await res.json();
    return [...new Set(rows.map((row) => row.imageUrl).filter(Boolean))];
}

async function makeThumbnails(imageUrl) {
    const targets = WIDTHS
        .map((width) => ({ width, name: eventThumbnailName(imageUrl, width) }))
        .filter((target) => target.name && !existsSync(path.join(OUT_DIR, target.name)));
    if (targets.length === 0) return "skipped";

    const res = await fetchWithTimeout(imageUrl);
    if (!res.ok) throw new Error(`画像の取得に失敗しました (${res.status})`);
    const original = Buffer.from(await res.arrayBuffer());

    for (const { width, name } of targets) {
        const resized = await sharp(original)
            .rotate() // スマホ写真の向きを直す
            .resize(width, width, { fit: "inside", withoutEnlargement: true })
            .webp({ quality: 75 })
            .toBuffer();
        await writeFile(path.join(OUT_DIR, name), resized);
    }
    return "created";
}

async function main() {
    // ローカル用。CI では環境変数が直接渡される。
    // このリポジトリの環境変数は .env に置く運用なので、.env.local だけでは読めず縮小版が作られなかった。
    // loadEnvFile は設定済みの値を上書きしないので、先に読んだ .env.local が優先される
    for (const file of [".env.local", ".env"]) {
        try {
            process.loadEnvFile(file);
        } catch {
            // ファイルがなければ何もしない
        }
    }
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    if (!supabaseUrl || !anonKey) {
        console.warn("[event-thumbnails] Supabase の環境変数がないため、縮小版を作りません（元画像で表示されます）");
        return;
    }

    await mkdir(OUT_DIR, { recursive: true });
    const imageUrls = await fetchImageUrls(supabaseUrl, anonKey);

    let created = 0, skipped = 0, failed = 0;
    const queue = [...imageUrls];
    async function worker() {
        while (queue.length > 0) {
            const imageUrl = queue.shift();
            try {
                const result = await makeThumbnails(imageUrl);
                if (result === "created") created++; else skipped++;
            } catch (e) {
                failed++;
                console.warn(`[event-thumbnails] 失敗: ${imageUrl} (${e instanceof Error ? e.message : e})`);
            }
        }
    }
    await Promise.all(Array.from({ length: CONCURRENCY }, worker));

    // 今の企画データで使われていない古い縮小版を消す（差し替え前の画像が静的ファイルに溜まらないようにする）
    const wanted = new Set(imageUrls.flatMap((url) => WIDTHS.map((width) => eventThumbnailName(url, width))));
    let removed = 0;
    for (const file of await readdir(OUT_DIR)) {
        if (file.endsWith(".webp") && !wanted.has(file)) {
            await rm(path.join(OUT_DIR, file));
            removed++;
        }
    }

    console.log(`[event-thumbnails] 作成 ${created} / 既存 ${skipped} / 失敗 ${failed} / 削除 ${removed}（全 ${imageUrls.length} 画像）`);
}

main().catch((e) => {
    // 縮小版がなくても表示側で元画像に切り替わるので、ビルドは止めない
    console.warn(`[event-thumbnails] 縮小版を作れませんでした: ${e instanceof Error ? e.message : e}`);
});
