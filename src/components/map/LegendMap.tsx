'use client';

import { searchLegend } from "@/utils/managers/mapManager";
import MapItem from "./MapItem";
import { useState } from "react";
import { Legend } from "@/utils/models/MapDataType";
import Image from "next/image";
import { useRef } from "react";

export default function LegendMap() {
    const [selectedLegend, setSelectedLegend] = useState<Legend | null>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    function handleLegendClick(legend: Legend) {
        setSelectedLegend(legend);
        const offset = -100; // スクロール位置を少し上に調整
        const top = contentRef.current?.getBoundingClientRect().top || 0;
        window.scrollTo({
            top: window.scrollY + top + offset,
            behavior: "smooth"
        });
    }
    const LegendList: { name: Legend; src: string }[] = [
        {
            name: 'インフォメーションブース',
            src: "/images/campusmap/icon/info.png"
        },
        {
            name: 'AED',
            src: "/images/campusmap/icon/aed.png"
        },
        {
            name: '休憩所',
            src: "/images/campusmap/icon/rest.png"
        },
        {
            name: 'ごみステーション',
            src: "/images/campusmap/icon/gs.png"
        },
        {
            name: 'バリアフリートイレ',
            src: "/images/campusmap/icon/toilet.png"
        },
        {
            name: '自動販売機',
            src: "/images/campusmap/icon/vending.png"
        },
        {
            name: '喫煙所',
            src: "/images/campusmap/icon/smoking.png"
        },
        {
            name: 'ATM',
            src: "/images/campusmap/icon/atm.png"
        },
        {
            name: '公衆電話',
            src: "/images/campusmap/icon/phone.png"
        },
        {
            name: '診療所',
            src: "/images/campusmap/icon/infirmary.png"
        },
        {
            name: 'ステージ',
            src: "/images/campusmap/icon/stage.png"
        },
    ]
    return (
        <div>
            <div className="flex justify-center">
                <div className="grid grid-col-1 md:grid-cols-2 gap-2 mb-4 place-items-center">
                    {LegendList.map((legend) => (
                        <LegendButton
                            key={legend.name}
                            name={legend.name}
                            src={legend.src}
                            onClick={() => handleLegendClick(legend.name)}
                        />
                    ))}
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8" ref={contentRef}>
                {searchLegend(selectedLegend).map((data, index) => (
                    <MapItem key={index} {...data} />

                ))}
            </div>
        </div>
    )
}

interface LegendButtonProps {
    name: Legend;
    src: string;
    onClick: () => void;
}

// 画像にアイコン・和名・英名が含まれているので、画像だけをボタンいっぱいに表示する
function LegendButton({ name, src, onClick }: LegendButtonProps) {
    return (
        <button onClick={onClick} className="w-75 h-12 p-1 m-2 border-2 rounded-lg bg-white mt-2 flex items-center justify-center">
            <Image src={src} alt={name} width={423} height={76} className="h-full w-auto object-contain"></Image>
        </button>
    )
}
