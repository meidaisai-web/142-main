'use client';

import Image from "next/image";
import { useState } from "react";
import { EventThumbnailSize, getEventThumbnailPath } from "@/utils/managers/eventThumbnailManager";

const NO_IMAGE_SRC = "/images/svg/no-image.svg";

type EventPhotoProps = {
    imageUrl: string;
    size: EventThumbnailSize;
    width: number;
    height: number;
    className?: string;
};

// 企画画像。ビルド時に作った縮小版を優先し、なければ元画像、それも読めなければ「画像なし」を出す
// unoptimized: 縮小版はすでに小さく、Cloudflare では next/image の縮小が効かず Worker を経由するだけなので、直接読み込ませる
export default function EventPhoto({ imageUrl, size, width, height, className = "" }: EventPhotoProps) {
    const thumbnail = getEventThumbnailPath(imageUrl, size);
    const [src, setSrc] = useState(thumbnail ?? imageUrl ?? NO_IMAGE_SRC);

    function handleError() {
        if (thumbnail && src === thumbnail && imageUrl) {
            setSrc(imageUrl); // 縮小版がまだ作られていない（画像を差し替えた直後など）
        } else if (src !== NO_IMAGE_SRC) {
            setSrc(NO_IMAGE_SRC);
        }
    }

    return (
        <Image
            src={src}
            alt="企画画像"
            width={width}
            height={height}
            unoptimized
            className={className}
            onError={handleError}
        />
    )
}
