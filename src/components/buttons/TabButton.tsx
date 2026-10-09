import React, { forwardRef } from 'react';

type TabButtonProps = {
  label: string;
  isActive: boolean;
  onClick: () => void;
};

const TabButton = forwardRef<HTMLButtonElement, TabButtonProps>(
  ({ label, isActive, onClick }, ref) => {
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
        <p className="font-bold leading-normal tracking-[0.015em]">
          {label}
        </p>
      </button>
    );
  }
);

TabButton.displayName = 'TabButton';
export default TabButton;
