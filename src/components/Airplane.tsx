"use client";

import { useEffect, useRef, useState } from "react";

export default function DottedLine() {
    const ref = useRef<HTMLDivElement>(null);

    const [isVisible, setIsVisible] = useState(false);
    const [horizontalDotCount, setHorizontalDotCount] = useState(0);
    const [verticalDotCount, setVerticalDotCount] = useState(0);
    const [showAirplane, setShowAirplane] = useState(false);

    useEffect(() => {
        const updateDotCount = () => {
            const dotWidth = 14;
            const gap = 16;
            const airplaneWidth = 25;

            // md以上：今まで通り横一列
            const horizontalCount = Math.floor(
                (window.innerWidth - airplaneWidth) / (dotWidth + gap)
            ) - (window.innerWidth <= 370 ? 1 : 0);

            // md以下：横方向は画面幅の約90%まで
            const mobileHorizontalCount =
                Math.floor((window.innerWidth * 0.9) / (dotWidth + gap)) + 2;

            // 縦方向
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

    useEffect(() => {
        if (!isVisible || horizontalDotCount === 0) return;

        const totalDots =
            horizontalDotCount + verticalDotCount;

        const delay = totalDots * 80 + 150;

        const timer = setTimeout(() => {
            setShowAirplane(true);
        }, delay);

        return () => clearTimeout(timer);
    }, [isVisible, horizontalDotCount, verticalDotCount]);

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
                        className={`
                            block
                            h-[5px]
                            w-[14px]
                            shrink-0
                            bg-white
                            opacity-0
                            transition-opacity
                            duration-100
                            ${isVisible ? "opacity-100" : ""}
                        `}
                        style={{
                            transitionDelay: `${index * 80}ms`,
                        }}
                    />
                ))}
            </div>



            {/* 紙飛行機 */}
            {/* md以上：横点線の右端に飛行機 */}
            <div className="hidden md:block absolute right-[5px] top-1/2 -translate-y-1/2">
                <img
                    src="/images/svg/airplane-white.svg"
                    alt=""
                    className={`
            block
            w-[50px]
            h-auto
            object-contain
            -rotate-[3deg]
            transition-opacity
            duration-100
            ${showAirplane ? "opacity-100" : "opacity-0"}
        `}
                />
            </div>
            {/* md以下：斜め点線＋飛行機 */}
            {verticalDotCount > 0 && (
                <div className="absolute right-0 top-[20px]">
                    <div className="flex flex-col items-center gap-[16px] rotate-[45deg] origin-top">
                        {Array.from({ length: verticalDotCount }).map((_, index) => (
                            <span
                                key={`vertical-${index}`}
                                className={`
        block
        h-[14px]
        w-[5px]
        shrink-0
        bg-white
        opacity-0
        transition-opacity
        duration-100
        ${isVisible ? "opacity-100" : ""}
    `}
                                style={{
                                    transitionDelay: `${(horizontalDotCount + index) * 80
                                        }ms`,
                                }}
                            />
                        ))}

                        {/* 飛行機 */}
                        <img
                            src="/images/svg/airplane-white-mirror.svg"
                            alt=""
                            className={`
                    block
                    w-[50px]
                    h-auto
                    object-contain
                    rotate-[-70deg]
                    transition-opacity
                    duration-100
                    ${showAirplane ? "opacity-100" : "opacity-0"}
                `}
                        />
                    </div>

                </div>
            )}
        </div>
    );
}