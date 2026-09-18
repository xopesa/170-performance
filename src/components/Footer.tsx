import type { Language } from '../types'
import { translations } from '../data/translations'
import { Wordmark } from './Wordmark'

export function Footer({ language }: { language: Language }) {
  const copy = translations[language].footer
  return (
    <footer className="footer">
      <div className="shell footer__inner">
        <Wordmark compact />
        <span>{copy.city}</span>
        <a href="#top">{copy.top} ↑</a>
      </div>
    </footer>
  )
}
