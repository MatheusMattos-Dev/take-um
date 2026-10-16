"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Image from "next/image";
import {
  FilmSlate,
  Play,
  Plus,
  WarningCircle,
  X,
} from "@phosphor-icons/react";
import {
  PORTFOLIO,
  TIPO_LABEL,
  formatoMensagem,
  whatsappLink,
  type PortfolioVideo,
  type VideoTipo,
} from "@/config/site";
import { ButtonLink } from "@/components/ui/button";

type Item = PortfolioVideo & { id: number };

const ITEMS: Item[] = PORTFOLIO.map((video, id) => ({ ...video, id }));

const FORMATS: {
  tipo: VideoTipo;
  text: string;
  ideal: string;
  pedido: string;
}[] = [
  {
    tipo: "atores",
    text: "Pessoas reais do nosso elenco apresentam seu produto com naturalidade, olhando para a câmera.",
    ideal: "Ideal para confiança e prova social.",
    pedido: "Pedir vídeo com atores",
  },
  {
    tipo: "avatar",
    text: "Apresentador digital realista, com dublagem. Mais ágil e mais barato para testar vários ganchos.",
    ideal: "Ideal para escala de anúncios.",
    pedido: "Pedir vídeo com avatar",
  },
  {
    tipo: "3d",
    text: "Seu produto ou mascote ganha vida em estilo cinema de animação.",
    ideal: "Ideal para viralizar e se destacar.",
    pedido: "Pedir animação 3D",
  },
];

function exampleMessage(video: PortfolioVideo) {
  return `Olá! Quero ver um exemplo de vídeo: ${TIPO_LABEL[video.tipo]} (${video.subtitulo}).`;
}

// No celular cada formato vira uma faixa que desliza para o lado, como os
// Stories; a partir do desktop os vídeos quebram em linhas de quatro.
const strip =
  "scrollbar-none -mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-px-4 px-4 pb-1 sm:-mx-6 sm:scroll-px-6 sm:px-6 lg:mx-0 lg:grid lg:grid-cols-4 lg:gap-x-4 lg:gap-y-8 lg:overflow-visible lg:px-0 lg:pb-0";
const stripItem = "w-[42%] shrink-0 snap-start sm:w-[28%] lg:w-auto";

export function PortfolioGallery() {
  const [active, setActive] = useState<Item | null>(null);

  return (
    <>
      <div className="mt-12 space-y-12 lg:mt-20 lg:space-y-16">
        {FORMATS.map((format) => {
          const items = ITEMS.filter((item) => item.tipo === format.tipo);
          const headingId = `formato-${format.tipo}`;

          return (
            <section
              key={format.tipo}
              aria-labelledby={headingId}
              className="grid gap-6 border-t border-paper/15 pt-7 lg:grid-cols-[15rem_1fr] lg:gap-12 lg:pt-9 xl:grid-cols-[17rem_1fr]"
            >
              <div>
                <h3
                  id={headingId}
                  className="type-display text-[1.875rem] lg:text-[2rem]"
                >
                  {TIPO_LABEL[format.tipo]}
                </h3>
                <p className="mt-3 max-w-[38ch] leading-relaxed text-paper/70">
                  {format.text}
                </p>
                <p className="mt-3 font-semibold">{format.ideal}</p>
              </div>

              <ul className={strip}>
                {items.map((item) => (
                  <li key={item.id} className={stripItem}>
                    <VideoCard item={item} onOpen={() => setActive(item)} />
                  </li>
                ))}
                <li className={stripItem}>
                  <OpenSlot tipo={format.tipo} label={format.pedido} />
                </li>
              </ul>
            </section>
          );
        })}
      </div>

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
      className="group block w-full rounded-card text-left"
    >
      <span className="relative block aspect-9/16 overflow-hidden rounded-card bg-[#1c1c1c]">
        {item.capa ? (
          <Image
            src={item.capa}
            alt=""
            fill
            sizes="(min-width: 1024px) 20vw, 42vw"
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
        ) : null}

        {hasMedia ? (
          <span
            aria-hidden
            className="absolute bottom-2.5 right-2.5 grid size-10 place-items-center rounded-full bg-ink/55 text-paper backdrop-blur-sm transition-colors duration-200 group-hover:bg-paper group-hover:text-ink"
          >
            <Play weight="fill" className="size-4 translate-x-px" />
          </span>
        ) : (
          <span className="absolute inset-0 grid place-items-center text-sm font-semibold text-paper/60">
            Em breve
          </span>
        )}
      </span>

      <span className="mt-3 block font-semibold leading-snug">
        <span className="sr-only">
          {hasMedia ? "Assistir vídeo: " : "Vídeo em breve: "}
        </span>
        {item.titulo}
      </span>
      <span className="mt-1 block text-sm leading-snug text-paper/60">
        {item.subtitulo}
      </span>
    </button>
  );
}

