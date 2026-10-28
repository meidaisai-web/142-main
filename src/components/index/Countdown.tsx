"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

// 開催初日
const EVENT_YEAR = 2026;
const EVENT_MONTH = 10;
const EVENT_DAY = 30;

// 本祭は3日間
const EVENT_DAYS = 3;

const DAY_MS = 24 * 60 * 60 * 1000;

// 確認するときは undefined を "2026-11-02" などに変更。
// 日付は必ず半角のダブルクォートで囲んでください。
// 確認後は undefined に戻します。
const PREVIEW_DATE: string | undefined = undefined;

const tokyoDateFormatter = new Intl.DateTimeFormat("en-US", {
  timeZone: "Asia/Tokyo",
  year: "numeric",
  month: "numeric",
  day: "numeric",
});

// 日本時間の年月日を、日単位の数値にします。
function getTokyoDay(date: Date) {
  const parts = tokyoDateFormatter.formatToParts(date);

  const year = Number(
    parts.find((part) => part.type === "year")?.value
  );

  const month = Number(
    parts.find((part) => part.type === "month")?.value
  );

  const day = Number(
    parts.find((part) => part.type === "day")?.value
  );

  return Date.UTC(year, month - 1, day) / DAY_MS;
}

type CountdownProps = {
  previewDate?: string;
};

export default function Countdown({
  previewDate = PREVIEW_DATE,
}: CountdownProps) {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    const updateNow = () => {
      setNow(new Date());
    };

    updateNow();

    // 開きっぱなしでも1分ごとに日付を確認します。
    const timer = window.setInterval(updateNow, 60_000);

    // 別のタブなどから戻ったときも確認します。
    window.addEventListener("focus", updateNow);

    return () => {
      window.clearInterval(timer);
      window.removeEventListener("focus", updateNow);
    };
  }, []);

  const currentDate = previewDate
    ? new Date(`${previewDate}T00:00:00+09:00`)
    : now;

  // サーバーとブラウザーの初回表示を一致させます。
  if (!currentDate) return null;

  const startDay =
    Date.UTC(EVENT_YEAR, EVENT_MONTH - 1, EVENT_DAY) / DAY_MS;

  const elapsedDays = getTokyoDay(currentDate) - startDay;

  // 本祭中：10月30日〜11月1日
  const isFestival =
    elapsedDays >= 0 && elapsedDays < EVENT_DAYS;

  // 本祭終了後：11月2日以降
  const isAfterFestival = elapsedDays >= EVENT_DAYS;

  // 開催前：残り日数
  // 本祭中：1・2・3日目
  // 終了後：本祭終了の翌日を1日として加算
  //
  // 10月30日 → 明大祭 1日目
  // 10月31日 → 明大祭 2日目
  // 11月1日  → 明大祭 3日目
  // 11月2日  → 開催から 1日
  // 11月3日  → 開催から 2日
  const displayNumber = isFestival
    ? elapsedDays + 1
    : isAfterFestival
      ? elapsedDays - EVENT_DAYS + 1
      : -elapsedDays;

  return (
    <div>
      <div className="relative w-screen flex items-center justify-center">
        <div className="absolute w-full z-0 pointer-events-none">
          <Image
            src="/images/countdown/belt.png"
            alt="帯"
            width={1537}
            height={449}
            className="w-full h-40 sm:h-62 md:h-70 object-fill select-none"
          />
        </div>

        <div className="sm:flex w-full justify-between items-center gap-16 px-4 sm:px-10 lg:px-20">
          <div className="relative w-2/3 min-w-58 sm:w-full max-w-140">
            <Image
              src="/images/countdown/DayLocate.svg"
              alt="DayLocate"
              width={500}
              height={300}
              className="w-full h-auto select-none"
            />
          </div>

          <div className="absolute sm:relative w-fit right-6 sm:right-auto flex flex-col items-end sm:items-start justify-start mt-2 sm:mt-0">
            {isFestival || isAfterFestival ? (
              <div className="absolute z-10 -mt-12 h-12 w-36 sm:-mt-16 sm:h-16 sm:w-48">
                <Image
                  src={
                    isFestival
                      ? ""
                      : ""
                  }
                  alt={isFestival ? "明大祭" : "開催から"}
                  fill
                  sizes="(min-width: 640px) 192px, 144px"
                  className="object-contain select-none"
                />
              </div>
            ) : (
              <p className="absolute font-black text-primary-700 text-shadow-[4px_4px_4px_rgba(0,0,0,0.25)] text-nowrap z-10 -mt-6">
                <span className="text-4xl sm:text-5xl">
                  開催
                </span>
                <span className="text-2xl sm:text-3xl">
                  まで
                </span>
              </p>
            )}

            <div className="relative flex items-end justify-end">
              <div className="relative flex items-center justify-center w-28 sm:w-40 aspect-square">
                <Image
                  src="/images/countdown/circle.svg"
                  alt=""
                  width={250}
                  height={250}
                  className="w-full h-full absolute select-none"
                />

                <p className="z-10 relative text-white text-shadow-[0_4px_4px_rgba(0,0,0,0.25)] text-5xl sm:text-7xl font-bold">
                  {displayNumber}
                </p>
              </div>

              <div className="relative w-16 sm:w-20 aspect-square flex items-center justify-center -translate-x-6">
                <Image
                  src="/images/countdown/smallcircle.svg"
                  alt=""
                  width={100}
                  height={100}
                  className="w-full h-full absolute select-none"
                />

                <p
                  className={`z-10 relative text-white text-shadow-[0_4px_4px_rgba(0,0,0,0.25)] font-bold whitespace-nowrap ${
                    isFestival
                      ? "text-2xl sm:text-3xl"
                      : "text-4xl sm:text-5xl"
                  }`}
                >
                  {isFestival ? "日目" : "日"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function CloudDivider({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 -40 1537 449"
      className={`w-full h-full text-white ${className}`}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 -15.6764C0 102.208 1537 -171.8872 1537 13.2632C1537 158.414 1537 215.351 1537 215.351H0C0 215.351 0 -133.561 0 -15.6764Z" />

      <path d="M1537 384.71C1537 266.987 0 500.761 0 355.81C0 210.859 0 154 0 154L1537 154C1537 154 1537 502.432 1537 384.71Z" />
    </svg>
  );
}