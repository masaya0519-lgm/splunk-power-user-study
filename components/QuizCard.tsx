'use client'

import { useState } from 'react'
import { Question } from '@/lib/types'
import AnswerResult from './AnswerResult'

interface Props {
  question: Question
  index: number
  total: number
  onAnswer: (chosenKey: 'A' | 'B' | 'C' | 'D', isCorrect: boolean) => void
}

const CHOICE_KEYS = ['A', 'B', 'C', 'D'] as const

export default function QuizCard({ question, index, total, onAnswer }: Props) {
  const [chosen, setChosen] = useState<'A' | 'B' | 'C' | 'D' | null>(null)
  const isReviewing = chosen !== null
  const isCorrect = chosen !== null && question.choices.find((c) => c.key === chosen)?.isCorrect === true

  function handleChoose(key: 'A' | 'B' | 'C' | 'D') {
    if (isReviewing) return
    setChosen(key)
    const correct = question.choices.find((c) => c.key === key)?.isCorrect === true
    onAnswer(key, correct)
  }

  function getChoiceStyle(key: 'A' | 'B' | 'C' | 'D') {
    const choice = question.choices.find((c) => c.key === key)!
    const base: React.CSSProperties = {
      width: '100%',
      display: 'flex',
      alignItems: 'flex-start',
      gap: 12,
      padding: '12px 16px',
      borderRadius: 10,
      border: '1px solid #313145',
      backgroundColor: '#13131f',
      color: '#cbd5e1',
      fontSize: 14,
      cursor: isReviewing ? 'default' : 'pointer',
      textAlign: 'left',
      transition: 'all 0.15s',
      lineHeight: 1.6,
    }
    if (!isReviewing) return base
    if (choice.isCorrect) {
      return { ...base, borderColor: '#10b981', backgroundColor: '#10b98118', color: '#10b981' }
    }
    if (key === chosen && !choice.isCorrect) {
      return { ...base, borderColor: '#ef4444', backgroundColor: '#ef444418', color: '#ef4444' }
    }
    return { ...base, opacity: 0.5 }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      {/* Progress */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{ flex: 1, height: 4, backgroundColor: '#313145', borderRadius: 4 }}>
          <div
            style={{
              height: '100%',
              width: `${((index) / total) * 100}%`,
              backgroundColor: '#6366f1',
              borderRadius: 4,
              transition: 'width 0.3s ease',
            }}
          />
        </div>
        <span style={{ fontSize: 12, color: '#94a3b8', whiteSpace: 'nowrap' }}>
          {index + 1} / {total}
        </span>
      </div>

      {/* Difficulty badge */}
      {question.difficulty && (
        <div>
          <span
            style={{
              fontSize: 11,
              fontWeight: 700,
              padding: '2px 8px',
              borderRadius: 9999,
              ...(question.difficulty === 'easy'
                ? { backgroundColor: '#10b98122', color: '#10b981' }
                : question.difficulty === 'medium'
                ? { backgroundColor: '#f59e0b22', color: '#f59e0b' }
                : { backgroundColor: '#ef444422', color: '#ef4444' }),
            }}
          >
            {question.difficulty === 'easy' ? '初級' : question.difficulty === 'medium' ? '中級' : '上級'}
          </span>
        </div>
      )}

      {/* Question stem */}
      <div
        style={{
          fontSize: 16,
          color: '#e2e8f0',
          lineHeight: 1.8,
          whiteSpace: 'pre-wrap',
        }}
      >
        {question.stem}
      </div>

      {/* Choices */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {CHOICE_KEYS.map((key) => {
          const choice = question.choices.find((c) => c.key === key)!
          return (
            <button key={key} style={getChoiceStyle(key)} onClick={() => handleChoose(key)}>
              <span
                style={{
                  flexShrink: 0,
                  width: 24,
                  height: 24,
                  borderRadius: 6,
                  border: '1px solid currentColor',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 12,
                  fontWeight: 700,
                }}
              >
                {key}
              </span>
              <span>{choice.text}</span>
            </button>
          )
        })}
      </div>

      {/* Answer result */}
      {isReviewing && chosen && (
        <AnswerResult question={question} chosenKey={chosen} isCorrect={isCorrect} />
      )}
    </div>
  )
}
