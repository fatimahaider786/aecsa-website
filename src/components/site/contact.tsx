"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Reveal, SectionHeading } from "@/components/site/reveal";
import { FloatingOrb } from "@/components/site/motion-primitives";
import { SITE } from "@/lib/site";
import {
  Clock,
  Loader2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";

const CONTACT_ITEMS = [
  {
    icon: MapPin,
    label: "Visit Us",
    value: SITE.address,
    href: "https://maps.google.com/?q=Farooq+Hospital+DHA+Avenue+Mall+Ghazi+Rd+Lahore",
    action: "Get directions",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: SITE.phoneDisplay,
    href: SITE.phoneHref,
    action: "Call now",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: SITE.email,
    href: SITE.emailHref,
    action: "Send email",
  },
  {
    icon: Clock,
    label: "Timings",
    value: SITE.hours,
  },
];

const SERVICES = [
  "Comprehensive Eye Checkup",
  "Cataract Surgery",
  "LASIK Eye Surgery",
  "Glaucoma & Uveitis Care",
  "Other / Not sure",
];

export function Contact() {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [service, setService] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    // Simulated message send — in production this posts to the clinic inbox.
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset?.();
      setService("");
      toast({
        title: "Message sent",
        description:
          "Thank you for reaching out. Our team will get back to you shortly.",
      });
    }, 900);
  }

  return (
    <section id="contact" className="relative scroll-mt-24 overflow-hidden bg-mist py-16 lg:py-24">
      <FloatingOrb className="right-[-5%] top-[10%] h-72 w-72 bg-aqua/10" duration={17} />
      <FloatingOrb className="bottom-[6%] left-[-4%] h-64 w-64 bg-[#1b6ef3]/10" delay={3} duration={20} />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="We're Here for Your Eyes"
          subtitle="Call, WhatsApp or visit us — our staff will help you book the right appointment."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.05fr] lg:gap-12">
          {/* Info cards */}
          <div className="grid gap-4 sm:grid-cols-2">
            {CONTACT_ITEMS.map((item, i) => {
              const Wrapper = item.href ? "a" : "div";
              return (
                <Reveal key={item.label} delay={i * 0.06} className="h-full">
                  <Wrapper
                    {...(item.href
                      ? {
                          href: item.href,
                          target: item.href.startsWith("http") ? "_blank" : undefined,
                          rel: item.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined,
                        }
                      : {})}
                    className="group flex h-full flex-col rounded-3xl border border-border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-aqua/40 hover:shadow-lg hover:shadow-aqua/10"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-aqua-soft transition-all duration-300 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-aqua">
                      <item.icon
                        className="h-5 w-5 text-aqua-dark transition-colors group-hover:text-white"
                        aria-hidden
                      />
                    </span>
                    <h3 className="font-display mt-4 text-sm font-bold uppercase tracking-wide text-ink">
                      {item.label}
                    </h3>
                    <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {item.value}
                    </p>
                    {item.action ? (
                      <span className="mt-3 text-xs font-semibold text-aqua-dark">
                        {item.action} →
                      </span>
                    ) : null}
                  </Wrapper>
                </Reveal>
              );
            })}
          </div>

          {/* Form */}
          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-border bg-white p-6 shadow-sm transition-shadow duration-300 focus-within:shadow-xl focus-within:shadow-aqua/10 sm:p-8"
            >
              <h3 className="font-display text-xl font-bold text-ink">
                Send us a message
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Fill the form and we&apos;ll call you back to confirm.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="grid gap-2">
                  <Label htmlFor="ct-name">Full name</Label>
                  <Input id="ct-name" name="name" required placeholder="Your name" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="ct-phone">Phone</Label>
                  <Input
                    id="ct-phone"
                    name="phone"
                    type="tel"
                    required
                    pattern="[0-9+\-\s]{7,15}"
                    placeholder="03XX XXXXXXX"
                  />
                </div>
                <div className="grid gap-2 sm:col-span-2">
                  <Label htmlFor="ct-service">Service needed</Label>
                  <Select value={service} onValueChange={setService} required>
                    <SelectTrigger id="ct-service" aria-label="Select a service">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {SERVICES.map((s) => (
                        <SelectItem key={s} value={s}>
                          {s}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2 sm:col-span-2">
                  <Label htmlFor="ct-msg">Message</Label>
                  <Textarea
                    id="ct-msg"
                    name="message"
                    rows={4}
                    required
                    placeholder="How can we help?"
                  />
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Button
                  type="submit"
                  disabled={submitting}
                  className="h-12 flex-1 rounded-full bg-aqua font-semibold text-white transition-all hover:scale-[1.02] hover:bg-aqua-dark sm:flex-none sm:px-8"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" aria-hidden />
                      Send Message
                    </>
                  )}
                </Button>
                <a
                  href={SITE.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center gap-2 rounded-full border border-border px-6 text-sm font-semibold text-ink transition-colors hover:bg-mist"
                >
                  <MessageCircle className="h-4 w-4 text-[#16a34a]" aria-hidden />
                  Chat on WhatsApp
                </a>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
