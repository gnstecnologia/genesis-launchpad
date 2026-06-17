import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Building2,
  MapPin,
  ChevronDown,
  ArrowRight,
  Brain,
  Target,
  Video,
  Palette,
  Megaphone,
  Cpu,
  CheckCircle2,
  XCircle,
  Rocket,
  Shield,
  Calendar,
  TrendingUp,
  Users,
  Bot,
  Zap,
  Star,
  Clock,
  FileCheck,
  Lock,
  BarChart3,
  Sparkles,
} from "lucide-react";

/* ============================================================
   CONFIGURAÇÃO DA PROPOSTA — edite aqui para cada cliente
   ============================================================ */
const PROPOSTA = {
  cliente: "Nome do Cliente",
  empresa: "Empresa do Cliente",
  data: "Junho de 2026",
  validade: "15 dias",
  consultor: "Douglas Martins",
  whatsapp: "5521996526969",

  // Estrutura física — edite endereço, destaque e fotos do escritório.
  // Salve as fotos em /public/escritorio (ex: /escritorio/foto-1.jpg) e
  // preencha o array fotos. Slots vazios aparecem como "foto em breve".
  escritorio: {
    endereco: "Edite o endereço em PROPOSTA.escritorio",
    cidade: "Rio de Janeiro — RJ",
    mapsQuery: "Genesis Company, Rio de Janeiro",
    destaques: [
      "Estúdio próprio para gravações e podcasts",
      "Ilhas de edição e pós-produção",
      "Sala de reunião para receber clientes",
      "Time completo trabalhando no mesmo lugar",
    ],
    fotos: ["", "", "", ""],
  },

  // Depoimentos em vídeo — quando receber os vídeos, salve em /public/videos
  // e preencha o videoSrc (ex: "/videos/depoimento-1.mp4"). Slots sem videoSrc
  // aparecem como "em breve" — remova ou adicione slots conforme necessário.
  depoimentos: [
    {
      nome: "Pello Menos",
      empresa: "Rede de depilação",
      frase: "A Genesis transformou nosso marketing em uma máquina de vendas.",
      videoSrc: "/videos/depoimento-pello-menos.mp4",
    },
    {
      nome: "Rubi Laser",
      empresa: "Depilação a laser",
      frase: "Hoje temos previsibilidade comercial todos os meses.",
      videoSrc: "/videos/depoimento-rubi-laser.mp4",
    },
    {
      nome: "Dr. Eduardo Balbino",
      empresa: "Odontologia · Recreio dos Bandeirantes",
      frase: "O time funciona como um departamento dentro da nossa empresa.",
      videoSrc: "/videos/depoimento-dr-eduardo-balbino.mp4",
    },
  ],

  // Planos de investimento — ajuste valores e escopo por negociação
  planos: [
    {
      nome: "Essencial",
      valor: "R$ 4.900",
      periodo: "/mês",
      destaque: false,
      descricao: "Para estruturar a base do marketing e gerar as primeiras oportunidades.",
      itens: [
        "Estratégia mensal de marketing",
        "Gestão de tráfego pago (Meta Ads)",
        "Social media — 12 posts/mês",
        "Identidade e linha editorial",
        "Relatório mensal de resultados",
        "Reunião mensal de alinhamento",
      ],
      naoIncluso: ["Produção audiovisual em campo", "CRM, IA e automação"],
    },
    {
      nome: "Crescimento",
      valor: "R$ 7.900",
      periodo: "/mês",
      destaque: true,
      selo: "Mais escolhido",
      descricao: "O departamento completo: marca, conteúdo, tráfego e comercial conectados.",
      itens: [
        "Tudo do plano Essencial",
        "Tráfego pago multicanal (Meta + Google)",
        "Produção audiovisual — 1 diária/mês",
        "Social media — 20 posts/mês + reels",
        "CRM implementado + automação de leads",
        "Dashboard de resultados em tempo real",
        "Account Manager dedicado",
      ],
      naoIncluso: ["Atendimento comercial com IA"],
    },
    {
      nome: "Premium",
      valor: "R$ 12.900",
      periodo: "/mês",
      destaque: false,
      descricao: "Operação completa de marketing, tecnologia e vendas com IA.",
      itens: [
        "Tudo do plano Crescimento",
        "Produção audiovisual — 2 diárias/mês",
        "Atendimento e qualificação com IA",
        "Consultoria comercial para o time de vendas",
        "Campanhas sazonais e lançamentos",
        "Reuniões quinzenais de estratégia",
        "Prioridade total de atendimento",
      ],
      naoIncluso: [],
    },
  ],
};
/* ============================================================ */

