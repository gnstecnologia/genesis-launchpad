import { ArrowLeft, Lock, Send } from "lucide-react";
import type { FormEvent, KeyboardEvent } from "react";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { captureUtms, submitLeadForm } from "@/lib/lead-form-submission";
import { CHAT_AGENT } from "./constants";
import { LucasAvatar } from "./components/LucasAvatar";
import { useConversationalForm } from "./ConversationalFormProvider";
import { useChatFlow } from "./useChatFlow";
import "./conversational-form.css";

function formatTime(date = new Date()) {
  return date.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
}

function ChatHeader({ onBack }: { onBack: () => void }) {
  return (
    <header className="cf-header">
      <button type="button" onClick={onBack} className="cf-header-back" aria-label="Voltar para a landing page">
        <ArrowLeft className="h-5 w-5" />
      </button>
      <LucasAvatar size="lg" />
      <div className="cf-header-info">
        <p className="cf-header-name">
          {CHAT_AGENT.name}
          <img src="/genesis-logo.svg" alt="" className="h-3.5 w-3.5 opacity-80" />
        </p>
        <p className="cf-header-status">{CHAT_AGENT.status}</p>
      </div>
    </header>
  );
}

function ChatBubble({ role, text }: { role: "bot" | "user"; text: string }) {
  const lines = text.split("\n");

  return (
    <div className={`cf-row ${role === "user" ? "cf-row-user" : "cf-row-bot"}`}>
      {role === "bot" && <LucasAvatar size="sm" />}
      <div className="cf-bubble-wrap">
        <div className={`cf-bubble ${role === "user" ? "cf-bubble-user" : "cf-bubble-bot"}`}>
          {lines.map((line, index) => (
            <span key={`${line}-${index}`}>
              {line}
              {index < lines.length - 1 && <br />}
            </span>
          ))}
        </div>
        <div className="cf-bubble-meta">
          <span>{formatTime()}</span>
          {role === "user" && <span className="cf-check">✓✓</span>}
        </div>
      </div>
    </div>
  );
}

function ChatTypingIndicator() {
  return (
    <div className="cf-row cf-row-bot">
      <LucasAvatar size="sm" />
      <div className="cf-bubble-wrap">
        <div className="cf-bubble cf-bubble-bot cf-typing">
          <span />
          <span />
          <span />
        </div>
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
      {error && <p className="cf-error">{error}</p>}
      <form onSubmit={handleSubmit} className="cf-input-bar">
        {prefix && <span className="cf-input-prefix">{prefix}</span>}
        <input
          type={inputType}
          value={value}
          disabled={disabled}
          onChange={(event) => setValue(event.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="cf-input"
          autoComplete="off"
        />
        <button type="submit" disabled={disabled || !value.trim()} className="cf-send-btn" aria-label="Enviar">
          <Send className="h-4 w-4" />
        </button>
      </form>
      <p className="cf-privacy">
        <Lock className="h-3 w-3" />
        Seus dados estão seguros. Sem spam.
      </p>
    </div>
  );
}

export function ConversationalFormView() {
  const navigate = useNavigate();
  const { closeForm } = useConversationalForm();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    captureUtms();
  }, []);

  const { messages, currentStep, isTyping, error, isSubmitting, submitAnswer, setError } = useChatFlow({
    onComplete: async (values) => {
      try {
        await submitLeadForm(values);
        navigate({ to: "/obrigado" });
      } catch {
        setError("Não foi possível enviar agora. Tente novamente.");
      }
    },
  });

  useEffect(() => {
    const node = scrollRef.current;
    if (!node) return;
    node.scrollTop = node.scrollHeight;
  }, [messages, isTyping, error, currentStep]);

  useEffect(() => {
    setError(null);
  }, [currentStep, setError]);

  return (
    <div className="cf-shell">
      <ChatHeader onBack={closeForm} />

      <div ref={scrollRef} className="cf-messages">
        <div className="cf-messages-inner">
          {messages.map((message) => (
            <ChatBubble key={message.id} role={message.role} text={message.text} />
          ))}
          {isTyping && <ChatTypingIndicator />}
        </div>
      </div>

      {currentStep?.kind === "choice" && (
        <ChatOptionButtons
          options={currentStep.options}
          disabled={isTyping || isSubmitting}
          onSelect={submitAnswer}
        />
      )}

      {currentStep && currentStep.kind !== "choice" && (
        <ChatInputBar
          placeholder={currentStep.placeholder}
          prefix={currentStep.prefix}
          inputType={currentStep.kind === "text" ? "text" : currentStep.kind}
          disabled={isTyping || isSubmitting}
          error={error}
          onSubmit={submitAnswer}
        />
      )}

      {currentStep?.kind === "choice" && error && (
        <div className="cf-input-wrap">
          <p className="cf-error">{error}</p>
        </div>
      )}
    </div>
  );
}
