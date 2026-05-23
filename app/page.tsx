import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero-section'
import { AboutPreview } from '@/components/about-preview'
import { ProfessionalHighlights } from '@/components/professional-highlights'
import { ExpertiseSection } from '@/components/expertise-section'
import { PortfolioSection } from '@/components/portfolio-section'
import { TestimonialsSection } from '@/components/testimonials-section'
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
        <ExpertiseSection />
        <PortfolioSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
