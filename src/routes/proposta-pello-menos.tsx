import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  CheckCircle2,
  XCircle,
  ChevronDown,
  ShoppingCart,
  Smartphone,
  Star,
  BarChart3,
  Clock,
  Rocket,
  AlertTriangle,
  Eye,
  CreditCard,
  Calendar,
  Users,
} from "lucide-react";

export const Route = createFileRoute("/proposta-pello-menos")({
  component: PropostaPelloMenos,
});

/* ============================================================
   CONFIGURAÇÃO DA PROPOSTA — PELLO MENOS · NOVO E-COMMERCE
   ============================================================ */
const P = {
  cliente: "Pello Menos",
  empresa: "Pello Menos",
  contato: "Equipe Pello Menos",
  data: "Junho de 2026",
  validade: "7 dias",
  consultor: "Douglas Martins",
  whatsapp: "5521996526969",

  projeto: {
    nome: "Novo E-commerce",
    subtitulo: "Uma loja virtual que converte, encanta e escala",
    valor: "R$ 15.000",
    parcelas: 3,
    valorParcela: "R$ 5.000",
    condicao: "3x no boleto, incluso na mensalidade atual",
    prazo: "até 90 dias",
  },

  problemas: [
    {
      icone: AlertTriangle,
      titulo: "Imagens e banners quebrados",
      descricao:
        "Os banners principais — a primeira coisa que o cliente vê — não carregam. Uma loja que não funciona na abertura perde a venda antes de começar.",
      impacto: "Abandono imediato da página",
    },
    {
      icone: Eye,
      titulo: "Design sem identidade premium",
      descricao:
        "A paleta amarelo/laranja e o layout genérico não transmitem a sofisticação que o público feminino espera de uma marca de depilação. O visual comunica 'mercadão', não 'experiência'.",
      impacto: "Credibilidade zero no primeiro acesso",
    },
    {
      icone: ShoppingCart,
      titulo: "Fluxo de compra confuso",
      descricao:
        "O cliente não sabe se está comprando um voucher, agendando online ou apenas reservando. A exigência de 'avaliação com especialista' cria fricção e abandono no meio do funil.",
      impacto: "Alta taxa de abandono de carrinho",
    },
    {
      icone: Users,
      titulo: "Zero prova social",
      descricao:
        "Nenhuma avaliação de cliente, nenhum depoimento, nenhum contador de sessões realizadas. Em saúde e beleza, a decisão de compra depende 70% de confiança — e ela está ausente.",
      impacto: "Cliente vai buscar o concorrente",
    },
    {
      icone: Smartphone,
      titulo: "Experiência mobile comprometida",
      descricao:
        "Com 85%+ das visitas vindas de celular, qualquer inconsistência de layout, imagem ou botão em mobile se traduz diretamente em receita perdida e ROI de anúncios desperdiçado.",
      impacto: "Tráfego pago jogado fora",
    },
    {
      icone: BarChart3,
      titulo: "Sem CRO nem upsell",
      descricao:
        "Sem urgência real, sem comparativo de pacotes com âncora de preço, sem upsell de planos VIP e sem abandono de carrinho automatizado. A loja não trabalha para vender mais.",
      impacto: "Ticket médio muito abaixo do potencial",
    },
  ],

  escopo: [
    {
      categoria: "Design & Identidade",
      itens: [
        "Redesign completo alinhado à identidade visual Pello Menos",
        "Homepage premium com banner full-width otimizado",
        "Paleta feminina, sofisticada e coerente com o nicho",
        "Tipografia e hierarquia visual profissional",
        "Layout responsivo mobile-first (iOS + Android)",
      ],
    },
    {
      categoria: "Catálogo & Produto",
      itens: [
        "Migração e organização de todos os serviços/produtos",
        "Páginas de produto com copywriting de conversão",
        "Galeria de fotos otimizada com zoom e detalhes",
        "Comparativo visual entre pacotes Laser × Cera × VIP",
        "FAQ por categoria de serviço",
      ],
    },
    {
      categoria: "Checkout & Conversão",
      itens: [
        "Checkout simplificado (menos etapas = mais vendas)",
        "Integração com meios de pagamento (Pix, cartão, boleto)",
        "Abandono de carrinho automatizado via WhatsApp/email",
        "Upsell automático de Planos VIP no checkout",
        "Banners de urgência e timer para promoções",
      ],
    },
    {
      categoria: "Confiança & Prova Social",
      itens: [
        "Seção de depoimentos em vídeo integrada",
        "Avaliações de clientes (Google Reviews embed)",
        "Contador de sessões realizadas / clientes atendidos",
        "Selos de segurança e pagamento seguro",
        "Certificado SSL + LGPD compliant",
      ],
    },
    {
      categoria: "Integrações & Marketing",
      itens: [
        "Integração total com o GSales CRM (que vocês já usam)",
        "Meta Pixel + GA4 + GTM configurados",
        "Integração com WhatsApp Business",
        "Open Graph para compartilhamento em redes sociais",
        "Sitemap e SEO básico on-page",
      ],
    },
  ],

  cronograma: [
    {
      semana: "Fase 1 · Semanas 1–2",
      fase: "Descoberta & Arquitetura",
      entregaveis: [
        "Briefing completo e benchmark do nicho",
        "Mapeamento de todos os serviços e preços",
        "Wireframes das páginas principais",
        "Definição da paleta e identidade visual",
      ],
    },
    {
      semana: "Fase 2 · Semanas 3–4",
      fase: "Design & Prototipação",
      entregaveis: [
        "Design completo da homepage",
        "Layout de página de produto",
        "Design do checkout e carrinho",
        "Aprovação da Pello Menos antes de codar",
      ],
    },
    {
      semana: "Fase 3 · Semanas 5–8",
      fase: "Desenvolvimento",
      entregaveis: [
        "Setup da loja + tema customizado",
        "Migração do catálogo completo",
        "Integração de pagamentos (Pix, cartão, boleto)",
        "Integração total com o GSales CRM",
      ],
    },
    {
      semana: "Fase 4 · Semanas 9–10",
      fase: "Conteúdo & Integrações",
      entregaveis: [
        "Copywriting das páginas de produto",
        "Upload e otimização de todas as imagens",
        "Meta Pixel, GA4, GTM configurados",
        "Abandono de carrinho automatizado",
      ],
    },
    {
      semana: "Fase 5 · Semanas 11–12",
      fase: "Testes & Lançamento",
      entregaveis: [
        "QA completo em todos os dispositivos",
        "Testes de checkout e pagamento real",
        "Treinamento da equipe Pello Menos",
        "Go-live + monitoramento 48h pós-lançamento",
      ],
    },
  ],


  faq: [
    {
      pergunta: "O que acontece com os produtos e clientes cadastrados hoje?",
      resposta:
        "Fazemos a migração completa do catálogo de produtos, preços e categorias. O histórico de pedidos e base de clientes pode ser migrado em arquivo CSV. Nenhuma venda é perdida durante a transição — o site atual permanece no ar até o novo ser lançado.",
    },
    {
      pergunta: "Como funciona o parcelamento de R$ 15.000?",
      resposta:
        "Dividimos em 3 parcelas de R$ 5.000 lançadas junto com a mensalidade já existente. Ou seja: sem novo boleto, sem nova cobrança — entra como incremento na sua fatura mensal de marketing. No mês 4, volta ao valor normal da mensalidade.",
    },
    {
      pergunta: "Quem gerencia a loja depois de pronta?",
      resposta:
        "A Pello Menos tem autonomia total para cadastrar produtos, editar preços e publicar promoções via painel administrativo — sem precisar de desenvolvedor. A Genesis cuida das integrações de marketing (GSales CRM, Pixel, GA4, automações) no escopo mensal já contratado.",
    },
    {
      pergunta: "Como a loja conversa com o GSales CRM?",
      resposta:
        "Todo pedido, carrinho abandonado e cadastro da loja entra automaticamente no GSales — o mesmo CRM que vocês já usam hoje. Isso significa funil unificado: o time comercial vê em tempo real quem comprou online, quem abandonou o carrinho e quem precisa de follow-up, sem retrabalho e sem planilha paralela.",
    },
  ],
};

