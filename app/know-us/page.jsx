import LHCSection from "@/components/know-us/LHC-section";
import UHCSection from "@/components/know-us/UHC-section";
import { fetchRC, fetchUHC, fetchWebOps } from "@/lib";

export default async function KnowUs() {
  const [uhcMembers, rcMembers, webOpsMembers] = await Promise.all([
    fetchUHC(),
    fetchRC(),
    fetchWebOps(),
  ]);

  console.log("uhcMembers", uhcMembers)

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
      <UHCSection members={uhcMembers} />
      <LHCSection rcMembers={rcMembers}
      webOpsMembers={webOpsMembers} />
    </div>
  );
}
