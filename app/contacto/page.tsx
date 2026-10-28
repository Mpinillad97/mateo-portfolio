import type { Metadata } from "next";
import { ContactOptionCard } from "@/components/sections/ContactOptionCard";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { contactOptions, contactPage } from "@/data/contact";

export const metadata: Metadata = {
  title: "Contacto",
};

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow={contactPage.eyebrow} title={contactPage.title} intro={contactPage.intro} />
      <div className="pb-16 sm:pb-24">
        <Container className="grid gap-6 md:grid-cols-2">
          {contactOptions.map((option) => (
            <ContactOptionCard key={option.id} option={option} />
          ))}
        </Container>
      </div>
    </>
  );
}
