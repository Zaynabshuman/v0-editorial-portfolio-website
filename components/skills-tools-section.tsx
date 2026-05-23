'use client'

const tools = [
  'Power BI Dashboard Development',
  'Excel Automation & Data Visualization',
  'AI-Assisted Analysis',
  'Reporting Automation',
  'SPSS',
  'R Studio',
  'KoBoToolbox / ODK / ONA',
  'Digital Reporting Systems',
  'Data Cleaning & Validation',
  'Survey Design & Information Management',
  'Database Tracking Systems',
  'Microsoft 365 Suite',
]

export function SkillsToolsSection() {
  return (
    <section className="bg-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center">
          <h3 className="font-serif text-3xl font-bold text-primary md:text-4xl">
            Skills & Tools
          </h3>
        </div>

        {/* Tools grid */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-full border border-primary/20 bg-background px-5 py-2.5 transition-all hover:border-primary hover:shadow-sm"
            >
              <span className="text-sm font-medium text-foreground transition-colors group-hover:text-primary">
                {tool}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
