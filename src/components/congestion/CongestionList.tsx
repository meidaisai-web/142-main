"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Text from "@/components/texts/Text";
import HoverPreview from "@/components/congestion/HoverPreview";
import { MasterData } from "@/utils/models/MasterData";
import { getStoreDataWithCongestion } from "@/utils/supabase/masterDataAction";
import { List, ListItem } from "../texts/List";

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

function toCrowdStatus(time: string | undefined): CrowdStatus | null {
  return (time && timeToStatus[time]) || null;
}

function toTentNumber(location: string): number | null {
  const match = location.match(/(\d+)番/);
  return match ? Number(match[1]) : null;
}

function StatusMark({ status, large = false }: { status: CrowdStatus | null; large?: boolean }) {
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
        className={`shrink-0 ${isSoldout ? (large ? "h-8 w-8" : "h-7 w-7") : (large ? "h-6 w-6" : "h-5 w-5")
          }`}
      />
    );
  }

  return (
    <span
      className={`inline-block shrink-0 rounded-full shadow-sm ${large ? "h-5 w-5 md:h-6 md:w-6" : "h-4 w-4 md:h-5 md:w-5"} ${info.color}`}
      role="img"
      aria-label={info.label}
    />
  );
}

function StallCard({ number, store, status, pressed }: { number: number; store: MasterData; status: CrowdStatus | null; pressed: boolean }) {
  const isSecondary = number <= 13;
  return (
    <div className={`flex min-h-[46px] md:min-h-[42px] overflow-hidden border border-[#3E3D3F] bg-white transition-transform duration-200 group-active:translate-y-[3px] ${pressed ? "translate-y-[2px]" : ""
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

function formatUpdatedAt(timestamp: string): string {
  return new Intl.DateTimeFormat("ja-JP", {
    timeZone: "Asia/Tokyo",
    month: "numeric",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(timestamp));
}

function StorePreview({ store, status }: { store: MasterData; status: CrowdStatus | null }) {
  const [imgSrc, setImgSrc] = useState(store.imageUrl || "/images/svg/no-image.svg");

  return (
    <Link
      href={`/search/${store.id}`}
      className="block w-72 overflow-hidden rounded-xl border-2 border-[#3E3D3F] bg-white text-[#3E3D3F] shadow-xl"
    >
      <Image
        src={imgSrc}
        alt="企画画像"
        width={288}
        height={96}
        className="h-24 w-full border-b-2 border-[#3E3D3F] object-cover"
        onError={() => setImgSrc("/images/svg/no-image.svg")}
      />
      <div className="p-3">
        <p className="font-bold leading-snug">{store.eventName.trim()}</p>
        <p className="mt-1 text-xs text-gray-500">{store.groupName}</p>
        {store.catchphrase && (
          <p className="mt-2 text-sm leading-snug">{store.catchphrase}</p>
        )}
        <div className="mt-3 flex items-center gap-2 border-t border-gray-200 pt-2 text-sm font-bold">
          <span className="flex h-7 items-center">
            <StatusMark status={status} />
          </span>
          <span>{status ? statusInfo[status].label : "情報なし"}</span>
          {store.congestion?.timestamp && (
            <span className="ml-auto text-xs font-medium text-gray-500">
              {formatUpdatedAt(store.congestion.timestamp)} 更新
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}

type WaitLimit = "short" | "medium" | "none";

// 混雑状況を取り直す間隔（ミリ秒）
const CONGESTION_REFRESH_INTERVAL_MS = 30 * 1000;

// 待ち時間の絞り込み条件と、条件に合う混雑ステータス（null は制限なし）
const waitLimitOptions: { value: WaitLimit; label: string; allowed: CrowdStatus[] | null }[] = [
  { value: "short", label: "5分以下", allowed: ["short"] },
  { value: "medium", label: "15分以下", allowed: ["short", "medium"] },
  { value: "none", label: "すべて見る", allowed: null },
];

export default function CongestionList() {
  const [waitLimit, setWaitLimit] = useState<WaitLimit>("none");
  const [stores, setStores] = useState<MasterData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [pressedId, setPressedId] = useState<number | null>(null);

  const allowedStatuses = waitLimitOptions.find((option) => option.value === waitLimit)?.allowed ?? null;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getStoreDataWithCongestion();
        if (!data) {
          setError("混雑状況の取得に失敗しました");
          return;
        }
        setError(null);
        setStores(data);
      } catch (err) {
        console.log('データの取得に失敗しました:', err);
        setError("混雑状況の取得に失敗しました");
      } finally {
        setLoading(false);
      }
    };
    fetchData();

    // リロードしなくても最新の混雑状況に更新されるよう、定期的に取得し直す
    const timer = setInterval(fetchData, CONGESTION_REFRESH_INTERVAL_MS);
    // タブに戻ったときにも取得し直す（バックグラウンドで止まっていた分を取り戻す）
    const onVisibilityChange = () => {
      if (document.visibilityState === "visible") fetchData();
    };
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      clearInterval(timer);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, []);

  return (
    <>
      <div className="mb-4 rounded-lg bg-[color-mix(in_srgb,var(--color-primary-100)_70%,white)] px-4 py-4 text-sm font-bold text-[#3E3D3F]">
        <Text center className="text-[15px] sm:text-[17px]">
          待ち時間ごとに絞り込む
        </Text>

{/* 凡例 */}
        <div className="mt-3 flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm sm:text-base">
          {(
            [["long"], ["medium"], ["short"], ["soldout", "paused"]] as const
          ).map((group) => (
            <div key={group.join()} className="flex gap-x-4">
              {group.map((status) => (
                <div key={status} className="flex items-center gap-1 whitespace-nowrap">
                  <span className="flex h-8 items-center">
                    <StatusMark status={status} large />
                  </span>
                  <span>{statusInfo[status].label}</span>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-3 flex justify-center">
          <div role="radiogroup" aria-label="待ち時間で絞り込み" className="inline-flex rounded-xl border-2 border-accent-900 bg-white p-1">
            {waitLimitOptions.map((option) => {
              const isSelected = waitLimit === option.value;

              return (
                <button
                  key={option.value}
                  type="button"
                  role="radio"
                  aria-checked={isSelected}
                  onClick={() => setWaitLimit(option.value)}
                  className={`min-w-[6rem] rounded-md px-4 py-2 text-center transition-colors duration-200 sm:px-6 md:min-w-[9rem] md:px-8 md:py-2.5 md:text-base ${isSelected
                    ? "bg-accent-900 text-white"
                    : "text-[#3E3D3F] hover:bg-accent-100"
                    }`}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
        </div>

        <List mark="※" className="mt-2 flex justify-center text-sm sm:text-sm">
          <ListItem>実際の待ち時間は前後する場合がございます。</ListItem>
        </List>
      </div>
      <Text className="fontbold">
        タップで各企画の詳細ページに移動します。
      </Text>

      {loading && <Text>読み込み中...</Text>}
      {error && <Text>{error}</Text>}

      {!loading && !error && (
        <div className="grid grid-cols-2 grid-flow-row gap-x-3 gap-y-2 sm:grid-flow-col sm:auto-cols-fr sm:grid-rows-[repeat(26,minmax(0,auto))] sm:gap-x-5 lg:grid-rows-[repeat(17,minmax(0,auto))]">
          {stores.map((store, index) => {
            const status = toCrowdStatus(store.congestion?.time);
            const isDimmed = allowedStatuses !== null && (status === null || !allowedStatuses.includes(status));
            const isSoldoutOrPaused = status === "soldout" || status === "paused";
            const isLightlyDimmed = allowedStatuses === null && isSoldoutOrPaused;
            return (
              <div
                key={store.id}
                className={`transition-all duration-200 ${isDimmed
                  ? "opacity-25 grayscale"
                  : isLightlyDimmed
                    ? "opacity-50"
                    : "opacity-100"
                  }`}
              >
                <HoverPreview preview={<StorePreview store={store} status={status} />}>
                  {/* 長押しで沈ませている間に、リンクのメニューや文字選択が出ないようにする */}
                  <Link
                    href={`/search/${store.id}`}
                    onClick={() => setPressedId(store.id)}
                    onContextMenu={(e) => {
                      if ((e.nativeEvent as PointerEvent).pointerType === "touch") {
                        e.preventDefault();
                      }
                    }}
                    className="group block select-none [-webkit-touch-callout:none]"
                  >
                    <StallCard number={toTentNumber(store.location) ?? index + 1} store={store} status={status} pressed={pressedId === store.id} />
                  </Link>
                </HoverPreview>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
