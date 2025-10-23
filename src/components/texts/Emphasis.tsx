import React from "react";

type EmphasisProps = {
    children: React.ReactNode;
    bold?: boolean;
    accent?: boolean;
}

export default function Emphasis({ children, bold = false, accent = false }: EmphasisProps) {
    return (
        <span
            className={`${bold ? 'text-xl font-bold' : 'font-medium'}`}
            style={{
                backgroundImage: `${accent ? 'linear-gradient(transparent 60%, var(--color-accent) 60%)' :'linear-gradient(transparent 60%, var(--color-secondary-trans) 60%)'}`,
                backgroundSize: '100% 1.2em',
                backgroundRepeat: 'repeat',
                backgroundPosition: '0 0'
            }}
        >
            {children}
        </span>
    )
}