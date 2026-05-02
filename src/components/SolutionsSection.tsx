"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { CreditCard, UtensilsCrossed, BookOpen, Link2, ArrowRight, Check } from "lucide-react";

const SOLUTIONS = [
  {
    id: "pay",
    label: "Pay at Table",
    icon: CreditCard,
    tag: "Most popular",
    headline: "Let guests pay the moment they're ready.",
    body: "Payli puts the payment experience in the guest's hands. No waiting for the server, no card machine, no awkward split calculations. They scan, split however they like, and pay — in under 90 seconds.",
    bullets: [
      "Real-time POS sync closes the table automatically",
      "Bill-split by items, percentage, or custom amounts",
      "Apple Pay · Google Pay · Card — all supported",
      "Digital receipt sent instantly via SMS or email",
    ],
    accent: "#1AD9AD",
    preview: <PayAtTablePreview />,
  },
  {
    id: "order",
    label: "Order & Pay",
    icon: UtensilsCrossed,
    tag: null,
    headline: "QR-powered ordering from the table.",
    body: "Guests browse a rich digital menu, customise their order, and submit directly to the kitchen — without flagging down a server. Fewer errors, faster service, happier guests.",
    bullets: [
      "Menu with photos, allergens, and customisations",
      "Orders fire straight to kitchen display / POS",
      "Real-time item availability from your POS",
      "Upsell nudges increase average spend by 12%",
    ],
    accent: "#25AA98",
    preview: <OrderPayPreview />,
  },
  {
    id: "menu",
    label: "Digital Menu",
    icon: BookOpen,
    tag: null,
    headline: "A menu that updates in real time.",
    body: "Replace printed menus with a beautiful, always-current digital experience. Update prices, flag out-of-stock items, and add seasonal specials — instantly, from your dashboard.",
    bullets: [
      "Branded visual menus with HD photography",
      "86 items instantly — no reprint, no waste",
      "Multi-language support for international guests",
      "Smart upselling based on order history",
    ],
    accent: "#136A6F",
    preview: <DigitalMenuPreview />,
  },
  {
    id: "link",
    label: "Payment Link",
    icon: Link2,
    tag: null,
    headline: "Send payment requests anywhere.",
    body: "Generate a secure payment link for any amount and send it via WhatsApp, SMS, or email. Perfect for deposits, event bookings, and off-table experiences.",
    bullets: [
      "Shareable link — no POS hardware needed",
      "Supports deposits, full payments, and partial",
      "Auto-expiry and fraud protection built in",
      "Instant settlement to your bank account",
    ],
    accent: "#0B4952",
    preview: <PaymentLinkPreview />,
  },
];

function PayAtTablePreview() {
  return (
    <div className="w-full h-full flex flex-col gap-3 p-5">
      {/* Header */}
      <div className="flex items-center justify-between mb-1">
        <div>
          <div className="text-[11px] font-[700] text-white/80">Table 07 · Mazaj Restaurant</div>
          <div className="text-[9px] text-white/35 mt-0.5">3 guests · Active bill</div>
        </div>
        <div className="px-2.5 py-1 rounded-full text-[9px] font-[700]" style={{ background: "rgba(26,217,173,0.12)", color: "#1AD9AD", border: "1px solid rgba(26,217,173,0.2)" }}>
          ACTIVE
        </div>
      </div>

      {/* Bill items */}
      <div className="rounded-xl p-3 flex-1" style={{ background: "rgba(26,217,173,0.04)", border: "1px solid rgba(26,217,173,0.08)" }}>
        {[["Wagyu Ribeye", "185"], ["Burrata Salad ×2", "116"], ["Truffle Fries", "45"], ["Sparkling Water ×2", "36"]].map(([item, price]) => (
          <div key={item} className="flex justify-between py-1.5 border-b border-white/[0.04] last:border-0">
            <span className="text-[10px] text-white/55">{item}</span>
            <span className="text-[10px] text-white/65 font-mono font-[600]">AED {price}</span>
          </div>
        ))}
        <div className="flex justify-between pt-2 mt-1">
          <span className="text-[11px] font-[700] text-white">Total</span>
          <span className="text-[12px] font-[800] font-mono" style={{ color: "#1AD9AD" }}>AED 414</span>
        </div>
      </div>

      {/* Split options */}
      <div className="flex gap-2">
        {["Split ÷ 2", "Split ÷ 3", "Custom"].map((opt, i) => (
          <div key={opt} className="flex-1 py-1.5 rounded-lg text-center text-[9px] font-[600]"
            style={{ background: i === 0 ? "rgba(26,217,173,0.12)" : "rgba(255,255,255,0.04)", color: i === 0 ? "#1AD9AD" : "rgba(255,255,255,0.4)", border: `1px solid ${i === 0 ? "rgba(26,217,173,0.2)" : "rgba(255,255,255,0.06)"}` }}>
            {opt}
          </div>
        ))}
      </div>

      {/* Pay button */}
      <div className="w-full py-3 rounded-xl text-center text-[11px] font-[800]"
        style={{ background: "linear-gradient(135deg, #1AD9AD, #18b896)", color: "#020c10", boxShadow: "0 6px 20px rgba(26,217,173,0.3)" }}>
        Pay AED 138 (÷ 3)
      </div>
    </div>
  );
}

