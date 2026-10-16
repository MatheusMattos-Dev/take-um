import { Check, CreditCard, WhatsappLogo } from "@phosphor-icons/react/ssr";
import { CHECKOUT, PLANOS, whatsappLink, type Plano } from "@/config/site";
import { ButtonLink } from "@/components/ui/button";
import { Section, SectionTitle } from "@/components/ui/section";

const quantity = (plan: Plano) =>
  plan.videos === 1 ? "1 vídeo" : `${plan.videos} vídeos`;

const total = (plan: Plano) =>
  (plan.price * plan.videos).toLocaleString("pt-BR");

function planMessage(plan: Plano) {
  return `Olá! Quero o pacote ${plan.name.toUpperCase()}: ${quantity(plan)}, R$ ${plan.price} por vídeo (R$ ${total(plan)} no total).`;
}

export function Pricing() {
  return (
    <Section id="planos" tone="mist">
      <div className="grid gap-5 lg:grid-cols-[1.4fr_1fr] lg:items-end lg:gap-12">
        <SectionTitle className="max-w-[19ch]">
          Quanto mais vídeos, menor o preço de cada um
        </SectionTitle>
        <p className="max-w-[40ch] text-[1.0625rem] leading-relaxed text-graphite lg:justify-self-end">
          Todos os vídeos são entregues completos e editados, prontos para
          publicar.
        </p>
      </div>

      <ul className="mt-12 grid gap-4 lg:mt-16 lg:grid-cols-3">
        {PLANOS.map((plan) => (
          <li key={plan.id}>
            <article
              className={`flex h-full flex-col rounded-card p-7 lg:p-9 ${
                plan.featured ? "bg-ink text-paper" : "bg-paper text-ink"
              }`}
            >
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="type-display text-[1.875rem]">{plan.name}</h3>
                {plan.featured && (
                  <p className="text-sm font-semibold text-paper/70">
                    Mais vendido
                  </p>
                )}
              </div>

              {/* um quadrinho 9:16 para cada vídeo do pacote */}
              <div className="mt-5 flex items-center gap-3">
                <span aria-hidden className="flex gap-[3px]">
                  {Array.from({ length: plan.videos }, (_, index) => (
                    <span
                      key={index}
                      className="h-4 w-[9px] rounded-[2px] bg-current"
                    />
                  ))}
                </span>
                <span className="text-sm font-semibold">{quantity(plan)}</span>
              </div>

              <p className="mt-9 flex items-end gap-2">
                <span className="pb-2 text-xl font-semibold leading-none">
                  R$
                </span>
                <span className="type-display text-[5.25rem] leading-[0.78]">
                  {plan.price}
                </span>
                <span className="pb-0.5 text-sm leading-tight opacity-70">
                  por
                  <br />
                  vídeo
                </span>
              </p>
              <p className="mt-4 text-sm opacity-70">
                R$ {total(plan)} no total
              </p>

              <ul
                className={`mt-7 space-y-3 border-t pt-6 ${
                  plan.featured ? "border-paper/15" : "border-ink/10"
                }`}
              >
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-3 leading-snug">
                    <Check
                      aria-hidden
                      weight="bold"
                      className="mt-0.5 size-[1.125rem] shrink-0"
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-8">
                {/* com link de checkout o botão vai direto para o pagamento;
                    sem link, abre o WhatsApp com o pacote já escrito */}
                {CHECKOUT[plan.id] ? (
                  <ButtonLink
                    href={CHECKOUT[plan.id]}
                    variant={plan.featured ? "rec" : "ink"}
                    className="w-full"
                  >
                    <CreditCard aria-hidden weight="fill" className="size-6" />
                    Comprar o {plan.name}
                  </ButtonLink>
                ) : (
                  <ButtonLink
                    href={whatsappLink(planMessage(plan))}
                    variant={plan.featured ? "rec" : "ink"}
                    className="w-full"
                  >
                    <WhatsappLogo aria-hidden weight="fill" className="size-6" />
                    Pedir o {plan.name}
                  </ButtonLink>
                )}
              </div>
            </article>
          </li>
        ))}
      </ul>
    </Section>
  );
}
