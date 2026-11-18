"use client";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/reveal";
import { FloatingOrb } from "@/components/site/motion-primitives";
import { SITE } from "@/lib/site";
import { CalendarCheck, MessageCircle, PhoneCall, Sparkles } from "lucide-react";

export function CtaBand() {
  return (
    <section className="bg-white pb-16 lg:pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal scale={0.96} y={32}>
          <div className="anim-gradient-pan relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-ink via-ink-soft to-ink-deep px-6 py-12 text-center sm:px-12 lg:py-16">
            <div
              aria-hidden
              className="absolute inset-0 bg-[radial-gradient(700px_350px_at_80%_0%,rgba(14,147,173,0.35),transparent_60%),radial-gradient(500px_300px_at_10%_100%,rgba(27,110,243,0.25),transparent_55%)]"
            />
            <FloatingOrb className="left-[12%] top-[10%] h-56 w-56 bg-aqua/25" duration={15} />
            <FloatingOrb className="bottom-[12%] right-[15%] h-48 w-48 bg-gold/15" delay={3} duration={18} />
            <div
              aria-hidden
              className="absolute inset-0 opacity-[0.05] [background-image:radial-gradient(rgba(255,255,255,0.9)_1px,transparent_1px)] [background-size:20px_20px]"
            />
            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-aqua-soft backdrop-blur">
                <Sparkles className="anim-float h-3.5 w-3.5" aria-hidden />
                Your Vision Matters!
              </span>
              <h2 className="font-display mx-auto mt-5 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Take the first step towards{" "}
                <span className="text-shimmer">clearer, healthier vision</span>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/70">
                Book your comprehensive eye checkup at AECSA today — expert
                care, honest advice, and modern facilities under one roof.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <a href={SITE.phoneHref}>
                  <Button
                    size="lg"
                    className="group relative h-13 overflow-hidden rounded-full bg-aqua px-7 text-base font-semibold text-white shadow-xl shadow-aqua/30 transition-all hover:scale-[1.03] hover:bg-aqua-dark"
                  >
                    <span
                      aria-hidden
                      className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full"
                    />
                    <PhoneCall className="relative mr-2 h-5 w-5" aria-hidden />
                    <span className="relative">Call Now — {SITE.phoneDisplay}</span>
                  </Button>
                </a>
                <a href={SITE.whatsappHref} target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-13 rounded-full border-white/25 bg-white/5 px-7 text-base font-semibold text-white backdrop-blur transition-all hover:scale-[1.03] hover:bg-white/15 hover:text-white"
                  >
                    <MessageCircle className="mr-2 h-5 w-5 text-[#4ade80]" aria-hidden />
                    WhatsApp Us
                  </Button>
                </a>
                <a href="#contact">
                  <Button
                    size="lg"
                    variant="ghost"
                    className="h-13 rounded-full px-7 text-base font-semibold text-white/80 hover:bg-white/10 hover:text-white"
                  >
                    <CalendarCheck className="mr-2 h-5 w-5" aria-hidden />
                    Book Online
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
