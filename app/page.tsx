import { AboutTeaser } from "@/components/sections/AboutTeaser";
import { AudienceCta } from "@/components/sections/AudienceCta";
import { ConstellationHero } from "@/components/sections/ConstellationHero";
import { EntryPoints } from "@/components/sections/EntryPoints";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { WorkAreas } from "@/components/sections/WorkAreas";

// Prototipo de hero con constelación. El hero anterior (escena de producto)
// sigue en components/sections/Hero.tsx; para volver a él basta con usar <Hero />.
export default function HomePage() {
  return (
    <>
      <ConstellationHero />
      <EntryPoints />
      <SelectedWork />
      <WorkAreas />
      <AboutTeaser />
      <AudienceCta />
    </>
  );
}
