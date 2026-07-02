import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import Logo from "@/components/Logo";
import { navLinks, siteConfig } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-stone-200 bg-cream-50">
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-stone-300/60 to-transparent"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="group inline-flex flex-col items-start gap-5"
              aria-label="Furtech Teknoloji — Ana Sayfa"
            >
              <Logo variant="footer" />
              <p className="max-w-sm text-sm leading-[1.7] text-charcoal-600">
                {siteConfig.description}
              </p>
            </Link>
          </div>

          <div>
            <h3 className="mb-5 text-[11px] font-semibold uppercase tracking-[0.15em] text-charcoal-500">
              Sayfalar
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-charcoal-600 transition-colors duration-300 hover:text-charcoal-900"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-[11px] font-semibold uppercase tracking-[0.15em] text-charcoal-500">
              İletişim
            </h3>
            <ul className="space-y-3.5 text-sm text-charcoal-600">
              <li className="flex items-start gap-2.5">
                <Mail size={15} className="mt-0.5 shrink-0 text-charcoal-500" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="transition-colors duration-300 hover:text-charcoal-900"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone size={15} className="mt-0.5 shrink-0 text-charcoal-500" />
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="transition-colors duration-300 hover:text-charcoal-900"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={15} className="mt-0.5 shrink-0 text-charcoal-500" />
                <span>{siteConfig.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-stone-200 pt-8 sm:flex-row">
          <p className="text-sm text-charcoal-500">
            © {year} {siteConfig.name}. Tüm hakları saklıdır.
          </p>
          <p className="font-mono text-xs text-charcoal-400">
            Mobil · Otomasyon · Erişim Kontrol · AI
          </p>
        </div>
      </div>
    </footer>
  );
}
