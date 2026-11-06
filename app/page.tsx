import SystemHero from "@/components/SystemHero";
import ServicesExplorer from "@/components/ServicesExplorer";
import AquaparkStory from "@/components/AquaparkStory";
import CTA from "@/components/CTA";
import { ProjectCards, Process, TrustStrip } from "@/components/Sections";

export default function HomePage() {
  return (
    <>
      <SystemHero />
      <TrustStrip />
      <ServicesExplorer />
      <AquaparkStory />
      <ProjectCards />
      <Process />
      <CTA />
    </>
  );
}
