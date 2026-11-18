"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  x?: number;
  scale?: number;
  className?: string;
};

export function Reveal({
  children,
  delay = 0,
  y = 28,
  x = 0,
  scale = 1,
  className,
}: RevealProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y, x, scale }}
      whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, delay, ease: [0.21, 0.65, 0.35, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  dark = false,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  dark?: boolean;
}) {
  return (
    <Reveal
      className={`max-w-2xl ${
        align === "center" ? "mx-auto text-center" : "text-left"
      }`}
    >
      <span
        className={`relative inline-flex items-center gap-2 overflow-hidden rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] ${
          dark
            ? "border border-white/15 bg-white/10 text-aqua-soft backdrop-blur"
            : "bg-aqua-soft text-aqua-dark"
        }`}
      >
        <motion.span
          className="h-1.5 w-1.5 rounded-full bg-current"
          animate={{ scale: [1, 1.6, 1], opacity: [1, 0.6, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        {eyebrow}
      </span>
      <h2
        className={`font-display mt-4 text-3xl font-bold tracking-tight sm:text-4xl ${
          dark ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {/* animated underline accent */}
      <motion.span
        aria-hidden
        className={`mt-3 block h-[3px] w-24 rounded-full bg-gradient-to-r from-aqua to-gold ${
          align === "center" ? "mx-auto" : ""
        }`}
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.25, ease: [0.21, 0.65, 0.35, 1] }}
        style={{ transformOrigin: align === "center" ? "center" : "left" }}
      />
      {subtitle ? (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            dark ? "text-white/70" : "text-muted-foreground"
          }`}
        >
          {subtitle}
        </p>
      ) : null}
    </Reveal>
  );
}
