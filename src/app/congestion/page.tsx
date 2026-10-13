
"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

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
  long: {
    label: "15分以上",
    color: "#87C7B8",
  },
  medium: {
    label: "5〜15分",
    color: "#F1B2C0",
  },
  short: {
    label: "5分以下",
    color: "#C1B1D0",
  },
  soldout: {
    label: "売り切れ",
    color: "#E60012",
  },
  paused: {
    label: "一時停止",
    color: "#E60012",
  },
};

function StatusMark({ status }: { status: CrowdStatus }) {
  if (status === "soldout") {
    return (
      <span
        className="text-3xl font-bold leading-none text-red-600"
        role="img"
        aria-label="売り切れ"
      >
        ×
      </span>
    );
  }

  if (status === "paused") {
    return (
      <span
        className="text-2xl font-bold leading-none text-red-600"
        role="img"
        aria-label="一時停止"
      >
        △
      </span>
    );
  }

  return (
    <span
      className="inline-block h-6 w-6 shrink-0 rounded-full border-2 border-white shadow-sm"
      style={{ backgroundColor: statusInfo[status].color }}
      role="img"
      aria-label={statusInfo[status].label}
    />
  );
}

function StallCard({ stall }: { stall: Stall }) {
  return (
    <div className="flex min-h-[58px] overflow-hidden rounded-sm border border-black/70 bg-white">
      <div
        className={`flex w-14 shrink-0 items-center justify-center text-xl font-bold text-white sm:w-[60px] ${
          stall.id <= 13 ? "bg-secondary" : "bg-accent"
        }`}
      >
        {stall.id}
      </div>

      <div className="flex min-w-0 flex-1 items-center justify-center px-2 py-2">
        <span className="text-center text-base font-bold leading-snug text-black sm:text-lg">
          {stall.name}
        </span>
      </div>

      <div className="flex w-14 shrink-0 items-center justify-center border-l border-black/70 sm:w-[60px]">
        <StatusMark status={stall.status} />
      </div>
    </div>
  );
}

export default function CrowdPage() {
  const [stalls, setStalls] = useState<Stall[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let active = true;

    async function fetchStalls() {
      const { data, error } = await supabase
        .from("stalls")
        .select("id, name, status")
        .order("id", { ascending: true });

      if (!active) return;

      if (error) {
        console.error(error);
        setError(true);
        setLoading(false);
        return;
      }

      setStalls((data ?? []) as Stall[]);
      setError(false);
      setLoading(false);
    }

    fetchStalls();

    const channel = supabase
      .channel("crowd-stalls")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "stalls",
        },
        () => {
          fetchStalls();
        }
      )
      .subscribe();

    return () => {
      active = false;
      supabase.removeChannel(channel);
    };
  }, []);

  return (
    <main className="min-h-screen bg-mainpx-4 py-8 sm:px-6 md:px-10">
      <div className="mx-auto max-w-[1400px]">
        <h1 className="mb-3 text-center text-3xl font-bold text-white sm:text-4xl">
          混雑状況
        </h1>

        <p className="mb-8 text-center text-sm text-white sm:text-base">
          各模擬店の待ち時間を確認できます。
        </p>

        <div className="mb-8 flex flex-wrap justify-center gap-x-5 gap-y-3 rounded-2xl bg-white/90 px-4 py-4 text-sm font-bold text-black">
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

        {/* {loading ? (
          <p className="py-12 text-center font-bold text-white">
            混雑状況を読み込み中...
          </p>
        ) : error ? (
          <p className="py-12 text-center font-bold text-white">
            混雑状況を取得できませんでした。時間をおいて再度ご確認ください。
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-x-5 gap-y-3 sm:grid-cols-2 xl:grid-cols-3">
            {stalls.map((stall) => (
              <StallCard key={stall.id} stall={stall} />
            ))}
          </div>
        )} */}
      </div>
    </main>
  );
}
