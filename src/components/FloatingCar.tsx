export function FloatingCar({ className = '', decorative = false, alt = '' }: { className?: string; decorative?: boolean; alt?: string }) {
  return (
    <div className={`floating-car ${className}`}>
      <div className="floating-car__drift">
        <img
          src="/images/nexia/nexia-master.png"
          alt={decorative ? '' : alt}
          aria-hidden={decorative || undefined}
          fetchPriority={decorative ? undefined : 'high'}
          loading={decorative ? 'lazy' : undefined}
          decoding="async"
        />
      </div>
    </div>
  )
}
