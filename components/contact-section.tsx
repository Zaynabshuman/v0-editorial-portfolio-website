import { Mail, Linkedin, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'

export function ContactSection() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact" className="bg-primary py-16 text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Main Content */}
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left - Brand & Contact Details */}
          <div>
            <Link href="/" className="block">
              <h2 className="font-serif text-xl font-semibold tracking-wide text-primary-foreground">
                ZAYNAB SHUMAN
              </h2>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-primary-foreground/70">
                Programme Quality & MEAL Specialist
              </p>
            </Link>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-primary-foreground/80">
              Supporting organizations through evidence-informed decision-making 
              and robust MEAL systems.
            </p>

            {/* Contact Details */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <a
                href="mailto:zaynabshuman@outlook.com"
                className="flex items-center gap-3 text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
              >
                <Mail className="h-4 w-4" />
                zaynabshuman@outlook.com
              </a>
              <a
                href="https://www.linkedin.com/in/zaynab-shuman-43356ab1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
              >
                <Linkedin className="h-4 w-4" />
                /in/zaynab-shuman
              </a>
              <div className="flex items-center gap-3 text-sm text-primary-foreground/80">
                <MapPin className="h-4 w-4" />
                Beirut, Lebanon
              </div>
              <a
                href="tel:+96181819626"
                className="flex items-center gap-3 text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
              >
                <Phone className="h-4 w-4" />
                +961 81819626
              </a>
            </div>
          </div>

          {/* Right - CTA */}
          <div className="flex flex-col justify-center lg:items-end lg:text-right">
            <h3 className="text-xs font-medium uppercase tracking-wider text-primary-foreground/70">
              Available for consultancy
            </h3>
            <p className="mt-3 max-w-sm text-sm text-primary-foreground/80 lg:ml-auto">
              Open to new opportunities in programme quality, MEAL, and adaptive management.
            </p>
            <Link
              href="mailto:zaynabshuman@outlook.com"
              className="mt-6 inline-block border border-primary-foreground/40 bg-transparent px-6 py-2.5 text-xs font-medium uppercase tracking-wider text-primary-foreground transition-colors hover:bg-primary-foreground hover:text-primary"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-primary-foreground/20 pt-6 md:flex-row">
          <p className="text-xs text-primary-foreground/60">
            © {currentYear} Zaynab Shuman. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-primary-foreground" />
            <span className="text-xs text-primary-foreground/60">Beirut, Lebanon</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
