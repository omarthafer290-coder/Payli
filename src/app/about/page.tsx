"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import {
  Target, Eye, Heart, ArrowRight, Zap,
  Globe, Users, Award, Mail, Clock,
  CheckCircle2, TrendingUp, Shield,
} from "lucide-react";

/* ─── Reveal ────────────────────────────────────────────────────────────────── */
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

/* ─── Data ────────────────────────────────────────────────────────────────── */
const PILLARS = [
  {
    icon: Target,
    title: "Mission",
    body: "To eliminate the dead time between the last bite and the next cover — giving restaurants the revenue they already earned, and guests a finish that feels as good as the meal.",
    color: "from-mint/12 to-teal/6",
  },
  {
    icon: Eye,
    title: "Vision",
    body: "A world where every restaurant — from a coastal café to a five-star hotel — operates at peak efficiency, guests feel genuinely valued, and hospitality means the whole experience.",
    color: "from-teal/12 to-mid/6",
  },
  {
    icon: Heart,
    title: "Values",
    body: "Speed without shortcuts. Simplicity over complexity. We obsess over the small moments that define a guest's experience — and the operator's bottom line.",
    color: "from-mid/12 to-deep/6",
  },
];

const STATS = [
  { value: "500+", label: "Active Restaurants",    icon: Users  },
  { value: "3",    label: "Countries",             icon: Globe  },
  { value: "1M+",  label: "Payments Processed",    icon: Zap    },
  { value: "4.9★", label: "Operator Rating",       icon: Award  },
];

const TIMELINE = [
  { year: "2022", title: "Founded in Dubai",           body: "Two founders, one frustrating dinner, and a clear gap in the market." },
  { year: "2023", title: "First 50 restaurants live",  body: "Launched Pay at Table across Dubai's F&B scene. Operator NPS: 87." },
  { year: "2024", title: "GCC expansion",              body: "Expanded to Saudi Arabia and Qatar. Crossed 200 active venues." },
  { year: "2025", title: "500+ venues. 3 countries.",  body: "Order & Pay and Digital Menu launched. Processing AED 50M+ monthly." },
];

const TEAM = [
  {
    initials: "OA",
    name: "Omar Al-Thafir",
    role: "Co-founder & CEO",
    bio: "Former VP Product at a regional fintech. Built payment products used by 2M+ consumers across the Middle East.",
    grad: "from-mint/40 to-teal/20",
  },
  {
    initials: "RS",
    name: "Rania Saleh",
    role: "Co-founder & CTO",
    bio: "Ex-Amazon engineer. Designed high-throughput payment infrastructure processing $2B+ annually before founding Payli.",
    grad: "from-teal/40 to-mid/20",
  },
  {
    initials: "SM",
    name: "Said Mansour",
    role: "Head of Growth",
    bio: "Led go-to-market for three SaaS startups from zero to Series B in MENA. Speaks fluent restaurant-operator.",
    grad: "from-mid/40 to-deep/20",
  },
];

const CONTACT_INFO = [
  { icon: Clock,         label: "Response time",     value: "Under 2 hours" },
  { icon: CheckCircle2,  label: "Demo duration",     value: "20 minutes"    },
  { icon: TrendingUp,    label: "Onboarding speed",  value: "As fast as 24h"},
  { icon: Shield,        label: "Contract required", value: "No lock-in"    },
];

