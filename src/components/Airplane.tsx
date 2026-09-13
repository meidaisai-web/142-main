"use client";

import { useEffect, useId, useRef, useState } from "react";
import type { CSSProperties } from "react";

// 元実装の「flex-col(下向き=90deg) + rotate(65deg)」で作られていた
// 折り返し後の進行方向を、1本のパスの角度としてそのまま引き継いでいる。
const TURN_LOCAL_ANGLE_DEG = 90 + 65;
const TURN_ANGLE_RAD = (TURN_LOCAL_ANGLE_DEG * Math.PI) / 180;

// 飛行機アイコンの向き調整（元実装の -rotate-[3deg] 相当の微調整）
const NOSE_TWEAK_DEG = -3;
// 折り返し後、線の角度そのままだと機首が浅く見えるため、少し下向きに寄せる
// （値を大きくするほど下を向く。線自体の角度(TURN_LOCAL_ANGLE_DEG)は変えない）
const TURN_NOSE_DOWN_TILT_DEG = -40;
const TURN_PLANE_HEADING_DEG = TURN_LOCAL_ANGLE_DEG - TURN_NOSE_DOWN_TILT_DEG;
// 折り返し後、進行方向に鼻先を合わせるための反転後の回転量
// (180deg 反転 + この回転 = TURN_PLANE_HEADING_DEG)
const TURN_ROTATE_DEG = TURN_PLANE_HEADING_DEG - 180;
// 旋回(バンク)アニメーションの長さ
const TURN_ANIM_MS = 380;
// CSSのease-in-outと同じ制御点（SMILのkeySplinesと挙動を揃えるため）
const EASE_IN_OUT_KEY_SPLINE = "0.42 0 0.58 1";
const EASE_IN_OUT = "cubic-bezier(0.42, 0, 0.58, 1)";

type Point = { x: number; y: number };

type Metrics = {
    dotSize: number;
    gap: number;
    strokeWidth: number;
    planeSize: number;
    hasTurn: boolean;
    horizontalLength: number;
    totalLength: number;
    totalDurationMs: number;
    turnTimeMs: number;
    pathD: string;
    width: number;
    height: number;
};

const EMPTY_METRICS: Metrics = {
    dotSize: 0,
    gap: 0,
    strokeWidth: 0,
    planeSize: 0,
    hasTurn: false,
    horizontalLength: 0,
    totalLength: 0,
    totalDurationMs: 0,
    turnTimeMs: 0,
    pathD: "M 0 0 L 0 0",
    width: 0,
    height: 0,
};

function computeMetrics(): Metrics {
    if (typeof window === "undefined") return EMPTY_METRICS;

    const vw = window.innerWidth;
    const isSmDown = vw < 640;
    const isMdUp = vw >= 768;

    const dotSize = isSmDown ? 10 : 14;
    const gap = isSmDown ? 12 : 16;
    const strokeWidth = isSmDown ? 4 : 5;
    const planeSize = isSmDown ? 40 : 50;
    const step = dotSize + gap;
    const airplaneWidth = 25;

    let horizontalCount: number;
    let turnCount: number;

    if (isMdUp) {
        horizontalCount =
            Math.floor((vw - airplaneWidth) / step) - (vw <= 370 ? 1 : 0);
        turnCount = 0;
    } else {
        horizontalCount = Math.floor((vw * 0.9) / step) + 3;
        turnCount = Math.floor((vw * 0.9) / step);
    }

    const horizontalLength =
        horizontalCount > 0
            ? horizontalCount * dotSize + (horizontalCount - 1) * gap
            : 0;

    const turnLength =
        turnCount > 0 ? turnCount * dotSize + (turnCount - 1) * gap : 0;

    const hasTurn = turnLength > 0;

    const p0: Point = { x: 0, y: 0 };
    const p1: Point = { x: horizontalLength, y: 0 };
    const p2: Point = hasTurn
        ? {
              x: p1.x + turnLength * Math.cos(TURN_ANGLE_RAD),
              y: p1.y + turnLength * Math.sin(TURN_ANGLE_RAD),
          }
        : p1;

    // 線の始点(p0.x = 0)を左端に揃えるため、左側には余白を追加しない
    const margin = planeSize + strokeWidth;
    const xs = [p0.x, p1.x, p2.x];
    const ys = [p0.y, p1.y, p2.y];
    const minX = 0;
    const maxX = Math.max(...xs) + margin;
    const minY = Math.min(...ys) - margin;
    const maxY = Math.max(...ys) + margin;

    const shift = (pt: Point): Point => ({ x: pt.x - minX, y: pt.y - minY });
    const sp0 = shift(p0);
    const sp1 = shift(p1);
    const sp2 = shift(p2);

    const pathD = hasTurn
        ? `M ${sp0.x} ${sp0.y} L ${sp1.x} ${sp1.y} L ${sp2.x} ${sp2.y}`
        : `M ${sp0.x} ${sp0.y} L ${sp1.x} ${sp1.y}`;

    const totalLength = horizontalLength + turnLength;
    const speed = step / 100; // px / ms（従来のドット送り速度と同じ）
    const totalDurationMs = speed > 0 ? totalLength / speed : 0;
    const turnTimeMs = speed > 0 ? horizontalLength / speed : 0;

    return {
        dotSize,
        gap,
        strokeWidth,
        planeSize,
        hasTurn,
        horizontalLength,
        totalLength,
        totalDurationMs,
        turnTimeMs,
        pathD,
        width: maxX - minX,
        height: maxY - minY,
    };
}

