import HeroSection from "@/components/home/hero-section";
import UHCSection from "@/components/know-us/UHC-section";
import LHCSection from "@/components/know-us/LHC-section";

export default function Home() {
  return <div className="w-full h-full">
    <HeroSection />
    <UHCSection/>
    <LHCSection/>
  </div>;
}
