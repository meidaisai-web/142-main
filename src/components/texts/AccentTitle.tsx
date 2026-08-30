import { ReactNode } from 'react';

type AccentTextProps = {
  children: ReactNode;
  className?: string;
};

export default function AccentText({ children, className }: AccentTextProps) {
  return (
    // 指示1: -ml-数字（ネガティブマージン）を全体の親div（10行目）に付与できるよう className をそのまま適用
    // 例: <AccentText className="-ml-3"> のように呼び出し側から微調整可能です
    <div className={`flex items-center gap-[0.3em] ${className ?? ''}`}>
      {/* 1em = 文字の高さと同じ大きさに自動調整 */}
      {/* 指示2: カラーを #70c9ba 等のカラーコードから global.css の変数定義（primary, secondary, accentなど）に変更 */}
      {/* ※必要に応じて from-primary via-secondary to-accent など調整してください */}
      <div className="w-[1em] h-[1em] rounded-full bg-gradient-to-tr from-primary via-secondary to-accent shrink-0" />
      
      {/* 指示3: 文字を太字にするため font-bold を追加 */}
      <h1 className="font-bold">{children}</h1>
    </div>
  );
}