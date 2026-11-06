"use client";

import { useState, FormEvent } from "react";
import { Send, CheckCircle, Loader2 } from "lucide-react";
import { services, siteConfig } from "@/lib/data";
import { serviceLabels } from "@/lib/contact";
import { reportFormConversion } from "@/lib/analytics";

type FormSubmitResponse = {
  success?: boolean | string;
  message?: string;
};

function isFormSubmitSuccess(result: FormSubmitResponse) {
  return result.success === true || result.success === "true";
}

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedbackMessage, setFeedbackMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setFeedbackMessage("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const service = data.get("service")?.toString().trim();
    const serviceLabel = service ? serviceLabels[service] || service : "Belirtilmedi";

    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${encodeURIComponent(siteConfig.contactFormEmail)}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: data.get("name"),
            email: data.get("email"),
            phone: data.get("phone") || "-",
            service: serviceLabel,
            message: data.get("message"),
            _subject: `Furtech Teklif Talebi - ${data.get("name")}`,
            _template: "table",
            _captcha: "false",
            _autoresponse: "Talebiniz alındı. Furtech Teknoloji en kısa sürede size dönüş yapacaktır.",
          }),
        }
      );

      const result = (await response.json()) as FormSubmitResponse;

      if (!response.ok || !isFormSubmitSuccess(result)) {
        const needsActivation = result.message?.toLowerCase().includes("activation");

        setFeedbackMessage(
          needsActivation
            ? `${siteConfig.contactFormEmail} adresine bir onay e-postası gönderildi. Gelen kutusu ve spam klasörünü kontrol edip "Activate Form" linkine tıklayın; ardından formu tekrar gönderin.`
            : result.message || "Mesaj gönderilemedi. Lütfen tekrar deneyin."
        );
        setStatus("error");
        return;
      }

      setStatus("success");
      form.reset();
      reportFormConversion();
      setFeedbackMessage(
        `Talebiniz ${siteConfig.contactFormEmail} adresine iletildi. En kısa sürede size dönüş yapacağız.`
      );
      setTimeout(() => {
        setStatus("idle");
        setFeedbackMessage("");
      }, 8000);
    } catch {
      setFeedbackMessage("Bağlantı hatası. Lütfen tekrar deneyin veya WhatsApp üzerinden yazın.");
      setStatus("error");
    }
  }

  const inputClass = "field";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-[0.92rem] font-semibold text-ink">
            Ad Soyad *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Adınız Soyadınız"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-[0.92rem] font-semibold text-ink">
            E-posta *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="ornek@sirket.com"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-[0.92rem] font-semibold text-ink">
            Telefon
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="+90 5XX XXX XX XX"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="service" className="mb-1.5 block text-[0.92rem] font-semibold text-ink">
            Hizmet
          </label>
          <select id="service" name="service" className={inputClass + " cursor-pointer"}>
            <option value="">Seçin</option>
            {services.map((sv) => (
              <option key={sv.id} value={sv.id}>{sv.title}</option>
            ))}
            <option value="custom">Diğer / emin değilim</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-[0.92rem] font-semibold text-ink">
          Mesajınız *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="İşletmeniz ve çözmek istediğiniz sorun hakkında kısaca yazın"
          className={inputClass + " resize-none"}
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading" || status === "success"}
        className="btn-ink flex w-full disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "loading" && <Loader2 size={18} className="animate-spin" />}
        {status === "success" && <CheckCircle size={18} />}
        {status === "loading" && "Gönderiliyor..."}
        {status === "success" && "Talebiniz gönderildi"}
        {status === "idle" && (
          <>
            Talebi gönder
            <Send size={16} aria-hidden="true" />
          </>
        )}
        {status === "error" && "Tekrar gönder"}
      </button>

      {feedbackMessage && (
        <p
          role="status"
          className={`text-center text-sm ${
            status === "success" ? "text-signal" : "text-alert"
          }`}
        >
          {feedbackMessage}
        </p>
      )}
    </form>
  );
}