function OrderPayPreview() {
  return (
    <div className="w-full h-full flex flex-col gap-3 p-5">
      <div className="text-[11px] font-[700] text-white/80 mb-1">Digital Menu</div>
      <div className="grid grid-cols-2 gap-2 flex-1">
        {[
          { name: "Wagyu Ribeye", price: "185", tag: "Chef's pick" },
          { name: "Burrata Salad", price: "58", tag: "Vegetarian" },
          { name: "Truffle Fries", price: "45", tag: null },
          { name: "Tiramisu", price: "42", tag: "New" },
        ].map((item) => (
          <div key={item.name} className="rounded-xl p-2.5 relative overflow-hidden" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
            <div className="w-full aspect-[4/3] rounded-lg mb-2" style={{ background: "linear-gradient(135deg, rgba(26,217,173,0.08), rgba(19,106,111,0.05))" }} />
            {item.tag && (
              <div className="absolute top-2 right-2 px-1.5 py-0.5 rounded-full text-[8px] font-[700]" style={{ background: "rgba(26,217,173,0.15)", color: "#1AD9AD" }}>
                {item.tag}
              </div>
            )}
            <div className="text-[9px] font-[600] text-white/70">{item.name}</div>
            <div className="text-[9px] font-[700] mt-0.5 font-mono" style={{ color: "#1AD9AD" }}>AED {item.price}</div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between pt-1">
        <span className="text-[10px] text-white/40">2 items in cart</span>
        <div className="px-3 py-1.5 rounded-lg text-[9px] font-[700]" style={{ background: "linear-gradient(135deg, #1AD9AD, #18b896)", color: "#020c10" }}>
          View Cart →
        </div>
      </div>
    </div>
  );
}

function DigitalMenuPreview() {
  return (
    <div className="w-full h-full flex flex-col gap-3 p-5">
      <div className="flex items-center justify-between mb-1">
        <div className="text-[11px] font-[700] text-white/80">Menu Manager</div>
        <div className="px-2 py-1 rounded-lg text-[9px] font-[600]" style={{ background: "rgba(26,217,173,0.1)", color: "#1AD9AD" }}>Live</div>
      </div>
      <div className="space-y-2 flex-1">
        {[
          { section: "Starters", count: 8, active: true },
          { section: "Mains", count: 14, active: true },
          { section: "Desserts", count: 6, active: true },
          { section: "Beverages", count: 22, active: false },
        ].map((cat) => (
          <div key={cat.section} className="flex items-center justify-between rounded-xl px-3 py-2.5" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
            <div className="flex items-center gap-2.5">
              <div className="w-2 h-2 rounded-full" style={{ background: cat.active ? "#1AD9AD" : "rgba(255,255,255,0.15)", boxShadow: cat.active ? "0 0 6px rgba(26,217,173,0.6)" : "none" }} />
              <span className="text-[10px] font-[600] text-white/70">{cat.section}</span>
            </div>
            <span className="text-[9px] text-white/35">{cat.count} items</span>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <div className="flex-1 py-2 rounded-xl text-center text-[9px] font-[600]" style={{ background: "rgba(26,217,173,0.08)", color: "#1AD9AD", border: "1px solid rgba(26,217,173,0.15)" }}>
          + Add Item
        </div>
        <div className="flex-1 py-2 rounded-xl text-center text-[9px] font-[600]" style={{ background: "rgba(255,255,255,0.04)", color: "rgba(255,255,255,0.45)", border: "1px solid rgba(255,255,255,0.07)" }}>
          Preview
        </div>
      </div>
    </div>
  );
}

function PaymentLinkPreview() {
  return (
    <div className="w-full h-full flex flex-col gap-3 p-5">
      <div className="text-[11px] font-[700] text-white/80 mb-1">Payment Link</div>
      <div className="rounded-xl p-3" style={{ background: "rgba(26,217,173,0.04)", border: "1px solid rgba(26,217,173,0.1)" }}>
        <div className="text-[9px] text-white/40 mb-1">Link for</div>
        <div className="text-[11px] font-[600] text-white/80">Private Dining · 8 Guests</div>
        <div className="text-[18px] font-[800] font-mono mt-2" style={{ color: "#1AD9AD" }}>AED 1,200</div>
        <div className="text-[9px] text-white/35 mt-0.5">Deposit · 20% of total</div>
      </div>
      <div className="rounded-xl p-2.5 font-mono text-[8px] break-all" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.4)" }}>
        payli.link/pay/TXN-8a3f2...
      </div>
      <div className="flex gap-2">
        {["WhatsApp", "SMS", "Email"].map((ch) => (
          <div key={ch} className="flex-1 py-2 rounded-lg text-center text-[8px] font-[600]" style={{ background: "rgba(255,255,255,0.04)", color: "rgba(255,255,255,0.45)", border: "1px solid rgba(255,255,255,0.07)" }}>
            {ch}
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2 mt-1">
        <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#1AD9AD", boxShadow: "0 0 6px rgba(26,217,173,0.8)" }} />
        <span className="text-[9px] text-white/40">Expires in 24 hours · PCI-secure</span>
      </div>
    </div>
  );
}

export default function SolutionsSection() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  const sol = SOLUTIONS[active];

  return (
    <section ref={sectionRef} className="relative py-28 md:py-36 overflow-hidden section-alt">
      <div className="divider-glow absolute top-0 inset-x-0" aria-hidden="true" />
      <div className="divider-glow absolute bottom-0 inset-x-0" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
          <p className="eyebrow mb-4">Our products</p>
          <h2 className="display-lg text-white mb-4">
            One platform.{" "}
            <span className="gradient-text">Four ways to win.</span>
          </h2>
          <p className="text-lg text-white/45 max-w-lg mx-auto">
            Whether you need seamless payments, full table-side ordering, or smarter menus — Payli has you covered.
          </p>
        </motion.div>

        {/* Tab navigation */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap gap-2 justify-center mb-10"
          role="tablist"
          aria-label="Product solutions"
        >
          {SOLUTIONS.map((s, i) => {
            const Icon = s.icon;
            const isActive = active === i;
            return (
              <button
                key={s.id}
                role="tab"
                aria-selected={isActive}
                aria-controls={`panel-${s.id}`}
                onClick={() => setActive(i)}
                className="relative flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-[600] transition-all duration-250 focus-visible:outline-none focus-visible:ring-2 cursor-pointer"
                style={{
                  background: isActive ? "rgba(26,217,173,0.12)" : "rgba(255,255,255,0.04)",
                  color: isActive ? "#1AD9AD" : "rgba(255,255,255,0.5)",
                  border: `1px solid ${isActive ? "rgba(26,217,173,0.25)" : "rgba(255,255,255,0.07)"}`,
                }}
              >
                <Icon size={15} strokeWidth={isActive ? 2 : 1.75} />
                {s.label}
                {s.tag && (
                  <span
                    className="text-[9px] font-[700] uppercase tracking-widest px-1.5 py-0.5 rounded-full"
                    style={{ background: "rgba(26,217,173,0.15)", color: "#1AD9AD" }}
                  >
                    {s.tag}
                  </span>
                )}
                {isActive && (
                  <motion.div
                    layoutId="tab-indicator"
                    className="absolute inset-0 rounded-xl"
                    style={{ background: "rgba(26,217,173,0.08)" }}
                    transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                  />
                )}
              </button>
            );
          })}
        </motion.div>

        {/* Content panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            id={`panel-${sol.id}`}
            role="tabpanel"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.32, ease: [0.25, 0.1, 0.25, 1] }}
            className="grid lg:grid-cols-[1.1fr_1fr] gap-8 lg:gap-12 items-center"
          >
            {/* Left: content */}
            <div>
              <div
                className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 mb-6 text-xs font-[600]"
                style={{ background: "rgba(26,217,173,0.08)", color: "#1AD9AD", border: "1px solid rgba(26,217,173,0.15)" }}
              >
                <sol.icon size={12} />
                {sol.label}
              </div>

              <h3 className="display-md text-white mb-4 leading-snug">{sol.headline}</h3>
              <p className="text-base text-white/50 leading-relaxed mb-8 max-w-[440px]">{sol.body}</p>

              <ul className="space-y-3 mb-8">
                {sol.bullets.map((bullet, bi) => (
                  <motion.li
                    key={bi}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: bi * 0.06 }}
                    className="flex items-start gap-3"
                  >
                    <div
                      className="w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5"
                      style={{ background: "rgba(26,217,173,0.12)", border: "1px solid rgba(26,217,173,0.2)" }}
                    >
                      <Check size={11} style={{ color: "#1AD9AD" }} strokeWidth={2.5} />
                    </div>
                    <span className="text-sm text-white/60 leading-relaxed">{bullet}</span>
                  </motion.li>
                ))}
              </ul>

              <button className="btn-outline-mint text-sm px-6 py-3 rounded-xl gap-2 cursor-pointer">
                Learn more about {sol.label}
                <ArrowRight size={14} />
              </button>
            </div>

            {/* Right: UI preview */}
            <div className="flex justify-center lg:justify-end">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.05 }}
                className="relative w-full max-w-[340px]"
              >
                {/* Glow */}
                <div
                  className="absolute inset-0 rounded-3xl pointer-events-none"
                  style={{ boxShadow: "0 0 80px rgba(26,217,173,0.1), 0 40px 80px rgba(0,0,0,0.4)" }}
                  aria-hidden="true"
                />

                {/* Card frame */}
                <div
                  className="relative rounded-3xl overflow-hidden"
                  style={{
                    background: "linear-gradient(145deg, #0d1c23 0%, #091520 100%)",
                    border: "1px solid rgba(26,217,173,0.12)",
                    minHeight: 340,
                  }}
                >
                  {/* Top bar */}
                  <div
                    className="flex items-center gap-2 px-4 py-3 border-b"
                    style={{ borderColor: "rgba(255,255,255,0.05)" }}
                  >
                    {[
                      "rgba(255,95,86,0.7)",
                      "rgba(255,189,46,0.7)",
                      "rgba(39,201,63,0.7)",
                    ].map((c, ci) => (
                      <div key={ci} className="w-2.5 h-2.5 rounded-full" style={{ background: c }} />
                    ))}
                    <div className="flex-1 mx-3 h-5 rounded-md flex items-center justify-center" style={{ background: "rgba(255,255,255,0.04)" }}>
                      <span className="text-[8px] text-white/25 font-mono">payli.tech/pay/table-07</span>
                    </div>
                  </div>

                  {/* Preview content */}
                  <div className="h-[300px]">
                    {sol.preview}
                  </div>
                </div>

                {/* Floating badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
                  className="absolute -top-4 -right-4 glass-strong rounded-2xl px-4 py-3"
                  style={{ border: "1px solid rgba(26,217,173,0.15)" }}
                >
                  <div className="flex items-center gap-2">
                    <div
                      className="w-7 h-7 rounded-xl flex items-center justify-center"
                      style={{ background: "rgba(26,217,173,0.12)" }}
                    >
                      <sol.icon size={13} style={{ color: "#1AD9AD" }} />
                    </div>
                    <div>
                      <div className="text-[10px] font-[700] text-white">{sol.label}</div>
                      <div className="text-[8px] text-white/35">Ready in 24h</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
