import { CHAT_AGENT } from "../constants";

type LucasAvatarProps = {
  className?: string;
};

export function LucasAvatar({ className = "" }: LucasAvatarProps) {
  return (
    <div className={`cf-avatar ${className}`.trim()} aria-hidden>
      <img src={CHAT_AGENT.avatarSrc} alt="" className="cf-avatar-img" />
    </div>
  );
}
