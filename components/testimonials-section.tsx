'use client'

import { useEffect, useState, useCallback } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const testimonials = [
  {
    quote: "What distinguishes Zaynab is her professionalism, strong ethical grounding, and ability to bring structure and clarity within highly complex multi-partner programmes. She is deeply engaged in the work, sets high standards, and consistently ensures quality, coherence, accountability, and strong coordination across teams and partners.",
    name: 'Farah B. Salhab',
    title: 'Gender Equity & Inclusion Strategist',
    subtitle: 'Feminist MEAL, Research, GESI & Evidence-Based Programming',
    image: '/images/testimonials/farah.jpg',
  },
  {
    quote: "Zaynab demonstrated herself to be an exceptionally skilled MEAL professional with a strong ability to support teams through training, mentorship, and collaboration. Her ability to navigate complex consortium structures, adapt to shifting operational realities, and use data to guide strategic thinking made her a trusted and highly valued resource across the Syria Resilience Initiative.",
    name: 'Shadin Omar',
    title: 'Humanitarian & Development Leader',
    subtitle: 'Multi-Donor Consortia | Resilience, WASH, Shelter, Food Security & Climate Adaptation',
    image: '/images/testimonials/shadin.jpg',
  },
  {
    quote: "Zaynab consistently demonstrated exceptional leadership in strengthening programme quality systems across complex humanitarian operations. Her ability to bridge evidence, strategy, and operational adaptation made her a highly valued consortium partner. She brought strong analytical thinking, collaborative leadership, and a practical understanding of adaptive management across multi-partner programming.",
    name: 'Sita Conklin',
    title: 'International Development Leader',
    subtitle: 'Resilience, Livelihoods & Youth Systems | Strategic Partnerships & Consortium Leadership',
    image: '/images/testimonials/sita.jpg',
  },
  {
    quote: "Zaynab consistently showed strong initiative, professionalism, and commitment to strengthening MEAL systems, data integrity, and organizational learning processes. She demonstrated excellent leadership and coordination skills while leading complex assessments, facilitating lessons-learned sessions, and supporting teams in applying evidence and learning in practical ways.",
    name: 'Melanie Horne',
    title: 'Strategic Humanitarian Professional',
    subtitle: 'Emergency Response Programs, Business Development & Grants Management',
    image: '/images/testimonials/melanie.jpg',
  },
  {
    quote: "Throughout her work as MEAL Manager, Zaynab demonstrated exceptional leadership, technical expertise, and a deep understanding of monitoring, evaluation, accountability, and learning systems. Her collaborative approach, commitment to continuous learning, and ability to drive evidence-based decision-making greatly strengthened programme effectiveness and organizational learning.",
    name: 'Abdul Khalek Zoobi',
    title: 'Grants, Finance, Partnerships, Risk & Compliance Professional',
    subtitle: 'Program and Proposal Development | Localization & Capacity Building',
    image: '/images/testimonials/abdul.jpg',
  },
]

function StarRating() {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="h-5 w-5 fill-primary text-primary" />
      ))}
    </div>
  )
}

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }, [])

  // Auto-scroll effect
  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, nextSlide])

  // Get visible testimonials (3 at a time for desktop)
  const getVisibleTestimonials = () => {
    const visible = []
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length
      visible.push({ ...testimonials[index], originalIndex: index })
    }
    return visible
  }

  return (
    <section id="testimonials" className="bg-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <h3 className="font-serif text-3xl font-bold text-primary md:text-4xl">
            Trusted From My Colleagues
          </h3>
        </div>

        {/* Carousel container */}
        <div 
          className="relative mt-16"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Navigation arrows */}
          <button
            onClick={prevSlide}
            className="absolute -left-4 top-1/2 z-10 -translate-y-1/2 bg-primary p-3 text-primary-foreground shadow-lg transition-all hover:bg-primary/90 lg:-left-6"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute -right-4 top-1/2 z-10 -translate-y-1/2 bg-primary p-3 text-primary-foreground shadow-lg transition-all hover:bg-primary/90 lg:-right-6"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Testimonials grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {getVisibleTestimonials().map((testimonial, index) => (
              <blockquote
                key={`${testimonial.originalIndex}-${index}`}
                className="relative flex h-full flex-col border border-border/50 bg-background p-8 shadow-sm transition-all duration-500"
              >
                {/* Star rating */}
                <StarRating />

                {/* Quote */}
                <p className="mt-6 flex-1 text-sm leading-relaxed text-muted-foreground">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                {/* Author */}
                <footer className="mt-8 flex items-center gap-4">
                  <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border-2 border-primary/20">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <cite className="block text-base font-semibold not-italic text-foreground">
                      {testimonial.name}
                    </cite>
                    <span className="mt-0.5 block text-xs text-primary">
                      {testimonial.title}
                    </span>
                    <span className="mt-0.5 block truncate text-xs text-muted-foreground">
                      {testimonial.subtitle}
                    </span>
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>

          {/* Dots indicator */}
          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 w-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-primary w-6' : 'bg-primary/30'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
