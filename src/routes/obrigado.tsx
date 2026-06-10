import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, ArrowRight, Calendar, MessageSquare, Rocket } from "lucide-react";

export const Route = createFileRoute("/obrigado")({
  component: ObrigadoPage,
});

function ObrigadoPage() {
  return (
    <div
      className="min-h-screen text-foreground flex flex-col"
      style={{
        background: "var(--color-background)",
        backgroundImage:
          "radial-gradient(ellipse 80% 50% at 50% -10%, oklch(0.58 0.24 264 / 0.18), transparent), radial-gradient(ellipse 60% 40% at 90% 20%, oklch(0.58 0.24 264 / 0.10), transparent)",
      }}
    >
      {/* Top bar */}
      <div
        className="text-center text-[9px] sm:text-[11px] font-medium py-1.5 px-3 text-white leading-tight"
        style={{ background: "var(--gradient-brand)" }}
      >
        Solução estratégica para empresas que faturam acima de <strong>R$ 50 mil</strong> por mês
      </div>

      {/* Main */}
      <main className="flex-1 flex flex-col items-center justify-center px-5 py-16 text-center">
        {/* Success icon */}
        <div
          className="h-20 w-20 rounded-full grid place-items-center mb-6"
          style={{ background: "oklch(0.78 0.18 155 / 0.15)", border: "2px solid oklch(0.78 0.18 155 / 0.4)" }}
        >
          <CheckCircle2 className="h-10 w-10" style={{ color: "var(--color-success)" }} />
        </div>

        {/* Heading */}
        <h1 className="text-[1.75rem] sm:text-4xl font-bold leading-tight max-w-lg">
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
        <p className="mt-3 text-[13px] sm:text-base text-muted-foreground max-w-sm leading-relaxed">
          Nossa equipe analisará as informações e entrará em contato em até{" "}
          <strong className="text-foreground">1 dia útil</strong> para agendar sua reunião estratégica.
        </p>

        {/* Next steps */}
        <div className="mt-10 w-full max-w-sm space-y-3 text-left">
          {[
            {
              icon: MessageSquare,
              step: "01",
              title: "Aguarde o contato",
              desc: "Nossa equipe vai te chamar no WhatsApp ou e-mail cadastrado.",
            },
            {
              icon: Calendar,
              step: "02",
              title: "Reunião estratégica",
              desc: "Vamos entender a fundo o momento do seu negócio e suas metas.",
            },
            {
              icon: Rocket,
              step: "03",
              title: "Proposta personalizada",
              desc: "Apresentamos uma estratégia sob medida para o seu crescimento.",
            },
          ].map((item) => (
            <div
              key={item.step}
              className="flex items-start gap-4 rounded-2xl p-4"
              style={{
                background: "linear-gradient(135deg, oklch(1 0 0 / 0.06) 0%, oklch(1 0 0 / 0.02) 100%)",
                border: "1px solid oklch(1 0 0 / 0.1)",
              }}
            >
              <div
                className="h-9 w-9 rounded-xl grid place-items-center font-bold text-xs shrink-0"
                style={{ background: "var(--gradient-brand)", color: "var(--color-background)" }}
              >
                {item.step}
              </div>
              <div>
                <div className="font-semibold text-sm">{item.title}</div>
                <div className="text-[12px] text-muted-foreground mt-0.5 leading-snug">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="mt-8 flex flex-col sm:flex-row gap-3 items-center">
          <a
            href="https://wa.me/5521996526969"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full font-semibold text-sm text-white transition-transform hover:-translate-y-0.5"
            style={{ background: "#25D366", boxShadow: "0 10px 40px -10px #25D36680" }}
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Falar agora no WhatsApp
          </a>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Voltar ao site <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 text-center text-[11px] text-muted-foreground border-t border-white/5">
        © {new Date().getFullYear()} Genesis Company · CNPJ 52.906.973/0001-98
      </footer>
    </div>
  );
}
