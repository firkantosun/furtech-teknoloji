"use client";

import { useRef, useState } from "react";
import { useMotionValueEvent, useReducedMotion, useScroll } from "framer-motion";
import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

/* ---------- geometry ---------- */
const OUTLINE: [number, number][] = [
  [26.0, 40.6], [26.6, 41.3], [26.3, 41.7], [26.9, 42.0], [28.0, 41.98], [28.9, 41.3], [29.1, 41.2], [30.0, 41.15], [31.2, 41.1],
  [32.3, 41.7], [33.3, 42.0], [34.9, 42.0], [35.2, 41.7], [36.1, 41.6], [36.6, 41.3], [37.5, 41.0], [38.4, 40.9], [39.6, 41.0], [40.4, 41.0],
  [41.5, 41.5], [42.5, 41.4], [43.4, 41.1], [43.7, 40.8], [43.6, 40.2], [44.4, 40.0], [44.8, 39.7], [44.4, 39.4], [44.0, 39.2], [44.3, 38.4],
  [44.2, 37.9], [44.8, 37.2], [44.2, 37.2], [43.0, 37.3], [42.3, 37.1], [41.2, 37.1], [40.2, 37.1], [39.0, 36.7], [38.2, 36.9], [37.0, 36.7],
  [36.6, 36.8], [36.2, 36.0], [35.8, 36.3], [36.2, 36.6], [35.6, 36.6], [34.6, 36.8], [34.0, 36.3], [33.0, 36.1], [32.0, 36.5], [31.0, 36.85],
  [30.6, 36.7], [30.4, 36.2], [29.6, 36.2], [29.0, 36.6], [28.3, 36.8], [28.1, 36.95], [27.9, 36.75], [27.6, 36.9], [27.95, 37.05], [27.6, 37.1],
  [27.25, 36.97], [27.4, 37.15], [27.2, 37.4], [27.3, 37.9], [26.4, 38.2], [26.7, 38.5], [26.9, 39.0], [26.2, 39.4], [26.4, 39.9],
  [26.2, 40.05], [26.7, 40.4],
];
const MARMARA: [number, number][] = [[26.7, 40.4], [27.5, 40.95], [28.6, 40.98], [29.0, 41.0], [29.4, 40.75], [28.9, 40.4], [28.0, 40.35], [27.3, 40.4]];
const VB_W = 152, VB_H = 114, Y0 = 24;
const proj = ([lon, lat]: [number, number]) => [(lon - 25.5) * 7.77, Y0 + (42.3 - lat) * 10] as const;
const toPath = (pts: [number, number][]) => pts.map((p, i) => `${i ? "L" : "M"}${proj(p)[0].toFixed(2)} ${proj(p)[1].toFixed(2)}`).join("") + "Z";
const TR_PATH = toPath(OUTLINE);
const MARMARA_PATH = toPath(MARMARA);
const KADIKOY = proj([29.03, 40.99]);
const BODRUM = proj([27.43, 37.04]);
const ROUTE = `M${KADIKOY[0]} ${KADIKOY[1]} Q${(KADIKOY[0] + BODRUM[0]) / 2 - 14} ${(KADIKOY[1] + BODRUM[1]) / 2} ${BODRUM[0]} ${BODRUM[1]}`;

const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const seg = (p: number, a: number, b: number) => clamp((p - a) / (b - a));
const ease = (t: number) => 1 - Math.pow(1 - t, 3);
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

