import React from "react";
import Button from "../buttons/Button";
import NewsItem from "./NewsMaterials/NewsItem";
import { NewsData } from "@/utils/datas/NewsData";
import IndexTitle from "../texts/IndexTitle";


export default function News() {
  return (
    <div className="w-full px-8 sm:px-28 flex flex-col items-center">
      <IndexTitle>お知らせ</IndexTitle>
      <Contents />
      <Button href="/news" className="mt-8">もっと見る</Button>
    </div>
  );
};

function Contents() {
  return (
    <div className="mt-10 px-8 bg-white rounded-4xl w-full max-w-2xl overflow-hidden">
      <div className="py-4">
        {NewsData.map((item, index) => (
          <NewsItem
            key={item.id}
            item={item}
            isLast={index === NewsData.length - 1}
          />
        ))}
      </div>
    </div>
  )
}