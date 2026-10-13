import { Reveal } from "@/components/ui/reveal";
import { Section, SectionLabel, SectionTitle } from "@/components/ui/section";

const STEPS = [
  {
    title: "Briefing",
    text: "Você envia pelo WhatsApp o produto, o público e o objetivo do vídeo.",
  },
  {
    title: "Roteiro",
    text: "Criamos um roteiro de vendas, com gancho forte nos 3 primeiros segundos, para sua aprovação.",
  },
  {
    title: "Gravação",
    text: "O ator, avatar ou animação que você escolheu dá vida ao roteiro.",
  },
  {
    title: "Entrega",
    text: "Editamos com legendas e efeitos de retenção, e você recebe pronto para postar ou anunciar.",
  },
];

export function HowItWorks() {
  return (
    <Section id="como-funciona" tone="dim" dots>
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.5fr] lg:gap-16">
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <SectionLabel tone="light">Como funciona</SectionLabel>
          <SectionTitle>Do briefing ao vídeo pronto em 4 passos</SectionTitle>
          <p className="mt-6 max-w-[36ch] text-xl font-medium leading-relaxed text-ink/90">
            Tudo acontece pelo WhatsApp. Você aprova o roteiro antes de
            qualquer gravação.
          </p>
        </Reveal>

        <ol className="grid gap-4 sm:grid-cols-2 sm:gap-5 sm:pb-10">
          {STEPS.map((step, index) => (
            <Reveal
              as="li"
              key={step.title}
              delay={index * 0.08}
              className="sm:even:translate-y-10"
            >
              {/* celular: número à esquerda e texto ao lado; a partir do
                  tablet o número fica em cima, grande */}
              <div className="flex h-full gap-5 rounded-card bg-paper p-6 transition-transform duration-300 ease-out-expo hover:-translate-y-1.5 sm:block sm:p-7 lg:p-9">
                <span
                  aria-hidden
                  className="block w-[4.25rem] shrink-0 font-display text-[4rem] font-black leading-[0.8] text-rec sm:w-auto sm:text-[5.5rem]"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-[1.75rem] font-black uppercase leading-none sm:mt-7 sm:text-[2rem]">
                    {step.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-ink/70 sm:mt-3">
                    {step.text}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  );
}
