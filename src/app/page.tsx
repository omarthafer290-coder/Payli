"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight, QrCode, UtensilsCrossed, CreditCard, CheckCircle2,
  Clock, TrendingUp, Users, Zap, Shield, BarChart3, ChevronRight,
  Star, Timer, Sparkles,
} from "lucide-react";
import PhoneMockup from "@/components/PhoneMockup";

/* ─── Fade-up scroll reveal ──────────────────────────────────────────────── */
function Reveal({
  children,
  delay = 0,
  className = "",
  y = 28,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-72px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.58, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Count-up number ─────────────────────────────────────────────────────── */
function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1600;
    const tick = (now: number) => {
      const p = Math.min((now - start) / dur, 1);
      const e = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(e * to));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, to]);

  return (
    <span ref={ref}>
      {val}{suffix}
    </span>
  );
}

/* ─── Data ────────────────────────────────────────────────────────────────── */
const HOW_IT_WORKS = [
  {
    num: "01", icon: QrCode,
    title: "Scan the QR",
    desc: "Every table has a unique QR code. Guests scan with their phone camera — no app download needed.",
  },
  {
    num: "02", icon: UtensilsCrossed,
    title: "Browse & Order",
    desc: "A rich digital menu loads instantly. Guests browse photos, customise orders, and submit directly.",
  },
  {
    num: "03", icon: CreditCard,
    title: "Pay Instantly",
    desc: "Split however they like, tip, and pay with Apple Pay, Google Pay, or any card. Done in seconds.",
  },
  {
    num: "04", icon: CheckCircle2,
    title: "Table Auto-Closes",
    desc: "Your POS receives the payment and closes the table automatically. Staff are freed instantly.",
  },
];

const VALUE_PROPS = [
  {
    icon: Timer,
    heading: "15 minutes back.",
    subheading: "Per table. Every turn.",
    body: "The average restaurant loses 15 minutes of table time per cover waiting for the bill — not during the meal. Payli closes that gap permanently, turning end-of-meal friction into immediate turnover.",
    metric: "15 min",
    metricLabel: "saved per table cover",
  },
  {
    icon: TrendingUp,
    heading: "More revenue.",
    subheading: "Without a single extra seat.",
    body: "Faster table turns mean more covers per shift. During peak hours, recovering 15 minutes per table can mean 2–3 extra turns. That's revenue you already had — Payli just unlocks it.",
    metric: "+31%",
    metricLabel: "revenue per peak service",
  },
  {
    icon: Star,
    heading: "Guests leave impressed.",
    subheading: "Not waiting for a card machine.",
    body: "Modern diners expect a seamless finish to a great meal. Payli gives them control — they pay when ready, split how they want, and walk out feeling valued. 92% give it a 5-star ease-of-use rating.",
    metric: "4.8★",
    metricLabel: "average guest rating",
  },
];

const STATS = [
  { value: 89, suffix: "%", label: "of guests prefer QR-based payments", source: "PYMNTS 2024" },
  { value: 78, suffix: "%", label: "faster table turnover reported by operators", source: "Payli data" },
  { value: 92, suffix: "%", label: "ease-of-use satisfaction from first-time guests", source: "Internal survey" },
];

const FEATURES = [
  {
    icon: CreditCard,
    title: "Pay at Table",
    desc: "Instant bill payment with auto POS sync. No staff needed at close.",
    href: "/solutions#pay-at-table",
    tag: "Most popular",
    color: "from-mint/15 to-teal/5",
  },
  {
    icon: UtensilsCrossed,
    title: "Order & Pay",
    desc: "Full table-side ordering direct from the QR. Fewer errors, faster service.",
    href: "/solutions#order-and-pay",
    tag: null,
    color: "from-teal/15 to-mid/5",
  },
  {
    icon: BarChart3,
    title: "Digital Menu",
    desc: "Branded visual menus with smart upselling and real-time control.",
    href: "/solutions#digital-menu",
    tag: null,
    color: "from-mid/15 to-deep/5",
  },
];

