export const SHEETS_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbzsi3ptbQUBGXwULTfNdru30BLRUiGD_DTSz-1UkU_y6NrT0obKNIIFM4uAN8Sg1VHx/exec";

export const GHL_WEBHOOK =
  "https://services.leadconnectorhq.com/hooks/3PX64HuGchlu0IkZet5Z/webhook-trigger/12186784-e7b1-446c-b9bc-d4265986d9d1";

export type LeadFormValues = {
  nome: string;
  email: string;
  whatsapp: string;
  empresa: string;
  faturamento: string;
  segmento: string;
  desafio: string;
};

export type LeadFormUtms = {
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_content: string;
  utm_term: string;
};

export function captureUtms() {
  if (typeof window === "undefined") return;
  const params = new URLSearchParams(window.location.search);
  const keys = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"] as const;
  keys.forEach((k) => {
    const v = params.get(k);
    if (v) sessionStorage.setItem(k, v);
  });
}

export function getUtms(): LeadFormUtms {
  if (typeof window === "undefined") {
    return {
      utm_source: "",
      utm_medium: "",
      utm_campaign: "",
      utm_content: "",
      utm_term: "",
    };
  }
  return {
    utm_source: sessionStorage.getItem("utm_source") || "",
    utm_medium: sessionStorage.getItem("utm_medium") || "",
    utm_campaign: sessionStorage.getItem("utm_campaign") || "",
    utm_content: sessionStorage.getItem("utm_content") || "",
    utm_term: sessionStorage.getItem("utm_term") || "",
  };
}

export async function submitLeadForm(values: LeadFormValues): Promise<void> {
  const utms = getUtms();
  const data = {
    timestamp: new Date().toLocaleString("pt-BR"),
    nome: values.nome,
    email: values.email,
    whatsapp: values.whatsapp,
    empresa: values.empresa,
    faturamento: values.faturamento,
    segmento: values.segmento,
    desafio: values.desafio,
    ...utms,
  };

  await Promise.allSettled([
    fetch(SHEETS_ENDPOINT, {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify(data),
    }),
    fetch(GHL_WEBHOOK, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        full_name: data.nome,
        email: data.email,
        phone: data.whatsapp,
        company_name: data.empresa,
        revenue: data.faturamento,
        segment: data.segmento,
        challenge: data.desafio,
        source: "Landing Page Genesis",
        timestamp: data.timestamp,
        utm_source: utms.utm_source,
        utm_medium: utms.utm_medium,
        utm_campaign: utms.utm_campaign,
        utm_content: utms.utm_content,
        utm_term: utms.utm_term,
      }),
    }),
  ]);
}
