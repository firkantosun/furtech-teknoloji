import type { Metadata } from "next";
import CTA from "@/components/CTA";
import { PageHeader, Process, TrustStrip } from "@/components/Sections";
import { values } from "@/lib/data";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "Furtech Teknoloji A.Ş.: Kadıköy merkezli; yazılım, donanım kurulumu ve dijital pazarlamayı tek ekipte birleştiren teknoloji şirketi.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="Yazılımı da, kurulumu da, reklamı da yapan tek ekip."
        text="Furtech Teknoloji, Kadıköy merkezli bir teknoloji şirketi. Türkiye'nin her yerindeki işletmelere hizmet veriyoruz."
      />

      <section className="py-20 md:py-28">
        <div className="shell grid gap-12 md:grid-cols-2 md:gap-20">
          <div className="space-y-5 text-lg">
            <p>
              Çoğu işletmenin sitesi bir ajansta, uygulaması başka bir yazılımcıda, turnikesi ve kasası bambaşka bir firmada.
              Hiçbiri birbiriyle konuşmuyor; bir sorun çıktığında herkes topu bir diğerine atıyor.
            </p>
            <p>
              Biz bu parçaları tek bir sistem olarak kuruyoruz. Web sitesinden mobil uygulamaya, turnike ve kartlı geçişten
              POS, ERP ve yönetim paneline kadar. Sonra aynı ekip, sosyal medya ve reklamlarla o sisteme müşteri getiriyor.
            </p>
            <p>
              Sonucu da rakamla gösteriyoruz. Bodrum Aquapark'ta stok kayıpları %25 azaldı; çünkü artık her satış, her giriş
              ve her vardiya aynı ekranda.
            </p>
          </div>
          <dl className="divide-y divide-line border-y border-line">
            {values.map((v) => (
              <div key={v.title} className="py-5">
                <dt className="text-xl font-bold text-ink">{v.title}</dt>
                <dd className="mt-1">{v.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <TrustStrip />
      <Process />
      <CTA />
    </>
  );
}
