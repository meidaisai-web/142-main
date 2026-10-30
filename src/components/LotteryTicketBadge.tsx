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

// 全ステータスで同じ幅にして、リストの企画名が揃うようにする
const BASE_CLASS = "mr-2 inline-block w-[5.5em] rounded-full px-2 py-0.5 text-center text-xs font-semibold align-middle whitespace-nowrap";
const PLACEHOLDER = "残りわずか";

// 抽選券の配布状況バッジ。全バッジで同じSWRキーを使うため、取得は1回にまとまる。
// エラー時・該当行がない時はバッジを出さず、空白だけ残す。
export default function LotteryTicketBadge({ id, className }: LotteryTicketBadgeProps) {
    const { data } = useSWR("lottery-tickets", getLotteryTickets, {
        refreshInterval: REFRESH_INTERVAL_MS,
    });

    const ticket = data?.find((t) => t.id === id);
    // 左端で縦に揃えるため、未取得・エラー時も同じ幅の空白を確保する
    if (!ticket || !(ticket.status in STATUS_CLASS)) {
        return <span aria-hidden className={`${BASE_CLASS} invisible`}>{PLACEHOLDER}</span>;
    }

    return (
        <span
            className={`${BASE_CLASS} ${STATUS_CLASS[ticket.status]} ${className ?? ""}`}
        >
            {ticket.status}
        </span>
    );
}
