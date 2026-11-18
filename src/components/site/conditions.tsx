"use client";

import { ArrowRight, CloudRain, Gauge, Glasses, Sunrise } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/site/reveal";
import { SpotlightCard } from "@/components/site/motion-primitives";

const CONDITIONS = [
  {
    icon: CloudRain,
    name: "Cataract",
    blurb:
      "Clouding of the eye's natural lens — vision becomes blurry, glare increases and colours fade.",
    signs: ["Blurry or misty vision", "Glare at night", "Frequent spectacle change"],
  },
  {
    icon: Gauge,
    name: "Glaucoma",
    blurb:
      "Often silent damage to the optic nerve, usually from raised eye pressure — a leading cause of irreversible blindness.",
    signs: ["Usually no early symptoms", "Loss of side vision", "Family history matters"],
  },
  {
    icon: Sunrise,
    name: "Uveitis",
    blurb:
      "Inflammation inside the eye that can cause pain, redness and light sensitivity — needs specialist care.",
    signs: ["Eye redness & pain", "Light sensitivity", "Floaters or blurred vision"],
  },
  {
    icon: Glasses,
    name: "Refractive Errors",
    blurb:
      "Short-sight, long-sight and astigmatism — correctable with glasses or laser procedures such as LASIK.",
    signs: ["Squinting to focus", "Headaches", "Tired eyes on screens"],
  },
];

export function Conditions() {
  return (
    <section id="conditions" className="scroll-mt-24 bg-mist py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Eye Conditions"
          title="Understand Your Eyes"
          subtitle="A quick guide to the conditions we treat most often. Early detection protects sight — when in doubt, get checked."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CONDITIONS.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.08} y={36} className="h-full">
              <SpotlightCard className="group h-full rounded-3xl border border-border bg-white transition-all duration-300 hover:-translate-y-1.5 hover:border-aqua/40 hover:shadow-lg hover:shadow-aqua/10">
                <article className="relative flex h-full flex-col p-6">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-aqua-soft transition-all duration-300 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-aqua">
                    <c.icon
                      className="h-6 w-6 text-aqua-dark transition-colors duration-300 group-hover:text-white"
                      aria-hidden
                    />
                  </span>
                  <h3 className="font-display mt-4 text-lg font-bold text-ink">
                    {c.name}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {c.blurb}
                  </p>
                  <ul className="mt-4 space-y-1.5 border-t border-border pt-4">
                    {c.signs.map((s, si) => (
                      <Reveal
                        key={s}
                        delay={0.15 + si * 0.08}
                        x={16}
                        y={0}
                      >
                        <li className="flex items-start gap-2 text-xs font-medium text-ink/70">
                          <span
                            className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-aqua transition-transform duration-300 group-hover:scale-150"
                            aria-hidden
                          />
                          {s}
                        </li>
                      </Reveal>
                    ))}
                  </ul>
                </article>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-10 text-center text-sm text-muted-foreground">
            Experiencing any of these symptoms?{" "}
            <a
              href="#contact"
              className="group inline-flex items-center gap-1 font-semibold text-aqua-dark underline-offset-4 transition-all hover:gap-2 hover:underline"
            >
              Ask our specialists
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
