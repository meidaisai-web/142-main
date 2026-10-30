"use client";

import { ReactNode, useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

// ホバーしてからプレビューを出すまでの時間
const OPEN_DELAY = 300;
// カードからプレビューへカーソルを移す間に消えないよう、閉じるのを少し待つ
const CLOSE_DELAY = 150;
// カードとプレビューの間隔
const GAP = 8;
// 画面端からの最低余白
const VIEWPORT_MARGIN = 8;

interface HoverPreviewProps {
  children: ReactNode;
  preview: ReactNode;
}

/**
 * ホバー（キーボードではフォーカス）でリンク先のプレビューを表示するコンポーネント
 * ホバーできない端末（スマホなど）では何もせず、children をそのまま表示する
 */
export default function HoverPreview({ children, preview }: HoverPreviewProps) {
  const triggerRef = useRef<HTMLDivElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const openTimer = useRef<number | undefined>(undefined);
  const closeTimer = useRef<number | undefined>(undefined);
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState<{ top: number; left: number } | null>(null);

  const clearTimers = () => {
    window.clearTimeout(openTimer.current);
    window.clearTimeout(closeTimer.current);
  };

  const scheduleOpen = () => {
    clearTimers();
    openTimer.current = window.setTimeout(() => setOpen(true), OPEN_DELAY);
  };

  const scheduleClose = () => {
    window.clearTimeout(openTimer.current);
    closeTimer.current = window.setTimeout(() => setOpen(false), CLOSE_DELAY);
  };

  const cancelClose = () => {
    window.clearTimeout(closeTimer.current);
  };

  const close = () => {
    clearTimers();
    setOpen(false);
  };

  // 表示する位置を計算する（下に入らなければ上に出し、左右は画面内に収める）
  useLayoutEffect(() => {
    if (!open || !triggerRef.current || !previewRef.current) return;

    const trigger = triggerRef.current.getBoundingClientRect();
    const previewRect = previewRef.current.getBoundingClientRect();
    const viewportWidth = document.documentElement.clientWidth;
    const viewportHeight = window.innerHeight;

    let top = trigger.bottom + GAP;
    const aboveTop = trigger.top - GAP - previewRect.height;
    if (top + previewRect.height > viewportHeight - VIEWPORT_MARGIN && aboveTop >= VIEWPORT_MARGIN) {
      top = aboveTop;
    }

    const centerLeft = trigger.left + trigger.width / 2 - previewRect.width / 2;
    const left = Math.min(
      Math.max(centerLeft, VIEWPORT_MARGIN),
      viewportWidth - previewRect.width - VIEWPORT_MARGIN
    );

    setPosition({ top, left });
  }, [open]);

  // 表示中は Esc で閉じる。スクロールや画面サイズの変更で位置がずれるので、そのときも閉じる
  useEffect(() => {
    if (!open) return;

    const hide = () => {
      window.clearTimeout(openTimer.current);
      window.clearTimeout(closeTimer.current);
      setOpen(false);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        hide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("scroll", hide, true);
    window.addEventListener("resize", hide);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("scroll", hide, true);
      window.removeEventListener("resize", hide);
    };
  }, [open]);

  // アンマウント時にタイマーを止める
  useEffect(() => clearTimers, []);

  return (
    <>
      <div
        ref={triggerRef}
        onPointerEnter={(e) => {
          // マウス操作かつホバーできる端末のときだけ表示する（スマホのタップでは出さない）
          if (e.pointerType === "mouse" && window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
            scheduleOpen();
          }
        }}
        onPointerLeave={(e) => {
          if (e.pointerType === "mouse") {
            scheduleClose();
          }
        }}
        onFocus={(e) => {
          // キーボード操作でフォーカスしたときだけ表示する
          if (e.target.matches(":focus-visible")) {
            scheduleOpen();
          }
        }}
        onBlur={close}
        onClick={close}
      >
        {children}
      </div>

      {open && createPortal(
        <div
          ref={previewRef}
          onPointerEnter={cancelClose}
          onPointerLeave={scheduleClose}
          style={{ top: position?.top ?? -9999, left: position?.left ?? -9999 }}
          className="fixed z-50 transition-[opacity,translate,scale] duration-200 ease-out starting:translate-y-1 starting:scale-95 starting:opacity-0"
        >
          {preview}
        </div>,
        document.body
      )}
    </>
  );
}
