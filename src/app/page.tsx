import AnnounceSection from "@/components/AnnounceSection";
import HeroSection from "@/components/HeroSection";
import FireLoading from "@/components/Loading";

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
      <AnnounceSection />
    </div>
  )
}