"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { QrCode, FileText, CreditCard, CheckCircle2 } from "lucide-react";

const STEPS = [
  {
    num: "01",
    title: "Scan QR",
    subtitle: "Instant QR Access",
    icon: QrCode,
    desc: "Every table has a unique QR code. Guests scan with their phone camera — no app download, no signup.",
    color: "#1AD9AD",
    animType: "scan",
  },
  {
    num: "02",
    title: "View Bill",
    subtitle: "Live Bill Preview",
    icon: FileText,
    desc: "A live bill loads instantly showing every item, quantity, and total. Always accurate, always live.",
    color: "#25AA98",
    animType: "bill",
  },
  {
    num: "03",
    title: "Pay Fully",
    subtitle: "Complete Payment Instantly",
    icon: CreditCard,
    desc: "Split by items, percentage, or custom amounts — then pay with Apple Pay, Google Pay, or any card.",
    color: "#1AD9AD",
    animType: "pay",
  },
  {
    num: "04",
    title: "Payment Method",
    subtitle: "Secure Payment Options",
    icon: CheckCircle2,
    desc: "PCI-compliant processing closes the table automatically. Staff are freed without lifting a finger.",
    color: "#25AA98",
    animType: "check",
  },
];

function QrScanIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      {/* QR corners */}
      <rect x="3" y="3" width="9" height="9" rx="1.5" stroke="#1AD9AD" strokeWidth="1.5" fill="none"/>
      <rect x="16" y="3" width="9" height="9" rx="1.5" stroke="#1AD9AD" strokeWidth="1.5" fill="none"/>
      <rect x="3" y="16" width="9" height="9" rx="1.5" stroke="#1AD9AD" strokeWidth="1.5" fill="none"/>
      <rect x="5.5" y="5.5" width="4" height="4" rx="0.5" fill="#1AD9AD"/>
      <rect x="18.5" y="5.5" width="4" height="4" rx="0.5" fill="#1AD9AD"/>
      <rect x="5.5" y="18.5" width="4" height="4" rx="0.5" fill="#1AD9AD"/>
      {/* Scan dots */}
      <rect x="16" y="16" width="3" height="3" rx="0.5" fill="#1AD9AD" opacity="0.6"/>
      <rect x="21" y="16" width="3" height="3" rx="0.5" fill="#1AD9AD" opacity="0.4"/>
      <rect x="16" y="21" width="3" height="3" rx="0.5" fill="#1AD9AD" opacity="0.4"/>
      <rect x="21" y="21" width="3" height="3" rx="0.5" fill="#1AD9AD" opacity="0.6"/>
    </svg>
  );
}

function BillIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <rect x="5" y="3" width="18" height="22" rx="2" stroke="#1AD9AD" strokeWidth="1.5" fill="none"/>
      <line x1="9" y1="9" x2="19" y2="9" stroke="#1AD9AD" strokeWidth="1.5" strokeLinecap="round" opacity="0.9"/>
      <line x1="9" y1="13" x2="16" y2="13" stroke="#1AD9AD" strokeWidth="1.5" strokeLinecap="round" opacity="0.7"/>
      <line x1="9" y1="17" x2="19" y2="17" stroke="#1AD9AD" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
      <line x1="9" y1="21" x2="13" y2="21" stroke="#1AD9AD" strokeWidth="1.5" strokeLinecap="round" opacity="0.3"/>
    </svg>
  );
}

function PayIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <rect x="3" y="7" width="22" height="14" rx="2.5" stroke="#1AD9AD" strokeWidth="1.5" fill="none"/>
      <rect x="3" y="10" width="22" height="3" fill="#1AD9AD" opacity="0.15"/>
      <rect x="7" y="16" width="6" height="2" rx="1" fill="#1AD9AD" opacity="0.5"/>
      <rect x="15" y="16" width="3" height="2" rx="1" fill="#1AD9AD" opacity="0.3"/>
      <rect x="20" y="16" width="3" height="2" rx="1" fill="#1AD9AD" opacity="0.3"/>
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <circle cx="14" cy="14" r="10" stroke="#1AD9AD" strokeWidth="1.5" fill="none"/>
      <path d="M9 14l3.5 3.5L19 10" stroke="#1AD9AD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

const STEP_ICONS = [QrScanIcon, BillIcon, PayIcon, CheckIcon];

