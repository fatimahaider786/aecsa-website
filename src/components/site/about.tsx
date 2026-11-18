"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { BookingDialog } from "@/components/site/booking-dialog";
import { Reveal } from "@/components/site/reveal";
import { Counter, ParallaxY } from "@/components/site/motion-primitives";
import { SITE } from "@/lib/site";
import {
  Award,
  BadgeCheck,
  CalendarCheck,
  HeartHandshake,
  Medal,
  Target,
} from "lucide-react";

const CREDENTIALS = [
  {
    icon: Medal,
    title: "Sitara-i-Imtiaz",
    text: "One of Pakistan's highest civilian honours, awarded for distinguished service in medicine.",
  },
  {
    icon: BadgeCheck,
    title: "24+ Years of Surgical Experience",
    text: "Decades as a consultant eye surgeon, including distinguished service in the Pakistan Army.",
  },
  {
    icon: HeartHandshake,
    title: "Patient-First Approach",
    text: "Known for precision, dedication and honest guidance at every step of treatment.",
  },
];

export function About() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <section id="about" className="scroll-mt-24 bg-mist py-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-8">
        {/* ── Portrait with animated gradient border ─────────────── */}
        <ParallaxY distance={24} className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div
            aria-hidden
            className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-aqua/20 to-[#1b6ef3]/10 blur-lg"
          />
          <Reveal scale={0.94} y={36}>
            <div className="grad-border relative aspect-square w-full rounded-[2rem] shadow-2xl">
              <img
                src="/dr-fakhar-web.jpg"
                alt={`${SITE.surgeon.name}, ${SITE.surgeon.role} at AECSA`}
                className="relative aspect-square w-full rounded-[2rem] border border-white object-cover shadow-2xl"
              />
              {/* soft sheen sweep */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 overflow-hidden rounded-[2rem]"
              >
                <span className="absolute -left-3/4 top-0 h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-1000 ease-out hover:left-[125%]" />
              </span>
            </div>
          </Reveal>
          {/* Award badge */}
          <Reveal delay={0.35} x={-24} y={0} className="absolute -right-3 top-6 sm:-right-6">
            <div className="anim-float flex items-center gap-2 rounded-2xl border border-border bg-white px-4 py-3 shadow-xl">
              <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gold/15">
                <Award className="h-5 w-5 text-gold" aria-hidden />
                <span
                  aria-hidden
                  className="anim-pulse-ring absolute inset-0 rounded-full bg-gold/25"
                />
              </span>
              <div className="text-xs">
                <p className="font-display font-bold text-ink">Sitara-i-Imtiaz</p>
                <p className="text-muted-foreground">National honour</p>
              </div>
            </div>
          </Reveal>
          {/* Experience chip */}
          <Reveal delay={0.45} y={-20} x={0} className="absolute -bottom-5 left-6">
            <div className="rounded-2xl bg-gradient-to-br from-ink to-ink-soft px-5 py-3.5 text-white shadow-xl">
              <p className="font-display text-2xl font-bold leading-none">
                <Counter to={24} suffix="+" />
              </p>
              <p className="mt-1 text-[11px] font-medium uppercase tracking-wide text-white/70">
                Years of Experience
              </p>
            </div>
          </Reveal>
        </ParallaxY>

        {/* ── Copy ────────────────────────────────────────────────── */}
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-aqua-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-aqua-dark">
              <span className="h-1.5 w-1.5 rounded-full bg-current" />
              Meet the Surgeon
            </span>
            <h2 className="font-display mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              {SITE.surgeon.name}{" "}
              <span className="text-gold">({SITE.surgeon.honorific})</span>
            </h2>
            <p className="mt-1 text-sm font-semibold uppercase tracking-[0.12em] text-aqua-dark">
              {SITE.surgeon.role}
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {SITE.surgeon.name} is widely recognized as one of the{" "}
              <span className="font-semibold text-ink">
                best eye surgeons in Pakistan
              </span>
              , known for delivering exceptional care and advanced surgical
              solutions for a wide range of eye conditions. With years of
              experience serving in the Pakistan Army as a consultant eye
              surgeon, he has built a strong reputation for his precision,
              dedication, and patient-first approach.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-4">
            {CREDENTIALS.map((c, i) => (
              <Reveal key={c.title} delay={0.1 + i * 0.06} x={28} y={0}>
                <div className="group flex gap-4 rounded-2xl border border-border bg-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-aqua/40 hover:shadow-lg hover:shadow-aqua/10">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-aqua-soft transition-all duration-300 group-hover:scale-110 group-hover:bg-aqua">
                    <c.icon
                      className="h-5 w-5 text-aqua-dark transition-colors duration-300 group-hover:text-white"
                      aria-hidden
                    />
                  </span>
                  <div>
                    <h3 className="font-display text-base font-bold text-ink">
                      {c.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {c.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button
                onClick={() => setBookingOpen(true)}
                className="group relative h-12 overflow-hidden rounded-full bg-aqua px-6 font-semibold text-white shadow-lg shadow-aqua/25 hover:bg-aqua-dark"
              >
                <span
                  aria-hidden
                  className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full"
                />
                <CalendarCheck className="relative mr-2 h-5 w-5" aria-hidden />
                <span className="relative">Book a Consultation</span>
              </Button>
              <a
                href="#services"
                className="inline-flex h-12 items-center gap-2 rounded-full border border-ink/15 px-6 text-sm font-semibold text-ink transition-all hover:gap-3 hover:bg-white"
              >
                <Target className="h-4 w-4 text-aqua" aria-hidden />
                Explore Our Services
              </a>
            </div>
          </Reveal>
        </div>
      </div>

      <BookingDialog open={bookingOpen} onOpenChange={setBookingOpen} />
    </section>
  );
}
