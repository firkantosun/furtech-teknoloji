"use client";

import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import { services } from "@/lib/data";
import { staggerContainer } from "@/lib/motion";

export default function ServicesPage() {
  return (
    <>
      <PageHero
        tag="Hizmetler"
        title="İşinize özel teknoloji çözümleri"
        description="Mobil uygulamadan yapay zekaya, dijital dönüşüm yolculuğunuzda yanınızdayız."
      />

      <section className="section-padding bg-cream-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid gap-6 md:grid-cols-2"
          >
            {services.map((service, i) => (
              <ServiceCard key={service.id} {...service} index={i} />
            ))}
          </motion.div>
        </div>
      </section>

      <section className="border-t border-stone-200 bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            tag="Süreç"
            title="Nasıl çalışıyoruz?"
            description="Şeffaf ve iteratif bir süreçle projelerinizi güvenle hayata geçiriyoruz."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { step: "01", title: "Keşif", desc: "İhtiyaç analizi ve teknik yol haritası." },
              { step: "02", title: "Tasarım", desc: "UI/UX prototip ve mimari planlama." },
              { step: "03", title: "Geliştirme", desc: "Agile sprint'ler ile iteratif kodlama." },
              { step: "04", title: "Teslimat", desc: "Yayın, eğitim ve sürekli destek." },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl border border-stone-200 bg-cream-50 p-6"
              >
                <span className="font-display text-3xl font-bold text-stone-300">{item.step}</span>
                <h3 className="mt-2 font-display text-lg font-semibold text-charcoal-900">{item.title}</h3>
                <p className="mt-2 text-sm text-charcoal-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
