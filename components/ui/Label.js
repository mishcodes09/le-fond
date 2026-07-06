export function Label({ children, light = false, className = '' }) {
  return (
    <span
      className={`font-mono text-[11px] tracking-[0.18em] uppercase ${
        light ? 'text-surface/40' : 'text-ink/40'
      } ${className}`}
    >
      {children}
    </span>
  )
}
