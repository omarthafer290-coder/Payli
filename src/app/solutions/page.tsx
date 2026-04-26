"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import {
  CreditCard, UtensilsCrossed, BarChart3, Check, ArrowRight,
  Zap, RefreshCcw, Eye, Layers, QrCode, TrendingUp,
  SplitSquareVertical, Smartphone, PenSquare, ShieldCheck,
  Clock, Star, ChevronRight,
} from "lucide-react";

/* ─── Reveal helper ────────────────────────────────────────────────────────── */
function Reveal({
  children,
  delay = 0,
  className = "",
  direction = "up",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "left" | "right";
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: direction === "up" ? 28 : 0,
        x: direction === "left" ? -24 : direction === "right" ? 24 : 0,
      }}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Data ─────────────────────────────────────────────────────────────────── */
const SOLUTIONS = [
  {
    id: "pay-at-table",
    icon: CreditCard,
    tag: "Most Popular",
    label: "Pay at Table",
    headline: "Close every table in under 2 minutes.",
    subline: "Real-time POS sync. Auto table close. Zero staff intervention.",
    description:
      "Guests scan the QR on their table, see their itemised bill instantly, and pay however they prefer — in seconds. Your POS receives the payment and closes the table automatically. No waiting, no card machines, no delays.",
    features: [
      { icon: Smartphone,       text: "Apple Pay, Google Pay, all major cards" },
      { icon: RefreshCcw,       text: "Real-time sync with Foodics, Lightspeed, Toast & more" },
      { icon: SplitSquareVertical, text: "Split by item, equal share, or custom amount" },
      { icon: ShieldCheck,      text: "PCI DSS compliant — bank-grade security" },
      { icon: Star,             text: "Smart tip prompts — increase gratuity by 22% on average" },
      { icon: Clock,            text: "Table auto-closes on payment received" },
    ],
    metrics: [
      { value: "< 2 min", label: "Average bill-to-close" },
      { value: "+31%",    label: "Revenue per shift"     },
      { value: "22%",     label: "Tip rate increase"     },
    ],
    visual: "pay-at-table",
  },
  {
    id: "order-and-pay",
    icon: UtensilsCrossed,
    tag: null,
    label: "Order & Pay",
    headline: "Order direct. Pay direct. No middleman.",
    subline: "Guests browse, customise, order, and pay — without involving staff.",
    description:
      "Payli&apos;s Order & Pay gives guests complete control of their dining experience. Orders fire directly to your kitchen display system the moment they&apos;re placed — no re-keying, no miscommunication, no delays. Staff are freed to deliver exceptional hospitality instead of processing orders.",
    features: [
      { icon: QrCode,       text: "Instant order routing to kitchen display or POS" },
      { icon: PenSquare,    text: "Full modifier, allergen, and dietary tag support" },
      { icon: Zap,          text: "Orders hit the kitchen in under 3 seconds" },
      { icon: TrendingUp,   text: "Upsell prompts increase average order value by 18%" },
      { icon: RefreshCcw,   text: "Re-order and waiter call built in" },
      { icon: Layers,       text: "Multi-language menu — Arabic, English & more" },
    ],
    metrics: [
      { value: "67%",  label: "Fewer order errors" },
      { value: "2×",   label: "Faster service cycles" },
      { value: "+18%", label: "Avg order value"    },
    ],
    visual: "order-and-pay",
  },
  {
    id: "digital-menu",
    icon: BarChart3,
    tag: null,
    label: "Digital Menu",
    headline: "Your brand. Your menu. Full control.",
    subline: "Live updates, AI upselling, and rich visuals — all without printing.",
    description:
      "Replace static menus with a fully branded digital experience your guests will love. Update items in seconds, push seasonal promotions in real-time, and let high-resolution photos and smart AI suggestions do the upselling for you.",
    features: [
      { icon: PenSquare,  text: "No-code menu editor — update in under a minute" },
      { icon: Eye,        text: "High-res photos and optional video support" },
      { icon: TrendingUp, text: "AI upsell engine boosts add-on attach rate by 43%" },
      { icon: Clock,      text: "Time-based pricing — breakfast, lunch, dinner rates" },
      { icon: BarChart3,  text: "Analytics: most viewed, most ordered, abandoned items" },
      { icon: Layers,     text: "Unlimited categories, modifiers, and variants" },
    ],
    metrics: [
      { value: "43%",  label: "Higher add-on rate" },
      { value: "+18%", label: "Order value uplift"  },
      { value: "0 sec", label: "Menu update time"   },
    ],
    visual: "digital-menu",
  },
];

const INTEGRATIONS = [
  "Foodics", "Lightspeed", "Toast", "Square",
  "Oracle MICROS", "Simphony", "TouchBistro", "Revel",
  "Epos Now", "Kounta",
];

