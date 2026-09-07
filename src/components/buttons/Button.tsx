import { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";

type ButtonProps = {
    children: ReactNode;
    href?: string;
    className?: string;
    target?: string;
    onClick?: () => void;
    disabled?: boolean;
};

export default function Button({
    children,
    href = "/",
    target,
    className = "",
    onClick,
    disabled = false,
}: ButtonProps) {
    return (
        <Link
            href={href}
            target={target}
            onClick={(e) => {
                if (disabled) {
                    e.preventDefault();
                    return;
                }
                onClick?.();
            }}
            className={`
                flex items-center justify-center
                gap-1
                px-5
                py-1
                rounded-full
                bg-secondary
                text-white
                transition-colors duration-100
                hover:bg-accent
                ${disabled ? "opacity-50 pointer-events-none" : ""}
                ${className}
            `}
        >
            <span className="whitespace-nowrap text-sm font-bold">
                {children}
            </span>

            <Image src="/images/svg/arrow-white.svg" width={20} height={20} alt="矢印" className="w-3 h-3" />
        </Link>
    );
}