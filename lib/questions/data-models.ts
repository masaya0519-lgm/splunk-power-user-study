import { Question } from '../types'

export const dataModelsQuestions: Question[] = [
  {
    id: 'dm-001',
    domainId: 'data-models',
    stem: 'データモデルとピボット（Pivot）の関係として正しいのはどれか？',
    choices: [
      { key: 'A', text: 'データモデルはピボットのデータソースとなり、SPL を書かずにビジュアライゼーションを作成できる', isCorrect: true },
      { key: 'B', text: 'ピボットはデータモデルを作成するためのツール', isCorrect: false },
      { key: 'C', text: 'データモデルはピボットテーブルの別名', isCorrect: false },
      { key: 'D', text: 'ピボットはデータモデルなしでも使用できる', isCorrect: false },
    ],
    explanation:
      'データモデルはピボットの入力データソースとして機能します。ピボットでは SPL を記述せずに、データモデルのデータセットを選んでドラッグ＆ドロップでレポートやビジュアライゼーションを作成できます。',
    reference: 'Splunk Docs: Pivot and data models',
    difficulty: 'easy',
  },
  {
    id: 'dm-002',
    domainId: 'data-models',
    stem: 'データモデルのデータセットタイプとして含まれないものはどれか？',
    choices: [
      { key: 'A', text: 'Lookups', isCorrect: true },
      { key: 'B', text: 'Events', isCorrect: false },
      { key: 'C', text: 'Searches', isCorrect: false },
      { key: 'D', text: 'Transactions', isCorrect: false },
    ],
    explanation:
      'データモデルのデータセットタイプは「Events（イベント）」「Searches（サーチ）」「Transactions（トランザクション）」の3種類です。Lookups はルックアップ機能であり、データモデルのデータセットタイプではありません。',
    reference: 'Splunk Docs: Types of dataset in data models',
    difficulty: 'medium',
  },
  {
    id: 'dm-003',
    domainId: 'data-models',
    stem: 'データモデルの属性（Attributes）として含まれないものはどれか？',
    choices: [
      { key: 'A', text: 'Index（どのインデックスからデータを取得するか）', isCorrect: true },
      { key: 'B', text: 'Fields（フィールドの定義）', isCorrect: false },
      { key: 'C', text: 'Constraints（データセットの絞り込み条件）', isCorrect: false },
      { key: 'D', text: 'Display（フィールドの表示設定）', isCorrect: false },
    ],
    explanation:
      'データモデルの主な属性はフィールド定義（Fields）とデータセットの絞り込み条件（Constraints）です。インデックス自体はデータモデル属性ではなく、Constraint の検索条件の中で `index=` として指定します。',
    reference: 'Splunk Docs: Data model attributes',
    difficulty: 'hard',
  },
  {
    id: 'dm-004',
    domainId: 'data-models',
    stem: 'データモデルを作成する方法として正しいのはどれか？',
    choices: [
      { key: 'A', text: 'Settings > Knowledge > Data Models から新規作成する', isCorrect: true },
      { key: 'B', text: 'Pivot ツールから自動生成する', isCorrect: false },
      { key: 'C', text: 'サーチを保存する際に「Save as Data Model」を選択する', isCorrect: false },
      { key: 'D', text: 'インデックス設定から自動的に生成される', isCorrect: false },
    ],
    explanation:
      'データモデルは Settings > Knowledge > Data Models の画面から「New Data Model」を作成します。データモデル名、説明、権限を設定した後、データセットとフィールドを定義していきます。',
    reference: 'Splunk Docs: Create a new data model',
    difficulty: 'easy',
  },
  {
    id: 'dm-005',
    domainId: 'data-models',
    stem: 'データモデルアクセラレーションを有効にする主な目的はどれか？',
    choices: [
      { key: 'A', text: '事前にサマリーデータを生成し、Pivot やデータモデルベースのサーチを高速化する', isCorrect: true },
      { key: 'B', text: 'データをリアルタイムで取り込む速度を向上させる', isCorrect: false },
      { key: 'C', text: 'データモデルをすべてのユーザーに共有する', isCorrect: false },
      { key: 'D', text: 'データモデルのバックアップを作成する', isCorrect: false },
    ],
    explanation:
      'データモデルアクセラレーションは tsidx ファイルを事前生成します。これにより Pivot レポートや `| datamodel` コマンドの実行速度が大幅に向上します。ただし追加のディスク容量が必要です。',
    reference: 'Splunk Docs: Accelerate data models',
    difficulty: 'easy',
  },
  {
    id: 'dm-006',
    domainId: 'data-models',
    stem: 'データモデルの階層構造（親子データセット）の説明として正しいのはどれか？',
    choices: [
      { key: 'A', text: '子データセットは親データセットの制約を継承し、追加の条件でさらに絞り込む', isCorrect: true },
      { key: 'B', text: '子データセットは親データセットとは独立した別のデータソースを持つ', isCorrect: false },
      { key: 'C', text: '親データセットは子データセットのデータをすべて含む必要がない', isCorrect: false },
      { key: 'D', text: '階層は3レベル以上は作成できない', isCorrect: false },
    ],
    explanation:
      'データモデルの階層では、子データセットは親の制約（Constraints）を継承し、追加の絞り込み条件を定義します。例: 「Webアクセス」の子として「エラーレスポンス（status>=400）」を定義できます。',
    reference: 'Splunk Docs: Hierarchical data model datasets',
    difficulty: 'medium',
  },
  {
    id: 'dm-007',
    domainId: 'data-models',
    stem: '`| datamodel` コマンドの正しい使い方はどれか？',
    choices: [
      { key: 'A', text: '| datamodel <データモデル名> <データセット名> search', isCorrect: true },
      { key: 'B', text: '| datamodel search <データモデル名>', isCorrect: false },
      { key: 'C', text: '| search datamodel=<データモデル名>', isCorrect: false },
      { key: 'D', text: '| from datamodel:<データモデル名>', isCorrect: false },
    ],
    explanation:
      '`| datamodel <データモデル名> <データセット名> search` の形式でデータモデルのデータセットを検索できます。例: `| datamodel Web_Traffic Web_Traffic search | stats count by status`',
    reference: 'Splunk Docs: datamodel command',
    difficulty: 'medium',
  },
  {
    id: 'dm-008',
    domainId: 'data-models',
    stem: 'データモデルでフィールドに設定できるタイプに含まれないものはどれか？',
    choices: [
      { key: 'A', text: 'Encrypted（暗号化フィールド）', isCorrect: true },
      { key: 'B', text: 'String', isCorrect: false },
      { key: 'C', text: 'Number', isCorrect: false },
      { key: 'D', text: 'IPv4', isCorrect: false },
    ],
    explanation:
      'データモデルのフィールドタイプには String、Number、Boolean、IPv4 などがあります。「Encrypted」は標準フィールドタイプには含まれません。IPv4 はジオロケーション機能との連携に使われます。',
    reference: 'Splunk Docs: Data model field types',
    difficulty: 'hard',
  },
  {
    id: 'dm-009',
    domainId: 'data-models',
    stem: 'ピボットでレポートを作成するステップとして正しい順序はどれか？',
    choices: [
      { key: 'A', text: 'データモデル選択 → データセット選択 → フィルタ・分割・列の設定 → ビジュアライゼーション選択', isCorrect: true },
      { key: 'B', text: 'ビジュアライゼーション選択 → データモデル選択 → フィールド設定', isCorrect: false },
      { key: 'C', text: 'インデックス選択 → データモデル選択 → ピボット設定', isCorrect: false },
      { key: 'D', text: 'SPL 入力 → データモデル選択 → 結果確認', isCorrect: false },
    ],
    explanation:
      'ピボットはまずデータモデルを選択し、次にそのデータセット（Root Dataset など）を選択します。その後、Filter（絞り込み）、Split Rows（行の分割）、Split Columns（列の分割）、Column Values（集計値）を設定してレポートを作成します。',
    reference: 'Splunk Docs: Create pivot reports and visualizations',
    difficulty: 'medium',
  },
]
