'use client'

import { useEffect, useState } from 'react'
import { DOMAINS, DomainProgress } from '@/lib/types'
import { loadProgress, resetAll } from '@/lib/progress'
import { getQuestionsByDomain } from '@/lib/questions'
import DomainCard from '@/components/DomainCard'
import ScoreBadge from '@/components/ScoreBadge'
import Link from 'next/link'

export default function HomePage() {
  const [progressMap, setProgressMap] = useState<Record<string, DomainProgress>>({})
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const store = loadProgress()
    setProgressMap(store.domains as Record<string, DomainProgress>)
  }, [])

  const totalQuestions = DOMAINS.reduce((s, d) => s + getQuestionsByDomain(d.id).length, 0)
  const totalAttempted = Object.values(progressMap).reduce((s, p) => s + (p?.attempted ?? 0), 0)
  const totalCorrect = Object.values(progressMap).reduce((s, p) => s + (p?.correct ?? 0), 0)
  const totalWrong = Object.values(progressMap).reduce((s, p) => s + (p?.incorrectIds?.length ?? 0), 0)

  function handleReset() {
    if (confirm('全進捗をリセットしますか？')) {
      resetAll()
      setProgressMap({})
    }
  }

  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '32px 16px' }}>
      {/* Header */}
      <div style={{ marginBottom: 32 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <div>
            <h1
              style={{
                fontSize: 28,
                fontWeight: 800,
                background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: 6,
              }}
            >
              Splunk Power User 試験対策
            </h1>
            <p style={{ fontSize: 14, color: '#94a3b8' }}>
              Splunk Core Certified Power User (SPLK-1003) 分野別問題演習
            </p>
          </div>
          <button
            onClick={handleReset}
            style={{
              padding: '6px 14px',
              borderRadius: 8,
              border: '1px solid #313145',
              backgroundColor: 'transparent',
              color: '#64748b',
              fontSize: 13,
              cursor: 'pointer',
            }}
          >
            リセット
          </button>
        </div>

        {/* Overall progress */}
        {mounted && (
          <div
            style={{
              marginTop: 20,
              padding: 16,
              borderRadius: 12,
              backgroundColor: '#1e1e2e',
              border: '1px solid #313145',
              display: 'flex',
              alignItems: 'center',
              gap: 20,
              flexWrap: 'wrap',
            }}
          >
            <div>
              <div style={{ fontSize: 12, color: '#94a3b8', marginBottom: 4 }}>全体正解率</div>
              <ScoreBadge correct={totalCorrect} total={totalAttempted} size="md" />
            </div>
            {totalWrong > 0 && (
              <div style={{ padding: '6px 12px', borderRadius: 8, backgroundColor: '#ef444418', border: '1px solid #ef444444' }}>
                <div style={{ fontSize: 11, color: '#94a3b8', marginBottom: 2 }}>苦手問題</div>
                <div style={{ fontSize: 18, fontWeight: 700, color: '#ef4444' }}>{totalWrong}問</div>
              </div>
            )}
            <div style={{ flex: 1, minWidth: 200 }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: 12,
                  color: '#64748b',
                  marginBottom: 6,
                }}
              >
                <span>解答済み</span>
                <span>{totalAttempted} / {totalQuestions} 問</span>
              </div>
              <div style={{ height: 6, backgroundColor: '#313145', borderRadius: 4 }}>
                <div
                  style={{
                    height: '100%',
                    width: totalQuestions === 0 ? '0%' : `${(totalAttempted / totalQuestions) * 100}%`,
                    backgroundColor: '#6366f1',
                    borderRadius: 4,
                    transition: 'width 0.5s ease',
                  }}
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Exam mode link */}
      <div style={{ marginBottom: 24 }}>
        <Link
          href="/quiz/exam"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '16px 20px',
            borderRadius: 12,
            backgroundColor: '#1e1e2e',
            border: '1px solid #6366f155',
            textDecoration: 'none',
          }}
        >
          <div>
            <div style={{ fontSize: 15, fontWeight: 700, color: '#e2e8f0', marginBottom: 2 }}>
              模擬試験モード
            </div>
            <div style={{ fontSize: 13, color: '#94a3b8' }}>
              全分野から出題比率に合わせて20問出題
            </div>
          </div>
          <span style={{ fontSize: 20, color: '#6366f1' }}>→</span>
        </Link>
      </div>

      {/* Domain grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: 16,
        }}
      >
        {DOMAINS.map((domain) => {
          const progress: DomainProgress = progressMap[domain.id] ?? {
            domainId: domain.id,
            attempted: 0,
            correct: 0,
            lastAttempted: null,
            answeredIds: [],
          }
          const qCount = getQuestionsByDomain(domain.id).length
          const wrongCount = progress.incorrectIds?.length ?? 0
          return (
            <DomainCard key={domain.id} domain={domain} progress={progress} questionCount={qCount} wrongCount={wrongCount} />
          )
        })}
      </div>
    </div>
  )
}
