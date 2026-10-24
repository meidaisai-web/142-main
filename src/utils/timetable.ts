import type { MasterData } from "./models/MasterData";

export interface TimetableEvent {
    id: number;
    title: string;
    subtitle: string;
    imageSrc: string;
    time: string;
    startMinutes: number;
    endMinutes: number | null;
    place: string;
    genre: string;
}

export function getTimelineRange(events: TimetableEvent[]) {
    const timed = events.filter((event) => Number.isFinite(event.startMinutes));
    return {
        start: Math.floor(Math.min(600, ...timed.map((event) => event.startMinutes)) / 60) * 60,
        end: Math.ceil(Math.max(1080, ...timed.map((event) => event.endMinutes && event.endMinutes > event.startMinutes ? event.endMinutes : event.startMinutes + 20)) / 60) * 60,
    };
}

// 同じステージの上演時間が重なる場合も、隣のレーンに分けて読めるようにする。
export function getTimelineLanes(events: TimetableEvent[]) {
    const lanes: number[] = [];
    const items = [...events].sort((a, b) => a.startMinutes - b.startMinutes).map((event) => {
        const end = event.endMinutes && event.endMinutes > event.startMinutes ? event.endMinutes : event.startMinutes + 20;
        let lane = lanes.findIndex((until) => until <= event.startMinutes);
        if (lane === -1) lane = lanes.length;
        lanes[lane] = Math.max(end, event.startMinutes + 9);
        return { event, lane, end };
    });
    return { items, count: Math.max(1, lanes.length) };
}

export function getTimetableDays(data: MasterData[]) {
    const days = [
        { id: "day1", label: "10.30 Fri", month: 10, date: 30, events: [] as TimetableEvent[] },
        { id: "day2", label: "10.31 Sat", month: 10, date: 31, events: [] as TimetableEvent[] },
        { id: "day3", label: "11.1 Sun", month: 11, date: 1, events: [] as TimetableEvent[] },
    ];

    for (const event of data) {
        // 全角の数字・コロン・括弧を半角にそろえる。
        const eventDate = (event.eventDate ?? "").normalize("NFKC");
        const schedules = eventDate.matchAll(
            /(?:(\d{1,2})月)?(\d{1,2})日(?:\s*\([^)]*\))?\s*(?:([01]?\d|2[0-3]):([0-5]\d)(?:\s*[～〜~－-]\s*([01]?\d|2[0-3]):([0-5]\d))?)?/g,
        );

        for (const schedule of schedules) {
            const [, month, date, startHour, startMinute, endHour, endMinute] = schedule;
            const day = days.find((day) => day.date === Number(date) && (!month || day.month === Number(month)));
            if (!day) continue;

            const start = startHour === undefined ? undefined : `${startHour.padStart(2, "0")}:${startMinute}`;
            const end = endHour === undefined ? undefined : `${endHour.padStart(2, "0")}:${endMinute}`;
            day.events.push({
                id: event.id,
                title: event.eventName,
                subtitle: event.groupName,
                imageSrc: event.imageUrl ?? "",
                time: start ? (end ? `${start}\n〜\n${end}` : start) : "時間未定",
                startMinutes: start ? Number(startHour) * 60 + Number(startMinute) : Infinity,
                endMinutes: end ? Number(endHour) * 60 + Number(endMinute) : null,
                place: event.location,
                genre: event.genre,
            });
        }
    }

    for (const day of days) {
        day.events.sort((a, b) => a.startMinutes - b.startMinutes);
    }
    return days;
}
