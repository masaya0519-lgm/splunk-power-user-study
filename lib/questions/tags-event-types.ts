import { Question } from '../types'

export const tagsEventTypesQuestions: Question[] = [
  {
    id: 'tet-001',
    domainId: 'tags-event-types',
    stem: 'タグ（Tag）を作成するための前提条件として正しいのはどれか？',
    choices: [
      { key: 'A', text: 'タグ付けしたいフィールドと値が存在していること', isCorrect: true },
      { key: 'B', text: '管理者権限が必要', isCorrect: false },
      { key: 'C', text: 'イベントタイプが事前に定義されていること', isCorrect: false },
      { key: 'D', text: 'データモデルが設定されていること', isCorrect: false },
    ],
    explanation:
      'タグはフィールドと値のペアに名前を付けるものです。タグ付けするには、サーチ結果でそのフィールド値が存在していることが前提で、フィールド値の横にある「Edit Tags」から作成できます。',
    reference: 'Splunk Docs: Create and manage tags',
    difficulty: 'easy',
  },
  {
    id: 'tet-002',
    domainId: 'tags-event-types',
    stem: 'タグを使ってサーチする正しい構文はどれか？（タグ名: "critical"）',
    choices: [
      { key: 'A', text: 'tag=critical', isCorrect: true },
      { key: 'B', text: '#critical', isCorrect: false },
      { key: 'C', text: 'tags::critical', isCorrect: false },
      { key: 'D', text: 'label=critical', isCorrect: false },
    ],
    explanation:
      'タグは `tag=<タグ名>` の形式で検索します。例: `index=main tag=critical` で "critical" タグが付いたすべてのイベントを取得できます。特定フィールドのタグを対象にするには `tag::<フィールド名>=<タグ名>` も使えます。',
    reference: 'Splunk Docs: Search using tags',
    difficulty: 'easy',
  },
  {
    id: 'tet-003',
    domainId: 'tags-event-types',
    stem: 'イベントタイプ（Event Type）の作成方法として正しいのはどれか？',
    choices: [
      { key: 'A', text: 'サーチを実行して結果のある状態で「Save As > Event Type」を選択する', isCorrect: true },
      { key: 'B', text: 'Settings > Knowledge > Tags から作成する', isCorrect: false },
      { key: 'C', text: 'サーチ結果のイベントを右クリックして「Create Event Type」を選択する', isCorrect: false },
      { key: 'D', text: 'データ取り込み時の設定で定義する', isCorrect: false },
    ],
    explanation:
      'イベントタイプはサーチ文字列を保存したものです。サーチを実行し、「Save As」から「Event Type」を選択して保存します。Settings > Knowledge > Event types からも作成・管理できます。',
    reference: 'Splunk Docs: Create event types',
    difficulty: 'medium',
  },
  {
    id: 'tet-004',
    domainId: 'tags-event-types',
    stem: 'イベントタイプを使ったサーチで、イベントタイプ名に対応するフィールドはどれか？',
    choices: [
      { key: 'A', text: 'eventtype', isCorrect: true },
      { key: 'B', text: 'event_type', isCorrect: false },
      { key: 'C', text: 'type', isCorrect: false },
      { key: 'D', text: 'category', isCorrect: false },
    ],
    explanation:
      'イベントタイプを使ったサーチで `eventtype=<名前>` の形式で検索します。マッチしたイベントには `eventtype` フィールドが追加されます。複数のイベントタイプにマッチする場合、`eventtype` フィールドはマルチバリューになります。',
    reference: 'Splunk Docs: Use event types in searches',
    difficulty: 'medium',
  },
  {
    id: 'tet-005',
    domainId: 'tags-event-types',
    stem: 'イベントタイプに設定できる「Priority」（優先度）の説明として正しいのはどれか？',
    choices: [
      { key: 'A', text: '1〜10 の数値で設定し、色分け表示で分類に使われる（1が最高優先度）', isCorrect: true },
      { key: 'B', text: '高・中・低の3段階のみ設定可能', isCorrect: false },
      { key: 'C', text: '優先度の高いイベントタイプほどサーチが速くなる', isCorrect: false },
      { key: 'D', text: '優先度はアラートの重大度を定義する', isCorrect: false },
    ],
    explanation:
      'イベントタイプの Priority は 1（最高）〜 10（最低）の数値で設定します。Splunk Web では優先度に応じてイベントに色が付けられます（例: 1=赤, 2=オレンジなど）。異なるイベントタイプにマッチする場合は最高優先度が表示されます。',
    reference: 'Splunk Docs: Event type priority and color coding',
    difficulty: 'medium',
  },
  {
    id: 'tet-006',
    domainId: 'tags-event-types',
    stem: 'タグとイベントタイプの主な違いとして正しいのはどれか？',
    choices: [
      { key: 'A', text: 'イベントタイプはサーチ条件でイベントを分類し、タグはフィールド値に意味のある名前を付ける', isCorrect: true },
      { key: 'B', text: 'タグはサーチ条件でイベントを分類し、イベントタイプはフィールド値に名前を付ける', isCorrect: false },
      { key: 'C', text: '両者は同じ機能を持ち、どちらを使ってもよい', isCorrect: false },
      { key: 'D', text: 'イベントタイプはインデックス時、タグは検索時に適用される', isCorrect: false },
    ],
    explanation:
      'イベントタイプはサーチ文字列（例: `error` や `failed_login`）に名前を付けてイベントを分類します。タグはフィールドと値のペア（例: `severity=high` に `critical` タグ）に意味を付けます。両者を組み合わせてより精密な分類が可能です。',
    reference: 'Splunk Docs: Tags and event types',
    difficulty: 'medium',
  },
  {
    id: 'tet-007',
    domainId: 'tags-event-types',
    stem: 'あるイベントが複数のイベントタイプにマッチする場合、どうなるか？',
    choices: [
      { key: 'A', text: 'そのイベントの `eventtype` フィールドに複数の値（マルチバリュー）が設定される', isCorrect: true },
      { key: 'B', text: '優先度の高いイベントタイプのみが適用される', isCorrect: false },
      { key: 'C', text: '最初に定義されたイベントタイプのみが適用される', isCorrect: false },
      { key: 'D', text: 'エラーが発生し、どのイベントタイプも適用されない', isCorrect: false },
    ],
    explanation:
      'イベントが複数のイベントタイプのサーチ条件に一致する場合、そのイベントの `eventtype` フィールドにはすべてのマッチしたイベントタイプ名がマルチバリューとして格納されます。',
    reference: 'Splunk Docs: How event types work',
    difficulty: 'hard',
  },
  {
    id: 'tet-008',
    domainId: 'tags-event-types',
    stem: 'Settings > Tags でタグを管理する際、タグの「Enabled/Disabled」設定を変更すると何が変わるか？',
    choices: [
      { key: 'A', text: 'タグを無効にすると、そのフィールド値への `tag=` 検索でヒットしなくなる', isCorrect: true },
      { key: 'B', text: 'タグを無効にするとタグが削除される', isCorrect: false },
      { key: 'C', text: 'タグを無効にしてもサーチには影響しない', isCorrect: false },
      { key: 'D', text: 'タグを無効にするとフィールドが非表示になる', isCorrect: false },
    ],
    explanation:
      'タグを Disabled にすると、そのタグは検索時に評価されなくなり `tag=<名前>` での検索でヒットしなくなります。タグ自体は削除されないため、再度 Enabled にすると機能が復活します。',
    reference: 'Splunk Docs: Enable and disable tags',
    difficulty: 'medium',
  },
]
