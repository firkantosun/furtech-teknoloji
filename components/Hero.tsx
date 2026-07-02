"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/data";
import { getWhatsAppUrl } from "@/lib/contact";
import { heroStagger, fadeInBlur } from "@/lib/motion";

const techStack = ["React Native", "Next.js", "Python", "Azure", "AI/ML"];

export default function Hero() {
  const whatsappUrl = getWhatsAppUrl();

  return (
    <section className="relative flex min-h-[100dvh] items-center overflow-hidden bg-cream-50 pt-28 pb-16 sm:pt-32 md:pb-24 lg:pt-36">
      <motion.div className="absolute inset-0 mesh-gradient" aria-hidden="true" />
      <motion.div className="absolute inset-0 grid-pattern opacity-40" aria-hidden="true" />
      <div
        className="absolute left-1/4 top-1/4 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-beige-500/15 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="absolute right-0 top-1/3 h-[400px] w-[400px] rounded-full bg-accent/10 blur-[100px]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-stone-300/60 to-transparent"
        aria-hidden="true"
      />

      <motion.div
        variants={heroStagger}
        initial="hidden"
        animate="visible"
        className="relative mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center">
          <motion.div
            variants={fadeInBlur}
            className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-stone-200 bg-white px-4 py-2 text-sm text-charcoal-600 shadow-sm"
          >
            <Sparkles size={15} className="text-beige-500" />
            <span className="tracking-wide">{siteConfig.tagline}</span>
            <span className="h-1 w-1 rounded-full bg-stone-300" />
            <span className="text-charcoal-500">İstanbul, TR</span>
          </motion.div>

          <motion.h1
            variants={fadeInBlur}
            className="font-display text-[2.75rem] font-bold leading-[1.05] tracking-[-0.03em] text-charcoal-900 sm:text-5xl md:text-6xl xl:text-[4.25rem]"
          >
            Teknoloji ile
            <br />
            <span className="text-gradient-shimmer">geleceği inşa ediyoruz</span>
          </motion.h1>

          <motion.p
            variants={fadeInBlur}
            className="mx-auto mt-6 max-w-2xl text-base leading-[1.7] tracking-[-0.01em] text-charcoal-600 sm:text-lg"
          >
            {siteConfig.description}
          </motion.p>

            <motion.div
              variants={fadeInBlur}
              className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center"
            >
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
            </motion.div>

          <motion.div
            variants={fadeInBlur}
            className="mt-12 flex flex-wrap items-center justify-center gap-2"
          >
            {techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-stone-200 bg-white px-3 py-1.5 font-mono text-xs text-charcoal-500 shadow-sm"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
