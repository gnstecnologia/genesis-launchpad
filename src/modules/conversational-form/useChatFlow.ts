import { useCallback, useEffect, useRef, useState } from "react";
import type { LeadFormValues } from "@/lib/lead-form-submission";
import { FORM_STEPS } from "./config";
import { getTypingDelay } from "./constants";
import type { ChatMessage, FormStep } from "./types";

function delay(ms: number) {
  return new Promise<void>((resolve) => {
    window.setTimeout(resolve, ms);
  });
}

function createMessage(role: ChatMessage["role"], text: string): ChatMessage {
  return {
    id: `${role}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    role,
    text,
  };
}

function formatAnswer(step: FormStep, value: string) {
  if (step.kind !== "choice" && step.formatAnswer) {
    return step.formatAnswer(value);
  }
  return value.trim();
}

type UseChatFlowOptions = {
  onComplete: (values: LeadFormValues) => Promise<void>;
};

export function useChatFlow({ onComplete }: UseChatFlowOptions) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [stepIndex, setStepIndex] = useState(0);
  const [values, setValues] = useState<Partial<LeadFormValues>>({});
  const [isTyping, setIsTyping] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const initialized = useRef(false);
  const queueRef = useRef(Promise.resolve());

  const currentStep = FORM_STEPS[stepIndex];
  const isComplete = stepIndex >= FORM_STEPS.length;

  const enqueue = useCallback((task: () => Promise<void>) => {
    queueRef.current = queueRef.current.then(task).catch(() => undefined);
    return queueRef.current;
  }, []);

  const pushBotMessage = useCallback(async (text: string) => {
    setIsTyping(true);
    await delay(getTypingDelay(text));
    setIsTyping(false);
    setMessages((prev) => [...prev, createMessage("bot", text)]);
  }, []);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;
    void enqueue(async () => {
      await pushBotMessage(FORM_STEPS[0].question({}));
    });
  }, [enqueue, pushBotMessage]);

  const submitAnswer = useCallback(
    (rawValue: string) => {
      if (!currentStep || isSubmitting || isComplete) return;

      const value = rawValue.trim();
      const validationError = currentStep.validate(value);
      if (validationError) {
        setError(validationError);
        return;
      }

      setError(null);
      const displayValue = formatAnswer(currentStep, value);
      const nextValues = { ...values, [currentStep.id]: value };
      setValues(nextValues);
      setMessages((prev) => [...prev, createMessage("user", displayValue)]);

      void enqueue(async () => {
        const nextIndex = stepIndex + 1;
        if (nextIndex >= FORM_STEPS.length) {
          setIsSubmitting(true);
          await pushBotMessage("Perfeito! ✨ Estou enviando suas informações para nossa equipe...");
          await onComplete(nextValues as LeadFormValues);
          return;
        }

        setStepIndex(nextIndex);
        await pushBotMessage(FORM_STEPS[nextIndex].question(nextValues));
      });
    },
    [currentStep, enqueue, isComplete, isSubmitting, onComplete, pushBotMessage, stepIndex, values],
  );

  return {
    messages,
    currentStep: isComplete ? null : currentStep,
    isTyping,
    error,
    isSubmitting,
    submitAnswer,
    setError,
  };
}
