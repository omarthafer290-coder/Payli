"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
}

const sizeClasses = {
  sm: "px-5 py-2.5 text-sm rounded-xl",
  md: "px-7 py-3.5 text-base rounded-2xl",
  lg: "px-9 py-4 text-lg rounded-2xl",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className = "",
  type = "button",
}: ButtonProps) {
  const base = `inline-flex items-center justify-center gap-2 font-semibold tracking-wide select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-mint focus-visible:ring-offset-2 focus-visible:ring-offset-darkest ${sizeClasses[size]}`;
  const variantClass = variant === "primary" ? "btn-primary" : "btn-outline";

  const inner = (
    <motion.span
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      className={`${base} ${variantClass} ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <Link href={href} className="inline-flex" tabIndex={-1}>
        {inner}
      </Link>
    );
  }

  return (
    <button type={type} className="inline-flex" style={{ background: "none", border: "none", padding: 0 }}>
      {inner}
    </button>
  );
}
