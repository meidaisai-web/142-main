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
      <div className="px-8 py-6 flex flex-col md:flex-row md:items-center gap-1 md:gap-3">
        <div className="flex items-center">
          <InfoDate>{item.date}</InfoDate>
          <InfoStamp type={item.type} />
        </div>
        <InfoTitle link={item.link}>{item.title}</InfoTitle>
      </div>
      {!isLast && <div className="bg-gray-300 h-[1px] mx-8" />}
    </div>
  );
};

export default Info;
