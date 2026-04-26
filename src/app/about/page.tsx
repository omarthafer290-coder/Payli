"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Target,
  Eye,
  Heart,
  ArrowRight,
  Zap,
  Globe,
  Users,
  Award,
  Mail,
  MessageSquare,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import Section from "@/components/Section";

/* ------------------------------------------------------------------ */
/*  Data                                                                */
/* ------------------------------------------------------------------ */

const pillars = [
  {
    icon: Target,
    title: "Our Mission",
    desc: "Remove the friction between a great meal and leaving the table. We believe paying a bill should take seconds, not minutes.",
    color: "from-mint/15 to-teal/8",
  },
  {
    icon: Eye,
    title: "Our Vision",
    desc: "A world where every restaurant — from street-side bistros to five-star hotels — delivers a seamless, cashless, stress-free dining experience.",
    color: "from-teal/15 to-mid/8",
  },
  {
    icon: Heart,
    title: "Our Values",
    desc: "Speed without sacrifice. We obsess over simplicity, reliability, and the human experience — for guests and operators alike.",
    color: "from-mid/15 to-deep/8",
  },
];

const milestones = [
  { year: "2022", event: "Payli founded in Dubai" },
  { year: "2023", event: "First 50 restaurants onboarded" },
  { year: "2024", event: "Expanded across GCC region" },
  { year: "2025", event: "500+ active venues, 3 countries" },
];

const team = [
  {
    name: "Omar Al-Thafir",
    role: "Co-founder & CEO",
    bio: "Former VP Product at a regional fintech. 10+ years in payments and hospitality tech.",
    initials: "OA",
    gradient: "from-mint/40 to-teal/20",
  },
  {
    name: "Rania Saleh",
    role: "Co-founder & CTO",
    bio: "Ex-Amazon engineer. Built high-throughput payment systems processing $2B+ annually.",
    initials: "RS",
    gradient: "from-teal/40 to-mid/20",
  },
  {
    name: "Said Mansour",
    role: "Head of Growth",
    bio: "Led go-to-market for three SaaS startups from zero to Series B in the MENA market.",
    initials: "SM",
    gradient: "from-mid/40 to-deep/20",
  },
];

const stats = [
  { value: "500+", label: "Active Restaurants", icon: Users },
  { value: "3", label: "Countries", icon: Globe },
  { value: "1M+", label: "Payments Processed", icon: Zap },
  { value: "4.9★", label: "Operator Rating", icon: Award },
];

/* ------------------------------------------------------------------ */
/*  Page                                                                */
/* ------------------------------------------------------------------ */

