'use client'
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Ad } from '@/utils/models/AdType';

type BannerProps = {
    type: 'long' | 'short';
    adData: Ad;
};

const basePath = '/assets/images/banners';

export default function Banner({ type, adData }: BannerProps) {
    const [isVisible, setIsVisible] = useState(true);

    const href = adData.url;
    const src = adData.src;

    const bannerWidth = type === 'long' ? 'lg:w-[450px] sm:w-[300px]' : 'lg:w-[213px] sm:w-[142px]';
    const bannerHeight = type === 'long' ? 'lg:h-[100px] sm:h-[67px]' : 'lg:h-[95px] sm:h-[63px]';

    const BannerImage = (
        <Image
            src={src}
            alt="Banner Image"
            width={450}
            height={100}
            className={`object-cover ${bannerWidth} ${bannerHeight}`} />
    );

    // その他の場合はリンク付きで表示
    return (
        <Link href={href} className={`block ${bannerWidth} ${bannerHeight}`} target='_blank'>
            <div className={`block ${bannerWidth} ${bannerHeight} relative`}>
                {BannerImage}
            </div>
        </Link>
    );
}