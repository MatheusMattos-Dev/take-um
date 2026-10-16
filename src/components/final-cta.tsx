import Image from "next/image";
import { Check, WhatsappLogo } from "@phosphor-icons/react/ssr";
import { whatsappLink } from "@/config/site";
import { ButtonLink } from "@/components/ui/button";
import { container } from "@/components/ui/section";

const ASSURANCES = ["Roteiro incluso", "Entrega em até 48h", "Ajustes inclusos"];

// Fechamento da página: chamada à esquerda e os quadros da marca à direita.
// O rodapé vem logo abaixo, no mesmo fundo, como uma continuação.
export function FinalCta() {
  return (
    <section className="bg-ink text-paper">
      <div
        className={`${container} grid items-center gap-10 pb-14 pt-20 sm:pt-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pb-20 lg:pt-32`}
      >
        <div>
          <h2 className="type-display max-w-[11ch] text-[clamp(2.75rem,6.4vw,5.5rem)]">
            Pronto para o primeiro take?
          </h2>
          <p className="mt-6 max-w-[42ch] text-[1.0625rem] leading-relaxed text-paper/70">
            Chame no WhatsApp, conte sua ideia e receba o roteiro para aprovar
            antes de qualquer gravação.
          </p>
          <ButtonLink href={whatsappLink()} className="mt-8 max-sm:w-full">
            <WhatsappLogo aria-hidden weight="fill" className="size-6" />
            Pedir meu vídeo no WhatsApp
          </ButtonLink>
          <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-2.5 text-paper/75">
            {ASSURANCES.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <Check aria-hidden weight="bold" className="size-4" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* O modo de mesclagem faz o preto da imagem sumir no fundo. */}
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
