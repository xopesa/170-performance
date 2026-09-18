const stars = [
  [8, 18, 1], [21, 34, 1.5], [35, 12, 1], [48, 29, 1], [61, 16, 1.5], [78, 33, 1], [91, 14, 1],
  [13, 58, 1], [29, 76, 1], [45, 61, 1.5], [67, 72, 1], [83, 58, 1.5], [95, 82, 1],
  [5, 91, 1], [38, 89, 1], [73, 93, 1], [88, 43, 1], [56, 48, 1],
]

export function StarField({ className = '' }: { className?: string }) {
  return (
    <div className={`star-field ${className}`} aria-hidden="true">
      {stars.map(([x, y, size], index) => (
        <i key={index} style={{ left: `${x}%`, top: `${y}%`, width: size, height: size, animationDelay: `${index * -1.7}s` }} />
      ))}
    </div>
  )
}
