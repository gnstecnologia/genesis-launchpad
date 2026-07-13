import { ArrowLeft, Lock, Send } from "lucide-react";
import type { FormEvent, KeyboardEvent } from "react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { captureUtms, submitLeadForm } from "@/lib/lead-form-submission";
import { CHAT_AGENT } from "./constants";
import { LucasAvatar } from "./components/LucasAvatar";
import { useConversationalForm } from "./ConversationalFormProvider";
import { useChatFlow } from "./useChatFlow";
import "./conversational-form.css";

function ChatBubble({ role, text }: { role: "bot" | "user"; text: string }) {
  const lines = text.split("\n");

  return (
    <div className={`cf-row ${role === "user" ? "cf-row-user" : "cf-row-bot"}`}>
      <div className="cf-row-inner">
        {role === "bot" && <LucasAvatar />}
        <div className={`cf-bubble ${role === "user" ? "cf-bubble-user" : "cf-bubble-bot"}`}>
          {lines.map((line, index) => (
            <span key={`${line}-${index}`}>
              {line}
              {index < lines.length - 1 && <br />}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function ChatTypingIndicator() {
  return (
    <div className="cf-typing-row">
      <LucasAvatar />
      <div className="cf-typing-dots" aria-label="Lucas está digitando">
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}

function ChatOptionButtons({
  options,
  disabled,
  onSelect,
}: {
  options: readonly string[];
  disabled?: boolean;
  onSelect: (value: string) => void;
}) {
  return (
    <div className="cf-options">
      {options.map((option) => (
        <button
          key={option}
          type="button"
          disabled={disabled}
          onClick={() => onSelect(option)}
          className="cf-option-btn"
        >
          {option}
        </button>
      ))}
    </div>
  );
}

function ChatInputBar({
  placeholder,
  prefix,
  inputType = "text",
  disabled,
  error,
  onSubmit,
}: {
  placeholder: string;
  prefix?: string;
  inputType?: "text" | "email" | "tel";
  disabled?: boolean;
  error?: string | null;
  onSubmit: (value: string) => void;
}) {
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!disabled) {
      const timer = window.setTimeout(() => inputRef.current?.focus(), 50);
      return () => window.clearTimeout(timer);
    }
  }, [disabled, placeholder]);

  function handleSubmit(event?: FormEvent) {
    event?.preventDefault();
    if (!value.trim() || disabled) return;
    onSubmit(value);
    setValue("");
  }

  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSubmit();
    }
  }

  return (
    <div className="cf-input-wrap">
      <div className="cf-input-inner">
        {error && <p className="cf-error">{error}</p>}
        <form onSubmit={handleSubmit} className="cf-input-row">
          <div className="cf-input-gradient">
            <div className="flex items-center min-h-[3rem] rounded-[10px] bg-slate-900/90">
              {prefix && <span className="pl-3 pr-1 text-sm text-gray-400 shrink-0">{prefix}</span>}
              <input
                ref={inputRef}
                type={inputType}
                value={value}
                disabled={disabled}
                onChange={(event) => setValue(event.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={placeholder}
                className="cf-input !min-h-0 !bg-transparent flex-1"
                autoComplete="off"
              />
            </div>
          </div>
          <div className={`cf-send-gradient ${!value.trim() ? "is-disabled" : ""}`}>
            <button
              type="submit"
              disabled={disabled || !value.trim()}
              className="cf-send-btn"
              aria-label="Enviar"
            >
              <Send className="h-5 w-5" />
            </button>
          </div>
        </form>
        <div className="cf-privacy">
          <p className="cf-privacy-lock">
            <Lock className="h-3 w-3" />
            Seus dados estão seguros. Sem spam.
          </p>
          <div className="cf-privacy-links">
            <a href="#">Política de Privacidade</a>
            <a href="#">Termos de Uso</a>
          </div>
          <p>
            <strong>Genesis Company</strong> · CNPJ 52.906.973/0001-98
          </p>
          <p>Contato: contato@companygenesis.com.br</p>
          <p>© {new Date().getFullYear()} Genesis Company · Todos os direitos reservados</p>
        </div>
      </div>
    </div>
  );
}

export function ConversationalFormView() {
  const navigate = useNavigate();
  const { closeForm } = useConversationalForm();
  const scrollRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    captureUtms();
  }, []);

  const {
    messages,
    currentStep,
    progress,
    isTyping,
    error,
    isSubmitting,
    submitAnswer,
    setError,
  } = useChatFlow({
    onComplete: async (values) => {
      try {
        await submitLeadForm(values);
        navigate({ to: "/obrigado" });
      } catch {
        setError("Não foi possível enviar agora. Tente novamente.");
      }
    },
  });

  useLayoutEffect(() => {
    const node = scrollRef.current;
    const anchor = bottomRef.current;
    if (!node) return;

    const scrollToBottom = () => {
      if (anchor) {
        anchor.scrollIntoView({ block: "end", behavior: "auto" });
      }
      node.scrollTop = node.scrollHeight;
    };

    scrollToBottom();
    const raf = window.requestAnimationFrame(scrollToBottom);
    const timer = window.setTimeout(scrollToBottom, 80);

    return () => {
      window.cancelAnimationFrame(raf);
      window.clearTimeout(timer);
    };
  }, [messages, isTyping, error, currentStep]);

  useEffect(() => {
    setError(null);
  }, [currentStep, setError]);

  const showInput = Boolean(currentStep) && !isSubmitting;
  const inputPlaceholder =
    currentStep?.kind === "choice"
      ? "Ou digite..."
      : currentStep?.placeholder ?? "Digite sua resposta...";

  const inputType =
    currentStep && currentStep.kind !== "choice"
      ? currentStep.kind === "text"
        ? "text"
        : currentStep.kind
      : "text";

  return (
    <div
      className="cf-shell"
      style={{ backgroundImage: `url(${CHAT_AGENT.backgroundSrc})` }}
    >
      <div className="cf-overlay-dark" />
      <div className="cf-overlay-gradient" />

      <header className="cf-header">
        <div className="cf-header-inner">
          <div className="cf-header-top">
            <button
              type="button"
              onClick={closeForm}
              className="cf-header-back"
              aria-label="Voltar para a landing page"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <img src={CHAT_AGENT.logoSrc} alt="Genesis Company" className="cf-header-logo" />
          </div>
          <div className="cf-progress-track" aria-hidden>
            <div className="cf-progress-bar" style={{ width: `${progress}%` }} />
          </div>
        </div>
      </header>

      <div ref={scrollRef} className="cf-messages">
        <div className="cf-messages-inner">
          {messages.map((message) => (
            <ChatBubble key={message.id} role={message.role} text={message.text} />
          ))}
          {isTyping && <ChatTypingIndicator />}

          {currentStep?.kind === "choice" && !isTyping && (
            <ChatOptionButtons
              options={currentStep.options}
              disabled={isSubmitting}
              onSelect={submitAnswer}
            />
          )}

          {currentStep?.kind === "choice" && error && <p className="cf-error">{error}</p>}
          <div ref={bottomRef} className="cf-scroll-anchor" aria-hidden />
        </div>
      </div>

      {showInput && (
        <ChatInputBar
          placeholder={inputPlaceholder}
          prefix={currentStep?.kind !== "choice" ? currentStep?.prefix : undefined}
          inputType={inputType}
          disabled={isTyping}
          error={currentStep?.kind === "choice" ? null : error}
          onSubmit={submitAnswer}
        />
      )}
    </div>
  );
}
