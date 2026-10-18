"use client";

import { useId, useState, type ReactNode } from "react";
import useSWR from "swr";
import { getTimetableDays } from "@/utils/timetable";
import { getStageMasterData } from "@/utils/supabase/masterDataAction";
import Ticket from "@/components/tt/Ticket";
import SmallTitle from "@/components/texts/SmallTitle";

// ---------- データ・型 ----------

const PLACES = ["メインステージ", "パフォーマンスエリア", "エントランスエリア", "屋内ステージ"] as const;
const GENRES = ["音楽", "ダンス", "パフォーマンス", "すべて"] as const;
// 「すべて」は絞り込み用の項目で、企画のジャンルには使わない
const ALL_GENRES = "すべて";

// ---------- 日付タブ ----------

interface DateTab {
    id: string;
    label: string;
    content: ReactNode;
}

// between: 日付タブとその日の企画の間に置く内容(絞り込みなど)
function DateTabs({ tabs, between }: { tabs: DateTab[]; between?: ReactNode }) {
    const [activeId, setActiveId] = useState(tabs[0]?.id);

    return (
        <>
            {/* 横線は幅制限の外側(外側のdiv)に引いて、ページの左端から右端まで伸ばす */}
            <div className="w-full border-b-2 border-accent-700">
            <div
                role="tablist"
                aria-label="日程"
                className="mx-auto flex h-14 max-w-4xl sm:h-20"
            >
                {tabs.map((tab, i) => {
                    const selected = tab.id === activeId;
                    return (
                        <button
                            key={tab.id}
                            type="button"
                            role="tab"
                            id={`tab-${tab.id}`}
                            aria-selected={selected}
                            aria-controls={`panel-${tab.id}`}
                            onClick={() => setActiveId(tab.id)}
                            // 幅・高さは固定(flex-1 basis-0 / 親のh)なので、文字サイズが変わっても動かない
                            className={`relative flex min-w-0 flex-1 basis-0 cursor-pointer items-center justify-center whitespace-nowrap px-1 text-center transition-colors ${
                                selected
                                    ? "text-accent-700 text-[length:calc(clamp(12px,3.6vw,22px)*1.3)]"
                                    : "text-[#9a9a9a] text-[length:clamp(12px,3.6vw,22px)]"
                            }`}
                        >
                            {/* 縦線: タブの高さの中央に置き、上下12pxずつ空けて横線とつなげない */}
                            {i > 0 && (
                                <span
                                    aria-hidden
                                    className="pointer-events-none absolute bottom-3 left-0 top-3 w-0.5 bg-accent-700"
                                />
                            )}
                            {tab.label}
                        </button>
                    );
                })}
            </div>
            </div>

            {between}

            {tabs.map((tab) => (
                <div
                    key={tab.id}
                    role="tabpanel"
                    id={`panel-${tab.id}`}
                    aria-labelledby={`tab-${tab.id}`}
                    hidden={tab.id !== activeId}
                    className="pt-12"
                >
                    {tab.content}
                </div>
            ))}
        </>
    );
}

// ---------- 絞り込み(アコーディオン) ----------

interface FilterAccordionProps {
    title: string;
    options: readonly string[];
    selected: string[];
    onToggle: (option: string) => void;
}

