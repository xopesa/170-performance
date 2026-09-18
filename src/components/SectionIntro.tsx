export function SectionIntro({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <header className="section-intro">
      <p className="eyebrow" data-reveal>{eyebrow}</p>
      <h2 data-reveal>{title}</h2>
    </header>
  )
}
