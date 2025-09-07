import React from "react";

type EmphasisProps = {
    children: React.ReactNode;
    bold?: boolean;
}

export default function Emphasis({ children, bold = false }: EmphasisProps) {
    return (
        <span className={`relative ${bold ? 'text-xl font-bold' : 'font-medium'}`}>
            <span className="absolute left-0 bottom-0 w-full h-2 bg-secondary-trans -z-10" />
            {children}
        </span>
    )
}