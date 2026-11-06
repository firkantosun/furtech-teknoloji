import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import TrackablePhoneLink from "@/components/TrackablePhoneLink";
import WhatsAppInline from "@/components/WhatsAppInline";
import { PageHeader } from "@/components/Sections";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "İletişim ve Teklif",
  description:
    "Furtech Teknoloji ile iletişime geçin: ücretsiz dijital analiz ve teklif için formu doldurun, arayın ya da WhatsApp'tan yazın. Kadıköy, İstanbul.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Neyle uğraştığınızı anlatın."
        text="Ücretsiz dijital analizle işletmeniz için nereden başlamanız gerektiğini, ne kadar süreceğini ve neye mal olacağını netleştirelim."
      />

      <section className="py-16 md:py-24">
        <div className="shell grid gap-14 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
          <div>
            <h2 className="text-2xl font-bold">Doğrudan ulaşın</h2>
            <dl className="mt-6 divide-y divide-line border-y border-line">
              <div className="py-4">
                <dt className="text-sm text-ink-muted">Telefon</dt>
                <dd className="mt-0.5 text-lg font-semibold text-ink"><TrackablePhoneLink className="hover:text-cobalt" /></dd>
              </div>
              <div className="py-4">
                <dt className="text-sm text-ink-muted">E-posta</dt>
                <dd className="mt-0.5 break-all text-lg font-semibold text-ink">
                  <a href={`mailto:${siteConfig.email}`} className="hover:text-cobalt">{siteConfig.email}</a>
                </dd>
              </div>
              <div className="py-4">
                <dt className="text-sm text-ink-muted">Adres</dt>
                <dd className="mt-0.5 text-lg font-semibold text-ink">{siteConfig.address}</dd>
                <dd className="text-[0.95rem]">{siteConfig.serviceArea}</dd>
              </div>
              <div className="py-4">
                <dt className="text-sm text-ink-muted">Çalışma saatleri</dt>
                <dd className="mt-0.5 text-lg font-semibold text-ink">{siteConfig.hours}</dd>
              </div>
            </dl>
            <WhatsAppInline className="btn-whatsapp mt-8 w-full sm:w-auto" />
          </div>

          <div id="teklif-formu" className="scroll-mt-24 rounded-xl border-[1.5px] border-ink bg-[#fffaf0] p-6 sm:p-9">
            <h2 className="text-2xl font-bold">Teklif ve analiz formu</h2>
            <p className="mt-2 text-[0.95rem] text-ink-muted">
              Talebiniz {siteConfig.contactFormEmail} adresine iletilir. Yıldızlı alanlar zorunlu.
            </p>
            <div className="mt-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
