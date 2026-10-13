import type { CSSProperties, ReactNode } from "react";
import {
  ArrowDown,
  ChatCircle,
  Heart,
  MusicNotes,
  PaperPlaneTilt,
  WhatsappLogo,
} from "@phosphor-icons/react/ssr";
import { HERO_VIDEOS, whatsappLink, type HeroVideoItem } from "@/config/site";
import { HeroVideo } from "@/components/hero-video";
import { ButtonLink } from "@/components/ui/button";
import { RecDot } from "@/components/ui/rec-dot";
import { SectionLabel, container } from "@/components/ui/section";

const STATS = [
  { value: "9:16", label: "Formato Reels e Stories" },
  { value: "48h", label: "Após o roteiro aprovado" },
  { value: "100%", label: "Entregue editado" },
];

const HOOK_CAPTION = [
  ["Esse", "gancho"],
  ["prende", "em"],
  ["3", "segundos"],
];

const captionClass =
  "absolute inset-x-[5cqw] bottom-[25%] text-center font-display text-[11.5cqw] font-black uppercase leading-[1.12] text-paper [text-shadow:0_0_3px_rgba(13,13,15,0.9),0_2px_12px_rgba(13,13,15,0.8)]";

export function Hero() {
  return (
    <section
      id="topo"
      className="relative isolate -mt-16 overflow-hidden bg-ink pt-16 lg:-mt-18 lg:pt-18"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(55%_60%_at_80%_42%,rgba(255,59,48,0.2),transparent_72%)]"
      />
      {/* Linhas verticais de fundo: passam por trás do header (o hero sobe
          a altura dele) e se dissolvem aos poucos até a faixa amarela */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(245,242,236,0.045)_1px,transparent_1px)] bg-center bg-size-[72px_100%] mask-[linear-gradient(180deg,black_0%,black_35%,transparent_92%)] lg:bg-size-[120px_100%]"
      />

      {/* No celular a ordem é texto, celulares, números; no desktop os
          celulares ocupam a coluna da direita inteira. */}
      <div
        className={`${container} grid gap-y-12 pb-16 pt-6 lg:min-h-[calc(100dvh-7.25rem)] lg:grid-cols-[1.15fr_0.85fr] lg:content-center lg:gap-x-10 lg:gap-y-10 lg:pb-14 lg:pt-10`}
      >
        <div className="lg:col-start-1 lg:row-start-1">
          <div className="animate-rise">
            <SectionLabel>Gravando agora</SectionLabel>
          </div>

          <h1 className="mt-4 animate-rise font-display text-[clamp(2.75rem,13.5vw,7rem)] font-black uppercase leading-[0.86] [animation-delay:80ms] lg:mt-6 lg:text-[clamp(4rem,min(8vw,13dvh),7rem)]">
            <span className="block">Vídeos que</span>{" "}
            <span className="block text-rec">param o scroll</span>{" "}
            <span className="block">e vendem</span>
          </h1>

          <p className="mt-5 max-w-[54ch] animate-rise leading-normal text-paper/70 [animation-delay:160ms] sm:text-lg sm:leading-relaxed lg:mt-7">
            Criativos verticais para anúncios e redes sociais com atores
            reais, avatares IA ou animação 3D. Você manda a ideia; a gente
            entrega roteiro, gravação e edição prontos para rodar.
          </p>

          <div className="mt-6 flex animate-rise flex-col gap-3 [animation-delay:240ms] sm:flex-row lg:mt-9">
            <ButtonLink href={whatsappLink()} data-hero-cta>
              <WhatsappLogo aria-hidden weight="fill" className="size-6" />
              Quero criar meu vídeo
            </ButtonLink>
            <ButtonLink href="#planos" variant="outline-dark">
              Ver pacotes e preços
              <ArrowDown aria-hidden weight="bold" className="size-5" />
            </ButtonLink>
          </div>
        </div>

        <div className="lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:self-center">
          <HeroPhones />
        </div>

        <dl className="grid max-w-xl animate-rise grid-cols-3 divide-x divide-ink-line border-t border-ink-line pt-6 [animation-delay:320ms] lg:col-start-1 lg:row-start-2">
          {STATS.map((stat) => (
            <div
              key={stat.value}
              className="flex flex-col-reverse gap-1.5 px-4 first:pl-0 last:pr-0"
            >
              <dt className="text-sm leading-snug text-paper/60">
                {stat.label}
              </dt>
              <dd className="font-display text-[clamp(2.25rem,9vw,3.25rem)] font-black leading-none">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function HeroPhones() {
  const [first, second] = HERO_VIDEOS;

  return (
    <div
      aria-hidden
      className="mx-auto flex w-full max-w-104 animate-rise items-start justify-center [animation-delay:200ms] lg:max-w-124 lg:justify-end"
    >
      <div className="w-[54%] -rotate-4">
        <Phone
          timecode="00:03"
          glow="rgba(255,59,48,0.6)"
          video={first}
          className="animate-float"
        >
          {(!first || first.legenda) && (
            <p className={captionClass}>
              {HOOK_CAPTION.map((line, lineIndex) => (
                <span key={lineIndex} className="block">
                  {line.map((word, wordIndex) => (
                    <span
                      key={word}
                      data-word={word}
                      data-key={word === "prende" ? "" : undefined}
                      className="caption-word"
                      style={
                        { "--i": lineIndex * 2 + wordIndex } as CSSProperties
                      }
                    >
                      {word}
                    </span>
                  ))}
                </span>
              ))}
            </p>
          )}
        </Phone>
      </div>

      <div className="ml-[-8%] mt-[20%] w-[54%] rotate-3">
        <Phone
          timecode="00:07"
          glow="rgba(255,176,32,0.5)"
          video={second}
          className="animate-float [animation-delay:-3.5s]"
        >
          {(!second || second.legenda) && (
            <p className={captionClass}>
              <span className="block py-[0.04em]">Seu produto</span>
              <span className="block">
                <span className="inline-block rounded-[0.2em] bg-flash px-[0.2em] py-[0.04em] text-ink text-shadow-none">
                  em cena
                </span>
              </span>
            </p>
          )}
        </Phone>
      </div>
    </div>
  );
}

// Corações que sobem do botão de curtir, como nas reações do Reels.
const FLOATING_HEARTS = [
  { drift: "-70%", delay: "0s" },
  { drift: "40%", delay: "0.9s" },
  { drift: "-20%", delay: "1.7s" },
];

function Phone({
  timecode,
  glow,
  video,
  className = "",
  children,
}: {
  timecode: string;
  glow: string;
  video?: HeroVideoItem;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={`rounded-[13%/7.5%] border border-paper/15 bg-ink-card p-[3%] shadow-[0_40px_70px_-30px_rgba(0,0,0,0.9),inset_0_1px_0_rgba(255,255,255,0.1)] ${className}`}
    >
      <div
        className="@container relative aspect-9/16 overflow-hidden rounded-[11%/6.2%] bg-ink"
        style={{
          backgroundImage: `radial-gradient(85% 55% at 50% 40%, ${glow}, transparent 72%), linear-gradient(180deg, #1b1114, #0d0d0f)`,
        }}
      >
        {video ? (
          <>
            <HeroVideo src={video.arquivo} poster={video.capa} />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,13,15,0.5)_0%,transparent_22%,transparent_50%,rgba(13,13,15,0.85)_100%)]" />
          </>
        ) : (
          // Sem vídeo: moldura de foco, como no visor da câmera
          <div className="absolute left-1/2 top-[40%] size-[46cqw] -translate-x-1/2 -translate-y-1/2">
            <span className="absolute left-0 top-0 size-[7cqw] border-l-2 border-t-2 border-paper/50" />
            <span className="absolute right-0 top-0 size-[7cqw] border-r-2 border-t-2 border-paper/50" />
            <span className="absolute bottom-0 left-0 size-[7cqw] border-b-2 border-l-2 border-paper/50" />
            <span className="absolute bottom-0 right-0 size-[7cqw] border-b-2 border-r-2 border-paper/50" />
          </div>
        )}

        <div className="absolute left-[5cqw] top-[5cqw] flex items-center gap-[2.5cqw] rounded-full border border-white/10 bg-ink/60 px-[4cqw] py-[2.2cqw] font-display text-[max(10px,5.6cqw)] font-bold leading-none tracking-widest text-paper shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-md">
          <RecDot className="size-[3.2cqw]" />
          REC {timecode}
        </div>

        {children}

        <div className="absolute bottom-[10%] right-[5cqw] flex flex-col items-center gap-[5.5cqw] text-paper">
          <span className="relative block size-[8.5cqw]">
            {FLOATING_HEARTS.map((heart) => (
              <Heart
                key={heart.delay}
                weight="fill"
                className="absolute inset-0 size-full animate-heart text-rec opacity-0"
                style={
                  {
                    "--drift": heart.drift,
                    animationDelay: heart.delay,
                  } as CSSProperties
                }
              />
            ))}
            <Heart
              weight="fill"
              className="relative size-full animate-like text-rec"
            />
          </span>
          <ChatCircle weight="fill" className="size-[8cqw]" />
          <PaperPlaneTilt weight="fill" className="size-[8cqw]" />
        </div>

        <div className="absolute bottom-[10%] left-[5cqw] right-[20cqw]">
          <p className="flex items-center gap-[2.2cqw] text-[max(10px,5cqw)] font-semibold leading-none text-paper">
            <span className="size-[7cqw] shrink-0 rounded-full border border-paper/70 bg-rec" />
            @suamarca
          </p>
          <p className="mt-[2.6cqw] flex items-center gap-[1.6cqw] text-[max(9px,4.2cqw)] leading-none text-paper/80">
            <MusicNotes weight="fill" className="size-[4.4cqw] shrink-0" />
            Áudio original
          </p>
        </div>

        <div className="absolute inset-x-[5cqw] bottom-[4.5%] h-[1.2cqw] overflow-hidden rounded-full bg-paper/25">
          <div
            className={`size-full origin-left animate-progress bg-rec ${
              video ? "[animation-duration:12s]" : ""
            }`}
          />
        </div>
      </div>
    </div>
  );
}
