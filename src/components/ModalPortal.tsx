'use client';

import { ReactNode } from "react";
import { createPortal } from "react-dom";

// モーダルを<body>の直下に描画する
// ページ内の transform や z-index を持つ要素の中に置くと、fixed のモーダルがフッターなどの下に隠れるため
// ※モーダルは操作後に開くもの（最初の描画では出さない）に使う。サーバー側では何も描画しない
export default function ModalPortal({ children }: { children: ReactNode }) {
    if (typeof document === "undefined") return null;
    return createPortal(children, document.body);
}
