"use client";

import { Reveal, SectionHeading } from "@/components/site/reveal";
import { FloatingOrb, TiltCard } from "@/components/site/motion-primitives";
import {
  Compass,
  Gem,
  Lightbulb,
  Microscope,
  ShieldCheck,
  Target,
  UserRoundCheck,
} from "lucide-react";

const REASONS = [
  {
    icon: Microscope,
    title: "Innovative Techniques",
    text: "Modern micro-surgical and laser techniques for safer procedures and faster visual recovery.",
  },
  {
    icon: UserRoundCheck,
    title: "Patient-Focused Care",
    text: "Unhurried consultations, clear explanations and treatment plans centred on your lifestyle.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Expertise",
    text: "Led by a Sitara-i-Imtiaz awarded surgeon with 24+ years of consultant-level experience.",
  },
  {
    icon: Lightbulb,
    title: "Advanced Solutions",
    text: "Evidence-based surgical solutions for cataract, refractive errors, glaucoma and uveitis.",
  },
];

const VMV = [
  {
    icon: Compass,
    label: "Our Vision",
    text: "To become the leading center of excellence in advanced eye care and surgical solutions, empowering patients with clear vision and a brighter future through innovation, compassion, and precision.",
  },
  {
    icon: Target,
    label: "Our Mission",
    text: "To deliver exceptional, affordable and honest eye care — combining surgical excellence with genuine human warmth so every patient sees their world clearly.",
  },
  {
    icon: Gem,
    label: "Our Values",
    text: "Precision in every procedure, integrity in every recommendation, compassion in every interaction, and innovation in everything we do.",
  },
];

export function WhyUs() {
  return (
    <>
      {/* ── Why choose us ─────────────────────────────────────────── */}
      <section className="bg-mist py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why Choose AECSA"
            title="Innovative Techniques & Patient-Focused Care"
            subtitle="A simple promise: world-class surgical standards with the personal attention every patient deserves."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {REASONS.map((r, i) => (
              <Reveal key={r.title} delay={i * 0.08} y={36} className="h-full">
                <TiltCard max={6} className="h-full">
                  <div className="group relative h-full overflow-hidden rounded-3xl border border-border bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-aqua/10">
                    {/* top glow line */}
                    <span
                      aria-hidden
                      className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-aqua/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    />
                    <span className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-aqua to-aqua-dark shadow-md shadow-aqua/30 transition-transform duration-300 group-hover:scale-110">
                      <r.icon className="h-6 w-6 text-white" aria-hidden />
                      <span
                        aria-hidden
                        className="anim-pulse-ring absolute inset-0 rounded-full bg-aqua/40"
                      />
                    </span>
                    <h3 className="font-display mt-4 text-base font-bold text-ink">
                      {r.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {r.text}
                    </p>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Vision / Mission / Values ─────────────────────────────── */}
      <section className="relative overflow-hidden bg-ink py-16 lg:py-24">
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(900px_500px_at_110%_10%,rgba(14,147,173,0.3),transparent_55%),radial-gradient(700px_400px_at_-10%_100%,rgba(27,110,243,0.2),transparent_55%)]"
        />
        <FloatingOrb className="left-[10%] top-[20%] h-64 w-64 bg-aqua/20" duration={17} />
        <FloatingOrb className="bottom-[10%] right-[8%] h-72 w-72 bg-[#1b6ef3]/15" delay={3} duration={21} />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Purpose"
            title="Vision, Mission & Values"
            dark
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {VMV.map((v, i) => (
              <Reveal key={v.label} delay={i * 0.1} y={40} className="h-full">
                <div className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-aqua/40 hover:bg-white/10 hover:shadow-2xl hover:shadow-aqua/10">
                  {/* corner glow */}
                  <span
                    aria-hidden
                    className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-aqua/20 blur-2xl transition-all duration-500 group-hover:bg-aqua/35"
                  />
                  <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-aqua/20 transition-all duration-300 group-hover:scale-110 group-hover:bg-aqua">
                    <v.icon
                      className="h-6 w-6 text-aqua-soft transition-colors duration-300 group-hover:text-white"
                      aria-hidden
                    />
                  </span>
                  <h3 className="font-display mt-4 text-xl font-bold text-white">
                    {v.label}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/70 sm:text-base">
                    {v.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
