"use client";

import { motion } from "framer-motion";
import { fadeInBlur } from "@/lib/motion";

interface PageHeroProps {
  tag: string;
  title: string;
  description: string;
}

export default function PageHero({ tag, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-stone-200 bg-white pt-32 pb-20 md:pt-40 md:pb-24">
      <div className="absolute inset-0 mesh-gradient" aria-hidden="true" />
      <div className="absolute inset-0 grid-pattern opacity-30" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <motion.span
          variants={fadeInBlur}
          initial="hidden"
          animate="visible"
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-stone-200 bg-cream-50 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-charcoal-500 shadow-sm"
        >
          <span className="h-1 w-1 rounded-full bg-beige-400" />
          {tag}
        </motion.span>
        <motion.h1
          variants={fadeInBlur}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.1 }}
          className="font-display text-4xl font-bold tracking-[-0.03em] text-charcoal-900 sm:text-5xl md:text-6xl"
        >
          {title}
        </motion.h1>
        <motion.p
          variants={fadeInBlur}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
          className="mx-auto mt-5 max-w-2xl text-base leading-[1.7] text-charcoal-600 sm:text-lg"
        >
          {description}
        </motion.p>
      </div>
    </section>
  );
}
