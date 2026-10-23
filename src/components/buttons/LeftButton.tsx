"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";

type ButtonProps = {
    children: ReactNode;
    href?: string;
    className?: string;
    target?: string;
    onClick?: () => void;
    disabled?: boolean;
    type?: "button" | "submit" | "reset";
};

export default function Button({
    children,
    href,
    target,
    className = "",
    onClick,
    disabled = false,
    type = "button",
}: ButtonProps) {
    const classes = `flex items-center justify-center gap-1 px-6 py-2 w-fit mx-auto rounded-full bg-secondary-300 text-white transition-colors duration-100 hover:bg-secondary-900 ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`;
    const content = (
        <>
            <Image src="/images/svg/arrow-white-left.svg" width={20} height={20} alt="" className="w-3 h-3 select-none" />
            <span className="whitespace-nowrap text-sm font-bold">{children}</span>
           
        </>
    );

    // 遷移先があるときだけ Link を使用する。検索等の操作は button。
    if (href !== undefined) {
        return (
            <Link
                href={href}
                target={target}
                aria-disabled={disabled || undefined}
                tabIndex={disabled ? -1 : undefined}
                onClick={(event) => {
                    if (disabled) {
                        event.preventDefault();
                        return;
                    }
                    onClick?.();
                }}
                className={classes}
            >
                {content}
            </Link>
        );
    }

    return (
        <button type={type} disabled={disabled} onClick={onClick} className={classes}>
            {content}
        </button>
    );
}