/* ---------- content ---------- */
const STEPS = [
  { at: 0, title: "Kadıköy'den Bodrum'a", text: "Bodrum'daki bir aquaparkın bütün dijital altyapısını üstlendik." },
  { at: 0.2, title: "Büyük bir operasyon", text: "Turnikeler, satış noktaları, depo ve personel. Hepsi aynı gün, aynı anda çalışmak zorunda." },
  { at: 0.38, title: "Önce", text: "Yazılım yaklaşık 10 yıllıktı. Turnikeler ve işletmedeki dokunmatik ekranlı cihazların hepsi eskiydi." },
  { at: 0.56, title: "Sonra", text: "Hepsini yeniledik. Sıfırdan yazılım altyapısı kurduk; yeni ödeme yöntemlerini ve ERP'yi devreye aldık." },
  { at: 0.76, title: "Sonuç", text: "Stok kayıpları %25 azaldı. Ziyaretçi, satış ve personel verisi artık tek ekranda, anlık." },
];
const BEFORE = ["10 yıllık yazılım", "Eski turnikeler", "Eski dokunmatik cihazlar"];
const LAYERS = ["Server ve network", "Turnike ve kartlı geçiş", "Satış noktası ve bakiye", "Ödeme yöntemleri", "ERP, stok ve personel"];
const RESULTS = ["Çalışan verimliliği ölçülüyor", "Ziyaretçi ve alışveriş yapan müşteri sayısı anlık", "Tüm operasyon tek ekranda"];

