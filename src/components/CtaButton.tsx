import type { ComponentType, ReactNode } from "react";
import { ArrowRight } from "lucide-react";

type IconType = ComponentType<{ className?: string }>;

type CtaLinkProps = {
  href: string;
  icon: IconType;
  children: ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
};

export function CtaLink({
  href,
  icon: Icon,
  children,
  variant = "primary",
  className = "",
}: CtaLinkProps) {
  const base = variant === "primary" ? "btn-primary text-sm" : "btn-ghost text-sm";
  return (
    <a href={href} className={`${base} ${className}`.trim()}>
      <Icon className="h-4 w-4 shrink-0" />
      <span>{children}</span>
      <ArrowRight className="h-4 w-4 shrink-0" />
    </a>
  );
}

type CtaButtonProps = {
  icon: IconType;
  children: ReactNode;
  type?: "button" | "submit";
  disabled?: boolean;
  className?: string;
  loading?: boolean;
  loadingLabel?: string;
};

export function CtaButton({
  icon: Icon,
  children,
  type = "button",
  disabled,
  className = "",
  loading,
  loadingLabel = "Enviando...",
}: CtaButtonProps) {
  return (
    <button type={type} disabled={disabled || loading} className={`btn-primary ${className}`.trim()}>
      {loading ? (
        loadingLabel
      ) : (
        <>
          <Icon className="h-3.5 w-3.5 shrink-0" />
          <span>{children}</span>
          <ArrowRight className="h-3.5 w-3.5 shrink-0" />
        </>
      )}
    </button>
  );
}
