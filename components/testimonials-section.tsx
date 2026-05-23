import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote: "Zaynab's expertise in MEAL systems transformed how our organization approaches evidence-based programming. Her strategic thinking and attention to detail are exceptional.",
    author: 'Programme Director',
    organization: 'International NGO',
  },
  {
    quote: "An outstanding professional who combines technical excellence with a deep understanding of humanitarian contexts. Her evaluations consistently provide actionable insights.",
    author: 'Country Representative',
    organization: 'UN Agency',
  },
  {
    quote: "Working with Zaynab elevated our consortium's approach to adaptive management. She built systems that continue to drive learning and improvement across all partners.",
    author: 'Chief of Party',
    organization: 'USAID Programme',
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-primary">
            Testimonials
          </span>
          <h3 className="mt-4 font-serif text-3xl font-semibold text-foreground md:text-4xl lg:text-5xl">
            Client Perspectives
          </h3>
        </div>

        {/* Testimonials grid */}
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <blockquote
              key={index}
              className="relative bg-background p-8 lg:p-10"
            >
              <Quote className="mb-6 h-8 w-8 text-primary/20" aria-hidden="true" />
              
              <p className="font-serif text-lg italic leading-relaxed text-foreground">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              
              <footer className="mt-8">
                <div className="h-px w-12 bg-primary/30" />
                <cite className="mt-4 block not-italic">
                  <span className="text-sm font-medium text-foreground">
                    {testimonial.author}
                  </span>
                  <span className="mt-1 block text-xs text-muted-foreground">
                    {testimonial.organization}
                  </span>
                </cite>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
