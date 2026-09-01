"use client";

import { motion } from "framer-motion";
import { useId } from "react";

export default function Line2() {
    const filterId = useId();

    const bottomLinePath =
        "M 0 30 C 150 20, 260 60, 380 130 C 500 200, 580 300, 660 250 C 760 190, 850 250, 1000 300";

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
                    d={bottomLinePath}
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
                        duration: 3,
                        delay: 0.3,
                        ease: "easeInOut",
                    }}
                />
            </svg>
        </div>
    );
}