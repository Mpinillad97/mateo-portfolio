import { AboutTeaser } from "@/components/sections/AboutTeaser";
import { ConstellationHero } from "@/components/sections/ConstellationHero";
import { ContactClosing } from "@/components/sections/ContactClosing";
import { EntryPoints } from "@/components/sections/EntryPoints";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { WorkAreas } from "@/components/sections/WorkAreas";

// El hero anterior (escena de producto) sigue en components/sections/Hero.tsx
// hasta su limpieza.
export default function HomePage() {
  return (
    <>
      <ConstellationHero />
      <EntryPoints />
      <SelectedWork />
      <WorkAreas />
      <AboutTeaser />
      <ContactClosing />
    </>
  );
}
