'use client';

import PageContainer from "../base/PageContainer";
import Tab from "../Tab";
import ZoomableImage from "../ZoomableImage";
import LegendMap from "./LegendMap";
import LocationMap from "./LocationMap";

export default function MapContent() {
    const tabs = [
        { key: 0, label: "建物から探す", content: <LocationMap />},
        { key: 1, label: "凡例から探す", content: <LegendMap /> },
    ]
    return (
        <div>
            <PageContainer>
                <ZoomableImage src="/images/campusmap/campusmap142.svg" alt="キャンパスマップ" width={462} height={381} className="w-[calc(100vw-6rem)] sm:w-[calc(100vw-10rem)] md:w-[calc(100vw-12.5rem)] lg:w-[calc(min(100vw,80rem)-20rem)] h-auto mt-8 rounded-xl mx-auto" />
            </PageContainer>
            <Tab tabs={tabs} showTriangle buttonStyle cornerImage="/images/campusmap/sentakupoint.svg" instant />
            <div className="h-50" />
        </div>
    )
}