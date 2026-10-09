import SectionTitle from "@/components/texts/SectionTitle";
import type { MTypeKey } from "./types";

// おすすめの企画。結果画面（/mtype/answer）とシェア用画面（/mtype/share）で共通
export default function Recommendations({ type }: { type: MTypeKey }) {
    void type; // タイプ別の企画を出すときに使う
    return (
        <>
            <SectionTitle>おすすめの企画</SectionTitle>
        </>
    )
}
