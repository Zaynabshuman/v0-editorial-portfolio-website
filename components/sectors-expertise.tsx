'use client'

import { 
  Wheat, 
  Banknote, 
  Shield, 
  GraduationCap, 
  HeartPulse, 
  Droplets,
  ClipboardCheck,
  Sprout,
  Siren,
  Users,
  RefreshCcw,
  Handshake
} from 'lucide-react'

const sectors = [
  {
    title: 'Food Security & Livelihoods',
    icon: Wheat,
    description: 'Sustainable food systems and economic empowerment',
  },
  {
    title: 'Cash Assistance',
    icon: Banknote,
    description: 'Dignified support through direct transfers',
  },
  {
    title: 'Protection',
    icon: Shield,
    description: 'Safeguarding rights and well-being',
  },
  {
    title: 'Education',
    icon: GraduationCap,
    description: 'Learning opportunities for all ages',
  },
  {
    title: 'Health',
    icon: HeartPulse,
    description: 'Access to quality healthcare services',
  },
  {
    title: 'WASH',
    icon: Droplets,
    description: 'Water, sanitation, and hygiene solutions',
  },
  {
    title: 'Accountability',
    icon: ClipboardCheck,
    description: 'Transparent and responsible programming',
  },
  {
    title: 'Resilience',
    icon: Sprout,
    description: 'Building capacity to withstand shocks',
  },
  {
    title: 'Emergency Response',
    icon: Siren,
    description: 'Rapid action when crises strike',
  },
  {
    title: 'Community-Based Programming',
    icon: Users,
    description: 'Locally-led solutions and ownership',
  },
  {
    title: 'Adaptive Programming',
    icon: RefreshCcw,
    description: 'Flexible approaches for changing contexts',
  },
  {
    title: 'Humanitarian Coordination',
    icon: Handshake,
    description: 'Collaborative multi-stakeholder engagement',
  },
]

export function SectorsExpertise() {
  return (
    <section className="bg-secondary/30 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 text-center">
          <h3 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
            Sector Expertise
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Deep experience across diverse humanitarian and development sectors, 
            driving meaningful change where it matters most.
          </p>
        </div>

        {/* Sectors grid */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {sectors.map((sector, index) => {
            const Icon = sector.icon
            return (
              <div
                key={index}
                className="group relative overflow-hidden bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Green top accent */}
                <div className="absolute left-0 top-0 h-1 w-full bg-primary opacity-0 transition-opacity group-hover:opacity-100" />
                
                {/* Icon */}
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                
                {/* Content */}
                <h4 className="font-serif text-lg font-semibold text-foreground">
                  {sector.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {sector.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
