import type { MasterData } from "../models/MasterData";
import type { SortType } from "../models/SortType";
import { createClient } from "./client";

const MASTER_DATA_TABLE = "MasterData142";
const DATE_FETCH_SIZE = 500;

type MasterDataQuery = {
    page: number;
    limit: number;
    keyword: string;
    types: string[];
    dates: string[];
    places: string[];
    genres: string[];
    sortType: SortType;
};

export async function getAllMasterDatas(key: MasterDataQuery): Promise<MasterData[] | null> {
    const start = key.limit * key.page;
    const end = start + key.limit - 1;

    if (key.sortType.orderColumn === "eventDate") {
        const sorted = await getAllMasterDatasForDateSort(key);
        return sorted === null ? null : sorted.slice(start, end + 1);
    }

    const sort = key.sortType.orderColumn === "free"
        ? { orderColumn: "createdAt", ascending: true }
        : key.sortType;
    let query = createFilteredQuery(key);
    query = query.order(sort.orderColumn, { ascending: sort.ascending });
    // 同じ企画名等が並ぶときも、ページ境界の順序を固定する。
    if (sort.orderColumn !== "id") query = query.order("id", { ascending: true });
    const { data, error } = await query.range(start, end);
    if (error) {
        console.error(`Error fetching master data: ${error.message}`);
        return null;
    }
    return data as MasterData[];
}

function createFilteredQuery(key: MasterDataQuery) {
    // 企画名・実施日が未入力の行は、情報が埋まるまで一覧に出さない。
    let query = createClient().from(MASTER_DATA_TABLE).select("*")
        .not("eventName", "is", null).neq("eventName", "")
        .not("eventDate", "is", null).neq("eventDate", "");

    // スペース区切りの各キーワードはAND、各カラムへの一致はOR。
    if (key.keyword && key.keyword.trim()) {
        const keywords = key.keyword.trim().split(/[\s　]+/).filter((word) => word.length > 0);
        for (const keyword of keywords) {
            query = query.or(`eventName.ilike.%${keyword}%,catchphrase.ilike.%${keyword}%,eventContent.ilike.%${keyword}%,groupName.ilike.%${keyword}%,searchKeywords.ilike.%${keyword}%,projectType.ilike.%${keyword}%,genre.ilike.%${keyword}%,location.ilike.%${keyword}%,eventDate.ilike.%${keyword}%`);
        }
    }

    if (key.types && key.types.length > 0) {
        const typeConditions: string[] = [];
        const normalizedTypes = key.types.map((type) => type.slice(0, -2));
        for (const type of normalizedTypes) {
            if (type === "実行委員会") {
                typeConditions.push("groupName.ilike.%明大祭実行委員会%");
            } else {
                typeConditions.push(`type.eq.${type}`);
            }
        }
        if (typeConditions.length > 0) query = query.or(typeConditions.join(","));
    }

    if (key.dates && key.dates.length > 0) {
        const normalizedDates = key.dates.map((date) => date.slice(3, 5));
        query = query.or(normalizedDates.map((date) => `eventDate.ilike.%${date}%`).join(","));
    }

    if (key.places && key.places.length > 0) {
        const placeConditions: string[] = [];
        for (const place of key.places) {
            if (place === "その他") {
                const excludedPlaces = ["メインステージ", "パフォーマンスエリア", "エントランスエリア", "第一校舎", "メディア棟", "和泉ラーニングスクエア"];
                const excludeConditions = excludedPlaces.map((value) => `location.not.ilike.%${value}%`);
                placeConditions.push(`and(${excludeConditions.join(",")})`);
            } else if (place === "屋内ステージ") {
                // 屋内ステージの企画は、場所が「和泉ラーニングスクエア LS101教室」と登録されている。
                // LS101教室のゲスト誘致企画(企画区分「教室」)は屋内ステージに含めない。
                placeConditions.push("and(location.ilike.%LS101%,type.eq.総合ステージ)");
            } else {
                placeConditions.push(`location.ilike.%${place}%`);
            }
        }
        if (placeConditions.length > 0) query = query.or(placeConditions.join(","));
    }

    if (key.genres && key.genres.length > 0) {
        query = query.or(key.genres.map((genre) => `genre.eq.${genre}`).join(","));
    }

    return query;
}

// 実施日が文字列でも、該当する企画全体を日付順にしてからページ分割する。
// Searchではこの全件結果をSWRで共有し、ページを進めるたびの再取得を避ける。
export async function getAllMasterDatasForDateSort(key: MasterDataQuery): Promise<MasterData[] | null> {
    const items: MasterData[] = [];
    let offset = 0;
    while (true) {
        const { data, error } = await createFilteredQuery(key)
            .order("id", { ascending: true })
            .range(offset, offset + DATE_FETCH_SIZE - 1);
        if (error) {
            console.error(`Error fetching master data for date sorting: ${error.message}`);
            return null;
        }
        const batch = (data ?? []) as MasterData[];
        if (batch.length === 0) break;
        items.push(...batch);
        // DB側の1回の取得上限が500件より小さくても、途中で終了しない。
        offset += batch.length;
    }
    return sortByEventDate(items, key.sortType.ascending);
}

