"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { cn } from "@/lib/utils";

type ModuleDef = {
  id: string;
  label: string;
  x: number; // slot centre, % of board
  y: number;
  pinY: number; // where the trace meets the core
  from: { x: string; y: string; r: number };
  Icon: () => React.JSX.Element;
};

const stroke = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" } as const;

const IconWeb = () => (
  <svg viewBox="0 0 48 32" className="h-full w-full" aria-hidden="true">
    <rect x="2" y="2" width="44" height="28" rx="3" {...stroke} />
    <path d="M2 9h44" {...stroke} />
    <circle cx="6.5" cy="5.5" r="1" fill="currentColor" />
    <circle cx="10" cy="5.5" r="1" fill="currentColor" />
    <path d="M8 15h18M8 20h12M30 14h10v10H30z" {...stroke} />
  </svg>
);
const IconMobile = () => (
  <svg viewBox="0 0 48 32" className="h-full w-full" aria-hidden="true">
    <rect x="16" y="1.5" width="16" height="29" rx="3.5" {...stroke} />
    <path d="M20 8h8M20 13h8M20 18h5M22 26.5h4" {...stroke} />
  </svg>
);
const IconTurnstile = () => (
  <svg viewBox="0 0 48 32" className="h-full w-full" aria-hidden="true">
    <rect x="8" y="6" width="10" height="24" rx="2" {...stroke} />
    <path d="M18 14l18-6M18 14l18 4M18 14l10 12" {...stroke} />
    <path d="M10.5 10h5" {...stroke} />
  </svg>
);
const IconPos = () => (
  <svg viewBox="0 0 48 32" className="h-full w-full" aria-hidden="true">
    <path d="M14 2h20v26l-3.3-2-3.4 2-3.3-2-3.4 2-3.3-2L14 28z" {...stroke} />
    <path d="M18 8h12M18 13h12M18 18h7" {...stroke} />
  </svg>
);
const IconPanel = () => (
  <svg viewBox="0 0 48 32" className="h-full w-full" aria-hidden="true">
    <path d="M4 29h40" {...stroke} />
    <path d="M9 29V19M17 29V12M25 29V16M33 29V7M41 29V13" {...stroke} strokeWidth={3.2} />
  </svg>
);
const IconAds = () => (
  <svg viewBox="0 0 48 32" className="h-full w-full" aria-hidden="true">
    <circle cx="24" cy="16" r="13" {...stroke} />
    <circle cx="24" cy="16" r="8" {...stroke} />
    <circle cx="24" cy="16" r="3" fill="currentColor" />
    <path d="M24 16l14-12M34 4h4v4" {...stroke} />
  </svg>
);

const MODULES: ModuleDef[] = [
  { id: "web", label: "Web sitesi", x: 15, y: 16, pinY: 43, from: { x: "-35%", y: "-55%", r: -16 }, Icon: IconWeb },
  { id: "ads", label: "Reklamlar", x: 85, y: 16, pinY: 43, from: { x: "40%", y: "-70%", r: 12 }, Icon: IconAds },
  { id: "mobile", label: "Mobil", x: 15, y: 50, pinY: 50, from: { x: "-70%", y: "25%", r: 9 }, Icon: IconMobile },
  { id: "panel", label: "Yönetim paneli", x: 85, y: 50, pinY: 50, from: { x: "65%", y: "-15%", r: -10 }, Icon: IconPanel },
  { id: "access", label: "Turnike", x: 15, y: 84, pinY: 57, from: { x: "-30%", y: "70%", r: 18 }, Icon: IconTurnstile },
  { id: "pos", label: "POS ve ödeme", x: 85, y: 84, pinY: 57, from: { x: "45%", y: "60%", r: -14 }, Icon: IconPos },
];

const MOD_W = 27; // % of board
const MOD_H = 21;
const CORE = 22;

