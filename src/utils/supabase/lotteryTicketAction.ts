import type { LotteryTicket } from "../models/LotteryTicket";
import { createClient } from "./client";

const LOTTERY_TICKET_TABLE = "LotteryTicket";

// 抽選券の配布状況を全件取得する。読み取り専用（書き込みは実行委員用ツール側）。
// 取得に失敗した場合はnullを返し、呼び出し側で状況表示だけを省略できるようにする。
export async function getLotteryTickets(): Promise<LotteryTicket[] | null> {
    const { data, error } = await createClient()
        .from(LOTTERY_TICKET_TABLE)
        .select("id, department, name, status, updatedAt")
        .order("sortOrder", { ascending: true });
    if (error) {
        console.error(`Error fetching lottery tickets: ${error.message}`);
        return null;
    }
    return data as LotteryTicket[];
}
