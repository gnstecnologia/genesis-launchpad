import type { ComponentType, ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { useConversationalForm } from "./ConversationalFormProvider";

type IconType = ComponentType<{ className?: string }>;

type FormCtaLinkProps = {
  icon: IconType;
  children: ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
};

export function FormCtaLink({
  icon: Icon,
  children,
  variant = "primary",
  className = "",
}: FormCtaLinkProps) {
  const { openForm } = useConversationalForm();
  const base = variant === "primary" ? "btn-primary text-sm" : "btn-ghost text-sm";

  return (
    <button type="button" onClick={openForm} className={`${base} ${className}`.trim()}>
      <Icon className="h-4 w-4 shrink-0" />
      <span>{children}</span>
      <ArrowRight className="h-4 w-4 shrink-0" />
    </button>
  );
}
