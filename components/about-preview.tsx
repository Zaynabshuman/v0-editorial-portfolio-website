import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function AboutPreview() {
  return (
    <section id="about" className="bg-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Portrait */}
          <div className="lg:col-span-4">
            <div className="relative mx-auto aspect-square w-full max-w-xs overflow-hidden bg-background lg:max-w-none">
              {/* Editorial corner frame */}
              <div className="absolute -left-2 -top-2 h-20 w-20 border-l border-t border-primary/40" />
              <div className="absolute -bottom-2 -right-2 h-20 w-20 border-b border-r border-primary/40" />
              
              {/* Placeholder */}
              <div className="absolute inset-4 flex items-center justify-center bg-muted">
                <div className="text-center">
                  <div className="mx-auto mb-3 h-16 w-16 rounded-full bg-primary/10" />
                  <p className="text-xs text-muted-foreground">About Portrait</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-8">
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-primary">
              About
            </span>
            
            <h3 className="mt-4 font-serif text-3xl font-semibold text-foreground md:text-4xl lg:text-5xl">
              Dedicated to Impact
            </h3>
            
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Senior Programme Quality and MEAL professional with 12+ years of experience 
              leading monitoring, evaluation, accountability, learning, adaptive management, 
              and evidence systems across humanitarian, resilience, and development 
              programmes in the MENA region.
            </p>
            
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Specializing in building robust systems that transform data into actionable 
              insights, enabling organizations to make evidence-informed decisions that 
              maximize programme effectiveness and community impact.
            </p>
            
            <Link
              href="#expertise"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
            >
              Learn more about my expertise
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
