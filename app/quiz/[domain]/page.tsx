'use client'

import { useEffect, useState, useCallback } from 'react'
import { useParams, useSearchParams, useRouter } from 'next/navigation'
import { DOMAINS, Question, SessionAnswer, DomainId } from '@/lib/types'
import { getQuestionsByDomain, shuffleArray, ALL_QUESTIONS } from '@/lib/questions'
import { recordAnswer } from '@/lib/progress'
import QuizCard from '@/components/QuizCard'
import ScoreBadge from '@/components/ScoreBadge'
import Link from 'next/link'

export default function QuizPage() {
  const params = useParams()
  const searchParams = useSearchParams()
  const router = useRouter()

  const domainSlug = params.domain as string
  const isExamMode = domainSlug === 'exam'
  const nParam = searchParams.get('n')

  const domain = DOMAINS.find((d) => d.id === domainSlug)

  const [questions, setQuestions] = useState<Question[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState<SessionAnswer[]>([])
  const [phase, setPhase] = useState<'answering' | 'reviewing' | 'complete'>('answering')
  const [answered, setAnswered] = useState(false)

  useEffect(() => {
    let pool: Question[]
    if (isExamMode) {
      // Proportional sampling by domain weight
      pool = []
      const total = 20
      DOMAINS.forEach((d) => {
        const count = Math.round((d.weight / 100) * total)
        const qs = shuffleArray(getQuestionsByDomain(d.id)).slice(0, count)
        pool.push(...qs)
      })
      pool = shuffleArray(pool).slice(0, total)
    } else {
      if (!domain) return
      const base = shuffleArray(getQuestionsByDomain(domain.id))
      const n = nParam === 'all' ? base.length : Math.min(parseInt(nParam ?? '10') || 10, base.length)
      pool = base.slice(0, n)
    }
    setQuestions(pool)
    setCurrentIndex(0)
    setAnswers([])
    setPhase('answering')
    setAnswered(false)
  }, [domainSlug, nParam])

  const handleAnswer = useCallback(
    (chosenKey: 'A' | 'B' | 'C' | 'D', isCorrect: boolean) => {
      const q = questions[currentIndex]
      if (!q) return
      const newAnswer: SessionAnswer = { questionId: q.id, chosenKey, isCorrect }
      setAnswers((prev) => [...prev, newAnswer])
      setPhase('reviewing')
      setAnswered(true)
      if (!isExamMode && domain) {
        recordAnswer(domain.id as DomainId, q.id, isCorrect)
      } else if (isExamMode) {
        recordAnswer(q.domainId, q.id, isCorrect)
      }
    },
    [questions, currentIndex, domain, isExamMode]
  )

  function handleNext() {
    if (currentIndex + 1 >= questions.length) {
      // Save session to sessionStorage for results page
      sessionStorage.setItem('quiz_session', JSON.stringify({ answers, questions: questions.map((q) => q.id) }))
      router.push('/results')
    } else {
      setCurrentIndex((i) => i + 1)
      setPhase('answering')
      setAnswered(false)
    }
  }

  if (!isExamMode && !domain) {
    return (
      <div style={{ maxWidth: 700, margin: '80px auto', textAlign: 'center', color: '#94a3b8' }}>
        <p>分野が見つかりません</p>
        <Link href="/" style={{ color: '#6366f1' }}>ホームに戻る</Link>
      </div>
    )
  }

  if (questions.length === 0) {
    return (
      <div style={{ maxWidth: 700, margin: '80px auto', textAlign: 'center', color: '#94a3b8' }}>
        <p>問題を読み込み中...</p>
      </div>
    )
  }

  const currentQuestion = questions[currentIndex]
  const correctCount = answers.filter((a) => a.isCorrect).length
  const accentColor = isExamMode ? '#6366f1' : (domain?.color ?? '#6366f1')

  return (
    <div style={{ maxWidth: 700, margin: '0 auto', padding: '24px 16px' }}>
      {/* Nav */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
        <Link
          href="/"
          style={{ fontSize: 13, color: '#64748b', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 4 }}
        >
          ← ホーム
        </Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 13, color: '#94a3b8' }}>現在のスコア:</span>
          <ScoreBadge correct={correctCount} total={answers.length} />
        </div>
      </div>

      {/* Domain label */}
      <div style={{ marginBottom: 20 }}>
        <span
          style={{
            fontSize: 13,
            fontWeight: 700,
            color: accentColor,
            backgroundColor: `${accentColor}18`,
            border: `1px solid ${accentColor}33`,
            padding: '4px 10px',
            borderRadius: 8,
          }}
        >
          {isExamMode ? '模擬試験モード' : domain?.label}
        </span>
      </div>

      {/* Quiz card */}
      <div
        style={{
          backgroundColor: '#1e1e2e',
          border: '1px solid #313145',
          borderRadius: 16,
          padding: 24,
        }}
      >
        <QuizCard
          question={currentQuestion}
          index={currentIndex}
          total={questions.length}
          onAnswer={handleAnswer}
        />

        {/* Next button */}
        {answered && (
          <button
            onClick={handleNext}
            style={{
              marginTop: 20,
              width: '100%',
              padding: '12px 0',
              borderRadius: 10,
              border: 'none',
              backgroundColor: accentColor,
              color: '#fff',
              fontSize: 15,
              fontWeight: 700,
              cursor: 'pointer',
            }}
          >
            {currentIndex + 1 >= questions.length ? '結果を見る →' : '次の問題 →'}
          </button>
        )}
      </div>
    </div>
  )
}
