"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

type CloudColor = "green" | "pink" | "purple";
type CloudSize = "small" | "medium";

type FloatingCloudProps = {
    color: CloudColor;
    size: CloudSize;
    top: string;
    left?: string;
    right?: string;
};

const cloudImages = {
    green: "/images/svg/animation/Green-Cloud.svg",
    pink: "/images/svg/animation/Pink-Cloud.svg",
    purple: "/images/svg/animation/Purple-Cloud.svg",
};

const cloudSizes = {
    small: 65,
    medium: 80,
};

export default function FloatingCloud({
    color,
    size,
    top,
    left,
    right,
}: FloatingCloudProps) {
    const [isDesktop, setIsDesktop] = useState(false);

    const cloudSize = isDesktop
        ? cloudSizes[size]
        : size === "small"
            ? 40
            : 58;

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

    return (
        <motion.div
            className="absolute z-0"
            style={{
                top,
                left,
                right,
                width: cloudSize,
            }}
            animate={{
                x: [-18, 8, -18],
                y: [0, -10, 0],
            }}
            transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
            }}
        >
            <Image
                src={cloudImages[color]}
                alt=""
                width={cloudSize}
                height={cloudSize}
            />
        </motion.div>
    );
}