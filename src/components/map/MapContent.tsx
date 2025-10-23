'use client';

import Tab from "../Tab";
import LegendMap from "./LegendMap";
import LocationMap from "./LocationMap";

export default function MapContent() {
    const tabs = [
        { key: 0, label: "建物から探す", content: <LocationMap />},
        { key: 1, label: "凡例から探す", content: <LegendMap /> },
    ]
    return (
        <div>
            <Tab tabs={tabs} />
        </div>
    )
}