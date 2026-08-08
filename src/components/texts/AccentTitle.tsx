import { ReactNode } from 'react';

type AccentTextProps = {
  children: ReactNode;
  className?: string;
};

export default function AccentText({ children, className }: AccentTextProps) {
  return (
    <div className={`flex items-center gap-[0.3em] ${className ?? ''}`}>
      {/* 1em = 文字の高さと同じ大きさに自動調整 */}
      <div className="w-[1em] h-[1em] rounded-full bg-gradient-to-tr from-[#70c9ba] via-[#c4b5c7] to-[#f2a4b8] shrink-0" />
      <h1 className="">{children}</h1>
    </div>
  );
}