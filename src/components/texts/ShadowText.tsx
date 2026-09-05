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
    <div className={`${sizeClass} [text-shadow:0px_4px_2px_rgba(0,0,0,0.20)] tracking-widest w-full px-10 py-10 text-center text-text`}>
      {children}
    </div>
  );
};

export default ShadowText;