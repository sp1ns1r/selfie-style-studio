
import LandingHeader from "@/components/landing/LandingHeader";
import LandingHero from "@/components/landing/LandingHero";
import LandingBenefitsSection from "@/components/landing/LandingBenefitsSection";
import LandingSamples from "@/components/landing/LandingSamples";
import ComparisonTable from "@/components/landing/ComparisonTable";
import LandingFeatures from "@/components/landing/LandingFeatures";
import LandingHowItWorks from "@/components/landing/LandingHowItWorks";
import LandingTestimonials from "@/components/landing/LandingTestimonials";
import LandingPricing from "@/components/landing/LandingPricing";
import LandingFAQ from "@/components/landing/LandingFAQ";
import LandingFooter from "@/components/landing/LandingFooter";

export default function Landing() {
  return (
    <div className="min-h-screen flex flex-col">
      <LandingHeader />
      <LandingHero />
      <LandingBenefitsSection />
      <LandingSamples />
      <ComparisonTable />
      <LandingFeatures />
      <LandingHowItWorks />
      <LandingTestimonials />
      <LandingPricing />
      <LandingFAQ />
      <LandingFooter />
    </div>
  );
}
