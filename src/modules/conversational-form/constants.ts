export const CHAT_AGENT = {
  name: "Lucas Lourenço",
  company: "Genesis Company",
  status: "online agora",
  avatarSrc: "/genesis-logo-white-96.webp",
  avatarFallbackSrc: "/genesis-logo-white.png",
  avatarFinalFallbackSrc: "/genesis-logo.svg",
} as const;

/** Delay base + proporcional ao tamanho da mensagem (simula digitação humana) */
export const TYPING_DELAY_BASE_MS = 1600;
export const TYPING_DELAY_PER_CHAR_MS = 28;
export const TYPING_DELAY_MAX_MS = 3400;

export function getTypingDelay(text: string) {
  return Math.min(
    TYPING_DELAY_MAX_MS,
    TYPING_DELAY_BASE_MS + text.length * TYPING_DELAY_PER_CHAR_MS,
  );
}
