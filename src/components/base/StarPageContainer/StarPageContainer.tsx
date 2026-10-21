"use client";

import { useEffect, useRef, useState } from "react";
import ShootingStar from "./ShootingStar";
import FlowingFlowers from "./FlowingFlowers";
import FloatingStar from "./FloatingStar";
import FloatingFlowers from "./FloatingFlower";

export default function PageContainer({
    children,
}: {
    children: React.ReactNode;
}) {
    const contentRef = useRef<HTMLDivElement>(null);
    const [pageHeight, setPageHeight] = useState(0);

    useEffect(() => {
        const element = contentRef.current;
        if (!element) return;

        const observer = new ResizeObserver(() => {
            setPageHeight(element.getBoundingClientRect().height);
        });

        observer.observe(element);
        setPageHeight(element.getBoundingClientRect().height);

        return () => observer.disconnect();
    }, []);

    return (
        <div className="relative isolate overflow-hidden">
            <ShootingStar pageHeight={pageHeight} />
            <FlowingFlowers />
            <FloatingFlowers />
            <FloatingStar pageHeight={pageHeight} />
            <div
                ref={contentRef}
                className="relative z-10 w-full px-12 sm:px-20 md:px-25 lg:px-40 max-w-320 mx-auto pb-60"
            >
                {children}
            </div>
        </div>
    );
}