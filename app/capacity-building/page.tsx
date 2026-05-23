import Image from 'next/image'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Users, Lightbulb, Target, BookOpen, ArrowLeft } from 'lucide-react'

export const metadata = {
  title: 'Capacity Building & Learning Facilitation | Zaynab Shuman',
  description: 'Training programs, workshops, and capacity building initiatives in MEAL, programme quality, and adaptive management.',
}

const trainings = [
  {
    number: '01',
    organization: 'CARE International / SRI',
    logo: '/images/logos/care.png',
    title: 'Consortium Learning & Adaptive Management Facilitation',
    description: 'Facilitated consortium learning workshops, reflection sessions, adaptive management processes, and evidence-use discussions across operational hubs supporting programme adaptation and strategic learning.',
    year: '2024–2026',
    icon: Lightbulb,
    tags: ['Consortium Learning', 'Adaptive Management', 'Strategic Learning'],
  },
  {
    number: '02',
    organization: 'CARE International / Lebanon',
    logo: '/images/logos/care.png',
    title: 'Programme Quality, CHS & Evaluation Capacity Building',
    description: 'Designed and delivered trainings on CHS mainstreaming, accountability systems, indicator design, programme quality, evaluation ethics, and evidence-informed programming for staff and partners.',
    year: '2022–2023',
    icon: Target,
    tags: ['CHS', 'Accountability', 'Evaluation'],
  },
  {
    number: '03',
    organization: 'Relief International / Lebanon',
    logo: '/images/logos/relief.png',
    title: 'MEAL Systems & Results-Based Management Training',
    description: 'Developed and facilitated internal trainings on baseline design, results frameworks, accountability integration, evidence use, donor reporting, and programme adaptation processes.',
    year: '2023–2024',
    icon: BookOpen,
    tags: ['MEAL Systems', 'RBM', 'Donor Reporting'],
  },
  {
    number: '04',
    organization: 'Lebanese Red Cross / Lebanon',
    logo: '/images/logos/lrc.png',
    title: 'Cross-Sector MEAL & Reporting Systems Training',
    description: 'Facilitated cross-sector trainings on reporting consistency, MEAL systems, evidence use, accountability processes, and operational monitoring for emergency programming teams.',
    year: '2020–2022',
    icon: Users,
    tags: ['Cross-Sector', 'Emergency Response', 'Reporting'],
  },
  {
    number: '05',
    organization: 'SRA / Syria',
    logo: '/images/logos/sri.png',
    title: 'Monitoring, Evaluation & Organizational Systems Training',
    description: 'Delivered technical trainings on monitoring & evaluation systems, TQM, HRM, and organizational development processes.',
    year: '2019',
    icon: Target,
    tags: ['M&E Systems', 'TQM', 'Organizational Development'],
  },
]

export default function CapacityBuildingPage() {
  return (
    <>
      <Header />
      <main className="bg-background">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-primary py-24 lg:py-32">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full border border-background" />
            <div className="absolute right-1/4 bottom-1/4 h-48 w-48 rounded-full border border-background" />
            <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-background" />
          </div>
          
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <Link
              href="/"
              className="mb-8 inline-flex items-center gap-2 text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
            
            <h1 className="font-serif text-4xl font-bold text-primary-foreground md:text-5xl lg:text-6xl">
              Capacity Building &<br />Learning Facilitation
            </h1>
            
            <p className="mt-6 max-w-2xl text-lg text-primary-foreground/80">
              Empowering teams and organizations through tailored training programs, 
              workshops, and learning initiatives in MEAL, programme quality, and 
              adaptive management.
            </p>

            {/* Stats */}
            <div className="mt-12 flex flex-wrap gap-12">
              <div>
                <div className="font-serif text-4xl font-bold text-primary-foreground">5+</div>
                <div className="mt-1 text-sm text-primary-foreground/70">Training Programs</div>
              </div>
              <div>
                <div className="font-serif text-4xl font-bold text-primary-foreground">7+</div>
                <div className="mt-1 text-sm text-primary-foreground/70">Years Experience</div>
              </div>
              <div>
                <div className="font-serif text-4xl font-bold text-primary-foreground">4</div>
                <div className="mt-1 text-sm text-primary-foreground/70">Organizations</div>
              </div>
            </div>
          </div>
        </section>

        {/* Trainings Grid */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-2">
              {trainings.map((training, index) => (
                <article
                  key={index}
                  className="group relative overflow-hidden border border-border bg-card transition-all hover:border-primary/30 hover:shadow-lg"
                >
                  {/* Top accent bar */}
                  <div className="h-1 w-full bg-primary" />
                  
                  <div className="p-8">
                    {/* Header */}
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-4">
                        {/* Logo */}
                        <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full bg-secondary p-2">
                          <Image
                            src={training.logo}
                            alt={training.organization}
                            fill
                            className="object-contain"
                          />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-primary">{training.organization}</p>
                          <p className="text-xs text-muted-foreground">{training.year}</p>
                        </div>
                      </div>
                      
                      {/* Icon */}
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                        <training.icon className="h-5 w-5 text-primary group-hover:text-primary-foreground" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="mt-6 font-serif text-xl font-semibold text-foreground">
                      {training.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      {training.description}
                    </p>

                    {/* Tags */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {training.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Number watermark */}
                  <div className="absolute -bottom-4 -right-4 font-serif text-[120px] font-bold leading-none text-primary/5">
                    {training.number}
                  </div>
                </article>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-16 text-center">
              <p className="text-muted-foreground">
                Interested in capacity building support for your organization?
              </p>
              <Link
                href="/#contact"
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
              >
                Get in touch
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
