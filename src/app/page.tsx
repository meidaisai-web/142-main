import HeroSection from "@/components/index/HeroSection";
import Loading from "@/components/base/Loading";
import TopIppan from "@/components/index/TopIppan";
import AnnounceSection from "@/components/index/AnnounceSection";
import Access from "@/components/index/Access";
import Airplane from "@/components/Airplane";
import Line1 from "@/components/animation/Line1";
import Line2 from "@/components/animation/Line2";

export default function Home() {
  return (
    <main className="bg-top-gradient pb-60">
      <Loading />
      <HeroSection />
      <div className="h-20 md:h-40"/>
      <Airplane />
      <div className="h-80 md:h-60"/>
      <TopIppan />
      <div className="h-20"/>
      <Line1 />
      <AnnounceSection />
      <div className="h-30"/>
      <Access />
      <div className="h-20 block md:hidden"/>
      <Line2 />
    </main>
  );
}