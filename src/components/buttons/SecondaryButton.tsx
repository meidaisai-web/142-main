import React from 'react';
import Link from "next/link";


type SecondaryButtonProps = {
    className?: string;
    children: React.ReactNode;
    href: string;
}

export default function SecondaryButton({ className, children, href }: SecondaryButtonProps) {
    return (
        <div className={`${className} relative p-5 h-24`}>
            <Link href={href} className="absolute -translate-x-1/2 left-1/2 whitespace-nowrap">
                <div className='-rotate-3 rounded-full border-4 border-secondary py-3 px-20 sm:px-30 text-center absolute -translate-x-1/2 left-1/2'>
                    <p className='opacity-0'>{children}</p>
                </div>
                <div className='font-bold rounded-full hover:bg-secondary transition duration-100 border-4 border-accent py-3 px-20 sm:px-30 absolute z-10 -translate-x-1/2 left-1/2'>
                    {children}
                </div>
            </Link>
        </div>
    )
}