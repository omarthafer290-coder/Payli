"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  CreditCard,
  UtensilsCrossed,
  BarChart3,
  Check,
  ArrowRight,
  Zap,
  RefreshCcw,
  Layers,
  Eye,
  PieChart,
  Pencil,
  Smartphone,
  Clock,
  TrendingUp,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import Section from "@/components/Section";

/* ------------------------------------------------------------------ */
/*  Data                                                                */
/* ------------------------------------------------------------------ */

const solutions = [
  {
    id: "pay-at-table",
    icon: CreditCard,
    tag: "Most Popular",
    title: "Pay at Table",
    subtitle: "The frictionless bill experience.",
    description:
      "Guests scan the table QR, see their itemised bill, split it however they like, and pay instantly. Your POS closes the table automatically — no staff intervention needed.",
    highlights: [
      "Real-time POS sync (Foodics, Lightspeed & more)",
      "Auto table closing on payment",
      "Split by item, percentage, or equal share",
      "Apple Pay, Google Pay, Visa, Mastercard",
      "Tip prompts that increase gratuity by up to 22%",
    ],
    metrics: [
      { icon: Clock, value: "3 min", label: "avg bill-to-close time" },
      { icon: TrendingUp, value: "+31%", label: "revenue per shift" },
    ],
    gradient: "from-mint/10 to-teal/5",
    iconBg: "from-mint/20 to-teal/10",
    accentColor: "#1AD9AD",
  },
  {
    id: "order-and-pay",
    icon: UtensilsCrossed,
    tag: null,
    title: "Order & Pay",
    subtitle: "Full self-service, zero friction.",
    description:
      "Guests browse your digital menu, customise their order, and pay — all from the QR. Orders hit your POS and kitchen display instantly, with no re-keying and no miscommunication.",
    highlights: [
      "Direct-to-kitchen order routing",
      "Modifier and allergen support built-in",
      "Reduces order errors by up to 67%",
      "Multi-language menu support",
      "Waiter call & re-order button",
    ],
    metrics: [
      { icon: Zap, value: "67%", label: "fewer order errors" },
      { icon: RefreshCcw, value: "2×", label: "faster service cycles" },
    ],
    gradient: "from-teal/10 to-mid/5",
    iconBg: "from-teal/20 to-mid/10",
    accentColor: "#25AA98",
  },
  {
    id: "digital-menu",
    icon: BarChart3,
    tag: null,
    title: "Digital Menu",
    subtitle: "Your brand. Your menu. Full control.",
    description:
      "A beautiful, fully branded digital menu that works on any device. Swap items in seconds, push promotions in real-time, and let high-res visuals do the upselling for you.",
    highlights: [
      "No-code menu editor — update in seconds",
      "AI-powered upsell suggestions",
      "High-res photos and video support",
      "Seasonal promos & time-based pricing",
      "Analytics: most viewed, most ordered, abandoned",
    ],
    metrics: [
      { icon: Eye, value: "43%", label: "higher add-on attach rate" },
      { icon: PieChart, value: "18%", label: "avg order value increase" },
    ],
    gradient: "from-mid/10 to-deep/5",
    iconBg: "from-mid/20 to-deep/10",
    accentColor: "#136A6F",
  },
];

const integrations = [
  "Foodics", "Lightspeed", "Toast", "Square", "Oracle MICROS",
  "Simphony", "TouchBistro", "Revel",
];

/* ------------------------------------------------------------------ */
/*  Solution block                                                       */
/* ------------------------------------------------------------------ */

function SolutionBlock({
  s,
  index,
}: {
  s: (typeof solutions)[number];
  index: number;
}) {
  const Icon = s.icon;
  const isEven = index % 2 === 0;

  return (
    <div id={s.id} className="scroll-mt-24">
      <AnimatedSection>
        <div
          className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
            !isEven ? "lg:grid-flow-dense" : ""
          }`}
        >
          {/* Text side */}
          <div className={!isEven ? "lg:col-start-2" : ""}>
            <div className="flex items-center gap-3 mb-5">
              <div
                className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${s.iconBg} flex items-center justify-center`}
                style={{ border: "1px solid rgba(26,217,173,0.2)" }}
              >
                <Icon size={22} className="text-mint" strokeWidth={1.8} />
              </div>
              {s.tag && (
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-mint/15 text-mint">
                  {s.tag}
                </span>
              )}
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2">
              {s.title}
            </h2>
            <p className="text-lg text-mint font-semibold mb-4">{s.subtitle}</p>
            <p className="text-base text-white/55 leading-relaxed mb-8 max-w-lg">
              {s.description}
            </p>

            {/* Highlights */}
            <ul className="space-y-3 mb-8">
              {s.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 text-sm text-white/65">
                  <Check
                    size={16}
                    className="text-mint shrink-0 mt-0.5"
                    strokeWidth={2.5}
                  />
                  {h}
                </li>
              ))}
            </ul>

            <Link
              href="/about"
              className="btn-primary inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-semibold text-sm"
            >
              Book a Demo
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Visual side */}
          <div className={!isEven ? "lg:col-start-1 lg:row-start-1" : ""}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className={`relative rounded-3xl p-8 bg-gradient-to-br ${s.gradient}`}
              style={{ border: "1px solid rgba(26,217,173,0.12)", minHeight: "320px" }}
            >
              {/* Large icon watermark */}
              <div className="absolute top-8 right-8 opacity-5">
                <Icon size={140} strokeWidth={0.8} className="text-mint" />
              </div>

              {/* Metrics */}
              <div className="flex gap-4 mb-8">
                {s.metrics.map((m) => {
                  const MIcon = m.icon;
                  return (
                    <div
                      key={m.label}
                      className="glass rounded-2xl px-5 py-4 flex-1"
                      style={{ border: "1px solid rgba(26,217,173,0.12)" }}
                    >
                      <MIcon size={18} className="text-mint mb-2" strokeWidth={1.8} />
                      <div className="text-2xl font-black gradient-text">{m.value}</div>
                      <div className="text-xs text-white/45 mt-0.5 leading-tight">{m.label}</div>
                    </div>
                  );
                })}
              </div>

              {/* Mock item list */}
              <div className="space-y-3">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="glass rounded-xl px-4 py-3 flex items-center gap-3"
                    style={{ border: "1px solid rgba(26,217,173,0.08)" }}
                  >
                    <div
                      className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: "rgba(26,217,173,0.15)" }}
                    >
                      <Check size={13} className="text-mint" strokeWidth={2.5} />
                    </div>
                    <div
                      className="h-2.5 rounded-full flex-1"
                      style={{
                        background: `rgba(26,217,173,${0.15 - i * 0.04})`,
                        width: `${80 - i * 10}%`,
                      }}
                    />
                    <span className="text-xs text-white/30 font-mono shrink-0">
                      {["Synced", "Active", "Ready"][i]}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                                */