/* ─── Page ─────────────────────────────────────────────────────────────────── */
export default function AboutPage() {
  return (
    <>
      {/* ══ HERO ═══════════════════════════════════════════════════════════════ */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="blob absolute w-[700px] h-[600px] top-0 left-0 opacity-25"
          style={{ background: "radial-gradient(ellipse, rgba(26,217,173,0.08) 0%, transparent 65%)" }}
          aria-hidden="true" />
        <div className="blob absolute w-[400px] h-[400px] top-24 right-0 opacity-20"
          style={{ background: "radial-gradient(ellipse, rgba(19,106,111,0.12) 0%, transparent 65%)" }}
          aria-hidden="true" />

        <div className="relative mx-auto max-w-7xl px-5 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8"
          >
            <Heart size={12} style={{ color: "#1AD9AD" }} />
            <span className="text-xs font-[600] text-white/60">Built in Dubai. Designed for operators.</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.07 }}
            className="display-xl text-white mb-6 max-w-3xl"
          >
            We exist so no guest<br />
            <span className="gradient-text">waits for a bill again.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-xl text-white/50 leading-relaxed max-w-lg mb-10"
          >
            Payli was built because a great meal deserves a great ending — not 15 minutes of awkward waiting.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.28 }}
            className="flex flex-wrap gap-4"
          >
            <Link href="/solutions" className="btn-primary text-sm px-7 py-3.5 rounded-2xl gap-2">
              See Our Solutions
              <ArrowRight size={15} />
            </Link>
            <a
              href="mailto:hello@payli.tech"
              className="btn-ghost text-sm px-7 py-3.5 rounded-2xl gap-2"
            >
              <Mail size={15} />
              hello@payli.tech
            </a>
          </motion.div>
        </div>
      </section>

      {/* ══ STATS ══════════════════════════════════════════════════════════════ */}
      <section className="py-16 section-alt relative">
        <div className="divider-glow absolute top-0 inset-x-0" aria-hidden="true" />
        <div className="divider-glow absolute bottom-0 inset-x-0" aria-hidden="true" />
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {STATS.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.label} delay={i * 0.08}>
                  <div className="glass-card rounded-3xl p-6 text-center">
                    <div
                      className="w-10 h-10 rounded-xl mx-auto mb-3 flex items-center justify-center"
                      style={{ background: "rgba(26,217,173,0.1)", border: "1px solid rgba(26,217,173,0.15)" }}
                    >
                      <Icon size={18} strokeWidth={1.8} style={{ color: "#1AD9AD" }} />
                    </div>
                    <div
                      className="text-3xl font-[900] mb-1 tracking-tight"
                      style={{
                        background: "linear-gradient(125deg, #1AD9AD, #25AA98)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      {s.value}
                    </div>
                    <p className="text-xs text-white/40 leading-tight">{s.label}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ PILLARS ════════════════════════════════════════════════════════════ */}
      <section className="py-28 md:py-32 relative">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <Reveal className="mb-16">
            <p className="eyebrow mb-4">What drives us</p>
            <h2 className="display-lg text-white max-w-md">
              Purpose-built for<br />
              <span className="gradient-text">restaurants.</span>
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-5">
            {PILLARS.map((p, i) => {
              const Icon = p.icon;
              return (
                <Reveal key={p.title} delay={i * 0.1}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.25 }}
                    className={`glass-card rounded-3xl p-8 h-full bg-gradient-to-br ${p.color}`}
                  >
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6"
                      style={{ background: "rgba(26,217,173,0.12)", border: "1px solid rgba(26,217,173,0.18)" }}
                    >
                      <Icon size={22} strokeWidth={1.8} style={{ color: "#1AD9AD" }} />
                    </div>
                    <h3 className="text-xl font-[700] text-white mb-3">{p.title}</h3>
                    <p className="text-sm text-white/50 leading-relaxed">{p.body}</p>
                  </motion.div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ STORY + TIMELINE ═══════════════════════════════════════════════════ */}
      <section className="py-24 md:py-28 section-alt relative">
        <div className="divider-glow absolute top-0 inset-x-0" aria-hidden="true" />
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Story */}
            <Reveal direction="left">
              <p className="eyebrow mb-4">Our story</p>
              <h2 className="display-lg text-white mb-6">
                From a frustrating<br />
                dinner to a<br />
                <span className="gradient-text">fintech product.</span>
              </h2>
              <div className="space-y-5 text-base text-white/50 leading-relaxed max-w-md">
                <p>
                  Our founders were at dinner in Dubai in 2022. The food was exceptional. The service was warm. But they sat at that table for 22 minutes after finishing their meal — waiting for the bill.
                </p>
                <p>
                  Every table around them had the same expression. People checking phones. Signalling waiters. Waiting.
                </p>
                <p>
                  Six months later, Payli was live in its first restaurant. Today, we process millions of dirhams monthly and we&apos;re just getting started.
                </p>
              </div>
            </Reveal>

            {/* Timeline */}
            <Reveal direction="right" delay={0.1}>
              <div className="relative pl-6" style={{ borderLeft: "2px solid rgba(26,217,173,0.12)" }}>
                {TIMELINE.map((t, i) => (
                  <motion.div
                    key={t.year}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="relative mb-10 last:mb-0"
                  >
                    {/* Dot */}
                    <div
                      className="absolute -left-[calc(1.5rem+5px)] top-1.5 w-2.5 h-2.5 rounded-full"
                      style={{
                        background: "linear-gradient(135deg, #1AD9AD, #136A6F)",
                        boxShadow: "0 0 10px rgba(26,217,173,0.5)",
                      }}
                    />
                    <span className="text-xs font-[700] uppercase tracking-widest mb-1 block" style={{ color: "#1AD9AD" }}>
                      {t.year}
                    </span>
                    <h3 className="text-base font-[700] text-white mb-1">{t.title}</h3>
                    <p className="text-sm text-white/45 leading-relaxed">{t.body}</p>
                  </motion.div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══ TEAM ═══════════════════════════════════════════════════════════════ */}
      <section className="py-28 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <Reveal className="mb-16">
            <p className="eyebrow mb-4">The people</p>
            <h2 className="display-lg text-white max-w-sm">
              Meet the<br />
              <span className="gradient-text">team.</span>
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-5">
            {TEAM.map((member, i) => (
              <Reveal key={member.name} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.25 }}
                  className="glass-card rounded-3xl p-8"
                >
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${member.grad} flex items-center justify-center text-xl font-[900] text-white mb-5`}
                    style={{ border: "1px solid rgba(26,217,173,0.18)" }}
                  >
                    {member.initials}
                  </div>
                  <h3 className="text-lg font-[700] text-white mb-0.5">{member.name}</h3>
                  <p className="text-xs font-[600] mb-4" style={{ color: "#1AD9AD" }}>{member.role}</p>
                  <p className="text-sm text-white/45 leading-relaxed">{member.bio}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CONTACT ════════════════════════════════════════════════════════════ */}
      <section id="contact" className="py-24 md:py-28 section-alt relative">
        <div className="divider-glow absolute top-0 inset-x-0" aria-hidden="true" />
        <div className="blob absolute w-[600px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-glow opacity-15"
          style={{ background: "radial-gradient(ellipse, rgba(26,217,173,0.08) 0%, transparent 70%)" }}
          aria-hidden="true" />

        <div className="relative mx-auto max-w-7xl px-5 md:px-10">
          <Reveal>
            <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start">

              {/* Left: copy */}
              <div>
                <p className="eyebrow mb-4">Get in touch</p>
                <h2 className="display-lg text-white mb-5">
                  Ready to transform<br />
                  <span className="gradient-text">your venue?</span>
                </h2>
                <p className="text-base text-white/50 leading-relaxed mb-8 max-w-md">
                  Book a 20-minute demo and see Payli running in a real restaurant environment. We&apos;ll show you exactly what it looks like for your guests and your team.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="mailto:hello@payli.tech" className="btn-primary text-sm px-7 py-3.5 rounded-2xl gap-2">
                    <Mail size={15} />
                    hello@payli.tech
                  </Link>
                  <Link href="/solutions" className="btn-ghost text-sm px-7 py-3.5 rounded-2xl">
                    Explore Solutions
                  </Link>
                </div>
              </div>

              {/* Right: info cards */}
              <div className="space-y-3">
                {CONTACT_INFO.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: 16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.07 }}
                      className="glass-card rounded-2xl px-5 py-4 flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0"
                          style={{ background: "rgba(26,217,173,0.1)" }}
                        >
                          <Icon size={15} strokeWidth={1.8} style={{ color: "#1AD9AD" }} />
                        </div>
                        <span className="text-sm text-white/50">{item.label}</span>
                      </div>
                      <span className="text-sm font-[700]" style={{ color: "#1AD9AD" }}>{item.value}</span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
