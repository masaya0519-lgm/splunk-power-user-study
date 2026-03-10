import { Question } from '../types'

export const fieldAliasesCalcFieldsQuestions: Question[] = [
  {
    id: 'fa-001',
    domainId: 'field-aliases-calc-fields',
    stem: 'フィールドエイリアスを作成する主な目的はどれか？',
    choices: [
      { key: 'A', text: '異なるソースタイプで異なる名前を持つ同じ意味のフィールドを統一した名前で検索できるようにする', isCorrect: true },
      { key: 'B', text: 'フィールド名を短くしてサーチを効率化する', isCorrect: false },
      { key: 'C', text: 'フィールドの値を変換する', isCorrect: false },
      { key: 'D', text: 'インデックス時にフィールド名を変換する', isCorrect: false },
    ],
    explanation:
      'フィールドエイリアスはデータ正規化に使います。例えば Apache ログでは `clientip`、nginx ログでは `remote_addr` と呼ばれるフィールドに同じエイリアス `src_ip` を付けることで、`src_ip` で両方のソースタイプを一括検索できます。',
    reference: 'Splunk Docs: About field aliases',
    difficulty: 'easy',
  },
  {
    id: 'fa-002',
    domainId: 'field-aliases-calc-fields',
    stem: 'フィールドエイリアスを作成した後、元のフィールドはどうなるか？',
    choices: [
      { key: 'A', text: '元のフィールドはそのまま残り、エイリアス名でも同じ値にアクセスできる', isCorrect: true },
      { key: 'B', text: '元のフィールドは削除され、エイリアス名に置き換えられる', isCorrect: false },
      { key: 'C', text: '元のフィールドは非表示になるが存在は続ける', isCorrect: false },
      { key: 'D', text: '元のフィールドの値がエイリアスにコピーされ、元は null になる', isCorrect: false },
    ],
    explanation:
      'フィールドエイリアスは「別名」なので、元のフィールド（例: `clientip`）は残り、エイリアス（例: `src_ip`）でも同じ値にアクセスできます。`rename` コマンドとは異なり、元フィールドは削除されません。',
    reference: 'Splunk Docs: About field aliases',
    difficulty: 'easy',
  },
  {
    id: 'fa-003',
    domainId: 'field-aliases-calc-fields',
    stem: 'フィールドエイリアスは Settings のどこで作成するか？',
    choices: [
      { key: 'A', text: 'Settings > Fields > Field aliases', isCorrect: true },
      { key: 'B', text: 'Settings > Knowledge > Tags', isCorrect: false },
      { key: 'C', text: 'Settings > Data > Field Extractions', isCorrect: false },
      { key: 'D', text: 'Settings > Searches > Calculated Fields', isCorrect: false },
    ],
    explanation:
      'フィールドエイリアスは Settings > Fields > Field aliases から作成します。ソースタイプ（またはホスト・ソース）に紐付けて、元のフィールド名とエイリアス名のマッピングを定義します。',
    reference: 'Splunk Docs: Create field aliases',
    difficulty: 'easy',
  },
  {
    id: 'fa-004',
    domainId: 'field-aliases-calc-fields',
    stem: '計算フィールド（Calculated Field）は何をするのか？',
    choices: [
      { key: 'A', text: '`eval` 式の結果を毎回自動的に適用し、検索結果に新しいフィールドとして追加する', isCorrect: true },
      { key: 'B', text: 'インデックス時にフィールドを計算して保存する', isCorrect: false },
      { key: 'C', text: '既存フィールドの名前を変更する', isCorrect: false },
      { key: 'D', text: 'フィールドの値を暗号化して保護する', isCorrect: false },
    ],
    explanation:
      '計算フィールドは `eval` 式を保存した知識オブジェクトで、そのソースタイプのデータを検索するたびに自動的に適用されます。例: `bytes` フィールドから `kb = round(bytes/1024, 2)` を毎回自動計算します。',
    reference: 'Splunk Docs: About calculated fields',
    difficulty: 'medium',
  },
  {
    id: 'fa-005',
    domainId: 'field-aliases-calc-fields',
    stem: '計算フィールドは Settings のどこで作成するか？',
    choices: [
      { key: 'A', text: 'Settings > Fields > Calculated Fields', isCorrect: true },
      { key: 'B', text: 'Settings > Knowledge > Field Extractions', isCorrect: false },
      { key: 'C', text: 'Settings > Fields > Field Aliases', isCorrect: false },
      { key: 'D', text: 'Settings > Advanced Search > Macros', isCorrect: false },
    ],
    explanation:
      '計算フィールドは Settings > Fields > Calculated Fields で作成します。ソースタイプに紐付けて `eval` 式を定義します。定義したフィールドは対象ソースタイプのデータに自動的に追加されます。',
    reference: 'Splunk Docs: Create calculated fields',
    difficulty: 'easy',
  },
  {
    id: 'fa-006',
    domainId: 'field-aliases-calc-fields',
    stem: '計算フィールドで使える関数の制限として正しいのはどれか？',
    choices: [
      { key: 'A', text: '`eval` コマンドで使用できる関数であれば何でも使える', isCorrect: true },
      { key: 'B', text: '数値計算関数のみ使用できる', isCorrect: false },
      { key: 'C', text: '文字列関数は使用できない', isCorrect: false },
      { key: 'D', text: '他のフィールドを参照することはできない', isCorrect: false },
    ],
    explanation:
      '計算フィールドの式は `eval` コマンドと同じ関数・演算子が使えます。数値演算（`round`, `abs`）、文字列操作（`upper`, `len`）、条件分岐（`if`, `case`）など、`eval` でサポートされるすべての関数が利用可能です。',
    reference: 'Splunk Docs: Calculated fields',
    difficulty: 'medium',
  },
  {
    id: 'fa-007',
    domainId: 'field-aliases-calc-fields',
    stem: 'フィールドエイリアスと `rename` コマンドの主な違いはどれか？',
    choices: [
      { key: 'A', text: 'フィールドエイリアスは永続的な知識オブジェクトで元フィールドを保持し、`rename` はサーチ内でのみ有効で元フィールドが消える', isCorrect: true },
      { key: 'B', text: '`rename` は永続的な設定で、フィールドエイリアスはサーチ内のみ有効', isCorrect: false },
      { key: 'C', text: 'どちらも同じ機能で使い方が異なるだけ', isCorrect: false },
      { key: 'D', text: 'フィールドエイリアスはインデックス時に適用され、`rename` は検索時のみ', isCorrect: false },
    ],
    explanation:
      'フィールドエイリアスは Settings に保存される知識オブジェクトで、すべての検索に自動適用されます。元のフィールドも残ります。`rename` コマンドはそのサーチのみで有効で、元フィールドが新しい名前に変わります（元の名前は消えます）。',
    reference: 'Splunk Docs: Field aliases vs rename command',
    difficulty: 'medium',
  },
  {
    id: 'fa-008',
    domainId: 'field-aliases-calc-fields',
    stem: '計算フィールドの知識オブジェクトが適用されるタイミングはどれか？',
    choices: [
      { key: 'A', text: '検索時（サーチ実行時）にフィールドが動的に計算・追加される', isCorrect: true },
      { key: 'B', text: 'インデックス時にデータが保存される際に計算される', isCorrect: false },
      { key: 'C', text: 'データ取り込み時にフォワーダーで計算される', isCorrect: false },
      { key: 'D', text: 'ダッシュボード表示時のみ計算される', isCorrect: false },
    ],
    explanation:
      'フィールドエイリアスや計算フィールドは検索時（サーチタイム）に適用されます。インデックスに保存されるデータは変更されません。これが Splunk の「Late Binding Schema（遅延スキーマ）」の特徴です。',
    reference: 'Splunk Docs: Late binding schema',
    difficulty: 'medium',
  },
]
