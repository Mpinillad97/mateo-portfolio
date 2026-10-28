import { AboutTeaser } from "@/components/sections/AboutTeaser";
import { AudienceCta } from "@/components/sections/AudienceCta";
import { EntryPoints } from "@/components/sections/EntryPoints";
import { Hero } from "@/components/sections/Hero";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { WorkAreas } from "@/components/sections/WorkAreas";

export default function HomePage() {
  return (
    <>
      <Hero />
      <EntryPoints />
      <SelectedWork />
      <WorkAreas />
      <AboutTeaser />
      <AudienceCta />
    </>
  );
}
