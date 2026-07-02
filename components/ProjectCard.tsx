"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ImageIcon } from "lucide-react";
import SafeImage from "@/components/SafeImage";
import { fadeInUp } from "@/lib/motion";

/**
 * Project card image container — fixed 16:10 ratio sitewide.
 *
 * Add images to /public/projects/ using these specs:
 * - 1600 × 1000 px (16:10)
 * - Format: WebP
 * - File size: under 400 KB when possible
 */
const PROJECT_IMAGE_WIDTH = 1600;
const PROJECT_IMAGE_HEIGHT = 1000;

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  index?: number;
}

function ProjectImagePlaceholder({ label }: { label: string }) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-cream-200 px-6 text-center">
      <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-stone-300/80 bg-white text-charcoal-400">
        <ImageIcon size={22} strokeWidth={1.5} />
      </span>
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-charcoal-500">
          Görsel ekleyin
        </p>
        <p className="mt-1 font-mono text-[10px] text-charcoal-400">{label}</p>
        <p className="mt-2 text-[10px] text-charcoal-400">1600 × 1000 · 16:10 · WebP</p>
      </div>
    </div>
  );
}

export default function ProjectCard({
  title,
  category,
  description,
  image,
  tags,
}: ProjectCardProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.article
      variants={fadeInUp}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-stone-200/90 bg-white transition-all duration-500 hover:border-stone-300 hover:shadow-xl hover:shadow-charcoal-900/[0.07]"
    >
      <div className="project-image-ratio relative overflow-hidden bg-cream-200">
        {!imageError ? (
          <SafeImage
            src={image}
            alt={title}
            width={PROJECT_IMAGE_WIDTH}
            height={PROJECT_IMAGE_HEIGHT}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            onImageError={() => setImageError(true)}
          />
        ) : (
          <ProjectImagePlaceholder label={image} />
        )}

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal-900/25 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="absolute left-4 top-4 rounded-lg border border-white/60 bg-white/90 px-3 py-1.5 text-[11px] font-medium text-charcoal-700 shadow-sm backdrop-blur-sm">
          {category}
        </div>

        <div className="absolute right-4 top-4 flex h-10 w-10 translate-y-1 items-center justify-center rounded-full border border-white/60 bg-white/90 text-charcoal-800 opacity-0 shadow-sm backdrop-blur-sm transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowUpRight size={17} />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h3 className="font-display text-lg font-semibold tracking-[-0.02em] text-charcoal-900">
          {title}
        </h3>
        <p className="mt-2.5 flex-1 text-sm leading-[1.7] text-charcoal-600">{description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-stone-200 bg-cream-50 px-2.5 py-1 font-mono text-[11px] text-charcoal-600"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
