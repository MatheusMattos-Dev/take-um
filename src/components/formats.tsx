import { Cube, HeadCircuit, UsersThree } from "@phosphor-icons/react/ssr";
import { Reveal } from "@/components/ui/reveal";
import { Section, SectionLabel, SectionTitle } from "@/components/ui/section";

const FORMATS = [
  {
    icon: UsersThree,
    code: "A",
    title: "Atores reais",
    text: "Pessoas reais do nosso elenco apresentam seu produto com naturalidade, olhando para a câmera.",
    tag: "Ideal para confiança e prova social",
    offset: "",
  },
  {
    icon: HeadCircuit,
    code: "B",
    title: "Avatar IA",
    text: "Apresentador digital realista, com dublagem. Mais ágil e mais barato para testar vários ganchos.",
    tag: "Ideal para escala de anúncios",
    offset: "md:mt-10",
  },
  {
    icon: Cube,
    code: "C",
    title: "Animação 3D",
    text: "Seu produto ou mascote ganha vida em estilo cinema de animação.",
    tag: "Ideal para viralizar e se destacar",
    offset: "md:mt-20",
  },
];

export function Formats() {
  return (
    <Section id="formatos" tone="light">
      <Reveal className="grid gap-6 lg:grid-cols-[1.5fr_1fr] lg:items-end">
        <div>
          <SectionLabel tone="light">Formatos</SectionLabel>
          <SectionTitle>Escolha o rosto da sua marca</SectionTitle>
        </div>
        <p className="max-w-[42ch] text-lg leading-relaxed text-ink/70 lg:justify-self-end">
          Três jeitos de aparecer na tela. O roteiro de vendas e a edição
          acompanham todos eles.
        </p>
      </Reveal>

      <ul className="mt-10 grid gap-4 md:mt-12 md:grid-cols-3 md:items-start md:gap-5 lg:mt-16">
        {FORMATS.map((format, index) => (
          <Reveal
            as="li"
            key={format.title}
            delay={index * 0.08}
            className={format.offset}
          >
            <article className="flex h-full flex-col rounded-card bg-ink p-6 text-paper transition-transform duration-300 ease-out-expo hover:-translate-y-1.5 md:p-7 lg:p-9">
              <div className="flex items-start justify-between">
                <span className="grid size-12 place-items-center rounded-xl bg-rec text-ink md:size-14">
                  <format.icon aria-hidden weight="bold" className="size-7" />
                </span>
                <span
                  aria-hidden
                  className="font-display text-sm font-bold tracking-[0.18em] text-paper/40"
                >
                  [{format.code}]
                </span>
              </div>
              <h3 className="mt-6 font-display text-[2.25rem] font-black uppercase leading-none md:mt-10 md:text-[2.5rem]">
                {format.title}
              </h3>
              <p className="mt-3 leading-relaxed text-paper/70 md:mt-4">{format.text}</p>
              <p className="mt-6 border-t border-ink-line pt-4 font-semibold leading-snug text-flash md:mt-8 md:pt-5">
                {format.tag}
              </p>
            </article>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
