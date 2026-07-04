import { useCallback, useEffect, useRef, useState } from "react";
import { Pause, Play, Volume2, VolumeX } from "lucide-react";

type TestimonialPlayerProps = {
  src: string;
  title?: string;
};

function videoVariants(mp4: string) {
  return {
    mp4,
    webm: mp4.replace(/\.mp4$/i, ".webm"),
    poster: mp4.replace(/\.mp4$/i, "-poster.webp"),
  };
}

function formatTime(sec: number) {
  if (!Number.isFinite(sec) || sec < 0) return "0:00";
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export function TestimonialPlayer({ src, title }: TestimonialPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);
  const [hover, setHover] = useState(false);
  const [dragging, setDragging] = useState(false);
  const { mp4, webm, poster } = videoVariants(src);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setReady(true);
        else if (!entry.isIntersecting && !el.paused) {
          el.pause();
          setPlaying(false);
        }
      },
      { rootMargin: "200px", threshold: 0.1 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const togglePlay = useCallback(async () => {
    const el = videoRef.current;
    if (!el) return;
    if (el.paused) {
      try {
        await el.play();
        setPlaying(true);
      } catch {
        /* autoplay policy */
      }
    } else {
      el.pause();
      setPlaying(false);
    }
  }, []);

  const seekFromEvent = useCallback((clientX: number) => {
    const el = videoRef.current;
    const bar = barRef.current;
    if (!el || !bar || !el.duration) return;
    const rect = bar.getBoundingClientRect();
    const ratio = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
    el.currentTime = ratio * el.duration;
    setProgress(ratio * 100);
    setCurrent(el.currentTime);
  }, []);

  useEffect(() => {
    if (!dragging) return;
    const onMove = (e: PointerEvent) => seekFromEvent(e.clientX);
    const onUp = () => setDragging(false);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, [dragging, seekFromEvent]);

  return (
    <div
      className="group/player relative aspect-[9/12] overflow-hidden bg-black"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <video
        ref={videoRef}
        poster={poster}
        playsInline
        preload={ready ? "metadata" : "none"}
        className="absolute inset-0 h-full w-full object-cover"
        onClick={togglePlay}
        onTimeUpdate={() => {
          const el = videoRef.current;
          if (!el || !el.duration) return;
          setCurrent(el.currentTime);
          setProgress((el.currentTime / el.duration) * 100);
        }}
        onLoadedMetadata={() => {
          const el = videoRef.current;
          if (el) setDuration(el.duration);
        }}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => {
          setPlaying(false);
          setProgress(0);
          setCurrent(0);
        }}
      >
        {ready && (
          <>
            <source src={webm} type="video/webm" />
            <source src={mp4} type="video/mp4" />
          </>
        )}
      </video>

      {/* Gradiente inferior para legibilidade dos controles */}
      <div
        className={`pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/90 via-black/45 to-transparent transition-opacity duration-300 ${
          playing && !hover ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* Play central grande */}
      {!playing && (
        <button
          type="button"
          onClick={togglePlay}
          aria-label={title ? `Reproduzir depoimento de ${title}` : "Reproduzir vídeo"}
          className="absolute left-1/2 top-1/2 z-10 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-white shadow-lg transition-transform hover:scale-105 active:scale-95"
          style={{
            background: "var(--gradient-brand)",
            boxShadow: "0 12px 40px -8px oklch(0.58 0.24 264 / 0.7)",
          }}
        >
          <Play className="h-7 w-7 fill-current translate-x-0.5" />
        </button>
      )}

      {/* Controles inferiores */}
      <div
        className={`absolute inset-x-0 bottom-0 z-10 px-3 pb-3 pt-8 transition-opacity duration-300 ${
          playing && !hover ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        {/* Barra de progresso */}
        <div
          ref={barRef}
          role="slider"
          aria-label="Progresso do vídeo"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(progress)}
          tabIndex={0}
          className="group/bar mb-2.5 h-1.5 cursor-pointer rounded-full bg-white/20"
          onPointerDown={(e) => {
            setDragging(true);
            seekFromEvent(e.clientX);
          }}
          onKeyDown={(e) => {
            const el = videoRef.current;
            if (!el || !el.duration) return;
            if (e.key === "ArrowRight") el.currentTime = Math.min(el.duration, el.currentTime + 5);
            if (e.key === "ArrowLeft") el.currentTime = Math.max(0, el.currentTime - 5);
          }}
        >
          <div
            className="relative h-full rounded-full transition-[width] duration-75"
            style={{
              width: `${progress}%`,
              background: "var(--gradient-brand)",
            }}
          >
            <span
              className="absolute right-0 top-1/2 h-3.5 w-3.5 -translate-y-1/2 translate-x-1/2 rounded-full bg-white opacity-0 shadow-md transition-opacity group-hover/bar:opacity-100 group-active/bar:opacity-100"
              style={{ boxShadow: "0 0 0 3px oklch(0.58 0.24 264 / 0.35)" }}
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={togglePlay}
            aria-label={playing ? "Pausar" : "Reproduzir"}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/20"
          >
            {playing ? (
              <Pause className="h-4 w-4 fill-current" />
            ) : (
              <Play className="h-4 w-4 fill-current translate-x-px" />
            )}
          </button>

          <button
            type="button"
            onClick={() => {
              const el = videoRef.current;
              if (!el) return;
              el.muted = !el.muted;
              setMuted(el.muted);
            }}
            aria-label={muted ? "Ativar som" : "Silenciar"}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/20"
          >
            {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
          </button>

          <span className="ml-1 text-[11px] font-medium tabular-nums text-white/80">
            {formatTime(current)}
            <span className="text-white/40"> / </span>
            {formatTime(duration)}
          </span>
        </div>
      </div>
    </div>
  );
}
