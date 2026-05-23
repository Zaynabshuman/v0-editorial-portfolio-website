import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export function AboutPreview() {
  return (
    <section id="about" className="bg-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Portrait */}
          <div className="lg:col-span-4">
            <div className="relative mx-auto aspect-[3/4] w-full max-w-[280px]">
              {/* Bold L-shaped green frame */}
              <div className="absolute -left-3 -bottom-3 z-10 h-[calc(100%+12px)] w-1.5 bg-primary" />
              <div className="absolute -left-3 -bottom-3 z-10 h-1.5 w-[60%] bg-primary" />
              <div className="absolute -left-3 -top-3 z-10 h-1.5 w-[40%] bg-primary" />
              
              {/* Portrait Image */}
              <div className="relative h-full w-full overflow-hidden">
                <Image
                  src="/images/zaynab-portrait.png"
                  alt="Zaynab Shuman"
                  fill
                  className="object-cover object-[center_20%]"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-8">
            <h3 className="font-serif text-3xl font-bold text-primary md:text-4xl">
              About
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
