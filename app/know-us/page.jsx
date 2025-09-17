import LHCSection from "@/components/know-us/LHC-section";
import UHCSection from "@/components/know-us/UHC-section";

export default function KnowUs() {
  return (
    <div 
      className="w-full min-h-screen bg-primary flex flex-col pt-10" 
      style={{
        backgroundImage: 'url("/images/mist-forest1.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <UHCSection />
      <LHCSection />
    </div>
  );
}
