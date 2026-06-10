import { createFileRoute } from "@tanstack/react-router";
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
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Genesis Company — Marketing, vendas e tecnologia em um só lugar" },
      {
        name: "description",
        content:
          "Transforme o marketing da sua empresa em uma máquina de gerar oportunidades, vendas e posicionamento. Estratégia, tráfego, audiovisual, IA e CRM conectados.",
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
      <Nav />
      <Hero />
      <PainSection />
      <PositioningSection />
      <ServicesSection />
      <BeforeAfterSection />
      <ForWhoSection />
      <ProcessSection />
      <FinalCTA />
      <Footer />
    </div>
  );
}

/* ---------------- TOP BAR ---------------- */
function TopBar() {
  return (
    <div
      className="fixed top-0 inset-x-0 z-[60] text-center text-[11px] sm:text-xs font-medium py-2 px-4 text-white"
      style={{ background: "var(--gradient-brand)" }}
    >
      Solução estratégica para empresas que faturam acima de <strong>R$ 50 mil</strong> por mês
    </div>
  );
}

/* ---------------- NAV ---------------- */
function Nav() {
  return (
    <header className="fixed top-8 inset-x-0 z-50 flex justify-center px-3">
      <div className="glass-strong w-full max-w-6xl rounded-full pl-4 pr-2 py-2 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 min-w-0">
          <div className="h-7 w-7 rounded-lg grid place-items-center shrink-0" style={{ background: "var(--gradient-brand)" }}>
            <Sparkles className="h-3.5 w-3.5 text-background" />
          </div>
          <span className="font-display font-bold tracking-tight text-sm sm:text-base truncate">
            Genesis<span className="gradient-text">.</span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
          <a href="#servicos" className="hover:text-foreground transition">Serviços</a>
          <a href="#processo" className="hover:text-foreground transition">Processo</a>
          <a href="#para-quem" className="hover:text-foreground transition">Para quem</a>
        </nav>
        <a href="#diagnostico" className="btn-primary !py-1.5 !px-3 text-xs sm:!px-4 sm:text-sm shrink-0">
          Diagnóstico grátis <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </header>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section id="top" className="relative pt-24 pb-12 md:pt-32 md:pb-20">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full opacity-60 blur-3xl"
           style={{ background: "radial-gradient(closest-side, oklch(0.7 0.22 295 / 0.45), transparent)" }} />
      <div className="pointer-events-none absolute top-40 right-0 h-[400px] w-[500px] rounded-full opacity-40 blur-3xl"
           style={{ background: "radial-gradient(closest-side, oklch(0.78 0.18 60 / 0.4), transparent)" }} />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-5">
        {/* MOBILE-FIRST: Visual references first */}
        <div className="mt-2 animate-fade-up">
          <ReferenceCards />
        </div>

        {/* Headline */}
        <div className="mt-7 sm:mt-10 text-center lg:text-left animate-fade-up max-w-3xl mx-auto lg:mx-0">
          <h1 className="text-[2rem] leading-[1.08] sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Transforme o marketing da sua empresa em uma{" "}
            <span className="gradient-text">máquina</span> de gerar{" "}
            <span className="gradient-text">oportunidades</span>,{" "}
            <span className="gradient-text">vendas</span> e{" "}
            <span className="gradient-text">posicionamento</span>.
          </h1>
          <p className="mt-4 sm:mt-5 text-[15px] sm:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
            A Genesis Company atua como o <strong className="text-foreground">departamento de marketing</strong> da sua empresa — conectando estratégia, tráfego pago, audiovisual, marca, tecnologia e vendas para atrair clientes mais qualificados e acelerar o crescimento.
          </p>
        </div>

        {/* Social proof — inline, before form */}
        <div className="mt-8 animate-fade-up">
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

/* ---------------- REFERENCE CARDS (Turbo-style creator strip) ---------------- */
function ReferenceCards() {
  const cards = [
    {
      tag: "Tráfego",
      title: "Campanha Black",
      metric: "ROAS",
      value: "6.2x",
      icon: Target,
      hue: "from-fuchsia-500/40 via-purple-600/30 to-indigo-600/40",
      kpi: "1.842 leads",
    },
    {
      tag: "Audiovisual",
      title: "Criativo UGC",
      metric: "CTR",
      value: "4.8%",
      icon: Video,
      hue: "from-pink-500/40 via-rose-500/30 to-orange-500/40",
      kpi: "+312% views",
    },
    {
      tag: "CRM + IA",
      title: "Qualificação",
      metric: "Conv.",
      value: "38%",
      icon: Bot,
      hue: "from-violet-500/40 via-blue-500/30 to-cyan-500/40",
      kpi: "86 reuniões",
    },
    {
      tag: "Performance",
      title: "Dashboard",
      metric: "Pipeline",
      value: "R$1.2M",
      icon: BarChart3,
      hue: "from-emerald-500/40 via-teal-500/30 to-violet-500/40",
      kpi: "+62% MoM",
    },
  ];
  return (
    <div className="relative -mx-4 sm:-mx-5">
      <div className="flex gap-3 overflow-x-auto px-4 sm:px-5 pb-3 snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {cards.map((c, i) => (
          <div
            key={c.title}
            className="snap-start shrink-0 w-[44vw] max-w-[180px] sm:w-[200px] aspect-[3/4] relative rounded-2xl overflow-hidden glass-strong"
            style={{ transform: `rotate(${i % 2 === 0 ? -1.5 : 1.5}deg)` }}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${c.hue}`} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            {/* Tag */}
            <div className="absolute top-2.5 left-2.5">
              <span className="inline-flex items-center gap-1 rounded-full bg-white/90 text-black text-[10px] font-semibold px-2 py-0.5">
                <c.icon className="h-2.5 w-2.5" /> {c.tag}
              </span>
            </div>
            {/* Decorative chart */}
            <div className="absolute inset-x-3 top-1/3 opacity-70">
              <svg viewBox="0 0 100 30" className="w-full h-10">
                <path d="M0,25 Q25,15 50,18 T100,5" fill="none" stroke="white" strokeWidth="1.5" opacity="0.6" />
              </svg>
            </div>
            {/* Bottom info */}
            <div className="absolute bottom-0 inset-x-0 p-2.5 text-white">
              <div className="text-[11px] font-semibold leading-tight">{c.title}</div>
              <div className="mt-1 flex items-end justify-between">
                <div>
                  <div className="text-[9px] uppercase tracking-wider opacity-70">{c.metric}</div>
                  <div className="text-lg font-bold gradient-text leading-none">{c.value}</div>
                </div>
                <div className="text-[9px] text-emerald-300 font-semibold">{c.kpi}</div>
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
  const clients = ["Pello Menos", "Rubi Laser", "Big Man", "Óticas Carol", "Club Liss", "EH Medical"];
  return (
    <div className="text-center">
      <p className="text-[10px] sm:text-xs uppercase tracking-[0.22em] gradient-text font-semibold">
        Empresas que confiam na Genesis Company
      </p>
      <div className="mt-3 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 opacity-80">
        {clients.map((c) => (
          <span key={c} className="font-display text-sm sm:text-base font-semibold tracking-tight text-foreground/75">
            {c}
          </span>
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

/* ---------------- FORM ---------------- */
function LeadForm() {
  const [sent, setSent] = useState(false);
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }
  return (
    <div className="glass-strong rounded-3xl p-6 md:p-7 relative overflow-hidden">
      <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full blur-3xl opacity-50"
           style={{ background: "var(--gradient-brand)" }} />
      <div className="relative">
        <div className="flex items-center gap-2 mb-3">
          <span className="chip"><Sparkles className="h-3 w-3" /> Diagnóstico gratuito</span>
        </div>
        <h3 className="text-xl md:text-2xl font-bold leading-tight">
          Receba um diagnóstico gratuito do marketing da sua empresa
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Preencha seus dados e nossa equipe vai entender o momento atual do seu negócio para mostrar como uma estratégia mais completa pode ajudar sua empresa a vender mais, se posicionar melhor e crescer com previsibilidade.
        </p>

        {sent ? (
          <div className="mt-6 rounded-2xl p-5 text-center" style={{ background: "var(--gradient-brand-soft)" }}>
            <CheckCircle2 className="h-10 w-10 mx-auto text-success" />
            <p className="mt-3 font-semibold">Recebemos seus dados!</p>
            <p className="text-sm text-muted-foreground mt-1">Nossa equipe entrará em contato em até 1 dia útil.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-5 grid gap-3">
            <Field name="nome" type="text" placeholder="Seu nome completo" />
            <Field name="email" type="email" placeholder="Seu melhor e-mail" />
            <div className="grid grid-cols-[64px_1fr] gap-2">
              <div className="rounded-xl bg-white/5 border border-white/10 px-3 py-3 text-sm flex items-center justify-center text-muted-foreground">
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
            <button type="submit" className="btn-primary mt-1 w-full !py-3.5">
              Quero receber meu diagnóstico <ArrowRight className="h-4 w-4" />
            </button>
            <p className="text-xs text-muted-foreground flex items-center gap-2 justify-center mt-1">
              <Lock className="h-3 w-3" /> Seus dados estão seguros. Sem spam. Atendimento consultivo.
            </p>
          </form>

        )}
      </div>
    </div>
  );
}

function Field({ name, placeholder }: { name: string; placeholder: string }) {
  return (
    <input
      name={name}
      required
      placeholder={placeholder}
      className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm placeholder:text-muted-foreground/70 focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/30 transition"
    />
  );
}
function Select({ name, options }: { name: string; options: string[] }) {
  return (
    <select
      name={name}
      required
      defaultValue=""
      className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/30 transition"
    >
      <option value="" disabled>{options[0]}</option>
      {options.slice(1).map((o) => <option key={o} value={o} className="bg-card">{o}</option>)}
    </select>
  );
}

/* ---------------- LOGOS ---------------- */
function LogosStrip() {
  const clients = ["Pello Menos", "Rubi Laser", "Big Man Barbearia", "Óticas Carol", "Club Liss", "EH Medical"];
  const loop = [...clients, ...clients];
  return (
    <section className="border-y border-white/5 py-10 bg-white/[0.02]">
      <p className="text-center text-xs uppercase tracking-[0.25em] text-muted-foreground mb-6">
        Empresas que confiam na Genesis Company
      </p>
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <div className="flex gap-14 w-max animate-marquee">
          {loop.map((c, i) => (
            <div key={i} className="flex items-center gap-3 shrink-0">
              <div className="h-9 w-9 rounded-lg grid place-items-center text-xs font-bold"
                   style={{ background: "var(--gradient-brand-soft)", border: "1px solid oklch(1 0 0 / 0.1)" }}>
                {c.split(" ").map(w => w[0]).slice(0, 2).join("")}
              </div>
              <span className="font-display text-lg font-semibold tracking-tight text-foreground/85">{c}</span>
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
      <p className="text-center text-muted-foreground max-w-2xl mx-auto mt-2">
        O problema nem sempre está no produto. Muitas vezes está em como a empresa se posiciona, se comunica e transforma interesse em venda. <span className="text-foreground">A Genesis Company entra para organizar esse processo.</span>
      </p>
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {pains.map((p) => (
          <div key={p.t} className="glass rounded-2xl p-6 group hover:-translate-y-1 transition-all duration-300 hover:border-white/20">
            <div className="h-11 w-11 rounded-xl grid place-items-center" style={{ background: "var(--gradient-brand-soft)" }}>
              <p.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-semibold text-lg">{p.t}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.d}</p>
          </div>
        ))}
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
        <div>
          <Heading
            align="left"
            chip="Posicionamento"
            title={<>Mais do que uma agência. Um <span className="gradient-text">departamento de marketing</span> dentro da sua empresa.</>}
            sub="Nós mergulhamos na realidade do seu negócio para construir uma estratégia que conecta marca, conteúdo, tráfego, tecnologia e vendas."
          />
          <p className="text-muted-foreground mt-2">
            Enquanto você foca na gestão da empresa, a Genesis Company estrutura o marketing para gerar clareza, posicionamento e oportunidades comerciais todos os meses.
          </p>
          <a href="#diagnostico" className="btn-primary mt-7">
            Quero esse departamento na minha empresa <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        {/* Ecosystem visual */}
        <div className="relative aspect-square max-w-lg w-full mx-auto">
          <div className="absolute inset-0 rounded-full blur-3xl opacity-40"
               style={{ background: "var(--gradient-brand)" }} />
          {/* center */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="glass-strong h-28 w-28 rounded-full grid place-items-center">
              <div className="text-center">
                <Sparkles className="h-6 w-6 mx-auto gradient-text" />
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
              <h3 className="mt-5 font-semibold text-lg">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          </article>
        ))}
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
          <h3 className="mt-4 text-2xl font-bold text-muted-foreground">Marketing improvisado</h3>
          <ul className="mt-5 space-y-3">
            {before.map((b) => (
              <li key={b} className="flex items-start gap-3 text-sm text-muted-foreground">
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
            <h3 className="mt-4 text-2xl font-bold">Crescimento previsível</h3>
            <ul className="mt-5 space-y-3">
              {after.map((a) => (
                <li key={a} className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-success mt-0.5" />
                  <span className="text-foreground">{a}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
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
            <p className="text-sm leading-relaxed text-foreground/90">{i}</p>
          </div>
        ))}
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
              <h3 className="mt-5 text-xl font-bold">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
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
          <div>
            <span className="chip"><Shield className="h-3.5 w-3.5" /> Vagas limitadas por mês</span>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold leading-tight">
              Pronto para transformar o marketing da sua empresa em <span className="gradient-text">crescimento?</span>
            </h2>
            <p className="mt-5 text-muted-foreground text-lg max-w-xl">
              A Genesis Company pode ser o departamento de marketing que conecta sua marca, suas campanhas e seu comercial em uma estratégia feita para gerar resultado.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#diagnostico" className="btn-primary">
                Falar com a Genesis Company <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#servicos" className="btn-ghost">Ver serviços novamente</a>
            </div>
          </div>
          <div className="glass rounded-2xl p-6">
            <h3 className="font-semibold text-lg">Próximos passos</h3>
            <ol className="mt-4 space-y-3 text-sm">
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

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer className="border-t border-white/5 py-10 mt-10">
      <div className="mx-auto max-w-7xl px-5 flex flex-col md:flex-row gap-4 items-center justify-between text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-lg grid place-items-center" style={{ background: "var(--gradient-brand)" }}>
            <Sparkles className="h-3.5 w-3.5 text-background" />
          </div>
          <span className="font-display font-bold text-foreground">Genesis Company</span>
        </div>
        <p>© {new Date().getFullYear()} Genesis Company. Marketing, vendas e tecnologia em um só lugar.</p>
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
      <h2 className="mt-4 text-3xl md:text-5xl font-bold leading-[1.1] tracking-tight">{title}</h2>
      {sub && <p className={`mt-5 text-lg text-muted-foreground ${align === "center" ? "max-w-2xl mx-auto" : ""}`}>{sub}</p>}
    </div>
  );
}
