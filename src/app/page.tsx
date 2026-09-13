import HeroSection from "@/components/index/HeroSection";
import Airplane from "@/components/Airplane";

export default function Home() {
  return (
    <main className="bg-top-gradient pb-60">
      <HeroSection />
      <div className="h-300" ></div>
      <Airplane/>
      <div className="h-300" ></div>
    </main>
  );
}