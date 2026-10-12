"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const DURATION = 1.5;
const CYCLE = 8;
const REPEAT_DELAY = CYCLE - DURATION;
const LINE_SPACING = 55;
const ENTER_Y_OFFSET = -350;

const PINK_CENTER_Y = 180;
const PINK_STARS = [
    { src: "/images/starcontainer/line2-pink.svg", endY: PINK_CENTER_Y - LINE_SPACING * 2, delay: 0.7 },
    { src: "/images/starcontainer/line1-pink.svg", endY: PINK_CENTER_Y - LINE_SPACING, delay: 0.35 },
    { src: "/images/starcontainer/shootingstar-pink.svg", endY: PINK_CENTER_Y, delay: 0 },
    { src: "/images/starcontainer/line3-pink.svg", endY: PINK_CENTER_Y + LINE_SPACING, delay: 0.35 },
    { src: "/images/starcontainer/line4-pink.svg", endY: PINK_CENTER_Y + LINE_SPACING * 2, delay: 0.7 },
];

const PURPLE_BASE = 2.5;
const PURPLE_CENTER_Y = 430;
const PURPLE_STARS = [
    { src: "/images/starcontainer/line2-purple.svg", endY: PURPLE_CENTER_Y - LINE_SPACING * 2, delay: PURPLE_BASE + 0.7 },
    { src: "/images/starcontainer/line1-purple.svg", endY: PURPLE_CENTER_Y - LINE_SPACING, delay: PURPLE_BASE + 0.35 },
    { src: "/images/starcontainer/shootingstar-purple.svg", endY: PURPLE_CENTER_Y, delay: PURPLE_BASE },
    { src: "/images/starcontainer/line3-purple.svg", endY: PURPLE_CENTER_Y + LINE_SPACING, delay: PURPLE_BASE + 0.35 },
    { src: "/images/starcontainer/line4-purple.svg", endY: PURPLE_CENTER_Y + LINE_SPACING * 2, delay: PURPLE_BASE + 0.7 },
];


const GREEN_BASE = 5.0;
const GREEN_CENTER_Y = 560;
const GREEN_STARS = [
    { src: "/images/starcontainer/line2-green.svg", endY: GREEN_CENTER_Y - LINE_SPACING * 2, delay: GREEN_BASE + 0.7 },
    { src: "/images/starcontainer/line1-green.svg", endY: GREEN_CENTER_Y - LINE_SPACING, delay: GREEN_BASE + 0.35 },
    { src: "/images/starcontainer/shootingstar-green.svg", endY: GREEN_CENTER_Y, delay: GREEN_BASE },
    { src: "/images/starcontainer/line3-green.svg", endY: GREEN_CENTER_Y + LINE_SPACING, delay: GREEN_BASE + 0.35 },
    { src: "/images/starcontainer/line4-green.svg", endY: GREEN_CENTER_Y + LINE_SPACING * 2, delay: GREEN_BASE + 0.7 },
];

type StarDef = { src: string; endY: number; delay: number; opacityDelay?: number };

function StarGroup({
    stars,
    anchorClass,
    endX,
    enterX,
    offsetX = 0,
}: {
    stars: StarDef[];
    anchorClass: string;
    endX: number;
    enterX: number;
    offsetX?: number;
}) {
    const base = { duration: DURATION, ease: "easeInOut", repeat: Infinity, repeatDelay: REPEAT_DELAY } as const;
    return (
        <>
            {stars.map(({ src, endY, delay, opacityDelay }) => (
                <motion.img
                    key={src}
                    src={src}
                    alt=""
                    className={`absolute top-0 w-40 ${anchorClass === "right-0" ? "right-0" : ""}`}
                    style={{
                        left: anchorClass === "left-0" ? offsetX : undefined,
                    }}
                    initial={{ x: enterX, y: endY + ENTER_Y_OFFSET, opacity: 0 }}
                    animate={{ x: endX, y: endY, opacity: [0, 1, 1, 0] }}
                    transition={{
                        ...base,
                        delay,
                        opacity: { ...base, delay: opacityDelay ?? delay },
                    }}
                />
            ))}
        </>
    );
}

export default function ShootingStar({

    pageHeight,
}: {

    pageHeight: number;
}) {
    const [isMobile, setIsMobile] = useState(false);

   useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
}, []);
    const SET_HEIGHT = 1000;
    const SET_COUNT = Math.max(
        1,
        Math.ceil(pageHeight / SET_HEIGHT) + 1
    );

    return (
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
            {Array.from({ length: SET_COUNT }).map((_, index) => (
                <div
                    key={index}
                    className="absolute inset-x-0"
                    style={{
                        top: `${index * SET_HEIGHT}px`,
                        height: `${SET_HEIGHT}px`,
                    }}
                >
                    <StarGroup
                        stars={PINK_STARS}
                        anchorClass="right-0"
                        endX={0}
                        enterX={300}
                    />

                    {!isMobile && (
                        <StarGroup
                            stars={PURPLE_STARS}
                            anchorClass="left-0"
                            endX={0}
                            enterX={300}
                            offsetX={-100}
                        />
                    )}

                    <StarGroup
                        stars={GREEN_STARS}
                        anchorClass="right-0"
                        endX={0}
                        enterX={300}
                    />
                </div>
            ))}
        </div>
    );
}