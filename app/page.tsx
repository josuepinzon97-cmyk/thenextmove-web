import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Clients from "./components/Clients";
import ValueProp from "./components/ValueProp";
import Benefits from "./components/Benefits";
import Services from "./components/Services";
import Results from "./components/Results";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import SuccessCases from "./components/SuccessCases";
import FinalCTA from "./components/FinalCTA";
import Contact from "./components/Contact";
import BookingSection from "./components/BookingSection";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Section from "@/components/ui/Section";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        {/* 1 — dark (hero stays untouched) */}
        <Hero />

        {/* 2 — Clients manages its own 3 zones internally */}
        <Section>
          <Clients />
        </Section>

        {/* 3 — dark */}
        <Section>
          <ValueProp />
        </Section>

        {/* 4 — light */}
        <Section variant="light">
          <Testimonials />
        </Section>

        {/* 5 — dark */}
        <Section>
          <Services />
        </Section>

        {/* 6 — light */}
        <Section variant="light">
          <Results />
        </Section>

        {/* 7 — dark */}
        <Section>
          <Process />
        </Section>

        {/* 8 — light (Benefits moved down) */}
        <Section variant="light">
          <Benefits />
        </Section>

        {/* 9 — dark */}
        <Section>
          <SuccessCases />
        </Section>

        {/* 10 — light */}
        <Section variant="light">
          <FinalCTA />
        </Section>

        {/* 11 — dark */}
        <Section>
          <Contact />
        </Section>

        {/* 12 — booking (light pre-CTA strip dark + light calendar) */}
        <BookingSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
