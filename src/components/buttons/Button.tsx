import React from 'react';
import Link from "next/link";

type ButtonProps = {
    className?: string;
    children: React.ReactNode;
    href?: string;
    onClick?: () => void;
    disabled?: boolean;
    targetBlank?: boolean;
}

export default function Button({ className, children, href, onClick, disabled, targetBlank }: ButtonProps) {
    return (
        <div className={`${className} relative p-5 h-24`}>
            {
                href ? (
                    <Link href={href} target={targetBlank ? "_blank" : "_self"} className="absolute -translate-x-1/2 left-1/2 whitespace-nowrap">
                        <ButtonContent>
                            {children}
                        </ButtonContent>
                    </Link>
                ) : (
                    <button onClick={onClick} disabled={disabled} className="absolute -translate-x-1/2 left-1/2 whitespace-nowrap cursor-pointer">
                        <ButtonContent disabled={disabled}>
                            {children}
                        </ButtonContent>
                    </button>
                )
            }

        </div>
    )
}

function ButtonContent({ children, disabled }: { children: React.ReactNode, disabled?: boolean }) {
    return (
        <>
            <div className={`-rotate-3 rounded-full border-4 border-secondary py-3 px-20 sm:px-30 text-center absolute -translate-x-1/2 left-1/2`}>
                <p className='opacity-0'>{children}</p>
            </div>
            <div className={`font-bold rounded-full hover:bg-accent-700 transition duration-100 bg-accent text-black py-3 px-20 sm:px-30 absolute z-10 -translate-x-1/2 left-1/2 ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}>
                {children}
            </div>
        </>
    )
}