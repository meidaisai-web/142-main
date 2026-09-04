"use client";
import FloatingCloud from "./FloatingCloud";
import { useRef, useState, useEffect } from "react";

export default function CloudPageContainer({
    children,
}: {
    children: React.ReactNode;
}) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [containerHeight, setContainerHeight] = useState(0);
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

    useEffect(() => {
        if (!containerRef.current) return;

        const updateHeight = () => {
            if (containerRef.current) {
                setContainerHeight(containerRef.current.offsetHeight);
            }
        };

        updateHeight();

        const observer = new ResizeObserver(updateHeight);

        observer.observe(containerRef.current);

        return () => {
            observer.disconnect();
        };
    }, []);

    const cloudCount = Math.ceil(containerHeight / 1500);
    const cloudPattern = [

        {
            color: "purple" as const,
            size: "small" as const,
            top: 100,
            left: "6%" as const,
            right: undefined,
        },
        {
            color: "pink" as const,
            size: "medium" as const,
            top: 400,
            left: undefined,
            right: "5%" as const,
        },
        {
            color: "green" as const,
            size: "small" as const,
            top: 600,
            left: "6%" as const,
            right: undefined,
        },
        {
            color: "purple" as const,
            size: "medium" as const,
            top: 850,
            left: undefined,
            right: "5%" as const,
        },
        {
            color: "pink" as const,
            size: "small" as const,
            top: 1100,
            left: "5%" as const,
            right: undefined,
        },
        {
            color: "green" as const,
            size: "medium" as const,
            top: 1400,
            left: undefined,
            right: "6%" as const,
        },
    ];

    const desktopClouds = isDesktop
        ? [
            {
                color: "green" as const,
                size: "small" as const,
                top: 180,
                left: undefined,
                right: "8%",
            },
            {
                color: "purple" as const,
                size: "small" as const,
                top: 1000,
                left: undefined,
                right: "6%",
            },
            {
                color: "pink" as const,
                size: "small" as const,
                top: 350,
                left: "5%",
                right: undefined,
            },
        ]
        : [];

    const allClouds = [...cloudPattern, ...desktopClouds];

    const clouds = Array.from({ length: cloudCount }, (_, i) =>
        allClouds.map((cloud, j) => ({
            ...cloud,
            top: cloud.top + i * 1500,
            key: `${i}-${j}`,
        }))
    )
        .flat()
        .filter((cloud) => cloud.top <= containerHeight);

    return (
        <div
            ref={containerRef}
            className="relative w-full overflow-hidden"
        >

            {/* 雲 */}
            {clouds.map((cloud) => (
                <FloatingCloud
                    key={cloud.key}
                    color={cloud.color}
                    size={cloud.size}
                    top={`${cloud.top}px`}
                    left={cloud.left ?? undefined}
                    right={cloud.right ?? undefined}
                />
            ))}

            {/* コンテンツ */}
            <div className="relative z-10 px-10 sm:px-20 md:px-25 lg:px-40 max-w-320 mx-auto">
                {children}
            </div>
        </div>
    );
}