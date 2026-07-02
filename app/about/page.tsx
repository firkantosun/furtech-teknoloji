"use client";

import { motion } from "framer-motion";
import { Target, Eye, Users } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import StatsBar from "@/components/StatsBar";
import CTASection from "@/components/CTASection";
import { values } from "@/lib/data";
import { fadeInUp, staggerContainer } from "@/lib/motion";

export default function AboutPage() {
  return (
    <>
      <PageHero
        tag="Hakkımızda"
        title="Furtech Teknoloji"
        description="Teknolojiyi iş hedeflerinizle buluşturan, güvenilir ve yenilikçi yazılım ortağınız."
      />

      <StatsBar />

      <section className="section-padding bg-cream-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-xs font-semibold uppercase tracking-widest text-charcoal-500">
                Hikayemiz
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold text-charcoal-900 sm:text-4xl">
                2020&apos;den beri dijital dönüşümün öncüsü
              </h2>
              <div className="mt-6 space-y-4 leading-relaxed text-charcoal-600">
                <p>
                  Furtech Teknoloji olarak mobil uygulama geliştirmeden endüstriyel otomasyona,
                  turnike ve kartlı geçiş sistemlerinden yapay zeka çözümlerine kadar geniş bir
                  yelpazede hizmet veriyoruz.
                </p>
                <p>
                  Müşterilerimizin operasyonel verimliliğini artırmak, güvenliği güçlendirmek ve
                  rekabet avantajı kazanmalarını sağlamak için özel yazılım çözümleri üretiyoruz.
                </p>
                <p>
                  Deneyimli ekibimiz, her projede kalite, şeffaflık ve uzun vadeli ortaklık
                  ilkeleriyle hareket eder.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid gap-4"
            >
              {[
                { icon: Target, title: "Misyon", text: "İşletmelerin dijital dönüşümünü erişilebilir ve ölçülebilir kılmak." },
                { icon: Eye, title: "Vizyon", text: "Türkiye'nin en güvenilir teknoloji çözüm ortağı olmak." },
                { icon: Users, title: "Ekip", text: "20+ uzman geliştirici, tasarımcı ve proje yöneticisi." },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-stone-200 bg-cream-50 text-charcoal-700">
                    <item.icon size={22} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-charcoal-900">{item.title}</h3>
                    <p className="mt-1 text-sm text-charcoal-600">{item.text}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="border-t border-stone-200 bg-white section-padding">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            tag="Değerlerimiz"
            title="Bizi farklı kılan ilkeler"
            description="Her projede bu değerleri rehber alarak çalışıyoruz."
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {values.map((v) => (
              <motion.div
                key={v.title}
                variants={fadeInUp}
                className="rounded-2xl border border-stone-200 bg-cream-50 p-6 text-center"
              >
                <h3 className="font-display text-lg font-semibold text-charcoal-900">{v.title}</h3>
                <p className="mt-2 text-sm text-charcoal-600">{v.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
