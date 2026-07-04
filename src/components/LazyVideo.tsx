import { useEffect, useRef, useState, type VideoHTMLAttributes } from "react";
import { releaseAutoplay, requestAutoplay } from "@/lib/video-autoplay-pool";

type LazyVideoProps = Omit<VideoHTMLAttributes<HTMLVideoElement>, "src"> & {
  /** Caminho do .mp4 — webm e poster são derivados automaticamente */
  src: string;
  lazy?: boolean;
  pauseOffscreen?: boolean;
  /** Ignora o limite global de autoplay (use no 1º vídeo do hero) */
  priority?: boolean;
};

function videoVariants(mp4: string) {
  const webm = mp4.replace(/\.mp4$/i, ".webm");
  const poster = mp4.replace(/\.mp4$/i, "-poster.webp");
  return { mp4, webm, poster };
}

export function LazyVideo({
  src,
  lazy = true,
  pauseOffscreen = true,
  priority = false,
  autoPlay,
  className,
  poster: posterProp,
  ...props
}: LazyVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);
  const [active, setActive] = useState(!lazy);
  const { mp4, webm, poster } = videoVariants(src);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const tryPlay = () => {
      if (!autoPlay) return;
      if (priority || requestAutoplay(el)) {
        el.play().catch(() => {});
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          // Garante que o browser peça o arquivo assim que entrar na tela
          queueMicrotask(() => {
            el.load();
            tryPlay();
          });
        } else if (pauseOffscreen) {
          el.pause();
          if (autoPlay && !priority) releaseAutoplay(el);
        }
      },
      { rootMargin: "200px", threshold: 0.05 },
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (autoPlay && !priority) releaseAutoplay(el);
    };
  }, [autoPlay, pauseOffscreen, priority, mp4, webm]);

  return (
    <video
      ref={ref}
      poster={posterProp ?? poster}
      className={className}
      playsInline
      preload={active ? "auto" : "none"}
      {...props}
      autoPlay={active && autoPlay}
      muted={autoPlay ? true : props.muted}
    >
      {active && (
        <>
          <source src={webm} type="video/webm" />
          <source src={mp4} type="video/mp4" />
        </>
      )}
    </video>
  );
}
