import type { MouseEvent } from "react";

export const GOOGLE_ADS_FORM_CONVERSION = "AW-18293811691/ps9GCMefvskcEOvTlZNE";
export const GOOGLE_ADS_PHONE_CONVERSION = "AW-18293811691/iJ7UCLzExckcEOvTlZNE";

type Gtag = (...args: unknown[]) => void;

function navigateAfterConversion(url: string, openInNewTab = false) {
  if (openInNewTab) {
    window.open(url, "_blank", "noopener,noreferrer");
    return;
  }

  window.location.href = url;
}

function reportConversion(
  sendTo: string,
  url?: string,
  openInNewTab = false
) {
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
    send_to: sendTo,
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

/** Potansiyel müşteri formu gönderimi */
export function reportFormConversion() {
  return reportConversion(GOOGLE_ADS_FORM_CONVERSION);
}

/** Tıkla ve ara */
export function reportPhoneCallConversion(url: string) {
  return reportConversion(GOOGLE_ADS_PHONE_CONVERSION, url);
}

export function handleWhatsAppConversion(
  event: MouseEvent<HTMLAnchorElement>,
  url: string
) {
  event.preventDefault();
  reportConversion(GOOGLE_ADS_FORM_CONVERSION, url, true);
}

export function handlePhoneCallConversion(
  event: MouseEvent<HTMLAnchorElement>,
  telUrl: string
) {
  event.preventDefault();
  reportPhoneCallConversion(telUrl);
}

declare global {
  interface Window {
    gtag?: Gtag;
    gtag_report_conversion?: (url?: string) => boolean;
    gtag_report_conversion_call?: (url?: string) => boolean;
    dataLayer?: unknown[];
  }
}
