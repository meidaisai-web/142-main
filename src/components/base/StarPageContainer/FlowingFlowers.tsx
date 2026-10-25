
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { IMAGE_ASPECT } from "./aspect";


type FlowerProps = {
    src: string;
    size: number;
    startX: number;
    endX: number;
    startY: number;
    endY: number;
    duration: number;
};

function Flower({
    src,
    size,
    startX,
    endX,
    startY,
    endY,
    duration,
}: FlowerProps) {
    return (
        <motion.div
            className="absolute z-0"
            initial={{
                x: startX,
                y: startY,
                rotate: 0,
            }}
            animate={{
                x: [
                    startX,
                    startX + (endX - startX) * 0.25,
                    startX + (endX - startX) * 0.5,
                    startX + (endX - startX) * 0.75,
                    endX,
                ],
                y: [
                    startY,
                    startY + (endY - startY) * 0.25,
                    startY + (endY - startY) * 0.5,
                    startY + (endY - startY) * 0.75,
                    endY,
                ],
                rotate: [0, 20, -15, 25, 10],
            }}
            transition={{
                duration,
                ease: "linear",
            }}
        >
            <motion.div
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
                    src={src}
                    alt=""
                    width={size}
                    height={Math.round(size * IMAGE_ASPECT[src])}
                />
            </motion.div>
        </motion.div>
    );
}

export default function FlowingObjects() {
    const [screenWidth, setScreenWidth] = useState(0);

    useEffect(() => {
        const updateWidth = () => {
            setScreenWidth(window.innerWidth);
        };

        updateWidth();
        window.addEventListener("resize", updateWidth);

        return () => {
            window.removeEventListener("resize", updateWidth);
        };
    }, []);

    if (screenWidth === 0) return null;

    const isMobile = screenWidth < 768;
    const yOffset = isMobile ? 200 : 0;

    const leftX = isMobile ? 5 : 0;
    const rightX = screenWidth - (isMobile ? 35 : 100);

    const leftEndX = isMobile ? 10 : leftX + 45;
    const rightEndX = isMobile ? screenWidth - 35 : rightX - 20;


    return (
        <>
            <Flower
                src="/images/starcontainer/flower-small.svg"
                size={isMobile ? 14 : 20}
                startX={leftX}
                endX={leftEndX}
                startY={-150 + yOffset}
                endY={
                    isMobile
                        ? screenWidth * 0.8 + yOffset
                        : screenWidth * 0.9 + yOffset
                }
                duration={14}
            />
            <Flower
                src="/images/starcontainer/flower-small.svg"
                size={isMobile ? 14 : 20}
                startX={rightX}
                endX={rightEndX}
                startY={-150 + yOffset}
                endY={
                    isMobile
                        ? screenWidth * 0.5 + yOffset
                        : screenWidth * 0.7 + yOffset
                }
                duration={14}
            />
            <Flower
                src="/images/starcontainer/flower-medium.svg"
                size={isMobile ? 20 : 30}
                startX={leftX + (isMobile ? 10 : 25)}
                endX={leftEndX}
                startY={-300 + yOffset}
                endY={
                    isMobile
                        ? screenWidth * 1.2 + yOffset
                        : screenWidth * 0.5 + yOffset
                }
                duration={17}
            />
            <Flower
                src="/images/starcontainer/flower-medium.svg"
                size={isMobile ? 20 : 30}
                startX={rightX}
                endX={rightEndX}
                startY={-200 + yOffset}
                endY={
                    isMobile
                        ? screenWidth * 0.9 + yOffset
                        : screenWidth * 0.8 + yOffset
                }
                duration={15}
            />
            {!isMobile && (
                <Flower
                    src="/images/starcontainer/flower-large.svg"
                    size={30}
                    startX={rightX + 20}
                    endX={rightEndX - 10}
                    startY={-350 + yOffset}
                    endY={screenWidth * 0.4 + yOffset}
                    duration={18}
                />
            )}
        </>
    );
}