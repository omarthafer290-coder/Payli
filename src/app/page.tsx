"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  CreditCard,
  ChevronRight,
  Star,
  Timer,
  TrendingUp,
  Zap,
  Shield,
  Clock,
  Users,
  BarChart3,
  Sparkles,
} from "lucide-react";
import PhoneMockup from "@/components/PhoneMockup";
import HowItWorksSection from "@/components/HowItWorksSection";
import AddedValueSection from "@/components/AddedValueSection";
import SolutionsSection from "@/components/SolutionsSection";
import DashboardSection from "@/components/DashboardSection";

/* ─── Fade-up reveal ─────────────────────────────────────────────────────── */
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
  const inView = useInView(ref, { once: true, margin: "-64px" });
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

/* ─── Count-up ────────────────────────────────────────────────────────────── */
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
      const ease = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(ease * to));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, to]);

  return <span ref={ref}>{val}{suffix}</span>;
}

/* ─── Data ────────────────────────────────────────────────────────────────── */
const POS_LOGOS = [
  "Foodics", "Lightspeed", "Toast", "Square", "Oracle",
  "Simphony", "TouchBistro", "Revel", "Micros", "Aloha",
  "Foodics", "Lightspeed", "Toast", "Square", "Oracle",
  "Simphony", "TouchBistro", "Revel", "Micros", "Aloha",
];

