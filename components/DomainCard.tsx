'use client'

import Link from 'next/link'
import { Domain, DomainProgress } from '@/lib/types'
import ScoreBadge from './ScoreBadge'

interface Props {
  domain: Domain
  progress: DomainProgress
  questionCount: number
  wrongCount: number
}

export default function DomainCard({ domain, progress, questionCount, wrongCount }: Props) {
  const radius = 28
  const circumference = 2 * Math.PI * radius
  const pct = questionCount === 0 ? 0 : progress.attempted / questionCount
  const strokeDash = pct * circumference

  return (
    <div
      style={{
        backgroundColor: '#1e1e2e',
        border: '1px solid #313145',
        borderRadius: 16,
        padding: 20,
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
            <span style={{ fontSize: 11, color: '#64748b', fontWeight: 600 }}>{domain.section}</span>
            <span
              style={{
                backgroundColor: `${domain.color}22`,
                color: domain.color,
                border: `1px solid ${domain.color}44`,
                borderRadius: 9999,
                fontSize: 11,
                fontWeight: 700,
                padding: '2px 8px',
              }}
            >
              {domain.weight}%
            </span>
          </div>
          <h3 style={{ fontSize: 15, fontWeight: 700, color: '#e2e8f0', margin: 0, lineHeight: 1.4 }}>{domain.label}</h3>
          <p style={{ fontSize: 12, color: '#94a3b8', margin: '4px 0 0', lineHeight: 1.5 }}>
            {domain.description}
          </p>
        </div>

        {/* Progress ring */}
        <svg width={72} height={72} style={{ flexShrink: 0, marginLeft: 12 }}>
          <circle cx={36} cy={36} r={radius} fill="none" stroke="#313145" strokeWidth={6} />
          <circle
            cx={36}
            cy={36}
            r={radius}
            fill="none"
            stroke={domain.color}
            strokeWidth={6}
            strokeDasharray={`${strokeDash} ${circumference}`}
            strokeLinecap="round"
            transform="rotate(-90 36 36)"
            style={{ transition: 'stroke-dasharray 0.5s ease' }}
          />
          <text
            x={36}
            y={40}
            textAnchor="middle"
            fill="#e2e8f0"
            fontSize={12}
            fontWeight={700}
          >
            {progress.attempted}/{questionCount}
          </text>
        </svg>
      </div>

      {/* Score */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <span style={{ fontSize: 12, color: '#94a3b8' }}>正解率:</span>
        <ScoreBadge correct={progress.correct} total={progress.attempted} />
      </div>

      {/* Actions */}
      <div style={{ display: 'flex', gap: 8, marginTop: 4 }}>
        {([5, 10] as const).map((n) => (
          <Link
            key={n}
            href={`/quiz/${domain.id}?n=${n}`}
            style={{
              flex: 1,
              display: 'block',
              textAlign: 'center',
              padding: '8px 0',
              borderRadius: 8,
              fontSize: 13,
              fontWeight: 600,
              backgroundColor: '#313145',
              color: '#e2e8f0',
              textDecoration: 'none',
              transition: 'background 0.15s',
            }}
          >
            {n}問
          </Link>
        ))}
        <Link
          href={`/quiz/${domain.id}?n=all`}
          style={{
            flex: 1,
            display: 'block',
            textAlign: 'center',
            padding: '8px 0',
            borderRadius: 8,
            fontSize: 13,
            fontWeight: 600,
            backgroundColor: `${domain.color}33`,
            color: domain.color,
            border: `1px solid ${domain.color}55`,
            textDecoration: 'none',
          }}
        >
          全問
        </Link>
      </div>

      {/* Wrong filter button */}
      {wrongCount > 0 && (
        <Link
          href={`/quiz/${domain.id}?filter=wrong`}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 6,
            padding: '8px 0',
            borderRadius: 8,
            fontSize: 13,
            fontWeight: 700,
            backgroundColor: '#ef444418',
            color: '#ef4444',
            border: '1px solid #ef444444',
            textDecoration: 'none',
          }}
        >
          × 苦手問題のみ（{wrongCount}問）
        </Link>
      )}
    </div>
  )
}
