import { MENSAGENS, whatsappLink } from "@/config/site";
import { FaqList } from "@/components/faq-list";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { Section, SectionLabel, SectionTitle } from "@/components/ui/section";

export function FaqSection() {
  return (
    <Section id="duvidas" tone="light">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.5fr] lg:gap-16">
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <SectionLabel tone="light">Dúvidas</SectionLabel>
          <SectionTitle>Perguntas antes do primeiro take</SectionTitle>
          <p className="mt-6 max-w-[38ch] text-lg leading-relaxed text-ink/70">
            Não achou a sua? Mande no WhatsApp que a gente responde.
          </p>
          <ButtonLink
            href={whatsappLink(MENSAGENS.duvida)}
            variant="outline-light"
            size="md"
            className="mt-7"
          >
            Tirar uma dúvida
          </ButtonLink>
        </Reveal>

        <Reveal>
          <FaqList />
        </Reveal>
      </div>
    </Section>
  );
}
