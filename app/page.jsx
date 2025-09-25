import HeroSection from "@/components/home/hero-section";
import LandingPageSections from "@/components/home/LandingPageSections";
import AboutSection from "@/components/home/AboutSection";
import FeaturedSection from "@/components/home/FeaturedSection";
import CommunitiesSection from "@/components/home/CommunitiesSection";


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
