import { siteConfig } from "@/lib/data";

export function getWhatsAppUrl(
  message = "Merhaba, projem hakkında bilgi almak istiyorum."
) {
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const serviceLabels: Record<string, string> = {
  web: "Web Sitesi Geliştirme",
  mobile: "Mobil Uygulama",
  access: "Turnike & Kartlı Geçiş",
  panel: "Yönetim Paneli",
  aquapark: "Dijital Sistem Kurulumu",
  ai: "Yapay Zeka Çözümleri",
  custom: "Özel Yazılım",
};
