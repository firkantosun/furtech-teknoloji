"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { serviceGroups, services, type Service, type ServiceGroup } from "@/lib/data";
import { cn } from "@/lib/utils";

function Terminal({ service }: { service: Service }) {
  const reduce = useReducedMotion();
  const full = service.command;
  const [typed, setTyped] = useState(reduce ? full.length : 0);
  const [lines, setLines] = useState(reduce ? service.deliverables.length : 0);

  useEffect(() => {
    if (reduce) {
      setTyped(full.length);
      setLines(service.deliverables.length);
      return;
    }
    setTyped(0);
    setLines(0);
    let i = 0;
    const timers: ReturnType<typeof setTimeout>[] = [];
    const type = setInterval(() => {
      i += 1;
      setTyped(i);
      if (i >= full.length) {
        clearInterval(type);
        service.deliverables.forEach((_, k) => timers.push(setTimeout(() => setLines(k + 1), 260 + k * 230)));
      }
    }, 28);
    return () => {
      clearInterval(type);
      timers.forEach(clearTimeout);
    };
  }, [service.id, full, reduce, service.deliverables]);

  const done = lines >= service.deliverables.length;

  return (
    <div className="overflow-hidden rounded-lg bg-ink font-mono text-[0.82rem] leading-relaxed text-paper/85 sm:text-[0.88rem]">
      <div className="flex items-center gap-1.5 border-b border-paper/10 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-paper/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-paper/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-paper/20" />
      </div>
      <div className="min-h-[13.5rem] px-4 py-4 sm:px-5" aria-hidden="true">
        <p>
          <span className="text-cobalt brightness-150">~ $ </span>
          {full.slice(0, typed)}
          {typed < full.length && <span className="caret">▍</span>}
        </p>
        {service.deliverables.slice(0, lines).map((d) => (
          <p key={d} className="mt-1.5">
            <span className="text-signal brightness-125">✓ </span>
            {d}
          </p>
        ))}
        {done && (
          <p className="mt-3 text-paper/60">
            hazır. <span className="caret">▍</span>
          </p>
        )}
      </div>
    </div>
  );
}

function Detail({ service }: { service: Service }) {
  return (
    <div className="space-y-6">
      <Terminal service={service} />
      <div className="sr-only">
        <p>Teslim ettiklerimiz:</p>
        <ul>{service.deliverables.map((d) => <li key={d}>{d}</li>)}</ul>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <h4 className="text-[0.95rem] font-semibold text-alert">Sorun</h4>
          <p className="mt-1.5 text-[0.98rem]">{service.problem}</p>
        </div>
        <div>
          <h4 className="text-[0.95rem] font-semibold text-signal">Çözümümüz</h4>
          <p className="mt-1.5 text-[0.98rem]">{service.solution}</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-x-6 gap-y-2 text-[0.95rem] font-semibold">
        <Link href={`/services#${service.id}`} className="text-ink underline decoration-cobalt decoration-2 underline-offset-4 hover:text-cobalt">
          {service.title} detayları
        </Link>
        {service.project && (
          <Link href={service.project.href} className="text-ink underline decoration-cobalt decoration-2 underline-offset-4 hover:text-cobalt">
            Örnek: {service.project.label}
          </Link>
        )}
      </div>
    </div>
  );
}

export default function ServicesExplorer() {
  const [active, setActive] = useState(services[0].id);
  const current = services.find((s) => s.id === active) ?? services[0];
  const groups = Object.keys(serviceGroups) as ServiceGroup[];

  return (
    <section className="border-t border-line py-20 md:py-28" aria-labelledby="hizmetler-baslik">
      <div className="shell">
        <div className="max-w-2xl">
          <h2 id="hizmetler-baslik" className="text-[clamp(1.9rem,4vw,3.2rem)] font-extrabold leading-[1.02]">
            Önce kuruyoruz, sonra büyütüyoruz.
          </h2>
          <p className="mt-5 text-lg">
            Bir hizmet seçin; hangi sorunu çözdüğünü ve size ne teslim ettiğimizi görün.
          </p>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-14">
          <div className="space-y-10">
            {groups.map((g) => (
              <div key={g}>
                <h3 className="text-xl font-bold">{serviceGroups[g].title}</h3>
                <p className="mt-1 text-[0.95rem] text-ink-muted">{serviceGroups[g].summary}</p>
                <ul className="mt-4 border-t border-line">
                  {services
                    .filter((s) => s.group === g)
                    .map((s) => {
                      const on = s.id === active;
                      return (
                        <li key={s.id} className="border-b border-line">
                          <button
                            type="button"
                            onClick={() => setActive(s.id)}
                            aria-expanded={on}
                            className="group flex w-full items-start gap-4 py-4 text-left"
                          >
                            <span
                              className={cn(
                                "mt-2 h-2.5 w-2.5 shrink-0 rounded-full border-[1.5px] transition-colors",
                                on ? "border-cobalt bg-cobalt" : "border-ink-muted group-hover:border-ink"
                              )}
                              aria-hidden="true"
                            />
                            <span>
                              <span className={cn("block text-[1.08rem] font-semibold", on ? "text-cobalt" : "text-ink")}>{s.title}</span>
                              <span className="mt-0.5 block text-[0.95rem] text-ink-muted">{s.short}</span>
                            </span>
                          </button>
                          {on && (
                            <div className="pb-8 md:hidden">
                              <Detail service={s} />
                            </div>
                          )}
                        </li>
                      );
                    })}
                </ul>
              </div>
            ))}
          </div>

          <div className="hidden md:block">
            <div className="sticky top-24">
              <h3 className="text-2xl font-bold">{current.title}</h3>
              <p className="mt-1 mb-6 text-ink-muted">{current.short}</p>
              <Detail service={current} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
