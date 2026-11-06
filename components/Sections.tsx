import Link from "next/link";
import { process, projects, references, stats } from "@/lib/data";

export function PageHeader({ title, text }: { title: string; text: string }) {
  return (
    <header className="schematic-grid border-b border-line pb-14 pt-32 md:pb-20 md:pt-40">
      <div className="shell">
        <h1 className="max-w-4xl text-[clamp(2.2rem,5.4vw,4.4rem)] font-extrabold leading-[1]">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg md:text-xl">{text}</p>
      </div>
    </header>
  );
}

export function ProjectCards({ ids = ["asaf-aluminyum", "psyconnect"] }: { ids?: string[] }) {
  const list = projects.filter((p) => ids.includes(p.id));
  return (
    <section className="border-t border-line py-20 md:py-28" aria-labelledby="diger-projeler">
      <div className="shell">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 id="diger-projeler" className="max-w-2xl text-[clamp(1.9rem,4vw,3.2rem)] font-extrabold leading-[1.02]">
            Fabrikadan uygulama mağazasına.
          </h2>
          <Link href="/projects" className="font-semibold text-ink underline decoration-cobalt decoration-2 underline-offset-4 hover:text-cobalt">
            Tüm projeler
          </Link>
        </div>
        <div className="mt-12 grid gap-10 md:grid-cols-2">
          {list.map((p) => (
            <Link key={p.id} href={`/projects#${p.id}`} className="group block">
              <div className="aspect-[16/10] overflow-hidden rounded-xl border-[1.5px] border-ink bg-paper-deep">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.image}
                  alt={p.imageAlt}
                  loading="lazy"
                  className={
                    p.id === "psyconnect"
                      ? "h-full w-full object-contain p-10 transition-transform duration-500 group-hover:scale-[1.03]"
                      : "h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  }
                />
              </div>
              <p className="mt-5 text-[0.95rem] font-semibold text-cobalt">{p.client}</p>
              <h3 className="mt-1 text-2xl font-bold group-hover:text-cobalt">{p.title}</h3>
              <p className="mt-2 max-w-lg">{p.summary}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section className="border-t border-line bg-paper-deep py-20 md:py-28" aria-labelledby="surec">
      <div className="shell">
        <h2 id="surec" className="max-w-2xl text-[clamp(1.9rem,4vw,3.2rem)] font-extrabold leading-[1.02]">
          Nasıl çalışıyoruz?
        </h2>
        <ol className="relative mt-14 grid gap-10 md:grid-cols-4 md:gap-8">
          <span className="absolute left-[13px] top-3 h-[calc(100%-1.5rem)] w-[2px] bg-cobalt md:left-0 md:top-[13px] md:h-[2px] md:w-full" aria-hidden="true" />
          {process.map((s, i) => (
            <li key={s.title} className="relative pl-12 md:pl-0 md:pt-12">
              <span className="absolute left-0 top-0 flex h-7 w-7 items-center justify-center rounded-full bg-cobalt text-sm font-bold text-paper">
                {i + 1}
              </span>
              <h3 className="text-xl font-bold">{s.title}</h3>
              <p className="mt-2 text-[0.98rem]">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function TrustStrip() {
  return (
    <section className="border-t border-line py-16 md:py-20" aria-label="Rakamlar ve referanslar">
      <div className="shell grid gap-12 md:grid-cols-[1fr_1.4fr] md:items-center">
        <dl className="grid grid-cols-3 gap-6 md:gap-8">
          {stats.map((s) => (
            <div key={s.label}>
              <dt className="sr-only">{s.label}</dt>
              <dd className="text-[clamp(2rem,4vw,3.2rem)] font-extrabold leading-none text-ink [font-stretch:112%]">{s.value}</dd>
              <dd className="mt-2 text-[0.95rem] text-ink-muted">{s.label}</dd>
            </div>
          ))}
        </dl>
        <div>
          <h2 className="text-lg font-bold">Birlikte çalıştığımız firmalardan bazıları</h2>
          <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-5">
            {references.map((r) => (
              <li key={r.id} className="border-t-[1.5px] border-ink pt-3">
                <p className="text-[1.05rem] font-bold text-ink [font-stretch:112%]">{r.name}</p>
                <p className="text-sm text-ink-muted">{r.sector}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
