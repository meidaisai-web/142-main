import { ReactNode } from "react";
import { delaGothic } from "@/utils/fonts";

type PageTitleProps = {
  children: ReactNode;
  className?: string;
};

export default function PageTitle({ children, className = "" }: PageTitleProps) {
  return (
    <div className={`relative w-full p-6 md:p-12 text-center ${className}`}>
      {/* タイトル本体 */}
      <h1 className={`relative inline-flex items-center justify-center gap-4 md:gap-8 text-white text-xl sm:text-2xl md:text-4xl font-extrabold ${delaGothic.className}`}>
        {/* 左側の斜線 */}
        <span
          aria-hidden
          className="relative block w-16 md:w-32 h-0.5 md:h-1.5 bg-secondary rotate-[30deg] shrink-0"
        />
        
        {/* 中央のテキスト部分 */}
        <span className="relative whitespace-pre-wrap text-center dela-font">
          {children}
          {/* 下部の黄ライン */}
          <span
            aria-hidden
            className="absolute left-1/2 -translate-x-1/2 -bottom-2 md:-bottom-4 block h-0.5 md:h-1 bg-accent"
            style={{ width: "50%" }}
          />
        </span>
        
        {/* 右側の斜線 */}
        <span
          aria-hidden
          className="relative block w-16 md:w-32 h-0.5 md:h-1.5 bg-secondary rotate-[-30deg] shrink-0"
        />
      </h1>
    </div>
  );
}