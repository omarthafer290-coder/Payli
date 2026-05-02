"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Users, BarChart3, Shield, Database } from "lucide-react";

const VALUES = [
  {
    num: "01",
    title: "Seat More Guests",
    body: "Slash checkout time from 15 minutes to under 2. Regain hours of floor time every week and increase your revenue during peak rushes.",
    icon: Users,
    metric: "+31%",
    metricLabel: "more covers per shift",
  },
  {
    num: "02",
    title: "Optimize Staff Performance",
    body: "Free your servers from running cards and printing receipts. Let them focus on upselling and providing a premium guest experience.",
    icon: BarChart3,
    metric: "15 min",
    metricLabel: "saved every table turn",
  },
  {
    num: "03",
    title: "Build Guest Trust",
    body: "Eliminate the risk of fraud by keeping credit cards in the guest's sight. Payli uses encrypted, PCI-compliant processing for total security.",
    icon: Shield,
    metric: "PCI",
    metricLabel: "DSS Compliant",
  },
  {
    num: "04",
    title: "Own Your Data",
    body: "Capture digital touchpoints and instant feedback with every payment. Turn anonymous diners into loyal regulars with integrated marketing tools.",
    icon: Database,
    metric: "100%",
    metricLabel: "your customer data",
  },
];

export default function AddedValueSection() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section className="relative py-28 md:py-36 overflow-hidden">
      {/* Background glow */}
      <div
        className="blob absolute w-[700px] h-[500px] top-1/2 right-0 -translate-y-1/2 opacity-15"
        style={{ background: "radial-gradient(ellipse, rgba(19,106,111,0.25) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 md:px-10">
        {/* Header */}
        <div ref={headerRef} className="mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55 }}
          >
            <p className="eyebrow mb-4">The added value</p>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <h2 className="display-lg text-white max-w-lg">
                Built for your restaurant&apos;s
                <br />
                <span className="gradient-text">bottom line.</span>
              </h2>
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-[600] shrink-0"
                style={{
                  background: "rgba(26,217,173,0.07)",
                  border: "1px solid rgba(26,217,173,0.15)",
                  color: "#1AD9AD",
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full animate-pulse"
                  style={{ background: "#1AD9AD", boxShadow: "0 0 6px rgba(26,217,173,0.8)" }}
                />
                Values
              </div>
            </div>
          </motion.div>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {VALUES.map((v, i) => {
            const Icon = v.icon;
            return (
              <ValueCard key={v.num} value={v} index={i} Icon={Icon} />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ValueCard({
  value,
  index,
  Icon,
}: {
  value: typeof VALUES[0];
  index: number;
  Icon: React.ElementType;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.09, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <motion.div
        whileHover={{ y: -7, scale: 1.02 }}
        transition={{ duration: 0.28, ease: [0.34, 1.56, 0.64, 1] }}
        className="glass-card rounded-3xl p-7 h-full flex flex-col relative overflow-hidden group"
        style={{ minHeight: 280 }}
      >
        {/* Large number watermark */}
        <span
          className="absolute -top-3 -left-1 text-[7rem] font-[900] select-none leading-none pointer-events-none"
          style={{ color: "rgba(26,217,173,0.04)" }}
        >
          {value.num}
        </span>

        {/* Icon */}
        <div
          className="w-11 h-11 rounded-2xl flex items-center justify-center mb-5 relative shrink-0 transition-all duration-300 group-hover:scale-110"
          style={{
            background: "linear-gradient(135deg, rgba(26,217,173,0.13), rgba(19,106,111,0.07))",
            border: "1px solid rgba(26,217,173,0.18)",
          }}
        >
          <Icon size={20} strokeWidth={1.75} style={{ color: "#1AD9AD" }} />
        </div>

        {/* Small num label */}
        <span className="text-[10px] font-[700] tracking-widest uppercase mb-2" style={{ color: "rgba(26,217,173,0.4)" }}>
          {value.num}
        </span>

        <h3 className="text-lg font-[700] text-white mb-3 tracking-tight leading-snug">
          {value.title}
        </h3>

        <p className="text-sm text-white/45 leading-relaxed flex-1">{value.body}</p>

        {/* Metric */}
        <div className="mt-6 pt-5 border-t border-white/[0.05] flex items-end justify-between">
          <div>
            <div
              className="text-2xl font-[900] tracking-tight"
              style={{
                background: "linear-gradient(125deg, #1AD9AD 0%, #25AA98 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {value.metric}
            </div>
            <p className="text-[10px] text-white/30 font-[500] mt-0.5">{value.metricLabel}</p>
          </div>

          {/* Arrow */}
          <motion.div
            whileHover={{ x: 3, y: -3 }}
            transition={{ duration: 0.2 }}
            className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: "rgba(26,217,173,0.1)",
              border: "1px solid rgba(26,217,173,0.18)",
            }}
          >
            <ArrowUpRight size={15} style={{ color: "#1AD9AD" }} />
          </motion.div>
        </div>

        {/* Hover glow */}
        <div
          className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 40% 30%, rgba(26,217,173,0.06) 0%, transparent 65%)" }}
          aria-hidden="true"
        />
      </motion.div>
    </motion.div>
  );
}
