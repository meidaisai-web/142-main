"use client";

import useSWR from "swr";
import { getLotteryTickets } from "@/utils/supabase/lotteryTicketAction";
import type { LotteryTicketStatus } from "@/utils/models/LotteryTicket";

type LotteryTicketBadgeProps = {
    id: string;
    className?: string;
};

// 当日は状況が頻繁に変わるため、一定間隔で再取得する（Realtimeは未使用）
const REFRESH_INTERVAL_MS = 30_000;

// 動的なクラス名はTailwindに検出されないため、完全な文字列で持つ
const STATUS_CLASS: Record<LotteryTicketStatus, string> = {
    "配布中": "bg-primary-900 text-white",
    "残りわずか": "bg-secondary-900 text-white",
    "配布終了": "bg-gray-400 text-white",
};

// 抽選券の配布状況バッジ。全バッジで同じSWRキーを使うため、取得は1回にまとまる。
// エラー時・該当行がない時は何も表示しない。
export default function LotteryTicketBadge({ id, className }: LotteryTicketBadgeProps) {
    const { data } = useSWR("lottery-tickets", getLotteryTickets, {
        refreshInterval: REFRESH_INTERVAL_MS,
    });

    const ticket = data?.find((t) => t.id === id);
    if (!ticket || !(ticket.status in STATUS_CLASS)) return null;

    return (
        <span
            className={`ml-2 inline-block rounded-full px-2 py-0.5 text-xs font-semibold align-middle whitespace-nowrap ${STATUS_CLASS[ticket.status]} ${className ?? ""}`}
        >
            {ticket.status}
        </span>
    );
}