function tracePath(m: ModuleDef) {
  const left = m.x < 50;
  const edgeX = left ? m.x + MOD_W / 2 : m.x - MOD_W / 2;
  const midX = left ? 34 : 66;
  const coreX = left ? 50 - CORE / 2 : 50 + CORE / 2;
  return `M${edgeX} ${m.y} H${midX} V${m.pinY} H${coreX}`;
}

const START = 0.06;
const STEP = 0.07;
const DUR = 0.2;
const window_ = (i: number) => [START + i * STEP, START + i * STEP + DUR] as const;
const ALL_CONNECTED = window_(MODULES.length - 1)[1] + 0.06;

function Module({ m, i, p, connected, reduce }: { m: ModuleDef; i: number; p: MotionValue<number>; connected: boolean; reduce: boolean }) {
  const [a, b] = window_(i);
  const x = useTransform(p, [a, b], [m.from.x, "0%"]);
  const y = useTransform(p, [a, b], [m.from.y, "0%"]);
  const rotate = useTransform(p, [a, b], [m.from.r, 0]);
  return (
    <motion.div
      className="absolute"
      style={{
        left: `${m.x - MOD_W / 2}%`,
        top: `${m.y - MOD_H / 2}%`,
        width: `${MOD_W}%`,
        height: `${MOD_H}%`,
        x: reduce ? 0 : x,
        y: reduce ? 0 : y,
        rotate: reduce ? 0 : rotate,
      }}
    >
      <div
        className={cn(
          "flex h-full w-full flex-col justify-between rounded-md border-[1.5px] bg-paper p-[7%] transition-colors duration-500",
          connected ? "border-ink text-ink" : "border-ink-muted/60 text-ink-muted"
        )}
      >
        <div className="h-[52%]">
          <m.Icon />
        </div>
        <div className="flex items-center justify-between gap-1">
          <span className="truncate text-[clamp(0.6rem,1.4vw,0.8rem)] font-semibold">{m.label}</span>
          <span
            className={cn("h-1.5 w-1.5 shrink-0 rounded-full transition-colors duration-500", connected ? "bg-signal" : "bg-alert")}
            aria-hidden="true"
          />
        </div>
      </div>
    </motion.div>
  );
}

function Trace({ m, i, p, connected, reduce }: { m: ModuleDef; i: number; p: MotionValue<number>; connected: boolean; reduce: boolean }) {
  const [, b] = window_(i);
  const len = useTransform(p, [b - 0.03, b + 0.07], [0, 1]);
  const d = tracePath(m);
  return (
    <g>
      <path d={d} fill="none" stroke="var(--color-line)" strokeWidth={0.5} strokeDasharray="1 1" />
      <motion.path
        d={d}
        fill="none"
        stroke="var(--color-cobalt)"
        strokeWidth={0.7}
        strokeLinejoin="round"
        style={{ pathLength: reduce ? 1 : len }}
      />
      {connected && !reduce && (
        <circle r={0.9} fill="var(--color-cobalt)">
          <animateMotion dur={`${1.4 + i * 0.17}s`} repeatCount="indefinite" path={d} />
        </circle>
      )}
    </g>
  );
}

