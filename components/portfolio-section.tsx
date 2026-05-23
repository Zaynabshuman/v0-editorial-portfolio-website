import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

const projects = [
  {
    title: 'Multi-Year Resilience Programme',
    organization: 'FCDO-funded Consortium',
    type: 'MEAL System Design',
    description: 'Led the design and implementation of an integrated MEAL system across 4 countries, harmonizing data collection and reporting for a $50M programme.',
  },
  {
    title: 'Emergency Response Evaluation',
    organization: 'UN Agency',
    type: 'Programme Evaluation',
    description: 'Conducted a comprehensive evaluation of emergency response operations, providing actionable recommendations that informed strategic pivots.',
  },
  {
    title: 'Accountability Framework',
    organization: 'International NGO',
    type: 'System Development',
    description: 'Developed and rolled out an organization-wide accountability framework, including complaint response mechanisms and feedback loops.',
  },
  {
    title: 'Learning & Adaptation Initiative',
    organization: 'USAID Partner',
    type: 'Adaptive Management',
    description: 'Established a learning agenda and facilitated quarterly adaptation sessions that improved programme outcomes by 35%.',
  },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-primary">
              Selected Work
            </span>
            <h3 className="mt-4 font-serif text-3xl font-semibold text-foreground md:text-4xl lg:text-5xl">
              Portfolio
            </h3>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              A selection of impactful projects demonstrating expertise in MEAL, 
              programme quality, and adaptive management.
            </p>
          </div>
          <Link
            href="#contact"
            className="shrink-0 text-sm font-medium text-primary transition-colors hover:text-primary/80"
          >
            View all projects →
          </Link>
        </div>

        {/* Projects grid */}
        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={index}
              className="group relative border border-border bg-card p-8 transition-all hover:border-primary/30 hover:shadow-sm lg:p-10"
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-xs font-medium uppercase tracking-wider text-primary">
                    {project.type}
                  </span>
                  <h4 className="mt-3 font-serif text-xl font-semibold text-foreground md:text-2xl">
                    {project.title}
                  </h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {project.organization}
                  </p>
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground opacity-0 transition-all group-hover:opacity-100" />
              </div>
              
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-border via-primary/20 to-border" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