function FilterAccordion({ title, options, selected, onToggle }: FilterAccordionProps) {
    // 開閉の状態だけここで持つ。選択は親が持つので、閉じても保持される
    const [open, setOpen] = useState(false);
    const panelId = useId();

    return (
        <div className="min-w-0">
            {/* 左上の飾りは SmallTitle のもの。飾りが左にはみ出すので ml-7 で逃がす */}
            <SmallTitle className="mb-3 ml-7 mt-0 [&_h2]:text-2xl">{title}</SmallTitle>
            <button
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpen((v) => !v)}
                className="flex w-full cursor-pointer items-center justify-between gap-3 rounded-xl border-[3px] border-primary bg-white px-5 py-3 text-left text-lg"
            >
                {/* 複数選択でも1行に収め、はみ出す分は省略する */}
                <span className="min-w-0 truncate">
                    {selected.length > 0 ? selected.join("、") : "未選択"}
                </span>
                <svg
                    aria-hidden
                    viewBox="0 0 24 24"
                    className={`h-6 w-6 shrink-0 fill-primary transition-transform ${open ? "rotate-180" : ""}`}
                >
                    {/* 閉じているとき下向き、開いているとき上向き */}
                    <path d="M12 20 1.5 4h21z" />
                </svg>
            </button>

            <div
                id={panelId}
                hidden={!open}
                className="mt-3 flex flex-col gap-3 rounded-2xl bg-primary-100 px-5 py-5"
            >
                {options.map((option) => {
                    const checked = selected.includes(option);
                    return (
                        <label key={option} className="flex cursor-pointer select-none items-center gap-3 text-lg">
                            <input
                                type="checkbox"
                                checked={checked}
                                onChange={() => onToggle(option)}
                                className="peer sr-only"
                            />
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-sm bg-white peer-focus-visible:outline-2 peer-focus-visible:outline-primary-900">
                                {checked && (
                                    <svg aria-hidden viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-primary stroke-[3]">
                                        <path d="M4 12.5 10 18 20 6" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                )}
                            </span>
                            <span>{option}</span>
                        </label>
                    );
                })}
            </div>
        </div>
    );
}

// ---------- タイムテーブル ----------

export default function Timetable() {
    const [places, setPlaces] = useState<string[]>([]);
    const [genres, setGenres] = useState<string[]>([]);
    // SWR がマウント後にブラウザ用 Supabase クライアントで取得する。
    const { data, error, isLoading } = useSWR("stage-master-data", getStageMasterData);

    const togglePlace = (place: string) =>
        setPlaces((prev) => (prev.includes(place) ? prev.filter((p) => p !== place) : [...prev, place]));

    // 「すべて」と個別ジャンルは排他的
    const toggleGenre = (genre: string) =>
        setGenres((prev) => {
            if (prev.includes(genre)) return prev.filter((g) => g !== genre);
            if (genre === ALL_GENRES) return [ALL_GENRES];
            return [...prev.filter((g) => g !== ALL_GENRES), genre];
        });

    if (isLoading) {
        return <p role="status" className="px-5 py-10 text-center">タイムテーブルを読み込んでいます</p>;
    }

    if (error || data === null) {
        return <p role="alert" className="px-5 py-10 text-center">タイムテーブルのデータを取得できませんでした。時間をおいて再度お試しください。</p>;
    }

    const timetableDays = getTimetableDays(data ?? []);
    const tabs = timetableDays.map((day) => {
        // 分類内はOR、分類同士はAND。未選択の分類・「すべて」では絞り込まない
        const events = day.events.filter(
            (e) =>
                (places.length === 0 || places.includes(e.place)) &&
                (genres.length === 0 || genres.includes(ALL_GENRES) || genres.includes(e.genre)),
        );
        return {
            id: day.id,
            label: day.label,
            content:
                events.length === 0 ? (
                    <p className="px-5 py-10 text-center">条件に一致する企画がありません</p>
                ) : (
                    events.map((e, i) => (
                        <div key={`${e.id}-${e.time}-${i}`} className={i > 0 ? "mt-10" : ""}>
                            <Ticket
                                title={e.title}
                                time={e.time}
                                subtitle={e.subtitle}
                                imageSrc={e.imageSrc}
                                imageAlt={`${e.title}の企画画像`}
                                variant="pink"
                            />
                        </div>
                    ))
                ),
        };
    });

    return (
        <DateTabs
            tabs={tabs}
            between={
                <div className="mx-auto grid max-w-4xl grid-cols-1 items-start gap-8 px-5 pt-10 md:grid-cols-2 md:gap-10">
                    <FilterAccordion title="場所で探す" options={PLACES} selected={places} onToggle={togglePlace} />
                    <FilterAccordion title="ジャンルで探す" options={GENRES} selected={genres} onToggle={toggleGenre} />
                </div>
            }
        />
    );
}
