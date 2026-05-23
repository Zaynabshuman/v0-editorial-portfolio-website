import Link from 'next/link'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground py-16 text-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Brand */}
          <div>
            <Link href="/" className="block">
              <h2 className="font-serif text-xl font-semibold tracking-wide">
                ZAYNAB SHUMAN
              </h2>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-background/60">
                Programme Quality & MEAL Specialist
              </p>
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-background/70">
              Supporting humanitarian and development actors through evidence-informed 
              decision-making and robust MEAL systems.
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
                  <Link href="#about" className="text-sm text-background/80 transition-colors hover:text-background">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#expertise" className="text-sm text-background/80 transition-colors hover:text-background">
                    Expertise
                  </Link>
                </li>
                <li>
                  <Link href="#portfolio" className="text-sm text-background/80 transition-colors hover:text-background">
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
                  <Link href="#testimonials" className="text-sm text-background/80 transition-colors hover:text-background">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-sm text-background/80 transition-colors hover:text-background">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link 
                    href="https://linkedin.com/in/zaynabshuman" 
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
              href="#contact"
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
            <span className="text-xs text-background/50">MENA Region</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
