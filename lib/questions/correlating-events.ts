import { Question } from '../types'

export const correlatingEventsQuestions: Question[] = [
  {
    id: 'ce-001',
    domainId: 'correlating-events',
    stem: '`transaction` コマンドの説明として正しいのはどれか？',
    choices: [
      { key: 'A', text: '関連する複数のイベントを1つのトランザクションイベントとしてグループ化する', isCorrect: true },
      { key: 'B', text: 'データベーストランザクションを Splunk に取り込む', isCorrect: false },
      { key: 'C', text: '金融トランザクションデータを処理する専用コマンド', isCorrect: false },
      { key: 'D', text: 'イベントを時間順に並べ替える', isCorrect: false },
    ],
    explanation:
      '`transaction` コマンドは指定フィールドの値が同じイベントを1つのグループ（トランザクション）にまとめます。各トランザクションには `duration`（期間）と `eventcount`（イベント数）フィールドが追加されます。',
    reference: 'Splunk Docs: transaction command',
    difficulty: 'easy',
  },
  {
    id: 'ce-002',
    domainId: 'correlating-events',
    stem: '`transaction` コマンドで同一 session_id のイベントをグループ化する正しい構文はどれか？',
    choices: [
      { key: 'A', text: '| transaction session_id', isCorrect: true },
      { key: 'B', text: '| transaction by session_id', isCorrect: false },
      { key: 'C', text: '| group session_id', isCorrect: false },
      { key: 'D', text: '| stats values(*) by session_id', isCorrect: false },
    ],
    explanation:
      '`transaction <フィールド名>` の形式で指定します。複数フィールドを使う場合は `| transaction session_id user` のようにスペース区切りで列挙します。',
    reference: 'Splunk Docs: transaction command',
    difficulty: 'easy',
  },
  {
    id: 'ce-003',
    domainId: 'correlating-events',
    stem: 'トランザクションに自動追加される2つのフィールドはどれか？',
    choices: [
      { key: 'A', text: '`duration` と `eventcount`', isCorrect: true },
      { key: 'B', text: '`elapsed` と `count`', isCorrect: false },
      { key: 'C', text: '`timespan` と `events`', isCorrect: false },
      { key: 'D', text: '`_duration` と `_total`', isCorrect: false },
    ],
    explanation:
      '`transaction` コマンドはグループ化されたイベントに `duration`（最初のイベントから最後のイベントまでの秒数）と `eventcount`（グループ内のイベント数）を自動追加します。',
    reference: 'Splunk Docs: transaction command output fields',
    difficulty: 'easy',
  },
  {
    id: 'ce-004',
    domainId: 'correlating-events',
    stem: '`transaction` コマンドの `maxspan` オプションの説明として正しいのはどれか？',
    choices: [
      { key: 'A', text: 'トランザクション内の最初と最後のイベントの最大時間差を制限する', isCorrect: true },
      { key: 'B', text: 'トランザクションに含める最大イベント数を制限する', isCorrect: false },
      { key: 'C', text: 'トランザクション間の最大時間間隔を制限する', isCorrect: false },
      { key: 'D', text: 'タイムバケットの幅を指定する', isCorrect: false },
    ],
    explanation:
      '`maxspan` は1つのトランザクション内の最初のイベントと最後のイベントの時間差の上限です。例: `maxspan=5m` は5分以内のイベントのみをグループ化します。`maxpause` は連続するイベント間の最大ポーズ時間です。',
    reference: 'Splunk Docs: transaction command options',
    difficulty: 'medium',
  },
  {
    id: 'ce-005',
    domainId: 'correlating-events',
    stem: '`transaction` コマンドの `maxpause` オプションの説明として正しいのはどれか？',
    choices: [
      { key: 'A', text: 'トランザクション内の連続するイベント間の最大時間間隔を指定する', isCorrect: true },
      { key: 'B', text: 'トランザクションの合計継続時間の上限を指定する', isCorrect: false },
      { key: 'C', text: 'サーチを一時停止する時間を指定する', isCorrect: false },
      { key: 'D', text: 'トランザクション間の最小間隔を指定する', isCorrect: false },
    ],
    explanation:
      '`maxpause=2m` とすると、前のイベントから2分以上空いた場合は別のトランザクションとして扱います。例えばユーザーセッションが途切れた場合に新しいセッションとして分けるのに使います。',
    reference: 'Splunk Docs: transaction command - maxpause',
    difficulty: 'medium',
  },
  {
    id: 'ce-006',
    domainId: 'correlating-events',
    stem: 'トランザクションを開始する条件を指定するオプションはどれか？',
    choices: [
      { key: 'A', text: 'startswith', isCorrect: true },
      { key: 'B', text: 'beginwith', isCorrect: false },
      { key: 'C', text: 'start', isCorrect: false },
      { key: 'D', text: 'firstmatch', isCorrect: false },
    ],
    explanation:
      '`startswith` オプションでトランザクションの開始条件を指定します。例: `| transaction session_id startswith="login" endswith="logout"` でログインからログアウトまでをグループ化できます。',
    reference: 'Splunk Docs: transaction command - startswith/endswith',
    difficulty: 'medium',
  },
  {
    id: 'ce-007',
    domainId: 'correlating-events',
    stem: '`transaction` vs `stats` の使い分けで正しい説明はどれか？',
    choices: [
      { key: 'A', text: '`transaction` はイベントの詳細・順序・時間間隔が必要な場合、`stats` はパフォーマンスを優先してシンプルな集計が必要な場合に使う', isCorrect: true },
      { key: 'B', text: '`stats` はイベントグループの詳細を保持し、`transaction` は集計のみ行う', isCorrect: false },
      { key: 'C', text: '`transaction` はリアルタイムサーチ専用', isCorrect: false },
      { key: 'D', text: '両者は完全に同じ機能を持つ', isCorrect: false },
    ],
    explanation:
      '`transaction` はイベントの生データを保持しグループ内の詳細（順序、時間間隔など）を確認できますが、大量データでは重くなります。`stats` は集計に特化し高速ですが生イベントの詳細は失われます。シンプルなカウントや集計なら `stats` を優先してください。',
    reference: 'Splunk Docs: Transaction vs stats',
    difficulty: 'medium',
  },
  {
    id: 'ce-008',
    domainId: 'correlating-events',
    stem: 'トランザクション内のイベント数を集計するには？',
    choices: [
      { key: 'A', text: '`transaction` 後に `stats avg(eventcount)` などで eventcount フィールドを集計する', isCorrect: true },
      { key: 'B', text: '`transaction count` オプションを指定する', isCorrect: false },
      { key: 'C', text: '`stats count` でトランザクション数をカウントする', isCorrect: false },
      { key: 'D', text: 'eventcount フィールドは存在しないため別途計算が必要', isCorrect: false },
    ],
    explanation:
      '`transaction` コマンド実行後、各トランザクションに `eventcount` フィールドが付与されます。その後 `| stats avg(eventcount)` や `| table session_id, eventcount, duration` などで活用できます。',
    reference: 'Splunk Docs: transaction command output fields',
    difficulty: 'medium',
  },
  {
    id: 'ce-009',
    domainId: 'correlating-events',
    stem: '`transaction` コマンドで `fields` オプションを指定すると何が変わるか？',
    choices: [
      { key: 'A', text: 'グループ化に使うフィールドを複数指定できる', isCorrect: true },
      { key: 'B', text: 'トランザクション結果に含めるフィールドを制限する', isCorrect: false },
      { key: 'C', text: 'トランザクション内で集計するフィールドを指定する', isCorrect: false },
      { key: 'D', text: 'フィールド名を変更する', isCorrect: false },
    ],
    explanation:
      '`transaction` コマンドに複数のフィールドを指定すると、そのすべてのフィールドの値が一致するイベントがグループ化されます。例: `| transaction session_id clientip` で session_id と clientip が両方一致するイベントをグループ化します。',
    reference: 'Splunk Docs: transaction command',
    difficulty: 'hard',
  },
  {
    id: 'ce-010',
    domainId: 'correlating-events',
    stem: '`transaction` コマンドの `maxevents` オプションの説明として正しいのはどれか？',
    choices: [
      { key: 'A', text: '1つのトランザクションに含めるイベントの最大数を制限する', isCorrect: true },
      { key: 'B', text: 'サーチ結果全体のイベント数を制限する', isCorrect: false },
      { key: 'C', text: 'トランザクションの最大継続時間を指定する', isCorrect: false },
      { key: 'D', text: '表示するトランザクション数を制限する', isCorrect: false },
    ],
    explanation:
      '`maxevents` は1トランザクションあたりのイベント数の上限です。例: `maxevents=5` とすると、5イベントを超えた場合は次のイベントから新しいトランザクションが開始されます。',
    reference: 'Splunk Docs: transaction command - maxevents',
    difficulty: 'medium',
  },
  {
    id: 'ce-011',
    domainId: 'correlating-events',
    stem: 'トランザクションの `_raw` フィールドの内容について正しいのはどれか？',
    choices: [
      { key: 'A', text: 'グループ内のすべてのイベントの生データが改行で連結される', isCorrect: true },
      { key: 'B', text: 'グループ内の最初のイベントの生データのみが格納される', isCorrect: false },
      { key: 'C', text: 'トランザクションには `_raw` フィールドは存在しない', isCorrect: false },
      { key: 'D', text: 'グループ内の最後のイベントの生データが格納される', isCorrect: false },
    ],
    explanation:
      '`transaction` コマンドが生成するイベントの `_raw` フィールドには、グループ化されたすべてのイベントの元テキストが改行で連結されて格納されます。これにより、セッション全体のログを一覧できます。',
    reference: 'Splunk Docs: transaction command',
    difficulty: 'hard',
  },
  {
    id: 'ce-012',
    domainId: 'correlating-events',
    stem: '`stats` を使って transaction と同等のセッション時間を計算する方法として正しいのはどれか？',
    choices: [
      { key: 'A', text: '| stats min(_time) as start, max(_time) as end, count by session_id | eval duration = end - start', isCorrect: true },
      { key: 'B', text: '| stats duration by session_id', isCorrect: false },
      { key: 'C', text: '| stats elapsed(_time) by session_id', isCorrect: false },
      { key: 'D', text: '| stats range(_time) as duration by session_id', isCorrect: false },
    ],
    explanation:
      '`stats` でセッション時間を求めるには、`min(_time)` と `max(_time)` を取得してその差を `eval` で計算します。実は `| stats range(_time)` でも時間範囲（最大値 - 最小値）が得られるため、選択肢 D も実は正解に近いですが、最も明確な計算方法は A です。',
    reference: 'Splunk Docs: stats command - statistical functions',
    difficulty: 'hard',
  },
]
