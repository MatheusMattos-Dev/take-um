import { Check, CreditCard, WhatsappLogo } from "@phosphor-icons/react/ssr";
import { CHECKOUT, whatsappLink } from "@/config/site";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { Section, SectionLabel, SectionTitle } from "@/components/ui/section";

const PLANS = [
  {
    id: "unico",
    name: "Take Único",
    quantity: "1 vídeo",
    price: 129,
    total: "R$ 129 no total",
    featured: false,
    features: [
      "Roteiro incluso",
      "Ator, avatar ou 3D à escolha",
      "Edição completa",
      "Entrega em 48h",
    ],
  },
  {
    id: "pro",
    name: "Take Pro",
    quantity: "5 vídeos",
    price: 109,
    total: "R$ 545 no total",
    featured: true,
    features: [
      "Roteiro em todos os vídeos",
      "Perfis diferentes no mesmo pacote",
      "Legendas dinâmicas",
      "Ganchos variados",
      "Prioridade na produção",
    ],
  },
  {
    id: "escala",
    name: "Take Escala",
    quantity: "10 vídeos",
    price: 97,
    total: "R$ 970 no total",
    featured: false,
    features: [
      "Tudo do Take Pro",
      "Variação de atores e roteiros",
      "Ideal para lançamentos",
      "Estratégia de ganchos para funil",
    ],
  },
] as const;

function planMessage(plan: (typeof PLANS)[number]) {
  return `Olá! Quero o pacote ${plan.name.toUpperCase()}: ${plan.quantity}, R$ ${plan.price} por vídeo (${plan.total}).`;
}

export function Pricing() {
  return (
    <Section id="planos" tone="light">
      <Reveal>
        <SectionLabel tone="light">Planos</SectionLabel>
        <SectionTitle className="max-w-[18ch]">
          Escolha o pacote ideal para sua empresa
        </SectionTitle>
      </Reveal>

      <ul className="mt-12 grid gap-7 lg:mt-14 lg:grid-cols-[1fr_1.14fr_1fr] lg:items-center lg:gap-5">
        {PLANS.map((plan, index) => (
          <Reveal as="li" key={plan.name} delay={index * 0.08}>
            <article
              className={`relative flex flex-col rounded-card transition-transform duration-300 ease-out-expo hover:-translate-y-1.5 ${
                plan.featured
                  ? "border-2 border-rec bg-ink-card p-8 text-paper shadow-[0_34px_60px_-34px_rgba(13,13,15,0.7)] lg:p-11"
                  : "bg-paper-dim p-7 text-ink lg:p-9"
              }`}
            >
              {plan.featured && (
                <p className="absolute -top-3.5 left-8 rounded-full bg-flash px-3.5 py-1.5 font-display text-[0.95rem] font-extrabold uppercase leading-none tracking-widest text-ink lg:left-11">
                  Mais vendido
                </p>
              )}

              <h3 className="font-display text-[2.25rem] font-black uppercase leading-none">
                {plan.name}
              </h3>
              <p className="mt-2 font-display text-lg font-bold uppercase leading-none tracking-[0.14em] opacity-60">
                {plan.quantity}
              </p>

              <p className="mt-7 flex items-end gap-2 lg:mt-9">
                <span className="pb-1.5 font-display text-2xl font-extrabold leading-none">
                  R$
                </span>
                <span
                  className={`font-display font-black leading-[0.78] ${
                    plan.featured ? "text-[7rem]" : "text-[6rem]"
                  }`}
                >
                  {plan.price}
                </span>
                <span className="pb-1 text-sm leading-tight opacity-65">
                  por
                  <br />
                  vídeo
                </span>
              </p>
              <p className="mt-4 text-sm font-medium opacity-65">{plan.total}</p>

              <ul
                className={`mt-6 space-y-3 border-t pt-6 lg:mt-8 lg:space-y-3.5 lg:pt-7 ${
                  plan.featured ? "border-ink-line" : "border-ink/15"
                }`}
              >
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-3 leading-snug">
                    <Check
                      aria-hidden
                      weight="bold"
                      className={`mt-0.5 size-5 shrink-0 ${
                        plan.featured ? "text-rec" : "text-ink"
                      }`}
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <ButtonLink
                href={CHECKOUT[plan.id] || whatsappLink(planMessage(plan))}
                variant={plan.featured ? "rec" : "ink"}
                className="mt-7 w-full lg:mt-9"
              >
                {/* cartão quando vai para o pagamento; WhatsApp se o plano
                    ficar sem link de checkout */}
                {CHECKOUT[plan.id] ? (
                  <CreditCard aria-hidden weight="fill" className="size-6" />
                ) : (
                  <WhatsappLogo aria-hidden weight="fill" className="size-6" />
                )}
                Quero o {plan.name}
              </ButtonLink>
            </article>
          </Reveal>
        ))}
      </ul>

      <Reveal>
        <p className="mt-10 max-w-[60ch] leading-relaxed text-ink/70">
          Todos os vídeos são entregues completos e editados, prontos para
          publicação.
        </p>
      </Reveal>
    </Section>
  );
}
