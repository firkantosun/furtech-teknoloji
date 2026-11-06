import Link from "next/link";
import Logo from "@/components/Logo";
import TrackablePhoneLink from "@/components/TrackablePhoneLink";
import { navLinks, services, siteConfig } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-ink text-paper/75">
      <div className="shell grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Logo inverted />
          <p className="mt-6 max-w-xs text-[0.95rem]">{siteConfig.tagline}</p>
          <p className="mt-2 text-[0.95rem]">{siteConfig.serviceArea}</p>
        </div>

        <div>
          <h2 className="text-[0.95rem] font-semibold text-paper">Sayfalar</h2>
          <ul className="mt-4 space-y-2.5 text-[0.95rem]">
            <li><Link href="/" className="hover:text-paper">Ana sayfa</Link></li>
            {navLinks.map((l) => (
              <li key={l.href}><Link href={l.href} className="hover:text-paper">{l.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-[0.95rem] font-semibold text-paper">Hizmetler</h2>
          <ul className="mt-4 space-y-2.5 text-[0.95rem]">
            {services.map((s) => (
              <li key={s.id}><Link href={`/services#${s.id}`} className="hover:text-paper">{s.title}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-[0.95rem] font-semibold text-paper">İletişim</h2>
          <ul className="mt-4 space-y-2.5 text-[0.95rem]">
            <li><TrackablePhoneLink className="hover:text-paper" /></li>
            <li><a href={`mailto:${siteConfig.email}`} className="break-all hover:text-paper">{siteConfig.email}</a></li>
            <li>{siteConfig.address}</li>
            <li>{siteConfig.hours}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-paper/15">
        <div className="shell flex flex-col gap-2 py-6 text-sm text-paper/50 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} {siteConfig.legalName}</p>
          <p>furtech.com.tr</p>
        </div>
      </div>
    </footer>
  );
}
