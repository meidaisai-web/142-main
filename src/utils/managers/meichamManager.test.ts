import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import {
    getMeichamCategory,
    getUnvotedCategories,
    getVoteTimeStatus,
    getVotedCategories,
    hasVotedAllCategories,
    isAlreadyVoted,
    saveVotedId,
} from "./meichamManager";

// 日本時間で現在時刻を固定する
function setJapanNow(iso: string) {
    vi.setSystemTime(new Date(`${iso}+09:00`));
}

beforeEach(() => {
    vi.useFakeTimers({ toFake: ["Date"] });
    vi.stubEnv("NEXT_PUBLIC_TEST_NOW", "");
});

afterEach(() => {
    vi.useRealTimers();
    vi.unstubAllEnvs();
});

// 要項 (3) 部門について
describe("部門分け", () => {
    it.each([
        ["喫茶", "飲食"],
        ["模擬店", "飲食"],
        ["ゲスト", "エンタメ"],
        ["参加体験", "エンタメ"],
        ["展示", "エンタメ"],
        ["音楽", "パフォーマンス"],
        ["ダンス", "パフォーマンス"],
        ["パフォーマンス", "パフォーマンス"],
    ])("ジャンル「%s」は%s部門になる", (genre, category) => {
        expect(getMeichamCategory(genre)).toBe(category);
    });

    it("どの部門にも当てはまらないジャンルは投票対象外 (null)", () => {
        expect(getMeichamCategory("その他")).toBeNull();
        expect(getMeichamCategory(null)).toBeNull();
    });
});

describe("投票済みの管理", () => {
    it("投票した企画は投票済みになり、他の企画は投票済みにならない", () => {
        setJapanNow("2026-10-30T12:00:00");
        expect(isAlreadyVoted("event-1")).toBe(false);
        saveVotedId("event-1", "group-1", "type", "飲食");
        expect(isAlreadyVoted("event-1")).toBe(true);
        expect(isAlreadyVoted("event-2")).toBe(false);
    });

    it("同じ企画には別の日でも再投票できない（本祭3日間を通して1企画1票）", () => {
        setJapanNow("2026-10-30T12:00:00");
        saveVotedId("event-1", "group-1", "type", "飲食");
        setJapanNow("2026-10-31T12:00:00");
        expect(isAlreadyVoted("event-1")).toBe(true);
    });

    it("localStorage が壊れていても投票済み判定で落ちない", () => {
        localStorage.setItem("142MeichamVoted", "{broken");
        expect(isAlreadyVoted("event-1")).toBe(false);
    });
});

// 要項 (5) 3部門すべてに投票すると抽選券に引き換えられる（1人1日1回）
describe("3部門すべてへの投票（抽選券の条件）", () => {
    beforeEach(() => setJapanNow("2026-10-30T12:00:00"));

    it("1〜2部門だけでは条件を満たさない", () => {
        saveVotedId("e1", "g1", "t", "飲食");
        saveVotedId("e2", "g2", "t", "エンタメ");
        expect(hasVotedAllCategories()).toBe(false);
        expect(getUnvotedCategories()).toEqual(["パフォーマンス"]);
    });

    it("同じ部門に複数投票しても、他の部門に投票していなければ条件を満たさない", () => {
        saveVotedId("e1", "g1", "t", "飲食");
        saveVotedId("e2", "g2", "t", "飲食");
        saveVotedId("e3", "g3", "t", "飲食");
        expect(hasVotedAllCategories()).toBe(false);
        expect(getVotedCategories()).toEqual(["飲食"]);
    });

    it("3部門すべてに投票すると条件を満たす", () => {
        saveVotedId("e1", "g1", "t", "飲食");
        saveVotedId("e2", "g2", "t", "エンタメ");
        saveVotedId("e3", "g3", "t", "パフォーマンス");
        expect(hasVotedAllCategories()).toBe(true);
        expect(getUnvotedCategories()).toEqual([]);
    });

    it("前日の投票は当日の条件に数えない（抽選券は1日ごと）", () => {
        saveVotedId("e1", "g1", "t", "飲食");
        saveVotedId("e2", "g2", "t", "エンタメ");
        saveVotedId("e3", "g3", "t", "パフォーマンス");
        setJapanNow("2026-10-31T12:00:00");
        expect(hasVotedAllCategories()).toBe(false);
        expect(getUnvotedCategories()).toEqual(["飲食", "エンタメ", "パフォーマンス"]);
    });
});

describe("投票受付時間", () => {
    it.each([
        ["2026-10-30T11:00:00", "ok"],
        ["2026-10-30T10:59:59", "outOfHours"],
        ["2026-10-30T18:59:59", "ok"],
        ["2026-10-30T19:00:00", "outOfHours"],
        ["2026-10-31T11:00:00", "ok"],
        ["2026-10-31T19:00:00", "outOfHours"],
        // 最終日は Ending (17:25〜) の前に締め切る
        ["2026-11-01T16:59:59", "ok"],
        ["2026-11-01T17:00:00", "outOfHours"],
    ])("全日実施の企画: %s は %s", (now, expected) => {
        setJapanNow(now);
        expect(getVoteTimeStatus("全日")).toBe(expected);
    });

    it.each(["2026-10-29T12:00:00", "2026-11-02T12:00:00"])("明大祭期間外 (%s) は投票できない", (now) => {
        setJapanNow(now);
        expect(getVoteTimeStatus("全日")).toBe("outOfHours");
    });

    it("企画の実施日でなければ投票できない", () => {
        setJapanNow("2026-10-30T12:00:00");
        expect(getVoteTimeStatus("10月31日")).toBe("notEventDay");
        expect(getVoteTimeStatus("11月1日")).toBe("notEventDay");
    });

    it("企画の実施日なら投票できる（複数日実施も含む）", () => {
        setJapanNow("2026-10-31T12:00:00");
        expect(getVoteTimeStatus("10月31日")).toBe("ok");
        expect(getVoteTimeStatus("10月30日・31日")).toBe("ok");
        setJapanNow("2026-11-01T12:00:00");
        expect(getVoteTimeStatus("11月1日")).toBe("ok");
    });

    it("受付時間は日本時間で判定する", () => {
        // UTC 02:30 = 日本時間 11:30（UTCの時刻で判定すると時間外になってしまう）
        vi.setSystemTime(new Date("2026-10-30T02:30:00Z"));
        expect(getVoteTimeStatus("10月30日")).toBe("ok");
    });
});
