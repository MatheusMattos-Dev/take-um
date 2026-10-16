import type { CSSProperties } from "react";
import { WhatsappLogo } from "@phosphor-icons/react/ssr";
import { HERO_VIDEO, MENOR_PRECO, whatsappLink } from "@/config/site";
import { HeroVideo } from "@/components/hero-video";
import { ButtonLink } from "@/components/ui/button";
import { container } from "@/components/ui/section";

const HEADLINE = "Vídeos que param o scroll e vendem";

const captionSize =
  "type-display text-center text-[clamp(2.6rem,11.6vw,4.5rem)] leading-[1.02] lg:text-[clamp(4.5rem,7.1vw,7.25rem)] lg:leading-[0.98]";

function CaptionWords() {
  return HEADLINE.split(" ").map((word, index) => (
    <span key={index}>
      {index > 0 && " "}
      <span
        className="caption-word"
        style={{ "--i": index } as CSSProperties}
      >
        {word}
      </span>
    </span>
  ));
}

// Celular: o topo é um Reel de tela cheia, com o título como legenda, a
// descrição e a barra de ação embaixo. Desktop: o vídeo fica no centro e o
// título atravessa o quadro (legenda dentro do vídeo, texto preto fora dele).
export function Hero() {
  return (
    <section
      id="topo"
      className="relative flex min-h-[max(34rem,calc(100svh-6.5rem))] flex-col justify-end overflow-hidden bg-ink lg:block lg:min-h-0 lg:overflow-visible lg:bg-paper lg:py-6"
    >
      <div
        className={`${container} hero-grid grid w-full pb-5 pt-24 lg:pb-0 lg:pt-0`}
      >
        <div className="absolute inset-0 lg:relative lg:z-10 lg:col-start-2 lg:row-span-3 lg:row-start-1 lg:overflow-hidden lg:rounded-frame lg:bg-ink">
          <HeroVideo src={HERO_VIDEO.arquivo} poster={HERO_VIDEO.capa} />
          <div
            aria-hidden
            className="absolute inset-0 bg-[linear-gradient(180deg,rgb(0_0_0/0.2)_0%,transparent_22%,transparent_38%,rgb(0_0_0/0.82)_100%)] lg:hidden"
          />
        </div>

        <h1
          className={`hero-title relative lg:z-0 lg:col-span-full lg:row-start-2 ${captionSize}`}
        >
          <CaptionWords />
        </h1>
        <p
          aria-hidden
          className={`caption-live pointer-events-none relative z-20 hidden select-none lg:col-span-full lg:row-start-2 lg:block ${captionSize}`}
        >
          <CaptionWords />
        </p>

        <p className="relative mt-6 max-w-[34ch] text-[1.0625rem] leading-normal text-paper/90 lg:col-start-1 lg:row-start-1 lg:mt-0 lg:max-w-[26ch] lg:self-start lg:pr-6 lg:text-[1.125rem] xl:pr-8 xl:text-[1.25rem] lg:leading-snug lg:text-ink">
          Anúncios e posts verticais com atores reais, avatar IA ou animação
          3D. Você manda a ideia; a gente entrega roteiro, gravação e edição
          prontos para publicar.
        </p>

        <div className="relative mt-5 flex flex-col gap-3 lg:col-start-3 lg:row-start-3 lg:mt-0 lg:items-start lg:self-end lg:pl-6 xl:pl-10">
          {/* entre 1024 e 1280px a coluna é estreita: botão no tamanho menor */}
          <ButtonLink
            href={whatsappLink()}
            data-hero-cta
            className="w-full lg:h-11 lg:w-auto lg:whitespace-nowrap lg:px-4 lg:text-[0.9375rem] xl:h-14 xl:px-6 xl:text-[1.0625rem]"
          >
            <WhatsappLogo aria-hidden weight="fill" className="size-6" />
            Pedir meu vídeo no WhatsApp
          </ButtonLink>
          <p className="text-[0.9375rem] leading-snug text-paper/75 lg:max-w-[30ch] lg:text-graphite">
            A partir de R$ {MENOR_PRECO} por vídeo, com entrega em até 48h.{" "}
            <a
              href="#planos"
              className="font-semibold text-paper underline decoration-1 underline-offset-[0.2em] lg:text-ink"
            >
              Ver os planos
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
