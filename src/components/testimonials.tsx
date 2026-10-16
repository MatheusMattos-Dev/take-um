import Image from "next/image";
import { DEPOIMENTOS, TIPO_LABEL, type Depoimento } from "@/config/site";
import { Section, SectionTitle } from "@/components/ui/section";

export function Testimonials() {
  const [featured, ...others] = DEPOIMENTOS;

  if (!featured) return null;

  return (
    <Section tone="paper">
      <SectionTitle>O que dizem os clientes</SectionTitle>

      <div className="mt-12 grid gap-12 lg:mt-16 lg:grid-cols-[1.35fr_1fr] lg:gap-20">
        <figure>
          <blockquote className="text-pretty text-[clamp(1.5rem,2.7vw,2.25rem)] font-medium leading-[1.28] tracking-[-0.01em]">
            <Quote item={featured} />
          </blockquote>
          <Caption item={featured} size="lg" />
        </figure>

        <ul className="grid content-start">
          {others.map((item) => (
            <li
              key={item.nome}
              className="border-t border-ink/10 py-8 first:border-t-0 first:pt-0 last:pb-0 lg:first:border-t lg:first:pt-8"
            >
              <figure>
                {item.formato && (
                  <p className="text-sm font-semibold text-graphite">
                    Escolheu {TIPO_LABEL[item.formato]}
                  </p>
                )}
                <blockquote className="mt-3 text-pretty text-[1.0625rem] leading-relaxed">
                  <Quote item={item} />
                </blockquote>
                <Caption item={item} size="md" />
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

// O trecho em `destaque` ganha o marcador amarelo das legendas.
function Quote({ item }: { item: Depoimento }) {
  const index = item.destaque ? item.texto.indexOf(item.destaque) : -1;

  if (!item.destaque || index === -1) return <>{item.texto}</>;

  return (
    <>
      {item.texto.slice(0, index)}
      <mark className="bg-caption box-decoration-clone px-[0.12em] text-ink">
        {item.destaque}
      </mark>
      {item.texto.slice(index + item.destaque.length)}
    </>
  );
}

function Caption({ item, size }: { item: Depoimento; size: "md" | "lg" }) {
  return (
    <figcaption
      className={`flex items-center ${size === "lg" ? "mt-9 gap-4" : "mt-5 gap-3"}`}
    >
      {item.foto && (
        <span
          className={`relative block shrink-0 overflow-hidden rounded-full bg-mist ${
            size === "lg" ? "size-14" : "size-11"
          }`}
        >
          <Image
            src={item.foto}
            alt={`Foto de ${item.nome}`}
            fill
            sizes="112px"
            className="scale-[3.4] object-cover"
            style={{ objectPosition: item.foco, transformOrigin: item.foco }}
          />
        </span>
      )}
      <span className="block">
        <span
          className={`block font-semibold leading-tight ${size === "lg" ? "text-lg" : ""}`}
        >
          {item.nome}
        </span>
        <span className="mt-0.5 block text-sm text-graphite">
          {item.origem}
        </span>
      </span>
    </figcaption>
  );
}