export default function SystemHero() {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const reduce = !!reduceMotion;
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const hintOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);
  const [prog, setProg] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const r = Math.round(v * 100) / 100;
    setProg((old) => (old === r ? old : r));
  });

  const progress = reduce ? 1 : prog;
  const connectedCount = MODULES.filter((_, i) => progress >= window_(i)[1] + 0.05).length;
  const allOn = progress >= ALL_CONNECTED;
  const status = allOn
    ? { dot: "bg-signal", text: "Bağlandı: tek sistem, tek panel, tek ekip." }
    : connectedCount > 0
      ? { dot: "bg-cobalt", text: `Bağlanıyor: ${connectedCount}/6 sistem` }
      : { dot: "bg-alert", text: "6 ayrı sistem, 6 ayrı firma. Birbirleriyle konuşmuyorlar." };

  return (
    <section ref={ref} className={cn("relative", reduce ? "" : "h-[230vh] md:h-[260vh]")}>
      <div className={cn("top-0 overflow-hidden", reduce ? "relative" : "sticky h-[100svh]")}>
        <div className="schematic-grid pointer-events-none absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_at_70%_50%,black,transparent_70%)]" />
        <div className="shell relative grid h-full grid-rows-[auto_1fr] items-center gap-4 pb-6 pt-20 md:grid-cols-[1fr_1.05fr] md:grid-rows-1 md:gap-10 md:pt-16">
          <div className="max-w-xl">
            <h1 className="text-[clamp(2.15rem,5.6vw,4.6rem)] font-extrabold leading-[0.98]">
              İşletmenizin bütün sistemi. Tek ekipten.
            </h1>
            <p className="mt-4 max-w-md text-[clamp(0.98rem,1.4vw,1.15rem)] md:mt-6">
              Web sitesi, mobil uygulama, turnike, POS, ERP ve reklam. Hepsini biz kurar, birbirine bağlar, büyütürüz.
            </p>
            <div className="mt-5 flex flex-wrap gap-3 md:mt-8">
              <Link href="/contact#teklif-formu" className="btn-ink">Ücretsiz analiz iste</Link>
              <Link href="/projects" className="btn-line">Projeleri gör</Link>
            </div>
            <p className="mt-5 flex items-center gap-2.5 text-[0.9rem] text-ink-soft md:mt-10" aria-live="polite">
              <span className={cn("h-2 w-2 shrink-0 rounded-full transition-colors", status.dot)} aria-hidden="true" />
              {status.text}
            </p>
          </div>

          <div className="relative mx-auto aspect-square w-full max-w-[min(560px,46svh)] md:max-w-[min(580px,78svh)]">
            <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full overflow-visible" aria-hidden="true">
              {MODULES.map((m, i) => (
                <Trace key={m.id} m={m} i={i} p={scrollYProgress} reduce={reduce} connected={progress >= window_(i)[1] + 0.05} />
              ))}
            </svg>

            {/* Core */}
            <div
              className="absolute"
              style={{ left: `${50 - CORE / 2}%`, top: `${50 - CORE / 2}%`, width: `${CORE}%`, height: `${CORE}%` }}
            >
              {allOn && !reduce && (
                <span className="absolute -inset-[14%] animate-ping rounded-lg border-2 border-cobalt/50 [animation-duration:2.2s]" aria-hidden="true" />
              )}
              <div
                className={cn(
                  "relative flex h-full w-full flex-col items-center justify-center gap-[10%] rounded-lg bg-ink transition-shadow duration-700",
                  allOn && "shadow-[0_0_0_4px_var(--color-cobalt)]"
                )}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logo-icon.png" alt="" className="w-[64%] invert" />
                <span className="text-[clamp(0.5rem,1.1vw,0.7rem)] font-bold tracking-[0.2em] text-paper [font-stretch:125%]">FURTECH</span>
              </div>
              {/* pins */}
              {[30, 50, 70].map((t) => (
                <span key={`l${t}`} className="absolute -left-[9%] h-[3%] w-[9%] bg-ink" style={{ top: `${t}%` }} aria-hidden="true" />
              ))}
              {[30, 50, 70].map((t) => (
                <span key={`r${t}`} className="absolute -right-[9%] h-[3%] w-[9%] bg-ink" style={{ top: `${t}%` }} aria-hidden="true" />
              ))}
            </div>

            {MODULES.map((m, i) => (
              <Module key={m.id} m={m} i={i} p={scrollYProgress} reduce={reduce} connected={progress >= window_(i)[1] + 0.05} />
            ))}
          </div>
        </div>

        {!reduce && (
          <motion.div
            style={{ opacity: hintOpacity }}
            className="pointer-events-none absolute bottom-5 left-1/2 hidden -translate-x-1/2 text-sm text-ink-muted md:block"
          >
            Sistemi birleştirmek için kaydırın
          </motion.div>
        )}
      </div>
    </section>
  );
}
