"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "@/components/Logo";
import { navLinks, siteConfig } from "@/lib/data";
import { cn } from "@/lib/utils";
import { springTransition } from "@/lib/motion";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <nav
        className={cn(
          "mx-auto flex max-w-5xl items-center justify-between rounded-2xl border px-3 py-2.5 transition-all duration-500 sm:px-5 sm:py-3",
          scrolled
            ? "border-stone-200 bg-cream-200/95 shadow-lg shadow-black/30 backdrop-blur-xl"
            : "border-stone-200/80 bg-cream-200/90 shadow-sm shadow-black/20 backdrop-blur-md"
        )}
      >
        <Link
          href="/"
          className="group flex shrink-0 items-center rounded-xl px-1 py-1 sm:px-1.5 sm:py-1.5"
          aria-label="Furtech Teknoloji — Ana Sayfa"
        >
          <Logo variant="nav" />
        </Link>

        <ul className="hidden items-center gap-0.5 md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "relative rounded-lg px-3.5 py-2 text-[13px] font-medium tracking-[-0.01em] transition-colors duration-300",
                    active
                      ? "text-charcoal-900"
                      : "text-charcoal-500 hover:text-charcoal-800"
                  )}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute inset-0 -z-10 rounded-lg bg-cream-200"
                      transition={springTransition}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden md:block">
          <Link href="/contact" className="btn-primary !px-4 !py-2 text-[13px]">
            Teklif Alın
          </Link>
        </div>

        <button
          type="button"
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-stone-200 bg-cream-100 text-charcoal-700 transition-colors hover:bg-cream-200 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-cream-100/98 backdrop-blur-2xl md:hidden"
            onClick={() => setMobileOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: -24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -24, scale: 0.98 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex min-h-screen flex-col items-center justify-center gap-1 px-8 py-12"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="mb-10 rounded-2xl border border-stone-200 bg-cream-200 px-6 py-4 shadow-sm"
              >
                <Link
                  href="/"
                  className="group flex items-center justify-center"
                  aria-label="Furtech Teknoloji — Ana Sayfa"
                  onClick={() => setMobileOpen(false)}
                >
                  <Logo variant="mobile" />
                </Link>
              </motion.div>

              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + i * 0.05, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "block py-3 font-display text-2xl font-semibold tracking-[-0.02em] transition-colors",
                      pathname === link.href ? "text-charcoal-900" : "text-charcoal-500"
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.05 + 0.12 }}
                className="mt-8"
              >
                <Link href="/contact" className="btn-primary px-8 py-3.5">
                  Teklif Alın
                </Link>
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-12 text-sm text-charcoal-500"
              >
                {siteConfig.email}
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
