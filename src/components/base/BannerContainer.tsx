'use client'

import { adData, smallAdData } from "@/utils/adData";
import Banner from "./Banner";
import { shuffleArray } from "@/utils/shuffleArray";
import { useEffect, useState, useRef, useCallback } from "react";
import StickyBanner from "./StickyBanner";
import { useGetElementProperty } from "@/models/useGetElementProperty";
import { clickBanner } from "@/utils/clickBanner";

export default function BannerContainer() {

    const ref = useRef(null);
    const { getElementProperty } = useGetElementProperty<HTMLDivElement>(ref);

    const [shuffledAds, setShuffledAds] = useState(shuffleArray(adData));
    const [shuffledSmallAds, setShuffledSmallAds] = useState(shuffleArray(smallAdData));

    const [isBannerVisible, setIsBannerVisible] = useState(true);

    function changeAds() {
        const newAds = [...adData]
        const newSmallAds = [...smallAdData]
        setShuffledAds(shuffleArray([...newAds]));
        setShuffledSmallAds([...newSmallAds]);
    };

    function clickBanner1() {
        clickBanner(shuffledAds[0].id, "long");
    }
    function clickBanner2() {
        clickBanner(shuffledAds[1].id, "long");
    }
    function clickBanner3() {
        clickBanner(shuffledAds[2].id, "long");
    }
    function clickBanner4() {
        clickBanner(shuffledSmallAds[0].id, "short");
    }
    function clickBanner5() {
        clickBanner(shuffledSmallAds[1].id, "short");
    }
    function clickBanner6() {
        clickBanner(shuffledAds[0].id, "sticky");
    }

    useEffect(() => {
        changeAds();
        const adsInterval = setInterval(() => {
            changeAds();
            console.log('change ads');
        }, 10000); // 10秒ごとに画像を切り替える

        return () => clearInterval(adsInterval);
    }, []);

    const handleScroll = useCallback(() => {
        if (typeof window === 'undefined') return;
        const { innerHeight, innerWidth } = window;
        if (getElementProperty("y") >= innerHeight && innerWidth < 900) {
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
        <div>
            <div className="flex justify-center items-center">
                {isBannerVisible && <div className="w-[100vw] flex justify-center" onClick={clickBanner6}><StickyBanner adData={shuffledAds[0]} /></div>}
            </div>

            <section className='w-[80vw] mx-auto flex flex-col items-center gap-6'>
                <div className="flex flex-col gap-6 items-center  lg:flex-row lg:flex-wrap lg:justify-center max-w-[1000px]" ref={ref}>
                    <div onClick={clickBanner1}><Banner type="long" adData={shuffledAds[0]} /></div>
                    <div onClick={clickBanner2}><Banner type="long" adData={shuffledAds[1]} /></div>
                    <div onClick={clickBanner3}><Banner type="long" adData={shuffledAds[2]} /></div>
                    <div className="flex gap-6 justify-center">
                        <div onClick={clickBanner4}><Banner type='short' adData={shuffledSmallAds[0]} /></div>
                        <div onClick={clickBanner5}><Banner type='short' adData={shuffledSmallAds[1]} /></div>
                    </div>
                </div>
            </section>
        </div>

    );
}