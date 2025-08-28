import { ReactNode } from "react";
import { delaGothic } from "@/utils/fonts";

type PageTitleProps = {
  children: ReactNode;
  className?: string;
};

export default function PageTitle({ children, className = "" }: PageTitleProps) {
  return (
    <div className={`relative w-full p-9 md:p-15 text-center ${className}`}>
      {/* タイトル本体 */}
      <h1 className={`relative inline-flex items-center justify-center gap-4 md:gap-8 text-white text-xl sm:text-2xl md:text-4xl font-extrabold ${delaGothic.className}`}>
        {/* 中央のテキスト部分 */}
        <span className="relative whitespace-pre-wrap text-center dela-font">
          {children}
          {/* 下部の黄ライン */}
          <span
            aria-hidden
            className="absolute left-1/2 -translate-x-1/2 -bottom-2 md:-bottom-4 block h-1 bg-accent rounded-[2px] md:rounded-[2px] w-1/3"
          />
        </span>
      </h1>
    </div>
  );
}