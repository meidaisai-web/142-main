"use client";

import { useCallback, useEffect, useId, useRef, useState, type ReactNode } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import useSWR from "swr";
import { getTimelineRange, getTimetableDays } from "@/utils/timetable";
import { getStageMasterData } from "@/utils/supabase/masterDataAction";
import TimetableTimeline from "@/components/tt/TimetableTimeline";
import SmallTitle from "@/components/texts/SmallTitle";

// ---------- データ・型 ----------

const PLACES = ["メインステージ", "パフォーマンスエリア", "エントランスエリア", "屋内ステージ"] as const;
const GENRES = ["音楽", "ダンス", "パフォーマンス", "すべて"] as const;
// 「すべて」は絞り込み用の項目で、企画のジャンルには使わない
const ALL_GENRES = "すべて";
const ALL_PLACES = "すべて";

// ---------- 日付タブ ----------

interface DateTab {
    id: string;
    label: string;
    content: ReactNode;
}

// between: 日付タブとその日の企画の間に置く内容(絞り込みなど)
function DateTabs({ tabs, between }: { tabs: DateTab[]; between?: ReactNode }) {
    const [activeId, setActiveId] = useState(tabs[0]?.id);
    const contentRef = useRef<SwiperType | null>(null);
    const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);
    const tabsWrapRef = useRef<HTMLDivElement | null>(null);
    const indicatorRef = useRef<HTMLDivElement | null>(null);
    const tabTouchRef = useRef<{ x: number; y: number } | null>(null);
    const [indicator, setIndicator] = useState({ left: 0, width: 0 });

    // PR #112 の Tab と同じく、スワイプの進行に合わせて下線を補間する。
    const moveIndicator = useCallback((position: number) => {
        const index = Math.floor(position);
        const fraction = position - index;
        const wrapLeft = tabsWrapRef.current?.getBoundingClientRect().left ?? 0;
        const button = buttonRefs.current[index];
        if (!button) return;
        const current = button.getBoundingClientRect();
        const next = buttonRefs.current[index + 1]?.getBoundingClientRect();
        setIndicator({
            left: current.left - wrapLeft + (next ? (next.left - current.left) * fraction : 0),
            width: current.width + (next ? (next.width - current.width) * fraction : 0),
        });
    }, []);

    const setIndicatorTransition = (enabled: boolean) => {
        if (indicatorRef.current) {
            indicatorRef.current.style.transition = enabled ? "transform 200ms, width 200ms" : "none";
        }
    };

    useEffect(() => {
        const updateIndicator = () => moveIndicator(Math.max(0, tabs.findIndex((tab) => tab.id === activeId)));
        updateIndicator();
        window.addEventListener("resize", updateIndicator);
        return () => window.removeEventListener("resize", updateIndicator);
    }, [activeId, tabs, moveIndicator]);

    // 絞り込みで企画数が変わったときも、表示中の日付の高さに合わせる。
    useEffect(() => {
        contentRef.current?.updateAutoHeight(0);
    }, [tabs]);

    return (
        <>
            <div className="relative mx-auto mt-10 max-w-4xl">
            <div
                ref={tabsWrapRef}
                role="tablist"
                aria-label="日程"
                className="flex h-16"
                onTouchStart={(event) => { tabTouchRef.current = { x: event.touches[0].clientX, y: event.touches[0].clientY }; }}
                onTouchEnd={(event) => {
                    const start = tabTouchRef.current;
                    tabTouchRef.current = null;
                    if (!start) return;
                    const dx = event.changedTouches[0].clientX - start.x;
                    const dy = event.changedTouches[0].clientY - start.y;
                    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) {
                        if (dx < 0) contentRef.current?.slideNext();
                        else contentRef.current?.slidePrev();
                    }
                }}
            >
                {tabs.map((tab, i) => {
                    const selected = tab.id === activeId;
                    return (
                        <button
                            key={tab.id}
                            ref={(element) => { buttonRefs.current[i] = element; }}
                            type="button"
                            role="tab"
                            id={`tab-${tab.id}`}
                            aria-selected={selected}
                            aria-controls={`panel-${tab.id}`}
                            onClick={() => {
                                setActiveId(tab.id);
                                setIndicatorTransition(true);
                                contentRef.current?.slideTo(i);
                                moveIndicator(i);
                            }}
                            // 幅・高さは固定(flex-1 basis-0 / 親のh)なので、文字サイズが変わっても動かない
                            className={`relative flex min-w-0 flex-1 basis-0 cursor-pointer items-center justify-center whitespace-nowrap px-1 text-center font-bold transition-all duration-250 ${
                                selected
                                    ? "text-accent-900 text-lg sm:text-xl"
                                    : "text-gray-500 text-base sm:text-lg"
                            }`}
                        >
                            {/* 縦線: タブの高さの中央に置き、上下12pxずつ空けて横線とつなげない */}
                            {i > 0 && (
                                <span
                                    aria-hidden
                                    className="pointer-events-none absolute bottom-2 left-0 top-2 w-0.5 bg-gray-500"
                                />
                            )}
                            {tab.label}
                        </button>
                    );
                })}
            </div>
            <div
                ref={indicatorRef}
                aria-hidden="true"
                className="pointer-events-none absolute bottom-0 h-0.5 bg-accent-900"
                style={{ transform: `translateX(${indicator.left}px)`, width: `${indicator.width}px` }}
            />
            </div>

            {between}

            <Swiper
                slidesPerView={1}
                spaceBetween={100}
                autoHeight
                watchOverflow
                onSwiper={(swiper) => {
                    contentRef.current = swiper;
                    setIndicatorTransition(true);
                }}
                onSlideChange={(swiper) => {
                    setActiveId(tabs[swiper.activeIndex]?.id);
                    setIndicatorTransition(true);
                    moveIndicator(swiper.activeIndex);
                }}
                onProgress={(_, progress) => {
                    setIndicatorTransition(false);
                    const lastIndex = tabs.length - 1;
                    moveIndicator(Math.min(Math.max(progress * lastIndex, 0), lastIndex));
                }}
                onTouchStart={() => setIndicatorTransition(false)}
                onTouchEnd={() => setIndicatorTransition(true)}
                className="w-full"
            >
                {tabs.map((tab) => (
                    <SwiperSlide key={tab.id}>
                        <div
                            role="tabpanel"
                            id={`panel-${tab.id}`}
                            aria-labelledby={`tab-${tab.id}`}
                            aria-hidden={tab.id !== activeId}
                            inert={tab.id !== activeId}
                            className="pt-12"
                        >
                            {tab.content}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
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
        setPlaces((prev) => {
            if (prev.includes(place)) return prev.filter((p) => p !== place);
            if (place === ALL_PLACES) return [ALL_PLACES];
            return [...prev.filter((p) => p !== ALL_PLACES), place];
        });

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
    const allEvents = timetableDays.flatMap((day) => day.events);
    const range = getTimelineRange(allEvents);
    const stageOptions = [...new Set<string>([...PLACES, ...allEvents.map((event) => event.place).filter(Boolean)])];
    const visibleStages = stageOptions.filter((stage) => places.length === 0 || places.includes(ALL_PLACES) || places.includes(stage));
    const tabs = timetableDays.map((day) => {
        return {
            id: day.id,
            label: day.label,
            content: <TimetableTimeline events={day.events} stages={visibleStages} genres={genres} month={day.month} date={day.date} range={range} />,
        };
    });

    return (
        <DateTabs
            tabs={tabs}
            between={
                <div className="mx-auto grid max-w-4xl grid-cols-1 items-start gap-8 px-5 pt-10 md:grid-cols-2 md:gap-10">
                    <FilterAccordion title="場所で探す" options={[...stageOptions, ALL_PLACES]} selected={places} onToggle={togglePlace} />
                    <FilterAccordion title="ジャンルで探す" options={GENRES} selected={genres} onToggle={toggleGenre} />
                </div>
            }
        />
    );
}
