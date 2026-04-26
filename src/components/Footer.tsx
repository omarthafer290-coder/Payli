import Link from "next/link";
import { Mail, MapPin, ExternalLink, Share2 } from "lucide-react";

const solutions = [
  { label: "Pay at Table", href: "/solutions#pay-at-table" },
  { label: "Order & Pay", href: "/solutions#order-and-pay" },
  { label: "Digital Menu", href: "/solutions#digital-menu" },
];
const company = [
  { label: "About Us", href: "/about" },
  { label: "Careers", href: "/about#careers" },
  { label: "Press", href: "/about#press" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-mint/10 pt-16 pb-8 overflow-hidden">
      {/* Ambient glow */}
      <div
        className="ambient-blob animate-glow w-96 h-96 -bottom-32 -left-16"
        style={{ background: "rgba(19,106,111,0.15)" }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-white/5">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg btn-primary flex items-center justify-center shrink-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="9" stroke="#021F25" strokeWidth="2" fill="none"/>
                  <path d="M9 8v8M15 8v8M9 12h6" stroke="#021F25" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="text-lg font-bold text-white">
                Pay<span className="gradient-text">li</span>
              </span>
            </Link>
            <p className="text-sm text-white/50 leading-relaxed mb-5">
              The bill without the wait. QR-powered payments for modern restaurants.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com"
                aria-label="Payli on LinkedIn"
                className="w-9 h-9 rounded-xl glass-light flex items-center justify-center text-white/50 hover:text-mint hover:border-mint/30 transition-all"
              >
                <ExternalLink size={15} />
              </a>
              <a
                href="https://twitter.com"
                aria-label="Payli on X / Twitter"
                className="w-9 h-9 rounded-xl glass-light flex items-center justify-center text-white/50 hover:text-mint hover:border-mint/30 transition-all"
              >
                <Share2 size={15} />
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-mint/60 mb-5">Solutions</h3>
            <ul className="space-y-3">
              {solutions.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/50 hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-mint/60 mb-5">Company</h3>
            <ul className="space-y-3">
              {company.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/50 hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-mint/60 mb-5">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@payli.tech"
                  className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors"
                >
                  <Mail size={14} className="text-mint/50 shrink-0" />
                  hello@payli.tech
                </a>
              </li>
              <li>
                <span className="flex items-start gap-2 text-sm text-white/50">
                  <MapPin size={14} className="text-mint/50 shrink-0 mt-0.5" />
                  Dubai, UAE
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Payli. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-xs text-white/30 hover:text-white/60 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-white/30 hover:text-white/60 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
