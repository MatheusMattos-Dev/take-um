import Image from "next/image";
import { Star } from "@phosphor-icons/react/ssr";
import { DEPOIMENTOS, TIPO_LABEL, type Depoimento } from "@/config/site";
import { Reveal } from "@/components/ui/reveal";
import { Section, SectionLabel, SectionTitle } from "@/components/ui/section";

export function Testimonials() {
  const [featured, ...others] = DEPOIMENTOS;

  if (!featured) return null;

  return (
    <Section tone="dark">
      <Reveal>
        <SectionLabel>Depoimentos</SectionLabel>
        <SectionTitle>O que dizem os clientes</SectionTitle>
      </Reveal>

      <div className="mt-12 grid gap-5 lg:grid-cols-[1.2fr_1fr]">
        <Reveal>
          <figure className="relative flex h-full flex-col overflow-hidden rounded-card bg-paper p-7 text-ink transition-transform duration-300 ease-out-expo hover:-translate-y-1.5 sm:p-9 lg:p-12">
            <div className="flex items-start justify-between gap-4">
              <span
                aria-hidden
                className="font-display text-[8rem] font-black leading-[0.72] text-rec lg:text-[10rem]"
              >
                “
              </span>
              <Stars className="rounded-full bg-ink px-3.5 py-2.5" />
            </div>

            <blockquote className="-mt-6 text-pretty text-[1.4rem] font-medium leading-snug sm:text-[1.7rem] lg:-mt-10 lg:text-[2.3rem] lg:leading-[1.24]">
              <Quote item={featured} tone="light" />
            </blockquote>

            <figcaption className="mt-auto flex items-center gap-4 pt-10">
              <Avatar item={featured} className="size-16 border-ink/15" />
              <span className="block">
                <span className="block font-display text-[1.7rem] font-black uppercase leading-none">
                  {featured.nome}
                </span>
                <span className="mt-1.5 block text-sm font-medium text-ink/65">
                  {featured.origem}
                </span>
              </span>
            </figcaption>
          </figure>
        </Reveal>

        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
          {others.map((item, index) => (
            <Reveal as="li" key={item.nome} delay={(index + 1) * 0.08}>
              <figure className="flex h-full flex-col rounded-card border border-ink-line bg-ink-card p-7 transition-transform duration-300 ease-out-expo hover:-translate-y-1.5 lg:p-8">
                <div className="flex items-center justify-between gap-4">
                  <Stars />
                  {item.formato && (
                    <span className="rounded-full border border-ink-line px-3 py-1.5 font-display text-[0.8rem] font-bold uppercase leading-none tracking-widest text-paper/70">
                      {TIPO_LABEL[item.formato]}
                    </span>
                  )}
                </div>

                <blockquote className="mt-5 text-pretty text-lg leading-relaxed text-paper/80">
                  <Quote item={item} tone="dark" />
                </blockquote>

                <figcaption className="mt-auto flex items-center gap-3.5 pt-7">
                  <Avatar item={item} className="size-12 border-paper/20" />
                  <span className="block">
                    <span className="block font-display text-[1.35rem] font-extrabold uppercase leading-none">
                      {item.nome}
                    </span>
                    <span className="mt-1 block text-sm text-paper/60">
                      {item.origem}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  );
}

// O trecho em `destaque` ganha o marcador amarelo das legendas (no card
// claro) ou a cor amarela (nos cards escuros).
function Quote({ item, tone }: { item: Depoimento; tone: "light" | "dark" }) {
  const index = item.destaque ? item.texto.indexOf(item.destaque) : -1;

  if (!item.destaque || index === -1) return <>{item.texto}</>;

  return (
    <>
      {item.texto.slice(0, index)}
      <mark
        className={
          tone === "light"
            ? "rounded-[0.2em] bg-flash box-decoration-clone px-[0.18em] text-ink"
            : "bg-transparent font-semibold text-flash"
        }
      >
        {item.destaque}
      </mark>
      {item.texto.slice(index + item.destaque.length)}
    </>
  );
}

function Stars({ className = "" }: { className?: string }) {
  return (
    <div
      role="img"
      aria-label="5 de 5 estrelas"
      className={`flex shrink-0 gap-1 text-flash ${className}`}
    >
      {[0, 1, 2, 3, 4].map((star) => (
        <Star key={star} aria-hidden weight="fill" className="size-4.5" />
      ))}
    </div>
  );
}

function Avatar({ item, className }: { item: Depoimento; className: string }) {
  if (!item.foto) return null;

  return (
    <span
      className={`relative block shrink-0 overflow-hidden rounded-full border bg-ink ${className}`}
    >
      <Image
        src={item.foto}
        alt={`Foto de ${item.nome}`}
        fill
        sizes="256px"
        className="scale-[3.4] object-cover"
        style={{ objectPosition: item.foco, transformOrigin: item.foco }}
      />
    </span>
  );
}
