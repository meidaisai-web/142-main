import { ReactNode } from "react";
import Link from "next/link";

type ButtonProps = {
    children: ReactNode;
    href?: string;
    className?: string;
};

export default function Button({
    children,
    href = "/",
    className = "",
}: ButtonProps) {
    return (
        <Link
            href={href}
            className={`
                flex items-center justify-center
                gap-3
                w-[120px]
                h-[40px]
                rounded-full
                bg-accent
                text-white
                text-[24px]
                font-light
                transition-colors duration-100
                hover:bg-secondary
                ${className}
            `}
        >
            <span className="whitespace-nowrap text-[20px]">
                {children}
            </span>

            <span className="shrink-0 text-[20px] font-thin leading-none">
                ＞
            </span>
        </Link>
    );
}