export default function AboutPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative pt-36 pb-24 overflow-hidden">
        <div
          className="ambient-blob w-[700px] h-[600px] top-0 left-1/2 -translate-x-1/2"
          style={{ background: "radial-gradient(ellipse, rgba(26,217,173,0.07) 0%, transparent 70%)" }}
          aria-hidden="true"
        />
        <div
          className="ambient-blob w-[400px] h-[400px] top-20 -right-20 opacity-60"
          style={{ background: "radial-gradient(ellipse, rgba(19,106,111,0.1) 0%, transparent 70%)" }}
          aria-hidden="true"
        />

        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 text-xs font-medium text-mint/80"
            >
              <Heart size={12} className="text-mint" />
              Built in Dubai. Serving the world.
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] mb-6"
            >
              We exist so<br />
              <span className="gradient-text">no guest waits</span><br />
              for a bill again.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.22 }}
              className="text-lg text-white/55 leading-relaxed max-w-xl mb-10"
            >
              Payli was built by a team obsessed with two things: the joy of a great meal, and the frustration of waiting 15 minutes for the bill. We&apos;re here to fix the second so restaurants can focus on the first.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/solutions"
                className="btn-primary px-8 py-4 rounded-2xl font-semibold inline-flex items-center gap-2"
              >
                See Our Solutions
                <ArrowRight size={17} />
              </Link>
              <a
                href="mailto:hello@payli.tech"
                className="btn-outline px-8 py-4 rounded-2xl font-semibold inline-flex items-center gap-2"
              >
                <Mail size={16} />
                Get in Touch
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <Section tight className="relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, rgba(26,217,173,0.03), rgba(11,73,82,0.08))",
            borderTop: "1px solid rgba(26,217,173,0.07)",
            borderBottom: "1px solid rgba(26,217,173,0.07)",
          }}
          aria-hidden="true"
        />
        <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <AnimatedSection key={s.label} delay={i * 0.1} className="text-center">
                <div
                  className="w-12 h-12 rounded-2xl mx-auto mb-3 flex items-center justify-center"
                  style={{ background: "rgba(26,217,173,0.1)", border: "1px solid rgba(26,217,173,0.18)" }}
                >
                  <Icon size={20} className="text-mint" strokeWidth={1.8} />
                </div>
                <div className="text-4xl font-black gradient-text mb-1 tracking-tight">{s.value}</div>
                <p className="text-xs text-white/45">{s.label}</p>
              </AnimatedSection>
            );
          })}
        </div>
      </Section>

      {/* ── MISSION / VISION / VALUES ── */}
      <Section>
        <AnimatedSection className="text-center mb-14">
          <span className="text-xs uppercase tracking-widest font-semibold text-mint/60 mb-3 block">
            What drives us
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Purpose-built for <span className="gradient-text">restaurants</span>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <AnimatedSection key={p.title} delay={i * 0.12}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.28 }}
                  className={`glass rounded-3xl p-8 h-full bg-gradient-to-br ${p.color}`}
                  style={{ border: "1px solid rgba(26,217,173,0.12)" }}
                >
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6"
                    style={{ background: "rgba(26,217,173,0.12)", border: "1px solid rgba(26,217,173,0.2)" }}
                  >
                    <Icon size={22} className="text-mint" strokeWidth={1.8} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{p.title}</h3>
                  <p className="text-sm text-white/55 leading-relaxed">{p.desc}</p>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>
      </Section>

      {/* ── STORY / TIMELINE ── */}
      <Section tight className="relative overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <AnimatedSection direction="left">
            <span className="text-xs uppercase tracking-widest font-semibold text-mint/60 mb-3 block">
              Our Story
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
              From a frustrating<br />
              dinner to a<br />
              <span className="gradient-text">fintech startup</span>
            </h2>
            <p className="text-base text-white/55 leading-relaxed mb-4">
              Our founders were out to dinner in Dubai in 2022. The food was exceptional. The service was warm. But they sat at the table for 22 minutes waiting for the bill.
            </p>
            <p className="text-base text-white/55 leading-relaxed mb-4">
              They looked around — almost every table had the same glazed look. Waiting. Signaling. Waiting again.
            </p>
            <p className="text-base text-white/55 leading-relaxed">
              Six months later, Payli was live in its first restaurant. Today, we process millions of dirhams in transactions monthly across the region — and growing.
            </p>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <div className="relative pl-8" style={{ borderLeft: "2px solid rgba(26,217,173,0.15)" }}>
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  className="relative mb-10 last:mb-0"
                >
                  {/* Dot */}
                  <div
                    className="absolute -left-[calc(2rem+5px)] top-1 w-3 h-3 rounded-full"
                    style={{ background: "linear-gradient(135deg, #1AD9AD, #136A6F)", boxShadow: "0 0 8px rgba(26,217,173,0.4)" }}
                  />
                  <span className="text-xs font-bold text-mint/70 mb-1 block">{m.year}</span>
                  <p className="text-base text-white/70 font-medium">{m.event}</p>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </Section>

      {/* ── TEAM ── */}
      <Section id="team">
        <AnimatedSection className="text-center mb-14">
          <span className="text-xs uppercase tracking-widest font-semibold text-mint/60 mb-3 block">
            The People
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Meet the <span className="gradient-text">team</span>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {team.map((member, i) => (
            <AnimatedSection key={member.name} delay={i * 0.12}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.28 }}
                className="glass rounded-3xl p-8"
                style={{ border: "1px solid rgba(26,217,173,0.1)" }}
              >
                {/* Avatar */}
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${member.gradient} flex items-center justify-center text-xl font-black text-white mb-5`}
                  style={{ border: "1px solid rgba(26,217,173,0.2)" }}
                >
                  {member.initials}
                </div>

                <h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>
                <p className="text-xs font-semibold text-mint/70 mb-3">{member.role}</p>
                <p className="text-sm text-white/50 leading-relaxed">{member.bio}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </Section>

      {/* ── CONTACT / CTA ── */}
      <Section id="contact" tight className="relative overflow-hidden">
        <div
          className="ambient-blob w-[600px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-glow"
          style={{ background: "radial-gradient(ellipse, rgba(26,217,173,0.06) 0%, transparent 70%)" }}
          aria-hidden="true"
        />

        <AnimatedSection>
          <div
            className="rounded-3xl p-10 md:p-16 relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(26,217,173,0.07) 0%, rgba(11,73,82,0.18) 100%)",
              border: "1px solid rgba(26,217,173,0.14)",
            }}
          >
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-xs uppercase tracking-widest font-semibold text-mint/60 mb-3 block">
                  Get in Touch
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">
                  Ready to transform<br />
                  <span className="gradient-text">your venue?</span>
                </h2>
                <p className="text-base text-white/50 leading-relaxed mb-8 max-w-md">
                  Book a 20-minute call and see how Payli fits into your existing workflow. No commitment, no pressure — just a product that works.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="mailto:hello@payli.tech"
                    className="btn-primary px-7 py-3.5 rounded-2xl font-semibold inline-flex items-center gap-2"
                  >
                    <Mail size={16} />
                    hello@payli.tech
                  </Link>
                  <Link
                    href="/solutions"
                    className="btn-outline px-7 py-3.5 rounded-2xl font-semibold inline-flex items-center gap-2"
                  >
                    <MessageSquare size={16} />
                    Explore Solutions
                  </Link>
                </div>
              </div>

              {/* Info cards */}
              <div className="space-y-4">
                {[
                  { label: "Response time", value: "Within 2 hours" },
                  { label: "Demo duration", value: "20 minutes" },
                  { label: "Onboarding time", value: "As fast as 24 hours" },
                  { label: "Contract required?", value: "No lock-in" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="glass rounded-2xl px-5 py-4 flex justify-between items-center"
                    style={{ border: "1px solid rgba(26,217,173,0.1)" }}
                  >
                    <span className="text-sm text-white/45">{item.label}</span>
                    <span className="text-sm font-semibold text-mint">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </Section>
    </>
  );
}
