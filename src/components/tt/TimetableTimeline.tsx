"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Ticket from "./Ticket";
import { getTimelineLanes, MIN_TICKET_MINUTES, type TimetableEvent } from "@/utils/timetable";

const PIXELS_PER_MINUTE = 6;
const AXIS_WIDTH = 64;
const TIMELINE_TOP_PADDING = 12;
const formatTime = (minutes: number) => `${Math.floor(minutes / 60).toString().padStart(2, "0")}:${(minutes % 60).toString().padStart(2, "0")}`;

interface TimelineProps {
    events: TimetableEvent[];
    stages: string[];
    genres: string[];
    month: number;
    date: number;
    range: { start: number; end: number };
}

export default function TimetableTimeline({ events, stages, genres, month, date, range }: TimelineProps) {
    const [now, setNow] = useState<Date | null>(null);
    const viewportRef = useRef<HTMLDivElement>(null);
    const dragRef = useRef<{ x: number; y: number; left: number; top: number } | null>(null);
    const movedRef = useRef(false);

    useEffect(() => {
        setNow(new Date());
        const timer = window.setInterval(() => setNow(new Date()), 30000);
        return () => window.clearInterval(timer);
    }, []);

    const parts = now ? new Intl.DateTimeFormat("en-GB", { timeZone: "Asia/Tokyo", year: "numeric", month: "numeric", day: "numeric", hour: "2-digit", minute: "2-digit", hourCycle: "h23" }).formatToParts(now) : [];
    const part = (name: string) => Number(parts.find((item) => item.type === name)?.value);
    const currentMinutes = part("hour") * 60 + part("minute");
    const showNow = part("year") === 2026 && part("month") === month && part("day") === date && currentMinutes >= range.start && currentMinutes <= range.end;
    const height = (range.end - range.start) * PIXELS_PER_MINUTE;
    const timeTop = (minutes: number) => TIMELINE_TOP_PADDING + (minutes - range.start) * PIXELS_PER_MINUTE;
    const ticks = Array.from({ length: (range.end - range.start) / 30 + 1 }, (_, index) => range.start + index * 30);
    const isMuted = (event: TimetableEvent) => genres.length > 0 && !genres.includes("すべて") && !genres.includes(event.genre);
    const untimed = events.filter((event) => !Number.isFinite(event.startMinutes) && stages.includes(event.place));
    const columns = stages.map((stage) => ({ stage, ...getTimelineLanes(events.filter((event) => event.place === stage && Number.isFinite(event.startMinutes))) }));
    const singleStage = stages.length === 1;
    const viewportMaxWidth = singleStage ? 520 : stages.length === 2 ? 960 : undefined;
    const width = AXIS_WIDTH + columns.reduce((total, column) => total + Math.max(320, column.count * 240), 0);
    const columnWidth = (count: number) => singleStage
        ? { width: 0, minWidth: 0 }
        : { width: Math.max(320, count * 240), minWidth: Math.max(320, count * 240) };

    const renderTicket = (event: TimetableEvent) => (
        <Link
            href={`/search/${event.id}`}
            aria-label={`${event.title}、${event.subtitle}、${event.time.replace(/\n/g, " ")}、${event.place}${isMuted(event) ? "、選択したジャンルの対象外" : ""}`}
            title={`${event.title}\n${event.subtitle}\n${event.time.replace(/\n/g, " ")}${event.endMinutes === null ? "（終了時刻未定）" : ""}`}
            className={`block h-full rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600 ${isMuted(event) ? "opacity-25 grayscale" : ""}`}
        >
            <Ticket title={event.title} subtitle={event.subtitle} time={event.time} imageSrc={event.imageSrc} imageAlt={`${event.title}の企画画像`} layout="timeline" />
        </Link>
    );

    return (
        <section className="mx-auto max-w-7xl px-3 sm:px-5" aria-label={`${month}月${date}日のステージ別タイムテーブル`}>
            <p className="mb-3 text-base text-gray-600">{singleStage ? "上下" : "上下左右"}にスクロール・ドラッグできます。チケットを押すと企画の詳細が開きます。</p>
            <div
                ref={viewportRef}
                role="region"
                aria-label="時間・ステージ名固定のタイムテーブル"
                tabIndex={0}
                className="swiper-no-swiping relative isolate mx-auto h-[70vh] min-h-80 max-h-[800px] cursor-grab overflow-auto overscroll-contain rounded-xl border border-[#eed3da] bg-white focus-visible:outline-2 focus-visible:outline-purple-600 active:cursor-grabbing"
                style={{ touchAction: singleStage ? "pan-y" : "pan-x pan-y", maxWidth: viewportMaxWidth, overflowX: singleStage ? "hidden" : undefined }}
                onDragStart={(event) => event.preventDefault()}
                onPointerDown={(event) => {
                    if (event.pointerType !== "mouse" || event.button !== 0) return;
                    movedRef.current = false;
                    dragRef.current = { x: event.clientX, y: event.clientY, left: event.currentTarget.scrollLeft, top: event.currentTarget.scrollTop };
                }}
                onPointerMove={(event) => {
                    const drag = dragRef.current;
                    if (!drag) return;
                    const dx = event.clientX - drag.x;
                    const dy = event.clientY - drag.y;
                    if (!movedRef.current && Math.hypot(dx, dy) < 5) return;
                    movedRef.current = true;
                    event.currentTarget.setPointerCapture(event.pointerId);
                    event.currentTarget.scrollLeft = drag.left - dx;
                    event.currentTarget.scrollTop = drag.top - dy;
                }}
                onPointerUp={() => { dragRef.current = null; }}
                onPointerCancel={() => { dragRef.current = null; movedRef.current = false; }}
                onLostPointerCapture={() => { dragRef.current = null; }}
                onClickCapture={(event) => { if (movedRef.current) { event.preventDefault(); event.stopPropagation(); movedRef.current = false; } }}
            >
                <div style={{ width: singleStage ? "100%" : width, minWidth: "100%" }}>
                    <div className="sticky top-0 z-30 flex h-14 border-b border-[#eed3da] bg-white shadow-sm">
                        <div className="sticky left-0 z-40 flex shrink-0 items-center justify-center border-r border-[#eed3da] bg-white text-[15px] text-gray-600" style={{ width: AXIS_WIDTH }}>時間</div>
                        {columns.map(({ stage, count }) => <div key={stage} className="flex flex-1 shrink-0 items-center justify-center break-words border-r border-[#eed3da] bg-[#fff5f7] px-3 text-center text-sm font-bold text-[#79576a]" style={columnWidth(count)}>{stage}</div>)}
                    </div>
                    <div className="relative flex" style={{ height: TIMELINE_TOP_PADDING + height + 24 }}>
                        <div className="sticky left-0 z-20 shrink-0 border-r border-[#eed3da] bg-white" style={{ width: AXIS_WIDTH }}>
                            {ticks.map((time) => <span key={time} className="absolute right-2 -translate-y-1/2 text-[15px] leading-[18px] tabular-nums text-gray-600" style={{ top: timeTop(time) }}>{formatTime(time)}</span>)}
                            {showNow && <span role="img" aria-label={`現在時刻 ${formatTime(currentMinutes)}`} className="pointer-events-none absolute -right-1.5 h-3 w-3 -translate-y-1/2 rounded-full bg-[#998EC1]" style={{ top: timeTop(currentMinutes) }} />}
                        </div>
                        {columns.map(({ stage, count, items }) => (
                            <div key={stage} className="relative flex-1 shrink-0 border-r border-[#eed3da]" style={{ ...columnWidth(count), height: TIMELINE_TOP_PADDING + height }}>
                                {ticks.map((time) => (
                                    <div
                                        key={time}
                                        aria-hidden="true"
                                        className="pointer-events-none absolute inset-x-0 -translate-y-1/2 bg-[#e7e4e9]"
                                        style={{ top: timeTop(time), height: time % 60 === 0 ? 2 : 0.8 }}
                                    />
                                ))}
                                {items.map(({ event, lane, end }, index) => (
                                    <div key={`${event.id}-${event.startMinutes}-${index}`} className="absolute z-10 px-1" style={{ top: timeTop(event.startMinutes) + 2, height: Math.max(MIN_TICKET_MINUTES, end - event.startMinutes) * PIXELS_PER_MINUTE - 4, left: `${lane / count * 100}%`, width: `${100 / count}%` }}>
                                        {renderTicket(event)}
                                    </div>
                                ))}
                                {items.length === 0 && <p className="p-5 text-center text-base text-gray-500">この日の企画はありません</p>}
                            </div>
                        ))}
                        {showNow && <div aria-hidden="true" className="pointer-events-none absolute right-0 z-0 -translate-y-1/2 border-t-4 border-[#998EC1]" style={{ left: AXIS_WIDTH, top: timeTop(currentMinutes) }} />}
                    </div>
                </div>
            </div>
            {untimed.length > 0 && <div className="mt-6"><p className="mb-3 text-sm font-bold">時間未定の企画</p><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{untimed.map((event, index) => <div key={`${event.id}-${index}`} className="h-32">{renderTicket(event)}</div>)}</div></div>}
        </section>
    );
}
