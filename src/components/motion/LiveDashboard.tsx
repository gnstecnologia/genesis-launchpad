import { useEffect, useRef, type RefObject } from "react";
import { BarChart3, Bot, Calendar, TrendingUp, Users, Video } from "lucide-react";
import { CountUp } from "@/components/motion/CountUp";
import { gsap, prefersReducedMotion, ScrollTrigger } from "@/hooks/use-gsap";

const BAR_HEIGHTS = [40, 65, 35, 80, 55, 90, 70, 95, 60, 88, 72, 100];
const AVATAR_COLORS = ["#a78bfa", "#f472b6", "#fbbf24", "#34d399"];

function useDashboardMotion(rootRef: RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root || prefersReducedMotion()) return;

    gsap.registerPlugin(ScrollTrigger);

    const cards = root.querySelectorAll<HTMLElement>("[data-dash-card]");
    const bars = root.querySelectorAll<HTMLElement>("[data-dash-bar]");
    const spark = root.querySelector<SVGPathElement>("[data-dash-spark]");
    const crm = root.querySelector<HTMLElement>("[data-dash-crm]");
    const avatars = root.querySelectorAll<HTMLElement>("[data-dash-avatar]");

    gsap.set(cards, { opacity: 0, y: 28 });
    gsap.set(bars, { scaleY: 0, transformOrigin: "bottom" });
    if (crm) gsap.set(crm, { scaleX: 0, transformOrigin: "left" });
    gsap.set(avatars, { opacity: 0, scale: 0.6 });

    if (spark) {
      const len = spark.getTotalLength();
      gsap.set(spark, { strokeDasharray: len, strokeDashoffset: len });
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: root,
        start: "top 80%",
        once: true,
      },
    });

    tl.to(cards, {
      opacity: 1,
      y: 0,
      duration: 0.55,
      stagger: 0.08,
      ease: "power2.out",
    })
      .to(
        bars,
        { scaleY: 1, duration: 0.7, stagger: 0.04, ease: "power2.out" },
        "-=0.25",
      )
      .to(avatars, { opacity: 1, scale: 1, duration: 0.35, stagger: 0.06, ease: "back.out(1.6)" }, "-=0.4");

    if (spark) {
      tl.to(spark, { strokeDashoffset: 0, duration: 1, ease: "power2.inOut" }, "-=0.5");
    }
    if (crm) {
      tl.to(crm, { scaleX: 1, duration: 0.8, ease: "power2.out" }, "-=0.6");
    }

    // Float suave contínuo (só enquanto visível)
    const floats = root.querySelectorAll<HTMLElement>("[data-dash-float]");
    floats.forEach((el, i) => {
      gsap.to(el, {
        y: i % 2 === 0 ? -8 : -12,
        duration: 2.4 + i * 0.25,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: i * 0.15,
      });
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll()
        .filter((t) => t.trigger === root)
        .forEach((t) => t.kill());
      gsap.killTweensOf(floats);
    };
  }, [rootRef]);
}

function DashboardCards() {
  return (
    <>
      <div
        data-dash-card
        data-dash-float
        className="glass-strong absolute top-0 left-0 w-[62%] rounded-2xl p-5"
      >
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span className="flex items-center gap-2">
            <BarChart3 className="h-3.5 w-3.5" /> Campanhas ativas
          </span>
          <span className="text-success">+24%</span>
        </div>
        <div className="mt-2 text-3xl font-bold">
          <CountUp value={184320} prefix="R$ " />
        </div>
        <div className="text-xs text-muted-foreground">investidos este mês</div>
        <div className="mt-4 flex items-end gap-1 h-14">
          {BAR_HEIGHTS.map((h, i) => (
            <div
              key={i}
              data-dash-bar
              className="flex-1 rounded-sm origin-bottom"
              style={{
                height: `${h}%`,
                background: "var(--gradient-brand)",
                opacity: 0.6 + i * 0.03,
              }}
            />
          ))}
        </div>
      </div>

      <div
        data-dash-card
        data-dash-float
        className="glass-strong absolute top-4 right-0 w-[42%] rounded-2xl p-4"
      >
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span className="flex items-center gap-2">
            <Users className="h-3.5 w-3.5" /> Leads gerados
          </span>
        </div>
        <div className="mt-2 text-2xl font-bold gradient-text">
          <CountUp value={1247} />
        </div>
        <div className="text-xs text-success mt-1">+38% vs mês anterior</div>
      </div>

      <div
        data-dash-card
        data-dash-float
        className="glass-strong absolute top-44 right-6 w-[55%] rounded-2xl p-4"
      >
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span className="flex items-center gap-2">
            <Calendar className="h-3.5 w-3.5" /> Reuniões agendadas
          </span>
        </div>
        <div className="mt-2 flex items-center justify-between">
          <div className="text-2xl font-bold">
            <CountUp value={86} />
          </div>
          <div className="flex -space-x-2">
            {AVATAR_COLORS.map((c, i) => (
              <div
                key={i}
                data-dash-avatar
                className="h-7 w-7 rounded-full border-2 border-background"
                style={{ background: c }}
              />
            ))}
          </div>
        </div>
      </div>

      <div
        data-dash-card
        data-dash-float
        className="glass-strong absolute bottom-12 left-2 w-[50%] rounded-2xl p-4"
      >
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span className="flex items-center gap-2">
            <TrendingUp className="h-3.5 w-3.5" /> Crescimento comercial
          </span>
        </div>
        <div className="mt-2 text-2xl font-bold">
          <CountUp value={62} prefix="+" suffix="%" locale={false} />
        </div>
        <svg viewBox="0 0 100 30" className="mt-2 w-full h-8">
          <defs>
            <linearGradient id="dash-lg" x1="0" x2="1">
              <stop offset="0%" stopColor="oklch(0.72 0.2 295)" />
              <stop offset="100%" stopColor="oklch(0.82 0.17 65)" />
            </linearGradient>
          </defs>
          <path
            data-dash-spark
            d="M0,25 Q20,20 30,18 T55,10 T100,4"
            fill="none"
            stroke="url(#dash-lg)"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div
        data-dash-card
        data-dash-float
        className="glass-strong absolute bottom-0 right-0 w-[44%] rounded-2xl p-4"
      >
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span className="flex items-center gap-2">
            <Bot className="h-3.5 w-3.5" /> CRM + IA
          </span>
          <span className="h-2 w-2 rounded-full bg-success animate-pulse-glow" />
        </div>
        <div className="mt-2 text-sm font-medium">Qualificação automática</div>
        <div className="mt-2 h-1.5 rounded-full bg-white/10 overflow-hidden">
          <div
            data-dash-crm
            className="h-full w-[78%] origin-left"
            style={{ background: "var(--gradient-brand)" }}
          />
        </div>
      </div>

      <div
        data-dash-card
        data-dash-float
        className="glass absolute top-32 left-4 rounded-full px-3 py-1.5 text-xs flex items-center gap-1.5"
      >
        <Video className="h-3 w-3" /> Audiovisual ativo
        <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse-glow" />
      </div>
    </>
  );
}

