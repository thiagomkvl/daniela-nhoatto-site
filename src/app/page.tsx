import { AuthorityNumbers } from "@/components/homepage/authority-numbers";
import { BlogSection } from "@/components/homepage/blog-section";
import { HeroSection } from "@/components/homepage/hero-section";
import { PracticeAreas } from "@/components/homepage/practice-areas";
import { ResultsSection } from "@/components/homepage/results-section";
import { TeamSection } from "@/components/homepage/team-section";
import { TestimonialsSection } from "@/components/homepage/testimonials-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PracticeAreas />
      <AuthorityNumbers />
      <TeamSection />
      <ResultsSection />
      <TestimonialsSection />
      <BlogSection />
    </>
  );
}
