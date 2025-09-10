import FireLoading from "@/components/base/Loading";
import AnnounceSection from "@/components/index/AnnounceSection";
import HeroSection from "@/components/index/HeroSection";
import News from "@/components/index/News";
import Rainbow from "@/components/index/Rainbow";


export default function Home() {

  return (
    <div>
      <FireLoading />
      <Contents />
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