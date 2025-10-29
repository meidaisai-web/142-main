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
            src: "/images/campusmap/icon/info-icon.png"
        },
        {
            name: 'AED',
            src: "/images/campusmap/icon/aed-icon.png"
        },
        {
            name: '休憩所',
            src: "/images/campusmap/icon/rest-icon.png"
        },
        {
            name: 'ごみステーション',
            src: "/images/campusmap/icon/gs-icon.png"
        },
        {
            name: 'バリアフリートイレ',
            src: "/images/campusmap/icon/toilet-icon.png"
        },
        {
            name: '自動販売機',
            src: "/images/campusmap/icon/vending-icon.png"
        },
        {
            name: '喫煙所',
            src: "/images/campusmap/icon/smoking-icon.png"
        },
        {
            name: 'ATM',
            src: "/images/campusmap/icon/atm-icon.png"
        },
        {
            name: '公衆電話',
            src: "/images/campusmap/icon/phone-icon.png"
        },
        {
            name: '診療所',
            src: "/images/campusmap/icon/infirmary-icon.png"
        },
        {
            name: 'ステージ',
            src: "/images/campusmap/icon/stage-icon.png"
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

function getEnglishName(name: Legend): string {
    const translations: Record<string, string> = {
        'インフォメーションブース': 'Information',
        'AED': 'AED',
        '休憩所': 'Rest Area',
        'ごみステーション': 'Garbage Dump',
        'バリアフリートイレ': 'Accessible Restroom',
        '自動販売機': 'Vending Machine',
        '喫煙所': 'Smoking Area',
        'ATM': 'Automatic Teller Machine',
        '公衆電話': 'Telephone',
        '診療所': 'Infirmary',
        'ステージ': 'Stage',
    };
    return translations[name] || '';
}
function LegendButton({ name, src, onClick }: LegendButtonProps) {
    return (
        <button onClick={onClick} className="w-75 h-12 font-bold p-2 m-2 border-2 rounded-lg bg-white text-black mt-2 relative text-left">
            <div className="font-bold text-md -mt-1.5 ml-6">{name}</div>
            <div className="text-sm text-black leading-tight -mt-1.5 ml-6">
                {/* 英語表記（ここに書く！） */}
                {getEnglishName(name)}
            </div>
            <Image src={src} alt={name} width={32} height={32} className="object-contain absolute top-0.25 md:right-1 md:mt-1 mt-0.75 right-0.75"></Image>
            <Image src="/images/campusmap/Triangle.png" alt="三角ボタン" width={9} height={9} className="object-contain absolute top-0.25 left-3 mt-5"></Image>
        </button>
    )
}