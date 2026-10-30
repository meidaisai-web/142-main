export type LotteryTicketStatus = "配布中" | "残りわずか" | "配布終了";

export type LotteryTicket = {
    id: string;
    department: string;
    name: string;
    status: LotteryTicketStatus;
    updatedAt: string;
};
