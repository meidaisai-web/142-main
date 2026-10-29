import React, { forwardRef } from 'react';

type TabButtonProps = {
  label: string;
  isActive: boolean;
  onClick: () => void;
  showTriangle?: boolean;
  // 文字を内側に寄せる (全角6文字分)
  inset?: 'left' | 'right';
};

const TabButton = forwardRef<HTMLButtonElement, TabButtonProps>(
  ({ label, isActive, onClick, showTriangle, inset }, ref) => {
    const baseClasses =
      'relative flex-1 flex flex-col items-center justify-center h-16 cursor-pointer transition-all duration-250 focus:outline-none';
    // 下線は親のインジケータに任せるので、ここでは色だけでOK
    const stateClasses = isActive
      ? 'text-accent-900 text-lg sm:text-xl'
      : 'text-gray-500 text-base sm:text-lg';

    return (
      <button
        type="button"
        className={`${baseClasses} ${stateClasses}`}
        onClick={onClick}
        ref={ref}
      >
        <p className={`text-sm font-bold leading-normal tracking-[0.015em] flex items-center gap-1 ${
          inset === 'left' ? 'pl-[6em]' : inset === 'right' ? 'pr-[6em]' : ''
        }`}>
          {label}
          {showTriangle && (
            <svg width="10" height="8" viewBox="0 0 10 8" fill="currentColor" aria-hidden>
              {isActive ? <path d="M5 0L10 8H0z" /> : <path d="M5 8L0 0H10z" />}
            </svg>
          )}
        </p>
      </button>
    );
  }
);

TabButton.displayName = 'TabButton';
export default TabButton;
