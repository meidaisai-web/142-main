'use client'
import Image from 'next/image';
import Link from 'next/link';
import { Ad } from '@/utils/models/AdType';

type BannerProps = {
    type: 'long' | 'short';
    adData: Ad;
};

export default function Banner({ type, adData }: BannerProps) {

    const href = adData.url;
    const src = adData.src;

    const bannerWidth = type === 'long' ? 'w-[300px] lg:w-[450px]' : 'w-[142px] lg:w-[213px]';
    const bannerHeight = type === 'long' ? 'w-[67px] lg:h-[100px]' : 'w-[63px] lg:h-[95px]';

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
        <Link
            id={`${type}_banner`}
            href={href}
            className={`block ${bannerWidth} ${bannerHeight}`}
            target='_blank'
            suppressHydrationWarning
        >
            <div id={adData.id} className={`block ${bannerWidth} ${bannerHeight} relative`} suppressHydrationWarning>
                {BannerImage}
            </div>
        </Link>
    );
}