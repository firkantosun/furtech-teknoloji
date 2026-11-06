"use client";

import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/contact";
import { handleWhatsAppConversion } from "@/lib/analytics";

export default function WhatsAppButton() {
  const url = getWhatsAppUrl();

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(event) => handleWhatsAppConversion(event, url)}
      className="fixed bottom-5 right-5 z-40 flex h-14 items-center gap-2 rounded-full bg-[#1faa53] pl-4 pr-5 text-[0.95rem] font-semibold text-white shadow-[0_6px_20px_-6px_rgba(31,170,83,0.6)] transition-transform hover:-translate-y-0.5"
      aria-label="WhatsApp ile yazın"
    >
      <MessageCircle size={22} fill="currentColor" aria-hidden="true" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
