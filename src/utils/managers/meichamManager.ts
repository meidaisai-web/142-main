import { MeichamVotedData } from "../models/MeichamVotedData";
import { getJapanDateString, getJapanISOString, isSameDate, getOnlyDate, getJapanDate } from "../dateUtils";

// 同じ日に同じIDで投票しているか確認する
export function isAlreadyVoted(id: string): boolean {
    const today = getJapanDate();
    const votedIds = JSON.parse(localStorage.getItem('votedMeichamIds') || '[]') as MeichamVotedData[];

    const sameIdVotes = votedIds.filter(vote => vote.id === id);
    if (sameIdVotes.length === 0) {
        return false;
    }
    return sameIdVotes.some(vote => isSameDate(vote.createdAt, today));
}

export function saveVotedId(id: string, groupId: string, type: string) {
    const votedIds = JSON.parse(localStorage.getItem('votedMeichamIds') || '[]') as MeichamVotedData[];
    votedIds.push({ id, groupId, type, createdAt: getJapanISOString() });
    localStorage.setItem('votedMeichamIds', JSON.stringify(votedIds));
}

// その日に投票されているかどうか
export function hasVotedToday(): boolean {

    const today = getJapanDate();
    const votedIds = JSON.parse(localStorage.getItem('votedMeichamIds') || '[]') as MeichamVotedData[];
    for (const vote of votedIds) {
        if (isSameDate(vote.createdAt, today)) {
            return true;
        }
    }
    return false;
}

// 投票可能な時間か確認する
export function isVoteTime(dateString: string): boolean {
    const today = getJapanDateString();
    const date = getOnlyDate(today);
    return dateString.includes(`${date}日`);
}