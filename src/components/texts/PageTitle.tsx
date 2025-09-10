import { ReactNode } from "react";
import { delaGothic } from "@/utils/fonts";

type PageTitleProps = {
  children: ReactNode;
  className?: string;
};

export default function PageTitle({ children, className = "" }: PageTitleProps) {
  return (
    <div className={`px-9 md:px-15 pt-28 text-center ${className}`}>
      {/* タイトル本体 */}
      <div className={`relative inline-flex items-center justify-center gap-4 md:gap-8 text-white ${delaGothic.className}`}>
        {/* 中央のテキスト部分 */}
        <h1 className="relative whitespace-pre-wrap text-center text-3xl">
          {children}
        </h1>
        <div
          aria-hidden
          className="absolute left-1/2 -translate-x-1/2 -bottom-2 md:-bottom-4 block h-1 bg-accent rounded-[2px] md:rounded-[2px] w-1/3"
        />
      </div>
    </div>
  );
}