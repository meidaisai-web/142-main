"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";

type ButtonProps = {
    children: ReactNode;
    href?: string;
    className?: string;
    down?: boolean;
    target?: string;
    onClick?: () => void;
    disabled?: boolean;
    type?: "button" | "submit" | "reset";
    size?: "md" | "lg";
};

export default function Button({
    children,
    href,
    target,
    className = "",
    onClick,
    disabled = false,
    type = "button",
    size = "md",
    down = false
}: ButtonProps) {
    const sizeClasses = size === "lg"
        ? "w-8/12 max-w-80 gap-2 px-6 py-2 sm:py-3 transition-colors duration-100"
        : "w-fit gap-1 px-6 py-2 transition-colors duration-100";
    const classes = `flex items-center justify-center mx-auto rounded-full mt-10 bg-primary text-white hover:bg-primary-700 ${sizeClasses} ${disabled ? "opacity-50 cursor-not-allowed" : size === "lg" ? "cursor-pointer" : ""} ${className}`;
    const content = (
        <>
            <span className={`whitespace-nowrap font-bold ${size === "lg" ? "text-base sm:text-lg" : "text-sm"}`}>{children}</span>
            <Image src="/images/svg/arrow-white.svg" width={20} height={20} alt="" className={`select-none ${size === "lg" ? "h-3 w-3 sm:h-4 sm:w-4" : "w-3 h-3"} ${down ? "rotate-90" : ""}`} />
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
