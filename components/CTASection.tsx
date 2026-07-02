"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/contact";
import { fadeInBlur } from "@/lib/motion";

export default function CTASection() {
  const whatsappUrl = getWhatsAppUrl();

  return (
    <section className="section-padding">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeInBlur}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="relative overflow-hidden rounded-3xl border border-stone-200 bg-white p-10 text-center shadow-sm md:p-16 lg:p-20"
        >
          <div className="absolute inset-0 mesh-gradient opacity-70" aria-hidden="true" />
          <div className="relative">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-stone-200 bg-cream-50 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-charcoal-500">
              <span className="h-1 w-1 rounded-full bg-beige-400" />
              Hemen Başlayın
            </span>
            <h2 className="font-display text-3xl font-bold tracking-[-0.03em] text-charcoal-900 sm:text-4xl lg:text-5xl">
              Projenizi birlikte hayata geçirelim
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-base leading-[1.7] text-charcoal-600 sm:text-lg">
              Formu doldurun, WhatsApp ile yazın veya doğrudan teklif alın. Talebiniz
              furkantosun@furtech.com.tr adresine iletilir.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
              <Link href="/contact" className="btn-primary group w-full sm:w-auto">
                Proje Başlatın
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-7 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.02] sm:w-auto"
              >
                <MessageCircle size={17} />
                WhatsApp ile Yazın
              </a>
              <Link href="/contact#teklif-formu" className="btn-secondary w-full sm:w-auto">
                Teklif Alın
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
