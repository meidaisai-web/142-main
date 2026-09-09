"use client";

import { useState } from "react";
import Link from "next/link";
import type { ReactNode } from "react";

type DetailButtonProps = {
  href: string;
  className?: string;
  children?: ReactNode;
};

export default function DetailButton({
  href,
  className = "",
  children = "詳しくはこちら",
}: DetailButtonProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div className={`ml-auto w-fit ${className}`}>
      <Link
        href={href}
        className={"inline-block"}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="w-full">
          <span className="block text-center text-sm px-5 font-medium tracking-[0.04em] leading-[1.2] text-text [text-shadow:0px_4px_3px_rgba(80,80,80,0.35)] mb-[1px]">
            {children}
          </span>
          <div className="relative w-full h-4 overflow-hidden" >
            <div className={`absolute left-0 top-[6px] w-full h-[1px] ${hovered ? "transition-transform duration-500 ease-in-out translate-x-39" : "transition-none translate-x-0"}`}>
              <span className="absolute left-0 top-0 w-full h-[1px] bg-text shadow-[0px_4px_3px_rgba(80,80,80,0.35)]" />
              <span className="absolute right-0 top-0 w-3 h-[1px] bg-text rotate-[40deg] origin-right shadow-[0px_4px_3px_rgba(80,80,80,0.35)]" />
            </div>
            <div className={`absolute left-0 top-[6px] w-full h-[1px] ${hovered ? "transition-transform duration-500 delay-500 eas-in-out translate-x-0" : "transition-none -translate-x-39"}`}>
              <span className="absolute left-0 top-0 w-full h-[1px] bg-text shadow-[0px_4px_3px_rgba(80,80,80,0.35)]" />
              <span className="absolute right-0 top-0 w-3 h-[1px] bg-text rotate-[40deg] origin-right shadow-[0px_4px_3px_rgba(80,80,80,0.35)]" />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}