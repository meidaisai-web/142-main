import type { MasterData } from "./models/MasterData";

interface TimetableEvent {
    id: number;
    title: string;
    subtitle: string;
    imageSrc: string;
    time: string;
    startMinutes: number;
    place: string;
    genre: string;
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
