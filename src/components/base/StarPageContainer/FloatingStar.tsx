
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const stars = [
    {
        color: "pink",
        src: "/images/starcontainer/pink-star.svg",
        size: 25,
        top: 38,
        right: "8%",
        delay: 0,
    },
    {
        color: "purple",
        src: "/images/starcontainer/purpleline-star.svg",
        size: 25,
        top: 20,
        left: "6%",
        delay: 0.8,
    },
    {
        color: "purple",
        src: "/images/starcontainer/purple-star.svg",
        size: 25,
        top: 35,
        left: "6%",
        delay: 0.8,
    },

    {
        color: "green",
        src: "/images/starcontainer/green-star.svg",
        size: 25,
        top: 80,
        right: "10%",
        delay: 2.2,
    },
];

type FloatingStarProps = {
    pageHeight: number;
};

export default function FloatingStar({
    pageHeight,
}: FloatingStarProps) {
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const checkDesktop = () => {
            setIsDesktop(window.innerWidth >= 1024);
        };

        checkDesktop();
        window.addEventListener("resize", checkDesktop);

        return () => {
            window.removeEventListener("resize", checkDesktop);
        };
    }, []);

    // 約700pxごとに星のセットを配置
    const sectionHeight = 700;
    const sectionCount = Math.max(
        1,
        Math.ceil(pageHeight / sectionHeight)
    );

    return (
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
            {Array.from({ length: sectionCount }, (_, index) => (
                <div
                    key={index}
                    className="absolute inset-x-0"
                    style={{
                        top: index * sectionHeight,
                        height: sectionHeight,
                    }}
                >
                    {stars.map((star, starIndex) => {
                        const starSize = isDesktop
                            ? star.size
                            : star.size * 0.7;

                        return (
                            <motion.div
                                key={`${index}-${star.color}-${starIndex}`}
                                className="absolute"
                                style={{
                                    top: `${star.top}%`,
                                    left: star.left,
                                    right: star.right,
                                    width: starSize,
                                }}
                                animate={{
                                    x: [-18, 8, -18],
                                    y: [0, -10, 0],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: star.delay,
                                }}
                            >
                                <Image
                                    src={star.src}
                                    alt=""
                                    width={starSize}
                                    height={starSize}
                                />
                            </motion.div>
                        );
                    })}
                </div>
            ))}
        </div>
    );
}
