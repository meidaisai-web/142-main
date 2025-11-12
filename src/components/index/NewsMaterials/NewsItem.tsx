//日付、タグ、タイトルをまとめて表示するためのコンポーネントです。

import NewsTag from "./NewsTag";
import NewsTitle from "./NewsTitle";
import NewsDate from "./NewsDate";
import { type NewsItem } from "@/utils/datas/NewsData";
import Link from "next/link";

type NewsItemProps = {
  item: NewsItem;
  isLast?: boolean;
};

const NewsItem = ({ item, isLast = false }: NewsItemProps) => {
  return (
    <Link href={item.link ?? '/news'}>
      <div className="py-6 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
        <div className="flex items-center gap-3">
          <NewsDate>{item.date}</NewsDate>
          <NewsTag type={item.type} />
        </div>
        <NewsTitle>{item.title}</NewsTitle>
      </div>
      {!isLast && <div className="bg-gray-300 h-[1px]" />}
    </Link>
  );
};

export default NewsItem;