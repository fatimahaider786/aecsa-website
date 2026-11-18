"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Image as ImageIcon } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/site/reveal";

const FACILITIES = [
  {
    src: "/facility-exam.png",
    alt: "Consultation room at AECSA with examination chair and phoropter",
    title: "Consultation & Examination",
    caption: "Unhurried, thorough eye evaluations",
  },
  {
    src: "/facility-surgery.png",
    alt: "AECSA operating theatre with advanced surgical microscope",
    title: "Advanced Surgical Suite",
    caption: "Micro-incision cataract & laser surgery",
  },
  {
    src: "/facility-diagnostics.png",
    alt: "AECSA diagnostics suite with OCT retina scanner",
    title: "Diagnostics & Imaging",
    caption: "OCT, retinal imaging & visual field testing",
  },
  {
    src: "/hero-clinic.png",
    alt: "AECSA examination suite with slit lamp machines",
    title: "Slit Lamp Suite",
    caption: "Precision anterior-segment examination",
  },
];

export function Facilities() {
  return (
    <section id="facilities" className="scroll-mt-24 bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Facilities"
          title="A Modern Eye Care Environment"
          subtitle="Equipment and surroundings designed for accurate diagnosis, safe surgery and a calm patient experience."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FACILITIES.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.08} y={36} className="h-full">
              <figure className="group relative h-full overflow-hidden rounded-3xl border border-border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-aqua/10">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={f.src}
                    alt={f.alt}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  {/* hover overlay with caption reveal */}
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                  <div className="absolute inset-x-4 bottom-3 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="flex items-center gap-1.5 text-xs font-semibold text-white">
                      <ArrowUpRight className="h-3.5 w-3.5 text-aqua-soft" aria-hidden />
                      {f.caption}
                    </p>
                  </div>
                  <span className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-ink/70 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur">
                    <ImageIcon className="h-3 w-3" aria-hidden />
                    AECSA
                  </span>
                </div>
                <figcaption className="p-5">
                  <h3 className="font-display text-base font-bold text-ink transition-colors group-hover:text-aqua-dark">
                    {f.title}
                  </h3>
                  <motion.p
                    className="mt-1 text-sm text-muted-foreground"
                    initial={false}
                  >
                    {f.caption}
                  </motion.p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
