"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useMotionScale } from "@/hooks/useMotionScale";

type FloatingCrossProps = {
    delay?: number;
};

export default function FloatingCross({ delay = 0 }: FloatingCrossProps) {
    const scale = useMotionScale();
    return (
        <motion.div
            className="shrink-0 mb-6 lg:mb-8 w-8 sm:w-10 lg:w-20"
            animate={{ x: [-6 * scale, 6 * scale, -6 * scale], y: [5, -5 * scale, 5] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay }}
        >
            <Image
                src="/images/midnight/crossmark.svg"
                alt="×"
                width={1024}
                height={1024}
                className="w-3/4 h-auto drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
            />
        </motion.div>
    );
}
