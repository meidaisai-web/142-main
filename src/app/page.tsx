'use client';

import FireLoading from "@/components/base/Loading";
import AnnounceSection from "@/components/index/AnnounceSection";
import HeroSection from "@/components/index/HeroSection";
import News from "@/components/index/News";
import Rainbow from "@/components/index/Rainbow";
import { useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div>
      <FireLoading setLoading={setIsLoading} />
      {!isLoading && <Contents />}
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
    </div>
  )
}