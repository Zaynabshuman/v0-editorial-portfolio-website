'use client'

import { useEffect, useRef } from 'react'
import { 
  BarChart3, 
  Table2, 
  Sparkles, 
  FileText, 
  PieChart, 
  Code2, 
  ClipboardList, 
  Monitor, 
  CheckCircle2, 
  FormInput, 
  Database, 
  Grid3X3 
} from 'lucide-react'

const tools = [
  { name: 'Power BI Dashboard Development', icon: BarChart3 },
  { name: 'Excel Automation & Data Visualization', icon: Table2 },
  { name: 'AI-Assisted Analysis', icon: Sparkles },
  { name: 'Reporting Automation', icon: FileText },
  { name: 'SPSS', icon: PieChart },
  { name: 'R Studio', icon: Code2 },
  { name: 'KoBoToolbox / ODK / ONA', icon: ClipboardList },
  { name: 'Digital Reporting Systems', icon: Monitor },
  { name: 'Data Cleaning & Validation', icon: CheckCircle2 },
  { name: 'Survey Design & Information Management', icon: FormInput },
  { name: 'Database Tracking Systems', icon: Database },
  { name: 'Microsoft 365 Suite', icon: Grid3X3 },
]

export function SkillsToolsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationId: number
    let scrollPos = 0
    const speed = 0.5

    const scroll = () => {
      scrollPos += speed
      if (scrollPos >= scrollContainer.scrollWidth / 2) {
        scrollPos = 0
      }
      scrollContainer.scrollLeft = scrollPos
      animationId = requestAnimationFrame(scroll)
    }

    animationId = requestAnimationFrame(scroll)

    const handleMouseEnter = () => cancelAnimationFrame(animationId)
    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(scroll)
    }

    scrollContainer.addEventListener('mouseenter', handleMouseEnter)
    scrollContainer.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      cancelAnimationFrame(animationId)
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter)
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <section className="bg-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center">
          <h3 className="font-serif text-3xl font-bold text-primary md:text-4xl">
            Skills & Tools
          </h3>
        </div>
      </div>

      {/* Scrolling marquee */}
      <div className="relative mt-12 overflow-hidden">
        {/* Gradient fades */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-secondary to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-secondary to-transparent" />
        
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-hidden"
        >
          {/* Double the items for seamless loop */}
          {[...tools, ...tools].map((tool, index) => (
            <div
              key={index}
              className="group flex shrink-0 items-center gap-3 rounded-lg border border-primary/10 bg-background px-6 py-4 transition-all hover:border-primary hover:shadow-md"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary">
                <tool.icon className="h-5 w-5 text-primary transition-colors group-hover:text-primary-foreground" />
              </div>
              <span className="whitespace-nowrap text-sm font-medium text-foreground">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
