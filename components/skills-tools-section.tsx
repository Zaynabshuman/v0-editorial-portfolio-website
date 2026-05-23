import { 
  BarChart3, 
  Table2, 
  Sparkles, 
  FileText, 
  PieChart, 
  Code2, 
  ClipboardList, 
  Monitor, 
  CheckCircle2, 
  FormInput, 
  Database, 
  Grid3X3 
} from 'lucide-react'

const tools = [
  { name: 'Power BI Dashboard Development', icon: BarChart3 },
  { name: 'Excel Automation & Data Visualization', icon: Table2 },
  { name: 'AI-Assisted Analysis', icon: Sparkles },
  { name: 'Reporting Automation', icon: FileText },
  { name: 'SPSS', icon: PieChart },
  { name: 'R Studio', icon: Code2 },
  { name: 'KoBoToolbox / ODK / ONA', icon: ClipboardList },
  { name: 'Digital Reporting Systems', icon: Monitor },
  { name: 'Data Cleaning & Validation', icon: CheckCircle2 },
  { name: 'Survey Design & Information Management', icon: FormInput },
  { name: 'Database Tracking Systems', icon: Database },
  { name: 'Microsoft 365 Suite', icon: Grid3X3 },
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

        {/* Tools grid - 4 columns on desktop, 3 on tablet, 2 on mobile */}
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="group flex flex-col items-center gap-3 rounded-lg border border-primary/10 bg-background p-6 text-center transition-all hover:border-primary hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary">
                <tool.icon className="h-6 w-6 text-primary transition-colors group-hover:text-primary-foreground" />
              </div>
              <span className="text-sm font-medium leading-tight text-foreground">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
