import { useRef } from 'react'
import type { Language } from '../types'
import { translations } from '../data/translations'
import { useReveal } from '../hooks/useReveal'

const MAP_EMBED = 'https://yandex.uz/map-widget/v1/?ll=65.360415%2C40.099604&z=16&pt=65.360415,40.099604'
const MAP_LINK = 'https://yandex.uz/maps/-/CXa7BJ3r'

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
          <a className="text-link location__link" data-reveal href={MAP_LINK} target="_blank" rel="noreferrer">
            {copy.mapLink} <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="map" data-reveal aria-label={copy.map}>
          <iframe
            className="map__frame"
            src={MAP_EMBED}
            title={copy.map}
            loading="lazy"
            allowFullScreen
          />
          <span className="map__pin" aria-hidden="true"><i />170</span>
          <small className="map__coords">{copy.coords}</small>
        </div>
      </div>
    </section>
  )
}
