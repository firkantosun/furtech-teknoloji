"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "@/components/Logo";
import TrackablePhoneLink from "@/components/TrackablePhoneLink";
import { navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-300",
        scrolled || open ? "border-b border-line bg-paper/95 backdrop-blur" : "border-b border-transparent"
      )}
    >
      <nav className="shell flex h-16 items-center justify-between gap-6" aria-label="Ana menü">
        <Link href="/" aria-label="Furtech Teknoloji ana sayfa">
          <Logo />
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative text-[0.95rem] font-medium transition-colors hover:text-ink",
                    active ? "text-ink" : "text-ink-soft"
                  )}
                >
                  {link.label}
                  {active && <span className="absolute -bottom-1.5 left-0 h-[2px] w-full bg-cobalt" />}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-5 md:flex">
          <TrackablePhoneLink className="text-[0.95rem] font-medium text-ink-soft hover:text-ink" />
          <Link href="/contact#teklif-formu" className="btn-ink !px-5 !py-2.5">
            Teklif al
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="-mr-2 p-2 text-ink md:hidden"
          aria-expanded={open}
          aria-controls="mobil-menu"
          aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div id="mobil-menu" className="h-[calc(100dvh-4rem)] overflow-y-auto border-t border-line bg-paper md:hidden">
          <ul className="shell flex flex-col py-6">
            {navLinks.map((link) => (
              <li key={link.href} className="border-b border-line">
                <Link
                  href={link.href}
                  className={cn(
                    "block py-5 text-2xl font-semibold [font-stretch:118%]",
                    pathname === link.href ? "text-cobalt" : "text-ink"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="shell flex flex-col gap-3 pb-10">
            <Link href="/contact#teklif-formu" className="btn-ink w-full">
              Teklif al
            </Link>
            <TrackablePhoneLink className="btn-line w-full" />
          </div>
        </div>
      )}
    </header>
  );
}
