import { useState } from "react";
import { CHAT_AGENT } from "../constants";

type LucasAvatarProps = {
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizeMap = {
  sm: "h-7 w-7",
  md: "h-10 w-10",
  lg: "h-11 w-11",
} as const;

export function LucasAvatar({ size = "md", className = "" }: LucasAvatarProps) {
  const [src, setSrc] = useState(CHAT_AGENT.avatarSrc);

  return (
    <div
      className={`cf-avatar ${sizeMap[size]} ${className}`.trim()}
      aria-hidden
    >
      <img
        src={src}
        alt=""
        className="cf-avatar-img"
        onError={() => {
          if (src === CHAT_AGENT.avatarSrc) {
            setSrc(CHAT_AGENT.avatarFallbackSrc);
            return;
          }
          if (src === CHAT_AGENT.avatarFallbackSrc) {
            setSrc(CHAT_AGENT.avatarFinalFallbackSrc);
          }
        }}
      />
      <span className="cf-avatar-badge">
        <img src="/genesis-logo.svg" alt="" className="h-2.5 w-2.5" />
      </span>
    </div>
  );
}
