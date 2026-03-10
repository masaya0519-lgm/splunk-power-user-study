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
  {
    id: 'dm-010',
    domainId: 'data-models',
    stem: 'データモデルを構成するデータセットの種類として正しいのはどれか？',
    choices: [
      { key: 'A', text: 'Events（イベント）、Searches（サーチ）、Transactions（トランザクション）の3種類', isCorrect: true },
      { key: 'B', text: 'Events、Searches、Lookups、Transactions の4種類', isCorrect: false },
      { key: 'C', text: 'Events と Searches の2種類のみ', isCorrect: false },
      { key: 'D', text: 'Pivot、Events、Transactions の3種類', isCorrect: false },
    ],
    explanation:
      'データモデルのデータセットは「Events」「Searches」「Transactions」の3種類です。Events は基本的なイベントデータセット、Searches はサブサーチをベースにしたデータセット、Transactions はトランザクションコマンドをベースにしたデータセットです。Pivot はデータセットタイプではありません。',
    reference: 'Splunk Docs: Types of dataset in data models',
    difficulty: 'medium',
  },
  {
    id: 'dm-011',
    domainId: 'data-models',
    stem: 'ピボットツールで直接データセットを作成することはできるか？',
    choices: [
      { key: 'A', text: 'できない。ピボットのデータセットはデータモデルからのみ作成される', isCorrect: true },
      { key: 'B', text: 'できる。ピボットツールには独自のデータセット作成機能がある', isCorrect: false },
      { key: 'C', text: 'できる。ただし Events タイプのみ作成可能', isCorrect: false },
      { key: 'D', text: 'できる。インデックスを直接選択してピボットデータセットを作成できる', isCorrect: false },
    ],
    explanation:
      'ピボットツールで使用するデータセットはデータモデルからのみ作成されます。ピボット自体にはデータセットの定義機能はなく、あらかじめ Settings > Knowledge > Data Models で定義されたデータモデルのデータセットを選択して使用します。',
    reference: 'Splunk Docs: Pivot and data models',
    difficulty: 'medium',
  },
  {
    id: 'dm-012',
    domainId: 'data-models',
    stem: 'ピボットを最も効果的に活用するユーザーはどのような役割の人か？',
    choices: [
      { key: 'A', text: 'ナレッジマネージャー（Knowledge Manager）—データモデルを活用してビジネスユーザー向けのレポートを作成する担当者', isCorrect: true },
      { key: 'B', text: '一般の SPL を知らないエンドユーザー', isCorrect: false },
      { key: 'C', text: 'Splunk 管理者（Admin）—インフラ管理の専門家', isCorrect: false },
      { key: 'D', text: 'データ取り込み担当者', isCorrect: false },
    ],
    explanation:
      'ピボットはナレッジマネージャーが最も活用します。ナレッジマネージャーはデータモデルを構築・管理し、ピボットを使って SPL を書かずにビジネスユーザーが利用できるレポートやダッシュボードを作成します。一般ユーザーがピボットを直接使うこともありますが、設計・管理はナレッジマネージャーの役割です。',
    reference: 'Splunk Docs: Splunk user roles and data models',
    difficulty: 'medium',
  },
  {
    id: 'dm-013',
    domainId: 'data-models',
    stem: 'データモデルの Root Event データセットを定義する際に必要な最低限の設定はどれか？',
    choices: [
      { key: 'A', text: '少なくとも1つの制約（Constraint）条件', isCorrect: true },
      { key: 'B', text: '少なくとも1つのフィールド定義', isCorrect: false },
      { key: 'C', text: 'インデックスとソースタイプの両方を必ず指定する', isCorrect: false },
      { key: 'D', text: '制約条件は不要でデータセット名のみ設定すれば良い', isCorrect: false },
    ],
    explanation:
      'Root Event データセットを作成するには少なくとも1つの制約（Constraint）条件が必要です。制約はそのデータセットに含まれるイベントを絞り込む条件（例: `sourcetype=access_combined`）です。制約がないとデータセットがすべてのイベントを対象にしてしまいます。',
    reference: 'Splunk Docs: Root event dataset',
    difficulty: 'medium',
  },
  {
    id: 'dm-014',
    domainId: 'data-models',
    stem: 'ピボットで作成できるものとして正しいのはどれか？',
    choices: [
      { key: 'A', text: 'レポートとダッシュボード（SPL を書かずに作成できる）', isCorrect: true },
      { key: 'B', text: '新しいデータセットとデータモデル', isCorrect: false },
      { key: 'C', text: 'フィールドエイリアスとタグ', isCorrect: false },
      { key: 'D', text: 'インデックスとソースタイプの設定', isCorrect: false },
    ],
    explanation:
      'ピボットを使うと SPL を書かずにデータモデルのデータセットからレポート（テーブル、グラフ）やダッシュボードパネルを作成できます。ピボットで作成したレポートは保存でき、ダッシュボードに追加することもできます。データセットやデータモデル自体の作成はピボットではなく Settings から行います。',
    reference: 'Splunk Docs: Create pivot reports and visualizations',
    difficulty: 'easy',
  },
  {
    id: 'dm-015',
    domainId: 'data-models',
    stem: 'データモデルアクセラレーションで生成されるファイルの種類はどれか？',
    choices: [
      { key: 'A', text: 'tsidx（時系列インデックス）ファイル', isCorrect: true },
      { key: 'B', text: 'CSV ファイル', isCorrect: false },
      { key: 'C', text: 'JSON サマリーファイル', isCorrect: false },
      { key: 'D', text: 'SQLite データベースファイル', isCorrect: false },
    ],
    explanation:
      'データモデルアクセラレーションは tsidx（Time Series Index）ファイルを事前生成します。tsidx ファイルはデータモデルのデータセットに対して最適化されたインデックスで、ピボットや `| datamodel` コマンドの実行速度を大幅に向上させます。追加のディスク容量が必要になります。',
    reference: 'Splunk Docs: Accelerate data models',
    difficulty: 'hard',
  },
  {
    id: 'dm-016',
    domainId: 'data-models',
    stem: 'ピボットはどのような特徴を持つか？',
    choices: [
      { key: 'A', text: 'SPL を書かずにデータモデルのデータを可視化できる', isCorrect: true },
      { key: 'B', text: 'SPL の上級者専用ツールである', isCorrect: false },
      { key: 'C', text: 'ピボットで作成したレポートは保存できない', isCorrect: false },
      { key: 'D', text: 'ピボットはリアルタイムデータのみを対象にする', isCorrect: false },
    ],
    explanation:
      'ピボットはデータモデルを使ってドラッグ＆ドロップの操作でレポートやグラフを作成できるツールです。SPL の知識がなくても使用できるため、ビジネスアナリストなど非技術系のユーザーでもデータ分析が可能です。作成したレポートは保存・共有できます。',
    reference: 'Splunk Docs: Pivot and data models',
    difficulty: 'easy',
  },
  {
    id: 'dm-017',
    domainId: 'data-models',
    stem: 'データモデルの加速（Acceleration）を有効にするとどうなるか？',
    choices: [
      { key: 'A', text: 'データモデルに対応する tsidx ファイルが生成され、ピボットやサーチの速度が大幅に向上する', isCorrect: true },
      { key: 'B', text: 'データがメモリにキャッシュされてリアルタイムサーチが高速になる', isCorrect: false },
      { key: 'C', text: 'インデックスのデータが再整理されて圧縮率が向上する', isCorrect: false },
      { key: 'D', text: 'データモデルのスキーマが最適化される', isCorrect: false },
    ],
    explanation:
      'データモデルの加速を有効にすると、バックグラウンドで tsidx（時系列インデックスファイル）が生成されます。これにより対象データの事前集計が行われ、ピボットや `| tstats` コマンドを使ったサーチが非常に高速になります。ディスクスペースは増加しますが、クエリ速度が大幅に向上します。',
    reference: 'Splunk Docs: Accelerate data models',
    difficulty: 'medium',
  },
  {
    id: 'dm-018',
    domainId: 'data-models',
    stem: '`| tstats` コマンドの説明として正しいのはどれか？',
    choices: [
      { key: 'A', text: '加速されたデータモデルの tsidx ファイルを対象に高速集計を行うコマンド', isCorrect: true },
      { key: 'B', text: '`stats` コマンドの別名で機能は同じ', isCorrect: false },
      { key: 'C', text: '時系列データのみを対象とした `timechart` の省略形', isCorrect: false },
      { key: 'D', text: 'テスト用のサーチ結果を生成するコマンド', isCorrect: false },
    ],
    explanation:
      '`| tstats` は加速されたデータモデルの tsidx ファイルを使って高速な統計集計を行います。通常の `stats` よりはるかに高速ですが、加速されたデータモデルが必要です。例: `| tstats count FROM datamodel=Web WHERE Web.status=404 BY Web.uri` のように使います。',
    reference: 'Splunk Docs: tstats command',
    difficulty: 'hard',
  },
  {
    id: 'dm-019',
    domainId: 'data-models',
    stem: 'データモデルの「Events」データセットタイプで使用できる制約（constraints）はどれか？',
    choices: [
      { key: 'A', text: 'サーチ文字列（SPL のフィルタ条件）でイベントを絞り込む', isCorrect: true },
      { key: 'B', text: 'SQL の WHERE 句でイベントを絞り込む', isCorrect: false },
      { key: 'C', text: 'ルックアップテーブルの条件でイベントを絞り込む', isCorrect: false },
      { key: 'D', text: '時間範囲のみで絞り込む', isCorrect: false },
    ],
    explanation:
      'Events データセットの制約（Constraints）は SPL の検索条件（例: `status=404`、`eventtype=web_error`）で定義します。この条件を満たすイベントのみがデータセットに含まれます。子データセット（継承）では親の制約に追加の条件を加えてさらに絞り込めます。',
    reference: 'Splunk Docs: Data model datasets - constraints',
    difficulty: 'medium',
  },
  {
    id: 'dm-020',
    domainId: 'data-models',
    stem: 'データモデルで「子データセット（child dataset）」を使う目的はどれか？',
    choices: [
      { key: 'A', text: '親データセットの制約とフィールドを継承しつつ、追加の制約やフィールドを定義する', isCorrect: true },
      { key: 'B', text: '親データセットとは無関係な新しいデータセットを作成する', isCorrect: false },
      { key: 'C', text: '親データセットのデータを子データセットにコピーする', isCorrect: false },
      { key: 'D', text: '親データセットの権限を制限する', isCorrect: false },
    ],
    explanation:
      'データモデルの継承構造では、子データセットは親の制約（サーチ条件）とフィールド定義を引き継ぎます。子は追加の絞り込み条件や追加フィールドを定義できます。例: 「Web アクセス」を親とし「Web エラー（400番台）」「Web リダイレクト（300番台）」を子として分類する構造が典型的です。',
    reference: 'Splunk Docs: Data model inheritance',
    difficulty: 'medium',
  },
  {
    id: 'dm-021',
    domainId: 'data-models',
    stem: 'データモデルの属性（Attribute）として定義できるフィールドタイプに含まれないものはどれか？',
    choices: [
      { key: 'A', text: 'Encrypted（暗号化フィールド）', isCorrect: true },
      { key: 'B', text: 'Auto-Extracted（自動抽出フィールド）', isCorrect: false },
      { key: 'C', text: 'Eval Expression（計算フィールド）', isCorrect: false },
      { key: 'D', text: 'Lookup（ルックアップフィールド）', isCorrect: false },
    ],
    explanation:
      'データモデルで定義できるフィールドタイプは「Auto-Extracted（自動抽出）」「Eval Expression（計算式）」「Lookup（ルックアップ）」「Regular Expression（正規表現）」「GeoIP」などです。「Encrypted」という暗号化フィールドタイプはデータモデルには存在しません。',
    reference: 'Splunk Docs: Data model attributes',
    difficulty: 'hard',
  },
  {
    id: 'dm-022',
    domainId: 'data-models',
    stem: 'データモデルを作成できるユーザー権限として正しいのはどれか？',
    choices: [
      { key: 'A', text: 'admin、power、または can_write 権限を持つユーザー', isCorrect: true },
      { key: 'B', text: 'admin 権限を持つユーザーのみ', isCorrect: false },
      { key: 'C', text: 'すべてのユーザー（権限不要）', isCorrect: false },
      { key: 'D', text: 'system 権限を持つユーザーのみ', isCorrect: false },
    ],
    explanation:
      'データモデルの作成には admin または power ロール（または適切な権限）が必要です。一般的には管理者か power ユーザーがデータモデルを設計・作成し、read 権限を持つユーザーがピボットでデータモデルを活用する形になります。',
    reference: 'Splunk Docs: Data model permissions',
    difficulty: 'medium',
  },
  {
    id: 'dm-023',
    domainId: 'data-models',
    stem: 'データモデル加速が「完全に加速された（Fully accelerated）」状態になるまでの時間に影響する要因はどれか？',
    choices: [
      { key: 'A', text: 'データ量、バックフィルの設定（過去どの期間まで加速するか）、システムリソース', isCorrect: true },
      { key: 'B', text: 'データモデルのフィールド数のみ', isCorrect: false },
      { key: 'C', text: 'ユーザー数のみ', isCorrect: false },
      { key: 'D', text: '加速は即座に完了する', isCorrect: false },
    ],
    explanation:
      '加速の完了時間はデータ量、バックフィル期間（過去数日〜数ヶ月のデータを遡って加速するため）、CPUやディスクI/Oなどシステムリソースに依存します。大規模なデータセットでは加速の完了に時間がかかる場合があります。加速の進捗は Settings > Data Models 画面で確認できます。',
    reference: 'Splunk Docs: Data model acceleration',
    difficulty: 'hard',
  },
  {
    id: 'dm-024',
    domainId: 'data-models',
    stem: '`| datamodel Web Proxy search` コマンドの説明として正しいのはどれか？',
    choices: [
      { key: 'A', text: '"Web" データモデルの "Proxy" データセットに含まれるイベントをサーチする', isCorrect: true },
      { key: 'B', text: '"Web Proxy" という名前のサーチを実行する', isCorrect: false },
      { key: 'C', text: 'Web プロキシサーバーのデータをインデックスから取得する', isCorrect: false },
      { key: 'D', text: 'データモデル "Web" を再構築する', isCorrect: false },
    ],
    explanation:
      '`| datamodel <データモデル名> <データセット名> search` コマンドはデータモデルの特定データセットを SPL サーチのソースとして使用します。加速されていない場合でも使用できますが、加速済みの場合は `| tstats` の方が高速です。',
    reference: 'Splunk Docs: datamodel command',
    difficulty: 'hard',
  },
  {
    id: 'dm-025',
    domainId: 'data-models',
    stem: 'データモデルで「Searches」データセットタイプを使う場面はどれか？',
    choices: [
      { key: 'A', text: '基本フィルタでは表現できない複雑なサーチ（サブサーチや複数インデックスの結合など）でデータセットを定義する場合', isCorrect: true },
      { key: 'B', text: '保存済みサーチ（Saved Search）を再利用する場合', isCorrect: false },
      { key: 'C', text: '全データを対象にするデータセットを作成する場合', isCorrect: false },
      { key: 'D', text: 'リアルタイムサーチを定義する場合', isCorrect: false },
    ],
    explanation:
      '「Searches」データセットタイプは任意の SPL サーチ文字列（パイプコマンドを含む）でデータセットを定義できます。Events タイプでは対応できない複雑な変換（stats など）を含むデータセットを定義する際に使います。ただし加速（Acceleration）は Searches タイプには適用されません。',
    reference: 'Splunk Docs: Data model searches dataset',
    difficulty: 'hard',
  },
]
