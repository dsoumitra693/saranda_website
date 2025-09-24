import HeroSection from "@/components/home/hero-section";
import LandingPageSections from "@/components/ui/LandingPageSections";
import AboutSection from "@/components/ui/AboutSection";
import FeaturedSection from "@/components/ui/FeaturedSection";
import CommunitiesSection from "@/components/ui/CommunitiesSection";

export default function Home() {
  return <>
    <HeroSection />
    <LandingPageSections>
      <AboutSection />
      <FeaturedSection/>
      <CommunitiesSection/>
    </LandingPageSections>
  </>;
}
