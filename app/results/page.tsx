'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { SessionAnswer } from '@/lib/types'
import { ALL_QUESTIONS } from '@/lib/questions'
import ScoreBadge from '@/components/ScoreBadge'
import Link from 'next/link'

interface SessionData {
  answers: SessionAnswer[]
  questions: string[]
}

export default function ResultsPage() {
  const router = useRouter()
  const [session, setSession] = useState<SessionData | null>(null)
  const [showDetails, setShowDetails] = useState<Record<number, boolean>>({})

  useEffect(() => {
    const raw = sessionStorage.getItem('quiz_session')
    if (!raw) {
      router.push('/')
      return
    }
    setSession(JSON.parse(raw) as SessionData)
  }, [router])

  if (!session) return null

  const total = session.answers.length
  const correct = session.answers.filter((a) => a.isCorrect).length
  const pct = total === 0 ? 0 : Math.round((correct / total) * 100)

  const resultColor = pct >= 80 ? '#10b981' : pct >= 60 ? '#f59e0b' : '#ef4444'
  const resultMessage = pct >= 80 ? '合格圏内！' : pct >= 60 ? 'もう少し！' : '要復習'

  return (
    <div style={{ maxWidth: 700, margin: '0 auto', padding: '24px 16px' }}>
      {/* Nav */}
      <div style={{ marginBottom: 24 }}>
        <Link href="/" style={{ fontSize: 13, color: '#64748b', textDecoration: 'none' }}>
          ← ホームに戻る
        </Link>
      </div>

      {/* Score summary */}
      <div
        style={{
          backgroundColor: '#1e1e2e',
          border: `1px solid ${resultColor}44`,
          borderRadius: 16,
          padding: 32,
          textAlign: 'center',
          marginBottom: 24,
        }}
      >
        <div style={{ fontSize: 48, fontWeight: 800, color: resultColor, marginBottom: 8 }}>
          {pct}%
        </div>
        <div style={{ fontSize: 20, fontWeight: 700, color: '#e2e8f0', marginBottom: 4 }}>
          {resultMessage}
        </div>
        <div style={{ fontSize: 15, color: '#94a3b8', marginBottom: 16 }}>
          {total}問中 {correct}問正解
        </div>
        <ScoreBadge correct={correct} total={total} size="md" />
      </div>

      {/* Per-question review */}
      <div style={{ marginBottom: 16 }}>
        <h2 style={{ fontSize: 16, fontWeight: 700, color: '#e2e8f0', marginBottom: 12 }}>
          問題別結果
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {session.answers.map((answer, i) => {
            const q = ALL_QUESTIONS.find((q) => q.id === answer.questionId)
            if (!q) return null
            const isOpen = showDetails[i]
            return (
              <div
                key={i}
                style={{
                  backgroundColor: '#1e1e2e',
                  border: `1px solid ${answer.isCorrect ? '#10b98133' : '#ef444433'}`,
                  borderRadius: 12,
                  overflow: 'hidden',
                }}
              >
                <button
                  onClick={() => setShowDetails((prev) => ({ ...prev, [i]: !prev[i] }))}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    padding: '12px 16px',
                    backgroundColor: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                  }}
                >
                  <span
                    style={{
                      width: 24,
                      height: 24,
                      borderRadius: '50%',
                      backgroundColor: answer.isCorrect ? '#10b98122' : '#ef444422',
                      color: answer.isCorrect ? '#10b981' : '#ef4444',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 14,
                      fontWeight: 700,
                      flexShrink: 0,
                    }}
                  >
                    {answer.isCorrect ? '○' : '✗'}
                  </span>
                  <span style={{ fontSize: 14, color: '#cbd5e1', flex: 1, lineHeight: 1.5 }}>
                    Q{i + 1}. {q.stem.slice(0, 60)}{q.stem.length > 60 ? '…' : ''}
                  </span>
                  <span style={{ fontSize: 12, color: '#64748b' }}>{isOpen ? '▲' : '▼'}</span>
                </button>

                {isOpen && (
                  <div style={{ padding: '0 16px 16px', borderTop: '1px solid #313145' }}>
                    <p style={{ fontSize: 14, color: '#94a3b8', margin: '12px 0 8px', lineHeight: 1.7 }}>
                      {q.stem}
                    </p>
                    <div style={{ fontSize: 13, marginBottom: 8 }}>
                      <span style={{ color: '#64748b' }}>あなたの解答: </span>
                      <span style={{ color: answer.isCorrect ? '#10b981' : '#ef4444', fontWeight: 700 }}>
                        {answer.chosenKey}
                      </span>
                    </div>
                    {!answer.isCorrect && (
                      <div style={{ fontSize: 13, marginBottom: 8 }}>
                        <span style={{ color: '#64748b' }}>正解: </span>
                        <span style={{ color: '#10b981', fontWeight: 700 }}>
                          {q.choices.find((c) => c.isCorrect)?.key} — {q.choices.find((c) => c.isCorrect)?.text}
                        </span>
                      </div>
                    )}
                    <p style={{ fontSize: 13, color: '#94a3b8', lineHeight: 1.7, marginTop: 8 }}>
                      {q.explanation}
                    </p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Action buttons */}
      <div style={{ display: 'flex', gap: 12 }}>
        <Link
          href="/"
          style={{
            flex: 1,
            display: 'block',
            textAlign: 'center',
            padding: '12px 0',
            borderRadius: 10,
            border: '1px solid #313145',
            color: '#cbd5e1',
            fontSize: 14,
            fontWeight: 600,
            textDecoration: 'none',
          }}
        >
          ホームに戻る
        </Link>
        <button
          onClick={() => router.back()}
          style={{
            flex: 1,
            padding: '12px 0',
            borderRadius: 10,
            border: 'none',
            backgroundColor: '#6366f1',
            color: '#fff',
            fontSize: 14,
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          もう一度
        </button>
      </div>
    </div>
  )
}
