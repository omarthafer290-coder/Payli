"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

const NAV_LINKS = [
  { label: "Solutions", href: "/solutions" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 16);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => setMobileOpen(false), [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -72, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "glass-strong border-b border-white/[0.06] shadow-[0_8px_32px_rgba(0,0,0,0.35)]"
            : "bg-transparent"
        }`}
        style={{ height: 68 }}
      >
        {/* Scroll progress bar */}
        {scrolled && (
          <div
            className="absolute bottom-0 left-0 h-[1px] pointer-events-none"
            style={{
              width: "100%",
              background: "linear-gradient(90deg, transparent, rgba(26,217,173,0.35) 50%, transparent)",
            }}
          />
        )}

        <div className="mx-auto max-w-7xl h-full px-5 md:px-10 flex items-center justify-between gap-8">
          {/* ── Logo ── */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0 group" aria-label="Payli">
            {/* Icon mark */}
            <div
              className="w-8 h-8 rounded-[10px] flex items-center justify-center shrink-0 transition-shadow duration-300 group-hover:shadow-[0_0_20px_rgba(26,217,173,0.4)]"
              style={{ background: "linear-gradient(135deg, #1AD9AD 0%, #18b896 100%)" }}
            >
              <svg width="15" height="15" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M4 4v10M9 4v10M14 4v10M4 9h10" stroke="#020c10" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            {/* Wordmark */}
            <span className="text-[1.125rem] font-[800] tracking-[-0.03em] text-white">
              Pay<span style={{
                background: "linear-gradient(125deg, #1AD9AD 0%, #25AA98 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>li</span>
            </span>
          </Link>

          {/* ── Desktop nav ── */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Primary navigation">
            <Link
              href="/"
              className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                pathname === "/"
                  ? "text-white bg-white/[0.07]"
                  : "text-white/60 hover:text-white hover:bg-white/[0.05]"
              }`}
            >
              Home
            </Link>
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  pathname === l.href
                    ? "text-white bg-white/[0.07]"
                    : "text-white/60 hover:text-white hover:bg-white/[0.05]"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* ── Desktop CTA ── */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <Link
              href="/solutions"
              className="text-sm font-medium text-white/55 hover:text-white/90 transition-colors px-1 py-1"
            >
              See Products
            </Link>
            <Link
              href="/about"
              className="btn-primary text-sm px-5 py-2.5 rounded-xl gap-1.5"
            >
              Book a Demo
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* ── Mobile toggle ── */}
          <button
            aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden w-10 h-10 rounded-xl flex items-center justify-center text-white/70 hover:text-white hover:bg-white/[0.06] transition-colors"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={mobileOpen ? "close" : "open"}
                initial={{ opacity: 0, rotate: -90, scale: 0.7 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 90, scale: 0.7 }}
                transition={{ duration: 0.15 }}
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </motion.header>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            key="mobile-nav"
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed inset-x-0 z-40 glass-strong border-b border-white/[0.06] px-5 pt-2 pb-5 md:hidden"
            style={{ top: 68 }}
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col gap-1">
              {[{ label: "Home", href: "/" }, ...NAV_LINKS].map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <Link
                    href={l.href}
                    className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                      pathname === l.href
                        ? "text-mint bg-mint/10"
                        : "text-white/65 hover:text-white hover:bg-white/[0.05]"
                    }`}
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.12 }}
                className="mt-3 pt-3 border-t border-white/[0.06]"
              >
                <Link
                  href="/about"
                  className="btn-primary w-full text-sm py-3.5 rounded-xl"
                >
                  Book a Demo
                  <ArrowRight size={14} className="ml-1.5" />
                </Link>
              </motion.div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
