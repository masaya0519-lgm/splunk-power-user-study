import { Question } from '@/lib/types'

interface Props {
  question: Question
  chosenKey: 'A' | 'B' | 'C' | 'D'
  isCorrect: boolean
}

export default function AnswerResult({ question, chosenKey, isCorrect }: Props) {
  const correctChoice = question.choices.find((c) => c.isCorrect)!

  return (
    <div
      style={{
        marginTop: 16,
        padding: 16,
        borderRadius: 12,
        border: `1px solid ${isCorrect ? '#10b98144' : '#ef444444'}`,
        backgroundColor: isCorrect ? '#10b98111' : '#ef444411',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          marginBottom: 12,
          fontSize: 16,
          fontWeight: 700,
          color: isCorrect ? '#10b981' : '#ef4444',
        }}
      >
        <span>{isCorrect ? '✓ 正解！' : `✗ 不正解 (あなたの解答: ${chosenKey})`}</span>
      </div>

      {!isCorrect && (
        <div
          style={{
            marginBottom: 12,
            padding: '8px 12px',
            borderRadius: 8,
            backgroundColor: '#10b98118',
            color: '#10b981',
            fontWeight: 600,
            fontSize: 14,
          }}
        >
          正解: {correctChoice.key}. {correctChoice.text}
        </div>
      )}

      <div>
        <div style={{ fontSize: 12, fontWeight: 700, color: '#94a3b8', marginBottom: 6 }}>解説</div>
        <p
          style={{ fontSize: 14, color: '#cbd5e1', lineHeight: 1.8, margin: 0, whiteSpace: 'pre-wrap' }}
        >
          {question.explanation}
        </p>
      </div>

      {question.reference && (
        <div
          style={{
            marginTop: 10,
            fontSize: 12,
            color: '#64748b',
            borderTop: '1px solid #313145',
            paddingTop: 10,
          }}
        >
          📖 {question.reference}
        </div>
      )}
    </div>
  )
}
