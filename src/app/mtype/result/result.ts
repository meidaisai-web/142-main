import { question } from "../question/question";
import type { MTypeKey } from "./types";

// /mtype/question から ?r=<回答> で引き継ぐ。回答は左="a"・右="b" を出題順に並べた文字列
const FIRST_COUNT = question.filter((q) => q.section === "first").length;
const SECOND_COUNT = question.filter((q) => q.section === "second").length;
const TOTAL = FIRST_COUNT + SECOND_COUNT;

export type SearchParams = Promise<{ r?: string | string[] }>;

function isAMajority(answers: string) {
    return answers.split("").filter((a) => a === "a").length > answers.length / 2;
}

export function parseAnswers(r: string | string[] | undefined) {
    return typeof r === "string" && new RegExp(`^[ab]{${TOTAL}}$`).test(r) ? r : null;
}

export function typeOf(answers: string) {
    // 1回目が A 多数なら second（C/D）、B 多数なら third（C/D）に進んでいる
    const firstIsA = isAMajority(answers.slice(0, FIRST_COUNT));
    const laterIsC = isAMajority(answers.slice(FIRST_COUNT));
    return `${firstIsA ? "A" : "B"}×${laterIsC ? "C" : "D"}` as MTypeKey;
}

// シェア用ページの ?type= に使う値（ac, ad, bc, bd）
export type ShareSearchParams = Promise<{ type?: string | string[] }>;

export function typeToParam(type: MTypeKey) {
    return type.replace("×", "").toLowerCase();
}

export function parseTypeParam(value: string | string[] | undefined) {
    if (typeof value !== "string" || !/^[ab][cd]$/.test(value)) return null;
    return `${value[0].toUpperCase()}×${value[1].toUpperCase()}` as MTypeKey;
}
