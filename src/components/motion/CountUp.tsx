import { useEffect, useRef } from "react";
import { gsap, prefersReducedMotion, ScrollTrigger } from "@/hooks/use-gsap";

type CountUpProps = {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
  /** Formata com separador de milhar pt-BR */
  locale?: boolean;
};

export function CountUp({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration = 1.2,
  className,
  locale = true,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const format = (n: number) => {
      const fixed = n.toFixed(decimals);
      if (!locale) return fixed;
      const [int, dec] = fixed.split(".");
      const withDots = int.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      return dec !== undefined ? `${withDots},${dec}` : withDots;
    };

    if (prefersReducedMotion()) {
      el.textContent = `${prefix}${format(value)}${suffix}`;
      return;
    }

    gsap.registerPlugin(ScrollTrigger);
    const obj = { n: 0 };
    const tween = gsap.to(obj, {
      n: value,
      duration,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 90%",
        once: true,
      },
      onUpdate: () => {
        el.textContent = `${prefix}${format(obj.n)}${suffix}`;
      },
    });

    return () => {
      tween.kill();
    };
  }, [value, prefix, suffix, decimals, duration, locale]);

  return (
    <span ref={ref} className={className}>
      {prefix}0{suffix}
    </span>
  );
}
