import { ReactNode } from 'react';

type AccentTextProps = {
  children: ReactNode;
  className?: string;
};

export default function AccentText({ children, className }: AccentTextProps) {
  return (
    <div className={`-ml-5 flex items-center gap-[0.3em] ${className ?? ''}`}>
      <div className="w-[1em] h-[1em] rounded-full bg-gradient-to-tr from-primary to-secondary shrink-0" />
      <h1 className="font-bold">{children}</h1>
    </div>
  );
}