import React from "react";
import PageTitle from "./texts/PageTitle";
import Info from "./InfoMaterial/Info";
import Button from "./buttons/Button";
import { InformationData } from "../../InformationData";

const Information = () => {
  return (
    <div>
      <PageTitle>お知らせ</PageTitle>
      <div className="mt-10 bg-white rounded-4xl mx-auto max-w-[50vw] overflow-hidden">
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
      <Button href="https://uhuhhi" className="mt-8">
        もっと見る
      </Button>
    </div>
  );
};

export default Information;
