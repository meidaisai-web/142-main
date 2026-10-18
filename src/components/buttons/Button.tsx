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
}: ButtonProps) {
    const sizeClasses = size === "lg"
        ? "w-full max-w-72 sm:max-w-80 min-h-14 sm:min-h-16 gap-3 px-8 py-3 shadow-[0_5px_0_#72b4ad,0_8px_14px_rgba(80,140,132,0.16)] transition-[background-color,box-shadow,transform,translate] duration-200 hover:-translate-y-0.5 hover:shadow-[0_7px_0_#72b4ad,0_10px_18px_rgba(80,140,132,0.18)] active:translate-y-1 active:shadow-[0_1px_0_#72b4ad,0_3px_6px_rgba(80,140,132,0.12)] disabled:translate-y-0 disabled:shadow-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-700 motion-reduce:translate-y-0 motion-reduce:transition-none"
        : "w-fit gap-1 px-6 py-2 transition-colors duration-100";
    const classes = `flex items-center justify-center mx-auto rounded-full bg-primary text-white hover:bg-primary-700 ${sizeClasses} ${disabled ? "opacity-50 cursor-not-allowed" : size === "lg" ? "cursor-pointer" : ""} ${className}`;
    const content = (
        <>
            <span className={`whitespace-nowrap font-bold ${size === "lg" ? "text-lg sm:text-xl" : "text-sm"}`}>{children}</span>
            <Image src="/images/svg/arrow-white.svg" width={20} height={20} alt="" className={`select-none ${size === "lg" ? "h-4 w-4 sm:h-5 sm:w-5" : "w-3 h-3"}`} />
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
