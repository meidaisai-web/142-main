'use client';

import { getLegendImageSrc, searchLegend } from "@/utils/managers/mapManager";
import MapItem from "./MapItem";
import CheckItem from "./CheckItem";
import FrameBox from "./FrameBox";
import { useState } from "react";
import Image from "next/image";
import { Legend } from "@/utils/models/MapDataType";

const legendList: Legend[] = [
    'インフォメーションブース',
    'AED',
    '休憩所',
    'ごみステーション',
    'バリアフリートイレ',
    '自動販売機',
    '喫煙所',
    'ATM',
    '公衆電話',
    '診療所',
    'ステージ',
];

export default function LegendMap() {
    const [selected, setSelected] = useState<Legend | null>(null);

    return (
        <div className="w-full max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 md:grid-flow-col md:grid-rows-6 gap-x-16 gap-y-3 mt-0 mb-4 p-5 border-3 border-[#F8CAD1] bg-[#FFFBFB] text-black rounded-b-2xl group-data-[active=0]:rounded-tr-2xl group-data-[active=1]:rounded-tl-2xl">
                <CheckItem label="未選択" checked={selected === null} onChange={() => setSelected(null)} />
                {legendList.map((legend) => (
                    <CheckItem
                        key={legend}
                        label={legend}
                        checked={selected === legend}
                        onChange={() => setSelected(selected === legend ? null : legend)}
                    />
                ))}
            </div>
            {legendList
                .filter((legend) => selected === null || selected === legend)
                .map((legend) => (
                    <section key={legend} className="mb-6">
                        <FrameBox>
                            <Image src={getLegendImageSrc(legend)} alt={`${legend}の画像`} width={600} height={300} className="object-fit w-60 max-w-full mb-6" />
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-8">
                                {searchLegend(legend).map((data, index) => (
                                    <MapItem key={index} {...data} />
                                ))}
                            </div>
                        </FrameBox>
                    </section>
                ))}
        </div>
    )
}
