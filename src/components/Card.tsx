"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glass?: boolean;
}

export default function Card({ children, className = "", hover = true, glass = true }: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -6, scale: 1.01 } : undefined}
      transition={{ duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
      className={`rounded-3xl p-7 ${glass ? "glass" : ""} ${
        hover ? "cursor-pointer" : ""
      } ${className}`}
      style={hover ? { transition: "border-color 0.28s ease, box-shadow 0.28s ease" } : undefined}
    >
      {children}
    </motion.div>
  );
}
