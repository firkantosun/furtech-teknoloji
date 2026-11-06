import type { Metadata } from "next";
import Link from "next/link";
import CTA from "@/components/CTA";
import { PageHeader } from "@/components/Sections";
import { serviceGroups, services, type ServiceGroup } from "@/lib/data";

export const metadata: Metadata = {
  title: "Hizmetler: Web, Mobil, Turnike, POS, ERP ve Dijital Reklam",
  description:
    "Web sitesi, mobil uygulama, turnike ve kartlı geçiş, POS ve ERP, yönetim paneli, yapay zeka, sosyal medya yönetimi, Google ve Meta reklamları. Kadıköy merkezli, Türkiye geneli.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  const groups = Object.keys(serviceGroups) as ServiceGroup[];
  return (
    <>
      <PageHeader
        title="İşletmenizin ihtiyacı olan her şey, tek ekipte."
        text="Önce işinizi taşıyan sistemi kuruyoruz: yazılım, cihaz ve panel. Sonra o sisteme müşteri getiriyoruz: içerik ve reklam."
      />

      <nav className="sticky top-16 z-30 border-b border-line bg-paper/95 backdrop-blur" aria-label="Hizmetler">
        <ul className="shell flex gap-6 overflow-x-auto py-3 text-[0.92rem] font-semibold [scrollbar-width:none]">
          {services.map((s) => (
            <li key={s.id} className="shrink-0">
              <a href={`#${s.id}`} className="text-ink-soft hover:text-cobalt">{s.title}</a>
            </li>
          ))}
        </ul>
      </nav>

      {groups.map((g) => (
        <section key={g} className="border-b border-line py-16 md:py-24" aria-labelledby={`grup-${g}`}>
          <div className="shell">
            <h2 id={`grup-${g}`} className="text-[clamp(1.9rem,4vw,3.2rem)] font-extrabold leading-[1.02]">{serviceGroups[g].title}</h2>
            <p className="mt-3 max-w-xl text-lg">{serviceGroups[g].summary}</p>

            <div className="mt-12 divide-y divide-line border-y border-line">
              {services
                .filter((s) => s.group === g)
                .map((s) => (
                  <article key={s.id} id={s.id} className="grid scroll-mt-32 gap-8 py-12 md:grid-cols-[0.8fr_1.2fr] md:gap-14">
                    <div>
                      <h3 className="text-[clamp(1.5rem,2.6vw,2.1rem)] font-bold leading-tight">{s.title}</h3>
                      <p className="mt-3 text-lg text-ink-muted">{s.short}</p>
                      {s.project && (
                        <Link
                          href={s.project.href}
                          className="mt-5 inline-block font-semibold text-ink underline decoration-cobalt decoration-2 underline-offset-4 hover:text-cobalt"
                        >
                          Örnek proje: {s.project.label}
                        </Link>
                      )}
                    </div>
                    <div className="grid gap-8 sm:grid-cols-2">
                      <div>
                        <h4 className="font-semibold text-alert">Sorun</h4>
                        <p className="mt-2">{s.problem}</p>
                        <h4 className="mt-6 font-semibold text-signal">Çözümümüz</h4>
                        <p className="mt-2">{s.solution}</p>
                      </div>
                      <div className="rounded-lg bg-ink p-5 font-mono text-[0.85rem] text-paper/85">
                        <p><span className="text-cobalt brightness-150">~ $ </span>{s.command}</p>
                        <ul className="mt-3 space-y-1.5">
                          {s.deliverables.map((d) => (
                            <li key={d}><span className="text-signal brightness-125">✓ </span>{d}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </article>
                ))}
            </div>
          </div>
        </section>
      ))}

      <CTA />
    </>
  );
}