const POS_LOGOS = ["Foodics", "Lightspeed", "Toast", "Square", "Oracle", "Simphony", "TouchBistro", "Revel", "Foodics", "Lightspeed", "Toast", "Square", "Oracle", "Simphony", "TouchBistro", "Revel"];

const TRUST_BADGES = [
  { icon: Shield, label: "PCI DSS Compliant" },
  { icon: Zap,    label: "99.9% Uptime SLA"  },
  { icon: Clock,  label: "24/7 Live Support"  },
  { icon: Users,  label: "500+ Restaurants"   },
];

/* ─── Page ─────────────────────────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <>
      {/* ══ HERO ═══════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-dvh flex flex-col justify-center overflow-hidden pt-20 pb-16">
        {/* Background mesh */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div
            className="blob w-[800px] h-[800px] -top-56 -left-56 animate-blob opacity-40"
            style={{ background: "radial-gradient(circle, rgba(26,217,173,0.09) 0%, transparent 65%)" }}
          />
          <div
            className="blob w-[600px] h-[600px] top-1/3 -right-32 animate-blob opacity-35"
            style={{ background: "radial-gradient(circle, rgba(19,106,111,0.12) 0%, transparent 65%)", animationDelay: "4s" }}
          />
          <div
            className="blob w-[500px] h-[500px] -bottom-20 left-1/4 animate-blob opacity-25"
            style={{ background: "radial-gradient(circle, rgba(11,73,82,0.15) 0%, transparent 65%)", animationDelay: "8s" }}
          />
          {/* Subtle grid */}
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage: "linear-gradient(rgba(26,217,173,1) 1px, transparent 1px), linear-gradient(90deg, rgba(26,217,173,1) 1px, transparent 1px)",
              backgroundSize: "72px 72px",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 md:px-10 w-full">
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 xl:gap-20 items-center">

            {/* ── Left copy ── */}
            <div className="max-w-xl">
              {/* Eyebrow badge */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8"
              >
                <Sparkles size={12} style={{ color: "#1AD9AD" }} />
                <span className="text-xs font-[600] text-white/60">QR-powered payments for restaurants</span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.07 }}
                className="display-xl text-white mb-6"
              >
                The bill<br />
                <span className="gradient-text">without</span><br />
                the wait.
              </motion.h1>

              {/* Sub */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.16 }}
                className="text-lg text-white/50 leading-[1.7] mb-10 max-w-[420px]"
              >
                Payli gives your restaurant 15 minutes back per table — every turn. Guests scan, pay, and leave. Your POS closes automatically. No app, no friction.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.24 }}
                className="flex flex-wrap gap-3.5 mb-10"
              >
                <Link href="/about" className="btn-primary text-sm px-7 py-3.5 rounded-2xl gap-2">
                  Book a Demo
                  <ArrowRight size={15} />
                </Link>
                <Link
                  href="#how-it-works"
                  className="btn-ghost text-sm px-7 py-3.5 rounded-2xl gap-2"
                >
                  See How It Works
                  <ChevronRight size={15} />
                </Link>
              </motion.div>

              {/* Social proof */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45 }}
                className="flex items-center gap-5"
              >
                {/* Avatars */}
                <div className="flex -space-x-2.5">
                  {["#2d7a5e","#1e5c6b","#2e4d5a","#1a6b5e"].map((bg, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-[800] text-white border-2"
                      style={{ background: bg, borderColor: "#020c10" }}
                    >
                      {["A","R","S","M"][i]}
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-[13px] text-white/45">
                    Trusted by <span className="text-white font-[600]">500+</span> restaurants in the GCC
                  </p>
                  <div className="flex items-center gap-0.5 mt-0.5">
                    {[...Array(5)].map((_,i) => (
                      <Star key={i} size={9} fill="#1AD9AD" style={{ color: "#1AD9AD" }} />
                    ))}
                    <span className="text-[10px] text-white/35 ml-1">4.9 avg rating</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* ── Right mockup ── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.12, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex justify-center lg:justify-end"
            >
              <PhoneMockup />
            </motion.div>
          </div>
        </div>

        {/* Bottom fade */}
        <div
          className="absolute bottom-0 inset-x-0 h-24 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, transparent, #020c10)" }}
          aria-hidden="true"
        />
      </section>

      {/* ══ PROOF BAR ══════════════════════════════════════════════════════════ */}
      <div className="relative overflow-hidden border-y border-white/[0.05] py-4 bg-white/[0.015]">
        <div className="flex gap-0 whitespace-nowrap">
          <div className="ticker-track flex gap-0 shrink-0">
            {POS_LOGOS.map((name, i) => (
              <span
                key={i}
                className="inline-flex items-center px-8 text-sm font-[600] text-white/20 tracking-widest uppercase"
              >
                {name}
                <span className="mx-8 text-white/10">·</span>
              </span>
            ))}
          </div>
        </div>
        <div className="absolute inset-y-0 left-0 w-24 pointer-events-none z-10" style={{ background: "linear-gradient(to right, #020c10, transparent)" }} aria-hidden="true" />
        <div className="absolute inset-y-0 right-0 w-24 pointer-events-none z-10" style={{ background: "linear-gradient(to left, #020c10, transparent)" }} aria-hidden="true" />
      </div>

      {/* ══ THE PROBLEM ════════════════════════════════════════════════════════ */}
      <section className="relative py-28 md:py-36 overflow-hidden">
        <div className="blob absolute w-[500px] h-[400px] top-0 right-0 animate-blob opacity-25"
          style={{ background: "radial-gradient(circle, rgba(26,217,173,0.07) 0%, transparent 70%)" }}
          aria-hidden="true" />

        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left */}
            <Reveal>
              <p className="eyebrow mb-4">The problem</p>
              <h2 className="display-lg text-white mb-6">
                You&apos;re losing revenue<br />
                <span className="gradient-text">after every meal.</span>
              </h2>
              <p className="text-lg text-white/50 leading-relaxed mb-8 max-w-md">
                The food was perfect. The service was warm. But then came the wait — 15 minutes of dead table time before the next cover could sit down.
              </p>
              <p className="text-lg text-white/50 leading-relaxed max-w-md">
                During peak hours across a 40-cover restaurant, that&apos;s over 10 hours of lost capacity per service. Payli recovers it.
              </p>
            </Reveal>

            {/* Right: comparison cards */}
            <div className="grid gap-4">
              {/* Without */}
              <Reveal delay={0.1}>
                <div
                  className="rounded-3xl p-6"
                  style={{ background: "rgba(255,60,60,0.05)", border: "1px solid rgba(255,80,80,0.12)" }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: "rgba(255,80,80,0.12)" }}>
                      <Clock size={16} style={{ color: "rgba(255,120,120,0.9)" }} />
                    </div>
                    <span className="text-sm font-[700] text-white/50 uppercase tracking-widest">Without Payli</span>
                  </div>
                  <div className="space-y-2">
                    {[
                      ["Meal finished", "00:00"],
                      ["Wave to get attention", "+3 min"],
                      ["Bill arrives", "+8 min"],
                      ["Card machine back & forth", "+12 min"],
                      ["Table finally clear", "+15 min"],
                    ].map(([label, time], i) => (
                      <div key={i} className="flex justify-between items-center">
                        <span className="text-sm text-white/45">{label}</span>
                        <span className={`text-xs font-mono font-[700] ${i > 0 ? "text-red-400/70" : "text-white/40"}`}>{time}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-white/5">
                    <p className="text-sm font-[700] text-red-400/70">15 minutes of revenue lost. Every table. Every turn.</p>
                  </div>
                </div>
              </Reveal>

              {/* With */}
              <Reveal delay={0.18}>
                <div
                  className="rounded-3xl p-6"
                  style={{ background: "rgba(26,217,173,0.05)", border: "1px solid rgba(26,217,173,0.15)" }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: "rgba(26,217,173,0.15)" }}>
                      <Zap size={16} style={{ color: "#1AD9AD" }} />
                    </div>
                    <span className="text-sm font-[700] uppercase tracking-widest" style={{ color: "#1AD9AD" }}>With Payli</span>
                  </div>
                  <div className="space-y-2">
                    {[
                      ["Meal finished", "00:00"],
                      ["Guest scans QR & pays", "+40 sec"],
                      ["POS auto-closes table", "+45 sec"],
                      ["Table ready for next cover", "+2 min"],
                    ].map(([label, time], i) => (
                      <div key={i} className="flex justify-between items-center">
                        <span className="text-sm text-white/55">{label}</span>
                        <span className={`text-xs font-mono font-[700] ${i > 0 ? "" : "text-white/40"}`} style={i > 0 ? { color: "#1AD9AD" } : {}}>{time}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-white/5">
                    <p className="text-sm font-[700]" style={{ color: "#1AD9AD" }}>Table closed in under 2 minutes. Every time.</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ══ HOW IT WORKS ═══════════════════════════════════════════════════════ */}
      <section id="how-it-works" className="relative py-28 md:py-36 section-alt scroll-mt-20">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <Reveal className="text-center mb-16 md:mb-20">
            <p className="eyebrow mb-4">How it works</p>
            <h2 className="display-lg text-white mb-4">
              Four steps. Zero friction.
            </h2>
            <p className="text-lg text-white/45 max-w-lg mx-auto">
              From scan to table-close in under two minutes — for every guest, every time.
            </p>
          </Reveal>

          {/* Steps grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 relative">
            {/* Connecting line (desktop) */}
            <div
              className="absolute hidden lg:block top-14 left-[12.5%] right-[12.5%] h-px pointer-events-none"
              style={{ background: "linear-gradient(90deg, transparent, rgba(26,217,173,0.25) 20%, rgba(26,217,173,0.25) 80%, transparent)" }}
              aria-hidden="true"
            />

            {HOW_IT_WORKS.map((step, i) => {
              const Icon = step.icon;
              return (
                <Reveal key={step.num} delay={i * 0.09}>
                  <motion.div
                    whileHover={{ y: -6, scale: 1.02 }}
                    transition={{ duration: 0.25, ease: [0.34, 1.56, 0.64, 1] }}
                    className="glass-card rounded-3xl p-7 h-full flex flex-col relative group"
                  >
                    {/* Step number */}
                    <span className="absolute top-5 right-6 text-5xl font-[900] leading-none select-none"
                      style={{ color: "rgba(26,217,173,0.06)" }}
                    >
                      {step.num}
                    </span>

                    {/* Icon */}
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                      style={{
                        background: "linear-gradient(135deg, rgba(26,217,173,0.15), rgba(19,106,111,0.08))",
                        border: "1px solid rgba(26,217,173,0.18)",
                      }}
                    >
                      <Icon size={22} strokeWidth={1.75} style={{ color: "#1AD9AD" }} />
                    </div>

                    <h3 className="text-base font-[700] text-white mb-2 tracking-tight">{step.title}</h3>
                    <p className="text-sm text-white/45 leading-relaxed flex-1">{step.desc}</p>

                    {/* Connector arrow */}
                    {i < HOW_IT_WORKS.length - 1 && (
                      <div className="hidden lg:flex absolute -right-2.5 top-12 z-10 w-5 h-5 items-center justify-center rounded-full glass"
                        style={{ border: "1px solid rgba(26,217,173,0.15)" }}
                      >
                        <ChevronRight size={11} style={{ color: "rgba(26,217,173,0.5)" }} />
                      </div>
                    )}
                  </motion.div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ VALUE PROPS ════════════════════════════════════════════════════════ */}
      <section className="py-28 md:py-36 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 md:px-10 space-y-24 md:space-y-32">
          {VALUE_PROPS.map((vp, i) => {
            const Icon = vp.icon;
            const isEven = i % 2 === 0;
            return (
              <div
                key={vp.heading}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${!isEven ? "lg:grid-flow-dense" : ""}`}
              >
                {/* Text */}
                <Reveal delay={0.05} className={!isEven ? "lg:col-start-2" : ""}>
                  <div
                    className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 mb-6 text-xs font-[600]"
                    style={{ background: "rgba(26,217,173,0.08)", color: "#1AD9AD", border: "1px solid rgba(26,217,173,0.15)" }}
                  >
                    <Icon size={12} />
                    Outcome {i + 1}
                  </div>
                  <h2 className="display-md text-white mb-2">{vp.heading}</h2>
                  <p className="text-xl font-[600] mb-5" style={{ color: "#1AD9AD" }}>{vp.subheading}</p>
                  <p className="text-base text-white/50 leading-relaxed max-w-md mb-8">{vp.body}</p>
                  <Link href="/solutions" className="btn-outline-mint text-sm px-6 py-3 rounded-xl gap-2">
                    Learn more
                    <ArrowRight size={14} />
                  </Link>
                </Reveal>

                {/* Metric card */}
                <Reveal delay={0.15} className={!isEven ? "lg:col-start-1 lg:row-start-1" : ""}>
                  <div
                    className="glass-card rounded-3xl p-10 text-center relative overflow-hidden"
                    style={{ minHeight: 260 }}
                  >
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(26,217,173,0.05) 0%, transparent 70%)" }}
                      aria-hidden="true"
                    />
                    <div
                      className="w-16 h-16 rounded-3xl mx-auto mb-6 flex items-center justify-center"
                      style={{ background: "linear-gradient(135deg, rgba(26,217,173,0.2), rgba(19,106,111,0.1))", border: "1px solid rgba(26,217,173,0.2)" }}
                    >
                      <Icon size={28} strokeWidth={1.6} style={{ color: "#1AD9AD" }} />
                    </div>
                    <div
                      className="text-6xl md:text-7xl font-[900] mb-3 tracking-tight"
                      style={{
                        background: "linear-gradient(125deg, #1AD9AD 0%, #25AA98 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      {vp.metric}
                    </div>
                    <p className="text-sm text-white/45 max-w-[220px] mx-auto leading-relaxed">{vp.metricLabel}</p>
                  </div>
                </Reveal>
              </div>
            );
          })}
        </div>
      </section>

      {/* ══ STATS ══════════════════════════════════════════════════════════════ */}
      <section className="relative py-24 md:py-28 section-alt overflow-hidden">
        <div className="divider-glow absolute top-0 inset-x-0" aria-hidden="true" />
        <div className="divider-glow absolute bottom-0 inset-x-0" aria-hidden="true" />
        <div className="blob absolute w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20"
          style={{ background: "radial-gradient(circle, rgba(26,217,173,0.08) 0%, transparent 70%)" }}
          aria-hidden="true" />

        <div className="relative mx-auto max-w-7xl px-5 md:px-10">
          <Reveal className="text-center mb-16">
            <p className="eyebrow mb-4">By the numbers</p>
            <h2 className="display-lg text-white">
              The data is clear.
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.1}>
                <div
                  className="glass-card rounded-3xl p-8 text-center"
                >
                  <div
                    className="text-6xl md:text-7xl font-[900] mb-4 tracking-tight tabular-nums"
                    style={{
                      background: "linear-gradient(125deg, #1AD9AD 0%, #25AA98 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    <CountUp to={s.value} suffix={s.suffix} />
                  </div>
                  <p className="text-base text-white/65 leading-snug mb-3 font-[500]">{s.label}</p>
                  <span className="text-xs text-white/25 font-[500]">Source: {s.source}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PRODUCT CARDS ══════════════════════════════════════════════════════ */}
      <section className="py-28 md:py-36 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <Reveal className="mb-16 md:mb-20">
            <p className="eyebrow mb-4">Our products</p>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <h2 className="display-lg text-white max-w-sm">
                Three ways to<br />
                <span className="gradient-text">win with Payli.</span>
              </h2>
              <Link href="/solutions" className="btn-outline-mint text-sm px-6 py-3 rounded-xl gap-2 self-start md:self-auto shrink-0">
                See all solutions
                <ArrowRight size={14} />
              </Link>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-5">
            {FEATURES.map((f, i) => {
              const Icon = f.icon;
              return (
                <Reveal key={f.title} delay={i * 0.1}>
                  <Link href={f.href} className="block group focus:outline-none focus-visible:ring-2 rounded-3xl" style={{ WebkitTapHighlightColor: "transparent" }}>
                    <div
                      className="glass-card rounded-3xl p-8 relative overflow-hidden h-full flex flex-col"
                      style={{ minHeight: 280 }}
                    >
                      {f.tag && (
                        <div
                          className="absolute top-5 right-5 text-[10px] font-[700] uppercase tracking-widest px-2.5 py-1 rounded-full"
                          style={{ background: "rgba(26,217,173,0.12)", color: "#1AD9AD", border: "1px solid rgba(26,217,173,0.2)" }}
                        >
                          {f.tag}
                        </div>
                      )}

                      {/* Icon */}
                      <div
                        className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br ${f.color} transition-all duration-300 group-hover:scale-110`}
                        style={{ border: "1px solid rgba(26,217,173,0.18)" }}
                      >
                        <Icon size={26} strokeWidth={1.6} style={{ color: "#1AD9AD" }} />
                      </div>

                      <h3 className="text-xl font-[700] text-white mb-3 tracking-tight">{f.title}</h3>
                      <p className="text-sm text-white/45 leading-relaxed flex-1">{f.desc}</p>

                      <div className="flex items-center gap-1.5 mt-6 text-sm font-[600]" style={{ color: "#1AD9AD" }}>
                        Explore
                        <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
                      </div>

                      {/* Hover glow overlay */}
                      <div
                        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                        style={{ background: "radial-gradient(ellipse at 35% 25%, rgba(26,217,173,0.05) 0%, transparent 65%)" }}
                        aria-hidden="true"
                      />
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ TRUST BAR ══════════════════════════════════════════════════════════ */}
      <section className="py-16 section-alt">
        <div className="divider-glow absolute top-0 inset-x-0" aria-hidden="true" />
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <Reveal>
            <div className="flex flex-wrap items-center justify-center md:justify-between gap-6 md:gap-4">
              {TRUST_BADGES.map((b) => {
                const Icon = b.icon;
                return (
                  <div key={b.label} className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: "rgba(26,217,173,0.1)", border: "1px solid rgba(26,217,173,0.15)" }}
                    >
                      <Icon size={16} strokeWidth={1.8} style={{ color: "#1AD9AD" }} />
                    </div>
                    <span className="text-sm font-[500] text-white/60">{b.label}</span>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══ FINAL CTA ══════════════════════════════════════════════════════════ */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        <div
          className="blob absolute w-[900px] h-[700px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30"
          style={{ background: "radial-gradient(ellipse, rgba(26,217,173,0.09) 0%, transparent 60%)" }}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-4xl px-5 md:px-10 text-center">
          <Reveal>
            <p className="eyebrow mb-6">Start today</p>
            <h2 className="display-xl text-white mb-6">
              Ready to stop<br />
              <span className="gradient-text">losing time?</span>
            </h2>
            <p className="text-xl text-white/45 leading-relaxed max-w-xl mx-auto mb-12">
              Join 500+ restaurants that already serve faster, earn more, and give guests an experience they remember.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/about" className="btn-primary text-base px-10 py-4 rounded-2xl gap-2">
                Book a Free Demo
                <ArrowRight size={17} />
              </Link>
              <Link href="/solutions" className="btn-ghost text-base px-10 py-4 rounded-2xl">
                Explore Products
              </Link>
            </div>
            <p className="text-sm text-white/25 mt-8">
              20-minute demo · No commitment · Live in as fast as 24 hours
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
