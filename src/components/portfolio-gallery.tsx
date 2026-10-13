"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowDown,
  ArrowUpRight,
  FilmSlate,
  Play,
  WarningCircle,
  X,
} from "@phosphor-icons/react";
import {
  MENSAGENS,
  PORTFOLIO,
  TIPO_LABEL,
  whatsappLink,
  type PortfolioVideo,
  type VideoTipo,
} from "@/config/site";
import { ButtonLink } from "@/components/ui/button";

type Filter = "todos" | VideoTipo;
type Item = PortfolioVideo & { id: number };

const FILTERS: { id: Filter; label: string }[] = [
  { id: "todos", label: "Todos" },
  { id: "atores", label: TIPO_LABEL.atores },
  { id: "avatar", label: TIPO_LABEL.avatar },
  { id: "3d", label: TIPO_LABEL["3d"] },
];

const ITEMS: Item[] = PORTFOLIO.map((video, id) => ({ ...video, id }));

const spring = { type: "spring", stiffness: 260, damping: 30 } as const;

// O bloco "mais perfis" ocupa as colunas que sobram na última linha:
// o índice é o resto da divisão dos cards visíveis pelas colunas da grade.
// No celular a grade abre com os primeiros vídeos e um botão "ver todos",
// para a página não ficar longa demais antes dos planos.
const MOBILE_LIMIT = 6;

const CTA_SPAN_MOBILE = ["col-span-2", "col-span-1"];
const CTA_SPAN_DESKTOP = [
  "lg:col-span-4",
  "lg:col-span-3",
  "lg:col-span-2",
  "lg:col-span-1",
];

function exampleMessage(video: PortfolioVideo) {
  return `Olá! Quero ver um exemplo de vídeo: ${TIPO_LABEL[video.tipo]} (${video.subtitulo}).`;
}

export function PortfolioGallery() {
  const [filter, setFilter] = useState<Filter>("todos");
  const [active, setActive] = useState<Item | null>(null);
  const [expanded, setExpanded] = useState(false);

  const visible =
    filter === "todos" ? ITEMS : ITEMS.filter((item) => item.tipo === filter);

  const collapsed = !expanded && visible.length > MOBILE_LIMIT;
  const mobileCount = collapsed ? MOBILE_LIMIT : visible.length;

  return (
    <>
      <div
        role="group"
        aria-label="Filtrar vídeos por formato"
        className="flex flex-wrap gap-2"
      >
        {FILTERS.map((option) => {
          const selected = option.id === filter;

          return (
            <button
              key={option.id}
              type="button"
              aria-pressed={selected}
              onClick={() => setFilter(option.id)}
              className={`relative h-11 rounded-full border px-5 font-display text-lg font-extrabold uppercase leading-none tracking-[0.04em] transition-colors duration-300 active:scale-[0.97] ${
                selected
                  ? "border-transparent text-ink"
                  : "border-ink-line text-paper/75 hover:border-paper/50 hover:text-paper"
              }`}
            >
              {selected && (
                <motion.span
                  layoutId="portfolio-filter"
                  transition={spring}
                  className="absolute inset-0 rounded-full bg-paper"
                />
              )}
              <span className="relative">{option.label}</span>
            </button>
          );
        })}
      </div>

      {visible.length === 0 ? (
        <div className="mt-8 flex flex-col items-start gap-4 rounded-card border border-dashed border-ink-line p-8 sm:p-12">
          <FilmSlate aria-hidden weight="bold" className="size-9 text-rec" />
          <p className="font-display text-3xl font-black uppercase leading-none">
            Ainda sem vídeos neste formato
          </p>
          <p className="max-w-[46ch] leading-relaxed text-paper/70">
            Os exemplos deste formato ainda não estão publicados aqui. Peça
            pelo WhatsApp e enviamos para você.
          </p>
          <ButtonLink
            href={whatsappLink(
              filter === "todos"
                ? "Olá! Quero ver exemplos de vídeos da Take Um."
                : `Olá! Quero ver exemplos de vídeos no formato ${TIPO_LABEL[filter]}.`,
            )}
            size="md"
          >
            Pedir exemplos
          </ButtonLink>
        </div>
      ) : (
        <ul className="relative mt-8 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          <AnimatePresence initial={false} mode="popLayout">
            {visible.map((item, index) => (
              <motion.li
                key={item.id}
                layout="position"
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={spring}
                className={
                  collapsed && index >= MOBILE_LIMIT ? "max-lg:hidden" : undefined
                }
              >
                <VideoCard item={item} onOpen={() => setActive(item)} />
              </motion.li>
            ))}
            {collapsed && (
              <motion.li
                key="ver-todos"
                layout="position"
                transition={spring}
                className="col-span-2 lg:hidden"
              >
                <button
                  type="button"
                  onClick={() => setExpanded(true)}
                  className="flex h-14 w-full items-center justify-center gap-2.5 rounded-full border border-paper/30 font-display text-xl font-extrabold uppercase leading-none tracking-[0.04em] text-paper transition-[transform,border-color] duration-300 ease-out-expo hover:border-paper active:scale-[0.98]"
                >
                  Ver todos os {visible.length} vídeos
                  <ArrowDown aria-hidden weight="bold" className="size-5" />
                </button>
              </motion.li>
            )}
            <motion.li
              key="mais-perfis"
              layout="position"
              transition={spring}
              className={`flex ${CTA_SPAN_MOBILE[mobileCount % 2]} ${CTA_SPAN_DESKTOP[visible.length % 4]}`}
            >
              <a
                href={whatsappLink(MENSAGENS.perfis)}
                target="_blank"
                rel="noopener noreferrer"
                className="group @container flex min-h-48 w-full flex-col justify-between gap-6 rounded-card bg-rec p-4 text-ink transition-transform duration-300 ease-out-expo hover:-translate-y-1.5 focus-visible:outline-paper active:scale-[0.98] sm:p-7"
              >
                <span className="grid size-11 place-items-center rounded-full bg-ink text-paper transition-transform duration-300 ease-out-expo group-hover:rotate-45 sm:size-14">
                  <ArrowUpRight
                    aria-hidden
                    weight="bold"
                    className="size-5 sm:size-6"
                  />
                </span>
                <span className="block">
                  <span className="block text-balance font-display text-[clamp(1.5rem,11.5cqw,6.5rem)] font-black uppercase leading-[0.9]">
                    Nosso elenco está sempre crescendo
                  </span>
                  <span className="mt-3 block font-display text-base font-extrabold uppercase leading-tight tracking-[0.04em] underline decoration-2 underline-offset-4 sm:mt-4 sm:text-xl">
                    Quero ver mais perfis
                  </span>
                </span>
              </a>
            </motion.li>
          </AnimatePresence>
        </ul>
      )}

      <VideoDialog video={active} onClose={() => setActive(null)} />
    </>
  );
}

