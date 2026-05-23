import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero-section'
import { AboutPreview } from '@/components/about-preview'
import { ProfessionalHighlights } from '@/components/professional-highlights'
import { SectorsExpertise } from '@/components/sectors-expertise'
import { ExpertiseSection } from '@/components/expertise-section'
import { PortfolioSection } from '@/components/portfolio-section'
import { TestimonialsSection } from '@/components/testimonials-section'
import { SkillsToolsSection } from '@/components/skills-tools-section'
import { ContactSection } from '@/components/contact-section'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutPreview />
        <ProfessionalHighlights />
        <SectorsExpertise />
        <ExpertiseSection />
        <PortfolioSection />
        <TestimonialsSection />
        <SkillsToolsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
