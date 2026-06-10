import { createFileRoute, useNavigate } from "@tanstack/react-router";
import clublissLogo from "@/assets/clubliss.png.asset.json";
import { useState, type FormEvent } from "react";
import {
  ArrowRight,
  Sparkles,
  TrendingUp,
  Target,
  Users,
  Video,
  Bot,
  Megaphone,
  BarChart3,
  Calendar,
  Zap,
  Shield,
  CheckCircle2,
  XCircle,
  Rocket,
  Brain,
  Cpu,
  Palette,
  LineChart,
  MessageSquare,
  Lock,
  PhoneCall,
  Heart,
  ChevronDown,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Genesis Company — Marketing, vendas e tecnologia em um só lugar" },
      {
        name: "description",
        content:
          "Transforme sua empresa em uma máquina de gerar oportunidades, vendas e posicionamento. Estratégia, tráfego, audiovisual, IA e CRM conectados.",
      },
      { property: "og:title", content: "Genesis Company — Marketing que vira crescimento" },
      {
        property: "og:description",
        content:
          "O departamento completo de marketing, audiovisual, tecnologia, IA e vendas para empresas que querem crescer com previsibilidade.",
      },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  return (
    <div className="min-h-screen text-foreground overflow-x-hidden">
      <TopBar />
      <Hero />
      <LogosStrip />
      <PainSection />
      <PositioningSection />
      <VideoShowcaseSection />
      <ServicesSection />
      <BeforeAfterSection />
      <ForWhoSection />
      <ProcessSection />
      <FinalCTA />
      <AboutSection />
      <FAQSection />
      <WhatsAppCTASection />
      <Footer />
    </div>
  );
}

