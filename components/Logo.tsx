import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  inverted?: boolean;
};

/** Furtech mark (IIIIVIN glyph) + wordmark, drawn from the brand logo file. */
export default function Logo({ className, inverted = false }: LogoProps) {
  return (
    <span
      className={cn("inline-flex items-center gap-3 leading-none", className)}
      aria-label="Furtech Teknoloji"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo-icon.png"
        alt=""
        width={2100}
        height={266}
        className={cn("h-[18px] w-auto", inverted && "invert")}
      />
      <span className={cn("flex flex-col", inverted ? "text-paper" : "text-ink")}>
        <span className="text-[0.95rem] font-bold tracking-[0.18em] [font-stretch:125%]">FURTECH</span>
        <span className="mt-0.5 text-[0.55rem] font-medium tracking-[0.42em] opacity-70">TEKNOLOJİ</span>
      </span>
    </span>
  );
}
