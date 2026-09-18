import type { Language } from '../types'
import { translations } from '../data/translations'
import { contacts } from '../data/contacts'
import { FloatingCar } from './FloatingCar'
import { StarField } from './StarField'
import { Wordmark } from './Wordmark'

export function FinalScreen({ language }: { language: Language }) {
  const copy = translations[language]
  return (
    <section className="final-screen" aria-labelledby="final-title">
      <StarField className="star-field--final" />
      <FloatingCar className="final-screen__car" decorative />
      <div className="final-screen__content">
        <h2 id="final-title"><Wordmark /></h2>
        <p>{copy.final.slogan}</p>
        <a className="button button--primary" href={contacts.telegramProfile} target="_blank" rel="noreferrer">{copy.cta}<span aria-hidden="true">↗</span></a>
      </div>
    </section>
  )
}
