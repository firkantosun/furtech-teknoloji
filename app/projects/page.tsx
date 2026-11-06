import type { Metadata } from "next";
import AquaparkStory from "@/components/AquaparkStory";
import CTA from "@/components/CTA";
import { PageHeader } from "@/components/Sections";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projeler: Bodrum Aquapark, Asaf Alüminyum, Psyconnect",
  description:
    "Bodrum Aquapark'ta stok kayıplarını %25 azaltan dijital altyapı, Asaf Alüminyum kurumsal web sitesi ve Psyconnect mobil uygulaması.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  const others = projects.filter((p) => p.id !== "bodrum-aquapark");
  const aqua = projects.find((p) => p.id === "bodrum-aquapark")!;
  return (
    <>
      <PageHeader
        title="Kurduğumuz sistemler, aldığımız sonuçlar."
        text="Bir aquaparkın tüm operasyonundan bir üreticinin kurumsal sitesine ve bir mobil uygulamaya kadar."
      />

      <AquaparkStory />

      <section className="border-t border-line py-16 md:py-20" aria-label="Bodrum Aquapark kapsamı">
        <div className="shell grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold">Neyi kurduk?</h2>
            <ul className="mt-5 space-y-2.5">
              {aqua.scope.map((s) => (
                <li key={s} className="flex gap-3"><span className="mt-2.5 h-2 w-2 shrink-0 bg-cobalt" />{s}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Ne değişti?</h2>
            <ul className="mt-5 space-y-2.5">
              {aqua.results!.map((s) => (
                <li key={s} className="flex gap-3"><span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-signal" />{s}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {others.map((p, i) => (
        <section key={p.id} id={p.id} className="scroll-mt-16 border-t border-line py-20 md:py-28">
          <div className={`shell grid items-center gap-10 md:grid-cols-2 md:gap-16 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
            <div className="aspect-[16/10] overflow-hidden rounded-xl border-[1.5px] border-ink bg-paper-deep">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.image}
                alt={p.imageAlt}
                loading="lazy"
                className={p.id === "psyconnect" ? "h-full w-full object-contain p-12" : "h-full w-full object-cover object-top"}
              />
            </div>
            <div>
              <p className="font-semibold text-cobalt">{p.client}</p>
              <h2 className="mt-2 text-[clamp(1.7rem,3.2vw,2.6rem)] font-extrabold leading-[1.05]">{p.title}</h2>
              <p className="mt-5 text-lg">{p.summary}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {p.scope.map((s) => (
                  <li key={s} className="rounded-full border-[1.5px] border-ink px-3.5 py-1 text-sm font-medium text-ink">{s}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}

      <CTA title="Sıradaki proje sizinki olsun." />
    </>
  );
}