function eventDateKey(value: string): number | null {
    const text = (value ?? "").normalize("NFKC").replace(/[‐‑–—−]/g, "-");
    const festivalMonthByDay: Record<number, number> = { 30: 10, 31: 10, 1: 11 };
    // 月付き表記を先に読み、月がない「30日」「31日」「1日」も認識する。
    // 時刻の末尾や「第1日」「1日間」は日付と誤認しない。
    const datePattern = /(?<![\d:第])(?:(?:(\d{4})\s*[年/.-]\s*)?(\d{1,2})\s*[月/.-]\s*(\d{1,2})\s*日?|(\d{1,2})\s*日(?!間|目))/g;
    const dates = [...text.matchAll(datePattern)];
    const candidates: number[] = [];
    dates.forEach((match, index) => {
        const year = match[1] ? Number(match[1]) : 2026;
        const day = Number(match[3] ?? match[4]);
        const month = match[2] ? Number(match[2]) : festivalMonthByDay[day];
        if (month === undefined) return;
        const calendarDate = new Date(Date.UTC(year, month - 1, day));
        if (calendarDate.getUTCFullYear() !== year || calendarDate.getUTCMonth() !== month - 1 || calendarDate.getUTCDate() !== day) return;

        // この日付の後から次の日付の前までに書かれた開始時刻を使う。
        const start = (match.index ?? 0) + match[0].length;
        const end = dates[index + 1]?.index ?? text.length;
        const segment = text.slice(start, end);
        const time = segment.match(/(?:^|[^\d])(\d{1,2})\s*:\s*(\d{2})(?!\d)/)
            ?? segment.match(/(?:^|[^\d])(\d{1,2})\s*時(?:\s*(\d{1,2})\s*分)?/);
        const hour = time ? Number(time[1]) : 0;
        const minute = time?.[2] ? Number(time[2]) : 0;
        if (hour > 24 || minute > 59 || (hour === 24 && minute !== 0)) return;
        candidates.push(Date.UTC(year, month - 1, day, hour, minute));
    });
    // 複数日実施の企画は、最も早い開催日時で並べる。未定などはnull。
    return candidates.length > 0 ? Math.min(...candidates) : null;
}

function sortByEventDate(items: MasterData[], ascending: boolean): MasterData[] {
    const keyed = items.map((item) => ({ item, key: eventDateKey(item.eventDate) }));
    keyed.sort((a, b) => {
        // 日付未定の企画は、昇順・降順とも最後に置く。
        if (a.key === null && b.key !== null) return 1;
        if (a.key !== null && b.key === null) return -1;
        if (a.key !== null && b.key !== null && a.key !== b.key) {
            return ascending ? a.key - b.key : b.key - a.key;
        }
        return a.item.id - b.item.id;
    });
    return keyed.map(({ item }) => item);
}

export async function getUniqueMasterData(id: string): Promise<MasterData | null> {
    const supabase = createClient();
    const { data, error } = await supabase.from(MASTER_DATA_TABLE).select("*").eq("id", id).single();
    if (error) {
        console.error(`Error fetching unique master data: ${error.message}`);
        return null;
    }
    return data as MasterData;
}

function returnDefaultData(): MasterData[] {
    return defaultEvent;
}

export async function getStoreDataWithCongestion(): Promise<MasterData[] | null> {
    const supabase = createClient();
    const { data, error } = await supabase.from('MasterData142').select(`
        id,
        groupId,
        projectId,
        imageUrl,
        eventName,
        groupName,
        catchphrase,
        eventContent,
        genre,
        icons,
        location,
        eventDate,
        xAccount,
        instagramAccount,
        tiktokAccount,
        youtubeAccount,
        homepageUrl,
        searchKeywords,
        createdAt,
        updatedAt,
        type,
        enableShooting,
        ticket,
        foodIcons,
        otherIcons,
        menuItems,
        qrcode,
        CongestionMap (
            id,
            time,
            timestamp
        )
    `)
        .eq('type', '模擬店')
        // 企画ごとに最新の混雑データ1件のみ取得
        .order('timestamp', { referencedTable: 'CongestionMap', ascending: false })
        .limit(1, { referencedTable: 'CongestionMap' });

    if (error) {
        console.log(`Error fetching store data with congestion: ${error.message}`);
        return null;
    }

    // 埋め込みリソースは配列で返るので、先頭(最新)の1件を congestion に詰め替える
    // DBの文字列順だと「1番, 10番, 11番…」になるので、数字を数値として比較して場所名順に並べる
    return data
        .map(({ CongestionMap, ...store }) => ({
            ...store,
            congestion: CongestionMap?.[0],
        }))
        .sort((a, b) => a.location.localeCompare(b.location, 'ja', { numeric: true })) as MasterData[];
}
