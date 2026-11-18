"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/site";
import {
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";

const SERVICES_LINKS = [
  "Cataract Surgery",
  "LASIK Eye Surgery",
  "Glaucoma & Uveitis Care",
  "Comprehensive Eye Checkup",
];

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.button
          key="back-to-top"
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          initial={{ opacity: 0, y: 16, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.8 }}
          whileHover={{ scale: 1.1 }}
          className="absolute -top-6 right-6 flex h-12 w-12 items-center justify-center rounded-full bg-aqua text-white shadow-xl shadow-aqua/30 transition-colors hover:bg-aqua-dark lg:right-10"
        >
          <ArrowUp className="h-5 w-5" aria-hidden />
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative mt-auto bg-ink-deep text-white/70">
      <BackToTop />
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.3fr_0.7fr_0.8fr_1.2fr]">
          {/* Brand */}
          <div>
            <Link href="#home" className="flex items-center gap-3" aria-label="AECSA home">
              <img
                src="/aecsa-logo.svg"
                alt="AECSA logo"
                className="h-11 w-11 rounded-xl bg-white p-1.5"
              />
              <span>
                <span className="font-display block text-xl font-extrabold tracking-tight text-white">
                  AECSA
                </span>
                <span className="block text-[10px] font-medium uppercase tracking-[0.08em] text-white/50">
                  Advanced Eye Care &amp; Surgery Associates
                </span>
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed">
              Advanced Eye Care &amp; Surgery Associates is dedicated to superior
              eye health and surgical results — with expert care you can trust.
            </p>
            <div className="mt-5 flex gap-2">
              {[
                { icon: Facebook, label: "Facebook", href: "#" },
                { icon: Instagram, label: "Instagram", href: "#" },
                { icon: Youtube, label: "YouTube", href: "#" },
                { icon: MessageCircle, label: "WhatsApp", href: SITE.whatsappHref },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-aqua hover:bg-aqua hover:text-white"
                >
                  <s.icon className="h-4 w-4" aria-hidden />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer navigation">
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="inline-block transition-all duration-300 hover:translate-x-1 hover:text-aqua-soft"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Services
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {SERVICES_LINKS.map((s) => (
                <li key={s}>
                  <a href="#services" className="inline-block transition-all duration-300 hover:translate-x-1 hover:text-aqua-soft">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Contact Us
            </h3>
            <ul className="mt-4 space-y-3.5 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-aqua" aria-hidden />
                <span>{SITE.address}</span>
              </li>
              <li>
                <a href={SITE.phoneHref} className="flex items-center gap-2.5 transition-colors hover:text-white">
                  <Phone className="h-4 w-4 shrink-0 text-aqua" aria-hidden />
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={SITE.emailHref} className="flex items-center gap-2.5 break-all transition-colors hover:text-white">
                  <Mail className="h-4 w-4 shrink-0 text-aqua" aria-hidden />
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="h-4 w-4 shrink-0 text-aqua" aria-hidden />
                {SITE.hours}
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-center text-xs text-white/50 sm:flex-row sm:px-6 lg:px-8">
          <p>
            All Rights Reserved © {new Date().getFullYear()} Advanced Eye Care
            &amp; Surgery Associates (AECSA)
          </p>
          <p>Lahore, Pakistan</p>
        </div>
      </div>
    </footer>
  );
}
