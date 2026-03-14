'use client'

import { DomainId, DomainProgress, ProgressStore } from './types'

const STORAGE_KEY = 'splunk_progress_v1'

function defaultProgress(domainId: DomainId): DomainProgress {
  return { domainId, attempted: 0, correct: 0, lastAttempted: null, answeredIds: [], incorrectIds: [] }
}

function defaultStore(): ProgressStore {
  return { version: 1, domains: {} }
}

export function loadProgress(): ProgressStore {
  if (typeof window === 'undefined') return defaultStore()
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return defaultStore()
    return JSON.parse(raw) as ProgressStore
  } catch {
    return defaultStore()
  }
}

export function saveProgress(store: ProgressStore): void {
  if (typeof window === 'undefined') return
  localStorage.setItem(STORAGE_KEY, JSON.stringify(store))
}

export function getDomainProgress(domainId: DomainId): DomainProgress {
  const store = loadProgress()
  return store.domains[domainId] ?? defaultProgress(domainId)
}

export function recordAnswer(domainId: DomainId, questionId: string, isCorrect: boolean): void {
  const store = loadProgress()
  const prev = store.domains[domainId] ?? defaultProgress(domainId)
  const alreadyAnswered = prev.answeredIds.includes(questionId)
  const prevIncorrect = prev.incorrectIds ?? []
  const newIncorrectIds = isCorrect
    ? prevIncorrect.filter((id) => id !== questionId)
    : prevIncorrect.includes(questionId) ? prevIncorrect : [...prevIncorrect, questionId]
  store.domains[domainId] = {
    ...prev,
    attempted: alreadyAnswered ? prev.attempted : prev.attempted + 1,
    correct: isCorrect && !alreadyAnswered ? prev.correct + 1 : prev.correct,
    lastAttempted: new Date().toISOString(),
    answeredIds: alreadyAnswered ? prev.answeredIds : [...prev.answeredIds, questionId],
    incorrectIds: newIncorrectIds,
  }
  saveProgress(store)
}

export function resetDomain(domainId: DomainId): void {
  const store = loadProgress()
  store.domains[domainId] = defaultProgress(domainId)
  saveProgress(store)
}

export function resetAll(): void {
  saveProgress(defaultStore())
}
