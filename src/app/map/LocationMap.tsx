'use client'

import { Location } from "@/utils/models/MapDataType"
import { MapAccordion } from "./MapAccordion"
import { useState, useRef } from "react";
import { searchLocation } from "@/utils/managers/mapManager";
import MapItem from "./MapItem";
import Image from "next/image";

export default function LocationMap() {
    const [isOpenId, setIsOpenId] = useState<number | null>(null);
    const accordionRefs = useRef<(HTMLDivElement | null)[]>([]);
    
    // カスタムスクロール関数: スピードを調整可能
    const smoothScrollTo = (targetY: number, duration: number = 600) => {
        const startY = window.scrollY;
        const distance = targetY - startY;
        const startTime = performance.now();

        const easeInOutCubic = (t: number): number => {
            return t < 0.5
                ? 4 * t * t * t
                : 1 - Math.pow(-2 * t + 2, 3) / 2;
        };

        const scroll = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeProgress = easeInOutCubic(progress);
            window.scrollTo(0, startY + distance * easeProgress);

            if (progress < 1) {
                requestAnimationFrame(scroll);
            }
        };

        requestAnimationFrame(scroll);
    };

    const locationList: { name: Location }[] = [
        {
            name: "第一校舎"
        },
        {
            name: 'メディア棟'
        },
        {
            name: '和泉ラーニングスクエア'
        },
        {
            name: '和泉図書館'
        },
        {
            name: '第二学生会館'
        },
        {
            name: '食堂'
        }
    ]

    function handleAccordionClick(index: number) {
        const currentOpenId = isOpenId;
        const newOpenId = isOpenId === index ? null : index;

        // 状態を更新
        setIsOpenId(newOpenId);

        // スクロール処理: 既に開いているアコーディオンより下のアコーディオンを開く場合
        if (currentOpenId !== null && currentOpenId < index && newOpenId === index) {
            // スクロール処理を実行
            setTimeout(() => {
                const offset = -100; // スクロール位置を少し上に調整
                const top = accordionRefs.current[currentOpenId]?.getBoundingClientRect().top || 0;
                const targetY = window.scrollY + top + offset;

                smoothScrollTo(targetY, 900);
            }, 300); // アコーディオンの開閉アニメーション後にスクロール
        }
    }

    return (
        <div className="flex flex-col border-b-2 border-white w-full max-w-4xl mx-auto">
            {locationList.map((location, index) => (
                <div key={index} ref={(el) => { accordionRefs.current[index] = el }}>
                    <MapAccordion isOpen={isOpenId === index} onClick={() => handleAccordionClick(index)} title={location.name}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-5">
                        {searchLocation(location.name).map((legendSection, idx) => (
                            <div key={idx}>
                                <Image src={legendSection.src} alt={`${legendSection.legend}の画像`} width={600} height={300} className="object-fit w-60 mt-4" />
                                <div className="flex flex-col gap-2 mt-2">
                                    {legendSection.contents.map((item, id) => (
                                        <MapItem key={id} {...item} />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </MapAccordion>
                </div>
            ))}
        </div>
    )
}