"use client";

import type { ReactNode } from "react";
import { siteConfig } from "@/lib/data";
import { handlePhoneCallConversion } from "@/lib/analytics";

type TrackablePhoneLinkProps = {
  className?: string;
  children?: ReactNode;
};

export default function TrackablePhoneLink({
  className,
  children,
}: TrackablePhoneLinkProps) {
  const telUrl = `tel:${siteConfig.phone.replace(/\s/g, "")}`;

  return (
    <a
      href={telUrl}
      onClick={(event) => handlePhoneCallConversion(event, telUrl)}
      className={className}
    >
      {children ?? siteConfig.phone}
    </a>
  );
}
