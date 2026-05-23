const highlights = [
  {
    number: '12+',
    label: 'Years',
    description: 'Humanitarian & Development Experience',
  },
  {
    number: '15+',
    label: 'Donors',
    description: 'FCDO, USAID, EU, BMZ, UNICEF',
  },
  {
    number: '15+',
    label: 'International Organizations',
    description: 'INGOs, UN Agencies & Consortiums',
  },
  {
    number: 'Multi-Country',
    label: '',
    description: 'Lebanon, Syria Response, MENA',
    isGreen: true,
  },
]

export function ProfessionalHighlights() {
  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <h3 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
            Professional Highlights
          </h3>
        </div>

        {/* Stats grid */}
        <div className="mx-auto mt-16 max-w-5xl">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-12">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="group relative text-center"
              >
                {/* Decorative line */}
                <div className="absolute -top-4 left-1/2 h-8 w-px -translate-x-1/2 bg-primary/20" />
                
                <div className={`font-serif text-4xl font-semibold md:text-5xl lg:text-6xl ${item.isGreen ? 'text-primary' : 'text-primary'}`}>
                  {item.number}
                </div>
                {item.label && (
                  <div className="mt-2 text-sm font-medium uppercase tracking-wider text-foreground">
                    {item.label}
                  </div>
                )}
                <div className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom decorative element */}
        <div className="mx-auto mt-20 flex max-w-lg items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-border" />
          <svg
            className="h-6 w-6 text-primary/30"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M12 4C12 4 14 8 12 12C10 16 12 20 12 20"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <ellipse cx="15" cy="10" rx="3" ry="5" stroke="currentColor" strokeWidth="1" transform="rotate(15 15 10)" />
            <ellipse cx="9" cy="14" rx="2.5" ry="4" stroke="currentColor" strokeWidth="1" transform="rotate(-15 9 14)" />
          </svg>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-border" />
        </div>
      </div>
    </section>
  )
}
