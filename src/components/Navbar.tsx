"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "/" },
  { label: "Solutions", href: "/solutions" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "glass border-b border-mint/10 shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
          <div className="flex h-18 items-center justify-between" style={{ height: "72px" }}>
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group" aria-label="Payli home">
              <div className="relative w-9 h-9">
                <div className="absolute inset-0 rounded-xl btn-primary flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"
                      fill="#021F25"
                    />
                    <path d="M8 10h8M8 14h5" stroke="#021F25" strokeWidth="1.5" strokeLinecap="round" />
                    <circle cx="12" cy="12" r="9" stroke="#021F25" strokeWidth="1.5" fill="none"/>
                    <path d="M9 8v8M15 8v8M9 12h6" stroke="#021F25" strokeWidth="1.8" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>
              <span className="text-xl font-bold tracking-tight text-white group-hover:opacity-90 transition-opacity">
                Pay<span className="gradient-text">li</span>
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                    pathname === l.href
                      ? "text-mint bg-mint/10"
                      : "text-white/70 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {l.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                href="/solutions"
                className="px-4 py-2 text-sm font-medium text-mint/80 hover:text-mint transition-colors"
              >
                See Solutions
              </Link>
              <Link
                href="/about"
                className="btn-primary px-5 py-2.5 text-sm rounded-xl"
              >
                Book a Demo
              </Link>
            </div>

            {/* Mobile menu toggle */}
            <button
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="md:hidden p-2 rounded-xl text-white/80 hover:text-white hover:bg-white/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-mint"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed inset-x-0 top-[72px] z-40 glass border-b border-mint/10 px-6 py-6 flex flex-col gap-2 md:hidden"
          >
            {links.map((l, i) => (
              <motion.div
                key={l.href}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  href={l.href}
                  className={`block px-4 py-3 rounded-xl text-base font-medium transition-all ${
                    pathname === l.href
                      ? "text-mint bg-mint/10"
                      : "text-white/70 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {l.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: links.length * 0.05 }}
              className="mt-2"
            >
              <Link href="/about" className="btn-primary w-full text-center block px-5 py-3 rounded-xl text-sm">
                Book a Demo
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
