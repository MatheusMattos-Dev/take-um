import { Check } from "@phosphor-icons/react/ssr";
import { Reveal } from "@/components/ui/reveal";
import { Section, SectionLabel, SectionTitle } from "@/components/ui/section";

const ITEMS = [
  {
    title: "Roteiro incluso",
    text: "Todo vídeo sai com roteiro de vendas escrito pela nossa equipe.",
  },
  {
    title: "Ganchos variados",
    text: "Aberturas diferentes para você testar qual prende mais.",
  },
  {
    title: "Legendas dinâmicas",
    text: "Texto na tela acompanhando a fala, no ritmo do vídeo.",
  },
  {
    title: "Entrega em até 48h",
    text: "Prazo em horas úteis, contado a partir do roteiro aprovado.",
  },
  {
    title: "Ajustes inclusos",
    text: "Você aprova o roteiro antes e pode pedir ajustes na edição.",
  },
  {
    title: "Sem enviar produto físico",
    text: "Fotos ou vídeos de referência do produto já resolvem.",
  },
];

export function Differentials() {
  return (
    <Section tone="dark">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <SectionLabel>Diferenciais</SectionLabel>
          <SectionTitle>
            Feito para <span className="text-rec">performar</span>, não só para
            ficar bonito
          </SectionTitle>
        </Reveal>

        <ul className="grid gap-x-10 border-b border-ink-line sm:grid-cols-2">
          {ITEMS.map((item, index) => (
            <Reveal
              as="li"
              key={item.title}
              delay={(index % 2) * 0.08}
              className="flex gap-4 border-t border-ink-line py-7"
            >
              <Check
                aria-hidden
                weight="bold"
                className="mt-0.5 size-6 shrink-0 text-rec"
              />
              <div>
                <h3 className="font-display text-[1.7rem] font-extrabold uppercase leading-none">
                  {item.title}
                </h3>
                <p className="mt-2 leading-relaxed text-paper/65">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  );
}
