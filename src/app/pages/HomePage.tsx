import { HeroSection } from "../components/home/HeroSection";
import { ProblemsSection } from "../components/home/ProblemsSection";
import { MethodologySection } from "../components/home/MethodologySection";
import { ServicesSection } from "../components/home/ServicesSection";
import { CasesSection } from "../components/home/CasesSection";
import { TeamSection } from "../components/home/TeamSection";
import { TestimonialsSection } from "../components/home/TestimonialsSection";
import { InsightsSection } from "../components/home/InsightsSection";
import { CTASection } from "../components/home/CTASection";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <ProblemsSection />
      <MethodologySection />
      <ServicesSection />
      <CasesSection />
      <TeamSection />
      <TestimonialsSection />
      <InsightsSection />
      <CTASection />
    </>
  );
}
