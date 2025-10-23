export type MapDataType = {
    name: string;
    legend: Legend;
    location: Location[];
    src: string;
    description: string;
}

export type ShowLocationType = {
    legend: Legend;
    contents: MapDataType[];
}

export type Legend = 'インフォメーションブース' | '休憩所' | 'バリアフリートイレ' | '喫煙所' | '公衆電話' | 'ステージ' | 'AED' | 'ごみステーション' | '自動販売機' | 'ATM' | '診療所';
export type Location = '第一校舎' | 'メディア棟' | '和泉ラーニングスクエア' | '和泉図書館' | '食堂' | '第二学生会館';