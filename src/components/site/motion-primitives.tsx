"use client";

import {
  motion,
  useInView,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  animate,
} from "framer-motion";
import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

/* ────────────────────────────────────────────────────────────────
   ScrollProgress — thin gradient bar fixed at the very top
──────────────────────────────────────────────────────────────── */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[70] h-[3px] origin-left bg-gradient-to-r from-aqua via-[#38bdf8] to-gold"
    />
  );
}

/* ────────────────────────────────────────────────────────────────
   Counter — animates a number when scrolled into view
──────────────────────────────────────────────────────────────── */
export function Counter({
  to,
  suffix = "",
  prefix = "",
  duration = 1.6,
  className,
}: {
  to: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value}
      {suffix}
    </span>
  );
}

/* ────────────────────────────────────────────────────────────────
   AnimatedWords — staggered word-by-word entrance for headlines
──────────────────────────────────────────────────────────────── */
export function AnimatedWords({
  text,
  className,
  wordClassName,
  delay = 0,
  highlight = [],
  highlightClassName = "",
}: {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
  /** words to render with a highlight class, matched case-insensitively */
  highlight?: string[];
  highlightClassName?: string;
}) {
  const words = text.split(" ");
  const hl = highlight.map((w) => w.toLowerCase());

  return (
    <span className={className}>
      {words.map((word, i) => {
        const isHl = hl.includes(word.toLowerCase().replace(/[^a-z']/g, ""));
        return (
          <span
            key={`${word}-${i}`}
            className="inline-block overflow-hidden pb-[0.08em] align-bottom"
          >
            <motion.span
              className={`inline-block ${wordClassName ?? ""} ${
                isHl ? highlightClassName : ""
              }`}
              initial={{ y: "110%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.65,
                delay: delay + i * 0.075,
                ease: [0.21, 0.65, 0.35, 1],
              }}
            >
              {word}
              {i < words.length - 1 ? "\u00A0" : ""}
            </motion.span>
          </span>
        );
      })}
    </span>
  );
}

/* ────────────────────────────────────────────────────────────────
   SpotlightCard — card with a mouse-tracked radial glow
──────────────────────────────────────────────────────────────── */
export function SpotlightCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
  }

  return (
    <div ref={ref} onMouseMove={onMove} className={`spotlight-card ${className}`}>
      {children}
    </div>
  );
}

/* ────────────────────────────────────────────────────────────────
   Marquee — infinite horizontal ticker (pauses on hover)
──────────────────────────────────────────────────────────────── */
export function Marquee({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden ${className}`} aria-hidden>
      <div className="anim-marquee flex w-max items-center">
        <div className="flex items-center">{children}</div>
        <div className="flex items-center">{children}</div>
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────────────────────
   TiltCard — subtle 3D tilt that follows the cursor
──────────────────────────────────────────────────────────────── */
export function TiltCard({
  children,
  className = "",
  max = 8,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 180, damping: 20 });
  const sry = useSpring(ry, { stiffness: 180, damping: 20 });

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    ry.set(px * max * 2);
    rx.set(-py * max * 2);
  }

  function onLeave() {
    rx.set(0);
    ry.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: srx, rotateY: sry, transformPerspective: 900 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ────────────────────────────────────────────────────────────────
   FloatingOrb — soft drifting gradient blob for dark sections
──────────────────────────────────────────────────────────────── */
export function FloatingOrb({
  className = "",
  delay = 0,
  duration = 14,
}: {
  className?: string;
  delay?: number;
  duration?: number;
}) {
  return (
    <motion.div
      aria-hidden
      className={`pointer-events-none absolute rounded-full blur-3xl ${className}`}
      animate={{
        x: [0, 36, -28, 0],
        y: [0, -30, 22, 0],
        scale: [1, 1.12, 0.94, 1],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

/* ────────────────────────────────────────────────────────────────
   ParallaxY — moves children vertically as the page scrolls
──────────────────────────────────────────────────────────────── */
export function ParallaxY({
  children,
  className,
  distance = 60,
}: {
  children: ReactNode;
  className?: string;
  distance?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [distance, -distance]);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}
