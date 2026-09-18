import type { Language } from '../types'
import { translations } from '../data/translations'
import { FloatingCar } from './FloatingCar'
import { StarField } from './StarField'
import { Wordmark } from './Wordmark'
import { contacts } from '../data/contacts'

export function Hero({ language }: { language: Language }) {
  const copy = translations[language]
  return (
    <main id="top">
      <section className="hero" aria-labelledby="hero-title">
        <StarField />
        <div className="hero__copy">
          <h1 id="hero-title"><Wordmark /></h1>
          <p className="hero__tagline">{copy.tagline}</p>
          <p className="hero__location">{copy.location}</p>
          <a className="button button--primary" href={contacts.telegramProfile} target="_blank" rel="noreferrer">{copy.cta}<span aria-hidden="true">↗</span></a>
        </div>
        <FloatingCar className="hero__car" alt={copy.a11y.car} />
        <div className="scroll-cue" aria-hidden="true"><span>{copy.scroll}</span><i /></div>
      </section>
    </main>
  )
}
