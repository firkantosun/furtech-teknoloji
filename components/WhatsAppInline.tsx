"use client";

import { getWhatsAppUrl } from "@/lib/contact";
import { handleWhatsAppConversion } from "@/lib/analytics";

export default function WhatsAppInline({ className, label = "WhatsApp'tan yazın" }: { className?: string; label?: string }) {
  const url = getWhatsAppUrl();
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => handleWhatsAppConversion(e, url)}
      className={className}
    >
      {label}
    </a>
  );
}
