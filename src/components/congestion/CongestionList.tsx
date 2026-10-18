"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Text from "@/components/texts/Text";
import { MasterData } from "@/utils/models/MasterData";
import { getStoreDataWithCongestion } from "@/utils/supabase/masterDataAction";

type CrowdStatus =
  | "long"
  | "medium"
  | "short"
  | "soldout"
  | "paused";

const statusInfo: Record<
  CrowdStatus,
  { label: string; color: string }
> = {
  long: { label: "15分以上", color: "bg-primary-700" },
  medium: { label: "5〜15分", color: "bg-secondary-700" },
  short: { label: "5分以下", color: "bg-accent-700" },
  soldout: { label: "売り切れ", color: "#E60012" },
  paused: { label: "一時停止", color: "#E60012" },
};

// CongestionMap.time に入っている値と混雑ステータスの対応
const timeToStatus: Record<string, CrowdStatus> = {
  "15分以上": "long",
  "5分〜15分": "medium",
  "5分以下": "short",
  "売り切れ": "soldout",
  "一時停止": "paused",
};

// 未登録・不明な値は null
function toCrowdStatus(time: string | undefined): CrowdStatus | null {
  return (time && timeToStatus[time]) || null;
}

// 「テント配置番号 10番」からマップ上の番号を取り出す
function toTentNumber(location: string): number | null {
  const match = location.match(/(\d+)番/);
  return match ? Number(match[1]) : null;
}

function StatusMark({ status }: { status: CrowdStatus | null }) {
  if (status === null) {
    return (
      <span
        className="inline-block h-5 w-5 shrink-0 rounded-full bg-gray-300 shadow-sm"
        role="img"
        aria-label="情報なし"
      />
    );
  }

  const info = statusInfo[status];

  if (status === "soldout" || status === "paused") {
    const isSoldout = status === "soldout";

    return (
      <Image
        src={isSoldout ? "/images/congestion/soldout.svg" : "/images/congestion/paused.svg"}
        alt={isSoldout ? "売り切れ" : "一時停止"}
        width={isSoldout ? 28 : 22}
        height={isSoldout ? 28 : 22}
        className={`shrink-0 ${isSoldout ? "h-7 w-7" : "h-5 w-5"
          }`}
      />
    );
  }

  return (
    <span
      className={`inline-block h-4 w-4 md:h-5 md:w-5 shrink-0 rounded-full shadow-sm ${info.color}`}
      role="img"
      aria-label={info.label}
    />
  );
}

function StallCard({ number, store, status, pressed }: { number: number; store: MasterData; status: CrowdStatus | null; pressed: boolean }) {
  const isSecondary = number <= 13;
  return (
    <div className={`flex min-h-[46px] md:min-h-[42px] overflow-hidden border border-[#3E3D3F] bg-white transition-transform duration-200 ${pressed ? "translate-y-[2px]" : ""
      }`}>
      <div
        className={`flex w-7 shrink-0 items-center justify-center text-[13px] sm:text-[16px] font-bold text-[#3E3D3F] sm:w-[50px] ${isSecondary ? "bg-secondary-100" : "bg-accent-100"
          }`}
      >
        {number}
      </div>

      {/* 高さは常に2行分（leading-snug 1.375em × 2 + 上下padding）にして、1行の名前は上下中央に揃える */}
      <div className="flex h-[calc(2.75em+1rem)] min-w-0 flex-1 items-center justify-center px-1 py-2 text-xs leading-snug sm:px-2 sm:text-base lg:text-[14px]">
                <span className={`line-clamp-2 text-center font-bold transition-colors duration-200 ${pressed
          ? isSecondary ? "text-secondary" : "text-accent"
          : isSecondary ? "text-[#3E3D3F] group-hover:text-secondary" : "text-[#3E3D3F] group-hover:text-accent"
          }`}>
          {store.eventName.trim()}
        </span>
      </div>

      <div className="flex w-7 shrink-0 items-center justify-center border-l border-[#3E3D3F] sm:w-[50px]">
        <StatusMark status={status} />
      </div>
    </div>
  );
}

