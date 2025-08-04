import React from 'react';
import Link from "next/link";


type ButtonProps = {
    className?: string;
    children: React.ReactNode;
    href: string;
}

export default function Button({ className, children, href }: ButtonProps) {
    return(
        <div className='relative'>
           <Link href={href}>
                <div className={`-rotate-6 rounded-full border-2 sm:border-4  border-secondary  absolute py-3 px-20 sm:px-30 text-center ${className}`}>
                    <p className='opacity-0'>{children}</p>
                </div>
                <div className={`font-bold rounded-full hover:bg-accent-700 transition duration-300 bg-accent text-black py-3 px-20 sm:px-30 absolute ${className}`}>
                    {children}                        
                </div>
            </Link>
        </div>     
    )
}