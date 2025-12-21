import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import PreviewSection from "@/components/landing/PreviewSection";
import ContentPreviewSection from "@/components/landing/ContentPreviewSection";
import PricingSection from "@/components/landing/PricingSection";
import FAQSection from "@/components/landing/FAQSection";
import Footer from "@/components/landing/Footer";
import { PurchaseNotification } from "@/components/landing/PurchaseNotification";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      <PurchaseNotification />
      <main>
        <HeroSection />
        <TestimonialsSection />
        <FeaturesSection />
        <PreviewSection />
        <ContentPreviewSection />
        <PricingSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
