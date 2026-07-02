import type { MouseEvent } from "react";

export const GOOGLE_ADS_CONVERSION = "AW-18293811691/ps9GCMefvskcEOvTlZNE";

type Gtag = (...args: unknown[]) => void;

function navigateAfterConversion(url: string, openInNewTab = false) {
  if (openInNewTab) {
    window.open(url, "_blank", "noopener,noreferrer");
    return;
  }

  window.location.href = url;
}

export function reportGoogleConversion(url?: string, openInNewTab = false) {
  if (typeof window === "undefined") {
    return false;
  }

  const gtag = window.gtag as Gtag | undefined;

  if (typeof gtag !== "function") {
    if (url) {
      navigateAfterConversion(url, openInNewTab);
    }
    return false;
  }

  gtag("event", "conversion", {
    send_to: GOOGLE_ADS_CONVERSION,
    value: 1.0,
    currency: "TRY",
    event_callback: url
      ? () => {
          navigateAfterConversion(url, openInNewTab);
        }
      : undefined,
  });

  return false;
}

export function handleWhatsAppConversion(
  event: MouseEvent<HTMLAnchorElement>,
  url: string
) {
  event.preventDefault();
  reportGoogleConversion(url, true);
}

declare global {
  interface Window {
    gtag?: Gtag;
    gtag_report_conversion?: (url?: string) => boolean;
    dataLayer?: unknown[];
  }
}
