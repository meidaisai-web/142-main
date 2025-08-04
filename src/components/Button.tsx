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
                <div className="-rotate-6 rounded-full border-4 border-secondary py-4 absolute py-2 px-24" />
                <div className={`font-bold rounded-full hover:bg-gray-300 transition duration-300 bg-accent text-black py-2 px-16 absolute ${className}`}>
                    {children}                        
                </div>
            </Link>
        </div>     
    )
}