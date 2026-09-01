"use client";

import { motion } from "framer-motion";
import { useId } from "react";

export default function Line1() {
    const filterId = useId();

    const topLinePath =
        "M 0 180 C 120 80, 260 40, 400 70 C 500 90, 620 120, 650 70 C 680 20, 590 0, 550 60 C 520 110, 620 160, 700 110 C 800 50, 900 50, 1000 70";

    return (
        <div className="w-full overflow-hidden">
            <svg
                className="block w-full h-auto"
                viewBox="0 0 1000 300"
                preserveAspectRatio="xMidYMid meet"
                aria-hidden="true"
            >
                <defs>
                    <filter id={filterId}>
                        <feTurbulence
                            type="fractalNoise"
                            baseFrequency="0.03 0.8"
                            numOctaves="2"
                            seed="2"
                            result="noise"
                        />

                        <feDisplacementMap
                            in="SourceGraphic"
                            in2="noise"
                            scale="1.5"
                            xChannelSelector="R"
                            yChannelSelector="G"
                        />
                    </filter>
                </defs>

                <motion.path
                    d={topLinePath}
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    pathLength={1}
                    filter={`url(#${filterId})`}
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{
                        once: true,
                        amount: 0.05,
                    }}
                    transition={{
                        duration: 2.5,
                        ease: "easeInOut",
                    }}
                />
            </svg>
        </div>
    );
}