import { getJapanDateString } from "../dateUtils";

// 引換記録の保存先（去年の 'voucherExchangeDate' と混ざらないよう年度ごとに分ける）
// 中身は引き換えた日付（YYYY-MM-DD、日本時間）
const STORAGE_KEY = '142VoucherExchanged';

// 抽選券を引き換えられる日（本祭3日間）
const EXCHANGE_DATES = ['2026-10-30', '2026-10-31', '2026-11-01'];

// 引換処理を行う（今日の日付を引換済みとして記録する）
export function exchange() {
    try {
        localStorage.setItem(STORAGE_KEY, getJapanDateString());
    } catch {
        // 保存できない環境（プライベートモードなど）は呼び出し側で事前に弾いている
    }
}

// 今日すでに引換済みか確認する
export function isAlreadyExchange(): boolean {
    try {
        return localStorage.getItem(STORAGE_KEY) === getJapanDateString();
    } catch {
        return false;
    }
}

// 開催日以外は引換できないようにする
export function isInTime(): boolean {
    // TODO: テスト用。日付に関係なく引き換えできるようにしている。終わったらコメントアウトを外し、下の return true を消す
    // return EXCHANGE_DATES.includes(getJapanDateString());
    return true; // TODO: テスト用
}
