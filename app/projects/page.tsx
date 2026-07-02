"use client";

import { useState } from "react";
import PageHero from "@/components/PageHero";
import ProjectCard from "@/components/ProjectCard";
import ReferencesSection from "@/components/ReferencesSection";
import CTASection from "@/components/CTASection";
import { projects } from "@/lib/data";
import { cn } from "@/lib/utils";

const categories = ["Tümü", ...Array.from(new Set(projects.map((p) => p.category)))];

export default function ProjectsPage() {
  const [active, setActive] = useState("Tümü");

  const filtered =
    active === "Tümü" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      <PageHero
        tag="Neler Yapıyoruz"
        title="Projeler ve hizmet alanlarımız"
        description="Web geliştirmeden aquapark dijital altyapısına — gerçek projelerde sunduğumuz uçtan uca teknoloji çözümleri."
      />

      <section className="section-padding bg-cream-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/*
            Proje görselleri: /public/projects/
            1600 × 1000 px · 16:10 oranı · WebP · mümkünse 400 KB altında
          */}
          <div className="mb-12 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActive(cat)}
                className={cn(
                  "rounded-full border px-5 py-2 text-sm font-medium transition-all duration-300",
                  active === cat
                    ? "border-accent bg-accent text-white shadow-sm shadow-accent/30"
                    : "border-stone-200 bg-white text-charcoal-600 hover:border-stone-300 hover:text-charcoal-900"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filtered.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </div>
      </section>

      <ReferencesSection className="section-padding bg-white border-t border-stone-200" />

      <CTASection />
    </>
  );
}
