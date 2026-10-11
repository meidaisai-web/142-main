import type { Project } from "./DayAccordion";
import type { MTypeKey } from "./types";

// 開催日（アコーディオンの順番もこの順）
export const DAYS = [
    { date: "10月30日", isoDate: "2026-10-30" },
    { date: "10月31日", isoDate: "2026-10-31" },
    { date: "11月1日", isoDate: "2026-11-01" },
] as const;

export type DayKey = (typeof DAYS)[number]["isoDate"];

// タイプ × 日付 ごとのおすすめ企画。id は /search/[id] のid、name は企画名、group は団体名
// 入れていない日は「準備中」と表示される
export const recommendations: Record<MTypeKey, Record<DayKey, Project[]>> = {
    "A×C": {
        "2026-10-30": [
            { id: "1", name: "ダミー企画A（A×C）", group: "ダミー団体A" },
            { id: "2", name: "ダミー企画B（A×C）", group: "ダミー団体B" },
            { id: "3", name: "ダミー企画C（A×C）", group: "ダミー団体C" },
        ],
        "2026-10-31": [],
        "2026-11-01": [],
    },
    "A×D": {
        "2026-10-30": [
            { id: "1", name: "ダミー企画A（A×D）", group: "ダミー団体A" },
            { id: "2", name: "ダミー企画B（A×D）", group: "ダミー団体B" },
        ],
        "2026-10-31": [],
        "2026-11-01": [],
    },
    "B×C": {
        "2026-10-30": [
            { id: "1", name: "ダミー企画A（B×C）", group: "ダミー団体A" },
        ],
        "2026-10-31": [],
        "2026-11-01": [],
    },
    "B×D": {
        "2026-10-30": [
            { id: "1", name: "ダミー企画A（B×D）", group: "ダミー団体A" },
            { id: "3", name: "ダミー企画C（B×D）", group: "ダミー団体C" },
        ],
        "2026-10-31": [],
        "2026-11-01": [],
    },
};
