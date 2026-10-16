import { Check } from "@phosphor-icons/react/ssr";
import { SectionTitle, container } from "@/components/ui/section";

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

// Continua no mesmo fundo de "Como funciona", separado só por um fio.
export function Differentials() {
  return (
    <section className="bg-paper text-ink">
      <div className={`${container} pb-20 sm:pb-24 lg:pb-32`}>
        <div className="grid gap-10 border-t border-ink/10 pt-16 lg:grid-cols-[1.15fr_1.5fr] lg:gap-16 lg:pt-24">
          <SectionTitle className="max-w-[15ch]">
            Feito para vender, não só para ficar bonito
          </SectionTitle>

          <ul className="grid gap-x-10 sm:grid-cols-2">
            {ITEMS.map((item) => (
              <li
                key={item.title}
                className="flex gap-3.5 border-t border-ink/10 py-6 first:border-t-0 first:pt-0 sm:[&:nth-child(2)]:border-t-0 sm:[&:nth-child(2)]:pt-0"
              >
                <Check
                  aria-hidden
                  weight="bold"
                  className="mt-0.5 size-5 shrink-0"
                />
                <div>
                  <h3 className="text-[1.1875rem] font-semibold leading-tight">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 leading-relaxed text-graphite">
                    {item.text}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
