"use client";

import SafeImage from "@/components/SafeImage";
import { siteConfig } from "@/lib/data";
import { cn } from "@/lib/utils";

const sizeMap = {
  nav: "gap-1.5",
  footer: "gap-2",
  mobile: "gap-1.5",
} as const;

const iconSizeMap = {
  nav: "h-7 w-auto sm:h-8",
  footer: "h-9 w-auto sm:h-10",
  mobile: "h-8 w-auto",
} as const;

const textSizeMap = {
  nav: {
    brand: "text-[1.05rem] sm:text-lg md:text-xl",
    tag: "text-[0.5rem] sm:text-[0.55rem] md:text-[0.6rem]",
  },
  footer: {
    brand: "text-xl sm:text-2xl",
    tag: "text-[0.6rem] sm:text-[0.65rem]",
  },
  mobile: {
    brand: "text-lg sm:text-xl",
    tag: "text-[0.55rem] sm:text-[0.6rem]",
  },
} as const;

interface LogoProps {
  variant?: keyof typeof sizeMap;
  className?: string;
}

export default function Logo({ variant = "nav", className }: LogoProps) {
  const sizes = textSizeMap[variant];

  return (
    <span
      className={cn(
        "inline-flex flex-col items-center leading-none text-charcoal-900",
        sizeMap[variant],
        className
      )}
      aria-label="Furtech Teknoloji"
    >
      <SafeImage
        src={siteConfig.logoIcon}
        alt=""
        width={132}
        height={36}
        priority={variant === "nav"}
        className={cn(
          "object-contain object-center brightness-0 invert",
          iconSizeMap[variant]
        )}
      />
      <span className="flex flex-col items-center">
        <span
          className={cn(
            "font-display font-bold tracking-[0.14em] text-charcoal-900",
            sizes.brand
          )}
        >
          FURTECH
        </span>
        <span
          className={cn(
            "font-display font-medium tracking-[0.32em] text-charcoal-600",
            sizes.tag
          )}
        >
          TEKNOLOJİ
        </span>
      </span>
    </span>
  );
}
