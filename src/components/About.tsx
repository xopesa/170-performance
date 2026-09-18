import { useRef } from 'react'
import type { Language } from '../types'
import { translations } from '../data/translations'
import { useReveal } from '../hooks/useReveal'
import { SectionIntro } from './SectionIntro'

export function About({ language }: { language: Language }) {
  const ref = useRef<HTMLElement>(null)
  useReveal(ref)
  const copy = translations[language].about
  return (
    <section className="about section" id="about" ref={ref} aria-labelledby="about-title">
      <div className="shell about__grid">
        <SectionIntro eyebrow={copy.eyebrow} title={copy.title} />
        <div className="about__copy">
          <span className="about__line" data-reveal />
          <p data-reveal>{copy.text}</p>
          <span className="about__monogram" data-reveal>170</span>
        </div>
      </div>
    </section>
  )
}
