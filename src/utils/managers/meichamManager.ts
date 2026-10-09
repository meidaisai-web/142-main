import { MeichamCategory } from "../models/MeichamGenre";
import { MeichamVotedData } from "../models/MeichamVotedData";
import { getJapanDateString, getJapanISOString, isSameDate, getJapanDate, getOnlyDate } from "../dateUtils";

// ジャンルから投票カテゴリーへの変換
export const GENRE_TO_CATEGORY: Record<string, MeichamCategory> = {
    '喫茶':'飲食', '模擬店':'飲食',
    '参加体験':'エンタメ', 'ゲスト':'エンタメ', '展示':'エンタメ',
    '音楽':'パフォーマンス', 'ダンス':'パフォーマンス', 'パフォーマンス':'パフォーマンス'
};

export const MEICHAM_CATEGORIES: MeichamCategory[] = ['飲食', 'エンタメ', 'パフォーマンス']

// 対象外のジャンルならnullを返す
export function getMeichamCategory(genre: string | null): MeichamCategory | null {
    if (!genre){
        return null;
    }
    return GENRE_TO_CATEGORY[genre] ?? null;
}

// locallStrageのデータを取得
function loadVotes(): MeichamVotedData[] {
    try {
        const value = JSON.parse(
            localStorage.getItem('142MeichamVoted' ) || '[]'
        );
        return Array.isArray(value) ? value as MeichamVotedData[] : [];
    }
    catch {
        return [];
    }
}

// この企画にすでに投票しているか確認する（全部門共通: 本祭3日間を通して1企画1票）
export function isAlreadyVoted(id: string): boolean {
    return loadVotes().some(vote => vote.id === id);
}

export function saveVotedId(id: string, groupId: string, type: string, category: MeichamCategory) {
    const votedIds = loadVotes();
    votedIds.push({ id, groupId, type, category, createdAt: getJapanISOString() });
    localStorage.setItem('142MeichamVoted', JSON.stringify(votedIds));
}

// 本日投票済みのカテゴリー
export function getVotedCategories(): MeichamCategory[] {
    const today = getJapanDate();
    const categories = new Set(loadVotes().filter(vote => isSameDate(vote.createdAt, today)).map(vote => vote.category))
    return MEICHAM_CATEGORIES.filter(category => categories.has(category))
}

// 本日3部門すべてに投票済みか
export function hasVotedAllCategories(): boolean {
    return getVotedCategories().length === MEICHAM_CATEGORIES.length;
}

// その日に投票されているかどうか
export function hasVotedToday(): boolean {
    return getVotedCategories().length > 0;
}

// 投票可能時間
const VOTE_HOURS: Record<string, [number, number]> = {
    '2026-10-30': [11, 19],
    '2026-10-31': [11, 19],
    '2026-11-01': [11, 17]
};

// 投票可能な時間か確認する
export function isVoteTime(eventDate: string): boolean {
    const today = getJapanDateString();
    const hours = VOTE_HOURS[today];
    if (!hours) {
        return false;
    }
    // "全日"は本祭3日間すべてが実施日
    if (!eventDate.includes('全日')) {
        const eventDays = [...eventDate.matchAll(/(\d{1,2})日/g)].map(match => Number(match[1]));
        if (!eventDays.includes(getOnlyDate(today))) {
            return false;
        }
    }
    const hour = getJapanDate().getUTCHours();
    return hours[0] <= hour && hour < hours[1];
}

// 本日まだ投票していない部門
export function getUnvotedCategories(): MeichamCategory[] {
    const voted = getVotedCategories();
    return MEICHAM_CATEGORIES.filter(category => !voted.includes(category));
}

// 部門に含まれるジャンル（企画検索の絞り込み用）
export function getGenresOfCategory(category: MeichamCategory): string[] {
    return Object.entries(GENRE_TO_CATEGORY)
        .filter(([, c]) => c === category)
        .map(([genre]) => genre);
}

// 抽選券の配布を終了した日（当日はここに日付を足してデプロイする）
// 例: ['2026-10-30']
const VOUCHER_CLOSED_DATES: string[] = [];

// 本日の抽選券がまだ配布中か
export function isVoucherAvailableToday(): boolean {
    return !VOUCHER_CLOSED_DATES.includes(getJapanDateString());
}