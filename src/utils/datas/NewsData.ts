type NewsType = "重要" | "更新" | "お知らせ";
export type NewsItem = {
  id: number;
  date: string;
  type: NewsType;
  title: string;
  link: string;
};

//お知らせの内容は以下に書いてください。
//typeを変更するとtagの色も変わります。typeがタグの名前になります。tagにつけられる名前は重要、更新、お知らせの3つです。
export const NewsData: NewsItem[] = [
  {
    id: 1,
    date: "2025.9.7",
    type: "重要",
    title: "新しいサービスを開始しました",
    link: "https://adwdaf",
  },
  {
    id: 2,
    date: "2025.9.8",
    type: "更新",
    title: "新しいサービスだよ",
    link: "https://adffffffgwdaf",
  },
  {
    id: 3,
    date: "2025.9.9",
    type: "お知らせ",
    title: "新しいサービスを開始したって",
    link: "https://adggggglhwdaf",
  },
  {
    id: 4,
    date: "2025.10.28",
    type: "お知らせ",
    title: "新しいサービスを開始したっていう",
    link: "https://adgggggl3effhwdaf",
  },
  {
    id: 5,
    date: "2025.10.28",
    type: "お知らせ",
    title: "新しいサービスを開始したっていう",
    link: "https://adgggggl3effhwdaf",
  },
  {
    id: 6,
    date: "2025.10.28",
    type: "お知らせ",
    title: "新しいサービスを開始したっていう",
    link: "https://adgggggl3effhwdaf",
  },
  {
    id: 7,
    date: "2025.10.28",
    type: "お知らせ",
    title: "新しいサービスを開始したっていう",
    link: "https://adgggggl3effhwdaf",
  },
];