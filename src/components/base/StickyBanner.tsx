import Link from 'next/link';
import Image from 'next/image';
import { Ad } from '@/utils/models/AdType';

type StickyBannerProps = {
    adData: Ad;
}

export default function StickyBanner({ adData }: StickyBannerProps) {
    return (
        <div className="fixed bottom-0 md:hidden w-screen max-w-[375px] z-40 object-contain flex justify-center">
            <Link id='sticky_banner' href={adData.url} target='_blank'>
                <Image id={adData.id} src={adData.src} alt="logo" width={375} height={83} className='object-contain' />
            </Link>
        </div>
    );
};