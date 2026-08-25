"use client";

import { motion } from "framer-motion";
import { useId } from "react";

type LineProps = {
    path: string;
    className?: string;
    duration?: number;
    delay?: number;
};

export default function Line({
    path,
    className = "",
    duration = 2,
    delay = 0,
}: LineProps) {

    const filterId = useId();


    return (
        <svg
            className={className}
            viewBox="0 0 1000 300"
            preserveAspectRatio="none"
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
                d={path}
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                pathLength={1}
                filter={`url(#${filterId})`}
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{
                    duration,
                    delay,
                    ease: "easeInOut",
                }}
            />
        </svg>
    );
}