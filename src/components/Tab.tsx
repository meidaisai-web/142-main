import { Fragment, ReactNode, useEffect, useRef, useState } from "react";
import TabButton from "./buttons/TabButton";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";

interface TabProps {
    tabs: {
        key: number;
        label: string;
        content: ReactNode;
    }[];
}

export default function Tab({ tabs }: TabProps) {
    const [active, setActive] = useState(0);
    const contentRef = useRef<SwiperType | null>(null);
    const buttonRefs = useRef<HTMLButtonElement[]>([]);
    buttonRefs.current = [];

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
        el.style.transition = 'transform 200ms, width 200ms';
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
            <div className="relative mt-10">
                <div ref={tabsWrapRef} className="flex">
                    {tabs.map((tab, index) => (
                        <Fragment key={tab.key}>
                            <TabButton
                                label={tab.label}
                                isActive={active === index}
                                onClick={() => go(index)}
                                ref={(el) => {
                                    if (el) buttonRefs.current[index] = el;
                                }}
                            />
                            {index < tabs.length - 1 && (
                                <div className="w-1 bg-white/70 my-2" />
                            )}
                        </Fragment>
                    ))}
                </div>
                <div
                    ref={indicatorRef}
                    aria-hidden
                    className={`pointer-events-none absolute bottom-0 h-[3px] bg-white`}
                    style={{
                        transform: `translateX(${indicator.left}px)`,
                        width: `${indicator.width}px`,
                    }}
                />
            </div>

            <Swiper
                spaceBetween={100}
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
                className="mt-10"
            >
                {tabs.map((tab) => (
                    <SwiperSlide key={tab.key} className="px-5">
                        {tab.content}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
