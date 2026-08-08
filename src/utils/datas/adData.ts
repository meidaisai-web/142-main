import { Ad } from "../models/AdType";

// 本来のバナー画像がまだ揃っていないため、仮でもらったプレースホルダー画像を全枠に使っている
const PLACEHOLDER_SRC = "/images/svg/ad/placeholder.png";

export const adData: Ad[] = [
    { url: "https://www.adachi-driving-school.com/", src: PLACEHOLDER_SRC, id: "adachi" },//足立自動車学校
    { url: "https://www.towaeng.co.jp/", src: PLACEHOLDER_SRC, id: "towa" },//東和エンジニアリング
    { url: "https://www.axona-aichi.com/", src: PLACEHOLDER_SRC, id: "aichi" },//愛知株式会社
    { url: "https://www.ginapartners.com/563252841732/internship-university-student?utm_source=meiji-festival&utm_medium=banner&utm_campaign=internship-abroad", src: PLACEHOLDER_SRC, id: "gina" },//Gina&Partners
    { url: "https://furisode-ichikura.jp/?utm_source=referral&utm_medium=other&utm_campaign202511_meiji_gakusai", src: PLACEHOLDER_SRC, id: "ichikura" },//株式会社一蔵
    { url: "https://www.fem-produce.co.jp/", src: PLACEHOLDER_SRC, id: "fem" },//フェム
    { url: "https://www.fbond.net", src: PLACEHOLDER_SRC, id: "kanda" },//東京神田ゼミ
    { url: "https://www.matsubarahifuka.com/", src: PLACEHOLDER_SRC, id: "matsubara" },//松原皮膚科
    { url: "https://cpa-net.jp/contact/request.php?utm_source=shanon&utm_medium=email&utm_campaign=2025_meidaisai", src: PLACEHOLDER_SRC, id: "cpa" },//CPA
];

export const smallAdData: Ad[] = [
    { url: "https://kyoundo-hospital.jp/", src: PLACEHOLDER_SRC, id: "kyoundo" },//杏雲堂病院
    { url: "https://i.morecon.jp/jv6s", src: PLACEHOLDER_SRC, id: "riseup" },//株式会社Rise UP
    { url: "https://www.tomas.co.jp/", src: PLACEHOLDER_SRC, id: "riso" },//株式会社リソー教育
    { url: "https://www.senko.co.jp/jp/", src: PLACEHOLDER_SRC, id: "senko" },//センコー
    { url: "https://www.densetsuko.co.jp/", src: PLACEHOLDER_SRC, id: "denko" },//日本電設工業
    { url: "https://www2.sundai.ac.jp/", src: PLACEHOLDER_SRC, id: "suruga" },//駿河台学園
];