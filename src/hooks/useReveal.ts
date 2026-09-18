import { useEffect, type RefObject } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useReveal(ref: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const element = ref.current
    if (!element || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const context = gsap.context(() => {
      gsap.fromTo(element.querySelectorAll<HTMLElement>('[data-reveal]'),
        { autoAlpha: 0, y: 34 },
        { autoAlpha: 1, y: 0, duration: 1, stagger: .12, ease: 'power3.out', scrollTrigger: { trigger: element, start: 'top 78%', once: true } },
      )
    }, element)
    return () => context.revert()
  }, [ref])
}
