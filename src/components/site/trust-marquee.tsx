"use client";

import { Marquee } from "@/components/site/motion-primitives";
import {
  Award,
  Eye,
  Glasses,
  HeartPulse,
  Microscope,
  ShieldCheck,
  Sparkles,
  Stethoscope,
} from "lucide-react";

const ITEMS = [
  { icon: Award, label: "Sitara-i-Imtiaz Awarded Surgeon" },
  { icon: ShieldCheck, label: "24+ Years of Experience" },
  { icon: Microscope, label: "Advanced Phaco Cataract Surgery" },
  { icon: Glasses, label: "Precision LASIK Correction" },
  { icon: Eye, label: "Glaucoma & Uveitis Specialists" },
  { icon: Stethoscope, label: "Comprehensive Eye Checkups" },
  { icon: HeartPulse, label: "Patient-First Care" },
  { icon: Sparkles, label: "Modern Diagnostics (OCT)" },
];

export function TrustMarquee() {
  return (
    <section
      aria-label="Highlights"
      className="relative border-y border-aqua/15 bg-gradient-to-r from-aqua-soft via-white to-aqua-soft py-4"
    >
      <Marquee>
        {ITEMS.map((item) => (
          <span
            key={item.label}
            className="mx-6 flex items-center gap-2.5 text-sm font-semibold text-ink/80"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-aqua/10">
              <item.icon className="h-4 w-4 text-aqua-dark" aria-hidden />
            </span>
            {item.label}
            <span aria-hidden className="ml-6 h-1.5 w-1.5 rounded-full bg-gold/70" />
          </span>
        ))}
      </Marquee>
      {/* edge fades */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-aqua-soft to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-aqua-soft to-transparent"
      />
    </section>
  );
}
