import React, { ReactNode } from 'react';

type ShadowTextProps = {
  children: ReactNode;
  sizeClass?: string;
  className?: string;
};

const ShadowText = ({
  children,
  sizeClass = 'text-3xl font-bold',
  className = ''
}: ShadowTextProps) => {
  return (
    <span className={`${sizeClass} [text-shadow:0px_4px_2px_rgba(0,0,0,0.20)] tracking-widest text-text ${className}`.trim()}>
      {children}
    </span>
  );
};

export default ShadowText;