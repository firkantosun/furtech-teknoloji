"use client";

import Link from "next/link";
import { getWhatsAppUrl } from "@/lib/contact";
import { handleWhatsAppConversion } from "@/lib/analytics";

type CTAProps = {
  title?: string;
  text?: string;
};

export default function CTA({
  title = "İşletmenizin sistemini birlikte çizelim.",
  text = "Neyle uğraştığınızı anlatın; ücretsiz dijital analizle nereden başlamanız gerektiğini ve ne kadar süreceğini netleştirelim.",
}: CTAProps) {
  const wa = getWhatsAppUrl();
  return (
    <section className="bg-cobalt text-paper">
      <div className="shell grid gap-10 py-20 md:grid-cols-[1.5fr_1fr] md:items-end md:py-28">
        <div>
          <h2 className="text-[clamp(2rem,4.4vw,3.6rem)] font-extrabold leading-[1.02] !text-paper">{title}</h2>
          <p className="mt-6 max-w-xl text-lg text-paper/85">{text}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row md:flex-col md:items-stretch">
          <Link href="/contact#teklif-formu" className="btn bg-paper text-ink hover:bg-ink hover:text-paper">
            Ücretsiz analiz iste
          </Link>
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => handleWhatsAppConversion(e, wa)}
            className="btn border-[1.5px] border-paper text-paper hover:bg-paper hover:text-cobalt"
          >
            WhatsApp'tan yaz
          </a>
        </div>
      </div>
    </section>
  );
}
