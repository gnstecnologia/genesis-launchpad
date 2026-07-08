import type { LeadFormValues } from "@/lib/lead-form-submission";

export type FormStepId = keyof LeadFormValues;

export type ChatMessage = {
  id: string;
  role: "bot" | "user";
  text: string;
};

export type TextFormStep = {
  id: FormStepId;
  kind: "text" | "email" | "tel";
  question: (values: Partial<LeadFormValues>) => string;
  placeholder: string;
  prefix?: string;
  validate: (value: string) => string | null;
  formatAnswer?: (value: string) => string;
};

export type ChoiceFormStep = {
  id: FormStepId;
  kind: "choice";
  question: (values: Partial<LeadFormValues>) => string;
  options: readonly string[];
  validate: (value: string) => string | null;
};

export type FormStep = TextFormStep | ChoiceFormStep;
