import { 
  ClipboardCheck, 
  Target, 
  Users, 
  BarChart3, 
  FileText, 
  Lightbulb 
} from 'lucide-react'

const expertise = [
  {
    icon: ClipboardCheck,
    title: 'MEAL Systems',
    description: 'Design and implementation of comprehensive Monitoring, Evaluation, Accountability, and Learning frameworks.',
  },
  {
    icon: Target,
    title: 'Programme Quality',
    description: 'Ensuring programmes meet quality standards through robust accountability and adaptive management.',
  },
  {
    icon: Users,
    title: 'Stakeholder Engagement',
    description: 'Facilitating meaningful participation of communities, partners, and donors in programme processes.',
  },
  {
    icon: BarChart3,
    title: 'Data Analytics',
    description: 'Transforming data into actionable insights through analysis, visualization, and evidence synthesis.',
  },
  {
    icon: FileText,
    title: 'Evaluations',
    description: 'Leading baseline, midline, and endline evaluations with mixed-method approaches.',
  },
  {
    icon: Lightbulb,
    title: 'Adaptive Management',
    description: 'Supporting evidence-informed decision making and continuous programme improvement.',
  },
]

export function ExpertiseSection() {
  return (
    <section id="expertise" className="bg-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl">
          <h3 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
            Specialized Knowledge
          </h3>
        </div>

        {/* Expertise grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {expertise.map((item, index) => (
            <div
              key={index}
              className="group relative bg-background p-8 transition-all hover:shadow-md"
            >
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <item.icon className="h-6 w-6" />
              </div>
              
              <h4 className="font-serif text-xl font-semibold text-foreground">
                {item.title}
              </h4>
              
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
