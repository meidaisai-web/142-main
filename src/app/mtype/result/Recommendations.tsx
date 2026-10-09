import SectionTitle from "@/components/texts/SectionTitle";
import DayAccordion from "./DayAccordion";
import { DAYS, recommendations } from "./recommendationData";
import type { MTypeKey } from "./types";

// おすすめの企画。結果画面（/mtype/result）とシェア用画面（/mtype/share）で共通。タイプ・日付ごとに内容が変わる
export default function Recommendations({ type }: { type: MTypeKey }) {
    return (
        <>
            <SectionTitle>おすすめの企画</SectionTitle>
            <div className="flex flex-col items-center gap-4 pt-5">
                {DAYS.map((day) => (
                    <DayAccordion
                        key={day.isoDate}
                        date={day.date}
                        isoDate={day.isoDate}
                        projects={recommendations[type][day.isoDate]}
                    />
                ))}
            </div>
        </>
    )
}
