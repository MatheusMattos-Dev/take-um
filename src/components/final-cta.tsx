import Image from "next/image";
import { Check, WhatsappLogo } from "@phosphor-icons/react/ssr";
import { whatsappLink } from "@/config/site";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel, container } from "@/components/ui/section";

const ASSURANCES = ["Roteiro incluso", "Entrega em até 48h", "Ajustes inclusos"];

// Fechamento da página: chamada à esquerda e os quadros da marca à direita.
// O rodapé vem logo abaixo, no mesmo fundo, como uma continuação.
export function FinalCta() {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-paper">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(42%_62%_at_76%_48%,rgba(255,59,48,0.17),transparent_72%)]"
      />
      {/* Marca d'água: fica só atrás do texto e se dissolve para baixo, para
          não cortar seco na emenda com o rodapé nem aparecer atrás da imagem */}
      <p
        aria-hidden
        className="pointer-events-none absolute -left-[0.04em] bottom-0 -z-10 select-none whitespace-nowrap font-display text-[clamp(7rem,17vw,17rem)] font-black uppercase leading-[0.8] text-paper/4 mask-[linear-gradient(180deg,black_15%,transparent_92%)]"
      >
        Take 01
      </p>

      <div
        className={`${container} grid items-center gap-10 pb-14 pt-16 sm:pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pb-20 lg:pt-28`}
      >
        <Reveal>
          <SectionLabel>Luz, câmera…</SectionLabel>
          <h2 className="mt-6 text-balance font-display text-[clamp(2.75rem,7.2vw,5.75rem)] font-black uppercase leading-[0.88]">
            Pronto para colocar sua marca{" "}
            <span className="text-rec">em cena?</span>
          </h2>
          <p className="mt-6 max-w-[44ch] text-lg leading-relaxed text-paper/70">
            Chame no WhatsApp, conte sua ideia e receba o roteiro para aprovar
            antes de qualquer gravação.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={whatsappLink()}>
              <WhatsappLogo aria-hidden weight="fill" className="size-6" />
              Quero criar meu vídeo
            </ButtonLink>
            <ButtonLink href="#planos" variant="outline-dark">
              Ver pacotes
            </ButtonLink>
          </div>
          <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-2.5 text-paper/75">
            {ASSURANCES.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <Check aria-hidden weight="bold" className="size-4.5 text-rec" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Fora do Reveal de propósito: o modo de mesclagem, que faz o preto
            da imagem sumir no fundo, não funciona dentro de um elemento
            animado. */}
        <Image
          src="/quadros-take-um.webp"
          width={1040}
          height={724}
          alt="Dois apresentadores e um mascote da Take Um em quadros verticais."
          className="banner-fade h-auto w-full max-w-176 justify-self-center mix-blend-lighten lg:justify-self-end"
        />
      </div>
    </section>
  );
}
