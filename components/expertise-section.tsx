import { BarChart3, Database, Users, ClipboardCheck } from 'lucide-react'

const expertiseCategories = [
  {
    icon: ClipboardCheck,
    title: 'Humanitarian MEAL & Programme Quality',
    skills: [
      'Results Frameworks & Logframes',
      'Accountability Systems (CHS)',
      'Adaptive Management',
      'Evaluations & Assessments',
      'Donor Compliance & Reporting',
    ],
  },
  {
    icon: BarChart3,
    title: 'Analytics & Visualization',
    skills: [
      'Power BI Dashboard Development',
      'Excel Automation & Visualization',
      'AI-Assisted Analysis',
      'SPSS & R Studio',
      'Reporting Automation',
    ],
  },
  {
    icon: Database,
    title: 'Digital Systems & Data Collection',
    skills: [
      'KoBoToolbox / ODK / ONA',
      'Digital Reporting Systems',
      'Data Cleaning & Validation',
      'Survey Design & Management',
      'Microsoft 365 Suite',
    ],
  },
  {
    icon: Users,
    title: 'Leadership & Facilitation',
    skills: [
      'Capacity Building',
      'Facilitation & Coaching',
      'Consortium Coordination',
      'Stakeholder Engagement',
      'Partner Capacity Strengthening',
    ],
  },
]

export function ExpertiseSection() {
  return (
    <section id="expertise" className="bg-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl">
          <h3 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
            Technical Expertise & Skills
          </h3>
        </div>

        {/* Expertise grid - 4 columns */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {expertiseCategories.map((category, index) => (
            <div
              key={index}
              className="group relative bg-background p-6 transition-all hover:shadow-md"
            >
              {/* Icon */}
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <category.icon className="h-6 w-6 text-primary" />
              </div>
              
              <h4 className="font-serif text-lg font-semibold text-foreground">
                {category.title}
              </h4>
              
              {/* Skills list */}
              <ul className="mt-4 space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li 
                    key={skillIndex}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {skill}
                  </li>
                ))}
              </ul>

              {/* Hover accent */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
