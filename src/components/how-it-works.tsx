import { Section, SectionTitle } from "@/components/ui/section";

// Os passos se dividem em duas fases: o que acontece com o cliente e o que
// a equipe produz no prazo de 48h. A linha vermelha marca esse prazo.
const STEPS = [
  {
    title: "Briefing",
    text: "Você envia pelo WhatsApp o produto, o público e o objetivo do vídeo.",
    phase: "Com você, pelo WhatsApp",
  },
  {
    title: "Roteiro",
    text: "Criamos um roteiro de vendas, com gancho forte nos 3 primeiros segundos, para você aprovar.",
  },
  {
    title: "Gravação",
    text: "O ator, avatar ou animação que você escolheu dá vida ao roteiro.",
    phase: "Até 48h úteis depois do roteiro aprovado",
  },
  {
    title: "Entrega",
    text: "Editamos com legendas e efeitos de retenção, e você recebe pronto para postar ou anunciar.",
  },
];

export function HowItWorks() {
  return (
    <Section id="como-funciona" tone="paper">
      <div className="grid gap-5 lg:grid-cols-[1.4fr_1fr] lg:items-end lg:gap-12">
        <SectionTitle className="max-w-[16ch]">
          Do briefing ao vídeo pronto
        </SectionTitle>
        <p className="max-w-[40ch] text-[1.0625rem] leading-relaxed text-graphite lg:justify-self-end">
          Tudo acontece pelo WhatsApp. Você aprova o roteiro antes de qualquer
          gravação.
        </p>
      </div>

      <ol className="mt-14 grid lg:mt-24 lg:grid-cols-4">
        {STEPS.map((step, index) => {
          const production = index >= 2;

          return (
            <li
              key={step.title}
              className={`relative border-l-2 pb-10 pl-5 last:pb-0 lg:border-l-0 lg:border-t-2 lg:pb-0 lg:pl-0 lg:pr-8 lg:pt-6 ${
                production ? "border-rec" : "border-ink/15"
              }`}
            >
              {step.phase && (
                <p className="mb-4 text-sm font-semibold lg:absolute lg:-top-9 lg:left-0 lg:mb-0">
                  {step.phase}
                </p>
              )}
              <span
                aria-hidden
                className="type-display block text-[2.25rem] text-graphite"
              >
                {index + 1}
              </span>
              <h3 className="mt-3 text-[1.375rem] font-semibold leading-tight">
                {step.title}
              </h3>
              <p className="mt-2 max-w-[34ch] leading-relaxed text-graphite">
                {step.text}
              </p>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
