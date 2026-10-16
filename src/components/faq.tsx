import { ChatCircle } from "@phosphor-icons/react/ssr";
import { MENSAGENS, whatsappLink } from "@/config/site";
import { FaqList } from "@/components/faq-list";
import { ButtonLink } from "@/components/ui/button";
import { SectionTitle, container } from "@/components/ui/section";

// Continua no mesmo fundo dos depoimentos, separado só por um fio.
export function FaqSection() {
  return (
    <section id="duvidas" className="bg-paper text-ink">
      <div className={`${container} pb-20 sm:pb-24 lg:pb-32`}>
        <div className="grid gap-10 border-t border-ink/10 pt-16 lg:grid-cols-[1fr_1.6fr] lg:gap-12 lg:pt-24">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <SectionTitle className="max-w-[12ch]">
              Perguntas antes do primeiro take
            </SectionTitle>
            <p className="mt-5 max-w-[34ch] text-[1.0625rem] leading-relaxed text-graphite">
              Não achou a sua? Mande no WhatsApp que a gente responde.
            </p>
            <ButtonLink
              href={whatsappLink(MENSAGENS.duvida)}
              variant="outline"
              size="md"
              className="mt-6"
            >
              <ChatCircle aria-hidden weight="bold" className="size-5" />
              Perguntar no WhatsApp
            </ButtonLink>
          </div>

          <FaqList />
        </div>
      </div>
    </section>
  );
}