export default function CongestionList() {
  const [filterStatuses, setFilterStatuses] = useState<CrowdStatus[]>([]);
  const [stores, setStores] = useState<MasterData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  // スマホのタップは :active が一瞬で終わるので、押したカードを覚えておく
  const [pressedId, setPressedId] = useState<number | null>(null);
  // 凡例ボタン列の左端から一番左のボタンまでの距離（説明文の左端を揃えるのに使う）
  const buttonRowRef = useRef<HTMLDivElement>(null);
  const [textOffset, setTextOffset] = useState<number>(0);

  useEffect(() => {
    const row = buttonRowRef.current;
    if (!row) return;

    const updateOffset = () => {
      const firstButton = row.firstElementChild;
      if (!firstButton) return;
      setTextOffset(firstButton.getBoundingClientRect().left - row.getBoundingClientRect().left);
    };

    updateOffset();

    // 画面幅が変わってボタンの折り返しが変わったら測り直す
    const observer = new ResizeObserver(updateOffset);
    observer.observe(row);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getStoreDataWithCongestion();
        if (!data) {
          setError("混雑状況の取得に失敗しました");
          return;
        }
        setStores(data);
      } catch (err) {
        console.log('データの取得に失敗しました:', err);
        setError("混雑状況の取得に失敗しました");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="mb-8 rounded-lg bg-primary-100 px-4 py-4 text-sm font-bold text-[#3E3D3F]">
        <div style={{ paddingLeft: textOffset }}>
          <Text className="text-[14px] sm:text-[15px]">
            タップした状況の模擬店を薄く表示します。
          </Text>
        </div>

        <div ref={buttonRowRef} className="mt-3 flex flex-wrap justify-center gap-x-3 gap-y-3">
          {(
            ["long", "medium", "short", "soldout", "paused"] as const
          ).map((status) => {
            const isActive = filterStatuses.includes(status);

            return (
              <button
                key={status}
                type="button"
                onClick={() => {
                  setFilterStatuses((prev) => {
                    if (prev.includes(status)) {
                      return prev.filter((item) => item !== status);
                    }

                    return [...prev, status];
                  });
                }}
                aria-pressed={isActive}
                className={`flex items-center gap-2 rounded-md border-2 px-3 py-2 transition-all duration-200 hover:translate-y-[1px] hover:shadow-xl active:translate-y-[3px] ${isActive
                  ? "border-gray-300 bg-gray-300"
                  : "border-accent-900 bg-white"
                  }`}
              >
                {/* アイコンの大きさがステータスごとに違うので、一番大きい売り切れ(h-7)に高さを揃えてボタンの高さを統一する */}
                <span className="flex h-7 items-center">
                  <StatusMark status={status} />
                </span>
                <span>{statusInfo[status].label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {loading && <Text>読み込み中...</Text>}
      {error && <Text>{error}</Text>}

      {!loading && !error && (
        <div className="grid grid-cols-2 grid-flow-row gap-x-3 gap-y-2 sm:grid-flow-col sm:auto-cols-fr sm:grid-rows-[repeat(26,minmax(0,auto))] sm:gap-x-5 xl:grid-rows-[repeat(17,minmax(0,auto))]">
          {stores.map((store, index) => {
            const status = toCrowdStatus(store.congestion?.time);
            const isDimmed = status !== null && filterStatuses.includes(status);
            return (
              <div
                key={store.id}
                className={`transition-all duration-200 ${isDimmed
                  ? "opacity-25 grayscale"
                  : "opacity-100"
                  }`}
              >
                <Link href={`/search/${store.id}`} onClick={() => setPressedId(store.id)} className="group block">
                  <StallCard number={toTentNumber(store.location) ?? index + 1} store={store} status={status} pressed={pressedId === store.id} />
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
