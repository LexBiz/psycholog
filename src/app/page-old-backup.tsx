import { HeroSection as Hero } from "@/components/sections/HeroSection";
import { PainSection as Pain } from "@/components/sections/PainSection";
import { ExplanationSection as Explanation } from "@/components/sections/ExplanationSection";
import { AboutCourseSection as AboutCourse } from "@/components/sections/AboutCourseSection";
import { ForWhomSection as ForWhom } from "@/components/sections/ForWhomSection";
import { BenefitsSection as Benefits } from "@/components/sections/BenefitsSection";
import { StepsSection as Steps } from "@/components/sections/StepsSection";
import { AuthorsSection as Authors } from "@/components/sections/AuthorsSection";
import { VideosSection as Videos } from "@/components/sections/VideosSection";
import { BonusesSection as Bonuses } from "@/components/sections/BonusesSection";
import { FaqSection as Faq } from "@/components/sections/FaqSection";
import { TestimonialsSection as Testimonials } from "@/components/sections/TestimonialsSection";
import { PricingSection as Pricing } from "@/components/sections/PricingSection";
import { FinalCtaSection as FinalCta } from "@/components/sections/FinalCtaSection";
import { FooterSection as Footer } from "@/components/sections/FooterSection";
import { StickyCTA as Sticky } from "@/components/StickyCTA";
import { StickyCtaBar } from "@/components/StickyCtaBar";
import { landingContent } from "@/content/landingContent";

export default function Home() {
  return (
    <div className="min-h-screen bg-[color:var(--color-background)] text-[color:var(--color-foreground)]">
      <main className="pb-20 sm:pb-0">
        {/* Order strictly follows the provided content document */}
        {/* 1 */} <Hero />
        {/* 2 */} <Pain />
        {/* 3 */} <Explanation />
        {/* 4 */} <AboutCourse />
        {/* 5 */} <ForWhom />
        {/* 6 */} <Benefits />
        {/* 7 */} <Steps />
        {/* 8 */} <Authors />
        {/* 9 */} <Videos />
        {/* 10 */} <Bonuses />
        {/* 11 */} <Faq />
        {/* 11.5 */} <Testimonials />
        {/* 12 */} <Pricing />
        {/* 13 */} <FinalCta />
        {/* 14 */} <Footer />
      </main>

      <Sticky
        primaryLabel={landingContent.finalCta.ctaPrimary}
        secondaryLabel={landingContent.hero.ctaPrimary}
        primaryHref="#pricing"
        secondaryHref="#videos"
      />
      
      <StickyCtaBar />
    </div>
  );
}

