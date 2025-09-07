'use client'

import { adData, smallAdData } from "@/utils/adData";
import Banner from "./Banner";
import { shuffleArray } from "@/utils/arrayManager";
import { useEffect, useState, useRef, useCallback, RefObject } from "react";
import StickyBanner from "./StickyBanner";
import { useGetElementProperty } from "@/utils/useGetElementProperty";
import { logEvent } from "@/utils/supabase/analytics";
import { sendClickBanner } from "@/utils/gtm";

export default function BannerContainer() {

    const ref = useRef<HTMLDivElement>(null);
    const { getElementProperty } = useGetElementProperty<HTMLDivElement>(ref as RefObject<HTMLDivElement>);

    const [shuffledAds, setShuffledAds] = useState(adData);
    const [shuffledSmallAds, setShuffledSmallAds] = useState(smallAdData);

    const [isBannerVisible, setIsBannerVisible] = useState(true);

    function changeAds() {
        const newAds = [...adData]
        const newSmallAds = [...smallAdData]
        setShuffledAds(shuffleArray([...newAds]));
        setShuffledSmallAds(shuffleArray([...newSmallAds]));
    };

    function clickBanner1() {
        logEvent({ eventName: 'click_banner', eventData: shuffledAds[0].id, option: 'long' });
        sendClickBanner(shuffledAds[0].id);
    }
    function clickBanner2() {
        logEvent({ eventName: 'click_banner', eventData: shuffledAds[1].id, option: 'long' });
        sendClickBanner(shuffledAds[1].id);
    }
    function clickBanner3() {
        logEvent({ eventName: 'click_banner', eventData: shuffledAds[2].id, option: 'long' });
        sendClickBanner(shuffledAds[2].id);
    }
    function clickBanner4() {
        logEvent({ eventName: 'click_banner', eventData: shuffledSmallAds[0].id, option: 'short' });
        sendClickBanner(shuffledSmallAds[0].id);
    }
    function clickBanner5() {
        logEvent({ eventName: 'click_banner', eventData: shuffledSmallAds[1].id, option: 'short' });
        sendClickBanner(shuffledSmallAds[1].id);
    }
    function clickBanner6() {
        logEvent({ eventName: 'click_banner', eventData: shuffledAds[0].id, option: 'sticky' });
        sendClickBanner(shuffledAds[0].id);
    }

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
        <div className="my-10">
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