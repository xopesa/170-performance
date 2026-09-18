import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import type { Language } from '../types'
import { translations } from '../data/translations'
import { FloatingCar } from './FloatingCar'

gsap.registerPlugin(ScrollTrigger)

export function ServicesJourney({ language }: { language: Language }) {
  const sectionRef = useRef<HTMLElement>(null)
  const carRef = useRef<HTMLDivElement>(null)
  const copy = translations[language].services

  useEffect(() => {
    const section = sectionRef.current
    const car = carRef.current
    if (!section || !car || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const context = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: { trigger: section, start: 'top bottom', end: 'bottom top', scrub: .7 },
      })
        .fromTo(car, { xPercent: -5, yPercent: 8, rotation: -1, scale: 1.04 }, { xPercent: 7, yPercent: -3, rotation: .8, scale: .9, ease: 'none' })
        .to(car, { xPercent: -4, yPercent: -8, rotation: -.45, scale: .82, ease: 'none' })

      section.querySelectorAll<HTMLElement>('.service-chapter').forEach((chapter) => {
        gsap.fromTo(chapter.querySelectorAll('[data-service-reveal]'),
          { autoAlpha: 0, y: 42 },
          { autoAlpha: 1, y: 0, duration: .9, stagger: .1, ease: 'power3.out', scrollTrigger: { trigger: chapter, start: 'top 72%', toggleActions: 'play none none reverse' } },
        )
      })
    }, section)
    return () => context.revert()
  }, [language])

  return (
    <section className="services-journey" id="services" ref={sectionRef} aria-labelledby="services-title">
      <div className="journey-head shell">
        <p className="eyebrow">{copy.eyebrow}</p>
        <h2 id="services-title">{copy.title}</h2>
      </div>
      <div className="journey-car-stage" aria-hidden="true">
        <div ref={carRef} className="journey-car-motion"><FloatingCar decorative /></div>
      </div>
      <div className="services-list shell">
        {copy.items.map((service, index) => (
          <article className="service-chapter" key={service.title}>
            <span className="service-chapter__number" data-service-reveal>{String(index + 1).padStart(2, '0')}</span>
            <div className="service-chapter__copy">
              <h3 data-service-reveal>{service.title}</h3>
              <p data-service-reveal>{service.description}</p>
              {'meta' in service && <small data-service-reveal>{service.meta}</small>}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
