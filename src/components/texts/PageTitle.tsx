import { ReactNode } from "react";
import { delaGothic } from "@/utils/fonts";

type PageTitleProps = {
  children: ReactNode;
  className?: string;
};

export default function PageTitle({ children, className = "" }: PageTitleProps) {
  return (
    <div className={`relative w-full p-3 md:p-6 text-center ${className}`}>
      {/* タイトル本体 */}
      <h1 className={`inline-block text-white text-xl sm:text-2xl md:text-4xl lg:text-5xl font-extrabold whitespace-nowrap relative p-3 md:p-6 ${delaGothic.className}`}>
        {children}
        {/* 下部の黄ライン */}
        <span
            aria-hidden
            className="absolute left-1/2 -translate-x-1/2 -bottom-5 md:-bottom-7 lg:-bottom-10 block h-0.5 md:h-1 bg-accent rounded"
            style={{ width: "65%" }}
        />
        {/* 左側の斜線 */}
        <span
            aria-hidden
            className="absolute left-0 -translate-x-5/6 block h-0.5 md:h-1 bg-secondary rounded rotate-[30deg]"
            style={{ width: "65%" }}
        />
        {/* 右側の斜線 */}
        <span
            aria-hidden
            className="absolute right-0 translate-x-5/6 block h-0.5 md:h-1 bg-secondary rounded rotate-[-30deg]"
            style={{ width: "65%" }}
        />
      </h1>
    </div>
  );
}