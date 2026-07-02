"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Smartphone,
  Cog,
  ShieldCheck,
  Code2,
  Brain,
  Network,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import { fadeInUp } from "@/lib/motion";

const iconMap: Record<string, LucideIcon> = {
  Smartphone,
  Cog,
  ShieldCheck,
  Code2,
  Brain,
  Network,
};

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  features?: string[];
  index?: number;
}

export default function ServiceCard({
  title,
  description,
  icon,
  features,
}: ServiceCardProps) {
  const Icon = iconMap[icon] ?? Code2;

  return (
    <motion.article
      variants={fadeInUp}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-stone-200/90 bg-white p-7 transition-all duration-500 hover:border-stone-300 hover:shadow-lg hover:shadow-charcoal-900/[0.05] sm:p-8"
    >
      <div className="relative mb-6 flex h-11 w-11 items-center justify-center rounded-xl border border-stone-200 bg-cream-50 text-charcoal-700 transition-all duration-300 group-hover:border-beige-300 group-hover:bg-cream-100">
        <Icon size={20} strokeWidth={1.5} />
      </div>

      <h3 className="relative font-display text-xl font-semibold tracking-[-0.02em] text-charcoal-900">
        {title}
      </h3>
      <p className="relative mt-3 flex-1 text-sm leading-[1.7] text-charcoal-600">{description}</p>

      {features && features.length > 0 && (
        <ul className="relative mt-6 space-y-2.5 border-t border-stone-200 pt-6">
          {features.map((f) => (
            <li key={f} className="flex items-center gap-2.5 text-xs text-charcoal-600">
              <span className="h-1 w-1 shrink-0 rounded-full bg-beige-400" />
              {f}
            </li>
          ))}
        </ul>
      )}

      <Link
        href="/contact"
        className="relative mt-7 inline-flex items-center gap-1.5 text-sm font-medium text-charcoal-500 transition-colors duration-300 group-hover:text-charcoal-900"
      >
        Detaylı bilgi
        <ArrowUpRight
          size={15}
          className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      </Link>
    </motion.article>
  );
}
