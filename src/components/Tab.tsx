'use client';

import { Fragment, ReactNode, useEffect, useRef, useState } from "react";
import Image from "next/image";
import TabButton from "./buttons/TabButton";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import "swiper/css";

interface TabProps {
    tabs: {
        key: number;
        label: string;
        content: ReactNode;
    }[];
    showTriangle?: boolean;
    closer?: boolean;
    buttonStyle?: boolean;
    /** 選択中のタブの上の角に置く飾り画像。先頭のタブは左上、それ以外は左右反転して右上 */
    cornerImage?: string;
    /** true のとき、タブクリック・スワイプ時のスライドとインジケーター移動をアニメーションなしで即座に切り替える */
    instant?: boolean;
}

export default function Tab({ tabs, showTriangle, closer, buttonStyle, cornerImage, instant }: TabProps) {
    const [active, setActive] = useState(0);
    const contentRef = useRef<SwiperType | null>(null);
    const buttonRefs = useRef<HTMLButtonElement[]>([]);

    const [indicator, setIndicator] = useState({ left: 0, width: 0 });
    const indicatorRef = useRef<HTMLDivElement | null>(null);
    const tabsWrapRef = useRef<HTMLDivElement | null>(null);

    /**
     * 指定されたインデックスのタブに遷移する
     * アクティブ状態を更新し、インジケーターをアニメーション付きで移動させ、コンテンツをスライドさせる
     */
    const go = (idx: number) => {
        setActive(idx);

        enableIndicatorTransition();
        contentRef.current?.slideTo(idx);

        snapIndicatorToIndex(idx);
    };

    /**
     * インジケーターを指定されたインデックスのタブ位置に即座に移動させる
     * タブボタンの位置とサイズを取得し、インジケーターの位置と幅を設定する
     */
    const snapIndicatorToIndex = (idx: number) => {
        const wrapLeft = tabsWrapRef.current?.getBoundingClientRect().left ?? 0;
        const btn = buttonRefs.current[idx];
        if (!btn) return;
        const rect = btn.getBoundingClientRect();
        setIndicator({
            left: rect.left - wrapLeft,
            width: rect.width,
        });
    };

    /**
     * インジケーターを2つのタブ間で線形補間して移動させる
     * スワイプ中のスムーズなインジケーター移動を実現するための関数
     * @param i - 開始タブのインデックス
     * @param frac - 補間率（0.0～1.0、0が開始タブ位置、1が次のタブ位置）
     */
    const lerpIndicator = (i: number, frac: number) => {
        const wrapLeft = tabsWrapRef.current?.getBoundingClientRect().left ?? 0;
        const a = buttonRefs.current[i];
        const b = buttonRefs.current[i + 1];

        if (!a) return;
        const ra = a.getBoundingClientRect();
        const la = ra.left - wrapLeft;
        const wa = ra.width;

        if (!b || frac <= 0) {
            setIndicator({ left: la, width: wa });
            return;
        }

        const rb = b.getBoundingClientRect();
        const lb = rb.left - wrapLeft;
        const wb = rb.width;

        const left = la + (lb - la) * Math.min(Math.max(frac, 0), 1);
        const width = wa + (wb - wa) * Math.min(Math.max(frac, 0), 1);
        setIndicator({ left, width });
    };

    /**
     * インジケーターのトランジション（アニメーション）を有効化する
     * タブクリック時などの滑らかな移動を実現する
     */
    const enableIndicatorTransition = () => {
        const el = indicatorRef.current;
        if (!el) return;
        el.style.transition = instant ? 'none' : 'transform 200ms, width 200ms';
    };

    /**
     * インジケーターのトランジション（アニメーション）を無効化する
     * スワイプ中のリアルタイムな追従動作に使用される
     */
    const disableIndicatorTransition = () => {
        const el = indicatorRef.current;
        if (!el) return;
        el.style.transition = 'none';
    };


    useEffect(() => {
        snapIndicatorToIndex(active);
        const onResize = () => snapIndicatorToIndex(active);
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);

    }, []);

    return (
        <div className="w-full">
            {buttonStyle && (
                <div className="w-full px-5 -mt-50">
                <div className="flex items-end w-full max-w-4xl mx-auto gap-4 sm:gap-8">
                    {tabs.map((tab, index) => (
                        <button
                            key={tab.key}
                            type="button"
                            onClick={() => go(index)}
                            className={`flex-1 min-w-0 relative flex items-center justify-center gap-2 text-black font-bold ${
                                active === index ? 'h-[48px] pb-2 bg-[#F8CAD1] rounded-t-[20px] rounded-b-none' : 'h-[40px] bg-[#AEDBD4] hover:bg-[#9AD2C9] rounded-[40px] mb-2'
                            }`}
                        >
                            {cornerImage && active === index && (
                                <Image
                                    src={cornerImage}
                                    alt=""
                                    aria-hidden
                                    width={275}
                                    height={253}
                                    className={`pointer-events-none absolute top-0 h-auto w-8 sm:w-12 -translate-y-3/5 ${
                                        index === 0 ? 'left-0 -translate-x-3/5' : 'right-0 translate-x-3/5 -scale-x-100'
                                    }`}
                                />
                            )}
                            {tab.label}
                            {showTriangle && (
                                <svg width="24" height="20" viewBox="-1 -1 12 10" fill="white" stroke="white" strokeWidth="1.2" strokeLinejoin="round" aria-hidden className={`shrink-0 h-auto w-4 sm:w-6 sm:absolute sm:right-[32px] sm:top-1/2 sm:-translate-y-1/2 ${active === index ? 'rotate-180 transition-transform duration-300' : 'rotate-0'}`}>
                                    {/* 下向き三角。選択されると時計回りに回転して上向き（180度）になる */}
                                    <path d="M5 8L0 0H10z" />
                                </svg>
                            )}
                        </button>
                    ))}
                </div>
                </div>
            )}
            <div className={`relative mt-10 ${buttonStyle ? 'hidden' : ''}`}>
                <div ref={tabsWrapRef} className="flex">
                    {tabs.map((tab, index) => (
                        <Fragment key={tab.key}>
                            <TabButton
                                label={tab.label}
                                isActive={active === index}
                                showTriangle={showTriangle}
                                inset={closer ? (index === 0 ? 'left' : index === tabs.length - 1 ? 'right' : undefined) : undefined}
                                onClick={() => go(index)}
                                ref={(el) => {
                                    if (el) buttonRefs.current[index] = el;
                                }}
                            />
                            {index < tabs.length - 1 && (
                                <div className="w-0.5 bg-gray-500 my-2" />
                            )}
                        </Fragment>
                    ))}
                </div>
                <div
                    ref={indicatorRef}
                    aria-hidden
                    className={`pointer-events-none absolute bottom-0 h-0.5 bg-accent-900`}
                    style={{
                        transform: `translateX(${indicator.left}px)`,
                        width: `${indicator.width}px`,
                    }}
                />
            </div>

            <div className="group" data-active={active}>
            <Swiper
                spaceBetween={100}
                speed={instant ? 0 : 300}
                autoHeight
                observer
                observeSlideChildren
                onSwiper={(s) => {
                    contentRef.current = s;
                    enableIndicatorTransition();
                }}
                onSlideChange={(s) => {
                    setActive(s.activeIndex);
                    enableIndicatorTransition();
                    snapIndicatorToIndex(s.activeIndex);
                }}
                onProgress={(s, progress) => {
                    disableIndicatorTransition();

                    const maxSeg = tabs.length - 1;
                    const t = Math.min(Math.max(progress * maxSeg, 0), maxSeg);
                    const i = Math.floor(t);
                    const frac = t - i;

                    lerpIndicator(i, frac);
                }}
                onTouchStart={() => {
                    disableIndicatorTransition();
                }}
                onTouchEnd={() => {
                    enableIndicatorTransition();
                }}
                className={buttonStyle ? 'mt-0' : 'mt-10'}
            >
                {tabs.map((tab) => (
                    <SwiperSlide key={tab.key} className="px-5 pt-0">
                        {tab.content}
                    </SwiperSlide>
                ))}
            </Swiper>
            </div>
        </div>
    );
}
