import { createClient } from "./client";

const CROUD_MAP_TABLE = "CongestionMap";

// 企画ごとの最新の待ち時間を取得する。未登録ならnull。
export async function getLatestWaitTime(masterDataId: number): Promise<string | null> {
    const { data, error } = await createClient()
        .from(CROUD_MAP_TABLE)
        .select("time")
        .eq("masterDataID", masterDataId)
        .order("timestamp", { ascending: false, nullsFirst: false })
        .limit(1)
        .maybeSingle();
    if (error) {
        console.error(`Error fetching croud map: ${error.message}`);
        return null;
    }
    return data?.time ?? null;
}
