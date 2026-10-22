'use client'

import { Location } from "@/utils/models/MapDataType"
import { useState } from "react";
import { searchLocation } from "@/utils/managers/mapManager";
import MapItem from "./MapItem";
import Image from "next/image";
import CheckItem from "./CheckItem";
import FrameBox from "./FrameBox";

export default function LocationMap() {
    const [selected, setSelected] = useState<Location | null>(null);

    const locationList: { name: Location; label: string }[] = [
        { name: "第一校舎", label: "第一校舎" },
        { name: "メディア棟", label: "メディア棟" },
        { name: "和泉ラーニングスクエア", label: "和泉ラーニングスクエア（LS）" },
        { name: "和泉図書館", label: "和泉図書館" },
        { name: "食堂", label: "食堂" },
        { name: "第二学生会館", label: "第二学生会館" },
    ];

    return (
        <div className="w-full max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 md:grid-flow-col md:grid-rows-4 gap-x-16 gap-y-3 mt-0 mb-4 p-5 border-3 border-[#F8CAD1] bg-[#FFFBFB] text-black rounded-b-2xl group-data-[active=0]:rounded-tr-2xl group-data-[active=1]:rounded-tl-2xl">
                <CheckItem label="未選択" checked={selected === null} onChange={() => setSelected(null)} />
                {locationList.map((location) => (
                    <CheckItem
                        key={location.name}
                        label={location.label}
                        checked={selected === location.name}
                        onChange={() => setSelected(selected === location.name ? null : location.name)}
                    />
                ))}
            </div>
            {locationList
                .filter((location) => selected === null || selected === location.name)
                .map((location) => (
                    <section key={location.name} className="mb-6">
                        <h2 className={`relative isolate inline-block font-bold text-xl text-black mb-3 px-10 py-3 before:content-[''] before:absolute before:-z-10 before:inset-y-0 ${location.name === "食堂" ? "before:-right-4 before:left-3" : "before:-inset-x-4"} before:bg-[length:100%_100%] before:bg-no-repeat ${
                            location.name === "和泉ラーニングスクエア"
                                ? "before:bg-[url('/images/campusmap/aaaa_aligned_to_3rd.svg')]"
                                : location.name === "第二学生会館"
                                ? "before:bg-[url('/images/campusmap/icon/Group%20645.svg')]"
                                : "before:bg-[url('/images/campusmap/marker.svg')]"
                        }`}>{location.label}</h2>
                        <FrameBox>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-8">
                                {searchLocation(location.name).map((legendSection, idx) => (
                                    <div key={idx}>
                                        <Image src={legendSection.src} alt={`${legendSection.legend}の画像`} width={600} height={300} className="object-fit w-60 max-w-full" />
                                        <div className="flex flex-col gap-6 mt-6">
                                            {legendSection.contents.map((item, id) => (
                                                <MapItem key={id} {...item} />
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </FrameBox>
                    </section>
                ))}
        </div>
    )
}
