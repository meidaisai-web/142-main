'use client';

import Alert from "@/components/Alert";
import FireLoading from "@/components/base/Loading";
import Access from "@/components/index/Access";
import AnnounceSection from "@/components/index/AnnounceSection";
import HeroSection from "@/components/index/HeroSection";
import TopicCoverFlow from "@/components/index/TopicCoverFlow";
import News from "@/components/index/News";
import Rainbow from "@/components/index/Rainbow";
import SearchSection from "@/components/index/SearchSection";
import { NewsData } from "@/utils/datas/NewsData";
import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";
import Try from "@/components/index/try";
import TopicCoverFlow2 from "@/components/index/TopicCoverFlow2";

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
  const [isAlertHidden, setIsAlertHidden] = useState(true);
  const [alertContent, setAlertContent] = useState<ReactNode>();
  // 重要なお知らせのうち、最新のものを取得
  const importantNews = NewsData.filter((news) => news.type === '重要');
  const latestShowedNews = Number(localStorage.getItem("latestShowedNews") || "0");
  const showNewsData = importantNews.findLast((news) => latestShowedNews < news.id);

  useEffect(() => {
    if (showNewsData) {
      setIsAlertHidden(false);
      setAlertContent(showNewsData.title);
    } else {
      setIsAlertHidden(true);
    }
  }, []);

  function onTapClose() {
    localStorage.setItem("latestShowedNews", showNewsData?.id.toString() || "0");
  }

  return (
    <div>
      <Alert title="重要なお知らせ" closeAction={onTapClose} hidden={isAlertHidden} setHidden={setIsAlertHidden}>
          <p>{alertContent}</p>
          <Link href="/news" className="text-secondary hover:underline">他のお知らせはこちら</Link>
      </Alert>
      <HeroSection />
      <Rainbow className="mt-10" />
      <TopicCoverFlow2 />
      <Rainbow className="mt-10" />
      <SearchSection />
      <Rainbow className="mt-20" />
      <AnnounceSection />
      <Rainbow />
      <News />
      <Rainbow className="mt-10" />
      <Access />
    </div>
  )
}