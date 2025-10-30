"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";

interface ZoomableImageProps extends Omit<ImageProps, "onClick"> {
  /**
   * 拡大表示時の画像の最大幅（デフォルト: 90vw）
   */
  zoomMaxWidth?: string;
  /**
   * 拡大表示時の画像の最大高さ（デフォルト: 90vh）
   */
  zoomMaxHeight?: string;
  /**
   * 拡大機能を無効にする（デフォルト: false）
   */
  disableZoom?: boolean;
}

/**
 * タップで画像を拡大表示できるImageコンポーネント
 * 通常時は普通のnext/imageとして表示され、クリック/タップで拡大モーダルが開きます
 */
export default function ZoomableImage({
  zoomMaxWidth = "90vw",
  zoomMaxHeight = "90vh",
  disableZoom = false,
  alt,
  className,
  style,
  ...imageProps
}: ZoomableImageProps) {
  const [isZoomed, setIsZoomed] = useState(false);

  const handleImageClick = () => {
    if (!disableZoom) {
      setIsZoomed(true);
    }
  };

  const handleCloseZoom = () => {
    setIsZoomed(false);
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // 背景クリック時のみ閉じる（画像自体のクリックでは閉じない）
    if (e.target === e.currentTarget) {
      handleCloseZoom();
    }
  };

  return (
    <>
      {/* 通常表示の画像 */}
      <div className="w-fit mx-auto">
        <Image
          {...imageProps}
          alt={alt}
          className={`${className || ""} ${!disableZoom ? "cursor-zoom-in" : ""}`}
          style={style}
          onClick={handleImageClick}
        />
        <p>タップして拡大</p>
      </div>

      {/* 拡大表示モーダル */}
      {isZoomed && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={handleBackdropClick}
        >
          {/* 閉じるボタン */}
          <button
            onClick={handleCloseZoom}
            className="absolute right-4 top-4 z-10 rounded-full bg-white/90 p-2 text-black transition-all hover:bg-white hover:scale-110"
            aria-label="閉じる"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* 拡大された画像 */}
          <div
            className="relative"
            style={{
              maxWidth: zoomMaxWidth,
              maxHeight: zoomMaxHeight,
              width: "fit-content",
              height: "fit-content",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              {...imageProps}
              alt={alt}
              className="max-h-[90vh] max-w-[90vw] h-auto w-auto object-contain"
              style={{
                width: "auto",
                height: "auto",
              }}
            />
          </div>
        </div>
      )}
    </>
  );
}
