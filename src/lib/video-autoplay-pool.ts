const MAX_CONCURRENT = 2;
const active = new Set<HTMLVideoElement>();
const waiting: HTMLVideoElement[] = [];

export function requestAutoplay(el: HTMLVideoElement): boolean {
  if (active.has(el)) return true;
  if (active.size < MAX_CONCURRENT) {
    active.add(el);
    return true;
  }
  if (!waiting.includes(el)) waiting.push(el);
  return false;
}

export function releaseAutoplay(el: HTMLVideoElement) {
  active.delete(el);
  const idx = waiting.indexOf(el);
  if (idx >= 0) waiting.splice(idx, 1);
  const next = waiting.shift();
  if (next && !next.paused) return;
  if (next) {
    active.add(next);
    next.play().catch(() => releaseAutoplay(next));
  }
}
