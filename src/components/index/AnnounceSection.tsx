import Image from "next/image";
import { ReactNode } from "react";
import ShadowText from "@/components/texts/ShadowText";
import Frame from "@/components/index/Frame";
import DetailButton from "../buttons/DetailButton";

export default function AnnounceSection() {
  const announces = [
    { src: "/images/svg/announce/keepout.svg", alt: "立ち入り禁止", text: "立ち入り禁止エリアあり" },
    { src: "/images/svg/announce/no-hate.svg", alt: "ヘイトスピーチ禁止", text: "SNS上での誹謗・中傷禁止" },
    { src: "/images/svg/announce/no-pet.svg", alt: "ペット禁止", text: "ペット同伴禁止\n(補助犬を除く)" },
    { src: "/images/svg/announce/no-activity.svg", alt: "活動禁止", text: "無許可活動禁止" },
    { src: "/images/svg/announce/no-smoking.svg", alt: "喫煙禁止", text: "指定場所以外での喫煙禁止\n（喫煙所あり）" },
    { src: "/images/svg/announce/no-alchol.svg", alt: "飲酒禁止", text: "飲酒・酒類の持ち込み\nおよび販売・配布禁止" },
  ];

  return (
    <div className="mb-20">
      <ShadowText>来場者のみなさまへ</ShadowText>
      <Frame>
        <div className="mx-auto w-full max-w-96 sm:max-w-3xl grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-3 sm:gap-y-8">
          {announces.map((item, index) => (
            <Item key={index} src={item.src} alt={item.alt}>
              {item.text}
            </Item>
          ))}
        </div>
        <DetailButton href="/announce" className="mt-10" />
      </Frame>
    </div>
  );
}

type ItemProps = { children: ReactNode; src: string; alt: string; };

function Item({ children, src, alt }: ItemProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-28 sm:w-36 sm:h-36">
        <Image src={src} alt={alt} width={200} height={200} className="w-full h-full object-contain p-2" />
      </div>
      <p className="text-text whitespace-pre-line text-center font-bold text-xs sm:text-base sm:max-w-sm">
        {children}
      </p>
    </div>
  );
}
