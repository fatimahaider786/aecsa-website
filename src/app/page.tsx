import { SiteHeader } from "@/components/site/site-header";
import { Hero } from "@/components/site/hero";
import { TrustMarquee } from "@/components/site/trust-marquee";
import { About } from "@/components/site/about";
import { Services } from "@/components/site/services";
import { WhyUs } from "@/components/site/why-us";
import { Facilities } from "@/components/site/facilities";
import { Conditions } from "@/components/site/conditions";
import { Testimonials } from "@/components/site/testimonials";
import { CtaBand } from "@/components/site/cta-band";
import { Contact } from "@/components/site/contact";
import { SiteFooter } from "@/components/site/site-footer";
import { FloatingWhatsApp } from "@/components/site/floating-whatsapp";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <TrustMarquee />
        <About />
        <Services />
        <WhyUs />
        <Facilities />
        <Conditions />
        <Testimonials />
        <CtaBand />
        <Contact />
      </main>
      <SiteFooter />
      <FloatingWhatsApp />
    </div>
  );
}
