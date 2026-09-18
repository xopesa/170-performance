export function Wordmark({ compact = false }: { compact?: boolean }) {
  return (
    <span className={`wordmark ${compact ? 'wordmark--compact' : ''}`} aria-label="170Performance">
      <span className="wordmark__number">170</span>
      <span className="wordmark__script">Performance</span>
    </span>
  )
}