export const Route = createFileRoute("/proposta")({
  head: () => ({
    meta: [
      { title: `Proposta Comercial — Genesis Company × ${PROPOSTA.empresa}` },
      {
        name: "description",
        content:
          "Proposta comercial Genesis Company: estratégia, tráfego, audiovisual, marca, tecnologia e vendas conectados para crescimento previsível.",
      },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: PropostaPage,
});

function PropostaPage() {
  return (
    <div className="min-h-screen text-foreground overflow-x-hidden">
      <Capa />
      <LogosMarquee />
      <CartaAbertura />
      <DiagnosticoSection />
      <SolucaoSection />
      <TimeSection />
      <EscopoSection />
      <AudiovisualShowcase />
      <CronogramaSection />
      <MetodologiaSection />
      <ProvaSocialSection />
      <DepoimentosSection />
      <EstruturaSection />
      <ComparativoSection />
      <InvestimentoSection />
      <GarantiasSection />
      <FAQPropostaSection />
      <ProximosPassosSection />
      <FooterProposta />
    </div>
  );
}

/* ---------------- CAPA ---------------- */
function Capa() {
  return (
    <section className="relative min-h-[88vh] flex flex-col items-center justify-center px-5 py-20 text-center">
      {/* Ambient glows */}
      <div
        className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full opacity-60 blur-3xl"
        style={{ background: "radial-gradient(closest-side, oklch(0.58 0.24 264 / 0.45), transparent)" }}
      />
      <div
        className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-[500px] rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(closest-side, oklch(0.62 0.23 258 / 0.4), transparent)" }}
      />

      <div className="relative animate-fade-up">
        <img src="/genesis-logo-white.png" alt="Genesis Company" className="h-14 w-14 mx-auto" />
        <p className="mt-6 text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Proposta Comercial · {PROPOSTA.data}
        </p>
        <h1 className="mt-5 text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] max-w-3xl">
          Um plano para transformar a{" "}
          <span className="gradient-text">{PROPOSTA.empresa}</span> em uma máquina de{" "}
          <span className="gradient-text">oportunidades e vendas</span>.
        </h1>
        <p className="mt-5 text-sm sm:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
          Estratégia, tráfego pago, audiovisual, marca, tecnologia e vendas — operando como um único
          departamento dentro da sua empresa.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <span className="chip">
            <FileCheck className="h-3.5 w-3.5" /> Preparada para {PROPOSTA.cliente}
          </span>
          <span className="chip">
            <Clock className="h-3.5 w-3.5" /> Válida por {PROPOSTA.validade}
          </span>
          <span className="chip">
            <Lock className="h-3.5 w-3.5" /> Confidencial
          </span>
        </div>

        <div className="mt-10">
          <a href="#investimento" className="btn-primary text-sm">
            Ver investimento <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* Marquee de vídeos dos cases */}
      <div className="relative mt-14 w-full animate-fade-up">
        <VideoCasesMarquee />
      </div>
    </section>
  );
}

/* ---------------- VIDEO CASES MARQUEE ---------------- */
function VideoCasesMarquee() {
  const cards = [
    { tag: "Tráfego Pago", title: "André Venum Wine", value: "+1.000%", kpi: "criação de marca", hue: "from-fuchsia-500/50 via-purple-600/40 to-indigo-700/50", videoSrc: "/videos/video-1-André.mp4" },
    { tag: "Audiovisual", title: "Venum Brasil", value: "1.1M", kpi: "+78% alcance", hue: "from-red-500/50 via-orange-500/40 to-yellow-500/50", videoSrc: "/videos/video-2-Venum.mp4" },
    { tag: "Audiovisual", title: "Venum Brasil", value: "760K", kpi: "+124% engajamento", hue: "from-orange-500/50 via-red-600/40 to-rose-700/50", videoSrc: "/videos/video-3-Venum.mp4" },
    { tag: "Redes Sociais", title: "Big Man Barbearia", value: "+2.5k", kpi: "+300% crescimento", hue: "from-violet-500/50 via-blue-500/40 to-cyan-500/50", videoSrc: "/videos/video-4-Big-Man.mp4" },
    { tag: "Tráfego Pago", title: "Cocó King", value: "ROAS 10x", kpi: "+67% delivery", hue: "from-emerald-500/50 via-green-600/40 to-teal-700/50", videoSrc: "/videos/video-9-Coco-King.mp4" },
    { tag: "Audiovisual", title: "Gauro Pizzas", value: "+400%", kpi: "3 unidades abertas", hue: "from-yellow-500/50 via-amber-500/40 to-orange-600/50", videoSrc: "/videos/video-6-Gauro.mp4" },
    { tag: "Redes Sociais", title: "Big Woman Esmalteria", value: "+120%", kpi: "+engajamento", hue: "from-pink-500/50 via-rose-500/40 to-fuchsia-600/50", videoSrc: "/videos/video-7-Big-Woman.mp4" },
    { tag: "Tráfego Pago", title: "Wanderlei Silva", value: "2.1M", kpi: "+194% engajamento", hue: "from-blue-500/50 via-indigo-500/40 to-violet-600/50", videoSrc: "/videos/video-8-Wanderlei-Silva.mp4" },
  ];
  const loop = [...cards, ...cards];
  return (
    <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
      <div className="flex gap-3 w-max animate-marquee py-1 px-2">
        {loop.map((c, i) => (
          <div key={i} className="shrink-0 w-[34vw] max-w-[150px] sm:w-[160px] aspect-[9/15] relative rounded-xl overflow-hidden glass-strong">
            <div className={`absolute inset-0 bg-gradient-to-br ${c.hue}`} />
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
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" style={{ zIndex: 2 }} />
            <div className="absolute top-1.5 left-1.5" style={{ zIndex: 3 }}>
              <span className="inline-flex items-center gap-1 rounded-full bg-white/95 text-black text-[9px] font-semibold px-1.5 py-0.5">
                <Video className="h-2 w-2" /> {c.tag}
              </span>
            </div>
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

/* ---------------- LOGOS MARQUEE ---------------- */
function LogosMarquee() {
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
              <img src={c.logo} alt={c.name} className="h-10 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- CARTA DE ABERTURA ---------------- */
function CartaAbertura() {
  return (
    <section className="mx-auto max-w-3xl px-5 pb-10">
      <div className="glass-strong rounded-3xl p-7 md:p-10 relative overflow-hidden">
        <div
          className="absolute -top-24 -right-24 h-48 w-48 rounded-full blur-3xl opacity-40"
          style={{ background: "var(--gradient-brand)" }}
        />
        <div className="relative">
          <span className="chip">
            <Sparkles className="h-3.5 w-3.5" /> Por que esta proposta existe
          </span>
          <p className="mt-5 text-[14px] md:text-base leading-relaxed text-foreground/90">
            Olá, <strong>{PROPOSTA.cliente}</strong>.
          </p>
          <p className="mt-3 text-[14px] md:text-base leading-relaxed text-muted-foreground">
            Esta proposta foi construída a partir do diagnóstico que fizemos do momento atual da{" "}
            <strong className="text-foreground">{PROPOSTA.empresa}</strong>. Ela não é um pacote
            genérico: é um plano de crescimento desenhado para conectar a sua marca, o seu conteúdo e
            o seu comercial em um único processo — com metas claras, entregas definidas e
            acompanhamento mensal.
          </p>
          <p className="mt-3 text-[14px] md:text-base leading-relaxed text-muted-foreground">
            Nosso compromisso é simples: fazer o marketing deixar de ser um custo imprevisível e se
            tornar o motor de crescimento da empresa.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <img src="/genesis-logo-white.png" alt="" className="h-9 w-9" />
            <div>
              <div className="text-sm font-semibold">{PROPOSTA.consultor}</div>
              <div className="text-xs text-muted-foreground">Genesis Company</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- DIAGNÓSTICO ---------------- */
function DiagnosticoSection() {
  const antes = [
    "Marketing sem direção estratégica",
    "Campanhas soltas, sem objetivo comercial",
    "Leads chegando sem acompanhamento",
    "Marca pouco valorizada na comunicação",
    "Comercial sem previsibilidade de resultado",
  ];
  const depois = [
    "Estratégia mensal clara e documentada",
    "Campanhas conectadas à meta de vendas",
    "CRM, IA e comercial integrados",
    "Marca forte, lembrada e desejada",
    "Crescimento previsível, mês após mês",
  ];
  return (
    <section className="section-pad mx-auto max-w-7xl px-5">
      <HeadingProposta
        chip="01 · Diagnóstico"
        title={
          <>
            Onde sua empresa está — e onde ela{" "}
            <span className="gradient-text">pode chegar</span>
          </>
        }
        sub="O problema raramente está no produto. Está em como a empresa se posiciona, se comunica e transforma interesse em venda. É exatamente esse processo que vamos organizar."
      />
      <div className="mt-12 grid lg:grid-cols-2 gap-5">
        <div className="glass rounded-3xl p-7 opacity-90">
          <span className="chip">Cenário atual</span>
          <h3 className="mt-4 text-lg font-bold text-muted-foreground">Marketing improvisado</h3>
          <ul className="mt-5 space-y-3">
            {antes.map((b) => (
              <li key={b} className="flex items-start gap-3 text-[13px] text-muted-foreground">
                <XCircle className="h-5 w-5 shrink-0 text-destructive/70 mt-0.5" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
        <div
          className="relative rounded-3xl p-7 overflow-hidden gradient-border"
          style={{ boxShadow: "var(--shadow-glow)" }}
        >
          <div className="absolute inset-0" style={{ background: "var(--gradient-brand-soft)" }} />
          <div className="relative">
            <span
              className="chip"
              style={{ background: "var(--gradient-brand)", color: "var(--background)", border: "none" }}
            >
              <Rocket className="h-3.5 w-3.5" /> Com a Genesis
            </span>
            <h3 className="mt-4 text-lg font-bold">Crescimento previsível</h3>
            <ul className="mt-5 space-y-3">
              {depois.map((a) => (
                <li key={a} className="flex items-start gap-3 text-[13px]">
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

/* ---------------- SOLUÇÃO ---------------- */
function SolucaoSection() {
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
          <HeadingProposta
            chip="02 · A solução"
            title={
              <>
                Não é uma agência. É um{" "}
                <span className="gradient-text">departamento de marketing</span> dentro da{" "}
                {PROPOSTA.empresa}.
              </>
            }
            sub="Sete frentes integradas operando como um único time: enquanto você foca na gestão, a Genesis estrutura o marketing para gerar clareza, posicionamento e oportunidades comerciais todos os meses."
          />
        </div>
        <div className="relative aspect-square max-w-lg w-full mx-auto">
          <div
            className="absolute inset-0 rounded-full blur-3xl opacity-40"
            style={{ background: "var(--gradient-brand)" }}
          />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="glass-strong h-28 w-28 rounded-full grid place-items-center">
              <div className="text-center">
                <img src="/genesis-logo-white.png" alt="Genesis" className="h-8 w-8 mx-auto" />
                <div className="text-xs mt-1 font-bold">Genesis</div>
              </div>
            </div>
          </div>
          {nodes.map((n, i) => {
            const angle = (i / nodes.length) * Math.PI * 2 - Math.PI / 2;
            const r = 42;
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
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
            {nodes.map((_, i) => {
              const angle = (i / nodes.length) * Math.PI * 2 - Math.PI / 2;
              const r = 38;
              const x = 50 + r * Math.cos(angle);
              const y = 50 + r * Math.sin(angle);
              return (
                <line
                  key={i}
                  x1="50"
                  y1="50"
                  x2={x}
                  y2={y}
                  stroke="oklch(1 0 0 / 0.08)"
                  strokeWidth="0.3"
                  strokeDasharray="1 1"
                />
              );
            })}
          </svg>
        </div>
      </div>
    </section>
  );
}

/* ---------------- TIME DEDICADO ---------------- */
function TimeSection() {
  const papeis = [
    { icon: Brain, cargo: "Estrategista", funcao: "Direciona o plano mensal e conecta cada ação ao objetivo comercial." },
    { icon: Target, cargo: "Gestor de tráfego", funcao: "Gerencia campanhas e verba para gerar leads qualificados." },
    { icon: Palette, cargo: "Designer", funcao: "Materializa a marca em criativos, anúncios e materiais." },
    { icon: Video, cargo: "Videomaker", funcao: "Captura e edita conteúdos que geram autoridade e desejo." },
    { icon: Megaphone, cargo: "Copywriter / Social", funcao: "Escreve para vender: anúncios, legendas e roteiros." },
    { icon: BarChart3, cargo: "Analista de dados", funcao: "Mede tudo e transforma número em decisão." },
    { icon: Users, cargo: "Account Manager", funcao: "Seu ponto de contato direto, do kickoff ao resultado." },
  ];
  return (
    <section className="section-pad mx-auto max-w-7xl px-5">
      <HeadingProposta
        chip="03 · Time dedicado"
        title={
          <>
            As pessoas que vão cuidar da <span className="gradient-text">{PROPOSTA.empresa}</span>
          </>
        }
        sub="Contratar esse time internamente custaria R$ 25–40 mil/mês em salários, mais encargos, processo seletivo e treinamento. Com a Genesis, você tem todos em um único contrato."
      />
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {papeis.map((p) => (
          <div key={p.cargo} className="glass rounded-2xl p-5 hover:-translate-y-1 transition-all duration-300">
            <div
              className="h-11 w-11 rounded-xl grid place-items-center"
              style={{ background: "var(--gradient-brand-soft)", border: "1px solid oklch(1 0 0 / 0.1)" }}
            >
              <p.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-semibold text-[15px]">{p.cargo}</h3>
            <p className="mt-1.5 text-[13px] text-muted-foreground leading-relaxed">{p.funcao}</p>
          </div>
        ))}
        <div
          className="relative rounded-2xl p-5 overflow-hidden gradient-border flex flex-col justify-center"
          style={{ boxShadow: "var(--shadow-glow)" }}
        >
          <div className="absolute inset-0" style={{ background: "var(--gradient-brand-soft)" }} />
          <div className="relative">
            <div className="text-2xl font-bold gradient-text">7 especialistas</div>
            <p className="mt-1.5 text-[13px] text-foreground/90 leading-relaxed">
              trabalhando na sua conta — sem encargos, sem seleção, sem treinamento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- ESCOPO ---------------- */
function EscopoSection() {
  const frentes = [
    {
      icon: Brain,
      title: "Estratégia de marketing",
      tag: "Direção",
      itens: [
        "Planejamento mensal documentado",
        "Campanhas comerciais e sazonais",
        "Posicionamento e mensagem da marca",
      ],
    },
    {
      icon: Target,
      title: "Tráfego pago e performance",
      tag: "Demanda",
      itens: [
        "Campanhas Meta Ads e Google Ads",
        "Otimização semanal de verba e criativos",
        "Leads qualificados para o comercial",
      ],
    },
    {
      icon: Video,
      title: "Produção audiovisual",
      tag: "Autoridade",
      itens: [
        "Diárias de gravação profissional",
        "Edição de reels, anúncios e institucionais",
        "Conteúdo que gera desejo e confiança",
      ],
    },
    {
      icon: Palette,
      title: "Gestão de marca",
      tag: "Percepção",
      itens: [
        "Identidade visual aplicada com consistência",
        "Comunicação clara e memorável",
        "Diferenciação frente à concorrência",
      ],
    },
    {
      icon: Megaphone,
      title: "Social media e conteúdo",
      tag: "Presença",
      itens: [
        "Linha editorial estratégica",
        "Calendário de postagens com intenção comercial",
        "Relacionamento e reputação digital",
      ],
    },
    {
      icon: Cpu,
      title: "Tecnologia, IA e automação",
      tag: "Eficiência",
      itens: [
        "CRM implementado e organizado",
        "Qualificação automática de leads",
        "Automação do processo comercial",
      ],
    },
  ];
  return (
    <section id="escopo" className="section-pad mx-auto max-w-7xl px-5">
      <HeadingProposta
        chip="04 · Escopo de trabalho"
        title={
          <>
            O que entregamos, <span className="gradient-text">frente a frente</span>
          </>
        }
        sub="Cada frente tem entregas claras e mensuráveis. O escopo exato de cada plano está detalhado na seção de investimento."
      />
      <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {frentes.map((s) => (
          <article
            key={s.title}
            className="group relative glass rounded-2xl p-6 overflow-hidden hover:-translate-y-1.5 transition-all duration-300 hover:border-white/25"
          >
            <div
              className="absolute -top-24 -right-24 h-48 w-48 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity"
              style={{ background: "var(--gradient-brand)" }}
            />
            <div className="relative">
              <div className="flex items-center justify-between">
                <div
                  className="h-12 w-12 rounded-xl grid place-items-center"
                  style={{ background: "var(--gradient-brand-soft)", border: "1px solid oklch(1 0 0 / 0.1)" }}
                >
                  <s.icon className="h-5 w-5" />
                </div>
                <span className="chip">{s.tag}</span>
              </div>
              <h3 className="mt-5 font-semibold text-base">{s.title}</h3>
              <ul className="mt-3 space-y-2">
                {s.itens.map((i) => (
                  <li key={i} className="flex items-start gap-2 text-[13px] text-muted-foreground leading-relaxed">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-success mt-0.5" />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ---------------- AUDIOVISUAL SHOWCASE ---------------- */
function PhoneMockup({ videoSrc }: { videoSrc: string }) {
  return (
    <div className="w-[170px] sm:w-[220px] flex-shrink-0" style={{ filter: "drop-shadow(0 30px 70px oklch(0 0 0 / 0.8))" }}>
      <div className="rounded-[2.2rem] border-[6px] border-white/15 bg-black overflow-hidden">
        <div className="relative aspect-[9/16]">
          <video src={videoSrc} autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
}

function AudiovisualShowcase() {
  return (
    <section className="section-pad relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 90% 70% at 50% 50%, oklch(0.58 0.24 264 / 0.12), transparent)" }}
      />
      <div className="relative mx-auto max-w-7xl px-5">
        <HeadingProposta
          chip="Padrão de entrega"
          title={
            <>
              É esse nível de conteúdo que a {PROPOSTA.empresa}{" "}
              <span className="gradient-text">vai receber</span>
            </>
          }
          sub="Produção audiovisual profissional que transforma marca em autoridade e seguidores em clientes reais."
        />
        <div className="mt-14 flex justify-center items-end gap-5 sm:gap-10">
          <div style={{ transform: "rotate(-4deg) translateY(12px)" }}>
            <PhoneMockup videoSrc="/videos/showcase-1.mp4" />
          </div>
          <div style={{ transform: "rotate(4deg) translateY(12px)" }}>
            <PhoneMockup videoSrc="/videos/showcase-2.mp4" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- CRONOGRAMA 90 DIAS ---------------- */
function CronogramaSection() {
  const fases = [
    {
      n: "01",
      periodo: "Dias 1–30",
      icon: Target,
      t: "Fundação",
      itens: [
        "Imersão no negócio e diagnóstico completo",
        "Estratégia, posicionamento e linha editorial",
        "Setup de campanhas, CRM e dashboard",
        "Primeiras campanhas no ar",
      ],
    },
    {
      n: "02",
      periodo: "Dias 31–60",
      icon: Zap,
      t: "Tração",
      itens: [
        "Otimização de campanhas com dados reais",
        "Produção audiovisual em ritmo de cruzeiro",
        "Leads fluindo para o comercial via CRM",
        "Primeiros resultados mensuráveis",
      ],
    },
    {
      n: "03",
      periodo: "Dias 61–90",
      icon: TrendingUp,
      t: "Escala",
      itens: [
        "Ampliação do que comprovadamente funciona",
        "Automação e IA refinando a qualificação",
        "Revisão estratégica do trimestre",
        "Plano de crescimento para os próximos 90 dias",
      ],
    },
  ];
  return (
    <section className="section-pad mx-auto max-w-7xl px-5">
      <HeadingProposta
        chip="05 · Cronograma"
        title={
          <>
            Os primeiros <span className="gradient-text">90 dias</span>, semana a semana
          </>
        }
        sub="Trabalhamos com quick wins para gerar impacto imediato enquanto construímos o crescimento sustentável."
      />
      <div className="mt-14 relative">
        <div
          className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-px"
          style={{ background: "linear-gradient(to right, transparent, oklch(1 0 0 / 0.2), transparent)" }}
        />
        <div className="grid lg:grid-cols-3 gap-6">
          {fases.map((s) => (
            <div key={s.n} className="relative glass-strong rounded-3xl p-7 hover:-translate-y-1 transition">
              <div className="flex items-center gap-4">
                <div
                  className="h-14 w-14 rounded-2xl grid place-items-center font-bold text-lg"
                  style={{ background: "var(--gradient-brand)", color: "var(--background)" }}
                >
                  {s.n}
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">{s.periodo}</div>
                  <h3 className="text-base font-bold">{s.t}</h3>
                </div>
              </div>
              <ul className="mt-5 space-y-2.5">
                {s.itens.map((i) => (
                  <li key={i} className="flex items-start gap-2.5 text-[13px] text-muted-foreground leading-relaxed">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-success mt-0.5" />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- METODOLOGIA / DIA A DIA ---------------- */
function MetodologiaSection() {
  const rituais = [
    { icon: Calendar, t: "Reunião mensal de resultados", d: "Apresentamos o que foi feito, o que funcionou e o plano do próximo mês — com dados, não opinião." },
    { icon: BarChart3, t: "Dashboard em tempo real", d: "Você acompanha campanhas, leads e investimento a qualquer momento, de qualquer lugar." },
    { icon: Zap, t: "Otimização semanal", d: "Verba, criativos e campanhas revisados toda semana para maximizar o retorno." },
    { icon: Shield, t: "Canal direto com o time", d: "Grupo exclusivo no WhatsApp com seu Account Manager e os especialistas da conta." },
  ];
  return (
    <section className="section-pad mx-auto max-w-7xl px-5">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <HeadingProposta
            align="left"
            chip="06 · Como será o dia a dia"
            title={
              <>
                Gestão transparente, com <span className="gradient-text">dados na mesa</span>
              </>
            }
            sub="Você nunca vai precisar perguntar 'o que a agência está fazendo'. A operação inteira fica visível, com rituais fixos de acompanhamento."
          />
          <div className="mt-8 space-y-4">
            {rituais.map((r) => (
              <div key={r.t} className="glass rounded-2xl p-5 flex gap-4 hover:-translate-y-0.5 transition">
                <div
                  className="h-11 w-11 rounded-xl grid place-items-center shrink-0"
                  style={{ background: "var(--gradient-brand-soft)", border: "1px solid oklch(1 0 0 / 0.1)" }}
                >
                  <r.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-[15px]">{r.t}</h3>
                  <p className="mt-1 text-[13px] text-muted-foreground leading-relaxed">{r.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="hidden lg:block">
          <DashboardComposition />
        </div>
      </div>
    </section>
  );
}

function DashboardComposition() {
  return (
    <div className="relative h-[420px]">
      <div className="glass-strong absolute top-0 left-0 w-[62%] rounded-2xl p-5 animate-float-slow">
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span className="flex items-center gap-2"><BarChart3 className="h-3.5 w-3.5" /> Campanhas ativas</span>
          <span className="text-success">+24%</span>
        </div>
        <div className="mt-2 text-3xl font-bold">R$ 184.320</div>
        <div className="text-xs text-muted-foreground">investidos este mês</div>
        <div className="mt-4 flex items-end gap-1 h-14">
          {[40, 65, 35, 80, 55, 90, 70, 95, 60, 88, 72, 100].map((h, i) => (
            <div key={i} className="flex-1 rounded-sm" style={{ height: `${h}%`, background: "var(--gradient-brand)", opacity: 0.6 + i * 0.03 }} />
          ))}
        </div>
      </div>
      <div className="glass-strong absolute top-4 right-0 w-[42%] rounded-2xl p-4 animate-float" style={{ animationDelay: "0.5s" }}>
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span className="flex items-center gap-2"><Users className="h-3.5 w-3.5" /> Leads gerados</span>
        </div>
        <div className="mt-2 text-2xl font-bold gradient-text">1.247</div>
        <div className="text-xs text-success mt-1">+38% vs mês anterior</div>
      </div>
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
      <div className="glass-strong absolute bottom-12 left-2 w-[50%] rounded-2xl p-4 animate-float-slow" style={{ animationDelay: "0.3s" }}>
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span className="flex items-center gap-2"><TrendingUp className="h-3.5 w-3.5" /> Crescimento comercial</span>
        </div>
        <div className="mt-2 text-2xl font-bold">+62%</div>
        <svg viewBox="0 0 100 30" className="mt-2 w-full h-8">
          <defs>
            <linearGradient id="lgp" x1="0" x2="1">
              <stop offset="0%" stopColor="oklch(0.58 0.24 264)" />
              <stop offset="100%" stopColor="oklch(0.66 0.21 252)" />
            </linearGradient>
          </defs>
          <path d="M0,25 Q20,20 30,18 T55,10 T100,4" fill="none" stroke="url(#lgp)" strokeWidth="2" />
        </svg>
      </div>
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
    </div>
  );
}

/* ---------------- PROVA SOCIAL ---------------- */
function ProvaSocialSection() {
  const stats = [
    { v: "+R$ 10M", l: "investidos em mídia" },
    { v: "+120", l: "marcas atendidas" },
    { v: "7 anos", l: "de mercado" },
    { v: "+50M", l: "impressões geradas" },
  ];
  const cases = [
    { nome: "André Venum Wine", metrica: "+1.000%", desc: "crescimento com criação de marca" },
    { nome: "Cocó King", metrica: "ROAS 10x", desc: "+67% no delivery com tráfego pago" },
    { nome: "Gauro Pizzas", metrica: "+400%", desc: "crescimento e 3 unidades abertas" },
    { nome: "Big Man Barbearia", metrica: "+2.5k", desc: "assinaturas e +300% de crescimento" },
    { nome: "Venum Brasil", metrica: "1.1M", desc: "views e +78% de alcance" },
    { nome: "Wanderlei Silva", metrica: "2.1M", desc: "alcance e +194% de engajamento" },
  ];
  return (
    <section className="section-pad mx-auto max-w-7xl px-5">
      <HeadingProposta
        chip="07 · Resultados comprovados"
        title={
          <>
            Quem confiou, <span className="gradient-text">cresceu</span>
          </>
        }
      />
      <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div key={s.l} className="glass rounded-2xl p-5 text-center hover:-translate-y-0.5 transition-transform">
            <div className="text-2xl sm:text-3xl font-bold gradient-text">{s.v}</div>
            <div className="text-[11px] sm:text-sm text-muted-foreground mt-1.5 leading-snug">{s.l}</div>
          </div>
        ))}
      </div>
      <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cases.map((c) => (
          <div key={c.nome} className="glass rounded-2xl p-5 flex items-center gap-4 hover:-translate-y-0.5 transition">
            <div
              className="h-11 w-11 rounded-xl grid place-items-center shrink-0"
              style={{ background: "var(--gradient-brand-soft)", border: "1px solid oklch(1 0 0 / 0.1)" }}
            >
              <Star className="h-5 w-5" />
            </div>
            <div>
              <div className="text-sm font-semibold">{c.nome}</div>
              <div className="text-[13px]">
                <span className="font-bold gradient-text">{c.metrica}</span>{" "}
                <span className="text-muted-foreground">{c.desc}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- DEPOIMENTOS EM VÍDEO ---------------- */
function DepoimentosSection() {
  return (
    <section className="section-pad mx-auto max-w-7xl px-5">
      <HeadingProposta
        chip="Na voz dos clientes"
        title={
          <>
            Quem vive a Genesis no dia a dia, <span className="gradient-text">conta como é</span>
          </>
        }
        sub="Depoimentos reais de quem confiou o marketing da empresa à Genesis Company."
      />
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
        {PROPOSTA.depoimentos.map((d, i) => (
          <div key={i} className="glass-strong rounded-2xl overflow-hidden hover:-translate-y-1 transition-all duration-300">
            <div className="relative aspect-[9/12] bg-gradient-to-br from-white/[0.04] to-transparent">
              {d.videoSrc ? (
                <video
                  src={d.videoSrc}
                  controls
                  playsInline
                  preload="metadata"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center px-5">
                  <div
                    className="h-14 w-14 rounded-full grid place-items-center animate-pulse-glow"
                    style={{ background: "var(--gradient-brand-soft)", border: "1px solid oklch(1 0 0 / 0.15)" }}
                  >
                    <Video className="h-6 w-6" />
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Vídeo de depoimento
                    <br />
                    <span className="opacity-60">em breve aqui</span>
                  </p>
                </div>
              )}
            </div>
            <div className="p-4">
              <div className="flex gap-0.5 mb-2">
                {[...Array(5)].map((_, s) => (
                  <Star key={s} className="h-3.5 w-3.5 fill-current" style={{ color: "oklch(0.8 0.16 85)" }} />
                ))}
              </div>
              <p className="text-[13px] leading-relaxed text-foreground/90">"{d.frase}"</p>
              <div className="mt-3 text-xs">
                <span className="font-semibold">{d.nome}</span>
                <span className="text-muted-foreground"> · {d.empresa}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- ESTRUTURA FÍSICA + LOCALIZAÇÃO ---------------- */
function EstruturaSection() {
  const { escritorio } = PROPOSTA;
  return (
    <section className="section-pad mx-auto max-w-7xl px-5">
      <HeadingProposta
        chip="08 · Nossa estrutura"
        title={
          <>
            Uma operação de verdade, com <span className="gradient-text">estrutura própria</span>
          </>
        }
        sub="A Genesis não é um freelancer nem um time remoto improvisado. É uma empresa com sede, estúdio e equipe trabalhando juntos todos os dias."
      />

      {/* Galeria de fotos do escritório */}
      <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4">
        {escritorio.fotos.map((foto, i) => (
          <div key={i} className="relative aspect-[4/3] rounded-2xl overflow-hidden glass-strong">
            {foto ? (
              <img src={foto} alt={`Escritório Genesis Company ${i + 1}`} className="absolute inset-0 h-full w-full object-cover" />
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-white/[0.04] to-transparent">
                <div
                  className="h-12 w-12 rounded-full grid place-items-center animate-pulse-glow"
                  style={{ background: "var(--gradient-brand-soft)", border: "1px solid oklch(1 0 0 / 0.15)" }}
                >
                  <Building2 className="h-5 w-5" />
                </div>
                <p className="text-[11px] text-muted-foreground">Foto do escritório</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Destaques + Localização */}
      <div className="mt-6 grid lg:grid-cols-2 gap-5">
        <div className="glass rounded-3xl p-7">
          <span className="chip">
            <Building2 className="h-3.5 w-3.5" /> O que você encontra aqui
          </span>
          <ul className="mt-5 space-y-3">
            {escritorio.destaques.map((d) => (
              <li key={d} className="flex items-start gap-3 text-[13px]">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-success mt-0.5" />
                <span className="text-foreground/90">{d}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-[13px] text-muted-foreground leading-relaxed">
            Clientes são sempre bem-vindos: venha tomar um café, gravar conteúdo no nosso estúdio ou
            acompanhar uma reunião de resultados ao vivo.
          </p>
        </div>
        <div className="glass rounded-3xl p-7 flex flex-col">
          <span className="chip">
            <MapPin className="h-3.5 w-3.5" /> Onde estamos
          </span>
          <div className="mt-4">
            <div className="text-base font-semibold">{escritorio.cidade}</div>
            <div className="text-[13px] text-muted-foreground mt-1">{escritorio.endereco}</div>
            <div className="mt-2 text-[12px] text-muted-foreground flex items-center gap-1.5">
              <Sparkles className="h-3 w-3" /> Atendemos clientes em todo o Brasil
            </div>
          </div>
          <div className="mt-5 flex-1 min-h-[220px] rounded-2xl overflow-hidden border border-white/10">
            <iframe
              title="Localização Genesis Company"
              src={`https://www.google.com/maps?q=${encodeURIComponent(escritorio.mapsQuery)}&output=embed`}
              className="w-full h-full min-h-[220px]"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(0.9)" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- COMPARATIVO ---------------- */
function ComparativoSection() {
  const opcoes = [
    {
      titulo: "Montar time interno",
      destaque: false,
      pontos: [
        { ok: false, t: "R$ 25–40 mil/mês + encargos trabalhistas" },
        { ok: false, t: "3–6 meses para contratar e treinar" },
        { ok: false, t: "Risco de turnover e recomeço do zero" },
        { ok: false, t: "Equipamento e ferramentas por sua conta" },
        { ok: true, t: "Time 100% dedicado à empresa" },
      ],
    },
    {
      titulo: "Agência tradicional",
      destaque: false,
      pontos: [
        { ok: true, t: "Custo menor que time interno" },
        { ok: false, t: "Entrega posts e anúncios, não estratégia" },
        { ok: false, t: "Sem conexão com o seu comercial" },
        { ok: false, t: "Atendimento distante, fila de demandas" },
        { ok: false, t: "Relatório de métricas de vaidade" },
      ],
    },
    {
      titulo: "Genesis Company",
      destaque: true,
      pontos: [
        { ok: true, t: "7 especialistas por fração do custo interno" },
        { ok: true, t: "Operação no ar em até 7 dias úteis" },
        { ok: true, t: "Marketing conectado a CRM, IA e vendas" },
        { ok: true, t: "Account Manager e canal direto com o time" },
        { ok: true, t: "Relatórios de impacto comercial real" },
      ],
    },
  ];
  return (
    <section className="section-pad mx-auto max-w-7xl px-5">
      <HeadingProposta
        chip="09 · Por que a Genesis"
        title={
          <>
            Compare os caminhos antes de <span className="gradient-text">decidir</span>
          </>
        }
      />
      <div className="mt-12 grid md:grid-cols-3 gap-5">
        {opcoes.map((o) => (
          <div
            key={o.titulo}
            className={o.destaque ? "relative rounded-3xl p-7 gradient-border" : "glass rounded-3xl p-7 opacity-90"}
            style={o.destaque ? { boxShadow: "var(--shadow-glow)" } : undefined}
          >
            {o.destaque && (
              <div className="absolute inset-0 rounded-3xl pointer-events-none" style={{ background: "var(--gradient-brand-soft)" }} />
            )}
            <div className="relative">
              <h3 className={o.destaque ? "text-lg font-bold gradient-text" : "text-lg font-bold text-muted-foreground"}>
                {o.titulo}
              </h3>
              <ul className="mt-5 space-y-3">
                {o.pontos.map((p) => (
                  <li key={p.t} className="flex items-start gap-3 text-[13px]">
                    {p.ok ? (
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-success mt-0.5" />
                    ) : (
                      <XCircle className="h-5 w-5 shrink-0 text-destructive/70 mt-0.5" />
                    )}
                    <span className={p.ok ? "text-foreground/90" : "text-muted-foreground"}>{p.t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- INVESTIMENTO ---------------- */
function InvestimentoSection() {
  return (
    <section id="investimento" className="section-pad mx-auto max-w-7xl px-5">
      <HeadingProposta
        chip="10 · Investimento"
        title={
          <>
            Escolha o ritmo do seu <span className="gradient-text">crescimento</span>
          </>
        }
        sub={`Valores válidos por ${PROPOSTA.validade} a partir da data desta proposta. Contrato mínimo de 3 meses — tempo necessário para o ciclo completo de fundação, tração e escala.`}
      />
      <div className="mt-12 grid md:grid-cols-3 gap-5 items-stretch">
        {PROPOSTA.planos.map((p) => (
          <div
            key={p.nome}
            className={
              p.destaque
                ? "relative rounded-3xl p-7 gradient-border flex flex-col"
                : "relative glass rounded-3xl p-7 flex flex-col"
            }
            style={p.destaque ? { boxShadow: "var(--shadow-glow)" } : undefined}
          >
            {p.destaque && (
              <div className="absolute inset-0 rounded-3xl pointer-events-none" style={{ background: "var(--gradient-brand-soft)" }} />
            )}
            <div className="relative flex flex-col flex-1">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold">{p.nome}</h3>
                {p.destaque && (
                  <span
                    className="chip"
                    style={{ background: "var(--gradient-brand)", color: "var(--background)", border: "none" }}
                  >
                    <Star className="h-3 w-3" /> {p.selo}
                  </span>
                )}
              </div>
              <p className="mt-2 text-[13px] text-muted-foreground leading-relaxed min-h-[3.2rem]">{p.descricao}</p>
              <div className="mt-4 flex items-end gap-1">
                <span className="text-3xl font-bold gradient-text">{p.valor}</span>
                <span className="text-sm text-muted-foreground mb-1">{p.periodo}</span>
              </div>
              <div className="mt-5 h-px bg-white/10" />
              <ul className="mt-5 space-y-2.5 flex-1">
                {p.itens.map((i) => (
                  <li key={i} className="flex items-start gap-2.5 text-[13px] leading-relaxed">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-success mt-0.5" />
                    <span className="text-foreground/90">{i}</span>
                  </li>
                ))}
                {p.naoIncluso.map((i) => (
                  <li key={i} className="flex items-start gap-2.5 text-[13px] leading-relaxed opacity-50">
                    <XCircle className="h-4 w-4 shrink-0 mt-0.5" />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
              <a
                href={waLink(`Olá! Quero avançar com o plano ${p.nome} da proposta da Genesis Company.`)}
                target="_blank"
                rel="noopener noreferrer"
                className={p.destaque ? "btn-primary w-full mt-7 !text-[13px]" : "btn-ghost w-full mt-7 justify-center !text-[13px]"}
              >
                Quero o plano {p.nome} <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-6 text-center text-[12px] text-muted-foreground">
        * A verba de mídia (investimento em anúncios) é definida em conjunto e paga diretamente às plataformas — 100% do
        valor vira anúncio, sem taxa sobre a verba.
      </p>
    </section>
  );
}

/* ---------------- GARANTIAS / COMO OPERAMOS ---------------- */
function GarantiasSection() {
  const compromissos = [
    { icon: Shield, t: "Transparência total", d: "Dashboard de resultados em tempo real e relatórios mensais com dados reais de impacto comercial." },
    { icon: Users, t: "Time dedicado", d: "Account Manager exclusivo e acesso direto ao time de especialistas — sem telefone sem fio." },
    { icon: Calendar, t: "Cadência de gestão", d: "Reuniões mensais de resultado e planejamento trimestral de campanhas e conteúdo." },
    { icon: BarChart3, t: "Foco em resultado", d: "Cada entrega conectada a um objetivo comercial. Marketing que não gera oportunidade é custo." },
  ];
  return (
    <section className="section-pad mx-auto max-w-7xl px-5">
      <HeadingProposta
        chip="11 · Nossos compromissos"
        title={
          <>
            O que você pode <span className="gradient-text">cobrar de nós</span>
          </>
        }
      />
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {compromissos.map((c) => (
          <div key={c.t} className="glass rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300">
            <div className="h-11 w-11 rounded-xl grid place-items-center" style={{ background: "var(--gradient-brand-soft)" }}>
              <c.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-semibold text-base">{c.t}</h3>
            <p className="mt-1.5 text-[13px] text-muted-foreground leading-relaxed">{c.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- FAQ DA PROPOSTA ---------------- */
function FAQPropostaSection() {
  const [open, setOpen] = useState<number | null>(null);
  const items = [
    {
      q: "Existe contrato de fidelidade?",
      a: "Trabalhamos com contrato mínimo de 3 meses — o tempo necessário para completar o ciclo de fundação, tração e escala. Depois disso, a renovação é mensal. Nosso objetivo é que você fique pelos resultados, não pela multa.",
    },
    {
      q: "A verba de anúncios está inclusa no valor do plano?",
      a: "Não. A verba de mídia é definida em conjunto, de acordo com a meta, e paga por você diretamente às plataformas (Meta, Google). 100% do valor vira anúncio — não cobramos taxa sobre a verba.",
    },
    {
      q: "O que vocês precisam de mim para começar?",
      a: "Acesso às contas (redes sociais, gerenciador de anúncios, site), um ponto de contato na empresa e participação no kickoff e nas reuniões mensais. O resto é com a gente.",
    },
    {
      q: "Em quanto tempo vejo os primeiros resultados?",
      a: "Os primeiros resultados costumam aparecer entre 30 e 90 dias, dependendo do ponto de partida. Trabalhamos com quick wins para gerar impacto imediato enquanto construímos o crescimento sustentável.",
    },
    {
      q: "Como vou acompanhar o que está sendo feito?",
      a: "Dashboard atualizado em tempo real, relatórios mensais, reunião mensal de resultados e um grupo direto no WhatsApp com o time da sua conta. Transparência total, sempre.",
    },
    {
      q: "Posso mudar de plano depois?",
      a: "Sim. Você pode fazer upgrade a qualquer momento e ajustar o plano na renovação. Conforme a operação cresce, é natural evoluir o escopo junto.",
    },
  ];
  return (
    <section className="section-pad mx-auto max-w-2xl px-5">
      <HeadingProposta
        chip="Dúvidas frequentes"
        title="Perguntas que todo cliente faz antes de fechar"
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

/* ---------------- PRÓXIMOS PASSOS ---------------- */
function ProximosPassosSection() {
  return (
    <section className="section-pad mx-auto max-w-6xl px-5">
      <div className="relative overflow-hidden rounded-3xl p-8 md:p-14 glass-strong">
        <div
          className="absolute -top-40 -left-32 h-[400px] w-[400px] rounded-full blur-3xl opacity-50"
          style={{ background: "var(--gradient-brand)" }}
        />
        <div
          className="absolute -bottom-40 -right-32 h-[400px] w-[400px] rounded-full blur-3xl opacity-40"
          style={{ background: "radial-gradient(closest-side, oklch(0.62 0.23 258 / 0.6), transparent)" }}
        />
        <div className="relative grid lg:grid-cols-[1.2fr_1fr] gap-10 items-center">
          <div className="text-center lg:text-left">
            <span className="chip">
              <Clock className="h-3.5 w-3.5" /> Proposta válida por {PROPOSTA.validade}
            </span>
            <h2 className="mt-3 text-[1.55rem] md:text-4xl font-bold leading-[1.12]">
              Pronto para dar o próximo passo, <span className="gradient-text">{PROPOSTA.cliente}?</span>
            </h2>
            <p className="mt-3 text-[13px] md:text-base text-muted-foreground max-w-xl leading-relaxed mx-auto lg:mx-0">
              Ao confirmar o aceite, agendamos a reunião de kickoff e sua operação entra no ar em até 7 dias úteis.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 justify-center lg:justify-start">
              <a
                href={waLink(`Olá! Recebi a proposta da Genesis Company para a ${PROPOSTA.empresa} e quero confirmar o aceite.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm"
              >
                Aceitar proposta pelo WhatsApp <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#investimento" className="btn-ghost text-sm">Rever planos</a>
            </div>
          </div>
          <div className="glass rounded-2xl p-6">
            <h3 className="font-semibold text-base">Como funciona o aceite</h3>
            <ol className="mt-4 space-y-3 text-[13px]">
              {[
                "Você confirma o plano escolhido pelo WhatsApp",
                "Enviamos o contrato digital para assinatura",
                "Reunião de kickoff e início da operação em até 7 dias úteis",
              ].map((t, i) => (
                <li key={t} className="flex items-start gap-3">
                  <span
                    className="h-6 w-6 rounded-full grid place-items-center text-xs font-bold shrink-0"
                    style={{ background: "var(--gradient-brand)", color: "var(--background)" }}
                  >
                    {i + 1}
                  </span>
                  <span className="text-foreground/90">{t}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */
function FooterProposta() {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="mx-auto max-w-7xl px-5 space-y-3 text-center text-[12px] text-muted-foreground">
        <img src="/genesis-logo-white.png" alt="Genesis Company" className="h-8 w-8 mx-auto opacity-80" />
        <p>
          <strong className="text-foreground/60">Genesis Company</strong> · CNPJ 52.906.973/0001-98
        </p>
        <p>Contato: contato@companygenesis.com.br</p>
        <p>
          Proposta confidencial preparada para {PROPOSTA.empresa} · {PROPOSTA.data} · Válida por {PROPOSTA.validade}
        </p>
      </div>
    </footer>
  );
}

/* ---------------- SHARED ---------------- */
function waLink(msg: string) {
  return `https://wa.me/${PROPOSTA.whatsapp}?text=${encodeURIComponent(msg)}`;
}

function HeadingProposta({
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
      {sub && (
        <p className={`mt-3 text-[13px] md:text-base text-muted-foreground leading-relaxed ${align === "center" ? "max-w-2xl mx-auto" : ""}`}>
          {sub}
        </p>
      )}
    </div>
  );
}
