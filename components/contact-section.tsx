import { Mail, Linkedin, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'

export function ContactSection() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact" className="bg-foreground py-24 text-background lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Top Section - Let's Connect */}
        <div className="mb-16 grid gap-12 lg:grid-cols-2 lg:items-start">
          {/* Left - Title & Description */}
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-primary">
              Get in Touch
            </span>
            <h3 className="mt-4 font-serif text-3xl font-semibold text-background md:text-4xl lg:text-5xl">
              {"Let's Connect"}
            </h3>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-background/70">
              Interested in collaborating on programme quality, MEAL systems, or 
              evaluation projects? I&apos;d love to hear from you.
            </p>
          </div>

          {/* Right - Contact Details */}
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-background/10">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-background/60">
                  Email
                </p>
                <Link
                  href="mailto:zaynabshuman@outlook.com"
                  className="text-background transition-colors hover:text-primary"
                >
                  zaynabshuman@outlook.com
                </Link>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-background/10">
                <Linkedin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-background/60">
                  LinkedIn
                </p>
                <Link
                  href="https://www.linkedin.com/in/zaynab-shuman-43356ab1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-background transition-colors hover:text-primary"
                >
                  /in/zaynab-shuman
                </Link>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-background/10">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-background/60">
                  Location
                </p>
                <p className="text-background">Beirut, Lebanon</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-background/10">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-background/60">
                  Phone
                </p>
                <Link
                  href="tel:+96181819626"
                  className="text-background transition-colors hover:text-primary"
                >
                  +961 81819626
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/10" />

        {/* Footer Content */}
        <div className="mt-16 grid gap-12 lg:grid-cols-3">
          {/* Brand */}
          <div>
            <Link href="/" className="block">
              <h2 className="font-serif text-xl font-semibold tracking-wide text-background">
                ZAYNAB SHUMAN
              </h2>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-background/60">
                Programme Quality & MEAL Specialist
              </p>
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-background/70">
              Supporting organizations through evidence-informed decision-making 
              and robust MEAL systems.
            </p>
          </div>

          {/* Navigation */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-xs font-medium uppercase tracking-wider text-background/60">
                Navigation
              </h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link href="/#about" className="text-sm text-background/80 transition-colors hover:text-background">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/#expertise" className="text-sm text-background/80 transition-colors hover:text-background">
                    Expertise
                  </Link>
                </li>
                <li>
                  <Link href="/#portfolio" className="text-sm text-background/80 transition-colors hover:text-background">
                    Portfolio
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-medium uppercase tracking-wider text-background/60">
                Connect
              </h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link href="/#testimonials" className="text-sm text-background/80 transition-colors hover:text-background">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link 
                    href="https://www.linkedin.com/in/zaynab-shuman-43356ab1" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-background/80 transition-colors hover:text-background"
                  >
                    LinkedIn
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="lg:text-right">
            <h3 className="text-xs font-medium uppercase tracking-wider text-background/60">
              Available for consultancy
            </h3>
            <p className="mt-4 text-sm text-background/70">
              Open to new opportunities in programme quality, MEAL, and adaptive management.
            </p>
            <Link
              href="mailto:zaynabshuman@outlook.com"
              className="mt-6 inline-block border border-background/30 px-6 py-3 text-xs font-medium uppercase tracking-wider text-background transition-colors hover:border-background hover:bg-background hover:text-foreground"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-background/10 pt-8 md:flex-row">
          <p className="text-xs text-background/50">
            © {currentYear} Zaynab Shuman. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            <span className="text-xs text-background/50">Beirut, Lebanon</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
