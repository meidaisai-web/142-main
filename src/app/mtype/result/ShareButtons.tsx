'use client'

import { useEffect, useState } from "react";
import { typeToParam } from "./result";
import type { MTypeKey } from "./types";

const buttonClassName = "bg-primary border-2 border-primary-900 rounded-full px-6 py-2 w-fit hover:bg-primary-700 active:bg-primary-900 transition-colors duration-150 ease-out text-center";

// 診断結果をシェアする。
// 端末の共有機能で、タイプ別の画像ファイルとシェア用ページのリンクを一緒に共有する。
export default function ShareButtons({ type, typeName, imageSrc }: { type: MTypeKey; typeName: string; imageSrc: string }) {
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [copied, setCopied] = useState(false);

    // iOS Safari はクリックから時間が空くと共有が拒否されるため、画像は先に取得しておく
    useEffect(() => {
        let cancelled = false;
        fetch(imageSrc)
            .then((res) => res.blob())
            .then((blob) => {
                if (cancelled) return;
                setImageFile(new File([blob], `mtype-${typeToParam(type)}.png`, { type: blob.type || "image/png" }));
            })
            .catch(() => {
                // 取得できなければ、テキストとリンクだけ共有する
            });
        return () => {
            cancelled = true;
        };
    }, [imageSrc, type]);

    const text = `M-TYPE診断の結果、私は${type}タイプ「${typeName}」でした！ #明大祭`;
    // 共有するのは、アンケートなどを除いたシェア用ページ。タイプは ac, ad, bc, bd で渡す
    const shareUrl = () => `${window.location.origin}/mtype/share?type=${typeToParam(type)}`;

    async function share() {
        // navigator.share は HTTPS（またはlocalhost）でしか使えない。使えない環境ではリンクをコピーする
        if (typeof navigator.share !== "function") {
            try {
                await navigator.clipboard.writeText(`${text}\n${shareUrl()}`);
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            } catch {
                // コピーできない環境では何もしない
            }
            return;
        }
        const data: ShareData = { text, url: shareUrl() };
        if (imageFile && navigator.canShare?.({ files: [imageFile] })) data.files = [imageFile];
        try {
            await navigator.share(data);
        } catch {
            // キャンセルされた場合は何もしない
        }
    }

    return (
        <div className="mt-8 text-center">
            <button type="button" className={`${buttonClassName} mt-3 mx-auto block`} onClick={share}>
                {copied ? "リンクをコピーしました！" : "結果をSNSでシェア！"}
            </button>
        </div>
    )
}