function StepCard({ step, index }: { step: typeof STEPS[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const IconComp = STEP_ICONS[index];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
      className="relative"
    >
      {/* Step connector dot on curve (visible on desktop) */}
      <div className="hidden lg:flex absolute -top-[52px] left-1/2 -translate-x-1/2 flex-col items-center gap-1 z-10">
        <motion.div
          animate={inView ? { scale: [1, 1.3, 1], opacity: [0.6, 1, 0.7] } : {}}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 1, delay: index * 0.3 }}
          className="w-4 h-4 rounded-full flex items-center justify-center"
          style={{
            background: "linear-gradient(135deg, #1AD9AD, #136A6F)",
            boxShadow: "0 0 12px rgba(26,217,173,0.6)",
          }}
        >
          <div className="w-2 h-2 rounded-full bg-white/90" />
        </motion.div>
      </div>

      {/* Card */}
      <motion.div
        whileHover={{ y: -6, scale: 1.02 }}
        transition={{ duration: 0.25, ease: [0.34, 1.56, 0.64, 1] }}
        className="glass-card rounded-3xl p-7 h-full flex flex-col relative overflow-hidden group cursor-default"
        style={{ minHeight: 240 }}
      >
        {/* Large step number watermark */}
        <span
          className="absolute top-3 right-5 text-7xl font-[900] select-none leading-none pointer-events-none"
          style={{ color: "rgba(26,217,173,0.04)" }}
        >
          {step.num}
        </span>

        {/* Animated icon container */}
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 relative overflow-hidden transition-all duration-300 group-hover:scale-110"
          style={{
            background: "linear-gradient(135deg, rgba(26,217,173,0.14), rgba(19,106,111,0.07))",
            border: "1px solid rgba(26,217,173,0.2)",
          }}
        >
          {/* Ripple effect on hover */}
          <motion.div
            className="absolute inset-0 rounded-2xl"
            animate={{ scale: [1, 1.4], opacity: [0.2, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, delay: index * 0.4 }}
            style={{ background: "rgba(26,217,173,0.15)" }}
          />
          <IconComp />
        </div>

        <div className="flex flex-col gap-1 mb-3">
          <span className="text-[10px] font-[600] tracking-widest uppercase" style={{ color: "rgba(26,217,173,0.55)" }}>
            {step.subtitle}
          </span>
          <h3 className="text-lg font-[700] text-white tracking-tight">{step.title}</h3>
        </div>

        <p className="text-sm text-white/45 leading-relaxed flex-1">{step.desc}</p>

        {/* Bottom accent line */}
        <motion.div
          className="mt-5 h-px w-0 group-hover:w-full transition-all duration-500 rounded-full"
          style={{ background: "linear-gradient(90deg, #1AD9AD, transparent)" }}
        />

        {/* Hover glow */}
        <div
          className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 30% 20%, rgba(26,217,173,0.06) 0%, transparent 65%)" }}
          aria-hidden="true"
        />
      </motion.div>
    </motion.div>
  );
}

export default function HowItWorksSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 85%", "end 30%"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 0.9], [0, 1]);
  const pathOpacity = useTransform(scrollYProgress, [0, 0.15], [0, 1]);

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="relative py-28 md:py-36 section-alt scroll-mt-20 overflow-hidden"
    >
      {/* Section header */}
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="text-center mb-8"
        >
          <p className="eyebrow mb-4">How it works</p>
          <h2 className="display-lg text-white mb-4">Four steps. Zero friction.</h2>
          <p className="text-lg text-white/45 max-w-lg mx-auto">
            From scan to table-close in under two minutes — for every guest, every time.
          </p>
        </motion.div>

        {/* Animated SVG curve connecting the steps */}
        <div className="relative hidden lg:block h-20 mb-2 overflow-visible" aria-hidden="true">
          <svg
            viewBox="0 0 1000 80"
            fill="none"
            preserveAspectRatio="none"
            className="absolute inset-0 w-full h-full"
            style={{ overflow: "visible" }}
          >
            {/* Static ghost path */}
            <path
              d="M 50 70 C 150 50, 200 25, 250 22 C 350 18, 450 8, 500 6 C 600 3, 680 14, 750 12 C 840 9, 900 28, 950 38"
              stroke="rgba(26,217,173,0.1)"
              strokeWidth="1.5"
              fill="none"
              strokeDasharray="4 6"
            />
            {/* Animated drawing path */}
            <motion.path
              d="M 50 70 C 150 50, 200 25, 250 22 C 350 18, 450 8, 500 6 C 600 3, 680 14, 750 12 C 840 9, 900 28, 950 38"
              stroke="url(#pathGrad)"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              style={{ pathLength, opacity: pathOpacity }}
            />
            <defs>
              <linearGradient id="pathGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#1AD9AD" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#25AA98" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#1AD9AD" stopOpacity="0.6" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Steps grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 pt-2">
          {STEPS.map((step, i) => (
            <StepCard key={step.num} step={step} index={i} />
          ))}
        </div>

        {/* Bottom time callout */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 flex justify-center"
        >
          <div
            className="inline-flex items-center gap-3 rounded-2xl px-6 py-3.5"
            style={{
              background: "rgba(26,217,173,0.06)",
              border: "1px solid rgba(26,217,173,0.15)",
            }}
          >
            <div
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ background: "#1AD9AD", boxShadow: "0 0 8px rgba(26,217,173,0.8)" }}
            />
            <span className="text-sm text-white/65 font-[500]">
              Average end-to-end time:&nbsp;
              <span className="font-[700]" style={{ color: "#1AD9AD" }}>under 2 minutes</span>
              &nbsp;· vs 15+ minutes without Payli
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