// O último quadro de cada formato fica vazio: é o lugar do vídeo do cliente.
function OpenSlot({ tipo, label }: { tipo: VideoTipo; label: string }) {
  return (
    <a
      href={whatsappLink(formatoMensagem(tipo))}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-card"
    >
      <span className="flex aspect-9/16 flex-col items-center justify-center gap-3 rounded-card border-[1.5px] border-dashed border-paper/35 p-4 text-center transition-colors duration-200 group-hover:border-paper">
        <Plus aria-hidden weight="bold" className="size-7" />
        <span className="type-display text-[1.375rem] leading-[1.05]">
          Sua marca aqui
        </span>
      </span>
      <span className="mt-3 block font-semibold leading-snug underline decoration-paper/40 underline-offset-[0.2em] group-hover:decoration-paper">
        {label}
      </span>
      <span className="mt-1 block text-sm leading-snug text-paper/60">
        Abre o WhatsApp
      </span>
    </a>
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
                className="truncate text-lg font-semibold leading-tight"
              >
                {video.titulo}
              </p>
              <p className="mt-1 truncate text-sm text-paper/65">
                {TIPO_LABEL[video.tipo]}, {video.subtitulo}
              </p>
            </div>
            <button
              type="button"
              aria-label="Fechar vídeo"
              onClick={onClose}
              className="grid size-11 shrink-0 place-items-center rounded-full bg-paper/10 text-paper transition-colors duration-200 hover:bg-paper/20 active:scale-[0.96]"
            >
              <X weight="bold" className="size-5" />
            </button>
          </div>

          <div className="relative aspect-9/16 w-full overflow-hidden rounded-card bg-[#1c1c1c]">
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
        icon={<FilmSlate aria-hidden weight="bold" className="size-8" />}
        title="Este vídeo ainda não foi publicado"
        text="O exemplo deste perfil ainda não está aqui. Peça pelo WhatsApp e enviamos para você."
        video={video}
      />
    );
  }

  if (status === "error") {
    return (
      <VideoNotice
        icon={<WarningCircle aria-hidden weight="bold" className="size-8" />}
        title="O vídeo não carregou"
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
    <div aria-hidden className="absolute inset-0 overflow-hidden bg-[#1c1c1c]">
      <div className="absolute inset-x-5 bottom-8 space-y-3">
        <div className="h-5 w-2/3 rounded bg-paper/10" />
        <div className="h-4 w-1/2 rounded bg-paper/10" />
      </div>
      <div className="absolute inset-0 animate-shimmer bg-[linear-gradient(100deg,transparent_30%,rgb(255_255_255/0.08)_50%,transparent_70%)]" />
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
    <div className="absolute inset-0 flex flex-col items-start justify-end gap-4 p-6 sm:p-8">
      {icon}
      <p className="type-display text-[1.875rem]">{title}</p>
      <p className="leading-relaxed text-paper/70">{text}</p>
      <ButtonLink href={whatsappLink(exampleMessage(video))} size="md">
        Pedir este exemplo
      </ButtonLink>
    </div>
  );
}
