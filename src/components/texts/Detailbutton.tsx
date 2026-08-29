"use client";

import { useState } from "react";
import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";

type DetailbuttonProps = {
  href?: string;
  className?: string;
  children?: ReactNode;
};

export default function Detailbutton({
  href = "/detail",
  className = "",
  children = "詳しくはこちら",
}: DetailbuttonProps) {

  const [isAnimated, setIsAnimated] = useState(false);

  const containerStyle: CSSProperties = {
    display: "block",
    width: "150px",
    maxWidth: "100%",
    margin: "30px auto",
    marginTop: "20px",
    marginBottom: "30px",
    textDecoration: "none",
    color: "#3E3D3F",
    transform: "translateX(220px)",
  };

  const textStyle: CSSProperties = {
    display: "block",
    textAlign: "center",
    fontSize: "15px",
    fontWeight: 500,
    letterSpacing: "0.04em",
    lineHeight: 1.2,
    color: "#3E3D3F",
    textShadow: "0px 4px 3px rgba(80, 80, 80, 0.35)",
    marginBottom: "1px",
  };

  return (
    <Link
      href={href}
      className={`${className} detail-button`}
      style={containerStyle}
      onMouseEnter={() => {
        // すでにアニメーション中ではない場合のみ実行
        if (!isAnimated) setIsAnimated(true);
      }}
    >
      <div className="detail-button__viewport">
        {/* 文字：最初から最後まで動かない */}
        <span style={textStyle}>{children}</span>

        {/* 「―＼」が動く範囲 */}
        <div className="detail-button__line-viewport">
          {/* 1つ目の「―＼」 */}
          <div
            className={`detail-button__arrow detail-button__arrow--first ${
              isAnimated ? "is-animated" : ""
            }`}
          >
            <span className="detail-button__arrow-line" />
            <span className="detail-button__arrow-slash" />
          </div>

          {/* 2つ目の「―＼」 */}
          <div
            className={`detail-button__arrow detail-button__arrow--second ${
              isAnimated ? "is-animated" : ""
            }`}
            // ★追記：2つ目のアニメーションが終わったらステートをリセットする
            onAnimationEnd={() => setIsAnimated(false)}
          >
            <span className="detail-button__arrow-line" />
            <span className="detail-button__arrow-slash" />
          </div>
        </div>
      </div>
    </Link>
  );
}