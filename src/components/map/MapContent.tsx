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
                <ZoomableImage src="/images/campusmap/map.png" alt="キャンパスマップ" width={800} height={800} className="w-full mt-8 rounded-xl max-w-2xl mx-auto" />
            </PageContainer>
            <Tab tabs={tabs} />
        </div>
    )
}