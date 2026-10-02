import HeroSection from "../components/hero/HeroSection";
import HeaderStrape from "../components/hero/HeaderStrape";
import WhyOptiverseSection from "../components/hero/WhyOptiverseSection";
import OurServicesSection from "../components/hero/OurServicesSection";
import BlogsSection from "../components/hero/BlogsSection";
import TestimonialsSection from "../components/hero/TestimonialsSection";
import TransformationCTASection from "../components/hero/TransformationCTASection";
import Footer from "../components/hero/Footer";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <HeaderStrape />
      <WhyOptiverseSection />
      <OurServicesSection />
      <BlogsSection />
      <TestimonialsSection />
      <TransformationCTASection />
      <Footer />
    </>
  );
}
