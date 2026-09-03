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

            const horizontalCount = Math.floor(
                (window.innerWidth - airplaneWidth) / (dotWidth + gap)
            ) - (window.innerWidth <= 370 ? 1 : 0);

            const mobileHorizontalCount =
                Math.floor((window.innerWidth * 0.9) / (dotWidth + gap)) + 2;

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

    type Checkpoint = { t: number; x: number };

    const buildCheckpoints = (dotCount: number): Checkpoint[] => {
        const checkpoints: Checkpoint[] = [{ t: 0, x: 0 }];
        for (let i = 0; i < dotCount; i++) {
            checkpoints.push({
                t: i * 100 + 200,
                x: i * (DOT_SIZE + GAP) + DOT_SIZE,
            });
        }
        return checkpoints;
    };

    const getPositionAt = (checkpoints: Checkpoint[], elapsed: number) => {
        const last = checkpoints[checkpoints.length - 1];
        const clamped = Math.min(Math.max(elapsed, 0), last.t);

        for (let k = 0; k < checkpoints.length - 1; k++) {
            const a = checkpoints[k];
            const b = checkpoints[k + 1];
            if (clamped <= b.t) {
                const frac = b.t === a.t ? 1 : (clamped - a.t) / (b.t - a.t);
                return a.x + (b.x - a.x) * frac;
            }
        }
        return last.x;
    };

    const horizontalPlaneRef = useRef<HTMLDivElement>(null);
    const verticalPlaneRef = useRef<HTMLImageElement>(null);

    const horizontalConfigRef = useRef({ horizontalDotCount, horizontalLineLength, horizontalDuration });
    horizontalConfigRef.current = { horizontalDotCount, horizontalLineLength, horizontalDuration };

    const verticalConfigRef = useRef({ verticalDotCount, verticalLineLength, verticalDuration, verticalDelay });
    verticalConfigRef.current = { verticalDotCount, verticalLineLength, verticalDuration, verticalDelay };

    useEffect(() => {
        if (isVisible) return;
        if (horizontalPlaneRef.current) {
            horizontalPlaneRef.current.style.transform =
                `translateY(-50%) translateX(${-horizontalLineLength}px)`;
        }
    }, [isVisible, horizontalLineLength]);

    useEffect(() => {
        if (isVisible) return;
        if (verticalPlaneRef.current) {
            verticalPlaneRef.current.style.transform =
                `translateY(${-verticalLineLength}px) rotate(-70deg)`;
        }
    }, [isVisible, verticalLineLength]);

    const getExactTip = (elapsed: number, dotCount: number) => {
        const i = Math.min(Math.floor(Math.max(elapsed, 0) / 100), dotCount - 1);
        const frac = Math.min(Math.max((elapsed - i * 100) / 200, 0), 1);
        return (DOT_SIZE + GAP) * i + DOT_SIZE * frac;
    };

    useEffect(() => {
        if (!isVisible) return;
        const { horizontalDotCount: N, horizontalLineLength: L, horizontalDuration: D } =
            horizontalConfigRef.current;
        if (N <= 0) return;

        const SMOOTHING_MS = 30;
        let rafId: number;
        let lastTime = performance.now();
        const start = lastTime;
        let display = 0;

        const tick = (now: number) => {
            const dt = now - lastTime;
            lastTime = now;
            const elapsed = now - start;
            const lookahead = elapsed + SMOOTHING_MS;
            const target = lookahead >= D ? L : getExactTip(lookahead, N);
            const alpha = 1 - Math.exp(-dt / SMOOTHING_MS);
            display += (target - display) * alpha;

            if (horizontalPlaneRef.current) {
                horizontalPlaneRef.current.style.transform =
                    `translateY(-50%) translateX(${display - L}px)`;
            }

            if (elapsed < D || Math.abs(target - display) > 0.3) {
                rafId = requestAnimationFrame(tick);
            } else if (horizontalPlaneRef.current) {
                horizontalPlaneRef.current.style.transform =
                    "translateY(-50%) translateX(0px)";
            }
        };

        rafId = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(rafId);

    }, [isVisible]);


    useEffect(() => {
        if (!isVisible) return;
        const { verticalDotCount: M, verticalLineLength: L, verticalDuration: D, verticalDelay: delay } =
            verticalConfigRef.current;
        if (M <= 0) return;

        const checkpoints = buildCheckpoints(M);
        let rafId: number;
        const timerId = setTimeout(() => {
            const start = performance.now();

            const tick = (now: number) => {
                const elapsed = Math.min(now - start, D);
                const tipY = getPositionAt(checkpoints, elapsed);

                if (verticalPlaneRef.current) {
                    verticalPlaneRef.current.style.transform =
                        `translateY(${tipY - L}px) rotate(-70deg)`;
                }

                if (elapsed < D) {
                    rafId = requestAnimationFrame(tick);
                }
            };

            rafId = requestAnimationFrame(tick);
        }, delay);

        return () => {
            clearTimeout(timerId);
            cancelAnimationFrame(rafId);
        };

    }, [isVisible]);


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
            className="relative w-full rotate-[12deg] md:rotate-[10deg]"
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
                ref={horizontalPlaneRef}
                className="block absolute right-[5px] top-1/2"
                style={{
                    transform: `translateY(-50%) translateX(${-horizontalLineLength}px)`,
                    transition: "opacity 80ms linear",
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
                    <div className="flex flex-col items-center gap-[16px] rotate-[65deg] origin-top">

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
                            ref={verticalPlaneRef}
                            src="/images/svg/airplane-white-mirror.svg"
                            alt=""
                            className="
                                block
                                w-[50px]
                                h-auto
                                object-contain
                            "
                            style={{
                                transform: `translateY(${-verticalLineLength}px) rotate(-70deg)`,
                                transition: `opacity 0ms linear ${verticalDelay}ms`,
                                opacity: isVisible ? 1 : 0,
                            }}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}