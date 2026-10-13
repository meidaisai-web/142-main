
"use client";

import { useEffect, useState } from "react";
import CloudPageContainer from "@/components/base/CloudPageContainer"
import PageTitle from "@/components/texts/PageTitle"
import Text from "@/components/texts/Text"
import Image from "next/image";



type CrowdStatus =
  | "long"
  | "medium"
  | "short"
  | "soldout"
  | "paused";

type Stall = {
  id: number;
  name: string;
  status: CrowdStatus;
};

const statusInfo: Record<
  CrowdStatus,
  { label: string; color: string }
> = {
  long: { label: "15分以上", color: "bg-primary" },
  medium: { label: "5〜15分", color: "bg-secondary" },
  short: { label: "5分以下", color: "bg-accent" },
  soldout: { label: "売り切れ", color: "#E60012" },
  paused: { label: "一時停止", color: "#E60012" },
};

// 仮データ：Supabase接続後に置き換える
const stalls: Stall[] = [
  { id: 1, name: "さつまいもチップス", status: "long" },
  { id: 2, name: "メイクアップ", status: "medium" },
  { id: 3, name: "フルーツポンチ", status: "short" },
  { id: 4, name: "ドリンク", status: "soldout" },
  { id: 5, name: "チョコバナナ", status: "paused" },
  { id: 6, name: "ドリンク", status: "medium" },
  { id: 7, name: "ポップコーン", status: "short" },
  { id: 8, name: "タピオカ", status: "long" },
  { id: 9, name: "洋菓子", status: "medium" },
  { id: 10, name: "ミット打ち", status: "short" },
  { id: 11, name: "フリーマーケット", status: "long" },
  { id: 12, name: "中華菓子・ドリンク", status: "medium" },
  { id: 13, name: "射的", status: "short" },
  { id: 14, name: "チュロス", status: "medium" },
  { id: 15, name: "フライドポテト", status: "long" },
  { id: 16, name: "チュロス", status: "short" },
  { id: 17, name: "サムギョプサル", status: "medium" },
  { id: 18, name: "たこ焼き", status: "long" },
  { id: 19, name: "焼き鳥", status: "short" },
  { id: 20, name: "たこ焼き", status: "medium" },
  { id: 21, name: "餃子ドッグ", status: "long" },
  { id: 22, name: "小籠包", status: "short" },
  { id: 23, name: "たこ焼き", status: "medium" },
  { id: 24, name: "焼き鳥", status: "short" },
  { id: 25, name: "たこ焼き", status: "long" },
  { id: 26, name: "オムそば", status: "medium" },
  { id: 27, name: "クロッフル", status: "short" },
  { id: 28, name: "焼き鳥", status: "long" },
  { id: 29, name: "プルコギドッグ", status: "medium" },
  { id: 30, name: "ハンバーガー", status: "short" },
  { id: 31, name: "チュロス", status: "medium" },
  { id: 32, name: "スープ餃子", status: "long" },
  { id: 33, name: "キューバサンド", status: "short" },
  { id: 34, name: "たこ焼き", status: "medium" },
  { id: 35, name: "ベビーカステラ", status: "long" },
  { id: 36, name: "チュロス", status: "short" },
  { id: 37, name: "たこ焼き", status: "medium" },
  { id: 38, name: "フライドポテト", status: "long" },
  { id: 39, name: "はしまき", status: "short" },
  { id: 40, name: "チーズボール", status: "medium" },
  { id: 41, name: "豚骨焼きラーメン", status: "long" },
  { id: 42, name: "ポテト", status: "short" },
  { id: 43, name: "たこ焼き", status: "medium" },
  { id: 44, name: "フランクフルト", status: "long" },
  { id: 45, name: "焼き鳥", status: "short" },
  { id: 46, name: "ワッフル", status: "medium" },
  { id: 47, name: "パン", status: "long" },
  { id: 48, name: "揚げたこ焼き", status: "short" },
  { id: 49, name: "水餃子", status: "medium" },
  { id: 50, name: "焼き鳥", status: "long" },
  { id: 51, name: "今川焼き", status: "short" },
];

function StatusMark({ status }: { status: CrowdStatus }) {
  const info = statusInfo[status];

  if (status === "soldout" || status === "paused") {
    const isSoldout = status === "soldout";

    return (
      <Image
        src={isSoldout ? "/images/congestion/soldout.svg" : "/images/congestion/paused.svg"}
        alt={isSoldout ? "売り切れ" : "一時停止"}
        width={isSoldout ? 28 : 22}
        height={isSoldout ? 28 : 22}
        className={`shrink-0 ${
          isSoldout ? "h-8 w-8" : "h-6 w-6"
        }`}
      />
    );
  }

  return (
    <span
      className={`inline-block h-6 w-6 shrink-0 rounded-full shadow-sm ${info.color}`}
      role="img"
      aria-label={info.label}
    />
  );
}

function StallCard({ stall }: { stall: Stall }) {
  return (
    <div className="flex min-h-[48px] overflow-hidden border border-black/70 bg-white">
      <div
        className={`flex w-8 shrink-0 items-center justify-center text-[18px] font-bold text-white sm:w-[40px] ${stall.id <= 14 ? "bg-secondary" : "bg-accent"
          }`}
      >
        {stall.id}
      </div>

      <div className="flex min-w-0 flex-1 items-center justify-center px-1 py-2 sm:px-2">
        <span className="text-center text-[12px] font-bold leading-snug text-black sm:text-base lg:text-[14px]">
          {stall.name}
        </span>
      </div>

      <div className="flex w-8 shrink-0 items-center justify-center border-l border-black/70 sm:w-[40px]">
        <StatusMark status={stall.status} />
      </div>
    </div>
  );
}

export default function CrowdPage() {
  return (
      <CloudPageContainer>

        <PageTitle>混雑状況</PageTitle>

         <Image
          src="/images/congestion/congestion_map.png"
          alt="マップ"
          width={1200}
          height={400}
          className="mb-8 mx-auto w-[75%] h-auto object-contain"
        />

        <Text>各模擬店の待ち時間を確認できます。</Text>

        <div className="mb-8 flex flex-wrap justify-center gap-x-5 gap-y-3 rounded-2xl bg-white px-4 py-4 text-sm font-bold text-black">
          {(["long", "medium", "short"] as const).map((status) => (
            <div key={status} className="flex items-center gap-2">
              <StatusMark status={status} />
              <span>{statusInfo[status].label}</span>
            </div>
          ))}

          <div className="flex items-center gap-2">
            <StatusMark status="soldout" />
            <span>売り切れ</span>
          </div>

          <div className="flex items-center gap-2">
            <StatusMark status="paused" />
            <span>一時停止</span>
          </div>
        </div>

        <div className="grid grid-cols-2 grid-flow-col auto-cols-fr grid-rows-[repeat(26,minmax(0,auto))] gap-x-3 gap-y-2 sm:grid-rows-[repeat(17,minmax(0,auto))] sm:gap-x-5 xl:grid-rows-[repeat(13,minmax(0,auto))]">
          {stalls.map((stall) => (
            <StallCard key={stall.id} stall={stall} />
          ))}
        </div>
      </CloudPageContainer>
  );
}
