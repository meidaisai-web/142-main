import React from "react";

type EmphasisProps = {
    children: React.ReactNode;
    bold?: boolean;
    secondary?: boolean;
    center?: boolean;
    className?: string;
}

export default function Emphasis({
    children,
    bold = false,
    secondary = false,
    className = ""
}: EmphasisProps) {
    return (
        <span
            className={`${bold ? 'text-xl font-bold' : 'font-semibold'} ${className}`}
            style={{
                backgroundImage: `${secondary
                    ? 'linear-gradient(transparent 60%, var(--color-secondary) 60%)'
                    : 'linear-gradient(transparent 60%, var(--color-accent-100) 50%)'}`,
                backgroundSize: '100% 1.2em',
                backgroundRepeat: 'repeat',
                backgroundPosition: '0 0'
            }}
        >
            {children}
        </span>
    );
}