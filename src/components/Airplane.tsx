"use client";

import { useEffect, useRef, useState } from "react";

const DOT_SIZE = 14;
const GAP = 16;

export default function DottedLine() {
    const ref = useRef<HTMLDivElement>(null);

    const [isVisible, setIsVisible] = useState(false);
    const [horizontalDotCount, setHorizontalDotCount] = useState(0);
    const [verticalDotCount, setVerticalDotCount] = useState(0);
    const [upperHandedOff, setUpperHandedOff] = useState(false);

    useEffect(() => {
        const updateDotCount = () => {
            const dotWidth = DOT_SIZE;
            const gap = GAP;
            const airplaneWidth = 25;

            // md以上：今まで通り横一列
            const horizontalCount = Math.floor(
                (window.innerWidth - airplaneWidth) / (dotWidth + gap)
            ) - (window.innerWidth <= 370 ? 1 : 0);

            // md以下：横方向は画面幅の約90%まで
            const mobileHorizontalCount =
                Math.floor((window.innerWidth * 0.9) / (dotWidth + gap)) + 2;

            // 縦方向
            const mobileVerticalCount = Math.floor(
                (window.innerWidth * 0.8) / (dotWidth + gap)
            );

            if (window.innerWidth < 768) {
                setHorizontalDotCount(mobileHorizontalCount);
                setVerticalDotCount(mobileVerticalCount);
            } else {
                setHorizontalDotCount(horizontalCount);
                setVerticalDotCount(0);
            }
        };

        updateDotCount();

        window.addEventListener("resize", updateDotCount);

        return () => {
            window.removeEventListener("resize", updateDotCount);
        };
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.2,
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    // 点線の先頭（飛行機雲の先端）に飛行機が来るよう、線の伸長と同じ時間で追従させる
    const horizontalLineLength =
        horizontalDotCount > 0
            ? horizontalDotCount * DOT_SIZE + (horizontalDotCount - 1) * GAP
            : 0;
    const verticalLineLength =
        verticalDotCount > 0
            ? verticalDotCount * DOT_SIZE + (verticalDotCount - 1) * GAP
            : 0;

    const horizontalDuration =
        horizontalDotCount > 0 ? (horizontalDotCount - 1) * 100 + 200 : 0;
    const verticalDuration =
        verticalDotCount > 0 ? (verticalDotCount - 1) * 100 + 200 : 0;
    const verticalDelay = horizontalDotCount * 100;

    // md以下：折り返し後の下の斜め線が伸び始めるタイミングで、上の斜め線の飛行機から引き継ぐ
    useEffect(() => {
        if (verticalDotCount === 0) {
            setUpperHandedOff(false);
            return;
        }

        if (!isVisible) return;

        const timer = setTimeout(() => {
            setUpperHandedOff(true);
        }, verticalDelay);

        return () => clearTimeout(timer);
    }, [isVisible, verticalDotCount, verticalDelay]);

    const upperOpacity = !isVisible ? 0 : upperHandedOff ? 0 : 1;

    return (
        <div
            ref={ref}
            className="relative w-full rotate-[20deg] md:rotate-[10deg]"
        >
            {/* 横方向の点線 */}
            <div className="flex gap-[16px] overflow-hidden">
                {Array.from({ length: horizontalDotCount }).map((_, index) => (
                    <span
                        key={`horizontal-${index}`}
                        className="
                        block
                        h-[5px]
                        w-[14px]
                        shrink-0
                        bg-white
                        transition-[clip-path]
                        duration-200
                        ease-linear
                        "
                        style={{
                            clipPath: isVisible
                                ? "inset(0 0 0 0)"
                                : "inset(0 100% 0 0)",
                            transitionDelay: `${index * 100}ms`,
                        }}
                    />
                ))}
            </div>

            {/* 上の斜め線（横点線）の先頭（飛行機雲の先端）に飛行機。md以下では下の斜め線に引き継ぐ */}
            <div
                className="block absolute right-[5px] top-1/2"
                style={{
                    transform: `translateY(-50%) translateX(${
                        isVisible ? 0 : -horizontalLineLength
                    }px)`,
                    transition: `transform ${horizontalDuration}ms linear, opacity 200ms linear`,
                    opacity: upperOpacity,
                }}
            >
                <img
                    src="/images/svg/airplane-white.svg"
                    alt=""
                    className="
                        block
                        w-[50px]
                        h-auto
                        object-contain
                        -rotate-[3deg]
                    "
                />
            </div>

            {/* md以下：斜め点線＋飛行機 */}
            {verticalDotCount > 0 && (
                <div className="absolute right-0 top-[20px]">
                    <div className="flex flex-col items-center gap-[16px] rotate-[45deg] origin-top">

                        {Array.from({ length: verticalDotCount }).map((_, index) => (
                            <span
                                key={`vertical-${index}`}
                                className="
                                 block
                                 h-[14px]
                                 w-[5px]
                                 shrink-0
                                bg-white
                                transition-[clip-path]
                                duration-200
                                ease-linear
                            "
                                style={{
                                    clipPath: isVisible
                                        ? "inset(0 0 0 0)"
                                        : "inset(0 0 100% 0)",
                                    transitionDelay: `${(
                                        horizontalDotCount + index
                                    ) * 100}ms`,
                                }}
                            />
                        ))}

                        {/* 飛行機（点線の先頭＝飛行機雲の先端に追従） */}
                        <img
                            src="/images/svg/airplane-white-mirror.svg"
                            alt=""
                            className="
                                block
                                w-[50px]
                                h-auto
                                object-contain
                            "
                            style={{
                                transform: `translateY(${
                                    isVisible ? 0 : -verticalLineLength
                                }px) rotate(-70deg)`,
                                transition: `transform ${verticalDuration}ms linear ${verticalDelay}ms, opacity 0ms linear ${verticalDelay}ms`,
                                opacity: isVisible ? 1 : 0,
                            }}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}