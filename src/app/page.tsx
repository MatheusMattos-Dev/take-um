import { AnnouncementBar } from "@/components/announcement-bar";
import { Differentials } from "@/components/differentials";
import { FaqSection } from "@/components/faq";
import { FinalCta } from "@/components/final-cta";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { Portfolio } from "@/components/portfolio";
import { Pricing } from "@/components/pricing";
import { Testimonials } from "@/components/testimonials";
import { WhatsAppFloat } from "@/components/whatsapp-float";

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main>
        <Hero />
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
    </>
  );
}
