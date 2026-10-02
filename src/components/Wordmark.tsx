import { useId } from 'react'

export function Wordmark({ compact = false }: { compact?: boolean }) {
  const glowId = useId()
  return (
    <span className={`wordmark ${compact ? 'wordmark--compact' : ''}`} aria-label="170CARS">
      <span className="wordmark__number">170</span>
      <svg className="wordmark__script" viewBox="0 0 320 100" aria-hidden="true" focusable="false">
        <defs>
          <filter id={glowId} x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="3.2" />
          </filter>
        </defs>
        <text className="wordmark__script-fill" x="2" y="78">CARS</text>
        <text className="wordmark__script-glow" x="2" y="78" filter={`url(#${glowId})`}>
          CARS
        </text>
        <text
          className="wordmark__script-glow wordmark__script-glow--white"
          x="2"
          y="78"
          filter={`url(#${glowId})`}
        >
          CARS
        </text>
        <text className="wordmark__script-run" x="2" y="78">CARS</text>
        <text className="wordmark__script-run wordmark__script-run--white" x="2" y="78">CARS</text>
      </svg>
    </span>
  )
}
