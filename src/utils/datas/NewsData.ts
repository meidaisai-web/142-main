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
  {
    id: 1,
    date: "2025.9.17",
    type: "更新",
    title: "第141回明大祭公式サイトを更新しました。",
  },
];