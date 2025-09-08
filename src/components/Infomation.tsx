import React from "react";
import PageTitle from "./texts/PageTitle";
import Info from "./InfoMaterial/Info";
import Button from "./buttons/Button";

type InfoType = "重要" | "更新" | "お知らせ";
export type InfomationItem = {
  id: number;
  date: string;
  type: InfoType;
  title: string;
  link: string;
};

//お知らせの内容は以下に書いてください。
//typeを変更するとstampの色も変わります。typeは重要、更新、お知らせの3つです。
export const InfomationData: InfomationItem[] = [
  {
    id: 1,
    date: "2025,9,7",
    type: "重要",
    title: "新しいサービスを開始しました",
    link: "https://adwdaf",
  },
  {
    id: 2,
    date: "2025,9,8",
    type: "更新",
    title: "新しいサービスだよ",
    link: "https://adffffffgwdaf",
  },
  {
    id: 3,
    date: "2025,9,9",
    type: "お知らせ",
    title: "新しいサービスを開始したって",
    link: "https://adggggglhwdaf",
  },
  {
    id: 4,
    date: "2025,9,10",
    type: "お知らせ",
    title: "新しいサービスを開始したっていう",
    link: "https://adgggggl3effhwdaf",
  },
];

const Infomation = () => {
  return (
    <div>
      <PageTitle>お知らせ</PageTitle>
      <div className="mt-10 bg-white rounded-4xl mx-auto w-[70vw] sm:w-[60vw] md:[50vw] max-w-xl min-h-[50vh] overflow-hidden">
        <div className="py-4">
          {InfomationData.map((item, index) => (
            <Info
              key={item.id}
              item={item}
              isLast={index === InfomationData.length - 1}
              isFirst={index === 0}
            />
          ))}
        </div>
      </div>
      <Button href="https://uhuhhi" className="mt-8">
        もっと見る
      </Button>
    </div>
  );
};

export default Infomation;
