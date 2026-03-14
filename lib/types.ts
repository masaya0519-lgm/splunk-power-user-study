export type DomainId =
  | 'transforming-commands'       // 1.0 5%
  | 'filtering-formatting'        // 2.0 10%
  | 'correlating-events'          // 3.0 15%
  | 'creating-managing-fields'    // 4.0 10%
  | 'field-aliases-calc-fields'   // 5.0 10%
  | 'tags-event-types'            // 6.0 10%
  | 'macros'                      // 7.0 10%
  | 'workflow-actions'            // 8.0 10%
  | 'data-models'                 // 9.0 10%
  | 'cim'                         // 10.0 10%

export interface Domain {
  id: DomainId
  section: string
  label: string
  weight: number
  color: string
  description: string
}

export interface Choice {
  key: 'A' | 'B' | 'C' | 'D'
  text: string
  isCorrect: boolean
}

export interface Question {
  id: string
  domainId: DomainId
  stem: string
  choices: Choice[]
  explanation: string
  reference?: string
  difficulty?: 'easy' | 'medium' | 'hard'
}

export interface DomainProgress {
  domainId: DomainId
  attempted: number
  correct: number
  lastAttempted: string | null
  answeredIds: string[]
  incorrectIds: string[]
}

export interface ProgressStore {
  version: 1
  domains: Partial<Record<DomainId, DomainProgress>>
}

export interface SessionAnswer {
  questionId: string
  chosenKey: 'A' | 'B' | 'C' | 'D'
  isCorrect: boolean
}

export const DOMAINS: Domain[] = [
  {
    id: 'transforming-commands',
    section: '1.0',
    label: 'Transforming Commands for Visualizations',
    weight: 5,
    color: '#6366f1',
    description: 'chart / timechart コマンドを使ったビジュアライゼーション',
  },
  {
    id: 'filtering-formatting',
    section: '2.0',
    label: 'Filtering and Formatting Results',
    weight: 10,
    color: '#0891b2',
    description: 'eval / search / where / fillnull コマンドによる結果フィルタリングと整形',
  },
  {
    id: 'correlating-events',
    section: '3.0',
    label: 'Correlating Events',
    weight: 15,
    color: '#2563eb',
    description: 'transaction コマンドを使ったイベント相関・グループ化・レポート作成',
  },
  {
    id: 'creating-managing-fields',
    section: '4.0',
    label: 'Creating and Managing Fields',
    weight: 10,
    color: '#db2777',
    description: 'Field Extractor を使った正規表現・デリミタによるフィールド抽出',
  },
  {
    id: 'field-aliases-calc-fields',
    section: '5.0',
    label: 'Field Aliases and Calculated Fields',
    weight: 10,
    color: '#0d9488',
    description: 'フィールドエイリアスと計算フィールドの作成・活用',
  },
  {
    id: 'tags-event-types',
    section: '6.0',
    label: 'Tags and Event Types',
    weight: 10,
    color: '#059669',
    description: 'タグとイベントタイプの作成・使用',
  },
  {
    id: 'macros',
    section: '7.0',
    label: 'Creating and Using Macros',
    weight: 10,
    color: '#d97706',
    description: 'マクロの作成・引数定義・呼び出し方法',
  },
  {
    id: 'workflow-actions',
    section: '8.0',
    label: 'Creating and Using Workflow Actions',
    weight: 10,
    color: '#dc2626',
    description: 'GET / POST / Search ワークフローアクションの作成と使用',
  },
  {
    id: 'data-models',
    section: '9.0',
    label: 'Creating Data Models',
    weight: 10,
    color: '#9333ea',
    description: 'データモデルの構造・属性・作成とピボットとの関係',
  },
  {
    id: 'cim',
    section: '10.0',
    label: 'Using the CIM Add-On',
    weight: 10,
    color: '#7c3aed',
    description: 'Common Information Model の説明・知識オブジェクト・データ正規化',
  },
]
