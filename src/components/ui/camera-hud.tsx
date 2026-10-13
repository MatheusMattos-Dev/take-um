import { VideoCamera } from "@phosphor-icons/react/ssr";
import { RecDot } from "@/components/ui/rec-dot";
import { Timecode } from "@/components/ui/timecode";

const corner = "absolute size-5 border-paper/40 sm:size-7";

const label =
  "absolute flex items-center gap-2 font-display text-[0.7rem] font-bold leading-none tracking-[0.18em] text-paper/55 sm:text-[0.8rem]";

// Visor de câmera nos quatro cantos da seção: cantoneiras, REC, timecode
// e dados de exposição. Decorativo, não recebe clique nem leitor de tela.
export function CameraHud() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-3 sm:inset-5 lg:inset-7"
    >
      <span className={`${corner} left-0 top-0 border-l-[1.5px] border-t-[1.5px]`} />
      <span className={`${corner} right-0 top-0 border-r-[1.5px] border-t-[1.5px]`} />
      <span className={`${corner} bottom-0 left-0 border-b-[1.5px] border-l-[1.5px]`} />
      <span className={`${corner} bottom-0 right-0 border-b-[1.5px] border-r-[1.5px]`} />

      <p className={`${label} left-3 top-3 sm:left-4 sm:top-4`}>
        <RecDot className="size-2" />
        REC
      </p>
      <p className={`${label} right-3 top-3 tabular-nums sm:right-4 sm:top-4`}>
        <Timecode />
      </p>
      <p className={`${label} bottom-3 left-3 sm:bottom-4 sm:left-4`}>
        ISO 400 · f/2.8 · 1/50
      </p>
      {/* afastada do canto para não ficar atrás do botão do WhatsApp */}
      <p className={`${label} bottom-3 right-18 sm:bottom-4 sm:right-20`}>
        <VideoCamera weight="bold" className="size-3.5 sm:size-4" />
        9:16 · 4K
      </p>
    </div>
  );
}
