"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/motion";
import { stats } from "@/lib/data";

export default function StatsBar() {
  return (
    <section className="relative border-y border-stone-200 bg-white">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        className="relative mx-auto grid max-w-7xl grid-cols-2 gap-px md:grid-cols-4"
      >
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            variants={fadeInUp}
            className={`px-6 py-10 text-center sm:px-8 sm:py-12 ${
              i < stats.length - 1 ? "md:border-r md:border-stone-200" : ""
            } ${i % 2 === 0 ? "border-r border-stone-200 md:border-r" : ""} ${
              i < 2 ? "border-b border-stone-200 md:border-b-0" : ""
            }`}
          >
            <div className="font-display text-3xl font-bold tracking-[-0.03em] text-charcoal-900 sm:text-4xl lg:text-5xl">
              {stat.value}
            </div>
            <div className="mt-2 text-xs font-medium uppercase tracking-[0.12em] text-charcoal-500 sm:text-sm">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
