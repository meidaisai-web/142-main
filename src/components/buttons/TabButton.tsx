import React, { forwardRef } from 'react';

type TabButtonProps = {
  label: string;
  isActive: boolean;
  onClick: () => void;
};

const TabButton = forwardRef<HTMLButtonElement, TabButtonProps>(
  ({ label, isActive, onClick }, ref) => {
    const baseClasses =
      'relative flex-1 flex flex-col items-center justify-center pb-[13px] pt-4';
    // 下線は親のインジケータに任せるので、ここでは色だけでOK
    const stateClasses = isActive
      ? 'text-secondary-text'
      : 'text-primary-text';

    return (
      <button
        type="button"
        className={`${baseClasses} ${stateClasses}`}
        onClick={onClick}
        ref={ref}
      >
        <p className="text-sm font-bold leading-normal tracking-[0.015em]">
          {label}
        </p>
      </button>
    );
  }
);

TabButton.displayName = 'TabButton';
export default TabButton;
