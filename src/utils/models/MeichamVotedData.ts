import { MeichamCategory } from "./MeichamGenre";

export type MeichamVotedData = {
    id: string;
    groupId: string;
    type: string;
    category: MeichamCategory;
    createdAt: string; // getJapanISOString()の値（日付部分が日本時間の日付になる）
};
