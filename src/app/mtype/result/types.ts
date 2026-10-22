export type MTypeKey = "A×C" | "A×D" | "B×C" | "B×D";

export const typeNames: Record<MTypeKey, string> = {
    "A×C": "パパっと満喫家！",
    "A×D": "じっくり探検家！",
    "B×C": "しっかり研究家！",
    "B×D": "うっとり鑑賞家！",
};

export const typeImages: Record<MTypeKey, string> = {
    "A×C": "/images/mtype/ac.png",
    "A×D": "/images/mtype/ad.png",
    "B×C": "/images/mtype/bc.png",
    "B×D": "/images/mtype/bd.png",
}

export const typeDescriptions: Record<MTypeKey, string> = {
    "A×C": "いろんな企画をテンポよく回って、「楽しい！」をどんどん集めたいあなたには、短時間でサクッと楽しめる企画や、盛り上がることができる企画がおすすめ！",
    "A×D": "1つの企画をじっくり味わって、最後までやりきるのが好きなあなたには、体験・展示をじっくり味わえる企画や、達成感のある参加型企画がおすすめ！",
    "B×C": "「知る・学ぶ・発見する」が楽しくて、気になったことは深掘りしたくなるあなたには、明大祭ならではの発見がある企画や、知的好奇心をくすぐる企画がピッタリ！",
    "B×D": "作品や表現の世界観に浸って、感じることが好きなあなたには、オリジナルの世界観に没入できる企画や、心揺さぶられる表現に出会える企画がピッタリ！",
}

export const typeColors: Record<MTypeKey, {color: string, code: string}> = {
    "A×C": {color: "オレンジ", code: "#F6A560"},
    "A×D": {color: "青", code: "#7AB9F6"},
    "B×C": {color: "ピンク", code: "#F6A5C0"},
    "B×D": {color: "紫", code: "#C4A5F6"},
}