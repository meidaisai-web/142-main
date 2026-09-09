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

    const horizontalFinishedRef = useRef(false);
    const verticalFinishedRef = useRef(false);

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

    const horizontalLineLength =
        horizontalDotCount > 0
            ? horizontalDotCount * DOT_SIZE +
              (horizontalDotCount - 1) * GAP
            : 0;

    const verticalLineLength =
        verticalDotCount > 0
            ? verticalDotCount * DOT_SIZE +
              (verticalDotCount - 1) * GAP
            : 0;

    const horizontalDuration =
        horizontalDotCount > 0
            ? horizontalDotCount * 100
            : 0;

    const verticalDuration =
        verticalDotCount > 0
            ? (verticalDotCount - 1) * 100 + 200
            : 0;

    const verticalDelay = horizontalDotCount * 100;

    type Checkpoint = { t: number; x: number };

    const buildHorizontalCheckpoints = (
        dotCount: number,
        lineLength: number
    ): Checkpoint[] => {
        const checkpoints: Checkpoint[] = [{ t: 0, x: 0 }];

        for (let i = 1; i < dotCount; i++) {
            checkpoints.push({
                t: i * 100,
                x: i * (DOT_SIZE + GAP),
            });
        }

        checkpoints.push({
            t: dotCount * 100,
            x: lineLength,
        });

        return checkpoints;
    };

    const getPositionAt = (
        checkpoints: Checkpoint[],
        elapsed: number
    ) => {
        const last = checkpoints[checkpoints.length - 1];
        const clamped = Math.min(Math.max(elapsed, 0), last.t);

        for (let k = 0; k < checkpoints.length - 1; k++) {
            const a = checkpoints[k];
            const b = checkpoints[k + 1];

            if (clamped <= b.t) {
                const frac =
                    b.t === a.t
                        ? 1
                        : (clamped - a.t) / (b.t - a.t);

                return a.x + (b.x - a.x) * frac;
            }
        }

        return last.x;
    };

    const horizontalPlaneRef = useRef<HTMLDivElement>(null);
    const verticalPlaneRef = useRef<HTMLImageElement>(null);

    const horizontalConfigRef = useRef({
        horizontalDotCount,
        horizontalLineLength,
        horizontalDuration,
    });

    horizontalConfigRef.current = {
        horizontalDotCount,
        horizontalLineLength,
        horizontalDuration,
    };

    const verticalConfigRef = useRef({
        verticalDotCount,
        verticalLineLength,
        verticalDuration,
        verticalDelay,
    });

    verticalConfigRef.current = {
        verticalDotCount,
        verticalLineLength,
        verticalDuration,
        verticalDelay,
    };

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

    useEffect(() => {
        if (!isVisible) return;

        const {
            horizontalDotCount: N,
            horizontalLineLength: L,
            horizontalDuration: D,
        } = horizontalConfigRef.current;

        if (N <= 0) return;

        horizontalFinishedRef.current = false;

        const checkpoints = buildHorizontalCheckpoints(N, L);

        let rafId: number;
        const start = performance.now();

        const tick = (now: number) => {
            const elapsed = Math.min(now - start, D);

            const tipX = getPositionAt(checkpoints, elapsed);

            if (horizontalPlaneRef.current) {
                horizontalPlaneRef.current.style.transform =
                    `translateY(-50%) translateX(${tipX - L}px)`;
            }

            if (elapsed < D) {
                rafId = requestAnimationFrame(tick);
            } else if (horizontalPlaneRef.current) {
                horizontalPlaneRef.current.style.transform =
                    "translateY(-50%) translateX(0px)";

                horizontalFinishedRef.current = true;
            }
        };

        rafId = requestAnimationFrame(tick);

        return () => cancelAnimationFrame(rafId);
    }, [isVisible]);

    useEffect(() => {
        if (!isVisible) return;

        const {
            verticalDotCount: M,
            verticalLineLength: L,
            verticalDuration: D,
            verticalDelay: delay,
        } = verticalConfigRef.current;

        if (M <= 0) return;

        verticalFinishedRef.current = false;

        const checkpoints: Checkpoint[] = [{ t: 0, x: 0 }];

        for (let i = 0; i < M; i++) {
            checkpoints.push({
                t: i * 100 + 200,
                x: i * (DOT_SIZE + GAP),
            });
        }

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
                } else {
                    verticalFinishedRef.current = true;
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
        if (!isVisible) return;

        if (
            verticalDotCount > 0 &&
            (horizontalFinishedRef.current ||
                verticalFinishedRef.current) &&
            verticalPlaneRef.current
        ) {
            verticalPlaneRef.current.style.transform =
                "translateY(-14px) rotate(-70deg)";
        }

        if (
            verticalDotCount === 0 &&
            horizontalFinishedRef.current &&
            horizontalPlaneRef.current
        ) {
            horizontalPlaneRef.current.style.transform =
                "translateY(-50%) translateX(0px)";
        }
    }, [
        isVisible,
        verticalDotCount,
        horizontalDotCount,
        verticalLineLength,
    ]);

    useEffect(() => {
        if (!isVisible) return;

        if (verticalDotCount === 0) {
            setUpperHandedOff(false);
            return;
        }

        if (
            horizontalFinishedRef.current ||
            verticalFinishedRef.current
        ) {
            setUpperHandedOff(true);
            return;
        }

        setUpperHandedOff(false);

        const timer = setTimeout(() => {
            setUpperHandedOff(true);
        }, verticalDelay);

        return () => clearTimeout(timer);
    }, [isVisible, verticalDotCount, verticalDelay]);

    const upperOpacity =
        !isVisible
            ? 0
            : upperHandedOff
            ? 0
            : 1;

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

            {/* 上の斜め線の飛行機 */}
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
                                    transitionDelay: `${
                                        (horizontalDotCount + index) * 100
                                    }ms`,
                                }}
                            />
                        ))}

                        {/* 飛行機 */}
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