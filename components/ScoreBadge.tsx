interface Props {
  correct: number
  total: number
  size?: 'sm' | 'md'
}

export default function ScoreBadge({ correct, total, size = 'sm' }: Props) {
  const pct = total === 0 ? 0 : Math.round((correct / total) * 100)
  const color =
    total === 0
      ? '#6b7280'
      : pct >= 80
      ? '#10b981'
      : pct >= 60
      ? '#f59e0b'
      : '#ef4444'

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 4,
        padding: size === 'sm' ? '2px 8px' : '4px 12px',
        borderRadius: 9999,
        fontSize: size === 'sm' ? 12 : 14,
        fontWeight: 600,
        backgroundColor: `${color}22`,
        color,
        border: `1px solid ${color}44`,
      }}
    >
      {total === 0 ? '未挑戦' : `${correct}/${total} (${pct}%)`}
    </span>
  )
}
