import { PortfolioGallery } from "@/components/portfolio-gallery";
import { Reveal } from "@/components/ui/reveal";
import { Section, SectionLabel, SectionTitle } from "@/components/ui/section";

export function Portfolio() {
  return (
    <Section id="portfolio" tone="dark" hud>
      <Reveal>
        <SectionLabel>Portfólio</SectionLabel>
        <SectionTitle>
          Veja a Take Um <span className="text-rec">em ação</span>
        </SectionTitle>
      </Reveal>

      <Reveal className="mt-10">
        <PortfolioGallery />
      </Reveal>
    </Section>
  );
}
