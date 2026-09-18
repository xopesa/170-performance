import { useRef } from 'react'
import type { Language } from '../types'
import { translations } from '../data/translations'
import { contacts } from '../data/contacts'
import { useReveal } from '../hooks/useReveal'
import { SectionIntro } from './SectionIntro'

export function Projects({ language }: { language: Language }) {
  const ref = useRef<HTMLElement>(null)
  useReveal(ref)
  const copy = translations[language].projects
  return (
    <section className="projects section" id="projects" ref={ref} aria-labelledby="projects-title">
      <div className="shell">
        <SectionIntro eyebrow={copy.eyebrow} title={copy.title} />
        <div className="projects__empty" data-reveal>
          <span className="projects__index">170—001</span>
          <p>{copy.empty}</p>
          <a className="text-link" href={contacts.telegramChannel} target="_blank" rel="noreferrer">{copy.link}<span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>
  )
}
