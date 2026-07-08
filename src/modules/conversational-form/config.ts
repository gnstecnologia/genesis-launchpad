import type { FormStep } from "./types";

export const FATURAMENTO_OPTIONS = [
  "Até R$ 50 mil",
  "R$ 50 mil – R$ 200 mil",
  "R$ 200 mil – R$ 500 mil",
  "R$ 500 mil – R$ 1 milhão",
  "Acima de R$ 1 milhão",
] as const;

export const SEGMENTO_OPTIONS = [
  "Saúde e estética",
  "Serviços profissionais",
  "E-commerce e varejo",
  "Educação",
  "Indústria",
  "Tecnologia / SaaS",
  "Outro",
] as const;

export const DESAFIO_OPTIONS = [
  "Gerar mais leads qualificados",
  "Estruturar marketing e marca",
  "Aumentar vendas e previsibilidade",
  "Profissionalizar conteúdo e audiovisual",
  "Implementar CRM, IA e automação",
] as const;

function required(value: string) {
  return value.trim() ? null : "Este campo é obrigatório.";
}

function validateEmail(value: string) {
  if (!value.trim()) return "Este campo é obrigatório.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
    return "Informe um e-mail válido.";
  }
  return null;
}

function validatePhone(value: string) {
  const digits = value.replace(/\D/g, "");
  if (!digits) return "Este campo é obrigatório.";
  if (digits.length < 10 || digits.length > 11) {
    return "Informe um WhatsApp válido com DDD.";
  }
  return null;
}

export const FORM_STEPS: FormStep[] = [
  {
    id: "nome",
    kind: "text",
    question: () =>
      "Olá! 👋 Aqui é o Lucas, da Genesis Company.\n\nVamos começar seu diagnóstico gratuito. Qual é o seu nome completo?",
    placeholder: "Seu nome completo",
    validate: (value) => {
      if (!value.trim()) return "Este campo é obrigatório.";
      if (value.trim().length < 2) return "Por favor, informe seu nome completo.";
      return null;
    },
  },
  {
    id: "email",
    kind: "email",
    question: (values) =>
      `Prazer, ${values.nome}! 😊\n\nQual é o seu melhor e-mail?`,
    placeholder: "Seu melhor e-mail",
    validate: validateEmail,
  },
  {
    id: "whatsapp",
    kind: "tel",
    question: () => "Ótimo! Agora me passa seu WhatsApp com DDD:",
    placeholder: "(11) 99999-9999",
    prefix: "+55",
    validate: validatePhone,
    formatAnswer: (value) => `+55 ${value.trim()}`,
  },
  {
    id: "empresa",
    kind: "text",
    question: () => "Qual é o nome da sua empresa?",
    placeholder: "Nome da sua empresa",
    validate: required,
  },
  {
    id: "faturamento",
    kind: "choice",
    question: () => "Qual é o faturamento mensal da sua empresa?",
    options: FATURAMENTO_OPTIONS,
    validate: required,
  },
  {
    id: "segmento",
    kind: "choice",
    question: () => "Em qual segmento sua empresa atua?",
    options: SEGMENTO_OPTIONS,
    validate: required,
  },
  {
    id: "desafio",
    kind: "choice",
    question: () => "Qual é o seu maior desafio hoje?",
    options: DESAFIO_OPTIONS,
    validate: required,
  },
];
