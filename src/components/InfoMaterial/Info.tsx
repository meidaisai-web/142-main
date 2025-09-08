import React from "react";
import InfoStamp from "./InfoStamp";
import InfoDate from "./InfoDate";
import InfoTitle from "./InfoTitle";
import { InfomationItem } from "../Infomation";

type InfoProps = {
  item: InfomationItem;
  isLast?: boolean;
  isFirst?: boolean;
};

const Info = ({ item, isLast = false, isFirst = false }: InfoProps) => {
  return (
    <div className={`${isFirst ? "pt-8" : ""}`}>
      <div className="px-8 py-6 flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
        <div className="flex items-center gap-4">
          <InfoDate>{item.date}</InfoDate>
          <InfoStamp type={item.type} />
        </div>
        <InfoTitle>{item.title}</InfoTitle>
      </div>
      {!isLast && <div className="bg-gray-300 h-[1px] mx-8" />}
    </div>
  );
};

export default Info;