/* ------------------------------------------------------------------ */

export default function SolutionsPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative pt-36 pb-24 overflow-hidden text-center">
        <div
          className="ambient-blob w-[700px] h-[500px] top-0 left-1/2 -translate-x-1/2 opacity-60"
          style={{ background: "radial-gradient(ellipse, rgba(26,217,173,0.07) 0%, transparent 70%)" }}
          aria-hidden="true"
        />

        <div className="mx-auto max-w-7xl px-6 md:px-10 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 text-xs font-medium text-mint/80"
          >
            <Layers size={12} className="text-mint" />
            Three powerful products. One platform.
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-[1.08]"
          >
            Solutions built<br />
            for <span className="gradient-text">modern dining</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-white/50 max-w-xl mx-auto mb-10"
          >
            Whether you want guests to pay faster, order smarter, or see a better menu — Payli has a product that fits.
          </motion.p>

          {/* Jump links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="flex flex-wrap gap-3 justify-center"
          >
            {solutions.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="btn-outline px-5 py-2.5 rounded-xl text-sm font-medium inline-flex items-center gap-2"
              >
                <s.icon size={15} strokeWidth={1.8} />
                {s.title}
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── SOLUTION BLOCKS ── */}
      <div className="space-y-0">
        {solutions.map((s, i) => (
          <Section key={s.id} tight={i > 0}>
            <SolutionBlock s={s} index={i} />
          </Section>
        ))}
      </div>

      {/* ── INTEGRATIONS ── */}
      <Section tight className="relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background: "linear-gradient(180deg, transparent, rgba(19,106,111,0.06), transparent)",
            borderTop: "1px solid rgba(26,217,173,0.07)",
            borderBottom: "1px solid rgba(26,217,173,0.07)",
          }}
          aria-hidden="true"
        />

        <div className="relative text-center">
          <AnimatedSection>
            <span className="text-xs uppercase tracking-widest font-semibold text-mint/60 mb-3 block">
              Integrations
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3">
              Works with your <span className="gradient-text">existing POS</span>
            </h2>
            <p className="text-base text-white/45 max-w-lg mx-auto mb-12">
              Payli integrates natively with the world&apos;s leading POS systems. Zero migration. Zero disruption.
            </p>

            <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
              {integrations.map((name, i) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ scale: 1.05, borderColor: "rgba(26,217,173,0.35)" }}
                  className="glass px-5 py-2.5 rounded-xl text-sm font-medium text-white/60 hover:text-white/90 transition-colors"
                  style={{ border: "1px solid rgba(26,217,173,0.1)" }}
                >
                  {name}
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </Section>

      {/* ── CTA ── */}
      <Section tight>
        <AnimatedSection>
          <div
            className="rounded-3xl p-10 md:p-16 text-center relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(26,217,173,0.07) 0%, rgba(11,73,82,0.18) 100%)",
              border: "1px solid rgba(26,217,173,0.14)",
            }}
          >
            <div
              className="ambient-blob w-96 h-96 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-glow"
              style={{ background: "radial-gradient(ellipse, rgba(26,217,173,0.06) 0%, transparent 70%)" }}
              aria-hidden="true"
            />
            <div className="relative z-10">
              <Pencil size={32} className="text-mint mx-auto mb-5 opacity-70" strokeWidth={1.5} />
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
                Not sure which solution<br />
                <span className="gradient-text">is right for you?</span>
              </h2>
              <p className="text-base text-white/50 max-w-md mx-auto mb-8">
                Book a 20-minute demo and our team will walk you through the best fit for your venue type and size.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/about"
                  className="btn-primary px-9 py-4 rounded-2xl font-semibold inline-flex items-center gap-2 justify-center"
                >
                  Book a Demo
                  <ArrowRight size={17} />
                </Link>
                <Link
                  href="/"
                  className="btn-outline px-9 py-4 rounded-2xl font-semibold inline-flex items-center gap-2 justify-center"
                >
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </Section>
    </>
  );
}
