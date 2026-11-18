"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/site/reveal";
import { FloatingOrb } from "@/components/site/motion-primitives";

const TESTIMONIALS = [
  {
    quote:
      "Alhamdulillah, my cataract surgery went smoothly and I was seeing clearly the very next morning. The doctor explained everything patiently before the procedure.",
    name: "Muhammad A.",
    detail: "Cataract surgery patient",
  },
  {
    quote:
      "After my LASIK evaluation, the team was honest about what was best for my eyes — no pushing, just clear advice. That trust is why I recommend AECSA to family.",
    name: "Sana K.",
    detail: "LASIK consultation",
  },
  {
    quote:
      "My glaucoma was caught early during a routine checkup. Regular follow-ups and proper drops have kept my vision stable for two years now.",
    name: "Riaz H.",
    detail: "Glaucoma care",
  },
];

const AUTOPLAY_MS = 5500;

export function Testimonials() {
  const [[index, direction], setIndex] = useState<[number, number]>([0, 0]);
  const [paused, setPaused] = useState(false);

  const go = useCallback((dir: number) => {
    setIndex(([prev]) => [
      (prev + dir + TESTIMONIALS.length) % TESTIMONIALS.length,
      dir,
    ]);
  }, []);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => go(1), AUTOPLAY_MS);
    return () => clearInterval(t);
  }, [paused, go]);

  const t = TESTIMONIALS[index];

  return (
    <section id="testimonials" className="relative scroll-mt-24 overflow-hidden bg-white py-16 lg:py-24">
      <FloatingOrb className="left-[-6%] top-[30%] h-72 w-72 bg-aqua/10" duration={18} />
      <FloatingOrb className="right-[-4%] bottom-[8%] h-64 w-64 bg-gold/10" delay={4} duration={15} />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="Hear from Our Happy Patients"
          subtitle="Real experiences from the people who trust AECSA with their sight."
        />

        <Reveal delay={0.15}>
          <div
            className="relative mx-auto mt-12 max-w-3xl"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {/* glow backdrop */}
            <div
              aria-hidden
              className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-aqua/15 via-transparent to-gold/10 blur-xl"
            />

            <div className="relative overflow-hidden rounded-[2rem] border border-border bg-gradient-to-br from-white via-mist to-white p-8 shadow-xl sm:p-10">
              <Quote
                className="h-10 w-10 text-aqua/30"
                aria-hidden
              />
              <div className="mt-3 min-h-[190px] sm:min-h-[150px]">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.blockquote
                    key={index}
                    custom={direction}
                    initial={{ opacity: 0, x: direction >= 0 ? 60 : -60 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: direction >= 0 ? -40 : 40, transition: { duration: 0.28, ease: "easeIn" } }}
                    transition={{ duration: 0.45, ease: [0.21, 0.65, 0.35, 1] }}
                  >
                    <div className="flex gap-1" aria-label="5 star rating">
                      {[...Array(5)].map((_, s) => (
                        <motion.span
                          key={s}
                          initial={{ opacity: 0, scale: 0, rotate: -30 }}
                          animate={{ opacity: 1, scale: 1, rotate: 0 }}
                          transition={{ delay: 0.15 + s * 0.06, type: "spring", stiffness: 300, damping: 15 }}
                        >
                          <Star className="h-4 w-4 fill-gold text-gold" aria-hidden />
                        </motion.span>
                      ))}
                    </div>
                    <p className="mt-4 text-base leading-relaxed text-ink/80 sm:text-lg">
                      “{t.quote}”
                    </p>
                    <figcaption className="mt-6 flex items-center gap-3">
                      <span className="font-display flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-ink to-ink-soft text-sm font-bold text-white shadow-md">
                        {t.name.charAt(0)}
                      </span>
                      <span>
                        <span className="font-display block text-sm font-bold text-ink">
                          {t.name}
                        </span>
                        <span className="block text-xs text-muted-foreground">
                          {t.detail}
                        </span>
                      </span>
                    </figcaption>
                  </motion.blockquote>
                </AnimatePresence>
              </div>

              {/* Controls */}
              <div className="mt-6 flex items-center justify-between border-t border-border pt-5">
                <div className="flex gap-2" role="tablist" aria-label="Testimonial slides">
                  {TESTIMONIALS.map((item, i) => (
                    <button
                      key={item.name}
                      role="tab"
                      aria-selected={i === index}
                      aria-label={`Show testimonial from ${item.name}`}
                      onClick={() => setIndex([i, i > index ? 1 : -1])}
                      className={`relative h-2.5 rounded-full transition-all duration-300 ${
                        i === index ? "w-8 bg-aqua" : "w-2.5 bg-ink/15 hover:bg-ink/30"
                      }`}
                    >
                      {i === index && !paused ? (
                        <motion.span
                          className="absolute inset-0 origin-left rounded-full bg-aqua-dark/50"
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ duration: AUTOPLAY_MS / 1000, ease: "linear" }}
                          key={`prog-${index}`}
                        />
                      ) : null}
                    </button>
                  ))}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => go(-1)}
                    aria-label="Previous testimonial"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-ink transition-all hover:scale-105 hover:border-aqua hover:bg-aqua hover:text-white"
                  >
                    <ChevronLeft className="h-5 w-5" aria-hidden />
                  </button>
                  <button
                    onClick={() => go(1)}
                    aria-label="Next testimonial"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-ink transition-all hover:scale-105 hover:border-aqua hover:bg-aqua hover:text-white"
                  >
                    <ChevronRight className="h-5 w-5" aria-hidden />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
