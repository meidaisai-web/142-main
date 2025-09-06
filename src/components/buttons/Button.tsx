import React from 'react';
import Link from "next/link";


type ButtonProps = {
    className?: string;
    children: React.ReactNode;
    href: string;
}

export default function Button({ className, children, href }: ButtonProps) {
    return (
        <div className={`${className} relative p-5 h-24`}>
            <Link href={href} className="absolute -translate-x-1/2 left-1/2 whitespace-nowrap">
                <div className='-rotate-3 rounded-full border-4 border-secondary py-3 px-20 sm:px-30 text-center absolute -translate-x-1/2 left-1/2'>
                    <p className='opacity-0'>{children}</p>
                </div>
                <div className='font-bold rounded-full hover:bg-accent-700 transition duration-100 bg-accent text-black py-3 px-20 sm:px-30 absolute z-10 -translate-x-1/2 left-1/2'>
                    {children}
                </div>
            </Link>
        </div>
    )
}