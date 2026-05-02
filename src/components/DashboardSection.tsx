"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Edit2, Plus, Filter } from "lucide-react";

const TABLE_DATA = [
  { id: 33, table: "1",   status: "paid",    remaining: "0 JOD"   },
  { id: 32, table: "A-8", status: "unpaid",  remaining: "270 JOD" },
  { id: 31, table: "A-7", status: "unpaid",  remaining: "160 JOD" },
  { id: 30, table: "Y-9", status: "unpaid",  remaining: "160 JOD" },
];

const NAV_ITEMS = [
  { label: "My Profile",             section: "OVERVIEW",    active: false },
  { label: "My Tables",              section: "MANAGEMENT",  active: true  },
  { label: "Menu",                   section: "MANAGEMENT",  active: false },
  { label: "Financial Transactions", section: "OPERATIONS",  active: false },
  { label: "Help",                   section: "OPERATIONS",  active: false },
];

function DashboardMockup() {
  return (
    <div
      className="relative rounded-3xl overflow-hidden shadow-2xl"
      style={{
        background: "linear-gradient(145deg, #f8fafb 0%, #f0f4f6 100%)",
        border: "1px solid rgba(0,0,0,0.08)",
        minHeight: 420,
      }}
    >
      {/* Window chrome */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b" style={{ borderColor: "rgba(0,0,0,0.07)", background: "rgba(255,255,255,0.8)" }}>
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            {["#ff5f56","#ffbd2e","#27c93f"].map((c) => (
              <div key={c} className="w-2.5 h-2.5 rounded-full" style={{ background: c }} />
            ))}
          </div>
        </div>
        <div className="flex-1 mx-4 h-5 rounded-md flex items-center justify-center max-w-[200px]" style={{ background: "rgba(0,0,0,0.05)" }}>
          <span className="text-[8px] text-black/30 font-mono">citylabegypt.com</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 px-2 py-1 rounded-md text-[8px] font-[600]" style={{ background: "rgba(0,0,0,0.06)", color: "rgba(0,0,0,0.4)" }}>
            Hashville
          </div>
        </div>
      </div>

      {/* App layout */}
      <div className="flex" style={{ minHeight: 380 }}>
        {/* Sidebar */}
        <div className="w-36 shrink-0 p-3 border-r" style={{ borderColor: "rgba(0,0,0,0.06)", background: "rgba(255,255,255,0.6)" }}>
          {/* Logo */}
          <div className="flex items-center gap-1.5 mb-5 px-1">
            <div className="w-5 h-5 rounded-md flex items-center justify-center" style={{ background: "linear-gradient(135deg, #1AD9AD, #136A6F)" }}>
              <svg width="10" height="10" viewBox="0 0 18 18" fill="none"><path d="M4 4v10M9 4v10M14 4v10M4 9h10" stroke="white" strokeWidth="2.2" strokeLinecap="round"/></svg>
            </div>
            <span className="text-[11px] font-[800] tracking-tight" style={{ color: "#0B4952" }}>payli</span>
          </div>

          {/* Nav groups */}
          {[
            { heading: "OVERVIEW", items: ["My Profile"] },
            { heading: "MANAGEMENT", items: ["My Tables", "Menu"] },
            { heading: "OPERATIONS", items: ["Financial Transactions", "Help", "Log Out"] },
          ].map((group) => (
            <div key={group.heading} className="mb-3">
              <div className="text-[7px] font-[700] tracking-widest uppercase px-2 mb-1.5" style={{ color: "rgba(0,0,0,0.3)" }}>
                {group.heading}
              </div>
              {group.items.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-1.5 px-2 py-1.5 rounded-lg mb-0.5 text-[9px] font-[500]"
                  style={{
                    background: item === "My Tables" ? "rgba(26,217,173,0.1)" : "transparent",
                    color: item === "My Tables" ? "#0B4952" : "rgba(0,0,0,0.45)",
                    fontWeight: item === "My Tables" ? 700 : 500,
                  }}
                >
                  <div className="w-3 h-3 rounded-sm" style={{ background: item === "My Tables" ? "rgba(26,217,173,0.3)" : "rgba(0,0,0,0.08)" }} />
                  {item}
                </div>
              ))}
            </div>
          ))}

          {/* Version badge */}
          <div className="mt-auto pt-3 border-t text-[7px] text-center" style={{ borderColor: "rgba(0,0,0,0.06)", color: "rgba(0,0,0,0.25)" }}>
            Payli v1.0.11
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 p-4 overflow-hidden">
          {/* Top bar */}
          <div className="flex items-center justify-between mb-3">
            <div>
              <h2 className="text-[13px] font-[800]" style={{ color: "#0B4952" }}>My Tables</h2>
              <p className="text-[8px] mt-0.5" style={{ color: "rgba(0,0,0,0.4)" }}>Organize and oversee your venue&apos;s seating layout.</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-lg" style={{ background: "rgba(0,0,0,0.05)" }}>
                <Filter size={10} style={{ color: "rgba(0,0,0,0.4)" }} />
              </div>
              <div className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-[9px] font-[700]"
                style={{ background: "linear-gradient(135deg, #0B4952, #136A6F)", color: "white" }}>
                <Plus size={9} />
                Add Table
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="rounded-xl overflow-hidden" style={{ border: "1px solid rgba(0,0,0,0.07)" }}>
            {/* Header */}
            <div className="grid grid-cols-5 px-3 py-2" style={{ background: "#0B4952" }}>
              {["#", "QR Code", "Table Number", "Payment Status", "Remaining Amount", "Actions"].slice(0, 5).map((h) => (
                <div key={h} className="text-[7px] font-[700] uppercase tracking-wide text-white/70">{h}</div>
              ))}
            </div>
            {/* Rows */}
            {TABLE_DATA.map((row, i) => (
              <div
                key={row.id}
                className="grid grid-cols-5 items-center px-3 py-2.5 border-b last:border-0"
                style={{ borderColor: "rgba(0,0,0,0.05)", background: i % 2 === 0 ? "rgba(255,255,255,0.8)" : "rgba(248,250,252,0.8)" }}
              >
                <div className="text-[9px] font-[500]" style={{ color: "rgba(0,0,0,0.5)" }}>{row.id}</div>
                {/* QR */}
                <div className="w-7 h-7 rounded-sm" style={{ background: "rgba(0,0,0,0.08)" }}>
                  <div className="w-full h-full rounded-sm" style={{
                    background: `repeating-linear-gradient(0deg, rgba(0,0,0,0.2) 0px, rgba(0,0,0,0.2) 2px, transparent 2px, transparent 4px),
                                 repeating-linear-gradient(90deg, rgba(0,0,0,0.2) 0px, rgba(0,0,0,0.2) 2px, transparent 2px, transparent 4px)`
                  }} />
                </div>
                <div className="text-[9px] font-[600]" style={{ color: "rgba(0,0,0,0.65)" }}>{row.table}</div>
                <div>
                  <span
                    className="px-2 py-0.5 rounded-full text-[8px] font-[700]"
                    style={{
                      background: row.status === "paid" ? "rgba(26,217,173,0.15)" : "rgba(255,90,90,0.15)",
                      color: row.status === "paid" ? "#0B7A5E" : "#CC3333",
                    }}
                  >
                    {row.status === "paid" ? "Fully Paid" : "Not Paid"}
                  </span>
                </div>
                <div className="text-[9px] font-[700]" style={{ color: "rgba(0,0,0,0.65)" }}>{row.remaining}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DashboardSection() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 90%", "end 30%"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [40, -20]);
  const scale = useTransform(scrollYProgress, [0, 0.4], [0.94, 1]);

  return (
    <section ref={sectionRef} className="relative py-28 md:py-36 overflow-hidden">
      {/* Background glows */}
      <div
        className="blob absolute w-[600px] h-[500px] -bottom-20 left-0 opacity-20"
        style={{ background: "radial-gradient(ellipse, rgba(26,217,173,0.1) 0%, transparent 70%)" }}
        aria-hidden="true"
      />
      <div
        className="blob absolute w-[400px] h-[400px] top-0 right-0 opacity-15"
        style={{ background: "radial-gradient(circle, rgba(19,106,111,0.15) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 md:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
          <p className="eyebrow mb-4">Product experience</p>
          <h2 className="display-lg text-white mb-4">
            Your restaurant,{" "}
            <span className="gradient-text">in full control.</span>
          </h2>
          <p className="text-lg text-white/45 max-w-xl mx-auto">
            A clean, intuitive dashboard gives you real-time visibility across every table — payments, bills, and status at a glance.
          </p>
        </motion.div>

        {/* Dashboard mockup with parallax */}
        <motion.div
          style={{ y, scale }}
          className="relative mx-auto max-w-4xl"
        >
          {/* Outer glow ring */}
          <div
            className="absolute -inset-4 rounded-[2.5rem] pointer-events-none animate-glow"
            style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(26,217,173,0.08) 0%, transparent 70%)", filter: "blur(20px)" }}
            aria-hidden="true"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <DashboardMockup />
          </motion.div>
        </motion.div>

        {/* Feature highlights below */}
        <div className="grid sm:grid-cols-3 gap-5 mt-14">
          {[
            { title: "Real-time table status", desc: "See payment status, remaining balance, and active guests across every table instantly." },
            { title: "QR management", desc: "Generate, download, and print QR codes for each table from a single dashboard." },
            { title: "Financial overview", desc: "Track revenue, settlements, and transaction history with clean, exportable reports." },
          ].map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.3 + i * 0.08 }}
              className="glass-card rounded-2xl p-5"
            >
              <div
                className="w-8 h-8 rounded-xl mb-4 flex items-center justify-center"
                style={{ background: "rgba(26,217,173,0.1)", border: "1px solid rgba(26,217,173,0.15)" }}
              >
                <Edit2 size={14} strokeWidth={1.8} style={{ color: "#1AD9AD" }} />
              </div>
              <h4 className="text-sm font-[700] text-white mb-2">{feat.title}</h4>
              <p className="text-xs text-white/45 leading-relaxed">{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
