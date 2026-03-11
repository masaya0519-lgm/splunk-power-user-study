'use client'

import { useState } from 'react'
import { Question } from '@/lib/types'

const INSULTS = [
  'おいおい、Splunkの「S」も知らんのか？',
  'これは流石にドキュメント読んだことないやろ',
  '猿でも正解できる問題やぞ',
  '試験代、もったいなかったね',
  'SPLって略称すら知らんの？',
  'まじか…救いようがない',
  'Splunk公式が泣いてるよ',
  '今すぐ退職届出してこい',
  '研修のやり直しを強くお勧めします',
  '君の知識、完全にゴミやん',
  'これ間違える人類、初めて見た',
  '天才的な間違え方だけはある',
  'お願いだから誰かに教えないでくれ',
  '君の上司に報告しようか？',
  'その選択肢、なんで選んだの…理由が聞きたい',
  '惜しくもなんともない',
  'もしかして問題文読んでないのでは？',
  'Splunk以前に日本語の問題では？',
  '全問これだったら逆に才能',
  'あと何回間違えれば覚えるんや',
]

interface Props {
  question: Question
  chosenKey: 'A' | 'B' | 'C' | 'D'
  isCorrect: boolean
}

export default function AnswerResult({ question, chosenKey, isCorrect }: Props) {
  const correctChoice = question.choices.find((c) => c.isCorrect)!
  const [insult] = useState(() => INSULTS[Math.floor(Math.random() * INSULTS.length)])

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
        {!isCorrect && (
          <span style={{ fontSize: 12, fontWeight: 400, color: '#f87171', marginLeft: 8 }}>{insult}</span>
        )}
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
