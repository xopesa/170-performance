import { useCallback, useEffect, useState } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Preloader } from './components/Preloader'
import { ServicesJourney } from './components/ServicesJourney'
import { Projects } from './components/Projects'
import { About } from './components/About'
import { Location } from './components/Location'
import { Contacts } from './components/Contacts'
import { FinalScreen } from './components/FinalScreen'
import { Footer } from './components/Footer'
import type { Language } from './types'
import { translations } from './data/translations'

function App() {
  const [language, setLanguage] = useState<Language>(() => (localStorage.getItem('170-language') as Language) || 'ru')
  const [loading, setLoading] = useState(true)
  const finishLoading = useCallback(() => setLoading(false), [])

  useEffect(() => {
    localStorage.setItem('170-language', language)
    document.documentElement.lang = language
    document.title = translations[language].meta.title
    document.querySelector<HTMLMetaElement>('meta[name="description"]')?.setAttribute('content', translations[language].meta.description)
  }, [language])

  return (
    <>
      {loading && <Preloader label={translations[language].a11y.loading} onComplete={finishLoading} />}
      <Header language={language} onLanguageChange={setLanguage} />
      <Hero language={language} />
      <ServicesJourney language={language} />
      <Projects language={language} />
      <About language={language} />
      <Location language={language} />
      <Contacts language={language} />
      <FinalScreen language={language} />
      <Footer language={language} />
    </>
  )
}

export default App
