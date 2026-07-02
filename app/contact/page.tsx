"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import TrackablePhoneLink from "@/components/TrackablePhoneLink";
import { getWhatsAppUrl } from "@/lib/contact";
import { handleWhatsAppConversion } from "@/lib/analytics";
import { siteConfig } from "@/lib/data";
import { fadeInUp } from "@/lib/motion";

const contactItems = [
  {
    icon: Mail,
    label: "E-posta",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: Phone,
    label: "Telefon",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone.replace(/\s/g, "")}`,
  },
  {
    icon: MapPin,
    label: "Adres",
    value: siteConfig.address,
    href: null,
  },
  {
    icon: Clock,
    label: "Çalışma Saatleri",
    value: "Pzt – Cum, 09:00 – 18:00",
    href: null,
  },
];

export default function ContactPage() {
  const whatsappUrl = getWhatsAppUrl();

  return (
    <>
      <PageHero
        tag="İletişim"
        title="Bizimle iletişime geçin"
        description="Projenizi konuşmak için formu doldurun veya doğrudan WhatsApp üzerinden yazın."
      />

      <section className="section-padding bg-cream-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <h2 className="font-display text-2xl font-bold text-charcoal-900">
                İletişim bilgileri
              </h2>
              <p className="mt-3 text-charcoal-600">
                Sorularınız için bize ulaşın. Ekibimiz en kısa sürede size dönüş yapacaktır.
              </p>

              <ul className="mt-8 space-y-5">
                {contactItems.map((item) => (
                  <li key={item.label} className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-stone-200 bg-white text-charcoal-700 shadow-sm">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-charcoal-500">
                        {item.label}
                      </p>
                      {item.href ? (
                        item.label === "Telefon" ? (
                          <TrackablePhoneLink className="mt-0.5 block text-charcoal-800 transition-colors hover:text-charcoal-900" />
                        ) : (
                          <a
                            href={item.href}
                            className="mt-0.5 block text-charcoal-800 transition-colors hover:text-charcoal-900"
                          >
                            {item.value}
                          </a>
                        )
                      ) : (
                        <p className="mt-0.5 text-charcoal-800">{item.value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(event) => handleWhatsAppConversion(event, whatsappUrl)}
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-4 text-sm font-semibold text-white transition-transform hover:scale-[1.02] sm:w-auto"
              >
                WhatsApp ile Yazın
              </a>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              id="teklif-formu"
              className="scroll-mt-28 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8 lg:col-span-3"
            >
              <h2 className="font-display text-xl font-bold text-charcoal-900">Teklif alın</h2>
              <p className="mt-2 text-sm text-charcoal-500">
                Formu doldurun; talebiniz <strong>furkantosun@furtech.com.tr</strong> adresine iletilir.
                * işaretli alanlar zorunludur.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
