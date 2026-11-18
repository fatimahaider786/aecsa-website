"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BookingDialog } from "@/components/site/booking-dialog";
import { SITE } from "@/lib/site";
import { AnimatedWords, Counter, FloatingOrb, TiltCard } from "@/components/site/motion-primitives";
import {
  Award,
  CalendarCheck,
  ChevronDown,
  Eye,
  MessageCircle,
  Phone,
  ShieldCheck,
  Star,
} from "lucide-react";

const EASE = [0.21, 0.65, 0.35, 1] as const;

export function Hero() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <section id="home" className="relative overflow-hidden bg-ink-deep">
      {/* ── Animated backdrop ─────────────────────────────────── */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_85%_-10%,rgba(14,147,173,0.35),transparent_60%),radial-gradient(900px_500px_at_-10%_110%,rgba(27,110,243,0.25),transparent_55%)]"
      />
      <FloatingOrb className="left-[8%] top-[16%] h-72 w-72 bg-aqua/25" duration={16} />
      <FloatingOrb className="right-[6%] bottom-[22%] h-80 w-80 bg-[#1b6ef3]/20" delay={2.5} duration={19} />
      <FloatingOrb className="right-[30%] top-[8%] h-44 w-44 bg-gold/10" delay={5} duration={13} />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(rgba(255,255,255,0.9)_1px,transparent_1px)] [background-size:22px_22px]"
      />
      {/* slow rotating ring accent */}
      <div
        aria-hidden
        className="anim-spin-slow absolute -right-40 top-24 hidden h-[520px] w-[520px] rounded-full border border-dashed border-white/10 lg:block"
      />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 pb-16 pt-14 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-10 lg:px-8 lg:pb-24 lg:pt-20">
        {/* ── Copy ──────────────────────────────────────────────── */}
        <div>
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-aqua-soft backdrop-blur"
          >
            <ShieldCheck className="h-3.5 w-3.5" aria-hidden />
            State-of-the-Art Eye Care · Lahore
          </motion.span>

          <h1 className="font-display mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]">
            <AnimatedWords
              text="Advanced Eye Care &"
              className="block"
              delay={0.15}
            />
            <span className="block">
              <AnimatedWords
                text="Surgery Associates"
                delay={0.35}
                highlight={["Surgery", "Associates"]}
                highlightClassName="text-shimmer"
              />
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: EASE }}
            className="mt-5 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg"
          >
            Expert eye care &amp; surgery solutions — advanced vision care,
            built around you. Led by{" "}
            <span className="font-semibold text-white">
              Col (R) Dr. Fakhar Humayun
            </span>{" "}
            (Sitara-i-Imtiaz), one of Pakistan&apos;s most trusted eye surgeons
            with over 24 years of experience.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75, ease: EASE }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Button
              onClick={() => setBookingOpen(true)}
              size="lg"
              className="group relative h-13 overflow-hidden rounded-full bg-aqua px-7 text-base font-semibold text-white shadow-xl shadow-aqua/30 transition-all hover:bg-aqua-dark hover:shadow-2xl hover:shadow-aqua/40"
            >
              <span
                aria-hidden
                className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full"
              />
              <CalendarCheck className="relative mr-2 h-5 w-5" aria-hidden />
              <span className="relative">Book a Consultation</span>
            </Button>
            <a href={SITE.whatsappHref} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                variant="outline"
                className="h-13 rounded-full border-white/25 bg-white/5 px-7 text-base font-semibold text-white backdrop-blur transition-colors hover:bg-white/15 hover:text-white"
              >
                <MessageCircle className="mr-2 h-5 w-5 text-[#4ade80]" aria-hidden />
                WhatsApp Us
              </Button>
            </a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href={SITE.phoneHref}
              className="ml-1 flex items-center gap-2 text-sm font-medium text-white/80 transition-colors hover:text-white"
            >
              <span className="relative flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10">
                <Phone className="h-4 w-4" aria-hidden />
              </span>
              {SITE.phoneDisplay}
            </motion.a>
          </motion.div>

          {/* ── Animated trust stats ───────────────────────────── */}
          <motion.dl
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9, ease: EASE }}
            className="mt-10 grid max-w-lg grid-cols-3 divide-x divide-white/10 rounded-2xl border border-white/10 bg-white/5 backdrop-blur transition-colors hover:bg-white/10"
          >
            <div className="group px-4 py-4 text-center">
              <dt className="sr-only">Years Experience</dt>
              <dd className="font-display text-2xl font-bold text-white sm:text-3xl">
                <Counter to={24} suffix="+" />
              </dd>
              <dd className="mt-1 text-[11px] font-medium uppercase tracking-wide text-white/60 sm:text-xs">
                Years Experience
              </dd>
            </div>
            <div className="px-4 py-4 text-center">
              <dt className="sr-only">Availability</dt>
              <dd className="font-display text-2xl font-bold text-white sm:text-3xl">
                24/7
              </dd>
              <dd className="mt-1 text-[11px] font-medium uppercase tracking-wide text-white/60 sm:text-xs">
                Availability
              </dd>
            </div>
            <div className="px-4 py-4 text-center">
              <dt className="sr-only">Sitara-i-Imtiaz</dt>
              <dd className="font-display text-2xl font-bold text-gold sm:text-3xl">
                ★
              </dd>
              <dd className="mt-1 text-[11px] font-medium uppercase tracking-wide text-white/60 sm:text-xs">
                Sitara-i-Imtiaz
              </dd>
            </div>
          </motion.dl>
        </div>

        {/* ── Visual ────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45, ease: EASE }}
          className="relative lg:pl-4"
        >
          <TiltCard max={5} className="relative">
            <div
              aria-hidden
              className="absolute -inset-3 rounded-[2rem] bg-gradient-to-tr from-aqua/30 via-transparent to-[#1b6ef3]/25 blur-xl"
            />
            <img
              src="/hero-clinic.png"
              alt="AECSA advanced eye examination suite with modern diagnostic equipment"
              className="relative aspect-[4/3] w-full rounded-[2rem] border border-white/10 object-cover shadow-2xl"
            />

            {/* Floating card — surgeon */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.05, ease: EASE }}
              className="anim-float absolute -bottom-6 left-4 flex items-center gap-3 rounded-2xl border border-border bg-white p-3.5 pr-5 shadow-xl sm:left-8"
            >
              <img
                src="/dr-fakhar-web.jpg"
                alt={`Portrait of ${SITE.surgeon.name}`}
                className="h-12 w-12 rounded-xl object-cover object-top"
              />
              <div>
                <p className="font-display text-sm font-bold text-ink">
                  {SITE.surgeon.name}
                </p>
                <p className="flex items-center gap-1 text-xs font-medium text-gold">
                  <Award className="h-3.5 w-3.5" aria-hidden />
                  {SITE.surgeon.honorific} · 24+ yrs
                </p>
              </div>
            </motion.div>

            {/* Floating card — rating */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.2, ease: EASE }}
              className="anim-float-slow absolute -top-4 right-4 hidden items-center gap-2 rounded-2xl border border-border bg-white px-4 py-3 shadow-xl sm:flex"
            >
              <div className="flex" aria-hidden>
                {[...Array(5)].map((_, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: 1.35 + i * 0.09,
                      type: "spring",
                      stiffness: 300,
                      damping: 14,
                    }}
                  >
                    <Star className="h-4 w-4 fill-gold text-gold" />
                  </motion.span>
                ))}
              </div>
              <span className="text-xs font-semibold text-ink">
                Trusted by patients
              </span>
            </motion.div>

            {/* Floating badge — vision icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.5, ease: EASE }}
              className="absolute left-6 top-6 hidden items-center gap-2 rounded-full border border-white/20 bg-ink/60 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md lg:flex"
            >
              <Eye className="h-4 w-4 text-aqua-soft" aria-hidden />
              Clear vision, brighter future
            </motion.div>
          </TiltCard>
        </motion.div>
      </div>

      {/* ── Scroll cue ──────────────────────────────────────────── */}
      <motion.a
        href="#about"
        aria-label="Scroll down to learn more"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute bottom-14 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-white/50 transition-colors hover:text-white lg:flex"
      >
        <span className="text-[10px] font-semibold uppercase tracking-[0.2em]">
          Scroll
        </span>
        <ChevronDown className="anim-bounce-soft h-5 w-5" aria-hidden />
      </motion.a>

      {/* Bottom curve */}
      <div aria-hidden className="relative h-10 bg-mist [border-radius:100%_100%_0_0/48px_48px_0_0] -mt-2" />

      <BookingDialog open={bookingOpen} onOpenChange={setBookingOpen} />
    </section>
  );
}
