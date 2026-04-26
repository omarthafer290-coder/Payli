"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  QrCode,
  UtensilsCrossed,
  CreditCard,
  CheckCircle2,
  Clock,
  TrendingUp,
  Users,
  ArrowRight,
  Zap,
  Star,
  ChevronRight,
  BarChart3,
  Smartphone,
  Shield,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import Section from "@/components/Section";

/* ------------------------------------------------------------------ */
/*  Data                                                                */
/* ------------------------------------------------------------------ */

const steps = [
  {
    icon: QrCode,
    title: "Scan QR",
    desc: "Guest scans the table QR — no app needed.",
    color: "from-mint/20 to-teal/10",
    num: "01",
  },
  {
    icon: UtensilsCrossed,
    title: "View Menu",
    desc: "Full digital menu loads instantly on their phone.",
    color: "from-teal/20 to-mid/10",
    num: "02",
  },
  {
    icon: CreditCard,
    title: "Order & Pay",
    desc: "Order, split, and pay — seamlessly in one flow.",
    color: "from-mid/20 to-deep/10",
    num: "03",
  },
  {
    icon: CheckCircle2,
    title: "Done",
    desc: "Table closes automatically. Zero wait, full satisfaction.",
    color: "from-deep/20 to-dark/10",
    num: "04",
  },
];

const values = [
  {
    icon: Clock,
    title: "No Waiting for the Bill",
    desc: "Guests pay whenever they're ready. No flagging staff, no delays.",
  },
  {
    icon: TrendingUp,
    title: "Faster Table Turnover",
    desc: "Serve more covers per shift without adding pressure to your team.",
  },
  {
    icon: Users,
    title: "Better Guest Experience",
    desc: "A seamless, modern experience guests actually enjoy and remember.",
  },
];

const stats = [
  { value: "89%", label: "of guests prefer QR payments", icon: Smartphone },
  { value: "78%", label: "faster table turnover", icon: TrendingUp },
  { value: "92%", label: "ease-of-use satisfaction", icon: Star },
];

const features = [
  {
    icon: CreditCard,
    title: "Pay at Table",
    desc: "Guests split and pay instantly from their phone. POS syncs in real-time.",
    href: "/solutions#pay-at-table",
    tag: "Most Popular",
  },
  {
    icon: UtensilsCrossed,
    title: "Order & Pay",
    desc: "Full QR ordering without staff. Fewer errors, faster service.",
    href: "/solutions#order-and-pay",
    tag: null,
  },
  {
    icon: BarChart3,
    title: "Digital Menu",
    desc: "Branded, visual menus with real-time upselling and full control.",
    href: "/solutions#digital-menu",
    tag: null,
  },
];

/* ------------------------------------------------------------------ */
/*  Hero floating card mockup                                           */
/* ------------------------------------------------------------------ */

