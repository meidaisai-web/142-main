import HeroSection from "@/components/index/HeroSection";

import Loading from "@/components/base/Loading";

export default function Home() {
  return (
    <main className="bg-top-gradient pb-60">
      <HeroSection />
      <Loading />
    </main>
  );
}