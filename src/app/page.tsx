'use client';

import FireLoading from "@/components/base/Loading";
import Access from "@/components/index/Access";
import AnnounceSection from "@/components/index/AnnounceSection";
import HeroSection from "@/components/index/HeroSection";
import News from "@/components/index/News";
import Rainbow from "@/components/index/Rainbow";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  // 初回表示・フェードアウト制御
  useEffect(() => {
    const alreadyShown = sessionStorage.getItem("loadingShown");

    if (!alreadyShown) {
      sessionStorage.setItem("loadingShown", "true");
    } else {
      setIsLoading(false);
    }
  }, []);
  return (
    <div>
      <FireLoading setLoading={setIsLoading} />
      {isLoading ? <div className="h-screen w-screen bg-primary fixed top-0 z-50" /> : <Contents />}
    </div>
  );
}

function Contents() {
  return (
    <div>
      <HeroSection />
      <Rainbow className="mt-10" />
      <AnnounceSection />
      <Rainbow />
      <News />
      <Rainbow className="mt-10" />
      <Access />
    </div>
  )
}