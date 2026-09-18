import type { Language } from '../types'
import { LanguageSwitcher } from './LanguageSwitcher'
import { Wordmark } from './Wordmark'
import { translations } from '../data/translations'

export function Header({ language, onLanguageChange }: { language: Language; onLanguageChange: (language: Language) => void }) {
  const copy = translations[language].a11y
  return (
    <header className="header">
      <a className="header__brand" href="#top" aria-label={copy.home}><Wordmark compact /></a>
      <LanguageSwitcher language={language} label={copy.language} onChange={onLanguageChange} />
    </header>
  )
}