function VideoCard({ item, onOpen }: { item: Item; onOpen: () => void }) {
  const hasMedia = Boolean(item.arquivo || item.youtubeId);

  return (
    <button
      type="button"
      onClick={onOpen}
      className="group @container relative block aspect-9/16 w-full overflow-hidden rounded-card border border-ink-line bg-ink-card text-left transition-[transform,border-color] duration-300 ease-out-expo hover:-translate-y-1.5 hover:border-rec/70 active:scale-[0.98]"
    >
      {item.capa ? (
        <Image
          src={item.capa}
          alt=""
          fill
          sizes="(min-width: 1024px) 25vw, 50vw"
          className="object-cover"
        />
      ) : item.arquivo ? (
        <video
          aria-hidden
          tabIndex={-1}
          muted
          playsInline
          preload="metadata"
          src={`${item.arquivo}#t=0.5`}
          className="pointer-events-none absolute inset-0 size-full object-cover"
        />
      ) : item.youtubeId ? (
        <YouTubeThumb id={item.youtubeId} />
      ) : (
        <span
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(90%_55%_at_50%_38%,rgba(255,59,48,0.16),transparent_70%),linear-gradient(180deg,#1d1d22,#0d0d0f)]"
        >
          <span className="absolute inset-x-0 top-[9%] text-center font-display text-[46cqw] font-black leading-none text-paper/4">
            {String(item.id + 1).padStart(2, "0")}
          </span>
        </span>
      )}

      <span
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,13,15,0.35)_0%,transparent_28%,transparent_52%,rgba(13,13,15,0.92)_100%)]"
      />

      <span className="absolute left-3 top-3 rounded-full border border-white/10 bg-ink/65 px-2.5 py-1.5 font-display text-[0.8rem] font-bold uppercase leading-none tracking-widest text-paper shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-md">
        {TIPO_LABEL[item.tipo]}
      </span>

      <span
        aria-hidden
        className="absolute left-1/2 top-[44%] grid size-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-rec text-ink transition-transform duration-300 ease-out-expo group-hover:scale-110 sm:size-16"
      >
        <Play weight="fill" className="size-6 translate-x-px sm:size-7" />
      </span>

      <span className="absolute inset-x-3 bottom-3 block sm:inset-x-4 sm:bottom-4">
        <span className="sr-only">
          {hasMedia ? "Assistir vídeo: " : "Vídeo em breve: "}
        </span>
        {!hasMedia && (
          <span
            aria-hidden
            className="mb-2 block font-display text-[0.8rem] font-bold uppercase leading-none tracking-widest text-flash"
          >
            Em breve
          </span>
        )}
        <span className="block font-display text-xl font-extrabold uppercase leading-none sm:text-2xl">
          {item.titulo}
        </span>
        <span className="mt-1.5 block text-[0.8rem] leading-snug text-paper/70 sm:text-sm">
          {item.subtitulo}
        </span>
      </span>
    </button>
  );
}

