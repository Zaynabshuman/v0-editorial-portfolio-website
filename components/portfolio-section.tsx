import Link from 'next/link'

const experiences = [
  // Left column
  {
    period: '2024–2026',
    title: 'Consortium MEL Lead',
    organization: 'CARE Syria / SRI Consortium',
    description: 'Led consortium-wide MEAL systems, adaptive management, accountability, learning, and donor-facing evidence generation across multi-partner resilience programming in Syria.',
    filled: true,
  },
  {
    period: '2022–2024',
    title: 'Programme Quality & Adaptive Management Lead',
    organization: 'CARE International | Relief International – Lebanon',
    description: 'Led country-level programme quality, MEAL, accountability, and adaptive management systems across humanitarian and resilience portfolios in Lebanon.',
    filled: true,
  },
  {
    period: '2020–2022',
    title: 'Humanitarian Programme Monitoring & Accountability',
    organization: 'Lebanese Red Cross (LRC) – Lebanon',
    description: 'Provided monitoring, reporting, accountability, and operational coordination processes across humanitarian interventions and community-based programming.',
    filled: true,
  },
  // Right column
  {
    period: '2014–2020',
    title: 'Humanitarian Monitoring & Reporting Systems',
    organization: 'World Food Programme (WFP) | Danish Refugee Council (DRC) – Lebanon',
    description: 'Supported large-scale humanitarian monitoring, reporting, donor communications, and evidence generation across cash assistance, food security, and emergency programming.',
    filled: false,
  },
  {
    period: '2003–2014',
    title: 'Education Programme Quality & MEAL Development',
    organization: 'Beyond Association – Lebanon',
    description: 'Designed and operationalized foundational MEAL systems, indicators, reporting tools, and programme monitoring approaches supporting non-formal education programming.',
    filled: false,
  },
]

export function PortfolioSection() {
  const leftColumn = experiences.filter((_, i) => i < 3)
  const rightColumn = experiences.filter((_, i) => i >= 3)

  return (
    <section id="portfolio" className="bg-secondary/30 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 text-center">
          <h3 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
            Leadership Experience
          </h3>
        </div>

        {/* Two-column grid */}
        <div className="grid gap-x-16 gap-y-12 lg:grid-cols-2">
          {/* Left column */}
          <div className="space-y-12">
            {leftColumn.map((exp, index) => (
              <article key={index} className="group flex gap-5">
                {/* Dot indicator */}
                <div className="mt-1.5 shrink-0">
                  <div className={`h-3 w-3 rounded-full ${exp.filled ? 'bg-primary' : 'border-2 border-primary bg-transparent'}`} />
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                    {exp.period}
                  </span>
                  <h4 className="mt-2 font-serif text-lg font-semibold text-foreground md:text-xl">
                    {exp.title}
                  </h4>
                  <p className="mt-1 text-sm font-medium text-primary">
                    {exp.organization}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {exp.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* Right column */}
          <div className="space-y-12">
            {rightColumn.map((exp, index) => (
              <article key={index} className="group flex gap-5">
                {/* Dot indicator */}
                <div className="mt-1.5 shrink-0">
                  <div className={`h-3 w-3 rounded-full ${exp.filled ? 'bg-primary' : 'border-2 border-primary bg-transparent'}`} />
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                    {exp.period}
                  </span>
                  <h4 className="mt-2 font-serif text-lg font-semibold text-foreground md:text-xl">
                    {exp.title}
                  </h4>
                  <p className="mt-1 text-sm font-medium text-primary">
                    {exp.organization}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {exp.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* View more link */}
        <div className="mt-16 text-center">
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
          >
            Get in touch for full CV
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
