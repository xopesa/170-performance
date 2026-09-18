import { useRef } from 'react'
import type { Language } from '../types'
import { translations } from '../data/translations'
import { useReveal } from '../hooks/useReveal'

export function Location({ language }: { language: Language }) {
  const ref = useRef<HTMLElement>(null)
  useReveal(ref)
  const copy = translations[language].locationBlock
  return (
    <section className="location section" ref={ref} aria-labelledby="location-title">
      <div className="shell location__grid">
        <div className="location__copy">
          <p className="eyebrow" data-reveal>{copy.eyebrow}</p>
          <h2 id="location-title" data-reveal>{copy.title}</h2>
          <p className="location__note" data-reveal>{copy.note}</p>
        </div>
        <div className="map-placeholder" data-reveal aria-label={copy.map}>
          <span className="map-placeholder__orbit" />
          <span className="map-placeholder__pin"><i />170</span>
          <small>{copy.map}</small>
        </div>
      </div>
    </section>
  )
}
