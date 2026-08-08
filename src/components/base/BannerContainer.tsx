'use client'

import { adData, smallAdData } from "@/utils/datas/adData";
import Banner from "./Banner";
import { shuffleArray } from "@/utils/arrayManager";
import { useEffect, useState, useRef, useCallback, RefObject } from "react";
import StickyBanner from "./StickyBanner";
import { useGetElementProperty } from "@/hooks/useGetElementProperty";

export default function BannerContainer() {

    const ref = useRef<HTMLDivElement>(null);
    const { getElementProperty } = useGetElementProperty<HTMLDivElement>(ref as RefObject<HTMLDivElement>);

    const [shuffledAds, setShuffledAds] = useState(adData);
    const [shuffledSmallAds, setShuffledSmallAds] = useState(smallAdData);

    const [isBannerVisible, setIsBannerVisible] = useState(false);

    function changeAds() {
        const newAds = [...adData]
        const newSmallAds = [...smallAdData]
        setShuffledAds(shuffleArray([...newAds]));
        setShuffledSmallAds(shuffleArray([...newSmallAds]));
    };

    useEffect(() => {
        // 初回シャッフル
        setShuffledAds(shuffleArray([...adData]));
        setShuffledSmallAds(shuffleArray([...smallAdData]));
        changeAds();
        const adsInterval = setInterval(() => {
            changeAds();
            console.log('change ads');
        }, 10000); // 10秒ごとに画像を切り替える

        return () => clearInterval(adsInterval);
    }, []);

    const handleScroll = useCallback(() => {
        if (typeof window === 'undefined') return;
        const { innerHeight } = window;
        if (getElementProperty("y") >= innerHeight) {
            setIsBannerVisible(true);
        } else {
            setIsBannerVisible(false);
        }
    }, []);

    useEffect(() => {
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    return (
        <div className="my-10">
            <div className="flex justify-center items-center">
                {isBannerVisible && <div className="w-screen flex justify-center" id='sticky_banner'><StickyBanner adData={shuffledAds[0]} /></div>}
            </div>
            {/* 画面幅によらず常に2列のグリッドにして、バナーサイズは全枠共通にした */}
            <section className='w-[80vw] mx-auto flex flex-col items-center gap-6'>
                <div className="w-full max-w-[1000px] grid grid-cols-2 gap-4 sm:gap-6 justify-items-center items-center" ref={ref}>
                    <Banner adData={shuffledAds[0]} />
                    <Banner adData={shuffledAds[1]} />
                    <Banner adData={shuffledAds[2]} />
                    <Banner adData={shuffledSmallAds[0]} />
                    <Banner adData={shuffledSmallAds[1]} />
                </div>
            </section>
        </div>
    );
}