/** Dashboard completo (desktop) */
export function LiveDashboard() {
  const rootRef = useRef<HTMLDivElement>(null);
  useDashboardMotion(rootRef);

  return (
    <div ref={rootRef} className="relative h-[420px]">
      <DashboardCards />
    </div>
  );
}

/** Versão compacta para mobile/tablet */
export function LiveDashboardMobile() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || prefersReducedMotion()) return;
    gsap.registerPlugin(ScrollTrigger);

    const cards = root.querySelectorAll<HTMLElement>("[data-mobile-card]");
    gsap.set(cards, { opacity: 0, y: 20 });
    const tween = gsap.to(cards, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: "power2.out",
      scrollTrigger: { trigger: root, start: "top 85%", once: true },
    });

    return () => {
      tween.kill();
    };
  }, []);

  return (
    <div ref={rootRef} className="grid grid-cols-2 gap-3">
      <div data-mobile-card className="glass-strong rounded-2xl p-4 col-span-2">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <BarChart3 className="h-3.5 w-3.5" /> Campanhas ativas
          <span className="ml-auto text-success">+24%</span>
        </div>
        <div className="mt-1 text-2xl font-bold">
          <CountUp value={184320} prefix="R$ " />
        </div>
        <div className="text-[11px] text-muted-foreground">investidos este mês</div>
      </div>
      <div data-mobile-card className="glass-strong rounded-2xl p-4">
        <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
          <Users className="h-3 w-3" /> Leads
        </div>
        <div className="mt-1 text-xl font-bold gradient-text">
          <CountUp value={1247} />
        </div>
        <div className="text-[10px] text-success">+38%</div>
      </div>
      <div data-mobile-card className="glass-strong rounded-2xl p-4">
        <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
          <TrendingUp className="h-3 w-3" /> Crescimento
        </div>
        <div className="mt-1 text-xl font-bold">
          <CountUp value={62} prefix="+" suffix="%" locale={false} />
        </div>
        <div className="text-[10px] text-muted-foreground">comercial</div>
      </div>
      <div data-mobile-card className="glass-strong rounded-2xl p-4 col-span-2 flex items-center justify-between">
        <div>
          <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
            <Bot className="h-3 w-3" /> CRM + IA
          </div>
          <div className="mt-0.5 text-sm font-medium">Qualificação automática</div>
        </div>
        <span className="h-2.5 w-2.5 rounded-full bg-success animate-pulse-glow" />
      </div>
    </div>
  );
}

export function HeroStats() {
  const stats = [
    { value: 10, prefix: "+", suffix: "M", label: "investidos em mídia", locale: false },
    { value: 120, prefix: "+", suffix: "", label: "marcas atendidas", locale: false },
    { value: 7, prefix: "", suffix: "", label: "anos de mercado", locale: false },
  ];

  return (
    <div className="mt-8 grid grid-cols-3 gap-4">
      {stats.map((s) => (
        <div key={s.label} className="glass rounded-2xl p-4">
          <div className="text-2xl font-bold gradient-text">
            <CountUp
              value={s.value}
              prefix={s.prefix}
              suffix={s.suffix}
              locale={s.locale}
            />
          </div>
          <div className="text-xs text-muted-foreground mt-1 leading-snug">{s.label}</div>
        </div>
      ))}
    </div>
  );
}