function HeroMockup() {
  return (
    <div className="relative w-full max-w-xs mx-auto">
      {/* Phone frame */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10"
      >
        <div
          className="glass-card-strong rounded-3xl p-5 shadow-2xl"
          style={{
            background: "rgba(10, 45, 53, 0.85)",
            border: "1px solid rgba(26,217,173,0.2)",
            boxShadow: "0 40px 80px rgba(0,0,0,0.5), 0 0 60px rgba(26,217,173,0.06)",
          }}
        >
          {/* Mock top bar */}
          <div className="flex items-center justify-between mb-5">
            <span className="text-xs text-white/40 font-mono">TABLE 07</span>
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-mint/15 text-mint">Active</span>
          </div>

          {/* QR placeholder */}
          <div className="flex items-center justify-center w-full aspect-square max-h-44 rounded-2xl bg-white/5 border border-white/8 mb-5">
            <QrCode size={80} className="text-mint/60" strokeWidth={1} />
          </div>

          {/* Bill summary */}
          <div className="space-y-2 mb-5">
            {["Wagyu Burger", "Truffle Fries", "Sparkling Water"].map((item, i) => (
              <div key={item} className="flex justify-between text-xs">
                <span className="text-white/60">{item}</span>
                <span className="text-white/80 font-medium">
                  AED {[68, 32, 14][i]}
                </span>
              </div>
            ))}
            <div className="border-t border-white/8 pt-2 flex justify-between text-sm font-semibold">
              <span className="text-white/80">Total</span>
              <span className="text-mint">AED 114</span>
            </div>
          </div>

          {/* Pay button */}
          <div className="btn-primary w-full py-3 rounded-2xl text-sm text-center font-semibold">
            Pay Now
          </div>

          {/* Split */}
          <p className="text-center text-xs text-white/30 mt-3">Split with friends →</p>
        </div>
      </motion.div>

      {/* Glow rings */}
      <div
        className="absolute inset-0 rounded-3xl animate-glow"
        style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(26,217,173,0.12) 0%, transparent 70%)" }}
        aria-hidden="true"
      />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                                */
/* ------------------------------------------------------------------ */

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-dvh flex items-center overflow-hidden pt-24 pb-16">
        {/* Background blobs */}
        <div
          className="ambient-blob w-[600px] h-[600px] -top-32 -left-32 animate-glow"
          style={{ background: "radial-gradient(ellipse, rgba(26,217,173,0.07) 0%, transparent 70%)" }}
          aria-hidden="true"
        />
        <div
          className="ambient-blob w-[500px] h-[500px] top-1/2 -right-24 animate-glow"
          style={{
            background: "radial-gradient(ellipse, rgba(19,106,111,0.1) 0%, transparent 70%)",
            animationDelay: "2s",
          }}
          aria-hidden="true"
        />
        <div
          className="ambient-blob w-96 h-96 bottom-0 left-1/3 animate-glow"
          style={{
            background: "radial-gradient(ellipse, rgba(11,73,82,0.15) 0%, transparent 70%)",
            animationDelay: "4s",
          }}
          aria-hidden="true"
        />

        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: text */}
            <div>
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 text-xs font-medium text-mint/80"
              >
                <Zap size={12} className="text-mint" />
                QR-powered payments for restaurants
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.08] tracking-tight mb-6"
              >
                The bill
                <br />
                <span className="gradient-text">without</span>
                <br />
                the wait.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-white/55 leading-relaxed mb-10 max-w-md"
              >
                Payli turns any table into a self-service payment experience. Guests scan, order, split, and pay — instantly. No app. No waiting.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <Link href="/solutions" className="btn-primary px-8 py-4 rounded-2xl text-base font-semibold inline-flex items-center gap-2">
                  Get Started
                  <ArrowRight size={18} />
                </Link>
                <Link href="/about" className="btn-outline px-8 py-4 rounded-2xl text-base font-semibold">
                  Book a Demo
                </Link>
              </motion.div>

              {/* Social proof mini */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex items-center gap-6 mt-12"
              >
                <div className="flex -space-x-2">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-darkest flex items-center justify-center text-xs font-bold"
                      style={{
                        background: `linear-gradient(135deg, hsl(${165 + i * 12}, 60%, ${35 + i * 6}%), hsl(${175 + i * 8}, 50%, ${25 + i * 5}%))`,
                      }}
                    >
                      {["A", "R", "S", "M"][i]}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-white/45">
                  <span className="text-white/80 font-semibold">500+</span> restaurants already using Payli
                </p>
              </motion.div>
            </div>

            {/* Right: mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex justify-center lg:justify-end"
            >
              <HeroMockup />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <Section id="how-it-works" className="relative">
        <div
          className="ambient-blob w-[500px] h-[400px] top-0 right-0 opacity-50"
          style={{ background: "radial-gradient(ellipse, rgba(19,106,111,0.08) 0%, transparent 70%)" }}
          aria-hidden="true"
        />

        <AnimatedSection className="text-center mb-16">
          <span className="text-xs uppercase tracking-widest font-semibold text-mint/60 mb-3 block">
            Simple Process
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            How it <span className="gradient-text">works</span>
          </h2>
          <p className="text-lg text-white/50 max-w-xl mx-auto">
            Four steps. No friction. Your guests experience a bill that simply disappears.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <AnimatedSection key={step.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
                  className="group relative glass rounded-3xl p-7 h-full flex flex-col"
                  style={{ border: "1px solid rgba(26,217,173,0.1)" }}
                >
                  {/* Step number */}
                  <span className="text-6xl font-black text-white/4 absolute top-5 right-6 select-none leading-none">
                    {step.num}
                  </span>

                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                    style={{ border: "1px solid rgba(26,217,173,0.15)" }}
                  >
                    <Icon size={22} className="text-mint" strokeWidth={1.8} />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed">{step.desc}</p>

                  {/* Connector arrow (not last) */}
                  {i < steps.length - 1 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                      <ChevronRight size={18} className="text-mint/30" />
                    </div>
                  )}
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>
      </Section>

      {/* ── VALUE PROPS ── */}
      <Section tight className="relative overflow-hidden">
        <div
          className="ambient-blob w-[600px] h-[600px] -top-40 -left-40 opacity-50"
          style={{ background: "radial-gradient(ellipse, rgba(26,217,173,0.05) 0%, transparent 70%)" }}
          aria-hidden="true"
        />

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection direction="left">
            <span className="text-xs uppercase tracking-widest font-semibold text-mint/60 mb-3 block">
              Why Payli
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
              Revenue that<br />
              <span className="gradient-text">doesn&apos;t wait</span><br />
              for anyone.
            </h2>
            <p className="text-base text-white/50 leading-relaxed mb-8 max-w-md">
              Every minute a table sits idle after a meal is lost revenue. Payli eliminates that gap — turning bill collection from a bottleneck into a competitive advantage.
            </p>
            <Link href="/solutions" className="btn-primary inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-semibold text-base">
              Explore Solutions
              <ArrowRight size={17} />
            </Link>
          </AnimatedSection>

          <div className="grid gap-5">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <AnimatedSection key={v.title} delay={i * 0.12} direction="right">
                  <motion.div
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                    className="glass rounded-2xl p-6 flex items-start gap-5"
                    style={{ border: "1px solid rgba(26,217,173,0.1)" }}
                  >
                    <div
                      className="w-11 h-11 rounded-xl shrink-0 flex items-center justify-center"
                      style={{ background: "rgba(26,217,173,0.12)", border: "1px solid rgba(26,217,173,0.2)" }}
                    >
                      <Icon size={20} className="text-mint" strokeWidth={1.8} />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white mb-1">{v.title}</h3>
                      <p className="text-sm text-white/50 leading-relaxed">{v.desc}</p>
                    </div>
                  </motion.div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </Section>

      {/* ── STATS ── */}
      <Section tight className="relative overflow-hidden">
        {/* Full-bleed accent bar */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(26,217,173,0.04) 0%, rgba(19,106,111,0.08) 50%, rgba(11,73,82,0.06) 100%)",
            borderTop: "1px solid rgba(26,217,173,0.08)",
            borderBottom: "1px solid rgba(26,217,173,0.08)",
          }}
          aria-hidden="true"
        />

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <AnimatedSection key={s.label} delay={i * 0.12}>
                <div className="flex flex-col items-center gap-3">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mb-2"
                    style={{ background: "rgba(26,217,173,0.1)", border: "1px solid rgba(26,217,173,0.2)" }}
                  >
                    <Icon size={22} className="text-mint" strokeWidth={1.8} />
                  </div>
                  <div className="text-5xl md:text-6xl font-black gradient-text tracking-tight">{s.value}</div>
                  <p className="text-sm text-white/50 max-w-[180px] leading-relaxed">{s.label}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </Section>

      {/* ── FEATURE CARDS ── */}
      <Section id="features">
        <AnimatedSection className="text-center mb-16">
          <span className="text-xs uppercase tracking-widest font-semibold text-mint/60 mb-3 block">
            Our Products
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Everything your<br />
            <span className="gradient-text">restaurant needs</span>
          </h2>
          <p className="text-lg text-white/50 max-w-xl mx-auto">
            One platform, three powerful tools that work together to transform the dining experience.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <AnimatedSection key={f.title} delay={i * 0.12}>
                <Link href={f.href} className="block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-mint rounded-3xl">
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
                    className="relative glass rounded-3xl p-8 h-full group"
                    style={{ border: "1px solid rgba(26,217,173,0.1)", minHeight: "260px" }}
                  >
                    {/* Tag */}
                    {f.tag && (
                      <span className="absolute top-5 right-5 text-xs font-semibold px-2.5 py-1 rounded-full bg-mint/15 text-mint">
                        {f.tag}
                      </span>
                    )}

                    {/* Icon */}
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                      style={{
                        background: "linear-gradient(135deg, rgba(26,217,173,0.15), rgba(19,106,111,0.1))",
                        border: "1px solid rgba(26,217,173,0.2)",
                      }}
                    >
                      <Icon size={26} className="text-mint" strokeWidth={1.6} />
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3">{f.title}</h3>
                    <p className="text-sm text-white/50 leading-relaxed mb-5">{f.desc}</p>

                    <div className="flex items-center gap-1.5 text-mint text-sm font-medium group-hover:gap-2.5 transition-all">
                      Learn more <ArrowRight size={15} />
                    </div>

                    {/* Hover glow */}
                    <div
                      className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{ background: "radial-gradient(ellipse at 30% 20%, rgba(26,217,173,0.05) 0%, transparent 70%)" }}
                      aria-hidden="true"
                    />
                  </motion.div>
                </Link>
              </AnimatedSection>
            );
          })}
        </div>
      </Section>

      {/* ── TRUST BADGES ── */}
      <Section tight>
        <AnimatedSection>
          <div
            className="rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8"
            style={{
              background: "linear-gradient(135deg, rgba(26,217,173,0.06) 0%, rgba(11,73,82,0.15) 100%)",
              border: "1px solid rgba(26,217,173,0.12)",
            }}
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              {[
                { icon: Shield, label: "PCI DSS Compliant" },
                { icon: Zap, label: "99.9% Uptime SLA" },
                { icon: Clock, label: "24/7 Support" },
              ].map((b) => {
                const Icon = b.icon;
                return (
                  <div key={b.label} className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: "rgba(26,217,173,0.12)", border: "1px solid rgba(26,217,173,0.2)" }}
                    >
                      <Icon size={18} className="text-mint" strokeWidth={1.8} />
                    </div>
                    <span className="text-sm font-medium text-white/70">{b.label}</span>
                  </div>
                );
              })}
            </div>
            <Link href="/about" className="btn-outline px-7 py-3.5 rounded-2xl font-semibold text-base shrink-0 inline-flex items-center gap-2">
              Book a Demo
              <ArrowRight size={16} />
            </Link>
          </div>
        </AnimatedSection>
      </Section>

      {/* ── FINAL CTA ── */}
      <Section className="relative overflow-hidden">
        <div
          className="ambient-blob w-[700px] h-[700px] -top-40 left-1/2 -translate-x-1/2 animate-glow opacity-60"
          style={{ background: "radial-gradient(ellipse, rgba(26,217,173,0.07) 0%, transparent 60%)" }}
          aria-hidden="true"
        />

        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              Ready to drop<br />
              <span className="gradient-text">the wait?</span>
            </h2>
            <p className="text-lg text-white/50 mb-10">
              Join hundreds of restaurants already serving faster, earning more, and delighting guests with Payli.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/solutions" className="btn-primary px-9 py-4 rounded-2xl text-base font-semibold inline-flex items-center gap-2 justify-center">
                Get Started Today
                <ArrowRight size={18} />
              </Link>
              <Link href="/about" className="btn-outline px-9 py-4 rounded-2xl text-base font-semibold inline-flex items-center gap-2 justify-center">
                Talk to Sales
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </Section>
    </>
  );
}
