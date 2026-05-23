import { Mail, Linkedin, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'

export function ContactSection() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact" className="bg-secondary py-16 text-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Footer Content - Compact Layout */}
        <div className="grid gap-10 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="block">
              <h2 className="font-serif text-lg font-semibold tracking-wide text-foreground">
                ZAYNAB SHUMAN
              </h2>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Programme Quality & MEAL Specialist
              </p>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Supporting organizations through evidence-informed decision-making 
              and robust MEAL systems.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Navigation
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/#about" className="text-sm text-foreground/80 transition-colors hover:text-primary">
                  About
                </Link>
              </li>
              <li>
                <Link href="/#expertise" className="text-sm text-foreground/80 transition-colors hover:text-primary">
                  Expertise
                </Link>
              </li>
              <li>
                <Link href="/#portfolio" className="text-sm text-foreground/80 transition-colors hover:text-primary">
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Connect
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/#testimonials" className="text-sm text-foreground/80 transition-colors hover:text-primary">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-sm text-foreground/80 transition-colors hover:text-primary">
                  Contact
                </Link>
              </li>
              <li>
                <Link 
                  href="https://www.linkedin.com/in/zaynab-shuman-43356ab1" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-foreground/80 transition-colors hover:text-primary"
                >
                  LinkedIn
                </Link>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Available for consultancy
            </h3>
            <p className="mt-4 text-sm text-muted-foreground">
              Open to new opportunities in programme quality, MEAL, and adaptive management.
            </p>
            <Link
              href="mailto:zaynabshuman@outlook.com"
              className="mt-4 inline-block border border-foreground/30 px-5 py-2 text-xs font-medium uppercase tracking-wider text-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 md:flex-row">
          <p className="text-xs text-muted-foreground">
            © {currentYear} Zaynab Shuman. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            <span className="text-xs text-muted-foreground">Beirut, Lebanon</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
