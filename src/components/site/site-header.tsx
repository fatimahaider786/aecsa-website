"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { BookingDialog } from "@/components/site/booking-dialog";
import { ScrollProgress } from "@/components/site/motion-primitives";
import { NAV_LINKS, SITE } from "@/lib/site";
import {
  CalendarCheck,
  Clock,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
} from "lucide-react";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Scrollspy: highlight the section currently in view ─────── */
  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.replace("#", ""));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <ScrollProgress />

      {/* ── Top contact bar ─────────────────────────────────────────── */}
      <div className="bg-ink-deep text-white/90">
        <div className="mx-auto flex h-10 max-w-7xl items-center justify-between gap-4 px-4 text-xs sm:px-6 lg:px-8">
          <div className="flex min-w-0 items-center gap-5">
            <a
              href={SITE.phoneHref}
              className="group flex items-center gap-1.5 transition-colors hover:text-white"
            >
              <Phone
                className="h-3.5 w-3.5 text-aqua transition-transform group-hover:-rotate-12"
                aria-hidden
              />
              <span className="font-medium">{SITE.phoneDisplay}</span>
            </a>
            <a
              href={SITE.emailHref}
              className="hidden items-center gap-1.5 transition-colors hover:text-white md:flex"
            >
              <Mail className="h-3.5 w-3.5 text-aqua" aria-hidden />
              <span>{SITE.email}</span>
            </a>
            <span className="hidden items-center gap-1.5 lg:flex">
              <Clock className="h-3.5 w-3.5 text-aqua" aria-hidden />
              {SITE.hours}
            </span>
          </div>
          <a
            href={SITE.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 font-medium transition-all hover:bg-white/20"
          >
            <MessageCircle
              className="h-3.5 w-3.5 text-[#4ade80] transition-transform group-hover:scale-110"
              aria-hidden
            />
            WhatsApp Appointment
          </a>
        </div>
      </div>

      {/* ── Sticky navigation ───────────────────────────────────────── */}
      <motion.header
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.21, 0.65, 0.35, 1] }}
        className={`sticky top-0 z-50 w-full border-b bg-white/90 backdrop-blur-md transition-shadow ${
          scrolled
            ? "border-border shadow-[0_8px_30px_-12px_rgba(11,37,69,0.25)]"
            : "border-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-[72px] lg:px-8">
          {/* Brand */}
          <Link href="#home" className="group flex items-center gap-3" aria-label="AECSA home">
            <span className="relative">
              <img
                src="/aecsa-logo.svg"
                alt="AECSA logo — Advanced Eye Care & Surgery Associates"
                className="h-10 w-10 transition-transform duration-300 group-hover:scale-110 lg:h-11 lg:w-11"
              />
              <span
                aria-hidden
                className="anim-pulse-ring absolute inset-0 rounded-full bg-aqua/30"
              />
            </span>
            <span className="leading-tight">
              <span className="font-display block text-xl font-extrabold tracking-tight text-ink lg:text-[22px]">
                AECSA
              </span>
              <span className="block max-w-[220px] text-[10px] font-medium uppercase tracking-[0.08em] text-muted-foreground lg:text-[11px]">
                Advanced Eye Care &amp; Surgery Associates
              </span>
            </span>
          </Link>

          {/* Desktop nav with animated active pill */}
          <nav aria-label="Main navigation" className="hidden items-center gap-1 xl:flex">
            {NAV_LINKS.map((link) => {
              const isActive = active === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "true" : undefined}
                  className={`relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                    isActive ? "text-ink" : "text-ink/70 hover:text-ink"
                  }`}
                >
                  {isActive ? (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-aqua-soft"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  ) : null}
                  <span className="relative">{link.label}</span>
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              onClick={() => setBookingOpen(true)}
              className="group relative hidden h-11 overflow-hidden rounded-full bg-aqua px-5 text-sm font-semibold text-white shadow-md shadow-aqua/25 transition-all hover:bg-aqua-dark hover:shadow-lg hover:shadow-aqua/30 sm:inline-flex"
            >
              <span
                aria-hidden
                className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full"
              />
              <CalendarCheck className="relative mr-2 h-4 w-4" aria-hidden />
              <span className="relative">Book a Consultation</span>
            </Button>

            {/* Mobile menu */}
            <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-11 w-11 rounded-full xl:hidden"
                  aria-label="Open menu"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 overflow-y-auto">
                <SheetHeader>
                  <SheetTitle className="font-display flex items-center gap-2 text-ink">
                    <img src="/aecsa-logo.svg" alt="" className="h-8 w-8" />
                    AECSA
                  </SheetTitle>
                </SheetHeader>
                <nav aria-label="Mobile navigation" className="mt-2 grid gap-1 px-4">
                  {NAV_LINKS.map((link, i) => (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * i, duration: 0.35 }}
                      className={`rounded-xl px-4 py-3 text-base font-medium transition-colors hover:bg-aqua-soft ${
                        active === link.href ? "bg-aqua-soft text-ink" : "text-ink"
                      }`}
                    >
                      {link.label}
                    </motion.a>
                  ))}
                  <div className="mt-4 grid gap-3 border-t border-border pt-4">
                    <Button
                      onClick={() => {
                        setMenuOpen(false);
                        setBookingOpen(true);
                      }}
                      className="h-12 rounded-full bg-aqua text-white hover:bg-aqua-dark"
                    >
                      <CalendarCheck className="mr-2 h-4 w-4" aria-hidden />
                      Book a Consultation
                    </Button>
                    <a
                      href={SITE.whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-11 items-center justify-center gap-2 rounded-full border border-border text-sm font-medium"
                    >
                      <MessageCircle className="h-4 w-4 text-[#16a34a]" aria-hidden />
                      WhatsApp Us
                    </a>
                    <div className="mt-2 grid gap-2 rounded-xl bg-mist p-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 shrink-0 text-aqua" aria-hidden />
                        {SITE.address}
                      </span>
                      <span className="flex items-center gap-2">
                        <Phone className="h-4 w-4 shrink-0 text-aqua" aria-hidden />
                        {SITE.phoneDisplay}
                      </span>
                    </div>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </motion.header>

      <BookingDialog open={bookingOpen} onOpenChange={setBookingOpen} />
    </>
  );
}
