import Hero from "../components/Hero";
import TrustBand from "../components/TrustBand";
import ProblemSection from "../components/ProblemSection";
import Services from "../components/Services";
import DemoShowcase from "../components/DemoShowcase";
import Packages from "../components/Packages";
import Process from "../components/Process";
import Testimonials from "../components/Testimonials";
import BookingCTA from "../components/BookingCTA";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <TrustBand />
      <ProblemSection />
      <Services />
      <DemoShowcase />
      <Packages />
      <Process />
      <Testimonials />
      <BookingCTA />
      <ContactForm />
      <Footer />
    </main>
  );
}
