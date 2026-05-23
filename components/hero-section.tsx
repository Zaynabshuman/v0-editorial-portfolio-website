import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Download } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-background pt-32 lg:pt-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <div className="relative z-10 max-w-2xl">
            <h2 className="font-serif text-5xl font-semibold leading-[1.1] text-primary md:text-6xl lg:text-7xl">
              <span className="block">Zaynab</span>
              <span className="block">Shuman</span>
            </h2>
            
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Senior Programme Quality, MEAL and Adaptive Management Specialist supporting 
              organizations through accountability, evaluations, learning systems, and 
              evidence-informed decision-making.
            </p>
            
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="#portfolio"
                className="inline-flex items-center gap-2 bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90"
              >
                Explore Selected Work
                <ArrowRight className="h-4 w-4" />
              </Link>
              
              <Link
                href="/cv.pdf"
                className="inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-primary"
              >
                Download CV
                <Download className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Image & Botanical */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Botanical accent - top left */}
            <svg
              className="absolute -left-8 -top-8 h-32 w-32 text-primary/20 lg:-left-16 lg:-top-12 lg:h-48 lg:w-48"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M100 20C100 20 120 60 100 100C80 140 100 180 100 180"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M100 50C100 50 130 70 120 100"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M100 80C100 80 70 95 80 120"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <ellipse cx="120" cy="95" rx="15" ry="25" stroke="currentColor" strokeWidth="1.5" transform="rotate(20 120 95)" />
              <ellipse cx="80" cy="115" rx="12" ry="20" stroke="currentColor" strokeWidth="1.5" transform="rotate(-20 80 115)" />
              <ellipse cx="115" cy="130" rx="10" ry="18" stroke="currentColor" strokeWidth="1.5" transform="rotate(30 115 130)" />
            </svg>

            {/* Portrait */}
            <div className="relative aspect-[3/4] w-full max-w-md overflow-hidden rounded-sm bg-secondary lg:max-w-lg">
              <Image
                src="/images/zaynab-portrait.png"
                alt="Zaynab Shuman - Programme Quality and MEAL Specialist"
                fill
                className="object-cover object-top"
                priority
              />
              {/* Corner frame accent */}
              <div className="absolute left-4 top-4 h-16 w-16 border-l-2 border-t-2 border-primary/30" />
              <div className="absolute bottom-4 right-4 h-16 w-16 border-b-2 border-r-2 border-primary/30" />
            </div>

            {/* Botanical accent - bottom right */}
            <svg
              className="absolute -bottom-4 -right-4 h-24 w-24 text-primary/15 lg:-bottom-8 lg:-right-8 lg:h-36 lg:w-36"
              viewBox="0 0 150 150"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M75 130C75 130 60 90 75 60C90 30 75 10 75 10"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M75 100C75 100 50 85 55 60"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <ellipse cx="55" cy="65" rx="12" ry="20" stroke="currentColor" strokeWidth="1.5" transform="rotate(-25 55 65)" />
              <ellipse cx="90" cy="50" rx="10" ry="16" stroke="currentColor" strokeWidth="1.5" transform="rotate(25 90 50)" />
            </svg>
          </div>
        </div>
      </div>

      {/* Decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  )
}