/* ============================================================
   COMPONENTES
   ============================================================ */

function HeadingProposta({
  chip,
  title,
  subtitle,
  align = "center",
}: {
  chip?: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={`mb-12 ${align === "center" ? "text-center" : ""}`}>
      {chip && (
        <div
          className={`chip mb-4 ${align === "center" ? "inline-flex" : "inline-flex"}`}
        >
          <span className="gradient-text font-semibold">{chip}</span>
        </div>
      )}
      <h2 className="text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}

/* ---- CAPA ---- */
function Capa() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-24 text-center">
      {/* glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,oklch(0.58_0.24_264/0.22),transparent)]" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative z-10 max-w-4xl">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <img
            src="/genesis-logo-white.png"
            alt="Genesis Company"
            className="h-10 opacity-90"
          />
        </div>

        <div className="chip mb-6 inline-flex">
          <span className="gradient-text font-semibold">
            Proposta Comercial · Projeto E-commerce
          </span>
        </div>

        <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl">
          Um novo e-commerce{" "}
          <span className="gradient-text">que realmente vende</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
          Diagnóstico do ecommerce atual, estratégia de migração e proposta de
          construção completa para a{" "}
          <strong className="text-foreground">Pello Menos</strong>.
        </p>

        {/* meta info */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <div className="glass rounded-full px-5 py-2.5 text-sm text-muted-foreground">
            <span className="mr-1 font-medium text-foreground">Cliente:</span>{" "}
            {P.cliente}
          </div>
          <div className="glass rounded-full px-5 py-2.5 text-sm text-muted-foreground">
            <span className="mr-1 font-medium text-foreground">Data:</span>{" "}
            {P.data}
          </div>
          <div className="glass rounded-full px-5 py-2.5 text-sm text-muted-foreground">
            <span className="mr-1 font-medium text-foreground">Prazo:</span>{" "}
            até 90 dias
          </div>
        </div>

        {/* scroll cue */}
        <div className="mt-16 flex justify-center">
          <div className="flex flex-col items-center gap-2 text-xs text-muted-foreground/50">
            <span>Role para ver a análise</span>
            <div className="h-8 w-px bg-gradient-to-b from-white/20 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---- DIAGNÓSTICO ---- */
function DiagnosticoSection() {
  return (
    <section className="section-pad px-6">
      <div className="mx-auto max-w-6xl">
        <HeadingProposta
          chip="Diagnóstico do ecommerce atual"
          title={
            <>
              O que está{" "}
              <span className="gradient-text">impedindo as vendas</span>
            </>
          }
          subtitle="Analisamos loja.pellomenos.com.br e encontramos 6 problemas críticos que afetam diretamente a conversão e a imagem da marca."
        />

        {/* URL atual em destaque */}
        <div className="mb-12 glass rounded-2xl p-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">
              Site analisado
            </p>
            <p className="font-mono text-sm text-foreground">
              loja.pellomenos.com.br
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {["Imagens quebradas", "UX confusa", "Sem social proof", "Design desatualizado"].map((tag) => (
              <span
                key={tag}
                className="flex items-center gap-1.5 rounded-full bg-red-500/10 border border-red-500/20 px-3 py-1 text-xs font-medium text-red-400"
              >
                <XCircle className="h-3 w-3" />
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {P.problemas.map((prob, i) => {
            const Icon = prob.icone;
            return (
              <div
                key={i}
                className="glass rounded-2xl p-6 flex flex-col gap-4 hover:border-red-500/30 transition-colors duration-300"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-500/10 border border-red-500/20">
                    <Icon className="h-5 w-5 text-red-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground leading-tight">
                      {prob.titulo}
                    </p>
                    <span className="mt-1 inline-block rounded-full bg-red-500/10 px-2 py-0.5 text-xs text-red-400">
                      {prob.impacto}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {prob.descricao}
                </p>
              </div>
            );
          })}
        </div>

        {/* conclusão */}
        <div className="mt-10 glass-strong rounded-2xl p-8 border border-brand/20 text-center">
          <p className="text-lg font-semibold text-foreground">
            O resultado é um{" "}
            <span className="gradient-text">e-commerce que afasta clientes</span>{" "}
            em vez de convertê-los.
          </p>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Cada real investido em tráfego pago está sendo jogado em uma loja que
            não converte. A solução não é otimizar o que existe — é reconstruir do
            zero com as ferramentas certas.
          </p>
        </div>
      </div>
    </section>
  );
}


/* ---- ESCOPO ---- */
function EscopoSection() {
  return (
    <section className="section-pad px-6 bg-gradient-to-b from-transparent via-brand/5 to-transparent">
      <div className="mx-auto max-w-6xl">
        <HeadingProposta
          chip="O que está incluso"
          title={
            <>
              Escopo completo{" "}
              <span className="gradient-text">do projeto</span>
            </>
          }
          subtitle="Tudo que a Pello Menos precisa para ter um ecommerce de referência no segmento — sem surpresas, sem custos ocultos."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {P.escopo.map((bloco, i) => (
            <div key={i} className="glass rounded-2xl p-6 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand/10 border border-brand/20">
                  <span className="text-xs font-bold gradient-text">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="font-semibold text-foreground text-sm">
                  {bloco.categoria}
                </h3>
              </div>
              <div className="flex flex-col gap-2">
                {bloco.itens.map((item, j) => (
                  <div key={j} className="flex items-start gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-brand mt-0.5" />
                    <span className="text-xs text-muted-foreground leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

/* ---- CRONOGRAMA ---- */
function CronogramaSection() {
  return (
    <section className="section-pad px-6">
      <div className="mx-auto max-w-4xl">
        <HeadingProposta
          chip="Linha do tempo"
          title={
            <>
              Do zero ao lançamento{" "}
              <span className="gradient-text">em até 90 dias</span>
            </>
          }
          subtitle="Um cronograma realista, com entregas verificáveis em cada etapa e aprovação da Pello Menos antes de avançar."
        />

        <div className="relative flex flex-col gap-0">
          {/* linha vertical */}
          <div className="absolute left-6 top-8 bottom-8 w-px bg-gradient-to-b from-brand via-brand/40 to-transparent hidden md:block" />

          {P.cronograma.map((fase, i) => (
            <div
              key={i}
              className={`relative flex flex-col md:flex-row gap-6 pb-8 ${i === P.cronograma.length - 1 ? "" : ""}`}
            >
              {/* dot */}
              <div className="hidden md:flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand/10 border border-brand/30 z-10">
                <span className="text-xs font-bold gradient-text">S{i + 1}</span>
              </div>

              {/* card */}
              <div className="glass rounded-2xl p-6 flex-1">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      {fase.semana}
                    </p>
                    <h3 className="font-bold text-foreground mt-1">{fase.fase}</h3>
                  </div>
                  <div className="md:hidden flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand/10 border border-brand/30">
                    <span className="text-xs font-bold gradient-text">S{i + 1}</span>
                  </div>
                </div>
                <div className="grid gap-2 sm:grid-cols-2">
                  {fase.entregaveis.map((e, j) => (
                    <div key={j} className="flex items-start gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-brand mt-0.5" />
                      <span className="text-xs text-muted-foreground">{e}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- INVESTIMENTO ---- */
function InvestimentoSection() {
  const projetoBase = [
    { item: "Design UX/UI completo (conceito + refinamento)", valor: "R$ 4.500" },
    { item: "Desenvolvimento e-commerce customizado", valor: "R$ 7.500" },
    { item: "Migração completa do catálogo e categorias", valor: "R$ 2.000" },
    { item: "Integração de pagamentos (Pix, cartão, boleto)", valor: "R$ 1.500" },
  ];

  const bonus = [
    { item: "Integração total com o GSales CRM", valor: "R$ 3.500" },
    { item: "Automação de abandono de carrinho (WhatsApp + email)", valor: "R$ 2.000" },
    { item: "Setup completo de tracking (Meta Pixel + GA4 + GTM)", valor: "R$ 1.800" },
    { item: "Copywriting de conversão em todas as páginas", valor: "R$ 2.400" },
    { item: "Treinamento da equipe + 30 dias de suporte pós-lançamento", valor: "R$ 1.700" },
  ];

  return (
    <section className="section-pad px-6 bg-gradient-to-b from-transparent via-brand/8 to-transparent">
      <div className="mx-auto max-w-4xl">
        <HeadingProposta
          chip="Proposta de investimento"
          title={
            <>
              Condição especial{" "}
              <span className="gradient-text">Pello Menos</span>
            </>
          }
          subtitle="Porque vocês já são parte da família Genesis, criamos uma condição que não exige nenhum esforço financeiro extra."
        />

        {/* card principal */}
        <div className="glass-strong rounded-3xl p-8 md:p-12 border border-brand/25 relative overflow-hidden">
          <div className="pointer-events-none absolute -top-20 -right-20 h-60 w-60 rounded-full bg-brand/10 blur-3xl" />

          <div className="relative z-10">
            <div className="flex flex-col items-center text-center mb-10">
              <div className="chip mb-4 bg-brand/10 border-brand/30">
                <span className="gradient-text font-semibold">
                  Projeto único · Entrega em até 90 dias
                </span>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                {P.projeto.nome}
              </h3>
              <p className="text-muted-foreground text-sm max-w-md">
                {P.projeto.subtitulo}
              </p>
            </div>

            {/* PROJETO BASE com valores */}
            <div className="glass rounded-2xl p-6 mb-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
                O projeto
              </p>
              <div className="flex flex-col gap-3">
                {projetoBase.map((linha) => (
                  <div key={linha.item} className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-brand" />
                      <span className="text-sm text-muted-foreground">{linha.item}</span>
                    </div>
                    <span className="shrink-0 text-sm font-semibold text-foreground">
                      {linha.valor}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* BÔNUS com valores */}
            <div className="glass rounded-2xl p-6 mb-8 border border-brand/20">
              <div className="flex items-center gap-2 mb-4">
                <Star className="h-4 w-4 text-brand" />
                <p className="text-xs font-semibold uppercase tracking-widest gradient-text">
                  Bônus inclusos sem custo — exclusivo para clientes Genesis
                </p>
              </div>
              <div className="flex flex-col gap-3">
                {bonus.map((linha) => (
                  <div key={linha.item} className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2.5">
                      <Zap className="h-4 w-4 shrink-0 text-brand" />
                      <span className="text-sm text-muted-foreground">{linha.item}</span>
                    </div>
                    <span className="shrink-0 text-sm text-muted-foreground/60 line-through">
                      {linha.valor}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* TOTAL ANCORADO */}
            <div className="rounded-2xl bg-brand/10 border border-brand/25 p-8 mb-8 text-center">
              <p className="text-sm text-muted-foreground mb-2">
                Valor total de tudo que está nesta proposta:
              </p>
              <p className="text-3xl font-bold text-muted-foreground/50 line-through mb-3">
                R$ 26.900
              </p>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">
                Investimento Pello Menos
              </p>
              <p className="text-5xl font-bold gradient-text md:text-6xl">
                {P.projeto.valor}
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                ou{" "}
                <strong className="text-foreground">
                  3× de {P.projeto.valorParcela} sem juros no boleto
                </strong>
                , junto com a mensalidade que vocês já pagam
              </p>
              <p className="mt-1 text-xs text-muted-foreground/70">
                Economia de R$ 11.900 em relação ao valor real do projeto
              </p>
            </div>

            {/* condição especial */}
            <div className="rounded-2xl glass p-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand/20">
                  <CreditCard className="h-5 w-5 text-brand" />
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">
                    Como funciona o pagamento
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    As 3 parcelas de{" "}
                    <strong className="text-foreground">R$ 5.000</strong> são
                    incluídas na mensalidade já existente — sem abrir novo boleto,
                    sem novo contrato de crédito. No mês 4, a fatura volta
                    automaticamente ao valor normal da mensalidade Genesis.
                  </p>
                </div>
              </div>
            </div>

            {/* ROI projection */}
            <div className="glass rounded-2xl p-6 border border-white/10">
              <p className="text-sm font-semibold text-foreground mb-4">
                Projeção conservadora de retorno
              </p>
              <div className="grid gap-4 sm:grid-cols-3">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">
                    Aumento de conversão
                  </p>
                  <p className="font-bold text-foreground">
                    +30–50%{" "}
                    <span className="text-xs font-normal text-muted-foreground">
                      nas vendas online
                    </span>
                  </p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">
                    Ticket médio
                  </p>
                  <p className="font-bold text-foreground">
                    +20%{" "}
                    <span className="text-xs font-normal text-muted-foreground">
                      com upsell automático
                    </span>
                  </p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">
                    Payback estimado
                  </p>
                  <p className="font-bold text-foreground">
                    2–3 meses{" "}
                    <span className="text-xs font-normal text-muted-foreground">
                      após lançamento
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---- FAQ ---- */
function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="section-pad px-6">
      <div className="mx-auto max-w-3xl">
        <HeadingProposta
          chip="Dúvidas frequentes"
          title={
            <>
              Perguntas que você{" "}
              <span className="gradient-text">pode ter</span>
            </>
          }
        />

        <div className="flex flex-col gap-3">
          {P.faq.map((item, i) => (
            <div key={i} className="glass rounded-2xl overflow-hidden">
              <button
                className="flex w-full items-center justify-between px-6 py-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-semibold text-foreground pr-4 text-sm md:text-base">
                  {item.pergunta}
                </span>
                <ChevronDown
                  className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300 ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {open === i && (
                <div className="px-6 pb-5 border-t border-white/5">
                  <p className="pt-4 text-sm text-muted-foreground leading-relaxed">
                    {item.resposta}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- DECISÃO ---- */
function DecisaoSection() {
  const seFecharmosHoje = [
    {
      icone: Calendar,
      titulo: "Kickoff já agendado",
      descricao: "Saímos desta reunião com a data do kickoff marcada para os próximos dias úteis.",
    },
    {
      icone: Rocket,
      titulo: "Projeto inicia esta semana",
      descricao: "Briefing, acessos e benchmark começam imediatamente — sem fila de espera.",
    },
    {
      icone: Clock,
      titulo: "Contagem dos 90 dias",
      descricao: "O prazo de entrega começa a contar do kickoff. Quanto antes começamos, antes a loja vende.",
    },
  ];

  return (
    <section className="section-pad px-6 bg-gradient-to-b from-transparent via-brand/5 to-transparent">
      <div className="mx-auto max-w-5xl">
        <HeadingProposta
          chip="O momento da decisão"
          title={
            <>
              Vamos decidir{" "}
              <span className="gradient-text">juntos, agora</span>
            </>
          }
          subtitle="Vocês já conhecem nosso trabalho, já confiam no nosso time e já viram o diagnóstico. Não precisamos de mais uma reunião — precisamos de uma decisão."
        />

        <div className="grid gap-5 md:grid-cols-3 mb-12">
          {seFecharmosHoje.map((p) => {
            const Icon = p.icone;
            return (
              <div key={p.titulo} className="glass rounded-2xl p-6 flex flex-col gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 border border-brand/20">
                  <Icon className="h-5 w-5 text-brand" />
                </div>
                <p className="font-semibold text-foreground">{p.titulo}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {p.descricao}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA final — decisão na reunião */}
        <div className="glass-strong rounded-3xl p-10 text-center border border-brand/20 relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,oklch(0.58_0.24_264/0.12),transparent)]" />
          <div className="relative z-10">
            <p className="chip inline-flex mb-4">
              <span className="gradient-text font-semibold">
                Condição exclusiva desta reunião
              </span>
            </p>
            <h2 className="text-3xl font-bold text-foreground mb-4 md:text-4xl">
              A pergunta é uma só:{" "}
              <span className="gradient-text">vamos construir juntos?</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Cada dia com o ecommerce atual é receita deixada na mesa. As condições
              desta proposta — bônus de R$ 11.400 inclusos e parcelamento na
              mensalidade — valem para a decisão tomada nesta reunião.
            </p>

            {/* resumo da decisão */}
            <div className="mx-auto mb-8 max-w-md glass rounded-2xl p-6">
              <div className="flex flex-col gap-3 text-left">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Investimento</span>
                  <span className="text-sm font-bold text-foreground">
                    3× R$ 5.000 na mensalidade
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Prazo</span>
                  <span className="text-sm font-bold text-foreground">até 90 dias</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Bônus inclusos</span>
                  <span className="text-sm font-bold gradient-text">R$ 11.400</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

/* ---- FOOTER ---- */
function FooterProposta() {
  return (
    <footer className="border-t border-white/5 py-12 px-6 text-center">
      <div className="mx-auto max-w-4xl flex flex-col items-center gap-6">
        <img
          src="/genesis-logo-white.png"
          alt="Genesis Company"
          className="h-8 opacity-60"
        />
        <p className="text-xs text-muted-foreground max-w-lg">
          Genesis Company. Válida por {P.validade} a partir de {P.data}.
          CNPJ 52.906.973/0001-98.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground/60">
          <span>© 2026 Genesis Company</span>
          <span>·</span>
          <span>Confidencial · Uso exclusivo Pello Menos</span>
          <span>·</span>
          <a
            href={`https://wa.me/${P.whatsapp}`}
            className="hover:text-foreground transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}

/* ============================================================
   PÁGINA PRINCIPAL
   ============================================================ */
function PropostaPelloMenos() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Capa />
      <DiagnosticoSection />
      <EscopoSection />
      <CronogramaSection />
      <InvestimentoSection />
      <FaqSection />
      <DecisaoSection />
      <FooterProposta />
    </div>
  );
}
