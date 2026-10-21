import CloudPageContainer from "@/components/base/CloudPageContainer"
import PageTitle from "@/components/texts/PageTitle"
import Text from "@/components/texts/Text"
import CongestionList from "@/components/congestion/CongestionList";
import Image from "next/image";

export default function CrowdPage() {
  return (
    <CloudPageContainer noPadding className="px-5">

      <PageTitle>混雑状況</PageTitle>
      {/* 説明文の左端をマップの左端に揃えるため、マップと同じ幅の枠に入れる */}
      <div className="mb-8 mx-auto w-full md:w-[75%]">
        <Text className="text-[14px] sm:text-[20px] mb-3">
          各模擬店の待ち時間を確認できます。
        </Text>
        <Image
          src="/images/congestion/congestion_map.png"
          alt="マップ"
          width={1200}
          height={400}
          className="w-full h-auto object-contain"
        />
      </div>
      <CongestionList />
    </CloudPageContainer>
  );
}
