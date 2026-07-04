import { useEffect, useRef } from "react";
import {
  Bot,
  Brain,
  Megaphone,
  Target,
  TrendingUp,
  Users,
  Video,
  type LucideIcon,
} from "lucide-react";
import { gsap, prefersReducedMotion, ScrollTrigger } from "@/hooks/use-gsap";

const NODES: { icon: LucideIcon; label: string }[] = [
  { icon: Brain, label: "Estratégia" },
  { icon: Megaphone, label: "Conteúdo" },
  { icon: Target, label: "Tráfego" },
  { icon: Video, label: "Audiovisual" },
  { icon: Users, label: "CRM" },
  { icon: Bot, label: "IA" },
  { icon: TrendingUp, label: "Vendas" },
];

export function EcosystemOrbit() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || prefersReducedMotion()) return;

    gsap.registerPlugin(ScrollTrigger);

    const orbit = root.querySelector<HTMLElement>("[data-orbit]");
    const nodes = root.querySelectorAll<HTMLElement>("[data-orbit-node]");
    const labels = root.querySelectorAll<HTMLElement>("[data-orbit-label]");
    const lines = root.querySelectorAll<SVGLineElement>("[data-orbit-line]");
    const glow = root.querySelector<HTMLElement>("[data-orbit-glow]");
    const center = root.querySelector<HTMLElement>("[data-orbit-center]");

    // Entrada: nós partem do centro
    gsap.set(nodes, { scale: 0, opacity: 0 });
    gsap.set(center, { scale: 0.6, opacity: 0 });
    gsap.set(lines, { opacity: 0 });

    const intro = gsap.timeline({
      scrollTrigger: {
        trigger: root,
        start: "top 75%",
        once: true,
      },
    });

    intro
      .to(center, { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.4)" })
      .to(
        nodes,
        { scale: 1, opacity: 1, duration: 0.45, stagger: 0.07, ease: "back.out(1.5)" },
        "-=0.2",
      )
      .to(lines, { opacity: 0.5, duration: 0.4, stagger: 0.05 }, "-=0.3");

    // Rotação contínua da órbita; labels contra-rotacionam para ficarem legíveis
    const spin = gsap.to(orbit, {
      rotation: 360,
      duration: 50,
      ease: "none",
      repeat: -1,
      transformOrigin: "50% 50%",
    });

    const counterSpins = Array.from(labels).map((label) =>
      gsap.to(label, {
        rotation: -360,
        duration: 50,
        ease: "none",
        repeat: -1,
        transformOrigin: "50% 50%",
      }),
    );

    // Pulse nas linhas (sinal saindo do centro)
    lines.forEach((line, i) => {
      gsap.to(line, {
        opacity: 0.15,
        duration: 1.2,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: i * 0.18,
      });
    });

    if (glow) {
      gsap.to(glow, {
        opacity: 0.55,
        scale: 1.08,
        duration: 2.2,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        transformOrigin: "50% 50%",
      });
    }

    // Pausa animações contínuas fora da viewport
    const st = ScrollTrigger.create({
      trigger: root,
      start: "top bottom",
      end: "bottom top",
      onEnter: () => {
        spin.play();
        counterSpins.forEach((t) => t.play());
      },
      onLeave: () => {
        spin.pause();
        counterSpins.forEach((t) => t.pause());
      },
      onEnterBack: () => {
        spin.play();
        counterSpins.forEach((t) => t.play());
      },
      onLeaveBack: () => {
        spin.pause();
        counterSpins.forEach((t) => t.pause());
      },
    });

    return () => {
      intro.kill();
      spin.kill();
      counterSpins.forEach((t) => t.kill());
      st.kill();
      gsap.killTweensOf([glow, ...Array.from(lines)]);
    };
  }, []);

  return (
    <div ref={rootRef} className="relative aspect-square max-w-lg w-full mx-auto">
      <div
        data-orbit-glow
        className="absolute inset-0 rounded-full blur-3xl opacity-40"
        style={{ background: "var(--gradient-brand)" }}
      />

      {/* Linhas (fixas, não rotacionam com o anel para simplificar o pulse) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
        {NODES.map((_, i) => {
          const angle = (i / NODES.length) * Math.PI * 2 - Math.PI / 2;
          const r = 38;
          const x = 50 + r * Math.cos(angle);
          const y = 50 + r * Math.sin(angle);
          return (
            <line
              key={i}
              data-orbit-line
              x1="50"
              y1="50"
              x2={x}
              y2={y}
              stroke="oklch(1 0 0 / 0.2)"
              strokeWidth="0.35"
              strokeDasharray="1.2 1.2"
            />
          );
        })}
      </svg>

      {/* Centro */}
      <div
        data-orbit-center
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
      >
        <div className="glass-strong h-28 w-28 rounded-full grid place-items-center">
          <div className="text-center">
            <img
              src="/genesis-logo-white-96.webp"
              alt="Genesis"
              width={32}
              height={32}
              className="h-8 w-8 mx-auto"
            />
            <div className="text-xs mt-1 font-bold">Genesis</div>
          </div>
        </div>
      </div>

      {/* Anel de nós */}
      <div data-orbit className="absolute inset-0">
        {NODES.map((n, i) => {
          const angle = (i / NODES.length) * Math.PI * 2 - Math.PI / 2;
          const r = 42;
          const x = 50 + r * Math.cos(angle);
          const y = 50 + r * Math.sin(angle);
          return (
            <div
              key={n.label}
              data-orbit-node
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${x}%`, top: `${y}%` }}
            >
              <div
                data-orbit-label
                className="glass rounded-2xl px-3 py-2 flex items-center gap-2 transition-all duration-200 hover:-translate-y-1 hover:border-white/30 cursor-default"
              >
                <n.icon className="h-4 w-4 shrink-0" />
                <span className="text-xs font-medium whitespace-nowrap">{n.label}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
