import { useEffect, useState } from 'react'

export function Preloader({ label, onComplete }: { label: string; onComplete: () => void }) {
  const [progress, setProgress] = useState(0)
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    const assets = ['/images/nexia/nexia-master.png', '/images/preloader/uzbekistan-emblem.jpeg']
    let loaded = 0
    const finish = () => {
      loaded += 1
      setProgress(Math.round((loaded / assets.length) * 100))
      if (loaded === assets.length) window.setTimeout(() => setLeaving(true), 350)
    }
    assets.forEach((src) => { const image = new Image(); image.onload = finish; image.onerror = finish; image.src = src })
  }, [])

  useEffect(() => {
    if (!leaving) return
    const timer = window.setTimeout(onComplete, 700)
    return () => window.clearTimeout(timer)
  }, [leaving, onComplete])

  return (
    <div className={`preloader ${leaving ? 'preloader--leaving' : ''}`} aria-live="polite" aria-label={`${label} ${progress}%`}>
      <div className={`preloader__emblem ${progress === 100 ? 'is-ready' : ''}`}>
        <img src="/images/preloader/uzbekistan-emblem.jpeg" alt="" />
        <span className="preloader__shine" />
      </div>
      <span className="preloader__progress">{progress.toString().padStart(2, '0')}%</span>
    </div>
  )
}
