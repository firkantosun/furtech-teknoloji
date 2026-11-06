import { siteConfig, services } from "@/lib/data";

export function getWhatsAppUrl(
  message = "Merhaba Furtech Teknoloji, projem hakkında bilgi almak istiyorum."
) {
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const serviceLabels: Record<string, string> = {
  ...Object.fromEntries(services.map((s) => [s.id, s.title])),
  custom: "Diğer / emin değilim",
};
