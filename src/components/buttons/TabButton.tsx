import React from 'react';

type TabButtonProps = {
    label: string;
    isActive: boolean;
    onClick: () => void;
};

export default function TabButton({ label, isActive, onClick }: TabButtonProps) {
    const baseClasses = 'flex-1 flex flex-col items-center justify-center border-b-[3px] pb-[13px] pt-4';
    const stateClasses = isActive
        ? 'border-b-secondary-text text-secondary-text'
        : 'border-b-transparent text-primary-text';

    return (
        <button
            type="button"
            className={`${baseClasses} ${stateClasses}`}
            onClick={onClick}
        >
            <p className="text-sm font-bold leading-normal tracking-[0.015em]">
                {label}
            </p>
        </button>
    );
}