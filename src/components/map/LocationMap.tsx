'use client'

import { Location } from "@/utils/models/MapDataType"
import { MapAccordion } from "./MapAccordion"
import { useState, useRef } from "react";
import { searchLocation } from "@/utils/managers/mapManager";
import MapItem from "./MapItem";

export default function LocationMap() {
    const [isOpenId, setIsOpenId] = useState<number | null>(null);
    const accordionRefs = useRef<(HTMLDivElement | null)[]>([]);
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
                const top = accordionRefs.current[index]?.getBoundingClientRect().top || 0;
                window.scrollTo({
                    top: window.scrollY + top + offset,
                    behavior: "smooth"
                });
            }, 300); // アコーディオンの開閉アニメーション後にスクロール
        }
    }

    return (
        <div className="flex flex-col gap-6">
            {locationList.map((location, index) => (
                <div key={index} ref={(el) => { accordionRefs.current[index] = el }}>
                    <MapAccordion isOpen={isOpenId === index} onClick={() => handleAccordionClick(index)} title={location.name}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {searchLocation(location.name).map((legendSection, idx) => (
                            <div key={idx}>
                                <h4>{legendSection.legend}</h4>
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