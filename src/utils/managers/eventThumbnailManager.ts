// 企画画像の縮小版（ビルド時に scripts/generate-event-thumbnails.mjs が public/images/events/ に作る）の場所を決める
// Supabase の元画像は大きく（平均約770KB）、Cloudflare では next/image の縮小も効かないため、
// 縮小版を静的ファイルとして配り、Supabase と Worker の負荷を下げる
// ※ファイル名の決め方を変えるときは、scripts/generate-event-thumbnails.mjs の eventThumbnailName も同じに変えること

export type EventThumbnailSize = "small" | "large";

// small: 企画一覧（約100px表示）用 / large: 企画詳細（約300px表示）用。高解像度の画面でもぼやけないよう表示の約2倍にする
export const EVENT_THUMBNAIL_WIDTHS: Record<EventThumbnailSize, number> = {
    small: 240,
    large: 600,
};

// 例: https://xxx.supabase.co/storage/v1/object/public/master-data-142/133.webp?t=1786628810397
//   → /images/events/133-1786628810397-240.webp
// URL の ?t= は画像を差し替えると変わるので、ファイル名に含めて古い縮小版を出さないようにする
export function getEventThumbnailPath(imageUrl: string | null | undefined, size: EventThumbnailSize): string | null {
    const name = eventThumbnailName(imageUrl, EVENT_THUMBNAIL_WIDTHS[size]);
    return name ? `/images/events/${name}` : null;
}

function eventThumbnailName(imageUrl: string | null | undefined, width: number): string | null {
    if (!imageUrl) return null;
    let url: URL;
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
