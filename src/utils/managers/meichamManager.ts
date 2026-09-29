import { MeichamCategory } from "../models/MeichamGenre";
import { MeichamVotedData } from "../models/MeichamVotedData";
import { getJapanDateString, getJapanISOString, isSameDate, getOnlyDate, getJapanDate } from "../dateUtils";
import { voteMeicham } from "../supabase/meichamAction";

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

// 同じ日に同じカテゴリーで投票しているか確認する
export function isAlreadyVoted(id: string, category: MeichamCategory): boolean {
    const sameIdVotes = loadVotes().filter(vote => vote.id === id);
    if (category === 'パフォーマンス') {
        const today = getJapanDate();
        return sameIdVotes.some(vote => isSameDate(vote.createdAt, today));
    }
    return sameIdVotes.length > 0;
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
    '2026-11-01': [11, 17],
    // テスト用
    '2026-09-29': [11, 19]
};

// 投票可能な時間か確認する
export function isVoteTime(eventDate: string): boolean {
    const today = getJapanDateString();
    const hours = VOTE_HOURS[today];
    if (!hours) {
        return false;
    }
    const eventDays = [...eventDate.matchAll(/(\d{1,2})日/g)].map(match => Number(match[1]));
    // getOnlyDate(today)になおす
    if (!eventDays.includes(30)) {
        return false;
    }
    const hour = getJapanDate().getUTCHours();
    return hours[0] <= hour && hour < hours[1];
}