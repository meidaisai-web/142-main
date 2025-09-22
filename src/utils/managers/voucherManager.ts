import { getJapanDate, getOnlyDate } from "../dateUtils";

// 引換処理を行う
export function exchange() {
    const exchangeDate = getOnlyDate(getJapanDate().toISOString());
    localStorage.setItem('voucherExchangeDate', exchangeDate.toString());
}

// すでに引換済みか確認する
export function isAlreadyExchange() {
    const exchangeDate = localStorage.getItem('voucherExchangeDate');
    if (!exchangeDate) {
        return false;
    }
    const exchangeDateNum = Number(exchangeDate);
    const nowDate = getOnlyDate(getJapanDate().toISOString());
    return nowDate === exchangeDateNum;
}

// 開催日以外は引換できないようにする
export function isInTime(): boolean {
    const nowDate = getJapanDate();
    const targetStart = new Date('2025-11-01T00:00:00+09:00');
    const targetEnd = new Date('2025-11-03T23:59:59+09:00');
    return nowDate >= targetStart && nowDate <= targetEnd;
}