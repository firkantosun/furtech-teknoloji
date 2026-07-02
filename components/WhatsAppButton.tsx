"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/data";
import { handleWhatsAppConversion } from "@/lib/analytics";

export default function WhatsAppButton() {
  const message = encodeURIComponent(
    "Merhaba Furtech Teknoloji, projem hakkında bilgi almak istiyorum."
  );
  const url = `https://wa.me/${siteConfig.whatsapp}?text=${message}`;

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(event) => handleWhatsAppConversion(event, url)}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 transition-transform hover:scale-105"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      aria-label="WhatsApp ile iletişime geç"
    >
      <MessageCircle size={28} fill="currentColor" />
      <span className="absolute -top-1 -right-1 flex h-4 w-4">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-60" />
        <span className="relative inline-flex h-4 w-4 rounded-full bg-[#128C7E]" />
      </span>
    </motion.a>
  );
}
