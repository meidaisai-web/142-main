'use client'

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Ad } from '@/utils/models/AdType';

type StickyBannerProps = {
    adData: Ad;
}

export default function StickyBanner({ adData }: StickyBannerProps) {
    const [isVisible, setIsVisible] = useState(true);
    const pathname = usePathname();

    useEffect(() => {
        if (pathname === '/') {
            setIsVisible(false);
        } else {
            setIsVisible(true);
        }
    }, [pathname]);

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 md:hidden w-screen max-w-[375px] z-40 object-contain flex justify-center">
            <Link href={adData.url} target='_blank'>
                <Image src={adData.src} alt="logo" width={375} height={83} className='object-contain' />
            </Link>
        </div>
    );
};