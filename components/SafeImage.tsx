"use client";

import { useState, type CSSProperties } from "react";
import { cn } from "@/lib/utils";

export type SafeImageProps = {
  src: string;
  alt: string;
  className?: string;
  fill?: boolean;
  width?: number;
  height?: number;
  sizes?: string;
  priority?: boolean;
  onImageError?: () => void;
};

/**
 * Static public images via native <img> — avoids Next.js image optimizer
 * and dev-time webpack/HMR issues with missing or local files.
 */
export default function SafeImage({
  src,
  alt,
  className,
  fill,
  width,
  height,
  priority,
  onImageError,
}: SafeImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return null;
  }

  const style: CSSProperties | undefined = fill
    ? { position: "absolute", inset: 0, width: "100%", height: "100%" }
    : undefined;

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      className={cn(className)}
      style={style}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      onError={() => {
        setFailed(true);
        onImageError?.();
      }}
    />
  );
}
