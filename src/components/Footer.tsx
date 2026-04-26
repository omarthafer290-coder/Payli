import Link from "next/link";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";

const NAV = {
  Solutions: [
    { label: "Pay at Table",  href: "/solutions#pay-at-table"  },
    { label: "Order & Pay",   href: "/solutions#order-and-pay" },
    { label: "Digital Menu",  href: "/solutions#digital-menu"  },
    { label: "Integrations",  href: "/solutions#integrations"  },
  ],
  Company: [
    { label: "About Us",  href: "/about"         },
    { label: "Careers",   href: "/about#careers" },
    { label: "Press",     href: "/about#press"   },
    { label: "Blog",      href: "/about#blog"    },
  ],
  Contact: [
    { label: "hello@payli.tech",     href: "mailto:hello@payli.tech", icon: Mail     },
    { label: "Dubai, UAE",           href: "#",                        icon: MapPin   },
  ],
};

export default function Footer() {
  return (
    <footer className="relative border-t overflow-hidden" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
      {/* Ambient */}
      <div
        className="blob absolute w-[600px] h-[400px] -bottom-40 -left-20 opacity-20 animate-glow"
        style={{ background: "radial-gradient(ellipse, rgba(19,106,111,0.2) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 md:px-10 pt-16 pb-8">

        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-12 pb-14 border-b" style={{ borderColor: "rgba(255,255,255,0.05)" }}>

          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2.5 mb-5 group w-fit">
              <div
                className="w-8 h-8 rounded-[10px] flex items-center justify-center transition-shadow duration-300 group-hover:shadow-[0_0_16px_rgba(26,217,173,0.4)]"
                style={{ background: "linear-gradient(135deg, #1AD9AD 0%, #18b896 100%)" }}
              >
                <svg width="15" height="15" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <path d="M4 4v10M9 4v10M14 4v10M4 9h10" stroke="#020c10" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="text-[1.125rem] font-[800] tracking-[-0.03em] text-white">
                Pay<span style={{
                  background: "linear-gradient(125deg, #1AD9AD, #25AA98)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>li</span>
              </span>
            </Link>

            <p className="text-sm text-white/40 leading-relaxed mb-6 max-w-[260px]">
              The bill without the wait. QR-powered payments that give restaurants 15 minutes back per table.
            </p>

            {/* Social */}
            <div className="flex gap-2">
              {[
                { label: "LinkedIn", href: "https://linkedin.com" },
                { label: "X",        href: "https://x.com"        },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={`Payli on ${s.label}`}
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-white/35 hover:text-white/80 transition-colors"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <span className="text-[11px] font-[700]">{s.label[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {(Object.entries(NAV) as [string, { label: string; href: string; icon?: React.ElementType }[]][]).map(([section, links]) => (
            <div key={section}>
              <h3 className="eyebrow mb-5">{section}</h3>
              <ul className="space-y-3">
                {links.map((l) => {
                  const Icon = l.icon;
                  return (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        className="group flex items-center gap-2 text-sm text-white/40 hover:text-white/80 transition-colors"
                      >
                        {Icon && <Icon size={13} className="shrink-0 text-white/25" />}
                        {l.label}
                        {l.href.startsWith("mailto") && (
                          <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-50 transition-opacity" />
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/20">
            © {new Date().getFullYear()} Payli Technologies LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((l) => (
              <Link
                key={l}
                href="#"
                className="text-xs text-white/20 hover:text-white/45 transition-colors"
              >
                {l}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
