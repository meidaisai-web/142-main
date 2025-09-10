//日付、タグ、タイトルをまとめて表示するためのコンポーネントです。

import React from "react";
import InfoStamp from "./InfoTags";
import InfoDate from "./InfoDate";
import InfoTitle from "./InfoTitle";
import { InformationItem } from "../../../InformationData";

type InfoProps = {
  item: InformationItem;
  isLast?: boolean;
};

const Info = ({ item, isLast = false }: InfoProps) => {
  return (
    <div>
      <div className="py-6 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
        <div className="flex items-center gap-3">
          <InfoDate>{item.date}</InfoDate>
          <InfoStamp type={item.type} />
        </div>
        <InfoTitle link={item.link}>{item.title}</InfoTitle>
      </div>
      {!isLast && <div className="bg-gray-300 h-[1px]" />}
    </div>
  );
};

export default Info;