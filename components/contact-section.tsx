import { Mail, Linkedin, MapPin } from 'lucide-react'
import Link from 'next/link'

export function ContactSection() {
  return (
    <section id="contact" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Content */}
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-primary">
              Get in Touch
            </span>
            <h3 className="mt-4 font-serif text-3xl font-semibold text-foreground md:text-4xl lg:text-5xl">
              {"Let's Connect"}
            </h3>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Interested in collaborating on programme quality, MEAL systems, or 
              evaluation projects? I&apos;d love to hear from you.
            </p>

            {/* Contact details */}
            <div className="mt-10 space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center bg-secondary">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Email
                  </p>
                  <Link
                    href="mailto:hello@zaynabshuman.com"
                    className="text-foreground transition-colors hover:text-primary"
                  >
                    hello@zaynabshuman.com
                  </Link>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center bg-secondary">
                  <Linkedin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    LinkedIn
                  </p>
                  <Link
                    href="https://linkedin.com/in/zaynabshuman"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground transition-colors hover:text-primary"
                  >
                    /in/zaynabshuman
                  </Link>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center bg-secondary">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Location
                  </p>
                  <p className="text-foreground">MENA Region</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="bg-secondary p-8 lg:p-12">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-medium uppercase tracking-wider text-muted-foreground"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-2 block w-full border-0 border-b border-border bg-transparent py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none focus:ring-0"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-medium uppercase tracking-wider text-muted-foreground"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-2 block w-full border-0 border-b border-border bg-transparent py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none focus:ring-0"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-medium uppercase tracking-wider text-muted-foreground"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-2 block w-full resize-none border-0 border-b border-border bg-transparent py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none focus:ring-0"
                  placeholder="How can I help you?"
                />
              </div>

              <button
                type="submit"
                className="mt-4 w-full bg-primary py-4 text-sm font-medium uppercase tracking-wider text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
