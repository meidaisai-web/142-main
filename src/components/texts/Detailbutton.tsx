"use client";

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
  const containerStyle: CSSProperties = {
    display: "block",
    width: "80%",
    maxWidth: "1200px",
    margin: "0 auto",
    marginTop: "30px",
    marginBottom: "30px",
    textDecoration: "none",
    color: "#3E3D3F",
    transform: "translateX(430px)",
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
    marginBottom: "5px",
  };

  const lineStyle: CSSProperties = {
    position: "relative",
    width: "100%",
    height: "1px",
    backgroundColor: "#3E3D3F",
    boxShadow: "0 4px 3px rgba(80, 80, 80, 0.35)",
    margin: "0 auto",
  };

  const arrowTopStyle: CSSProperties = {
    position: "absolute",
    right: "0px",
    top: "0px",
    width: "13px",
    height: "1px",
    backgroundColor: "#3E3D3F",
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
            <span
                style={textStyle}
              >
                {children}
              </span>

          <div className="detail-button__track">

            <div className="detail-button__item">
              

              <div style={lineStyle}>
                    <span style={arrowTopStyle} />
              </div>
            </div>

              <div style={lineStyle}>
                    <span style={arrowTopStyle} />
              </div>
            </div>

        </div>
    </Link>
  );
}