import Link from 'next/link'

export function CtaSection() {
  return (
    <section className="bg-secondary py-20">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
          Interested in working together?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Get in touch to discuss evaluation, MEAL, or consultancy opportunities.
        </p>
        <Link
          href="mailto:zaynabshuman@outlook.com"
          className="mt-8 inline-block bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Contact Me
        </Link>
      </div>
    </section>
  )
}
