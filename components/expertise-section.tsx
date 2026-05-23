const expertiseAreas = [
  {
    title: 'Monitoring & Evaluation',
    description: 'Designing and implementing comprehensive M&E frameworks, indicator development, data collection methodologies, and quality assurance systems.',
  },
  {
    title: 'Accountability & Learning',
    description: 'Establishing feedback mechanisms, community accountability systems, and organizational learning processes that drive continuous improvement.',
  },
  {
    title: 'Adaptive Management',
    description: 'Facilitating evidence-based decision-making, real-time programme adjustments, and strategic pivots based on emerging data and context analysis.',
  },
  {
    title: 'Programme Quality',
    description: 'Ensuring adherence to humanitarian standards, donor requirements, and organizational quality benchmarks across all programme phases.',
  },
  {
    title: 'Research & Analysis',
    description: 'Conducting evaluations, assessments, and research studies that generate actionable insights for programme design and policy advocacy.',
  },
  {
    title: 'Capacity Building',
    description: 'Developing and delivering training programmes, mentoring staff, and strengthening organizational MEAL systems and capabilities.',
  },
]

export function ExpertiseSection() {
  return (
    <section id="expertise" className="bg-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl">
          <h3 className="font-serif text-3xl font-semibold text-foreground md:text-4xl lg:text-5xl">
            Specialized Knowledge
          </h3>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Comprehensive expertise across the programme cycle, from design and 
            implementation to evaluation and learning.
          </p>
        </div>

        {/* Expertise grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {expertiseAreas.map((area, index) => (
            <div
              key={index}
              className="group relative bg-background p-8 transition-all hover:shadow-sm"
            >
              {/* Number indicator */}
              <span className="font-serif text-4xl font-light text-primary/20">
                {String(index + 1).padStart(2, '0')}
              </span>
              
              <h4 className="mt-4 font-serif text-xl font-semibold text-foreground">
                {area.title}
              </h4>
              
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {area.description}
              </p>

              {/* Hover accent */}
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
