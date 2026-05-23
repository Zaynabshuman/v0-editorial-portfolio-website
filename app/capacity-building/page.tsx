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
    logo: '/images/logos/sri.png',
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
        {/* Hero Section - Full viewport with large typography */}
        <section className="relative flex min-h-[70vh] flex-col justify-center overflow-hidden bg-background px-6 py-24 lg:px-8">
          {/* Large background text */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
            <span className="whitespace-nowrap font-serif text-[15vw] font-bold leading-none text-primary/[0.03]">
              EMPOWER
            </span>
          </div>

          <div className="relative mx-auto w-full max-w-7xl">
            <Link
              href="/"
              className="mb-12 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>

            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              {/* Left - Title */}
              <div>
                <h1 className="font-serif text-5xl font-bold leading-[1.1] text-foreground md:text-6xl lg:text-7xl">
                  Capacity
                  <br />
                  <span className="text-primary">Building</span>
                </h1>
                <p className="mt-8 max-w-md text-lg leading-relaxed text-muted-foreground">
                  Empowering teams through tailored learning experiences in MEAL, 
                  programme quality, and adaptive management.
                </p>
              </div>

              {/* Right - Stats in vertical layout */}
              <div className="flex flex-col gap-8 lg:items-end">
                <div className="group flex items-baseline gap-4">
                  <span className="font-serif text-6xl font-bold text-primary transition-transform group-hover:scale-110 md:text-7xl">5+</span>
                  <span className="text-sm uppercase tracking-widest text-muted-foreground">Programs</span>
                </div>
                <div className="group flex items-baseline gap-4">
                  <span className="font-serif text-6xl font-bold text-primary transition-transform group-hover:scale-110 md:text-7xl">7+</span>
                  <span className="text-sm uppercase tracking-widest text-muted-foreground">Years</span>
                </div>
                <div className="group flex items-baseline gap-4">
                  <span className="font-serif text-6xl font-bold text-primary transition-transform group-hover:scale-110 md:text-7xl">4</span>
                  <span className="text-sm uppercase tracking-widest text-muted-foreground">Organizations</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Training - Interactive Showcase */}
        <section className="border-y border-border bg-secondary/30 py-24 lg:py-32">
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

        {/* All Trainings List */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="mb-16 font-serif text-3xl font-bold text-foreground md:text-4xl">
              All Training Programs
            </h2>

            <div className="space-y-0">
              {trainings.map((training, index) => (
                <article
                  key={index}
                  className="group grid cursor-pointer gap-6 border-b border-border py-8 transition-all hover:bg-secondary/30 md:grid-cols-[80px_1fr_200px_120px] md:items-center md:gap-8 md:px-4"
                  onClick={() => setActiveIndex(index)}
                >
                  {/* Number */}
                  <span className="font-serif text-3xl font-bold text-primary/40 transition-colors group-hover:text-primary">
                    {training.number}
                  </span>

                  {/* Title */}
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-foreground transition-colors group-hover:text-primary">
                      {training.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">{training.organization}</p>
                  </div>

                  {/* Focus Areas */}
                  <div className="hidden flex-wrap gap-2 md:flex">
                    {training.focus.slice(0, 2).map((item, i) => (
                      <span key={i} className="text-xs text-muted-foreground">
                        {item}{i < 1 && ','}
                      </span>
                    ))}
                  </div>

                  {/* Year */}
                  <span className="text-sm font-medium text-primary">{training.year}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
            <h2 className="font-serif text-3xl font-bold text-primary-foreground md:text-4xl lg:text-5xl">
              Need Capacity Building Support?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/80">
              I design and deliver tailored training programs that strengthen 
              organizational capabilities in MEAL, accountability, and programme quality.
            </p>
            <Link
              href="/#contact"
              className="mt-10 inline-flex items-center gap-2 bg-background px-8 py-4 font-medium text-foreground transition-all hover:bg-background/90"
            >
              Get in Touch
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