const STATS = [
  { value: 89, suffix: "%", label: "of guests prefer QR-based payments", source: "PYMNTS 2024" },
  { value: 78, suffix: "%", label: "faster table turnover reported by operators", source: "Payli data" },
  { value: 92, suffix: "%", label: "ease-of-use satisfaction from first-time guests", source: "Internal survey" },
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

const TRUST_BADGES = [
  { icon: Shield, label: "PCI DSS Compliant" },
  { icon: Zap,    label: "99.9% Uptime SLA"  },
  { icon: Clock,  label: "24/7 Live Support"  },
  { icon: Users,  label: "500+ Restaurants"   },
];

/* ─── Hero ──────────────────────────────────────────────────────────────────── */
function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 80, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 80, damping: 30 });

  const phoneX = useTransform(springX, (v) => v * 0.35);
  const phoneY = useTransform(springY, (v) => v * 0.35);
  const blobX  = useTransform(springX, (v) => v * 0.15);
  const blobY  = useTransform(springY, (v) => v * 0.15);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const rect = heroRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(((e.clientX - rect.left) / rect.width - 0.5) * 40);
    mouseY.set(((e.clientY - rect.top) / rect.height - 0.5) * 40);
  }, [mouseX, mouseY]);

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0);
    mouseY.set(0);
  }, [mouseX, mouseY]);

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-dvh flex flex-col justify-center overflow-hidden pt-20 pb-16"
    >
      {/* Background mesh */}
      <motion.div
        style={{ x: blobX, y: blobY }}
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="blob w-[900px] h-[900px] -top-56 -left-64"
          style={{ background: "radial-gradient(circle, rgba(26,217,173,0.08) 0%, transparent 65%)" }}
        />
        <div
          className="blob w-[700px] h-[700px] top-1/3 -right-32"
          style={{ background: "radial-gradient(circle, rgba(19,106,111,0.1) 0%, transparent 65%)", animationDelay: "4s" }}
        />
        <div
          className="blob w-[500px] h-[500px] -bottom-20 left-1/3"
          style={{ background: "radial-gradient(circle, rgba(11,73,82,0.12) 0%, transparent 65%)", animationDelay: "8s" }}
        />
      </motion.div>

      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.022]"
        style={{
          backgroundImage: "linear-gradient(rgba(26,217,173,1) 1px, transparent 1px), linear-gradient(90deg, rgba(26,217,173,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 md:px-10 w-full">
        <div className="grid lg:grid-cols-[1fr_1.15fr] gap-12 xl:gap-24 items-center">

          {/* ── Left copy ── */}
          <div className="max-w-xl">
            {/* Eyebrow badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8"
            >
              <Sparkles size={11} style={{ color: "#1AD9AD" }} />
              <span className="text-xs font-[600] text-white/60">QR-powered payments for restaurants</span>
              <span className="flex items-center gap-1 text-[10px] font-[700] pl-1 border-l border-white/10" style={{ color: "#1AD9AD" }}>
                <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse inline-block" />
                Live
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.58, delay: 0.07 }}
              className="display-xl text-white mb-6"
            >
              The bill<br />
              <span className="gradient-text">with</span>
              <span className="text-white">out</span><br />
              the wait.
            </motion.h1>

            {/* Sub */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="text-lg text-white/50 leading-[1.75] mb-10 max-w-[420px]"
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
                  {Array.from({ length: 5 }).map((_,i) => (
                    <Star key={i} size={9} fill="#1AD9AD" style={{ color: "#1AD9AD" }} />
                  ))}
                  <span className="text-[10px] text-white/35 ml-1">4.9 avg rating</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ── Right mockup with cursor parallax ── */}
          <motion.div
            style={{ x: phoneX, y: phoneY }}
            initial={{ opacity: 0, scale: 0.88, y: 32 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex justify-center lg:justify-end"
          >
            <PhoneMockup />
          </motion.div>
        </div>
      </div>

      {/* Floating info cards (desktop) */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="hidden md:flex absolute bottom-10 left-1/2 -translate-x-1/2 gap-4"
        aria-hidden="true"
      >
        {[
          { val: "10+", label: "Clients in Jordan" },
          { val: "15–20%", label: "Revenue boost" },
          { val: "Zero", label: "Chargebacks" },
        ].map((chip) => (
          <div
            key={chip.val}
            className="glass rounded-2xl px-5 py-3 text-center"
            style={{ border: "1px solid rgba(26,217,173,0.12)" }}
          >
            <div className="text-base font-[800] text-white">{chip.val}</div>
            <div className="text-[10px] text-white/35 mt-0.5">{chip.label}</div>
          </div>
        ))}
      </motion.div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 inset-x-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, #020c10)" }}
        aria-hidden="true"
      />
    </section>
  );
}

/* ─── POS Ticker ─────────────────────────────────────────────────────────── */
function ProofBar() {
  return (
    <div className="relative overflow-hidden border-y border-white/[0.05] py-4 bg-white/[0.015]">
      <div className="flex gap-0 whitespace-nowrap">
        <div className="ticker-track flex gap-0 shrink-0">
          {POS_LOGOS.map((name, i) => (
            <span
              key={i}
              className="inline-flex items-center px-8 text-[11px] font-[700] text-white/18 tracking-widest uppercase"
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
  );
}

/* ─── Problem → Solution ─────────────────────────────────────────────────── */
function ProblemSection() {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden">
      <div
        className="blob absolute w-[600px] h-[500px] top-0 right-0 opacity-20"
        style={{ background: "radial-gradient(circle, rgba(26,217,173,0.06) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-5 md:px-10">
        {/* Section header */}
        <Reveal className="text-center mb-16">
          <p className="eyebrow mb-4">Waiting to pay?</p>
          <h2 className="display-lg text-white mb-4">
            Traditional checkout creates a<br />
            <span className="gradient-text">15-minute bottleneck.</span>
          </h2>
          <p className="text-lg text-white/45 max-w-2xl mx-auto leading-relaxed">
            Guests wait for the check, servers wait for the card, and the table remains occupied long after the experience is over. Payli removes that dead time permanently.
          </p>
        </Reveal>

        {/* Side by side comparison */}
        <div className="grid lg:grid-cols-2 gap-6 mb-20">
          {/* Without Payli */}
          <Reveal delay={0.05}>
            <div
              className="rounded-3xl p-7 h-full"
              style={{ background: "rgba(255,60,60,0.04)", border: "1px solid rgba(255,80,80,0.1)" }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "rgba(255,80,80,0.1)" }}>
                  <Clock size={17} style={{ color: "rgba(255,120,120,0.85)" }} />
                </div>
                <span className="text-sm font-[700] text-white/50 uppercase tracking-widest">Without Payli</span>
              </div>
              <div className="space-y-3">
                {[
                  ["Meal finished", "00:00", false],
                  ["Wave to get attention", "+3 min", true],
                  ["Bill arrives on paper", "+8 min", true],
                  ["Card machine brought over", "+12 min", true],
                  ["Payment processed, receipt printed", "+15 min", true],
                  ["Table finally available", "+17 min", true],
                ].map(([label, time, isLost]) => (
                  <div key={String(label)} className="flex items-center justify-between">
                    <span className="text-sm text-white/45">{label}</span>
                    <span className={`text-xs font-mono font-[700] ${isLost ? "text-red-400/65" : "text-white/35"}`}>{time}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-5 border-t border-white/[0.06]">
                <p className="text-sm font-[700] text-red-400/70">17 minutes of dead table time. Every cover. Every shift.</p>
              </div>
            </div>
          </Reveal>

          {/* With Payli */}
          <Reveal delay={0.13}>
            <div
              className="rounded-3xl p-7 h-full"
              style={{ background: "rgba(26,217,173,0.04)", border: "1px solid rgba(26,217,173,0.14)" }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "rgba(26,217,173,0.12)" }}>
                  <Zap size={17} style={{ color: "#1AD9AD" }} />
                </div>
                <span className="text-sm font-[700] uppercase tracking-widest" style={{ color: "#1AD9AD" }}>With Payli</span>
              </div>
              <div className="space-y-3">
                {[
                  ["Meal finished", "00:00", false],
                  ["Guest scans QR code at table", "+10 sec", true],
                  ["Splits bill with friends", "+30 sec", true],
                  ["Pays with Apple Pay / Card", "+45 sec", true],
                  ["POS auto-closes the table", "+50 sec", true],
                  ["Table ready for next guests", "+2 min", true],
                ].map(([label, time, isGood]) => (
                  <div key={String(label)} className="flex items-center justify-between">
                    <span className="text-sm text-white/55">{label}</span>
                    <span className={`text-xs font-mono font-[700]`} style={isGood ? { color: "#1AD9AD" } : { color: "rgba(255,255,255,0.35)" }}>{time}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-5 border-t border-white/[0.06]">
                <p className="text-sm font-[700]" style={{ color: "#1AD9AD" }}>Table closed in under 2 minutes. Every time. Zero effort.</p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Value props */}
        <div className="space-y-20 md:space-y-28">
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
                    <p className="text-sm text-white/40 max-w-[220px] mx-auto leading-relaxed">{vp.metricLabel}</p>
                  </div>
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─── Stats ───────────────────────────────────────────────────────────────── */
function StatsSection() {
  return (
    <section className="relative py-24 md:py-28 section-alt overflow-hidden">
      <div className="divider-glow absolute top-0 inset-x-0" aria-hidden="true" />
      <div className="divider-glow absolute bottom-0 inset-x-0" aria-hidden="true" />
      <div
        className="blob absolute w-[700px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-15"
        style={{ background: "radial-gradient(circle, rgba(26,217,173,0.09) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 md:px-10">
        <Reveal className="text-center mb-14">
          <p className="eyebrow mb-4">By the numbers</p>
          <h2 className="display-lg text-white">The data is clear.</h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-5">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1}>
              <div className="glass-card rounded-3xl p-8 text-center">
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
  );
}

/* ─── Integration Strip ──────────────────────────────────────────────────── */
function IntegrationSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal className="text-center mb-10">
          <p className="eyebrow mb-3">Integrations</p>
          <h2 className="display-md text-white mb-3">
            Works with your <span className="gradient-text">existing POS.</span>
          </h2>
          <p className="text-base text-white/40 max-w-md mx-auto">
            Payli integrates with leading POS systems in under 24 hours — no hardware swap, no workflow disruption.
          </p>
        </Reveal>

        {/* POS logos grid */}
        <Reveal delay={0.1}>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {["Foodics", "Lightspeed", "Toast", "Square", "Oracle Simphony", "TouchBistro", "Revel", "Micros"].map((pos) => (
              <div
                key={pos}
                className="px-5 py-3 rounded-2xl text-sm font-[700] text-white/30 tracking-wide uppercase"
                style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                {pos}
              </div>
            ))}
            <div
              className="px-5 py-3 rounded-2xl text-sm font-[600]"
              style={{ background: "rgba(26,217,173,0.06)", border: "1px solid rgba(26,217,173,0.12)", color: "rgba(26,217,173,0.7)" }}
            >
              + many more
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─── Trust Bar ──────────────────────────────────────────────────────────── */
function TrustBar() {
  return (
    <section className="relative py-16 section-alt overflow-hidden">
      <div className="divider-glow absolute top-0 inset-x-0" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal>
          <div className="flex flex-wrap items-center justify-center md:justify-between gap-6">
            {TRUST_BADGES.map((b) => {
              const Icon = b.icon;
              return (
                <div key={b.label} className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: "rgba(26,217,173,0.09)", border: "1px solid rgba(26,217,173,0.14)" }}
                  >
                    <Icon size={16} strokeWidth={1.8} style={{ color: "#1AD9AD" }} />
                  </div>
                  <span className="text-sm font-[500] text-white/55">{b.label}</span>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─── Final CTA ──────────────────────────────────────────────────────────── */
function FinalCTASection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-32 md:py-44 overflow-hidden">
      {/* Central glow */}
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.25, 0.4, 0.25] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="blob absolute w-[1000px] h-[700px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ background: "radial-gradient(ellipse, rgba(26,217,173,0.09) 0%, transparent 60%)" }}
        aria-hidden="true"
      />

      {/* Decorative ring */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ border: "1px solid rgba(26,217,173,0.05)" }}
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full pointer-events-none"
        style={{ border: "1px solid rgba(26,217,173,0.03)" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-4xl px-5 md:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="eyebrow mb-6">Start today</p>
          <h2 className="display-xl text-white mb-6">
            Turn every table faster.<br />
            <span className="gradient-text">Increase revenue instantly.</span>
          </h2>
          <p className="text-xl text-white/45 leading-relaxed max-w-xl mx-auto mb-12">
            Join 500+ restaurants that already serve faster, earn more, and give guests an experience they remember.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/about"
              className="btn-primary text-base px-10 py-4 rounded-2xl gap-2 relative overflow-hidden"
            >
              Book a Free Demo
              <ArrowRight size={17} />
            </Link>
            <Link
              href="/solutions"
              className="btn-ghost text-base px-10 py-4 rounded-2xl"
            >
              Explore Products
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-5 text-sm text-white/25">
            <span className="flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-current" />
              20-minute demo
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-current" />
              No commitment
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-current" />
              Live in as fast as 24 hours
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Page ──────────────────────────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProofBar />
      <ProblemSection />
      <HowItWorksSection />
      <StatsSection />
      <AddedValueSection />
      <SolutionsSection />
      <DashboardSection />
      <IntegrationSection />
      <TrustBar />
      <FinalCTASection />
    </>
  );
}
