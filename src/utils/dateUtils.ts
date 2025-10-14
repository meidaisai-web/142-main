/**
 * 現在の日本時間のDateオブジェクトを取得する
 * @returns 日本時間のDateオブジェクト
 */
export function getJapanDate(): Date {
    const now = new Date();
    // 日本時間は UTC+9
    const japanTime = new Date(now.getTime() + (9 * 60 * 60 * 1000));
    return japanTime;
}

/**
 * 現在の日本時間をISO8601形式の文字列で取得する
 * @returns YYYY-MM-DDTHH:mm:ss.sssZ形式の文字列（日本時間）
 */
export function getJapanISOString(): string {
    return getJapanDate().toISOString();
}

/**
 * 現在の日本時間の日付部分を取得する
 * @returns YYYY-MM-DD形式の文字列（日本時間）
 */
export function getJapanDateString(): string {
    return getJapanDate().toISOString().split('T')[0];
}

/**
 * ISO8601形式の日付文字列から日本時間の「日」（D）部分のみを取得する
 * @param isoString ISO8601形式の日付文字列
 * @returns 日（D）部分の数値（日本時間）
 */
export function getOnlyDate(isoString: string): number {
    const date = Number(isoString.slice(8, 10));
    return date; // getDate()は頭に0がつかない数値を返します
}

/**
 * 日本時間での日付比較（日付のみ、時間は無視）
 * @param date1 比較する日付1（ISO8601文字列またはDateオブジェクト）
 * @param date2 比較する日付2（ISO8601文字列またはDateオブジェクト）
 * @returns 同じ日付の場合はtrue、そうでなければfalse
 */
export function isSameDate(date1: string | Date, date2: string | Date): boolean {
    const dateStr1 = typeof date1 === 'string' ? getOnlyDate(date1) : getOnlyDate(date1.toISOString());
    const dateStr2 = typeof date2 === 'string' ? getOnlyDate(date2) : getOnlyDate(date2.toISOString());
    return dateStr1 === dateStr2;
}