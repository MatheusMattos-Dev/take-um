import { AnnouncementBar } from "@/components/announcement-bar";
import { Differentials } from "@/components/differentials";
import { FaqSection } from "@/components/faq";
import { FinalCta } from "@/components/final-cta";
import { Footer } from "@/components/footer";
import { Formats } from "@/components/formats";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { Marquee } from "@/components/marquee";
import { Portfolio } from "@/components/portfolio";
import { Pricing } from "@/components/pricing";
import { Testimonials } from "@/components/testimonials";
import { MotionProvider } from "@/components/ui/reveal";
import { WhatsAppFloat } from "@/components/whatsapp-float";

export default function Home() {
  return (
    <MotionProvider>
      <AnnouncementBar />
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Formats />
        <Portfolio />
        <HowItWorks />
        <Differentials />
        <Pricing />
        <Testimonials />
        <FaqSection />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppFloat />
    </MotionProvider>
  );
}
