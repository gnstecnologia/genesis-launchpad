export const CHAT_AGENT = {
  name: "Lucas Lourenço",
  shortName: "Lucas",
  company: "Genesis Company",
  avatarSrc: "/conversational-form/avatar-lucas.jpg",
  logoSrc: "/conversational-form/genesis-logo.png",
  backgroundSrc: "/conversational-form/background-genesis.webp",
} as const;

export const CHAT_GREETING =
  "Olá! Sou o Lucas, CEO da Genesis Company. Que bom falar com você! Vou te fazer umas perguntas rápidas para a gente te conhecer melhor.";

export const BRAND_GRADIENT = "linear-gradient(135deg, #E42888, #0054A8, #00BC62)";

export const TYPING_DELAY_BASE_MS = 1600;
export const TYPING_DELAY_PER_CHAR_MS = 28;
export const TYPING_DELAY_MAX_MS = 3400;

export function getTypingDelay(text: string) {
  return Math.min(
    TYPING_DELAY_MAX_MS,
    TYPING_DELAY_BASE_MS + text.length * TYPING_DELAY_PER_CHAR_MS,
  );
}
