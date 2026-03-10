import { Question, DomainId } from '../types'
import { transformingCommandsQuestions } from './transforming-commands'
import { filteringFormattingQuestions } from './filtering-formatting'
import { correlatingEventsQuestions } from './correlating-events'
import { creatingManagingFieldsQuestions } from './creating-managing-fields'
import { fieldAliasesCalcFieldsQuestions } from './field-aliases-calc-fields'
import { tagsEventTypesQuestions } from './tags-event-types'
import { macrosQuestions } from './macros'
import { workflowActionsQuestions } from './workflow-actions'
import { dataModelsQuestions } from './data-models'
import { cimQuestions } from './cim'

export const ALL_QUESTIONS: Question[] = [
  ...transformingCommandsQuestions,
  ...filteringFormattingQuestions,
  ...correlatingEventsQuestions,
  ...creatingManagingFieldsQuestions,
  ...fieldAliasesCalcFieldsQuestions,
  ...tagsEventTypesQuestions,
  ...macrosQuestions,
  ...workflowActionsQuestions,
  ...dataModelsQuestions,
  ...cimQuestions,
]

export function getQuestionsByDomain(domainId: DomainId): Question[] {
  return ALL_QUESTIONS.filter((q) => q.domainId === domainId)
}

export function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}