/* ---------- stage ---------- */
function Stage({ p }: { p: number }) {
  const zoom = ease(seg(p, 0.05, 0.16));
  const s = lerp(1, 4.2, zoom);
  const fx = lerp(VB_W / 2, BODRUM[0], zoom);
  const fy = lerp(VB_H / 2, BODRUM[1], zoom);
  const route = ease(seg(p, 0.015, 0.07));
  const pin = seg(p, 0.08, 0.12);
  const reveal = ease(seg(p, 0.17, 0.25));
  const before = seg(p, 0.38, 0.56);
  const after = seg(p, 0.56, 0.76);
  const result = seg(p, 0.76, 0.9);
  const showPhoto = p < 0.58;
  const counter = Math.round(25 * ease(seg(p, 0.77, 0.86)));

  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border-[1.5px] border-ink bg-paper">
      {/* map */}
      <svg viewBox={`0 0 ${VB_W} ${VB_H}`} className="absolute inset-0 h-full w-full" aria-hidden="true">
        <defs>
          <pattern id="grid" width="6" height="6" patternUnits="userSpaceOnUse">
            <path d="M6 0H0V6" fill="none" stroke="var(--color-line)" strokeWidth="0.25" />
          </pattern>
        </defs>
        <rect width={VB_W} height={VB_H} fill="url(#grid)" />
        <g transform={`translate(${VB_W / 2} ${VB_H / 2}) scale(${s}) translate(${-fx} ${-fy})`} opacity={p < 0.26 ? 1 : 0}>
          <path d={TR_PATH} fill="#fffaf0" stroke="var(--color-ink)" strokeWidth={0.6 / s + 0.15} strokeLinejoin="round" />
          <path d={MARMARA_PATH} fill="var(--color-paper)" stroke="var(--color-ink)" strokeWidth={0.3 / s + 0.08} />
          <path
            d={ROUTE}
            fill="none"
            stroke="var(--color-cobalt)"
            strokeWidth={0.9 / s + 0.12}
            pathLength={1}
            strokeDasharray={route < 1 ? `${route} 1` : "0.025 0.018"}
          />
          <circle cx={KADIKOY[0]} cy={KADIKOY[1]} r={1.4 / s + 0.2} fill="var(--color-ink)" />
          {pin > 0 && (
            <g transform={`translate(${BODRUM[0]} ${BODRUM[1] - (1 - ease(pin)) * 6 / s}) scale(${1 / s})`}>
              <circle r={7 * pin} fill="none" stroke="var(--color-cobalt)" strokeWidth={0.6} opacity={1 - pin * 0.6} />
              <path d="M0 0 C-3 -4 -4.2 -6 -4.2 -8.2 A4.2 4.2 0 1 1 4.2 -8.2 C4.2 -6 3 -4 0 0Z" fill="var(--color-cobalt)" />
              <circle cy={-8.3} r={1.6} fill="var(--color-paper)" />
            </g>
          )}
        </g>
        {p < 0.08 && (
          <text x={KADIKOY[0] + 3} y={KADIKOY[1] - 2.5} fontSize="3.6" fontWeight="600" fill="var(--color-ink)" fontFamily="var(--font-sans)">
            Furtech, Kadıköy
          </text>
        )}
      </svg>
      {pin >= 1 && p < 0.2 && (
        <div className="absolute left-1/2 top-[38%] translate-x-[18px] rounded-md bg-ink px-3 py-1.5 text-sm font-semibold text-paper">
          Bodrum, Muğla
        </div>
      )}

      {/* aerial photo revealed from the pin */}
      {showPhoto && reveal > 0 && (
        <div className="absolute inset-0" style={{ clipPath: `circle(${reveal * 80}% at 50% 50%)` }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/projects/bodrum-aquapark.jpg"
            alt="Bodrum Aquapark'ın havadan görünümü"
            className="h-full w-full object-cover transition-[filter] duration-500"
            style={{ filter: before > 0 ? `grayscale(${Math.min(1, before * 3)}) brightness(${1 - Math.min(0.45, before * 1.5)})` : undefined }}
          />
        </div>
      )}

      {/* before: what we found */}
      {before > 0 && after === 0 && (
        <div className="absolute inset-0 flex flex-col justify-center gap-3 px-[8%]">
          {BEFORE.map((b, i) => {
            const t = seg(before, 0.1 + i * 0.2, 0.3 + i * 0.2);
            return (
              <div
                key={b}
                className="flex items-center gap-3 rounded-md bg-paper px-4 py-3 text-[clamp(0.9rem,1.8vw,1.15rem)] font-semibold text-ink"
                style={{ opacity: t, transform: `translateX(${(1 - ease(t)) * -40}px)` }}
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-alert text-paper">
                  <X size={16} strokeWidth={3} />
                </span>
                {b}
              </div>
            );
          })}
        </div>
      )}

      {/* after: the new stack, assembled bottom-up */}
      {after > 0 && result === 0 && (
        <div className="absolute inset-0 flex flex-col-reverse justify-start gap-[2.2%] px-[10%] pb-[8%] pt-[6%]">
          {LAYERS.map((l, i) => {
            const t = seg(after, i * 0.15, i * 0.15 + 0.3);
            const top = i >= 3;
            return (
              <div
                key={l}
                className={cn(
                  "flex flex-1 items-center justify-between rounded-md px-4 text-[clamp(0.85rem,1.7vw,1.08rem)] font-semibold",
                  top ? "bg-cobalt text-paper" : "bg-ink text-paper"
                )}
                style={{ opacity: t > 0 ? 1 : 0, transform: `translateY(${(1 - ease(t)) * -120}%)` }}
              >
                {l}
                <span className={cn("h-2 w-2 rounded-full", t >= 1 ? "bg-signal" : "bg-paper/30")} />
              </div>
            );
          })}
        </div>
      )}

      {/* result */}
      {result > 0 && (
        <div className="absolute inset-0 grid grid-cols-[1fr_1.3fr] items-center gap-[5%] p-[6%]">
          <div style={{ opacity: ease(result * 2) }}>
            <p className="whitespace-nowrap text-[clamp(2.4rem,5.6vw,5rem)] font-extrabold leading-none text-cobalt [font-stretch:112%]">−%{counter}</p>
            <p className="mt-2 text-[clamp(1rem,2vw,1.35rem)] font-bold text-ink">stok kaybı</p>
            <ul className="mt-4 hidden space-y-2 sm:block">
              {RESULTS.map((r, i) => (
                <li
                  key={r}
                  className="flex gap-2 text-[clamp(0.75rem,1.3vw,0.92rem)] text-ink-soft"
                  style={{ opacity: seg(result, 0.35 + i * 0.15, 0.55 + i * 0.15) }}
                >
                  <Check size={16} className="mt-0.5 shrink-0 text-signal" strokeWidth={3} />
                  {r}
                </li>
              ))}
            </ul>
          </div>
          <figure
            className="overflow-hidden rounded-md border-[1.5px] border-ink bg-ink p-[2%]"
            style={{ opacity: ease(seg(result, 0.15, 0.5)), transform: `translateY(${(1 - ease(seg(result, 0.15, 0.5))) * 30}px)` }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/projects/management-panel.jpg" alt="Bodrum Aqua işletme ve ERP paneli" className="w-full rounded-sm" />
            <figcaption className="mt-1.5 text-[0.65rem] text-paper/60">Bodrum Aqua işletme ve ERP paneli</figcaption>
          </figure>
        </div>
      )}
    </div>
  );
}

function StaticStory() {
  return (
    <div className="grid gap-10 md:grid-cols-2">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/projects/bodrum-aquapark.jpg" alt="Bodrum Aquapark'ın havadan görünümü" className="w-full rounded-xl border-[1.5px] border-ink" />
      <ol className="space-y-6">
        {STEPS.map((s, i) => (
          <li key={s.title}>
            <h3 className="text-xl font-bold">{i + 1}. {s.title}</h3>
            <p className="mt-1">{s.text}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default function AquaparkStory({ headingLevel = 2 }: { headingLevel?: 2 | 3 }) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const [p, setP] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const r = Math.round(v * 400) / 400;
    setP((o) => (o === r ? o : r));
  });
  const activeStep = STEPS.reduce((acc, s, i) => (p >= s.at ? i : acc), 0);
  const H = headingLevel === 2 ? "h2" : "h3";

  if (reduce) {
    return (
      <section id="bodrum-aquapark" className="border-t border-line py-20">
        <div className="shell">
          <H className="mb-10 text-[clamp(1.9rem,4vw,3.2rem)] font-extrabold leading-[1.02]">Bodrum Aquapark: 10 yıllık sistemden tek ekrana</H>
          <StaticStory />
        </div>
      </section>
    );
  }

  return (
    <section ref={ref} id="bodrum-aquapark" className="relative h-[520vh] scroll-mt-16 border-t border-line" aria-label="Bodrum Aquapark vaka çalışması">
      <div className="sticky top-0 flex h-[100svh] items-center overflow-hidden pt-16">
        <div className="shell grid w-full items-center gap-6 md:grid-cols-[0.6fr_1.4fr] md:gap-12">
          <div>
            <H className="text-[clamp(1.6rem,3.4vw,2.8rem)] font-extrabold leading-[1.02]">Bodrum Aquapark</H>
            <p className="mt-2 text-ink-muted">Vaka çalışması</p>

            {/* desktop: full step list */}
            <ol className="mt-8 hidden space-y-5 md:block">
              {STEPS.map((s, i) => (
                <li key={s.title} className={cn("flex gap-4 transition-opacity duration-300", i === activeStep ? "opacity-100" : "opacity-35")}>
                  <span
                    className={cn(
                      "flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-[1.5px] text-sm font-bold transition-colors",
                      i < activeStep ? "border-signal bg-signal text-paper" : i === activeStep ? "border-cobalt bg-cobalt text-paper" : "border-ink-muted text-ink-muted"
                    )}
                  >
                    {i + 1}
                  </span>
                  <div>
                    <h4 className="font-bold text-ink">{s.title}</h4>
                    {i === activeStep && <p className="mt-1 text-[0.98rem]">{s.text}</p>}
                  </div>
                </li>
              ))}
            </ol>

            {/* mobile: current step only */}
            <div className="mt-4 min-h-[6.5rem] md:hidden" aria-live="polite">
              <p className="text-sm font-semibold text-cobalt">
                Adım {activeStep + 1}/{STEPS.length}: {STEPS[activeStep].title}
              </p>
              <p className="mt-1 text-[0.98rem]">{STEPS[activeStep].text}</p>
            </div>
          </div>

          <Stage p={p} />
        </div>
      </div>
    </section>
  );
}
