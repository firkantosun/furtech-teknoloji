"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import { references } from "@/lib/data";
import { staggerContainer, fadeInUp } from "@/lib/motion";

function getMonogram(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase() ?? "")
    .join("");
}

function ReferenceCard({
  name,
  sector,
}: {
  name: string;
  sector: string;
}) {
  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="group flex h-full flex-col items-center justify-center rounded-2xl border border-stone-200/90 bg-white px-6 py-10 text-center transition-all duration-500 hover:border-stone-300 hover:shadow-lg hover:shadow-charcoal-900/[0.05]"
    >
      <div className="relative mb-5 flex h-16 w-full max-w-[180px] items-center justify-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-xl border border-stone-200 bg-cream-50 font-display text-lg font-semibold tracking-tight text-charcoal-700 transition-colors duration-300 group-hover:border-stone-300 group-hover:bg-cream-100">
          {getMonogram(name)}
        </span>
      </div>
      <h3 className="font-display text-base font-semibold tracking-[-0.02em] text-charcoal-900">
        {name}
      </h3>
      <p className="mt-1.5 text-xs font-medium uppercase tracking-[0.1em] text-charcoal-500">
        {sector}
      </p>
    </motion.div>
  );
}

export default function ReferencesSection({ className }: { className?: string }) {
  return (
    <section className={className ?? "section-padding bg-cream-50 border-t border-stone-200"}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="Referanslarımız"
          title="Güvenen markalar"
          description="Farklı sektörlerde birlikte çalıştığımız iş ortaklarımız ve referanslarımız."
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4 lg:gap-6"
        >
          {references.map((ref) => (
            <ReferenceCard key={ref.id} {...ref} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
