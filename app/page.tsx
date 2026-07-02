"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import SectionHeader from "@/components/SectionHeader";
import ServiceCard from "@/components/ServiceCard";
import ProjectCard from "@/components/ProjectCard";
import ReferencesSection from "@/components/ReferencesSection";
import CTASection from "@/components/CTASection";
import { services, projects } from "@/lib/data";
import { staggerContainer } from "@/lib/motion";

export default function HomePage() {
  const featuredServices = services.slice(0, 3);

  return (
    <>
      <Hero />
      <StatsBar />

      <section className="section-padding bg-cream-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            tag="Hizmetler"
            title="Kapsamlı teknoloji çözümleri"
            description="Web sitesinden mobil uygulamaya, geçiş sistemlerinden operasyon panellerine — işletmenize özel uçtan uca hizmetler."
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-3"
          >
            {featuredServices.map((service, i) => (
              <ServiceCard key={service.id} {...service} index={i} />
            ))}
          </motion.div>
          <div className="mt-14 text-center">
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 text-sm font-medium text-charcoal-500 transition-colors duration-300 hover:text-charcoal-900"
            >
              Tüm hizmetleri görüntüle
              <ArrowRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>

      <section className="relative border-t border-stone-200 bg-white section-padding">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            tag="Neler Yapıyoruz"
            title="Gerçek projeler, ölçülebilir sonuçlar"
            description="Web geliştirmeden aquapark dijital altyapısına — sahada hayata geçirdiğimiz hizmet alanlarımız."
          />
          {/*
            Görseller: /public/projects/ · 1600×1000 px · 16:10 · WebP · ~400 KB altı
          */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
          >
            {projects.map((project, i) => (
              <ProjectCard key={project.id} {...project} index={i} />
            ))}
          </motion.div>
          <div className="mt-14 text-center">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 text-sm font-medium text-charcoal-500 transition-colors duration-300 hover:text-charcoal-900"
            >
              Tüm projeleri inceleyin
              <ArrowRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>

      <ReferencesSection />

      <section className="section-padding bg-cream-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
            <SectionHeader
              tag="Neden Furtech?"
              title="Güvenilir teknoloji ortağınız"
              description="Kurumsal web sitelerinden aquapark dijital altyapısına kadar — ölçeklenebilir, güvenli ve sürdürülebilir yazılım çözümleri sunuyoruz."
              align="left"
              className="mb-0"
            />
            <motion.div
              initial={{ opacity: 0, x: 32, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="grid gap-4 sm:grid-cols-2"
            >
              {[
                { title: "Uzman Ekip", desc: "Full-stack geliştiriciler ve sistem mimarları." },
                { title: "Hızlı Teslimat", desc: "Agile metodoloji ile iteratif geliştirme." },
                { title: "7/24 Destek", desc: "Canlıya alma sonrası kesintisiz teknik destek." },
                { title: "Güvenlik", desc: "Kurumsal standartlarda veri güvenliği." },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -3 }}
                  className="rounded-2xl border border-stone-200 bg-white p-6 transition-all duration-300 hover:border-stone-300 hover:shadow-md hover:shadow-charcoal-900/[0.04]"
                >
                  <h3 className="font-display text-base font-semibold tracking-[-0.02em] text-charcoal-900">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-[1.6] text-charcoal-600">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
