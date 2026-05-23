'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

const projects = [
  {
    number: '01',
    logo: '/images/logos/norad.jpg',
    title: 'NORAD Final Evaluation – Livelihoods Programme',
    organization: 'CARE Syria / SRI Consortium – Syria',
    description: 'Led the final evaluation process for a NORAD-funded livelihoods programme implemented within the Syria Resilience Initiative (SRI), overseeing evaluation coordination, evidence synthesis, learning integration, stakeholder engagement, and donor-facing analytical processes. Supported strategic reflection on programme effectiveness, sustainability, adaptive learning, and evidence-informed recommendations across complex resilience programming contexts.',
    role: 'Evaluation Lead',
    year: '2026',
  },
  {
    number: '02',
    logo: '/images/logos/usaid.png',
    title: 'BORDERLESS MEAL System Consultancy',
    organization: 'USAID-Funded Initiative – Lebanon',
    description: 'Developed a comprehensive MEAL system for a cross-border humanitarian initiative, including reporting frameworks, indicator systems, accountability tools, partner guidance, and capacity strengthening processes supporting evidence-based programme management and donor compliance.',
    role: 'Lead MEAL Consultant',
    year: '2024',
  },
  {
    number: '03',
    logo: '/images/logos/usaid.png',
    title: 'ROUM Wastewater Management Governance Evaluation',
    organization: 'NAHNOO / USAID – Lebanon',
    description: 'Led an independent evaluation of a WASH governance intervention focused on wastewater management and community governance systems. Conducted mixed-method assessment and analytical review processes supporting evidence generation, learning, and strategic programme recommendations.',
    role: 'Evaluation Consultant',
    year: '2024',
  },
  {
    number: '04',
    logo: '/images/logos/usaid.png',
    title: 'BHA Health Sector Project Evaluation',
    organization: 'Relief International – Lebanon',
    description: 'Oversaw the evaluation of a BHA-funded health intervention, including partner monitoring processes, third-party data triangulation, evidence synthesis, and donor-aligned analytical reporting supporting programme accountability and operational learning.',
    role: 'Evaluation & MEAL Lead',
    year: '2024',
  },
  {
    number: '05',
    logo: '/images/logos/usaid.png',
    title: 'PRM Education Sector Endline Evaluation',
    organization: 'Relief International – Lebanon',
    description: 'Managed the endline evaluation of an inclusive education intervention funded by PRM, integrating outcome tracking, qualitative learning components, evidence analysis, and programme adaptation recommendations.',
    role: 'Evaluation & MEAL Lead',
    year: '2024',
  },
  {
    number: '06',
    logo: '/images/logos/care.png',
    title: 'SEA Risk Assessment (Desk Review)',
    organization: 'CARE International – Lebanon',
    description: 'Conducted desk-based risk mapping and analytical review of Sexual Exploitation and Abuse (SEA) risks, reporting pathways, and safeguarding gaps to inform accountability strengthening and safeguarding interventions.',
    role: 'Accountability Lead',
    year: '2024',
  },
  {
    number: '07',
    logo: '/images/logos/care.png',
    title: 'Municipal Preparedness Risk Assessment',
    organization: 'CARE International – Lebanon',
    description: 'Conducted strategic municipal-level risk analysis supporting contingency planning, emergency preparedness frameworks, and resilience-focused operational planning processes.',
    role: 'Risk Assessment Lead',
    year: '2023',
  },
  {
    number: '08',
    logo: ['/images/logos/care.png', '/images/logos/relief.png'],
    title: 'Multi-Sector Needs Assessments (MSNA)',
    organization: 'CARE International & Relief International',
    description: 'Led mixed-method multi-sector needs assessments supporting programme design, strategic targeting, operational planning, and evidence-based humanitarian response across complex emergency and resilience contexts.',
    role: 'Assessment & Analysis Lead',
    year: '2023–2024',
  },
  {
    number: '09',
    logo: '/images/logos/bmz.png',
    title: 'BMZ Livelihood Programme Mid-Term Evaluation',
    organization: 'CARE International – Lebanon',
    description: 'Led a comprehensive mid-term evaluation for a development-focused livelihoods programme funded by BMZ, supporting evidence generation, programme adaptation, donor accountability, and strategic learning.',
    role: 'Evaluation Lead',
    year: '2023',
  },
  {
    number: '10',
    logo: '/images/logos/adh.png',
    title: 'ADH Emergency WASH Project Evaluation',
    organization: 'Lebanese Red Cross – Lebanon',
    description: 'Directed a results-based evaluation aligned with ADH donor indicators for emergency WASH interventions, supporting programme performance analysis, accountability, and operational learning.',
    role: 'Evaluation Lead',
    year: '2022–2023',
  },
]

export default function EvaluationsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
          <Link 
            href="/"
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          <Link href="/" className="font-serif text-lg font-semibold text-primary">
            Zaynab Shuman
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-secondary/30 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h1 className="font-serif text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
            Evaluations & Consultancies
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            A portfolio of selected evaluation and consultancy leadership across humanitarian 
            and development programming contexts.
          </p>
        </div>
      </section>

      {/* Projects List */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-0">
            {projects.map((project, index) => (
              <article 
                key={index}
                className="group grid gap-6 border-b border-border py-10 transition-colors hover:bg-secondary/20 md:grid-cols-[80px_120px_1fr_200px_100px] md:items-start md:gap-8"
              >
                {/* Number */}
                <div className="hidden md:block">
                  <span className="font-serif text-2xl font-semibold text-primary">
                    {project.number}
                  </span>
                </div>

                {/* Logo */}
                <div className="flex h-16 w-28 items-center justify-center gap-2 rounded bg-white p-2 shadow-sm">
                  {Array.isArray(project.logo) ? (
                    project.logo.map((logoSrc, logoIndex) => (
                      <div key={logoIndex} className="relative h-full w-1/2">
                        <Image
                          src={logoSrc}
                          alt={project.organization}
                          fill
                          className="object-contain"
                        />
                      </div>
                    ))
                  ) : (
                    <div className="relative h-full w-full">
                      <Image
                        src={project.logo}
                        alt={project.organization}
                        fill
                        className="object-contain"
                      />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h2 className="font-serif text-xl font-semibold text-foreground group-hover:text-primary md:text-2xl">
                    {project.title}
                  </h2>
                  <p className="text-sm font-medium text-primary">
                    {project.organization}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                </div>

                {/* Role */}
                <div className="md:text-right">
                  <span className="inline-block bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                    {project.role}
                  </span>
                </div>

                {/* Year */}
                <div className="md:text-right">
                  <span className="text-sm font-bold text-foreground">
                    {project.year}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <h3 className="font-serif text-2xl font-semibold text-primary-foreground">
            Interested in working together?
          </h3>
          <p className="mt-4 text-primary-foreground/80">
            Get in touch to discuss evaluation, MEAL, or consultancy opportunities.
          </p>
          <Link
            href="/#contact"
            className="mt-8 inline-flex items-center gap-2 border border-primary-foreground bg-transparent px-8 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground hover:text-primary"
          >
            Contact Me
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Zaynab Shuman. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