/* ─── Visual mockup (per product) ─────────────────────────────────────────── */
function ProductVisual({ type }: { type: string }) {
  if (type === "pay-at-table") {
    return (
      <div className="glass-card rounded-3xl p-7 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-40 h-40 opacity-5 pointer-events-none">
          <CreditCard size={160} strokeWidth={0.5} style={{ color: "#1AD9AD" }} />
        </div>
        {/* Bill preview */}
        <div className="flex items-center justify-between mb-5">
          <div>
            <p className="text-[10px] text-white/30 uppercase tracking-widest mb-0.5">Table 12 · 4 guests</p>
            <p className="text-base font-[700] text-white">Bill Summary</p>
          </div>
          <div className="px-2.5 py-1 rounded-full text-[10px] font-[700]"
            style={{ background: "rgba(26,217,173,0.12)", color: "#1AD9AD" }}>
            PAID ✓
          </div>
        </div>
        {[
          ["Seafood Pasta × 2",  "AED 156"],
          ["Caesar Salad × 1",   "AED 52" ],
          ["Sparkling Water × 4","AED 40" ],
          ["Dessert Platter × 1","AED 68" ],
        ].map(([item, price]) => (
          <div key={item} className="flex justify-between py-2 border-b border-white/[0.04]">
            <span className="text-sm text-white/55">{item}</span>
            <span className="text-sm font-mono font-[600] text-white/65">{price}</span>
          </div>
        ))}
        <div className="flex justify-between pt-3 mb-5">
          <span className="text-sm font-[700] text-white">Total (incl. VAT)</span>
          <span className="text-lg font-[800] font-mono" style={{ color: "#1AD9AD" }}>AED 346</span>
        </div>
        {/* Metrics row */}
        <div className="grid grid-cols-3 gap-3">
          {[["< 2 min","bill-to-close"],["+22%","tip rate"],["Auto","POS close"]].map(([val, lbl]) => (
            <div key={lbl} className="rounded-2xl p-3 text-center"
              style={{ background: "rgba(26,217,173,0.05)", border: "1px solid rgba(26,217,173,0.1)" }}>
              <p className="text-sm font-[800]" style={{ color: "#1AD9AD" }}>{val}</p>
              <p className="text-[9px] text-white/35 mt-0.5">{lbl}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (type === "order-and-pay") {
    return (
      <div className="glass-card rounded-3xl p-7 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-40 h-40 opacity-5 pointer-events-none">
          <UtensilsCrossed size={160} strokeWidth={0.5} style={{ color: "#1AD9AD" }} />
        </div>
        <p className="text-[10px] text-white/30 uppercase tracking-widest mb-4">Live Order Feed</p>
        {[
          { table: "Table 03", item: "Wagyu Steak (medium rare)", status: "Cooking",  statusColor: "#f59e0b" },
          { table: "Table 07", item: "Margherita Pizza (no olives)", status: "Ready",   statusColor: "#1AD9AD" },
          { table: "Table 11", item: "Burrata Salad × 2",           status: "Sent",    statusColor: "#60a5fa" },
          { table: "Table 14", item: "Truffle Pasta + Tiramisu",     status: "Cooking", statusColor: "#f59e0b" },
        ].map((o) => (
          <div key={o.table} className="flex items-center gap-4 py-3 border-b border-white/[0.04]">
            <div className="w-14 shrink-0">
              <span className="text-[10px] font-[700] text-white/40 uppercase">{o.table}</span>
            </div>
            <span className="text-sm text-white/65 flex-1 leading-tight">{o.item}</span>
            <span className="text-[10px] font-[700] px-2 py-0.5 rounded-full shrink-0"
              style={{ background: `${o.statusColor}18`, color: o.statusColor, border: `1px solid ${o.statusColor}30` }}>
              {o.status}
            </span>
          </div>
        ))}
        <div className="mt-4 flex items-center gap-2">
          <Zap size={13} style={{ color: "#1AD9AD" }} />
          <span className="text-xs text-white/35">Orders fire to kitchen in under 3 seconds</span>
        </div>
      </div>
    );
  }

  // digital-menu
  return (
    <div className="glass-card rounded-3xl p-7 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-40 h-40 opacity-5 pointer-events-none">
        <BarChart3 size={160} strokeWidth={0.5} style={{ color: "#1AD9AD" }} />
      </div>
      <p className="text-[10px] text-white/30 uppercase tracking-widest mb-4">Menu Analytics</p>
      {[
        { name: "Wagyu Ribeye",      views: 420, orders: 156, badge: "🔥 Top" },
        { name: "Truffle Pasta",     views: 380, orders: 134, badge: null },
        { name: "Burrata Salad",     views: 290, orders: 98,  badge: null },
        { name: "Chocolate Fondant", views: 260, orders: 87,  badge: "↑ Upsell" },
      ].map((item) => (
        <div key={item.name} className="py-3 border-b border-white/[0.04]">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-sm text-white/70 font-[500]">{item.name}</span>
            <div className="flex items-center gap-2">
              {item.badge && (
                <span className="text-[9px] font-[700] px-1.5 py-0.5 rounded"
                  style={{ background: "rgba(26,217,173,0.12)", color: "#1AD9AD" }}>
                  {item.badge}
                </span>
              )}
              <span className="text-xs font-mono text-white/40">{item.orders} orders</span>
            </div>
          </div>
          <div className="w-full rounded-full overflow-hidden" style={{ height: 4, background: "rgba(255,255,255,0.06)" }}>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${(item.orders / 156) * 100}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-full rounded-full"
              style={{ background: "linear-gradient(90deg, #1AD9AD, #25AA98)" }}
            />
          </div>
        </div>
      ))}
      <div className="mt-4 flex items-center gap-2">
        <TrendingUp size={13} style={{ color: "#1AD9AD" }} />
        <span className="text-xs text-white/35">AI upsell increased attach rate by 43%</span>
      </div>
    </div>
  );
}

/* ─── Page ─────────────────────────────────────────────────────────────────── */
export default function SolutionsPage() {
  return (
    <>
      {/* ══ HERO ═══════════════════════════════════════════════════════════════ */}
      <section className="relative pt-36 pb-20 text-center overflow-hidden">
        <div className="blob absolute w-[700px] h-[600px] top-0 left-1/2 -translate-x-1/2 opacity-25"
          style={{ background: "radial-gradient(ellipse, rgba(26,217,173,0.09) 0%, transparent 65%)" }}
          aria-hidden="true" />

        <div className="relative mx-auto max-w-4xl px-5 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8"
          >
            <Layers size={12} style={{ color: "#1AD9AD" }} />
            <span className="text-xs font-[600] text-white/60">Three products. One platform.</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.07 }}
            className="display-xl text-white mb-6"
          >
            Solutions built for<br />
            <span className="gradient-text">modern dining.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-lg text-white/45 max-w-xl mx-auto mb-10"
          >
            Whether you want faster payments, smarter ordering, or a digital menu guests love — Payli has the product that fits your restaurant.
          </motion.p>

          {/* Jump nav */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-3 justify-center"
          >
            {SOLUTIONS.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="btn-outline-mint text-sm px-5 py-2.5 rounded-xl gap-2 inline-flex items-center"
              >
                <s.icon size={14} strokeWidth={1.8} />
                {s.label}
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      <div className="divider-glow mx-auto max-w-7xl" />

      {/* ══ SOLUTION SECTIONS ══════════════════════════════════════════════════ */}
      {SOLUTIONS.map((s, idx) => {
        const isEven = idx % 2 === 0;
        const Icon = s.icon;
        return (
          <section
            key={s.id}
            id={s.id}
            className="relative py-24 md:py-32 scroll-mt-20 overflow-hidden"
          >
            {/* Section ambient */}
            <div className="blob absolute w-[500px] h-[400px] animate-blob opacity-20"
              style={{
                background: "radial-gradient(circle, rgba(26,217,173,0.07) 0%, transparent 70%)",
                top: "10%",
                [isEven ? "right" : "left"]: "-100px",
                animationDelay: `${idx * 3}s`,
              }}
              aria-hidden="true" />

            <div className="mx-auto max-w-7xl px-5 md:px-10">
              <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-start ${!isEven ? "lg:grid-flow-dense" : ""}`}>

                {/* ── Text ── */}
                <Reveal direction={isEven ? "left" : "right"} className={!isEven ? "lg:col-start-2" : ""}>
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
                      style={{
                        background: "linear-gradient(135deg, rgba(26,217,173,0.18), rgba(19,106,111,0.1))",
                        border: "1px solid rgba(26,217,173,0.2)",
                      }}
                    >
                      <Icon size={22} strokeWidth={1.7} style={{ color: "#1AD9AD" }} />
                    </div>
                    {s.tag && (
                      <span
                        className="text-[10px] font-[700] uppercase tracking-widest px-2.5 py-1 rounded-full"
                        style={{ background: "rgba(26,217,173,0.1)", color: "#1AD9AD", border: "1px solid rgba(26,217,173,0.18)" }}
                      >
                        {s.tag}
                      </span>
                    )}
                  </div>

                  <h2 className="display-md text-white mb-2 max-w-lg">{s.headline}</h2>
                  <p className="text-base font-[600] mb-5" style={{ color: "#1AD9AD" }}>{s.subline}</p>
                  <p
                    className="text-base text-white/50 leading-relaxed mb-8 max-w-md"
                    dangerouslySetInnerHTML={{ __html: s.description }}
                  />

                  {/* Feature list */}
                  <ul className="space-y-3 mb-10">
                    {s.features.map((feat) => {
                      const FIcon = feat.icon;
                      return (
                        <li key={feat.text} className="flex items-start gap-3">
                          <div
                            className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                            style={{ background: "rgba(26,217,173,0.1)", border: "1px solid rgba(26,217,173,0.15)" }}
                          >
                            <FIcon size={13} style={{ color: "#1AD9AD" }} strokeWidth={2} />
                          </div>
                          <span className="text-sm text-white/60 leading-snug pt-0.5">{feat.text}</span>
                        </li>
                      );
                    })}
                  </ul>

                  <Link href="/about" className="btn-primary text-sm px-7 py-3.5 rounded-2xl gap-2">
                    Book a Demo
                    <ArrowRight size={15} />
                  </Link>
                </Reveal>

                {/* ── Visual ── */}
                <Reveal direction={isEven ? "right" : "left"} delay={0.12}
                  className={!isEven ? "lg:col-start-1 lg:row-start-1" : ""}
                >
                  {/* Metrics strip */}
                  <div className="grid grid-cols-3 gap-3 mb-5">
                    {s.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="glass-card rounded-2xl p-4 text-center"
                      >
                        <p
                          className="text-xl font-[900] tracking-tight mb-1"
                          style={{ color: "#1AD9AD" }}
                        >
                          {m.value}
                        </p>
                        <p className="text-[10px] text-white/35 leading-tight">{m.label}</p>
                      </div>
                    ))}
                  </div>

                  <ProductVisual type={s.visual} />
                </Reveal>
              </div>
            </div>

            {idx < SOLUTIONS.length - 1 && (
              <div className="divider-glow mx-auto max-w-7xl mt-24 md:mt-32" />
            )}
          </section>
        );
      })}

      {/* ══ INTEGRATIONS ═══════════════════════════════════════════════════════ */}
      <section className="py-24 section-alt relative">
        <div className="divider-glow absolute top-0 inset-x-0" aria-hidden="true" />
        <div className="divider-glow absolute bottom-0 inset-x-0" aria-hidden="true" />
        <div className="mx-auto max-w-7xl px-5 md:px-10 text-center">
          <Reveal>
            <p className="eyebrow mb-4">Integrations</p>
            <h2 className="display-md text-white mb-4">
              Works with your<br />
              <span className="gradient-text">existing POS.</span>
            </h2>
            <p className="text-base text-white/45 max-w-lg mx-auto mb-12">
              Payli integrates natively with the world&apos;s leading POS systems. Go live in days, not months — zero migration required.
            </p>
            <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
              {INTEGRATIONS.map((name, i) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, scale: 0.92 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  whileHover={{ scale: 1.05 }}
                  className="glass-card px-5 py-2.5 rounded-xl text-sm font-[600] text-white/50 hover:text-white/85 transition-colors"
                >
                  {name}
                </motion.div>
              ))}
            </div>
            <p className="text-sm text-white/25 mt-8">
              Don&apos;t see your POS? <Link href="/about" className="text-mint hover:underline">Talk to us</Link> — we likely support it or can connect it.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ══ CTA ════════════════════════════════════════════════════════════════ */}
      <section className="py-28 md:py-36 relative overflow-hidden">
        <div className="blob absolute w-[800px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20"
          style={{ background: "radial-gradient(ellipse, rgba(26,217,173,0.08) 0%, transparent 65%)" }}
          aria-hidden="true" />
        <div className="relative mx-auto max-w-3xl px-5 md:px-10">
          <Reveal>
            <div
              className="glass-card rounded-3xl p-10 md:p-14 text-center"
              style={{ border: "1px solid rgba(26,217,173,0.15)" }}
            >
              <div
                className="w-16 h-16 rounded-3xl mx-auto mb-6 flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, rgba(26,217,173,0.2), rgba(19,106,111,0.1))", border: "1px solid rgba(26,217,173,0.2)" }}
              >
                <ChevronRight size={28} strokeWidth={2} style={{ color: "#1AD9AD" }} />
              </div>
              <h2 className="display-md text-white mb-4">
                Not sure which<br />
                <span className="gradient-text">solution fits?</span>
              </h2>
              <p className="text-base text-white/50 max-w-md mx-auto mb-8">
                Book a 20-minute walkthrough with our team. We&apos;ll match the right product to your venue type and volume.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/about" className="btn-primary text-sm px-8 py-3.5 rounded-2xl gap-2">
                  Book a Demo
                  <ArrowRight size={15} />
                </Link>
                <Link href="/" className="btn-ghost text-sm px-8 py-3.5 rounded-2xl">
                  Back to Home
                </Link>
              </div>
              <p className="text-xs text-white/20 mt-6">No commitment · Setup in as fast as 24 hours</p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
