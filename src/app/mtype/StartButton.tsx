'use client'

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const buttonClassName = "bg-primary border-2 border-primary-900 rounded-full px-6 py-2 w-fit hover:bg-primary-700 active:bg-primary-900 transition-colors duration-150 ease-out mx-auto";

export default function StartButton() {
    const ref = useRef<HTMLAnchorElement>(null);
    const [isBelowViewport, setIsBelowViewport] = useState(false);

    useEffect(() => {
        const update = () => {
            const el = ref.current;
            if (!el) return;
            // StickyBanner(高さ約83px)はmd未満でのみ表示されるため、その分も「隠れている」とみなす
            const bannerHeight = window.innerWidth < 768 ? 83 : 0;
            const rect = el.getBoundingClientRect();
            setIsBelowViewport(rect.bottom > window.innerHeight - bannerHeight && rect.top > 0);
        };
        update();
        window.addEventListener("scroll", update, { passive: true });
        window.addEventListener("resize", update);
        return () => {
            window.removeEventListener("scroll", update);
            window.removeEventListener("resize", update);
        };
    }, []);

    return (
        <>
            <Link href="/mtype/question" ref={ref} className="block mt-10">
                <div className={`${buttonClassName} ${isBelowViewport ? "invisible" : ""}`}>さっそく診断を始める</div>
            </Link>
            {isBelowViewport && (
                // StickyBanner(z-40, 高さ約83px, mdで非表示)の上に表示する
                <div className="fixed left-0 right-0 z-50 flex justify-center pointer-events-none bottom-[95px] md:bottom-6">
                    <Link href="/mtype/question" className="pointer-events-auto shadow-lg rounded-full">
                        <div className={buttonClassName}>さっそく診断を始める</div>
                    </Link>
                </div>
            )}
        </>
    );
}
