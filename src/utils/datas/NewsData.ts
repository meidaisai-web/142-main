type NewsType = "重要" | "更新" | "お知らせ";
export type NewsItem = {
  id: number;
  date: string;
  type: NewsType;
  title: string;
  link?: string;
};

//お知らせの内容は以下に書いてください。
//typeを変更するとtagの色も変わります。typeがタグの名前になります。tagにつけられる名前は重要、更新、お知らせの3つです。
export const NewsData: NewsItem[] = [
  // {
  //   id: 7,
  //   date: "2025.11.4",
  //   type: "お知らせ",
  //   title: "第141回明大祭の来場者数は43,268人でした。",
  // },
  {
    id: 8,
    date: "2025.11.29",
    type: "更新",
    title: "第140回明大祭の最終決算報告を掲載しました。",
    link: "/accounting",
  },
  {
    id: 7,
    date: "2025.11.6",
    type: "更新",
    title: "Meidaisai Championshipの投票結果を公表しました。",
    link: "/champ"
  },
  {
    id: 6,
    date: "2025.11.3",
    type: "お知らせ",
    title: "第141回明大祭が閉幕しました。たくさんのご来場、誠にありがとうございました！",
  },
  {
    id: 5,
    date: "2025.11.1",
    type: "お知らせ",
    title: "第141回明大祭が開幕しました！",
  },
  {
    id: 4,
    date: "2025.10.30",
    type: "更新",
    title: "ページを追加しました。",
  },
  {
    id: 3,
    date: "2025.10.16",
    type: "更新",
    title: "ページを追加しました。"
  },
  {
    id: 2,
    date: "2025.10.1",
    type: "更新",
    title: "ページを追加しました。"
  },
  {
    id: 1,
    date: "2025.9.17",
    type: "更新",
    title: "第141回明大祭公式サイトをリニューアルしました。",
  }
];