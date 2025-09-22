import { MeichamVotedData } from "../models/MeichamVotedData";
import { getJapanDateString, getJapanISOString, isSameDateInJapan, getOnlyDate } from "../dateUtils";

// 同じ日に同じIDで投票しているか確認する
export function isAlreadyVoted(id: string, groupId: string, type: string): boolean {
    const today = getJapanDateString();
    const votedIds = JSON.parse(localStorage.getItem('votedMeichamIds') || '[]') as MeichamVotedData[];
    if (type === '教室' || type === '模擬店') {
        const sameGroupVotes = votedIds.filter(vote => (vote.groupId === groupId && vote.type === type));
        if (sameGroupVotes.length === 0) {
            return false;
        }
        return sameGroupVotes.some(vote => isSameDateInJapan(vote.createdAt, today));
    } else if (type === '屋外ステージ') {
        const sameIdVotes = votedIds.filter(vote => vote.id === id);
        if (sameIdVotes.length === 0) {
            return false;
        }
        return sameIdVotes.some(vote => isSameDateInJapan(vote.createdAt, today));
    } else {
        return true;
    }
}

export function saveVotedId(id: string, groupId: string, type: string) {
    const votedIds = JSON.parse(localStorage.getItem('votedMeichamIds') || '[]') as MeichamVotedData[];
    votedIds.push({ id, groupId, type, createdAt: getJapanISOString() });
    localStorage.setItem('votedMeichamIds', JSON.stringify(votedIds));
}

// その日に投票されているかどうか
export function hasVotedToday(): boolean {
    const today = getJapanDateString();
    const votedIds = JSON.parse(localStorage.getItem('votedMeichamIds') || '[]') as MeichamVotedData[];
    return votedIds.some(vote => isSameDateInJapan(vote.createdAt, today));
}

// 投票可能な時間か確認する
export function isVoteTime(dateString: string): boolean {
    const today = getJapanDateString();
    const date = getOnlyDate(today);
    return dateString.includes(`${date}日`);
}