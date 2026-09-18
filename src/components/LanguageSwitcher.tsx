import type { Language } from '../types'

export function LanguageSwitcher({ language, label, onChange }: { language: Language; label: string; onChange: (language: Language) => void }) {
  return (
    <div className="language-switcher" aria-label={label}>
      {(['ru', 'uz'] as const).map((item) => (
        <button key={item} type="button" className={language === item ? 'is-active' : ''} onClick={() => onChange(item)} aria-pressed={language === item}>
          {item.toUpperCase()}
        </button>
      ))}
    </div>
  )
}
