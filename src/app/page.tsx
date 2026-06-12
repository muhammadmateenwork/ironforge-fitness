import Navbar from "@/components/gym/Navbar";
import HeroSection from "@/components/gym/HeroSection";
import AboutSection from "@/components/gym/AboutSection";
import ServicesSection from "@/components/gym/ServicesSection";
import TrainersSection from "@/components/gym/TrainersSection";
import BMICalculator from "@/components/gym/BMICalculator";
import FacilitiesSection from "@/components/gym/FacilitiesSection";
import LocationSection from "@/components/gym/LocationSection";
import ContactSection from "@/components/gym/ContactSection";
import Footer from "@/components/gym/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0A0A0A]">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <TrainersSection />
        <BMICalculator />
        <FacilitiesSection />
        <LocationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
