"use client";

import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { Zen_Old_Mincho } from "next/font/google";

const zenOldMincho = Zen_Old_Mincho({
    weight: "500",
    subsets: ["latin"],
});

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
  const containerStyle: CSSProperties = {
    display: "block",
    width: "80%",
    maxWidth: "1200px",
    margin: "0 auto",
    marginTop: "30px",
    marginBottom: "30px",
    textDecoration: "none",
    color: "#626068",
    transform: "translateX(430px)",
  };

  const textStyle: CSSProperties = {
    display: "block",
    textAlign: "center",
    fontSize: "15px",
    fontWeight: 500,
    letterSpacing: "0.04em",
    lineHeight: 1.2,
    color: "#626068",
    textShadow: "0px 4px 3px rgba(80, 80, 80, 0.35)",
    marginBottom: "5px",
  };

  const lineStyle: CSSProperties = {
    position: "relative",
    width: "100%",
    height: "1px",
    backgroundColor: "#626068",
    boxShadow: "0 4px 3px rgba(80, 80, 80, 0.35)",
    margin: "0 auto",
  };

  const arrowTopStyle: CSSProperties = {
    position: "absolute",
    right: "0px",
    top: "0px",
    width: "13px",
    height: "1px",
    backgroundColor: "#626068",
    transform: "rotate(40deg)",
    transformOrigin: "right center",
    boxShadow: "0 4px 3px rgba(80, 80, 80, 0.35)",
  };




  return (
    <Link
      href={href}
      className={'${className} detail-button'}
      style={containerStyle}
    >
        <div className="detail-button__viewport">

          <div className="detail-button__track">

            <div className="detail-button__item">
              <span
                className={zenOldMincho.className}
                style={textStyle}
              >
                {children}
              </span>

              <div style={lineStyle}>
                <span style={arrowTopStyle} />
              </div>
            </div>

            <div className="detail-button__item">
              <span
                className={zenOldMincho.className}
                style={textStyle}
              >
                {children}
              </span>

              <div style={lineStyle}>
                <span style={arrowTopStyle} />
              </div>
            </div>
          
            <div className="detail-button__item">
              <span
                className={zenOldMincho.className}
                style={textStyle}
              >
                {children}
              </span>

              <div style={lineStyle}>
                <span style={arrowTopStyle} />
              </div>
            </div>
          
            <div className="detail-button__item">
              <span
                className={zenOldMincho.className}
                style={textStyle}
              >
                {children}
              </span>

              <div style={lineStyle}>
                <span style={arrowTopStyle} />
              </div>
            </div>
      
          </div>

        </div>
    </Link>
  );
}