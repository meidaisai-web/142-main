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
            animate={{ x: [-8 * scale, 4 * scale, -8 * scale], y: [0, -10 * scale, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay }}
        >
            <Image
                src="/images/midnight/crossmark.png"
                alt="×"
                width={1024}
                height={1024}
                className="w-full h-auto drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
            />
        </motion.div>
    );
}
