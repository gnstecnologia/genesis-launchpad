import { useEffect, useRef, type DependencyList, type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;

function ensureGsap() {
  if (registered || typeof window === "undefined") return;
  gsap.registerPlugin(ScrollTrigger);
  registered = true;
}

export function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Roda uma timeline GSAP com cleanup automático.
 * `factory` recebe o elemento raiz e deve retornar um Tween/Timeline (ou void).
 */
export function useGsap(
  factory: (root: HTMLElement, g: typeof gsap) => gsap.core.Tween | gsap.core.Timeline | void | (() => void),
  deps: DependencyList = [],
) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ensureGsap();
    const root = rootRef.current;
    if (!root) return;

    if (prefersReducedMotion()) return;

    const result = factory(root, gsap);
    return () => {
      if (typeof result === "function") {
        result();
        return;
      }
      result?.kill();
      ScrollTrigger.getAll()
        .filter((t) => t.trigger === root || root.contains(t.trigger as Node))
        .forEach((t) => t.kill());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return rootRef as RefObject<HTMLDivElement>;
}

export { gsap, ScrollTrigger };
