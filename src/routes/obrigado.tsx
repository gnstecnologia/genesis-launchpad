import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, MessageSquare } from "lucide-react";
import { useEffect, useState } from "react";
import { TestimonialPlayer } from "@/components/TestimonialPlayer";

/** Troque pelo vídeo definitivo da página de obrigado quando estiver pronto */
const OBRIGADO_VIDEO_SRC = "/videos/video-1-Andre.mp4";

const WHATSAPP_URL =
  "https://wa.me/5521996526969?text=Ol%C3%A1%21%20Acabei%20de%20preencher%20o%20diagn%C3%B3stico%20e%20n%C3%A3o%20quero%20perder%20tempo.%20Quero%20falar%20com%20um%20especialista.";

const CTA_DELAY_MS = 5000;

export const Route = createFileRoute("/obrigado")({
  component: ObrigadoPage,
});

function ObrigadoPage() {
  const [showCta, setShowCta] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setShowCta(true), CTA_DELAY_MS);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div
      className="min-h-screen text-foreground flex flex-col"
      style={{
        background: "var(--color-background)",
        backgroundImage:
          "radial-gradient(ellipse 80% 50% at 50% -10%, oklch(0.58 0.24 264 / 0.18), transparent), radial-gradient(ellipse 60% 40% at 90% 20%, oklch(0.58 0.24 264 / 0.10), transparent)",
      }}
    >
      <div
        className="text-center text-[9px] sm:text-[11px] font-medium py-1.5 px-3 text-white leading-tight"
        style={{ background: "var(--gradient-brand)" }}
      >
        Solução estratégica para empresas que faturam acima de <strong>R$ 50 mil</strong> por mês
      </div>

      <main className="flex-1 flex flex-col items-center px-5 py-10 sm:py-14 text-center">
        <div
          className="h-16 w-16 sm:h-20 sm:w-20 rounded-full grid place-items-center mb-5"
          style={{ background: "oklch(0.78 0.18 155 / 0.15)", border: "2px solid oklch(0.78 0.18 155 / 0.4)" }}
        >
          <CheckCircle2 className="h-8 w-8 sm:h-10 sm:w-10" style={{ color: "var(--color-success)" }} />
        </div>

        <h1 className="text-[1.6rem] sm:text-4xl font-bold leading-tight max-w-xl">
          Recebemos seu{" "}
          <span
            style={{
              background: "var(--gradient-brand)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            diagnóstico!
          </span>
        </h1>

        <p className="mt-3 text-[13px] sm:text-base text-muted-foreground max-w-md leading-relaxed">
          Antes de seguir, assista ao vídeo abaixo. Em seguida, você pode falar direto com um especialista da
          Genesis.
        </p>

        <div className="mt-8 w-full max-w-2xl">
          <div className="glass-strong rounded-2xl sm:rounded-3xl p-3 sm:p-4 overflow-hidden">
            <TestimonialPlayer src={OBRIGADO_VIDEO_SRC} title="Mensagem Genesis Company" />
          </div>
        </div>

        <div className="mt-8 min-h-[3.75rem] flex flex-col items-center justify-center gap-3 w-full max-w-md">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex w-full items-center justify-center gap-2.5 px-6 py-3.5 rounded-full font-bold text-[11px] sm:text-sm text-white tracking-[0.06em] uppercase transition-all duration-500 ${
              showCta
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 translate-y-3 pointer-events-none"
            }`}
            style={{
              background: "#25D366",
              boxShadow: showCta ? "0 12px 40px -12px #25D36699" : "none",
            }}
            aria-hidden={!showCta}
            tabIndex={showCta ? 0 : -1}
          >
            <MessageSquare className="h-4 w-4 shrink-0" />
            Não quero perder tempo — falar com especialista
          </a>

          {!showCta && (
            <p className="text-[11px] text-muted-foreground animate-pulse">
              O botão aparece em alguns segundos...
            </p>
          )}
        </div>

        <Link
          to="/"
          className="mt-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          Voltar ao site <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </main>

      <footer className="py-6 text-center text-[11px] text-muted-foreground border-t border-white/5">
        © {new Date().getFullYear()} Genesis Company · CNPJ 52.906.973/0001-98
      </footer>
    </div>
  );
}
