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
    <span className={`${sizeClass} [text-shadow:0px_4px_2px_rgba(0,0,0,0.20)] tracking-widest w-full px-18 sm:px-20 md:px-25 lg:px-40 py-10 text-text ${className}`.trim()}>
      {children}
    </span>
  );
};

export default ShadowText;