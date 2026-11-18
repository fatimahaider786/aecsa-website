"use client";

import { Reveal, SectionHeading } from "@/components/site/reveal";
import { SpotlightCard } from "@/components/site/motion-primitives";
import {
  ArrowRight,
  Eye,
  Focus,
  Layers,
  ScanEye,
  Stethoscope,
} from "lucide-react";

const SERVICES = [
  {
    icon: Layers,
    title: "Cataract Surgery",
    description:
      "Advanced micro-incision phaco cataract surgery with premium intraocular lenses, restoring crisp, clear vision.",
    tag: "Advanced Phaco",
  },
  {
    icon: Focus,
    title: "LASIK Eye Surgery",
    description:
      "Precision laser vision correction to reduce dependence on glasses and contact lenses — with thorough candidacy evaluation.",
    tag: "Laser Correction",
  },
  {
    icon: Eye,
    title: "Glaucoma & Uveitis Care",
    description:
      "Specialized diagnosis and treatment for glaucoma and uveitis — two serious conditions that can lead to vision loss if left untreated.",
    tag: "Early Detection",
  },
  {
    icon: ScanEye,
    title: "Comprehensive Eye Checkup",
    description:
      "Complete evaluation of your eye health with modern diagnostics, personalized care plans and clear guidance.",
    tag: "Full Assessment",
  },
];

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Services"
          title="Specialist Eye Care, Tailored to You"
          subtitle="From routine checkups to advanced surgery — every treatment plan is built on accurate diagnosis and honest advice."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08} y={36} className="h-full">
              <SpotlightCard className="group h-full rounded-3xl border border-border bg-white transition-all duration-300 hover:-translate-y-2 hover:border-aqua/40 hover:shadow-xl hover:shadow-aqua/10">
                <article className="relative flex h-full flex-col p-6">
                  {/* big ghost number */}
                  <span
                    aria-hidden
                    className="font-display absolute -top-1 right-4 select-none text-5xl font-extrabold text-mist transition-colors duration-300 group-hover:text-aqua-soft"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-aqua-soft transition-all duration-300 group-hover:rotate-6 group-hover:bg-aqua group-hover:shadow-lg group-hover:shadow-aqua/30">
                    <s.icon
                      className="h-7 w-7 text-aqua-dark transition-colors duration-300 group-hover:text-white"
                      aria-hidden
                    />
                  </span>
                  <span className="mt-5 w-fit rounded-full bg-mist px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-aqua-dark">
                    {s.tag}
                  </span>
                  <h3 className="font-display mt-3 text-lg font-bold text-ink">
                    {s.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {s.description}
                  </p>
                  <a
                    href="#contact"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-aqua-dark transition-all hover:gap-2.5 hover:text-ink"
                  >
                    Learn more
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5"
                      aria-hidden
                    />
                  </a>
                </article>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-10 flex max-w-3xl items-start justify-center gap-3 rounded-2xl border border-aqua/15 bg-gradient-to-r from-aqua-soft/70 via-white to-aqua-soft/70 p-5 text-center text-sm leading-relaxed text-muted-foreground sm:items-center">
            <Stethoscope className="mt-0.5 h-5 w-5 shrink-0 text-aqua sm:mt-0" aria-hidden />
            <span>
              Our expert team focuses on <strong className="font-semibold text-ink">early detection</strong>,{" "}
              <strong className="font-semibold text-ink">personalized care</strong>, and{" "}
              <strong className="font-semibold text-ink">advanced treatment options</strong> to protect
              and preserve your sight.
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
