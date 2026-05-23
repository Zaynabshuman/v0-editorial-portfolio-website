import { Mail, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'

export function ContactSection() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact" className="bg-primary py-12 text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Main Content - Two columns */}
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-start">
          {/* Left Side */}
          <div>
            {/* Name & Title */}
            <Link href="/" className="block">
              <h2 className="font-serif text-xl font-semibold tracking-wider text-primary-foreground">
                ZAYNAB SHUMAN
              </h2>
              <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-primary-foreground/70">
                Programme Quality & MEAL Specialist
              </p>
            </Link>

            {/* Navigation Links */}
            <nav className="mt-6">
              <ul className="flex flex-wrap items-center gap-x-1 text-sm">
                <li>
                  <Link href="/" className="text-primary-foreground/90 transition-colors hover:text-primary-foreground">
                    Home
                  </Link>
                </li>
                <li className="text-primary-foreground/50">|</li>
                <li>
                  <Link href="/#about" className="text-primary-foreground/90 transition-colors hover:text-primary-foreground">
                    About
                  </Link>
                </li>
                <li className="text-primary-foreground/50">|</li>
                <li>
                  <Link href="/#expertise" className="text-primary-foreground/90 transition-colors hover:text-primary-foreground">
                    Areas of Expertise
                  </Link>
                </li>
                <li className="text-primary-foreground/50">|</li>
                <li>
                  <Link href="/evaluations-consultancies" className="text-primary-foreground/90 transition-colors hover:text-primary-foreground">
                    Portfolio
                  </Link>
                </li>
                <li className="text-primary-foreground/50">|</li>
                <li>
                  <Link href="/capacity-building" className="text-primary-foreground/90 transition-colors hover:text-primary-foreground">
                    Capacity Building
                  </Link>
                </li>
                <li className="text-primary-foreground/50">|</li>
                <li>
                  <Link href="#contact" className="text-primary-foreground/90 transition-colors hover:text-primary-foreground">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Copyright */}
            <p className="mt-6 text-xs text-primary-foreground/60">
              Copyright © {currentYear}
            </p>
          </div>

          {/* Right Side - Contact Details */}
          <div className="flex flex-col gap-4">
            {/* Location */}
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/20">
                <MapPin className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="text-sm text-primary-foreground">Lebanon, Beirut</span>
            </div>

            {/* Email */}
            <a 
              href="mailto:zaynabshuman@outlook.com"
              className="flex items-center gap-4 transition-opacity hover:opacity-80"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/20">
                <Mail className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="text-sm text-primary-foreground">zaynabshuman@outlook.com</span>
            </a>

            {/* Phone */}
            <a 
              href="tel:+96181919626"
              className="flex items-center gap-4 transition-opacity hover:opacity-80"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/20">
                <Phone className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="text-sm text-primary-foreground">+961 81919626</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
