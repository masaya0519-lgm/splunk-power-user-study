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
  {
    id: 'ce-013',
    domainId: 'correlating-events',
    stem: '`transaction` コマンドの `maxpause` オプションが制御するのはどれか？',
    choices: [
      { key: 'A', text: '同一トランザクション内の連続するイベント間の最大時間間隔', isCorrect: true },
      { key: 'B', text: 'トランザクション全体の最大継続時間', isCorrect: false },
      { key: 'C', text: '異なるトランザクション間の最大間隔', isCorrect: false },
      { key: 'D', text: 'サーチが一時停止するまでの最大時間', isCorrect: false },
    ],
    explanation:
      '`maxpause` はトランザクション内の連続するイベント間の最大時間間隔を指定します。例: `maxpause=30s` では前のイベントから30秒以上間隔が空くと、そのイベントは新しいトランザクションの開始として扱われます。セッション途切れの検出などに活用されます。',
    reference: 'Splunk Docs: transaction command - maxpause',
    difficulty: 'medium',
  },
  {
    id: 'ce-014',
    domainId: 'correlating-events',
    stem: '`transaction` コマンドで1トランザクションあたりのデフォルトの最大イベント数はどれか？',
    choices: [
      { key: 'A', text: '1000件', isCorrect: true },
      { key: 'B', text: '100件', isCorrect: false },
      { key: 'C', text: '上限なし', isCorrect: false },
      { key: 'D', text: '10000件', isCorrect: false },
    ],
    explanation:
      '`transaction` コマンドのデフォルトの最大イベント数（`maxevents`）は1000件です。この上限を超えた場合は新しいトランザクションが開始されます。大量のイベントを扱う場合は `maxevents` を適切に設定するか、`stats` コマンドの使用を検討してください。',
    reference: 'Splunk Docs: transaction command - maxevents',
    difficulty: 'medium',
  },
  {
    id: 'ce-015',
    domainId: 'correlating-events',
    stem: '`transaction` コマンドでイベントをグループ化するために必要な要件はどれか？',
    choices: [
      { key: 'A', text: '1つ以上の共通フィールドで関連付けられていること', isCorrect: true },
      { key: 'B', text: '同一のインデックスに格納されていること', isCorrect: false },
      { key: 'C', text: '同一のソースタイプを持つこと', isCorrect: false },
      { key: 'D', text: '連続した時間順に並んでいること（時間の空白がないこと）', isCorrect: false },
    ],
    explanation:
      '`transaction` コマンドは1つ以上のフィールドで関連付けられたイベントをグループ化します。例: `| transaction session_id` で session_id が一致するイベントをまとめます。異なるインデックスやソースタイプのイベントも、共通フィールドがあればグループ化できます。',
    reference: 'Splunk Docs: transaction command',
    difficulty: 'easy',
  },
  {
    id: 'ce-016',
    domainId: 'correlating-events',
    stem: '大量のデータを扱う場合、`transaction` より `stats` を推奨する理由はどれか？',
    choices: [
      { key: 'A', text: '`stats` はイベントを集計するだけで生データを保持しないため、メモリ効率が高く処理が速い', isCorrect: true },
      { key: 'B', text: '`stats` はトランザクションの詳細情報（duration、eventcount）を提供できるが `transaction` はできない', isCorrect: false },
      { key: 'C', text: '`stats` は分散処理できるが `transaction` はできない', isCorrect: false },
      { key: 'D', text: '`stats` はすべての機能で `transaction` と同じ結果を生成する', isCorrect: false },
    ],
    explanation:
      '`transaction` はグループ内のすべてのイベントの生データを保持するため、大量データではメモリを大量消費しパフォーマンスが低下します。`stats` は集計関数のみを計算して生データを捨てるため、はるかに高速かつ効率的です。単純なカウント・集計目的なら常に `stats` を優先してください。',
    reference: 'Splunk Docs: Transaction vs stats',
    difficulty: 'medium',
  },
  {
    id: 'ce-017',
    domainId: 'correlating-events',
    stem: '`transaction` コマンドのデフォルトの `maxspan`（最大継続時間）はどれか？',
    choices: [
      { key: 'A', text: '制限なし（無制限）', isCorrect: true },
      { key: 'B', text: '1時間', isCorrect: false },
      { key: 'C', text: '24時間', isCorrect: false },
      { key: 'D', text: '30分', isCorrect: false },
    ],
    explanation:
      '`transaction` コマンドの `maxspan` のデフォルト値は無制限です。つまり `maxspan` を指定しない場合、フィールド値が一致するイベントはどれだけ時間が離れていても同一トランザクションにグループ化されます。時間範囲を制限したい場合は明示的に `maxspan=1h` などと指定します。',
    reference: 'Splunk Docs: transaction command - maxspan',
    difficulty: 'medium',
  },
  {
    id: 'ce-018',
    domainId: 'correlating-events',
    stem: '`transaction` コマンドが自動的に生成するフィールドはどれか？（すべて正しいものを選べ）',
    choices: [
      { key: 'A', text: '`duration`（秒単位の継続時間）と `eventcount`（イベント数）', isCorrect: true },
      { key: 'B', text: '`session_time` と `total_events`', isCorrect: false },
      { key: 'C', text: '`elapsed` と `count`', isCorrect: false },
      { key: 'D', text: '`timespan` と `event_total`', isCorrect: false },
    ],
    explanation:
      '`transaction` コマンドはグループ化されたイベントに自動的に `duration`（最初のイベントから最後のイベントまでの秒数）と `eventcount`（グループ内のイベント数）の2フィールドを追加します。これらのフィールドを使って後続の `stats` や `where` でフィルタリング・集計できます。',
    reference: 'Splunk Docs: transaction command output fields',
    difficulty: 'easy',
  },
  {
    id: 'ce-019',
    domainId: 'correlating-events',
    stem: '`| transaction JSESSIONID | search SD404K289O2F151` というクエリの目的として正しいのはどれか？',
    choices: [
      { key: 'A', text: 'JSESSIONID でグループ化したトランザクションの中から、特定セッション ID を含むトランザクションを検索する', isCorrect: true },
      { key: 'B', text: 'SD404K289O2F151 という名前のトランザクションを作成する', isCorrect: false },
      { key: 'C', text: 'JSESSIONID フィールドと SD404K289O2F151 フィールドの値を比較する', isCorrect: false },
      { key: 'D', text: '2つのサーチを並列実行して結果を統合する', isCorrect: false },
    ],
    explanation:
      '`| transaction JSESSIONID` で JSESSIONID フィールドの値ごとにイベントをグループ化します。その後 `| search SD404K289O2F151` でグループ化されたトランザクションの `_raw`（全イベントの連結テキスト）の中から "SD404K289O2F151" を含むトランザクションを絞り込みます。特定セッションに関連するすべてのイベントをまとめて調査する際に使います。',
    reference: 'Splunk Docs: transaction command',
    difficulty: 'hard',
  },
  {
    id: 'ce-020',
    domainId: 'correlating-events',
    stem: '`transaction` コマンドを実行した後に使用できる変換コマンドはどれか？',
    choices: [
      { key: 'A', text: 'chart、timechart、stats、eventstats', isCorrect: true },
      { key: 'B', text: 'chart と timechart のみ', isCorrect: false },
      { key: 'C', text: 'stats のみ', isCorrect: false },
      { key: 'D', text: 'transaction の後に変換コマンドは使用できない', isCorrect: false },
    ],
    explanation:
      '`transaction` コマンドはイベントをグループ化しますが、その後のパイプラインでは通常の変換コマンドを使用できます。`chart`、`timechart`、`stats`、`eventstats` などで transaction の結果をさらに集計・可視化できます。例: `| transaction session_id | stats avg(duration) by host`',
    reference: 'Splunk Docs: transaction command',
    difficulty: 'medium',
  },
  {
    id: 'ce-021',
    domainId: 'correlating-events',
    stem: 'サブサーチ（subsearch）の説明として正しいのはどれか？',
    choices: [
      { key: 'A', text: '角括弧 `[ ]` で囲まれた内側のサーチで、その結果が外側のサーチのフィルタ条件として使われる', isCorrect: true },
      { key: 'B', text: 'パイプラインの途中で別のインデックスを検索する機能', isCorrect: false },
      { key: 'C', text: 'スケジュールサーチを呼び出す機能', isCorrect: false },
      { key: 'D', text: '複数のサーチを並列実行して結果をマージする', isCorrect: false },
    ],
    explanation:
      'サブサーチは `[ ]` で囲み、外側のサーチに動的な条件を渡します。例: `index=main [search index=threat_intel | fields src_ip]` は threat_intel インデックスにある IP アドレスのリストを取得し、そのリストを使って main インデックスを絞り込みます。デフォルトのタイムアウトは60秒、最大結果件数は10,000件です。',
    reference: 'Splunk Docs: Use a subsearch',
    difficulty: 'medium',
  },
  {
    id: 'ce-022',
    domainId: 'correlating-events',
    stem: '`appendcols` コマンドの説明として正しいのはどれか？',
    choices: [
      { key: 'A', text: '別のサーチの結果を列として現在の結果に追加する', isCorrect: true },
      { key: 'B', text: '現在の結果に行を追加する', isCorrect: false },
      { key: 'C', text: 'ルックアップの列を現在の結果に結合する', isCorrect: false },
      { key: 'D', text: '指定フィールドの値を新しい列として展開する', isCorrect: false },
    ],
    explanation:
      '`appendcols` はサブサーチの結果を列として追加します。例: `index=A | stats count by host | appendcols [search index=B | stats avg(bytes) by host]` で、2つの集計結果を横並びにできます。行数が合わない場合は null が入ります。',
    reference: 'Splunk Docs: appendcols command',
    difficulty: 'hard',
  },
  {
    id: 'ce-023',
    domainId: 'correlating-events',
    stem: '`join` コマンドで `type=left` を指定するとどうなるか？',
    choices: [
      { key: 'A', text: 'メインのサーチ結果を全行保持し、サブサーチにマッチしない行は null で補完される', isCorrect: true },
      { key: 'B', text: 'サブサーチの結果のみが返される', isCorrect: false },
      { key: 'C', text: '両方の結果で一致した行のみが返される（内部結合）', isCorrect: false },
      { key: 'D', text: 'メインとサブサーチの全行が返される（外部結合）', isCorrect: false },
    ],
    explanation:
      '`join type=left <フィールド>` は SQL の LEFT OUTER JOIN と同等です。メインのサーチ（左側）の全行を保持し、サブサーチ（右側）にマッチしない行は null 値で補完されます。デフォルト（type 省略時）は内部結合（一致する行のみ）です。',
    reference: 'Splunk Docs: join command',
    difficulty: 'hard',
  },
  {
    id: 'ce-024',
    domainId: 'correlating-events',
    stem: '`transaction` の `keepevents=true` オプションの説明として正しいのはどれか？',
    choices: [
      { key: 'A', text: 'グループ化されなかった単独のイベントも結果に残す', isCorrect: true },
      { key: 'B', text: 'トランザクション内の全イベントを個別行として表示する', isCorrect: false },
      { key: 'C', text: 'maxspan を超えたイベントもトランザクションに含める', isCorrect: false },
      { key: 'D', text: 'トランザクションのメタデータ（duration など）を保持する', isCorrect: false },
    ],
    explanation:
      '`keepevents=true` を指定すると、どのトランザクション条件にもマッチしなかった孤立したイベントも結果セットに含めます。デフォルトは `keepevents=false` で、少なくとも2件のイベントがグループ化されたものだけが結果に含まれます。',
    reference: 'Splunk Docs: transaction command - keepevents option',
    difficulty: 'hard',
  },
  {
    id: 'ce-025',
    domainId: 'correlating-events',
    stem: 'サブサーチのデフォルト制限として正しいのはどれか？',
    choices: [
      { key: 'A', text: 'デフォルトのタイムアウトは60秒、最大結果件数は10,000件', isCorrect: true },
      { key: 'B', text: 'デフォルトのタイムアウトは30秒、最大結果件数は5,000件', isCorrect: false },
      { key: 'C', text: 'デフォルトのタイムアウトは120秒、最大結果件数は100,000件', isCorrect: false },
      { key: 'D', text: 'タイムアウトなし、最大結果件数は1,000件', isCorrect: false },
    ],
    explanation:
      'Splunk のサブサーチにはデフォルトで60秒のタイムアウトと最大10,000件の結果制限があります。これらの制限は `limits.conf` の `[subsearch]` セクションで変更可能ですが、変更には管理者権限が必要です。大量データが必要な場合はルックアップや `appendcols` の使用を検討します。',
    reference: 'Splunk Docs: About subsearches',
    difficulty: 'medium',
  },
]
