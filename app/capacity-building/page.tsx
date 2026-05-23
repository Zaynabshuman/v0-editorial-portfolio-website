'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useState } from 'react'

const trainings = [
  {
    number: '01',
    organization: 'CARE International / SRI',
    logo: '/images/logos/care.png',
    title: 'Consortium Learning & Adaptive Management Facilitation',
    description: 'Facilitated consortium learning workshops, reflection sessions, adaptive management processes, and evidence-use discussions across operational hubs supporting programme adaptation and strategic learning.',
    year: '2024–2026',
    focus: ['Consortium Learning', 'Adaptive Management', 'Strategic Learning'],
  },
  {
    number: '02',
    organization: 'CARE International / Lebanon',
    logo: '/images/logos/care.png',
    title: 'Programme Quality, CHS & Evaluation Capacity Building',
    description: 'Designed and delivered trainings on CHS mainstreaming, accountability systems, indicator design, programme quality, evaluation ethics, and evidence-informed programming for staff and partners.',
    year: '2022–2023',
    focus: ['CHS', 'Accountability', 'Evaluation'],
  },
  {
    number: '03',
    organization: 'Relief International / Lebanon',
    logo: '/images/logos/relief.png',
    title: 'MEAL Systems & Results-Based Management Training',
    description: 'Developed and facilitated internal trainings on baseline design, results frameworks, accountability integration, evidence use, donor reporting, and programme adaptation processes.',
    year: '2023–2024',
    focus: ['MEAL Systems', 'RBM', 'Donor Reporting'],
  },
  {
    number: '04',
    organization: 'Lebanese Red Cross / Lebanon',
    logo: '/images/logos/lrc.png',
    title: 'Cross-Sector MEAL & Reporting Systems Training',
    description: 'Facilitated cross-sector trainings on reporting consistency, MEAL systems, evidence use, accountability processes, and operational monitoring for emergency programming teams.',
    year: '2020–2022',
    focus: ['Cross-Sector', 'Emergency Response', 'Reporting'],
  },
  {
    number: '05',
    organization: 'SRA / Syria',
    logo: '/images/logos/sra.jpg',
    title: 'Monitoring, Evaluation & Organizational Systems Training',
    description: 'Delivered technical trainings on monitoring & evaluation systems, TQM, HRM, and organizational development processes.',
    year: '2019',
    focus: ['M&E Systems', 'TQM', 'Organizational Development'],
  },
]

export default function CapacityBuildingPage() {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % trainings.length)
  }

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + trainings.length) % trainings.length)
  }

  return (
    <>
      <Header />
      <main className="bg-background">
        {/* Back Link */}
        <section className="bg-background px-6 pt-32 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </div>
        </section>

        {/* Featured Training - Interactive Showcase */}
        <section className="border-b border-border bg-background py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* Navigation */}
            <div className="mb-12 flex items-center justify-between">
              <div>
                <span className="text-sm font-medium uppercase tracking-widest text-primary">
                  Training Programs
                </span>
                <h2 className="mt-2 font-serif text-2xl font-bold text-foreground md:text-3xl">
                  Featured Initiatives
                </h2>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={prevSlide}
                  className="flex h-12 w-12 items-center justify-center border border-border bg-background transition-all hover:border-primary hover:text-primary"
                  aria-label="Previous training"
                >
                  <ArrowLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="flex h-12 w-12 items-center justify-center border border-border bg-background transition-all hover:border-primary hover:text-primary"
                  aria-label="Next training"
                >
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Featured Card */}
            <div className="grid gap-8 lg:grid-cols-[1fr_2fr]">
              {/* Left - Number & Organization */}
              <div className="flex flex-col justify-between">
                <div>
                  <span className="font-serif text-[120px] font-bold leading-none text-primary/20 md:text-[180px]">
                    {trainings[activeIndex].number}
                  </span>
                </div>
                <div className="mt-8 lg:mt-0">
                  <div className="flex items-center gap-4">
                    <div className="relative h-14 w-14 overflow-hidden rounded-full bg-background p-2 shadow-sm">
                      <Image
                        src={trainings[activeIndex].logo}
                        alt={trainings[activeIndex].organization}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{trainings[activeIndex].organization}</p>
                      <p className="text-sm text-primary">{trainings[activeIndex].year}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right - Content */}
              <div className="flex flex-col justify-center">
                <h3 className="font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                  {trainings[activeIndex].title}
                </h3>
                <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                  {trainings[activeIndex].description}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  {trainings[activeIndex].focus.map((item, i) => (
                    <span
                      key={i}
                      className="border border-primary/30 bg-primary/5 px-4 py-2 text-sm font-medium text-primary"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Progress Dots */}
            <div className="mt-12 flex justify-center gap-2">
              {trainings.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`h-2 transition-all ${
                    i === activeIndex ? 'w-8 bg-primary' : 'w-2 bg-primary/30'
                  }`}
                  aria-label={`Go to training ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