/* ---------------- TOP BAR ---------------- */
function TopBar() {
  return (
    <div
      className="fixed top-0 inset-x-0 z-[60] text-center text-[9px] sm:text-[11px] font-medium py-1.5 px-3 text-white leading-tight whitespace-nowrap"
      style={{ background: "var(--gradient-brand)" }}
    >
      Solução estratégica para empresas que faturam acima de <strong>R$ 50 mil</strong> por mês
    </div>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section id="top" className="relative pt-9 pb-10 md:pt-32 md:pb-20">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full opacity-60 blur-3xl"
           style={{ background: "radial-gradient(closest-side, oklch(0.7 0.22 295 / 0.45), transparent)" }} />
      <div className="pointer-events-none absolute top-40 right-0 h-[400px] w-[500px] rounded-full opacity-40 blur-3xl"
           style={{ background: "radial-gradient(closest-side, oklch(0.78 0.18 60 / 0.4), transparent)" }} />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-5">
        {/* MOBILE-FIRST: Visual references first */}
        <div className="animate-fade-up">
          <ReferenceCards />
        </div>

        {/* Headline */}
        <div className="mt-3 sm:mt-10 text-center animate-fade-up max-w-3xl mx-auto">
          <h1 className="text-[1.45rem] leading-[1.12] sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Transforme sua empresa em uma{" "}
            <span className="gradient-text">máquina</span> de gerar{" "}
            <span className="gradient-text">oportunidades</span>,{" "}
            <span className="gradient-text">vendas</span> e{" "}
            <span className="gradient-text">posicionamento</span>.
          </h1>
          <p className="mt-2 sm:mt-5 text-[11.5px] sm:text-lg text-muted-foreground max-w-xl mx-auto leading-snug sm:whitespace-normal">
            <span className="sm:hidden">A Genesis atua como o departamento de marketing da sua empresa, conectando estratégia, tráfego pago, audiovisual, gestão de marca, tecnologia e vendas para acelerar o crescimento do seu negócio.</span>
            <span className="hidden sm:inline">A Genesis atua como o departamento de marketing da sua empresa, conectando estratégia, tráfego pago, audiovisual, marca, tecnologia e vendas para fazer sua empresa faturar mais.</span>
          </p>
        </div>

        {/* Social proof — inline, before form */}
        <div className="mt-4 animate-fade-up">
          <InlineLogos />
        </div>



        {/* Two-column layout: form first on mobile, dashboard on desktop */}
        <div className="mt-8 grid lg:grid-cols-[1fr_1.05fr] gap-10 items-start">
          <div id="diagnostico" className="order-1 lg:order-2">
            <LeadForm />
          </div>
          <div className="order-2 lg:order-1 hidden lg:block">
            <DashboardComposition />
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { v: "+10M", l: "investidos em mídia" },
                { v: "+120", l: "marcas atendidas" },
                { v: "7", l: "anos de mercado" },
              ].map((s) => (
                <div key={s.l} className="glass rounded-2xl p-4">
                  <div className="text-2xl font-bold gradient-text">{s.v}</div>
                  <div className="text-xs text-muted-foreground mt-1 leading-snug">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- REFERENCE CARDS (auto-scrolling video-style marquee) ---------------- */
function ReferenceCards() {
  const cards: Array<{
    tag: string;
    title: string;
    metric: string;
    value: string;
    icon: typeof Target;
    hue: string;
    kpi: string;
    handle: string;
    videoSrc?: string;
  }> = [
    {
      tag: "Tráfego Pago",
      title: "André Venum Wine",
      metric: "Crescimento",
      value: "+1.000%",
      icon: Video,
      hue: "from-fuchsia-500/50 via-purple-600/40 to-indigo-700/50",
      kpi: "criação de marca",
      handle: "@andrevenum",
      videoSrc: "/videos/video-1-André.mp4",
    },
    {
      tag: "Audiovisual",
      title: "Venum Brasil",
      metric: "Views",
      value: "1.1M",
      icon: Video,
      hue: "from-red-500/50 via-orange-500/40 to-yellow-500/50",
      kpi: "+78% alcance",
      handle: "@venumbrasil",
      videoSrc: "/videos/video-2-Venum.mp4",
    },
    {
      tag: "Audiovisual",
      title: "Venum Brasil",
      metric: "Views",
      value: "760K",
      icon: Video,
      hue: "from-orange-500/50 via-red-600/40 to-rose-700/50",
      kpi: "+124% engajamento",
      handle: "@venumbrasil",
      videoSrc: "/videos/video-3-Venum.mp4",
    },
    {
      tag: "Redes Sociais",
      title: "Big Man Barbearia",
      metric: "Assinaturas",
      value: "+2.5k",
      icon: Video,
      hue: "from-violet-500/50 via-blue-500/40 to-cyan-500/50",
      kpi: "+300% crescimento",
      handle: "@bigmanbarbearia",
      videoSrc: "/videos/video-4-Big-Man.mp4",
    },
    {
      tag: "Tráfego Pago",
      title: "Cocó King",
      metric: "ROAS",
      value: "10x",
      icon: Video,
      hue: "from-emerald-500/50 via-green-600/40 to-teal-700/50",
      kpi: "+67% delivery",
      handle: "@cocoking",
      videoSrc: "/videos/video-9-Coco-King.mp4",
    },
    {
      tag: "Audiovisual",
      title: "Gauro Pizzas",
      metric: "Crescimento",
      value: "+400%",
      icon: Video,
      hue: "from-yellow-500/50 via-amber-500/40 to-orange-600/50",
      kpi: "3 unidades abertas",
      handle: "@gauropizzas",
      videoSrc: "/videos/video-6-Gauro.mp4",
    },
    {
      tag: "Redes Sociais",
      title: "Big Woman Esmalteria",
      metric: "Crescimento",
      value: "+120%",
      icon: Video,
      hue: "from-pink-500/50 via-rose-500/40 to-fuchsia-600/50",
      kpi: "+engajamento",
      handle: "@bigwomanesmalteria",
      videoSrc: "/videos/video-7-Big-Woman.mp4",
    },
    {
      tag: "Tráfego Pago",
      title: "Wanderlei Silva",
      metric: "Alcance",
      value: "2.1M",
      icon: Video,
      hue: "from-blue-500/50 via-indigo-500/40 to-violet-600/50",
      kpi: "+194% engajamento",
      handle: "@wanderleisilva",
      videoSrc: "/videos/video-8-Wanderlei-Silva.mp4",
    },
  ];

  const loop = [...cards, ...cards];
  return (
    <div className="relative -mx-4 sm:-mx-5 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
      <div className="flex gap-2.5 w-max animate-marquee py-1 px-2">
        {loop.map((c, i) => (
          <div
            key={i}
            className="shrink-0 w-[31vw] max-w-[128px] sm:w-[140px] aspect-[9/15] relative rounded-xl overflow-hidden glass-strong"
          >
            {/* Gradient always visible as background/poster while video loads */}
            <div className={`absolute inset-0 bg-gradient-to-br ${c.hue}`} />
            <div className="absolute inset-0 opacity-30 mix-blend-overlay"
                 style={{ backgroundImage: "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.3), transparent 40%), radial-gradient(circle at 70% 80%, rgba(255,255,255,0.2), transparent 50%)" }} />

            {c.videoSrc && (
              <video
                src={c.videoSrc}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="absolute inset-0 h-full w-full object-cover"
                style={{ zIndex: 1 }}
              />
            )}

            {/* Overlays with explicit z-index to render above video on iOS Safari */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" style={{ zIndex: 2 }} />
            {/* Top tag */}
            <div className="absolute top-1.5 left-1.5" style={{ zIndex: 3 }}>
              <span className="inline-flex items-center gap-1 rounded-full bg-white/95 text-black text-[9px] font-semibold px-1.5 py-0.5">
                <c.icon className="h-2 w-2" /> {c.tag}
              </span>
            </div>
            {/* Live indicator */}
            <div className="absolute top-1.5 right-1.5 h-4 w-4 rounded-full bg-black/40 backdrop-blur flex items-center justify-center" style={{ zIndex: 3 }}>
              <span className="block h-1 w-1 rounded-full bg-red-500 animate-pulse-glow" />
            </div>
            {/* Bottom info */}
            <div className="absolute bottom-0 inset-x-0 p-2 text-white" style={{ zIndex: 3 }}>
              <div className="text-[10px] font-semibold leading-tight">{c.title}</div>
              <div className="mt-0.5 flex items-end justify-between">
                <div className="text-sm font-bold gradient-text leading-none">{c.value}</div>
                <div className="text-[8px] text-emerald-300 font-semibold">{c.kpi}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}



/* ---------------- INLINE LOGOS (social proof) ---------------- */
function InlineLogos() {
  const logos = [
    { src: "/logos/1.png", alt: "Gauro Pizzas" },
    { src: "/logos/2.png", alt: "Club Liss" },
    { src: "/logos/3.png", alt: "Pello Menos" },
    { src: "/logos/4.png", alt: "Óticas Carol" },
  ];
  return (
    <div className="text-center">
      <p className="text-[10px] sm:text-xs uppercase tracking-[0.22em] gradient-text font-semibold">
        EMPRESAS QUE CONFIAM NA GENESIS
      </p>
      <div className="mt-3 flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
        {logos.map((l) => (
          <img
            key={l.alt}
            src={l.src}
            alt={l.alt}
            className="h-7 sm:h-8 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
          />
        ))}
      </div>
    </div>
  );
}

function DashboardComposition() {
  return (
    <div className="relative h-[420px]">
      {/* Big metric card */}
      <div className="glass-strong absolute top-0 left-0 w-[62%] rounded-2xl p-5 animate-float-slow">
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span className="flex items-center gap-2"><BarChart3 className="h-3.5 w-3.5" /> Campanhas ativas</span>
          <span className="text-success">+24%</span>
        </div>
        <div className="mt-2 text-3xl font-bold">R$ 184.320</div>
        <div className="text-xs text-muted-foreground">investidos este mês</div>
        <div className="mt-4 flex items-end gap-1 h-14">
          {[40, 65, 35, 80, 55, 90, 70, 95, 60, 88, 72, 100].map((h, i) => (
            <div key={i} className="flex-1 rounded-sm"
                 style={{ height: `${h}%`, background: "var(--gradient-brand)", opacity: 0.6 + i * 0.03 }} />
          ))}
        </div>
      </div>

      {/* Leads card */}
      <div className="glass-strong absolute top-4 right-0 w-[42%] rounded-2xl p-4 animate-float" style={{ animationDelay: "0.5s" }}>
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span className="flex items-center gap-2"><Users className="h-3.5 w-3.5" /> Leads gerados</span>
        </div>
        <div className="mt-2 text-2xl font-bold gradient-text">1.247</div>
        <div className="text-xs text-success mt-1">+38% vs mês anterior</div>
      </div>

      {/* Reuniões */}
      <div className="glass-strong absolute top-44 right-6 w-[55%] rounded-2xl p-4 animate-float" style={{ animationDelay: "1s" }}>
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span className="flex items-center gap-2"><Calendar className="h-3.5 w-3.5" /> Reuniões agendadas</span>
        </div>
        <div className="mt-2 flex items-center justify-between">
          <div className="text-2xl font-bold">86</div>
          <div className="flex -space-x-2">
            {["#a78bfa", "#f472b6", "#fbbf24", "#34d399"].map((c, i) => (
              <div key={i} className="h-7 w-7 rounded-full border-2 border-background" style={{ background: c }} />
            ))}
          </div>
        </div>
      </div>

      {/* Crescimento */}
      <div className="glass-strong absolute bottom-12 left-2 w-[50%] rounded-2xl p-4 animate-float-slow" style={{ animationDelay: "0.3s" }}>
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span className="flex items-center gap-2"><TrendingUp className="h-3.5 w-3.5" /> Crescimento comercial</span>
        </div>
        <div className="mt-2 text-2xl font-bold">+62%</div>
        <svg viewBox="0 0 100 30" className="mt-2 w-full h-8">
          <defs>
            <linearGradient id="lg" x1="0" x2="1">
              <stop offset="0%" stopColor="oklch(0.72 0.2 295)" />
              <stop offset="100%" stopColor="oklch(0.82 0.17 65)" />
            </linearGradient>
          </defs>
          <path d="M0,25 Q20,20 30,18 T55,10 T100,4" fill="none" stroke="url(#lg)" strokeWidth="2" />
        </svg>
      </div>

      {/* IA/CRM */}
      <div className="glass-strong absolute bottom-0 right-0 w-[44%] rounded-2xl p-4 animate-float" style={{ animationDelay: "1.2s" }}>
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span className="flex items-center gap-2"><Bot className="h-3.5 w-3.5" /> CRM + IA</span>
          <span className="h-2 w-2 rounded-full bg-success animate-pulse-glow" />
        </div>
        <div className="mt-2 text-sm font-medium">Qualificação automática</div>
        <div className="mt-2 h-1.5 rounded-full bg-white/10 overflow-hidden">
          <div className="h-full w-[78%]" style={{ background: "var(--gradient-brand)" }} />
        </div>
      </div>

      {/* Floating badge */}
      <div className="glass absolute top-32 left-4 rounded-full px-3 py-1.5 text-xs flex items-center gap-1.5 animate-float" style={{ animationDelay: "0.8s" }}>
        <Video className="h-3 w-3" /> Audiovisual ativo
      </div>
    </div>
  );
}

// Cole aqui a URL do seu Google Apps Script após deployar
const SHEETS_ENDPOINT = "https://script.google.com/a/macros/companygenesis.com.br/s/AKfycbzsi3ptbQUBGXwULTfNdru30BLRUiGD_DTSz-1UkU_y6NrT0obKNIIFM4uAN8Sg1VHx/exec";

/* ---------------- FORM ---------------- */
function LeadForm() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const fd = new FormData(e.currentTarget);
    const data = {
      timestamp: new Date().toLocaleString("pt-BR"),
      nome: fd.get("nome"),
      email: fd.get("email"),
      whatsapp: fd.get("whatsapp"),
      empresa: fd.get("empresa"),
      faturamento: fd.get("faturamento"),
      segmento: fd.get("segmento"),
      desafio: fd.get("desafio"),
    };
    try {
      if (SHEETS_ENDPOINT) {
        await fetch(SHEETS_ENDPOINT, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
      }
    } catch (_) { /* silent */ }
    setLoading(false);
    navigate({ to: "/obrigado" });
  }

  return (
    <div className="glass-strong rounded-2xl p-4 md:p-5 relative overflow-hidden">
      <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full blur-3xl opacity-50"
           style={{ background: "var(--gradient-brand)" }} />
      <div className="relative">
        <form onSubmit={handleSubmit} className="grid gap-2">
            <Field name="nome" type="text" placeholder="Seu nome completo" />
            <Field name="email" type="email" placeholder="Seu melhor e-mail" />
            <div className="grid grid-cols-[54px_1fr] gap-2">
              <div className="rounded-lg bg-white/5 border border-white/10 px-2 py-2 text-[12px] flex items-center justify-center text-muted-foreground">
                +55
              </div>
              <Field name="whatsapp" type="tel" placeholder="(11) 99999-9999" />
            </div>
            <Field name="empresa" type="text" placeholder="Nome da sua empresa" />
            <Select name="faturamento" options={[
              "Selecione seu faturamento mensal",
              "Até R$ 50 mil",
              "R$ 50 mil – R$ 200 mil",
              "R$ 200 mil – R$ 500 mil",
              "R$ 500 mil – R$ 1 milhão",
              "Acima de R$ 1 milhão",
            ]} />
            <Select name="segmento" options={[
              "Selecione o segmento da sua empresa",
              "Saúde e estética",
              "Serviços profissionais",
              "E-commerce e varejo",
              "Educação",
              "Indústria",
              "Tecnologia / SaaS",
              "Outro",
            ]} />
            <Select name="desafio" options={[
              "Qual seu maior desafio hoje?",
              "Gerar mais leads qualificados",
              "Estruturar marketing e marca",
              "Aumentar vendas e previsibilidade",
              "Profissionalizar conteúdo e audiovisual",
              "Implementar CRM, IA e automação",
            ]} />
            <button type="submit" disabled={loading} className="btn-primary mt-1 w-full !text-[13px]">
              {loading ? "Enviando..." : <>Quero receber meu diagnóstico <ArrowRight className="h-3.5 w-3.5" /></>}
            </button>
            <p className="text-[10px] text-muted-foreground flex items-center gap-1.5 justify-center mt-0.5">
              <Lock className="h-2.5 w-2.5" /> Seus dados estão seguros. Sem spam.
            </p>
          </form>
      </div>
    </div>
  );
}

function Field({ name, placeholder, type = "text" }: { name: string; placeholder: string; type?: string }) {
  return (
    <input
      name={name}
      type={type}
      required
      placeholder={placeholder}
      className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2.5 text-[13px] placeholder:text-muted-foreground/70 focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/30 transition"
    />
  );
}

function Select({ name, options }: { name: string; options: string[] }) {
  return (
    <select
      name={name}
      required
      defaultValue=""
      className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2.5 text-[13px] focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/30 transition"
    >
      <option value="" disabled>{options[0]}</option>
      {options.slice(1).map((o) => <option key={o} value={o} className="bg-card">{o}</option>)}
    </select>
  );
}

/* ---------------- LOGOS ---------------- */
function LogosStrip() {
  const clients = [
    { name: "Gauro Pizzas", logo: "/logos/1.png" },
    { name: "Club Liss", logo: "/logos/2.png" },
    { name: "Pello Menos", logo: "/logos/3.png" },
    { name: "Óticas Carol", logo: "/logos/4.png" },
    { name: "Aditex", logo: "/logos/5.png" },
    { name: "Venum Brasil", logo: "/logos/6.png" },
    { name: "Big Man Barbearia", logo: "/logos/7.png" },
  ];
  const loop = [...clients, ...clients];
  return (
    <section className="border-y border-white/5 py-10 bg-white/[0.02]">
      <p className="text-center text-xs uppercase tracking-[0.25em] text-muted-foreground mb-6">
        Empresas que confiam na Genesis Company
      </p>
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <div className="flex gap-14 w-max animate-marquee">
          {loop.map((c, i) => (
            <div key={i} className="flex items-center shrink-0">
              <img
                src={c.logo}
                alt={c.name}
                className="h-10 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PAIN ---------------- */
function PainSection() {
  const pains = [
    { icon: MessageSquare, t: "Postagens sem estratégia", d: "Conteúdo no automático que não gera reputação nem demanda." },
    { icon: Target, t: "Anúncios que não geram leads qualificados", d: "Verba investida sem retorno mensurável no comercial." },
    { icon: Palette, t: "Marca sem diferenciação", d: "Comunicação genérica que não comunica valor real." },
    { icon: LineChart, t: "Comercial sem previsibilidade", d: "Meses bons, meses ruins — e ninguém sabe o porquê." },
    { icon: PhoneCall, t: "Oportunidades perdidas no atendimento", d: "Lead chega, mas não vira reunião, proposta ou venda." },
  ];
  return (
    <section className="section-pad mx-auto max-w-7xl px-5">
      <Heading
        chip="O problema"
        title={<>Sua empresa tem potencial, mas o marketing ainda <span className="gradient-text">não acompanha esse crescimento?</span></>}
        sub="Muitas empresas têm bons produtos, bom atendimento e uma boa estrutura, mas continuam perdendo oportunidades porque a comunicação não transmite valor, os anúncios não geram leads qualificados e o comercial não tem previsibilidade."
      />
      <p className="text-center text-[13px] md:text-base text-muted-foreground max-w-2xl mx-auto mt-2 leading-relaxed">
        O problema nem sempre está no produto. Muitas vezes está em como a empresa se posiciona, se comunica e transforma interesse em venda. <span className="text-foreground">A Genesis Company entra para organizar esse processo.</span>
      </p>
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {pains.map((p) => (
          <div key={p.t} className="glass rounded-2xl p-6 group hover:-translate-y-1 transition-all duration-300 hover:border-white/20">
            <div className="h-11 w-11 rounded-xl grid place-items-center" style={{ background: "var(--gradient-brand-soft)" }}>
              <p.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-semibold text-base">{p.t}</h3>
            <p className="mt-1.5 text-[13px] text-muted-foreground leading-relaxed">{p.d}</p>
          </div>
        ))}
      </div>
      <div className="mt-10 flex justify-center">
        <a href="#diagnostico" className="btn-primary text-sm">
          Quero resolver esses problemas <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}

/* ---------------- POSITIONING ---------------- */
function PositioningSection() {
  const nodes = [
    { icon: Brain, label: "Estratégia" },
    { icon: Megaphone, label: "Conteúdo" },
    { icon: Target, label: "Tráfego" },
    { icon: Video, label: "Audiovisual" },
    { icon: Users, label: "CRM" },
    { icon: Bot, label: "IA" },
    { icon: TrendingUp, label: "Vendas" },
  ];
  return (
    <section className="section-pad mx-auto max-w-7xl px-5">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left">
          <Heading
            align="center"
            chip="Posicionamento"
            title={<>Mais do que uma agência. Um <span className="gradient-text">departamento de marketing</span> dentro da sua empresa.</>}
            sub="Nós mergulhamos na realidade do seu negócio para construir uma estratégia que conecta marca, conteúdo, tráfego, tecnologia e vendas."
          />
          <p className="text-[13px] md:text-base text-muted-foreground mt-2 leading-relaxed">
            Enquanto você foca na gestão da empresa, a Genesis Company estrutura o marketing para gerar clareza, posicionamento e oportunidades comerciais todos os meses.
          </p>
          <div className="flex justify-center lg:justify-start mt-6">
            <a href="#diagnostico" className="btn-primary text-sm">
              Quero esse departamento na minha empresa <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Ecosystem visual */}
        <div className="relative aspect-square max-w-lg w-full mx-auto">
          <div className="absolute inset-0 rounded-full blur-3xl opacity-40"
               style={{ background: "var(--gradient-brand)" }} />
          {/* center */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="glass-strong h-28 w-28 rounded-full grid place-items-center">
              <div className="text-center">
                <img src="/genesis-logo-white.png" alt="Genesis" className="h-8 w-8 mx-auto" />
                <div className="text-xs mt-1 font-bold">Genesis</div>
              </div>
            </div>
          </div>
          {/* orbit nodes */}
          {nodes.map((n, i) => {
            const angle = (i / nodes.length) * Math.PI * 2 - Math.PI / 2;
            const r = 42; // %
            const x = 50 + r * Math.cos(angle);
            const y = 50 + r * Math.sin(angle);
            return (
              <div
                key={n.label}
                className="absolute -translate-x-1/2 -translate-y-1/2 glass rounded-2xl px-3 py-2 flex items-center gap-2 animate-float"
                style={{ left: `${x}%`, top: `${y}%`, animationDelay: `${i * 0.2}s` }}
              >
                <n.icon className="h-4 w-4" />
                <span className="text-xs font-medium">{n.label}</span>
              </div>
            );
          })}
          {/* connecting lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
            {nodes.map((_, i) => {
              const angle = (i / nodes.length) * Math.PI * 2 - Math.PI / 2;
              const r = 38;
              const x = 50 + r * Math.cos(angle);
              const y = 50 + r * Math.sin(angle);
              return <line key={i} x1="50" y1="50" x2={x} y2={y} stroke="oklch(1 0 0 / 0.08)" strokeWidth="0.3" strokeDasharray="1 1" />;
            })}
          </svg>
        </div>
      </div>
    </section>
  );
}

/* ---------------- SERVICES ---------------- */
function ServicesSection() {
  const services = [
    {
      icon: Brain,
      title: "Estratégia de marketing",
      desc: "Planejamento mensal alinhado aos objetivos da empresa, campanhas comerciais e posicionamento da marca.",
      tag: "Direção estratégica",
    },
    {
      icon: Target,
      title: "Tráfego pago e performance",
      desc: "Campanhas para atrair leads mais qualificados, aumentar a procura e gerar oportunidades reais para o comercial.",
      tag: "Mais demanda",
    },
    {
      icon: Video,
      title: "Produção audiovisual",
      desc: "Conteúdos profissionais para gerar desejo, autoridade, confiança e percepção de valor.",
      tag: "Mais autoridade",
    },
    {
      icon: Palette,
      title: "Gestão de marca",
      desc: "Comunicação mais forte, clara e memorável para sua empresa ser escolhida pelo cliente certo.",
      tag: "Marca forte",
    },
    {
      icon: Megaphone,
      title: "Social media e conteúdo",
      desc: "Presença digital estratégica para fortalecer relacionamento, reputação e lembrança de marca.",
      tag: "Presença digital",
    },
    {
      icon: Cpu,
      title: "Tecnologia, IA e automação",
      desc: "Soluções para acelerar atendimento, organizar leads e melhorar a eficiência do processo comercial.",
      tag: "Operação inteligente",
    },
  ];
  return (
    <section id="servicos" className="section-pad mx-auto max-w-7xl px-5">
      <Heading
        chip="O que entregamos"
        title={<>Tudo que sua empresa precisa para transformar <span className="gradient-text">marketing em crescimento</span></>}
        sub="Seis frentes integradas, operando como um único departamento dentro da sua empresa."
      />
      <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((s) => (
          <article
            key={s.title}
            className="group relative glass rounded-2xl p-6 overflow-hidden hover:-translate-y-1.5 transition-all duration-300 hover:border-white/25"
          >
            <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity"
                 style={{ background: "var(--gradient-brand)" }} />
            <div className="relative">
              <div className="flex items-center justify-between">
                <div className="h-12 w-12 rounded-xl grid place-items-center"
                     style={{ background: "var(--gradient-brand-soft)", border: "1px solid oklch(1 0 0 / 0.1)" }}>
                  <s.icon className="h-5 w-5" />
                </div>
                <span className="chip">{s.tag}</span>
              </div>
              <h3 className="mt-5 font-semibold text-base">{s.title}</h3>
              <p className="mt-1.5 text-[13px] text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-10 flex justify-center">
        <a href="#diagnostico" className="btn-primary text-sm">
          Quero esse time na minha empresa <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}

/* ---------------- BEFORE / AFTER ---------------- */
function BeforeAfterSection() {
  const before = [
    "Marketing sem direção",
    "Campanhas soltas",
    "Posts sem intenção comercial",
    "Leads sem acompanhamento",
    "Marca pouco valorizada",
    "Comercial sem previsibilidade",
  ];
  const after = [
    "Estratégia mensal clara",
    "Campanhas com objetivo comercial",
    "Conteúdos que geram autoridade",
    "CRM, IA e vendas conectados",
    "Marca mais forte e lembrada",
    "Mais oportunidades comerciais",
  ];
  return (
    <section className="section-pad mx-auto max-w-7xl px-5">
      <Heading
        chip="Antes vs Depois"
        title={<>Quando marketing, marca e vendas trabalham juntos, o crescimento <span className="gradient-text">deixa de depender da sorte</span></>}
      />
      <div className="mt-12 grid lg:grid-cols-2 gap-5">
        {/* Before */}
        <div className="glass rounded-3xl p-7 opacity-90">
          <span className="chip">Antes da Genesis</span>
          <h3 className="mt-4 text-lg font-bold text-muted-foreground">Marketing improvisado</h3>
          <ul className="mt-5 space-y-3">
            {before.map((b) => (
              <li key={b} className="flex items-start gap-3 text-[13px] text-muted-foreground">
                <XCircle className="h-5 w-5 shrink-0 text-destructive/70 mt-0.5" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
        {/* After */}
        <div className="relative rounded-3xl p-7 overflow-hidden gradient-border"
             style={{ boxShadow: "var(--shadow-glow)" }}>
          <div className="absolute inset-0 opacity-100"
               style={{ background: "var(--gradient-brand-soft)" }} />
          <div className="relative">
            <span className="chip" style={{ background: "var(--gradient-brand)", color: "var(--background)", border: "none" }}>
              <Rocket className="h-3.5 w-3.5" /> Depois da Genesis
            </span>
            <h3 className="mt-4 text-lg font-bold">Crescimento previsível</h3>
            <ul className="mt-5 space-y-3">
              {after.map((a) => (
                <li key={a} className="flex items-start gap-3 text-[13px]">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-success mt-0.5" />
                  <span className="text-foreground">{a}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-10 flex justify-center">
        <a href="#diagnostico" className="btn-primary text-sm">
          Quero crescimento previsível <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}

/* ---------------- FOR WHO ---------------- */
function ForWhoSection() {
  const items = [
    "Para empresas que querem parar de depender apenas de indicação.",
    "Para negócios que precisam atrair mais clientes todos os meses.",
    "Para marcas que querem se posicionar melhor no mercado.",
    "Para empresários que sabem que marketing precisa gerar resultado.",
    "Para empresas que precisam de estratégia, execução e acompanhamento comercial.",
  ];
  return (
    <section id="para-quem" className="section-pad mx-auto max-w-7xl px-5">
      <Heading
        chip="Para quem é"
        title={<>A Genesis Company é para empresas que querem <span className="gradient-text">crescer com previsibilidade</span></>}
      />
      <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((i, idx) => (
          <div key={i} className="glass rounded-2xl p-5 flex gap-4 hover:-translate-y-0.5 transition">
            <div className="h-9 w-9 rounded-lg grid place-items-center font-bold text-sm shrink-0"
                 style={{ background: "var(--gradient-brand)", color: "var(--background)" }}>
              {String(idx + 1).padStart(2, "0")}
            </div>
            <p className="text-[13px] leading-relaxed text-foreground/90">{i}</p>
          </div>
        ))}
      </div>
      <div className="mt-10 flex justify-center">
        <a href="#diagnostico" className="btn-primary text-sm">
          Sou esse perfil — quero começar <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}

/* ---------------- PROCESS ---------------- */
function ProcessSection() {
  const steps = [
    { n: "01", icon: Target, t: "Diagnóstico", d: "Entendemos o momento atual da empresa, os gargalos comerciais e as oportunidades de crescimento." },
    { n: "02", icon: Brain, t: "Estratégia", d: "Criamos um plano mensal conectando marca, conteúdo, tráfego, tecnologia e vendas." },
    { n: "03", icon: Zap, t: "Execução e otimização", d: "A Genesis Company executa, acompanha, otimiza e melhora o processo todos os meses." },
  ];
  return (
    <section id="processo" className="section-pad mx-auto max-w-7xl px-5">
      <Heading
        chip="Como trabalhamos"
        title={<>Um processo claro, do <span className="gradient-text">diagnóstico ao crescimento</span></>}
      />
      <div className="mt-14 relative">
        {/* line */}
        <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-px"
             style={{ background: "linear-gradient(to right, transparent, oklch(1 0 0 / 0.2), transparent)" }} />
        <div className="grid lg:grid-cols-3 gap-6">
          {steps.map((s) => (
            <div key={s.n} className="relative glass-strong rounded-3xl p-7 hover:-translate-y-1 transition">
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 rounded-2xl grid place-items-center font-bold text-lg"
                     style={{ background: "var(--gradient-brand)", color: "var(--background)" }}>
                  {s.n}
                </div>
                <s.icon className="h-6 w-6 text-muted-foreground" />
              </div>
              <h3 className="mt-5 text-base font-bold">{s.t}</h3>
              <p className="mt-1.5 text-[13px] text-muted-foreground leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10 flex justify-center">
        <a href="#diagnostico" className="btn-primary text-sm">
          Quero meu diagnóstico gratuito <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}

/* ---------------- FINAL CTA ---------------- */
function FinalCTA() {
  return (
    <section className="section-pad mx-auto max-w-6xl px-5">
      <div className="relative overflow-hidden rounded-3xl p-8 md:p-14 glass-strong">
        <div className="absolute -top-40 -left-32 h-[400px] w-[400px] rounded-full blur-3xl opacity-50"
             style={{ background: "var(--gradient-brand)" }} />
        <div className="absolute -bottom-40 -right-32 h-[400px] w-[400px] rounded-full blur-3xl opacity-40"
             style={{ background: "radial-gradient(closest-side, oklch(0.82 0.17 65 / 0.6), transparent)" }} />

        <div className="relative grid lg:grid-cols-[1.2fr_1fr] gap-10 items-center">
          <div className="text-center lg:text-left">
            <span className="chip"><Shield className="h-3.5 w-3.5" /> Vagas limitadas por mês</span>
            <h2 className="mt-3 text-[1.55rem] md:text-4xl font-bold leading-[1.12]">
              Pronto para transformar o marketing da sua empresa em <span className="gradient-text">crescimento?</span>
            </h2>
            <p className="mt-3 text-[13px] md:text-base text-muted-foreground max-w-xl leading-relaxed mx-auto lg:mx-0">
              A Genesis Company pode ser o departamento de marketing que conecta sua marca, suas campanhas e seu comercial em uma estratégia feita para gerar resultado.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 justify-center lg:justify-start">
              <a href="#diagnostico" className="btn-primary text-sm">
                Falar com a Genesis Company <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#servicos" className="btn-ghost text-sm">Ver serviços novamente</a>
            </div>
          </div>
          <div className="glass rounded-2xl p-6">
            <h3 className="font-semibold text-base">Próximos passos</h3>
            <ol className="mt-4 space-y-3 text-[13px]">
              {["Você preenche o diagnóstico", "Nossa equipe analisa o momento da sua empresa", "Apresentamos uma estratégia comercial sob medida"].map((t, i) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="h-6 w-6 rounded-full grid place-items-center text-xs font-bold shrink-0"
                        style={{ background: "var(--gradient-brand)", color: "var(--background)" }}>{i + 1}</span>
                  <span className="text-foreground/90">{t}</span>
                </li>
              ))}
            </ol>
            <a href="#diagnostico" className="btn-ghost w-full mt-6 justify-center">Ir para o formulário</a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- PHONE MOCKUP ---------------- */
function PhoneMockup({ videoSrc }: { videoSrc: string }) {
  return (
    <div className="w-[170px] sm:w-[220px] flex-shrink-0"
         style={{ filter: "drop-shadow(0 30px 70px oklch(0 0 0 / 0.8))" }}>
      <div className="rounded-[2.2rem] border-[6px] border-white/15 bg-black overflow-hidden">
        <div className="relative aspect-[9/16]">
          <video src={videoSrc} autoPlay muted loop playsInline
                 className="absolute inset-0 w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
}

/* ---------------- VIDEO SHOWCASE ---------------- */
function VideoShowcaseSection() {
  return (
    <section className="section-pad relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none"
           style={{ background: "radial-gradient(ellipse 90% 70% at 50% 50%, oklch(0.58 0.24 264 / 0.12), transparent)" }} />
      <div className="relative mx-auto max-w-7xl px-5">
        <Heading
          chip="Audiovisual"
          title={<>Conteúdo que gera <span className="gradient-text">engajamento e vendas</span></>}
          sub="Produção profissional que transforma sua marca em autoridade e converte seguidores em clientes reais."
        />
        <div className="mt-14 flex justify-center items-end gap-5 sm:gap-10">
          <div style={{ transform: "rotate(-4deg) translateY(12px)" }}>
            <PhoneMockup videoSrc="/videos/showcase-1.mp4" />
          </div>
          <div style={{ transform: "rotate(4deg) translateY(12px)" }}>
            <PhoneMockup videoSrc="/videos/showcase-2.mp4" />
          </div>
        </div>
        <div className="mt-16 text-center">
          <a href="#diagnostico" className="btn-primary text-sm">
            Quero conteúdo assim <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- ABOUT SECTION ---------------- */
function AboutSection() {
  const stats = [
    { v: "+R$ 10M", l: "investidos em mídia" },
    { v: "+120", l: "marcas atendidas" },
    { v: "7 anos", l: "de mercado" },
    { v: "+50M", l: "impressões geradas" },
    { v: "6 frentes", l: "de marketing integradas" },
    { v: "100%", l: "foco em resultado" },
  ];
  return (
    <section className="section-pad mx-auto max-w-7xl px-5">
      <Heading
        chip="Sobre a Genesis"
        title={<>Uma empresa construída para <span className="gradient-text">transformar negócios</span></>}
        sub="Há 7 anos conectando estratégia, criatividade e tecnologia para ajudar empresas a crescerem com previsibilidade e consistência."
      />
      <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-4">
        {stats.map((s) => (
          <div key={s.l} className="glass rounded-2xl p-5 text-center hover:-translate-y-0.5 transition-transform">
            <div className="text-2xl sm:text-3xl font-bold gradient-text">{s.v}</div>
            <div className="text-[11px] sm:text-sm text-muted-foreground mt-1.5 leading-snug">{s.l}</div>
          </div>
        ))}
      </div>
      <div className="mt-8 glass rounded-2xl p-6 sm:p-8">
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-10">
          <div>
            <h3 className="font-bold text-base mb-3">O que nos diferencia</h3>
            <ul className="space-y-2.5">
              {[
                "Atuamos como departamento interno, não como fornecedor externo",
                "Estratégia, criação e performance em um só contrato",
                "Relatórios mensais com dados reais de impacto comercial",
                "Time dedicado que conhece profundamente o seu negócio",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[13px] text-foreground/90">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-success mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-base mb-3">Como operamos</h3>
            <ul className="space-y-2.5">
              {[
                "Reuniões mensais de alinhamento estratégico",
                "Planejamento trimestral de campanhas e conteúdo",
                "Dashboard de resultados atualizado em tempo real",
                "Suporte direto com o time de especialistas",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[13px] text-foreground/90">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-success mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-10 flex justify-center">
        <a href="#diagnostico" className="btn-primary text-sm">
          Quero trabalhar com a Genesis <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);
  const items = [
    {
      q: "Quanto custa?",
      a: "O investimento varia de acordo com o escopo e os serviços contratados. Preencha o diagnóstico e, na reunião, apresentamos uma proposta sob medida para o momento do seu negócio.",
    },
    {
      q: "A Genesis funciona para o meu segmento?",
      a: "Atendemos empresas de diversos segmentos que faturam acima de R$ 50 mil/mês e querem crescer com marketing estratégico. Já passaram pela Genesis empresas de varejo, gastronomia, fitness, saúde, moda e serviços.",
    },
    {
      q: "Quanto tempo leva para ver resultados?",
      a: "Os primeiros resultados costumam aparecer entre 30 e 90 dias, dependendo do ponto de partida e das ações priorizadas. Trabalhamos com quick wins para gerar impacto imediato enquanto construímos o crescimento sustentável.",
    },
    {
      q: "Por que contratar a Genesis em vez de montar uma equipe interna?",
      a: "Com a Genesis você tem acesso a um time completo — estrategista, designer, gestor de tráfego, videomaker, copywriter e analista de dados — por um custo fixo mensal, sem encargos trabalhistas, processo seletivo ou treinamento.",
    },
    {
      q: "Vocês gerenciam o tráfego pago também?",
      a: "Sim. O tráfego pago faz parte da nossa oferta integrada. Gerenciamos campanhas no Meta Ads, Google Ads e outros canais, sempre conectado à estratégia de conteúdo e ao objetivo comercial da empresa.",
    },
    {
      q: "Como funciona o acompanhamento da minha conta?",
      a: "Você tem um Account Manager dedicado, reuniões mensais de resultado, relatórios periódicos e acesso a um dashboard atualizado em tempo real. Nosso time está disponível para suporte direto durante toda a operação.",
    },
  ];
  return (
    <section className="section-pad mx-auto max-w-2xl px-5">
      <Heading
        chip="FAQ"
        title="Perguntas frequentes"
        sub="Tudo que você precisa saber antes de agendar seu diagnóstico gratuito com a Genesis."
      />
      <div className="mt-10 divide-y divide-white/8">
        {items.map((item, i) => (
          <div key={i} className="py-5">
            <button
              className="w-full flex items-center justify-between gap-4 text-left"
              onClick={() => setOpen(open === i ? null : i)}
            >
              <span className="font-semibold text-[13px] text-foreground">{item.q}</span>
              <ChevronDown
                className={`h-5 w-5 text-muted-foreground flex-shrink-0 transition-transform duration-200 ${open === i ? "rotate-180" : ""}`}
              />
            </button>
            {open === i && (
              <div className="mt-3 pr-9">
                <p className="text-[13px] md:text-sm text-muted-foreground leading-relaxed">{item.a}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- WHATSAPP CTA ---------------- */
function WhatsAppCTASection() {
  return (
    <section
      className="py-16 px-5 text-center"
      style={{ background: "linear-gradient(180deg, transparent 0%, oklch(0.58 0.24 264 / 0.10) 100%)", borderTop: "1px solid oklch(1 0 0 / 0.07)" }}
    >
      <div className="mx-auto max-w-md">
        <h2 className="text-2xl md:text-3xl font-bold leading-tight">
          Precisa ser atendido com{" "}
          <span className="gradient-text">urgência?</span>
        </h2>
        <p className="mt-3 text-[13px] md:text-base text-muted-foreground">
          Toque no botão abaixo para falar com o nosso time pelo WhatsApp.
        </p>
        <a
          href="https://wa.me/5521996526969"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-semibold text-sm text-white transition-transform hover:-translate-y-0.5"
          style={{ background: "#25D366", boxShadow: "0 10px 40px -10px #25D36680" }}
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Falar no WhatsApp
        </a>
      </div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="mx-auto max-w-7xl px-5 space-y-3 text-center text-[12px] text-muted-foreground">
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#" className="hover:text-foreground transition-colors">Política de Privacidade</a>
          <a href="#" className="hover:text-foreground transition-colors">Termos de Uso</a>
        </div>
        <p><strong className="text-foreground/60">Genesis Company</strong> · CNPJ 52.906.973/0001-98</p>
        <p>Contato: contato@companygenesis.com.br</p>
        <p>© {new Date().getFullYear()} Genesis Company · Todos os direitos reservados</p>
      </div>
    </footer>
  );
}

/* ---------------- SHARED ---------------- */
function Heading({
  chip,
  title,
  sub,
  align = "center",
}: {
  chip?: string;
  title: React.ReactNode;
  sub?: string;
  align?: "center" | "left";
}) {
  const a = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`${a} max-w-3xl`}>
      {chip && <span className="chip">{chip}</span>}
      <h2 className="mt-3 text-[1.55rem] md:text-4xl font-bold leading-[1.12] tracking-tight">{title}</h2>
      {sub && <p className={`mt-3 text-[13px] md:text-base text-muted-foreground leading-relaxed ${align === "center" ? "max-w-2xl mx-auto" : ""}`}>{sub}</p>}
    </div>
  );
}
