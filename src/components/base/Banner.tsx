'use client'
import Image from 'next/image';
import Link from 'next/link';
import { Ad } from '@/utils/models/AdType';

type BannerProps = {
    adData: Ad;
};

// バナーは全種類共通のサイズにし、アスペクト比(450:100)を保ったまま画面幅に合わせて縮小されるようにした
export default function Banner({ adData }: BannerProps) {

    const href = adData.url;
    const src = adData.src;

    return (
        <Link
            id={adData.id}
            href={href}
            className="relative block w-full max-w-[450px] aspect-[9/2]"
            target='_blank'
            suppressHydrationWarning
        >
            <Image
                src={src}
                alt="Banner Image"
                fill
                className="object-cover"
                suppressHydrationWarning
            />
        </Link>
    );
}