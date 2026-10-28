
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { IMAGE_ASPECT } from "./aspect";


type FlowerData = {
    id: number;
    src: string;
    size: number;
    top: number;
    left?: string;
    right?: string;
    delay: number;
};

export default function FloatingFlowers() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [pageHeight, setPageHeight] = useState(0);
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const container = containerRef.current;
        const page = container?.parentElement;

        if (!page) return;

        const updateHeight = () => {
            setPageHeight(page.offsetHeight);
        };

        const updateScreen = () => {
            setIsDesktop(window.innerWidth >= 1024);
        };

        const observer = new ResizeObserver(updateHeight);
        observer.observe(page);

        updateHeight();
        updateScreen();

        window.addEventListener("resize", updateScreen);

        return () => {
            observer.disconnect();
            window.removeEventListener("resize", updateScreen);
        };
    }, []);

    const flowers: FlowerData[] = [];
    const spacing = 700;
    const count = Math.ceil(pageHeight / spacing);

    for (let i = 0; i < count; i++) {
        const isLeft = i % 2 === 0;

        flowers.push({
            id: i,
            src:
                i % 3 === 0
                    ? "/images/starcontainer/flower-small.svg"
                    : "/images/starcontainer/flower-medium.svg",
            size: isDesktop
                ? (i % 3 === 0 ? 20 : 30)
                : (i % 3 === 0 ? 14 : 20),
            top: 180 + i * spacing,
            left: isLeft ? (isDesktop ? "6%" : "3%") : undefined,
            right: isLeft ? undefined : (isDesktop ? "6%" : "3%"),
            delay: (i % 4) * 0.6,
        });
    }

    return (
        <div
            ref={containerRef}
            className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
        >
            {flowers.map((flower) => (
                <motion.div
                    key={flower.id}
                    className="absolute"
                    style={{
                        top: flower.top,
                        left: flower.left,
                        right: flower.right,
                        width: flower.size,
                    }}
                    animate={{
                        x: [-18, 8, -18],
                        y: [0, -10, 0],
                        rotate: [0, 8, -8, 0],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: flower.delay,
                    }}
                >
                    <Image
                        src={flower.src}
                        alt=""
                        width={flower.size}
                        height={Math.round(flower.size * IMAGE_ASPECT[flower.src])}
                    />
                </motion.div>
            ))}
        </div>
    );
}
