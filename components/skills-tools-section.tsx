'use client'

const tools = [
  { name: 'Power BI', category: 'Analytics' },
  { name: 'Excel Automation', category: 'Analytics' },
  { name: 'AI-Assisted Analysis', category: 'Analytics' },
  { name: 'SPSS', category: 'Analytics' },
  { name: 'R Studio', category: 'Analytics' },
  { name: 'KoBoToolbox', category: 'Data Collection' },
  { name: 'ODK / ONA', category: 'Data Collection' },
  { name: 'Survey Design', category: 'Data Collection' },
  { name: 'Data Cleaning & Validation', category: 'Data Collection' },
  { name: 'Digital Reporting Systems', category: 'Systems' },
  { name: 'Database Tracking Systems', category: 'Systems' },
  { name: 'Information Management', category: 'Systems' },
  { name: 'Microsoft 365 Suite', category: 'Systems' },
  { name: 'Reporting Automation', category: 'Systems' },
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
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
