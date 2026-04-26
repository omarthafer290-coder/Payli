"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Check, QrCode, SplitSquareVertical } from "lucide-react";

const BILL_ITEMS = [
  { name: "Wagyu Ribeye",         qty: 1, price: 185 },
  { name: "Burrata Salad",        qty: 2, price: 58  },
  { name: "Truffle Fries",        qty: 1, price: 45  },
  { name: "Sparkling Water",      qty: 2, price: 18  },
  { name: "Espresso",             qty: 3, price: 22  },
];
const SUBTOTAL = BILL_ITEMS.reduce((s, i) => s + i.price, 0);
const VAT      = Math.round(SUBTOTAL * 0.05);
const TOTAL    = SUBTOTAL + VAT;

type Stage = "bill" | "paying" | "paid";

export default function PhoneMockup() {
  const [stage, setStage] = useState<Stage>("bill");

  useEffect(() => {
    const timers = [
      setTimeout(() => setStage("paying"), 3200),
      setTimeout(() => setStage("paid"),   4600),
      setTimeout(() => setStage("bill"),   7000),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    if (stage !== "bill") return;
    const timers = [
      setTimeout(() => setStage("paying"), 3200),
      setTimeout(() => setStage("paid"),   4600),
      setTimeout(() => setStage("bill"),   7000),
    ];
    return () => timers.forEach(clearTimeout);
  }, [stage]);

  return (
    <div className="relative flex justify-center items-center">
      {/* Outer glow */}
      <div
        className="absolute w-72 h-[560px] rounded-[42px] animate-glow pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(26,217,173,0.18) 0%, transparent 70%)", filter: "blur(24px)" }}
        aria-hidden="true"
      />

      {/* Phone shell */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="relative w-[270px]"
        style={{ filter: "drop-shadow(0 40px 64px rgba(0,0,0,0.6)) drop-shadow(0 0 24px rgba(26,217,173,0.1))" }}
      >
        {/* Phone frame */}
        <div
          className="relative rounded-[40px] overflow-hidden"
          style={{
            background: "linear-gradient(145deg, #16272f 0%, #0d1c23 60%, #091520 100%)",
            border: "1.5px solid rgba(255,255,255,0.1)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08), inset 0 -1px 0 rgba(0,0,0,0.3)",
          }}
        >
          {/* Camera notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-7 z-10 flex items-center justify-center">
            <div
              className="rounded-b-2xl"
              style={{ width: 88, height: 24, background: "linear-gradient(145deg, #10212a, #0a1820)", border: "1px solid rgba(255,255,255,0.06)" }}
            />
          </div>

          {/* Screen content */}
          <div
            className="mx-[3px] mt-[3px] mb-[3px] rounded-[38px] overflow-hidden"
            style={{ background: "#071015", minHeight: 560 }}
          >
            {/* Status bar */}
            <div className="flex items-center justify-between px-5 pt-8 pb-1">
              <span className="text-[10px] font-semibold text-white/60">9:41</span>
              <div className="flex items-center gap-1.5">
                <div className="flex gap-0.5">
                  {[3,4,4,3].map((h, i) => (
                    <div key={i} className="w-[3px] rounded-full bg-white/60" style={{ height: h }} />
                  ))}
                </div>
                <div className="text-[9px] text-white/60">WiFi</div>
                <div
                  className="w-6 h-3 rounded-sm border border-white/40 flex items-center justify-end px-0.5"
                >
                  <div className="w-4 h-1.5 rounded-sm" style={{ background: "#1AD9AD" }} />
                </div>
              </div>
            </div>

            {/* App header */}
            <div className="flex items-center justify-between px-5 pt-2 pb-4">
              <div>
                <div className="flex items-center gap-1.5 mb-0.5">
                  <div
                    className="w-5 h-5 rounded-md flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg,#1AD9AD,#136A6F)" }}
                  >
                    <svg width="10" height="10" viewBox="0 0 18 18" fill="none">
                      <path d="M4 4v10M9 4v10M14 4v10M4 9h10" stroke="#020c10" strokeWidth="2.2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <span
                    className="text-sm font-[800] tracking-tight"
                    style={{
                      background: "linear-gradient(125deg,#1AD9AD,#25AA98)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    Payli
                  </span>
                </div>
                <p className="text-[10px] text-white/40 font-medium tracking-wide">MAZAJ RESTAURANT · TABLE 07</p>
              </div>
              <div
                className="px-2 py-1 rounded-full text-[9px] font-[700] tracking-wide"
                style={{ background: "rgba(26,217,173,0.12)", color: "#1AD9AD", border: "1px solid rgba(26,217,173,0.2)" }}
              >
                ACTIVE
              </div>
            </div>

            {/* Main content area */}
            <AnimatePresence mode="wait">
              {stage === "bill" && (
                <motion.div
                  key="bill"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.28 }}
                  className="px-4 pb-6"
                >
                  {/* Bill items */}
                  <div
                    className="rounded-2xl p-3 mb-3"
                    style={{ background: "rgba(26,217,173,0.04)", border: "1px solid rgba(26,217,173,0.08)" }}
                  >
                    <p className="text-[9px] font-[600] uppercase tracking-widest text-white/30 mb-2.5 px-1">Your Order</p>
                    {BILL_ITEMS.map((item) => (
                      <div key={item.name} className="flex justify-between items-center py-1.5 border-b border-white/[0.04] last:border-0">
                        <div className="flex items-center gap-1.5">
                          <span className="text-[9px] text-white/30 w-4">×{item.qty}</span>
                          <span className="text-[11px] text-white/70 font-medium">{item.name}</span>
                        </div>
                        <span className="text-[11px] text-white/60 font-[500] font-mono">{item.price}</span>
                      </div>
                    ))}
                    {/* Totals */}
                    <div className="mt-2 pt-2 border-t border-white/10 space-y-1">
                      <div className="flex justify-between">
                        <span className="text-[10px] text-white/40">Subtotal</span>
                        <span className="text-[10px] text-white/50 font-mono">AED {SUBTOTAL}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[10px] text-white/40">VAT (5%)</span>
                        <span className="text-[10px] text-white/50 font-mono">AED {VAT}</span>
                      </div>
                      <div className="flex justify-between pt-1">
                        <span className="text-[13px] font-[700] text-white">Total</span>
                        <span
                          className="text-[14px] font-[800] font-mono"
                          style={{ color: "#1AD9AD" }}
                        >
                          AED {TOTAL}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Pay button */}
                  <button
                    onClick={() => setStage("paying")}
                    className="w-full py-3.5 rounded-2xl text-[13px] font-[800] text-center transition-opacity hover:opacity-90"
                    style={{
                      background: "linear-gradient(135deg, #1AD9AD 0%, #18b896 100%)",
                      color: "#020c10",
                      boxShadow: "0 8px 24px rgba(26,217,173,0.3)",
                    }}
                  >
                    Pay AED {TOTAL}
                  </button>

                  {/* Split row */}
                  <div className="flex items-center justify-center gap-2 mt-3">
                    <SplitSquareVertical size={11} className="text-white/30" />
                    <span className="text-[10px] text-white/35 font-medium">Split ÷ 2</span>
                    <span className="text-white/20 text-[10px]">·</span>
                    <span className="text-[10px] text-white/35 font-medium">Split ÷ 3</span>
                    <span className="text-white/20 text-[10px]">·</span>
                    <span className="text-[10px] text-white/35 font-medium">Custom</span>
                  </div>

                  {/* Apple / Google Pay row */}
                  <div className="flex gap-2 mt-3">
                    {["   Pay", "G Pay"].map((label) => (
                      <div
                        key={label}
                        className="flex-1 py-2.5 rounded-xl text-center text-[11px] font-[600] text-white/50"
                        style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
                      >
                        {label}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {stage === "paying" && (
                <motion.div
                  key="paying"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.28 }}
                  className="flex flex-col items-center justify-center px-5 pb-10 pt-4"
                >
                  <div className="w-20 h-20 rounded-full mb-6 flex items-center justify-center relative"
                    style={{ background: "rgba(26,217,173,0.08)", border: "1px solid rgba(26,217,173,0.2)" }}
                  >
                    <QrCode size={36} style={{ color: "rgba(26,217,173,0.7)" }} strokeWidth={1.2} />
                    {/* Scan line */}
                    <div
                      className="absolute inset-2 overflow-hidden rounded-xl"
                      aria-hidden="true"
                    >
                      <div
                        className="animate-scan w-full h-[2px] rounded-full"
                        style={{ background: "linear-gradient(90deg, transparent, #1AD9AD, transparent)" }}
                      />
                    </div>
                  </div>
                  <p className="text-[13px] font-[700] text-white mb-1">Processing payment…</p>
                  <p className="text-[11px] text-white/40 text-center">Connecting to bank securely</p>
                  <div className="flex gap-1.5 mt-5">
                    {[0, 0.15, 0.3].map((delay) => (
                      <motion.div
                        key={delay}
                        animate={{ opacity: [0.2, 1, 0.2] }}
                        transition={{ duration: 1, delay, repeat: Infinity }}
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ background: "#1AD9AD" }}
                      />
                    ))}
                  </div>
                </motion.div>
              )}

              {stage === "paid" && (
                <motion.div
                  key="paid"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.34, 1.56, 0.64, 1] }}
                  className="flex flex-col items-center justify-center px-5 pb-10 pt-4"
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -30 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.1, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
                    className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
                    style={{
                      background: "linear-gradient(135deg, #1AD9AD, #18b896)",
                      boxShadow: "0 0 40px rgba(26,217,173,0.4), 0 16px 32px rgba(26,217,173,0.15)",
                    }}
                  >
                    <Check size={36} strokeWidth={3} color="#020c10" />
                  </motion.div>
                  <p className="text-[15px] font-[800] text-white mb-1">Payment Complete</p>
                  <p
                    className="text-[22px] font-[900] mb-4 font-mono"
                    style={{ color: "#1AD9AD" }}
                  >
                    AED {TOTAL}
                  </p>
                  <div
                    className="w-full rounded-2xl p-3 text-center"
                    style={{ background: "rgba(26,217,173,0.06)", border: "1px solid rgba(26,217,173,0.12)" }}
                  >
                    <p className="text-[11px] text-white/50">Table closed automatically</p>
                    <p className="text-[11px] font-[600] text-mint">Enjoy your evening ✦</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Home indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 rounded-full bg-white/20" />
      </motion.div>

      {/* Floating stat chips */}
      <motion.div
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8 }}
        className="absolute -left-4 top-1/4 glass-strong rounded-2xl px-4 py-3 flex items-center gap-3"
        style={{ border: "1px solid rgba(26,217,173,0.14)" }}
      >
        <div className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0" style={{ background: "rgba(26,217,173,0.12)" }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 2v20M2 12h20" stroke="#1AD9AD" strokeWidth="2" strokeLinecap="round"/></svg>
        </div>
        <div>
          <p className="text-xs font-[800] text-white leading-none">15 min</p>
          <p className="text-[10px] text-white/40 leading-none mt-0.5">saved per table</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.0 }}
        className="absolute -right-4 bottom-1/3 glass-strong rounded-2xl px-4 py-3 flex items-center gap-3"
        style={{ border: "1px solid rgba(26,217,173,0.14)" }}
      >
        <div className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0" style={{ background: "rgba(26,217,173,0.12)" }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="#1AD9AD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
        <div>
          <p className="text-xs font-[800] text-white leading-none">+31%</p>
          <p className="text-[10px] text-white/40 leading-none mt-0.5">revenue uplift</p>
        </div>
      </motion.div>
    </div>
  );
}
