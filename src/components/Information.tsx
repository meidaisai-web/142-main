import React from "react";
import PageTitle from "./texts/PageTitle";
import Info from "./InfoMaterial/Info";
import Button from "./buttons/Button";
import { InformationData } from "../../InformationData";

export default function Information() {
  return (
    <div className="w-full px-8 sm:px-28 flex flex-col items-center">
      <PageTitle>お知らせ</PageTitle>
      <Contents />
      <Button href="https://uhuhhi" className="mt-8">もっと見る</Button>
    </div>
  );
};

function Contents() {
  return (
    <div className="mt-10 px-8 bg-white rounded-4xl w-full max-w-2xl overflow-hidden">
      <div className="py-4">
        {InformationData.map((item, index) => (
          <Info
            key={item.id}
            item={item}
            isLast={index === InformationData.length - 1}
          />
        ))}
      </div>
    </div>
  )
}