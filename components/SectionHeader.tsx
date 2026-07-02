"use client";

import { motion } from "framer-motion";
import { fadeInBlur } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  tag?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeader({
  tag,
  title,
  description,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <motion.div
      variants={fadeInBlur}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className={cn(
        "mb-14 md:mb-20",
        align === "center" && "mx-auto max-w-2xl text-center",
        className
      )}
    >
      {tag && (
        <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-charcoal-500 shadow-sm">
          <span className="h-1 w-1 rounded-full bg-beige-400" />
          {tag}
        </span>
      )}
      <h2 className="font-display text-3xl font-bold tracking-[-0.03em] text-charcoal-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-[1.7] tracking-[-0.01em] text-charcoal-600 sm:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
}
