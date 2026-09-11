'use client'

import Link from 'next/link';
import Image from 'next/image';
import { Ad } from '@/utils/models/AdType';

type StickyBannerProps = {
    adData: Ad;
}

export default function StickyBanner({ adData }: StickyBannerProps) {
    return (
        <div className="md:hidden fixed bottom-0 left-1/2 -translate-x-1/2 w-[340px] z-40 flex justify-center">
            <Link id='sticky_banner' href={adData.url} target='_blank'>
                <Image id={adData.id} src={adData.src} alt="logo" width={340} height={60} className='object-contain' />
            </Link>
        </div>
    );
};