export default function DottedLine() {
    const ref = useRef<HTMLDivElement>(null);
    const maskId = useId();
    const revealAnimRef = useRef<SVGAnimateElement>(null);
    const revealTurnAnimRef = useRef<SVGAnimateElement>(null);

    const [isVisible, setIsVisible] = useState(false);
    const [hasTurned, setHasTurned] = useState(false);
    const [metrics, setMetrics] = useState<Metrics>(EMPTY_METRICS);

    useEffect(() => {
        const updateMetrics = () => setMetrics(computeMetrics());
        updateMetrics();
        window.addEventListener("resize", updateMetrics);
        return () => window.removeEventListener("resize", updateMetrics);
    }, []);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );

        observer.observe(node);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;
        revealAnimRef.current?.beginElement();
    }, [isVisible]);

    useEffect(() => {
        if (!isVisible || !metrics.hasTurn) return;

        const timer = setTimeout(() => {
            setHasTurned(true);
            revealTurnAnimRef.current?.beginElement();
        }, metrics.turnTimeMs);

        return () => clearTimeout(timer);
    }, [isVisible, metrics.hasTurn, metrics.turnTimeMs]);

    const {
        pathD,
        hasTurn,
        horizontalLength,
        totalLength,
        totalDurationMs,
        turnTimeMs,
        strokeWidth,
        dotSize,
        gap,
        planeSize,
        width,
        height,
    } = metrics;

    // 折り返しがある場合は、折り返し前(leg1)と後(leg2)それぞれに
    // 個別のease-in-outを効かせる。折り返しがない場合は1本のまま。
    const legOutDurationMs = totalDurationMs - turnTimeMs;
    const planeOffsetDistance = !isVisible
        ? "0px"
        : hasTurn
        ? `${hasTurned ? totalLength : horizontalLength}px`
        : `${totalLength}px`;
    const planeOffsetDurationMs = hasTurned ? legOutDurationMs : turnTimeMs;

    return (
        <div
            ref={ref}
            className="relative w-full rotate-[12deg] md:rotate-[10deg]"
        >
            <div className="absolute left-0 top-0" style={{ width, height }}>
                {/* 軌跡（点線） */}
                <svg
                    width={width}
                    height={height}
                    viewBox={`0 0 ${width} ${height}`}
                    style={{ overflow: "visible", display: "block" }}
                >
                    <defs>
                        <mask
                            id={maskId}
                            maskUnits="userSpaceOnUse"
                            x={0}
                            y={0}
                            width={width}
                            height={height}
                        >
                            <path
                                d={pathD}
                                fill="none"
                                stroke="#fff"
                                strokeWidth={strokeWidth + 4}
                                strokeLinecap="butt"
                                strokeDasharray={`${totalLength} ${totalLength}`}
                                strokeDashoffset={totalLength}
                            >
                                <animate
                                    ref={revealAnimRef}
                                    attributeName="stroke-dashoffset"
                                    from={totalLength}
                                    to={
                                        hasTurn
                                            ? totalLength - horizontalLength
                                            : 0
                                    }
                                    dur={`${turnTimeMs}ms`}
                                    begin="indefinite"
                                    fill="freeze"
                                    calcMode="spline"
                                    keyTimes="0;1"
                                    keySplines={EASE_IN_OUT_KEY_SPLINE}
                                />
                                {hasTurn && (
                                    <animate
                                        ref={revealTurnAnimRef}
                                        attributeName="stroke-dashoffset"
                                        from={totalLength - horizontalLength}
                                        to={0}
                                        dur={`${legOutDurationMs}ms`}
                                        begin="indefinite"
                                        fill="freeze"
                                        calcMode="spline"
                                        keyTimes="0;1"
                                        keySplines={EASE_IN_OUT_KEY_SPLINE}
                                    />
                                )}
                            </path>
                        </mask>
                    </defs>

                    <path
                        d={pathD}
                        fill="none"
                        stroke="#fff"
                        strokeWidth={strokeWidth}
                        strokeLinecap="butt"
                        strokeDasharray={`${dotSize} ${gap}`}
                        mask={`url(#${maskId})`}
                    />
                </svg>

                {/* 飛行機（1機のみ。パスに沿って移動し、折り返しで旋回する） */}
                <div
                    className="absolute left-0 top-0"
                    style={
                        {
                            width: planeSize,
                            height: planeSize,
                            offsetPath: `path("${pathD}")`,
                            offsetDistance: planeOffsetDistance,
                            offsetRotate: "0deg",
                            offsetAnchor: "center",
                            transition: `offset-distance ${planeOffsetDurationMs}ms ${EASE_IN_OUT}, opacity 150ms linear`,
                            opacity: isVisible ? 1 : 0,
                        } as CSSProperties
                    }
                >
                    <img
                        src="/images/svg/airplane-white.svg"
                        alt=""
                        className="block w-full h-auto object-contain"
                        style={{
                            transform: hasTurned
                                ? `scaleX(-1) rotate(${TURN_ROTATE_DEG}deg)`
                                : `scaleX(1) rotate(${NOSE_TWEAK_DEG}deg)`,
                            transition: `transform ${TURN_ANIM_MS}ms ease-in-out`,
                            transformOrigin: "50% 50%",
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
