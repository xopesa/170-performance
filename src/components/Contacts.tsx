import { useRef } from 'react'
import type { Language } from '../types'
import { translations } from '../data/translations'
import { contacts } from '../data/contacts'
import { useReveal } from '../hooks/useReveal'
import { SectionIntro } from './SectionIntro'

export function Contacts({ language }: { language: Language }) {
  const ref = useRef<HTMLElement>(null)
  useReveal(ref)
  const copy = translations[language].contacts
  return (
    <section className="contacts section" id="contacts" ref={ref} aria-labelledby="contacts-title">
      <div className="shell">
        <SectionIntro eyebrow={copy.eyebrow} title={copy.title} />
        <div className="contacts__list" data-reveal>
          <a href={contacts.phoneHref}><span>{copy.phone}</span><strong>{contacts.phoneDisplay}</strong><i aria-hidden="true">↗</i></a>
          <a href={contacts.telegramChannel} target="_blank" rel="noreferrer"><span>Telegram · {copy.channel}</span><strong>170CARS</strong><i aria-hidden="true">↗</i></a>
          <a href={contacts.telegramProfile} target="_blank" rel="noreferrer"><span>Telegram · {copy.master}</span><strong>@hasan_rahmatov</strong><i aria-hidden="true">↗</i></a>
        </div>
      </div>
    </section>
  )
}