// Shorts têm capa vertical em oar2.jpg; quando ela não existe o YouTube
// responde com um cinza de 120px, então trocamos pela capa padrão.
function YouTubeThumb({ id }: { id: string }) {
  const swapIfMissing = (image: HTMLImageElement | null) => {
    const fallback = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
    if (image?.complete && image.naturalWidth <= 120 && image.src !== fallback) {
      image.src = fallback;
    }
  };

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      ref={swapIfMissing}
      src={`https://i.ytimg.com/vi/${id}/oar2.jpg`}
      alt=""
      loading="lazy"
      decoding="async"
      onLoad={(event) => swapIfMissing(event.currentTarget)}
      onError={(event) => swapIfMissing(event.currentTarget)}
      className="absolute inset-0 size-full object-cover"
    />
  );
}

function VideoDialog({
  video,
  onClose,
}: {
  video: Item | null;
  onClose: () => void;
}) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;

    if (video && !dialog.open) dialog.showModal();
    if (!video && dialog.open) dialog.close();
  }, [video]);

  return (
    <dialog
      ref={ref}
      aria-labelledby="video-dialog-title"
      onClose={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      className="video-dialog m-auto max-h-none max-w-none overflow-visible bg-transparent p-0 text-paper"
    >
      {video && (
        <div className="video-shell flex flex-col gap-3">
          <div className="flex items-center justify-between gap-4">
            <div className="min-w-0">
              <p
                id="video-dialog-title"
                className="truncate font-display text-2xl font-extrabold uppercase leading-none"
              >
                {video.titulo}
              </p>
              <p className="mt-1.5 truncate text-sm text-paper/65">
                {video.subtitulo}
              </p>
            </div>
            <button
              type="button"
              aria-label="Fechar vídeo"
              onClick={onClose}
              className="grid size-11 shrink-0 place-items-center rounded-full border border-paper/25 bg-ink-card text-paper transition-colors duration-300 hover:border-paper active:scale-[0.96]"
            >
              <X weight="bold" className="size-5" />
            </button>
          </div>

          <div className="relative aspect-9/16 w-full overflow-hidden rounded-card border border-ink-line bg-ink-card">
            <VideoMedia key={video.id} video={video} />
          </div>
        </div>
      )}
    </dialog>
  );
}

function VideoMedia({ video }: { video: Item }) {
  const [status, setStatus] = useState<"loading" | "ready" | "error">(
    "loading",
  );

  if (!video.arquivo && !video.youtubeId) {
    return (
      <VideoNotice
        icon={<FilmSlate aria-hidden weight="bold" className="size-9 text-rec" />}
        title="Este take ainda não foi ao ar"
        text="O exemplo deste perfil ainda não está publicado aqui. Peça pelo WhatsApp e enviamos para você."
        video={video}
      />
    );
  }

  if (status === "error") {
    return (
      <VideoNotice
        icon={
          <WarningCircle aria-hidden weight="bold" className="size-9 text-rec" />
        }
        title="Não deu para carregar o vídeo"
        text="Confira sua conexão e tente de novo, ou peça este exemplo pelo WhatsApp."
        video={video}
      />
    );
  }

  return (
    <>
      {status === "loading" && <VideoSkeleton />}

      {video.arquivo ? (
        <video
          src={video.arquivo}
          poster={video.capa}
          controls
          autoPlay
          playsInline
          onLoadedData={() => setStatus("ready")}
          onError={() => setStatus("error")}
          className="absolute inset-0 size-full bg-ink object-contain"
        />
      ) : (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&rel=0&playsinline=1`}
          title={`${video.titulo}: ${video.subtitulo}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          onLoad={() => setStatus("ready")}
          className="absolute inset-0 size-full"
        />
      )}
    </>
  );
}

function VideoSkeleton() {
  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden bg-ink-card">
      <div className="absolute inset-x-5 bottom-8 space-y-3">
        <div className="h-6 w-2/3 rounded-md bg-paper/10" />
        <div className="h-4 w-1/2 rounded-md bg-paper/10" />
        <div className="h-1.5 w-full rounded-full bg-paper/10" />
      </div>
      <div className="absolute left-1/2 top-[44%] size-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-paper/10" />
      <div className="absolute inset-0 animate-shimmer bg-[linear-gradient(100deg,transparent_30%,rgba(245,242,236,0.09)_50%,transparent_70%)]" />
    </div>
  );
}

function VideoNotice({
  icon,
  title,
  text,
  video,
}: {
  icon: ReactNode;
  title: string;
  text: string;
  video: PortfolioVideo;
}) {
  return (
    <div className="absolute inset-0 flex flex-col items-start justify-end gap-4 bg-[radial-gradient(90%_55%_at_50%_30%,rgba(255,59,48,0.18),transparent_70%)] p-6 sm:p-8">
      {icon}
      <p className="font-display text-4xl font-black uppercase leading-[0.95]">
        {title}
      </p>
      <p className="leading-relaxed text-paper/70">{text}</p>
      <ButtonLink href={whatsappLink(exampleMessage(video))} size="md">
        Pedir este exemplo
      </ButtonLink>
    </div>
  );
}
