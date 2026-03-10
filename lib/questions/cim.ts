import { Question } from '../types'

export const cimQuestions: Question[] = [
  {
    id: 'cim-001',
    domainId: 'cim',
    stem: 'Splunk CIM（Common Information Model）の主な目的はどれか？',
    choices: [
      { key: 'A', text: '異なるデータソースからのデータを共通のフィールド名で正規化し、横断的な分析を可能にする', isCorrect: true },
      { key: 'B', text: 'データを暗号化して安全に保管する', isCorrect: false },
      { key: 'C', text: 'インデックスの容量を削減する', isCorrect: false },
      { key: 'D', text: 'Splunk のライセンス管理を行う', isCorrect: false },
    ],
    explanation:
      'CIM は異なるベンダーのデータソース（ファイアウォール、IDS、Web サーバーなど）のフィールド名を統一します。例えば送信元 IP を `src`、宛先 IP を `dest` に統一することで、複数ソースにまたがる検索が簡単になります。',
    reference: 'Splunk Docs: Splunk CIM overview',
    difficulty: 'easy',
  },
  {
    id: 'cim-002',
    domainId: 'cim',
    stem: 'Splunk CIM Add-On に含まれる主なコンポーネントはどれか？',
    choices: [
      { key: 'A', text: 'データモデルとタグの定義が含まれている', isCorrect: true },
      { key: 'B', text: 'データ取り込みのパーサーのみが含まれている', isCorrect: false },
      { key: 'C', text: 'ダッシュボードテンプレートのみが含まれている', isCorrect: false },
      { key: 'D', text: 'アラートルールのみが含まれている', isCorrect: false },
    ],
    explanation:
      'Splunk CIM Add-On は主にデータモデルの定義（Authentication、Network_Traffic、Web など）と、それに関連するタグ定義が含まれています。個々のデータソースに合わせたフィールドマッピングは各ベンダーの Technology Add-On (TA) が担います。',
    reference: 'Splunk Docs: About the Splunk CIM Add-on',
    difficulty: 'medium',
  },
  {
    id: 'cim-003',
    domainId: 'cim',
    stem: 'CIM を使ってデータを正規化する際、最初に行うべき作業はどれか？',
    choices: [
      { key: 'A', text: '各データソースに対応した Technology Add-On (TA) をインストールし、フィールドを CIM フィールドにマッピングする', isCorrect: true },
      { key: 'B', text: '全データを手動で CIM フィールド名に変換する', isCorrect: false },
      { key: 'C', text: 'CIM データモデルのアクセラレーションを有効にする', isCorrect: false },
      { key: 'D', text: 'Splunk ES をインストールする', isCorrect: false },
    ],
    explanation:
      '各ベンダーのデータソース向けの Technology Add-On (TA) をインストールすることで、そのソースのフィールドが CIM 標準フィールドに自動マッピングされます。例: Cisco ASA TA を入れると firewall ログが CIM の Network_Traffic モデルに正規化されます。',
    reference: 'Splunk Docs: Normalize data to CIM',
    difficulty: 'medium',
  },
  {
    id: 'cim-004',
    domainId: 'cim',
    stem: 'CIM の「Network Traffic」データモデルで使われる標準フィールド名の組み合わせとして正しいのはどれか？',
    choices: [
      { key: 'A', text: '`src`（送信元）と `dest`（宛先）', isCorrect: true },
      { key: 'B', text: '`source_ip` と `destination_ip`', isCorrect: false },
      { key: 'C', text: '`clientip` と `serverip`', isCorrect: false },
      { key: 'D', text: '`remote_addr` と `local_addr`', isCorrect: false },
    ],
    explanation:
      'CIM の Network Traffic データモデルでは送信元 IP を `src`、宛先 IP を `dest` と標準化しています。各ベンダーの TA がそれぞれの独自フィールド名（`sourceAddress`、`clientip` など）を `src`/`dest` にエイリアスします。',
    reference: 'Splunk Docs: CIM Network Traffic datamodel',
    difficulty: 'medium',
  },
  {
    id: 'cim-005',
    domainId: 'cim',
    stem: 'CIM Add-On が含む代表的なデータモデルカテゴリに含まれないものはどれか？',
    choices: [
      { key: 'A', text: 'Financial Transactions（金融トランザクション）', isCorrect: true },
      { key: 'B', text: 'Authentication（認証）', isCorrect: false },
      { key: 'C', text: 'Network Traffic（ネットワークトラフィック）', isCorrect: false },
      { key: 'D', text: 'Web（Webアクセス）', isCorrect: false },
    ],
    explanation:
      'CIM Add-On には Authentication、Network_Traffic、Web、Endpoint、Intrusion_Detection、Malware などのデータモデルが含まれます。Financial Transactions は標準 CIM モデルには含まれません。',
    reference: 'Splunk Docs: CIM data models',
    difficulty: 'medium',
  },
  {
    id: 'cim-006',
    domainId: 'cim',
    stem: 'CIM で正規化されたデータを活用するメリットとして正しいのはどれか？',
    choices: [
      { key: 'A', text: '異なるソースタイプのデータを同一のサーチで横断的に分析できる', isCorrect: true },
      { key: 'B', text: 'インデックス容量が削減される', isCorrect: false },
      { key: 'C', text: 'データ取り込み速度が向上する', isCorrect: false },
      { key: 'D', text: 'ライセンス消費量が削減される', isCorrect: false },
    ],
    explanation:
      'CIM による正規化の最大メリットは異なるベンダー・ソースタイプのデータを同じフィールド名で検索できることです。例: `tag=authentication` で複数の認証システムのログを一括検索し、`src` フィールドで分析できます。',
    reference: 'Splunk Docs: Benefits of using CIM',
    difficulty: 'easy',
  },
  {
    id: 'cim-007',
    domainId: 'cim',
    stem: 'Technology Add-On (TA) の役割として正しいのはどれか？',
    choices: [
      { key: 'A', text: '特定のデータソースのフィールドを CIM 標準フィールドにマッピングし、データを正規化する', isCorrect: true },
      { key: 'B', text: 'Splunk のコアアーキテクチャを拡張する', isCorrect: false },
      { key: 'C', text: 'ダッシュボードやレポートを提供する', isCorrect: false },
      { key: 'D', text: 'データモデルのアクセラレーションを管理する', isCorrect: false },
    ],
    explanation:
      'Technology Add-On はベンダー固有の入力設定、フィールド抽出、フィールドエイリアス、タグ定義を含み、そのデータソースのデータを CIM に準拠した形式に正規化します。Cisco、Palo Alto、Microsoft などのベンダーが TA を提供しています。',
    reference: 'Splunk Docs: Technology Add-Ons (TA)',
    difficulty: 'medium',
  },
  {
    id: 'cim-008',
    domainId: 'cim',
    stem: 'CIM Add-On でデータが正規化されているかを確認する方法はどれか？',
    choices: [
      { key: 'A', text: '| datamodel <CIMモデル名> <データセット名> search を実行し、期待するフィールドが存在するか確認する', isCorrect: true },
      { key: 'B', text: 'Splunk Web の「CIM Validator」ツールを使用する', isCorrect: false },
      { key: 'C', text: 'インデックスを再構築して確認する', isCorrect: false },
      { key: 'D', text: 'TA をインストールすると自動的に検証レポートが生成される', isCorrect: false },
    ],
    explanation:
      '`| datamodel Authentication Authentication search | fields src_user, action, app` などを実行し、CIM の標準フィールドが正しく値を持っているかを確認します。フィールドが空または存在しない場合は TA の設定を見直す必要があります。',
    reference: 'Splunk Docs: Validate CIM compliance',
    difficulty: 'medium',
  },
  {
    id: 'cim-009',
    domainId: 'cim',
    stem: 'Splunk Enterprise Security (ES) と CIM の関係として正しいのはどれか？',
    choices: [
      { key: 'A', text: 'Splunk ES は CIM に準拠したデータモデルを前提として動作しており、正規化されたデータが必要', isCorrect: true },
      { key: 'B', text: 'Splunk ES は CIM なしで完全に機能する', isCorrect: false },
      { key: 'C', text: 'CIM は Splunk ES にのみ必要で、他のアプリでは不要', isCorrect: false },
      { key: 'D', text: 'Splunk ES をインストールすると CIM も自動的に設定される', isCorrect: false },
    ],
    explanation:
      'Splunk Enterprise Security のコリレーションサーチや Notable Events は CIM のデータモデルに基づいています。データが CIM に準拠していないと ES の多くの機能が正常に動作しません。CIM の正規化は ES 導入の前提条件です。',
    reference: 'Splunk Docs: Splunk ES and CIM requirements',
    difficulty: 'hard',
  },
  {
    id: 'cim-010',
    domainId: 'cim',
    stem: 'CIM Add-On のアクセラレーションはデフォルトでどのような状態か？',
    choices: [
      { key: 'A', text: 'デフォルトでオフ（無効）になっている', isCorrect: true },
      { key: 'B', text: 'デフォルトでオン（有効）になっている', isCorrect: false },
      { key: 'C', text: 'インストール時に有効/無効を選択する', isCorrect: false },
      { key: 'D', text: 'アクセラレーション設定は CIM Add-On には存在しない', isCorrect: false },
    ],
    explanation:
      'CIM Add-On に含まれるデータモデルのアクセラレーションはデフォルトでオフ（無効）です。アクセラレーションを有効にするにはデータモデルの設定画面で明示的に有効化する必要があります。有効にすると tsidx ファイルの事前生成が始まり、ピボットやデータモデルベースのサーチが高速化されます。',
    reference: 'Splunk Docs: CIM Add-on data model acceleration',
    difficulty: 'medium',
  },
  {
    id: 'cim-011',
    domainId: 'cim',
    stem: 'CIM の正しい説明として含まれるものはどれか？（複数の側面から1つを選べ）',
    choices: [
      { key: 'A', text: 'データを正規化するための方法論であり、異なるソースのデータを相関分析するための標準フィールド名を定義する', isCorrect: true },
      { key: 'B', text: 'ナレッジマネージャーが使用するカスタム知識オブジェクトの作成ツール', isCorrect: false },
      { key: 'C', text: 'Splunk の課金・ライセンス管理の共通モデル', isCorrect: false },
      { key: 'D', text: 'データの取り込みを標準化するためのフォワーダー設定モデル', isCorrect: false },
    ],
    explanation:
      'CIM（Common Information Model）は（1）データを正規化するための方法論、（2）異なるソースのデータを相関分析するための仕組み、（3）既存の Splunk アプリと共存できる仕組み、という3つの側面を持ちます。ナレッジマネージャーが CIM を使ってカスタム知識オブジェクトを作る、という説明は不正確です。',
    reference: 'Splunk Docs: Splunk CIM overview',
    difficulty: 'medium',
  },
  {
    id: 'cim-012',
    domainId: 'cim',
    stem: 'CIM データモデルで適切なフィールド名を確認する方法はどれか？',
    choices: [
      { key: 'A', text: 'CIM データモデルリファレンステーブルを参照して標準フィールド名を確認する', isCorrect: true },
      { key: 'B', text: 'インデックスに保存された生のフィールド名を直接使用する', isCorrect: false },
      { key: 'C', text: 'Splunk サポートに問い合わせてフィールド名を確認する', isCorrect: false },
      { key: 'D', text: '各ベンダーのドキュメントを参照して独自のフィールド名を使用する', isCorrect: false },
    ],
    explanation:
      'CIM でデータを正規化する際の正しいアプローチは CIM データモデルリファレンステーブルを参照することです。リファレンステーブルにはデータモデルごとの標準フィールド名（例: Network Traffic の `src`、`dest`、`bytes_in` など）が定義されています。',
    reference: 'Splunk Docs: CIM data model reference tables',
    difficulty: 'medium',
  },
  {
    id: 'cim-013',
    domainId: 'cim',
    stem: 'CIM Add-On に含まれるコンポーネントとして正しいのはどれか？',
    choices: [
      { key: 'A', text: '事前設定されたデータモデルと、フィールドおよびイベントカテゴリのタグ定義', isCorrect: true },
      { key: 'B', text: 'アクセラレーション設定とカスタムビジュアライゼーション', isCorrect: false },
      { key: 'C', text: 'カスタムダッシュボードとアラートのみ', isCorrect: false },
      { key: 'D', text: 'データ取り込みのパーサーと正規化スクリプト', isCorrect: false },
    ],
    explanation:
      'Splunk CIM Add-On が含むのは「事前設定されたデータモデル（Authentication、Network_Traffic、Web など）」と「フィールドおよびイベントカテゴリのタグ定義」です。アクセラレーションはデフォルトでオフ、カスタムビジュアライゼーションは含まれません。データの実際の正規化は各ベンダーの TA が担います。',
    reference: 'Splunk Docs: About the Splunk CIM Add-on',
    difficulty: 'medium',
  },
  {
    id: 'cim-014',
    domainId: 'cim',
    stem: 'CIM でフィールドの正規化に使用する知識オブジェクトはどれか？',
    choices: [
      { key: 'A', text: 'フィールドエイリアス（Field Aliases）', isCorrect: true },
      { key: 'B', text: 'ワークフローアクション（Workflow Actions）', isCorrect: false },
      { key: 'C', text: 'マクロ（Macros）', isCorrect: false },
      { key: 'D', text: 'イベントタイプ（Event Types）', isCorrect: false },
    ],
    explanation:
      'CIM でのデータ正規化は主にフィールドエイリアスを使って実現します。例えば `clientip` フィールドに `src` というエイリアスを付けることで、異なるソースタイプのデータを CIM の標準フィールド名で統一します。Technology Add-On (TA) がこのフィールドエイリアスの定義を提供します。',
    reference: 'Splunk Docs: CIM field normalization with field aliases',
    difficulty: 'medium',
  },
  {
    id: 'cim-015',
    domainId: 'cim',
    stem: 'CIM Add-On に含まれるデータモデルのうち、データの正規化のために定義されているものはどれか？',
    choices: [
      { key: 'A', text: 'Authentication、Network_Traffic、Web など複数のドメイン向けデータモデル', isCorrect: true },
      { key: 'B', text: 'Financial_Data と HR_Data のみ', isCorrect: false },
      { key: 'C', text: 'CIM Add-On にはデータモデルは含まれていない', isCorrect: false },
      { key: 'D', text: 'Network_Traffic のみが含まれる', isCorrect: false },
    ],
    explanation:
      'CIM Add-On には Authentication（認証）、Network_Traffic（ネットワークトラフィック）、Web（Web アクセス）、Endpoint（エンドポイント）、Intrusion_Detection（侵入検知）、Malware（マルウェア）など、セキュリティや IT 運用の多くのドメインに対応したデータモデルが含まれています。',
    reference: 'Splunk Docs: CIM data models',
    difficulty: 'easy',
  },
  {
    id: 'cim-016',
    domainId: 'cim',
    stem: 'CIM に関する説明で「間違っている」ものはどれか？',
    choices: [
      { key: 'A', text: 'ナレッジマネージャーが CIM を使って新しい知識オブジェクトを作成する', isCorrect: true },
      { key: 'B', text: 'CIM はデータを正規化するための方法論である', isCorrect: false },
      { key: 'C', text: 'CIM は異なるソースのデータを相関分析するために使用する', isCorrect: false },
      { key: 'D', text: 'CIM Add-On は既存の Splunk アプリと共存できる', isCorrect: false },
    ],
    explanation:
      '"ナレッジマネージャーが CIM を使って新しい知識オブジェクトを作成する" という説明は不正確です。CIM はフィールドエイリアス、タグ、データモデルなど既存の知識オブジェクトタイプを活用したデータ正規化の方法論です。CIM 専用の「知識オブジェクト作成ツール」があるわけではありません。',
    reference: 'Splunk Docs: Splunk CIM overview',
    difficulty: 'hard',
  },
  {
    id: 'cim-017',
    domainId: 'cim',
    stem: 'CIM Add-On はなぜ既存の Splunk アプリと「共存できる」と言えるか？',
    choices: [
      { key: 'A', text: 'CIM Add-On はデータモデルとタグ定義を提供するだけで、データの変換やインデックスへの書き込みを行わないため', isCorrect: true },
      { key: 'B', text: 'CIM Add-On は独自のインデックスに分離されてインストールされるため', isCorrect: false },
      { key: 'C', text: 'CIM Add-On は専用のアプリコンテキストで動作し他のアプリに干渉しないため', isCorrect: false },
      { key: 'D', text: 'CIM Add-On は Splunk の標準コンポーネントとしてコアに組み込まれているため', isCorrect: false },
    ],
    explanation:
      'CIM Add-On はデータモデルの定義とタグの定義を提供するだけで、実際のデータや既存の設定を変更しません。そのため既存の Splunk アプリや設定と干渉せず共存できます。CIM は方法論であり、既存のアーキテクチャに追加・統合できる仕組みです。',
    reference: 'Splunk Docs: Splunk CIM overview',
    difficulty: 'hard',
  },
  {
    id: 'cim-018',
    domainId: 'cim',
    stem: 'CIM の「Network Traffic」データモデルで定義されている標準フィールドに含まれるものはどれか？',
    choices: [
      { key: 'A', text: '`src`（送信元）、`dest`（宛先）、`bytes_in`、`bytes_out`、`transport`（プロトコル）など', isCorrect: true },
      { key: 'B', text: '`username`、`password`、`login_status` など', isCorrect: false },
      { key: 'C', text: '`url`、`http_method`、`status` など', isCorrect: false },
      { key: 'D', text: '`signature`、`severity`、`category` など', isCorrect: false },
    ],
    explanation:
      'CIM の Network_Traffic データモデルには `src`（送信元 IP）、`dest`（宛先 IP）、`src_port`、`dest_port`、`transport`（TCP/UDP など）、`bytes_in`、`bytes_out`、`action` などのフィールドが定義されています。これらのフィールドにデータをマッピングすることで横断的なネットワーク分析が可能になります。',
    reference: 'Splunk CIM documentation: Network Traffic',
    difficulty: 'medium',
  },
  {
    id: 'cim-019',
    domainId: 'cim',
    stem: 'Technology Add-On（TA）の主な役割はどれか？',
    choices: [
      { key: 'A', text: '特定ベンダーのデータをインデックス化し、CIM のフィールド名に合わせて正規化する', isCorrect: true },
      { key: 'B', text: 'CIM のデータモデル定義を含む本体アドオン', isCorrect: false },
      { key: 'C', text: 'ユーザーインターフェースのダッシュボードを提供する', isCorrect: false },
      { key: 'D', text: 'Splunk のライセンスを管理する', isCorrect: false },
    ],
    explanation:
      'TA（Technology Add-On）は特定のデータソース（例: Cisco ASA、Palo Alto Networks、Windows Event Log）のデータを取り込み、CIM の標準フィールドにマッピング（正規化）する役割を担います。フィールドエイリアス、計算フィールド、タグ、イベントタイプなどを使ってデータを CIM に準拠させます。',
    reference: 'Splunk Docs: About Technology Add-Ons',
    difficulty: 'easy',
  },
  {
    id: 'cim-020',
    domainId: 'cim',
    stem: 'CIM の「Authentication」データモデルでイベントを分類するために必要なタグはどれか？',
    choices: [
      { key: 'A', text: '`authentication` タグが必須で、成功なら `success`、失敗なら `failure` タグも付ける', isCorrect: true },
      { key: 'B', text: '`auth` タグのみ必要', isCorrect: false },
      { key: 'C', text: '`login` と `logout` タグが必要', isCorrect: false },
      { key: 'D', text: 'タグは不要で、`eventtype=authentication` フィールドのみ必要', isCorrect: false },
    ],
    explanation:
      'CIM Authentication データモデルにイベントを含めるには `authentication` タグが必要です。認証成功イベントには `success` タグ、失敗イベントには `failure` タグを追加することで、より詳細な分類が可能です。TA はこのタグを自動的に付与するように設定されています。',
    reference: 'Splunk CIM documentation: Authentication data model',
    difficulty: 'medium',
  },
  {
    id: 'cim-021',
    domainId: 'cim',
    stem: 'CIM に準拠したデータを使うメリットとして正しいのはどれか？',
    choices: [
      { key: 'A', text: '複数のデータソースを横断した統一のサーチ、レポート、アラートが可能になる', isCorrect: true },
      { key: 'B', text: 'データのインデックス速度が向上する', isCorrect: false },
      { key: 'C', text: 'Splunk のライセンスコストが削減される', isCorrect: false },
      { key: 'D', text: 'データが暗号化されてセキュリティが向上する', isCorrect: false },
    ],
    explanation:
      'CIM 準拠の最大のメリットは異なるベンダー・ソースタイプのデータに共通のフィールド名が使えることです。例えば Cisco、Palo Alto、Check Point のファイアウォールデータを統一した `src`、`dest`、`action` フィールドで横断的に分析できます。Splunk Enterprise Security などの Premium App も CIM 準拠データを前提としています。',
    reference: 'Splunk Docs: CIM benefits',
    difficulty: 'easy',
  },
  {
    id: 'cim-022',
    domainId: 'cim',
    stem: '`| pivot` コマンドでデータモデルを参照する際、CIM のデータモデルを使う正しい構文はどれか？',
    choices: [
      { key: 'A', text: '`| pivot Network_Traffic All_Traffic count(All_Traffic) AS count BY src`', isCorrect: true },
      { key: 'B', text: '`| pivot FROM Network_Traffic SELECT count BY src`', isCorrect: false },
      { key: 'C', text: '`| pivot network_traffic count by src`', isCorrect: false },
      { key: 'D', text: '`| datamodel Network_Traffic pivot count by src`', isCorrect: false },
    ],
    explanation:
      '`| pivot <データモデル名> <データセット名> <集計関数> AS <列名> BY <フィールド>` の構文を使います。CIM の Network_Traffic データモデルを参照する場合、データモデル名は `Network_Traffic`（アンダースコア区切り）で、データセット名は `All_Traffic` です。',
    reference: 'Splunk Docs: pivot command',
    difficulty: 'hard',
  },
  {
    id: 'cim-023',
    domainId: 'cim',
    stem: 'CIM の「Web」データモデルで定義されている主なフィールドはどれか？',
    choices: [
      { key: 'A', text: '`url`、`http_method`（GET/POST など）、`status`（HTTP ステータスコード）、`src`、`dest` など', isCorrect: true },
      { key: 'B', text: '`src_ip`、`dst_ip`、`protocol`、`port` など', isCorrect: false },
      { key: 'C', text: '`user`、`password`、`auth_result` など', isCorrect: false },
      { key: 'D', text: '`file_name`、`file_path`、`file_size` など', isCorrect: false },
    ],
    explanation:
      'CIM の Web データモデルには Web アクセスに関連するフィールドが定義されています。主要フィールドは `url`（アクセスした URL）、`http_method`（GET、POST など）、`status`（HTTP ステータスコード）、`src`（クライアント IP）、`dest`（サーバー IP）、`bytes_in`、`bytes_out` などです。',
    reference: 'Splunk CIM documentation: Web data model',
    difficulty: 'medium',
  },
  {
    id: 'cim-024',
    domainId: 'cim',
    stem: 'Splunk ES（Enterprise Security）と CIM の関係として正しいのはどれか？',
    choices: [
      { key: 'A', text: 'Splunk ES は CIM 準拠データを前提として設計されており、相関サーチやダッシュボードが CIM フィールドを使用する', isCorrect: true },
      { key: 'B', text: 'Splunk ES は CIM を置き換えた新しい標準', isCorrect: false },
      { key: 'C', text: 'Splunk ES と CIM は無関係で独立して動作する', isCorrect: false },
      { key: 'D', text: 'CIM は Splunk ES 専用の機能で、Core では使えない', isCorrect: false },
    ],
    explanation:
      'Splunk Enterprise Security は CIM に強く依存しています。ES の相関サーチ、ノータブルイベント、ダッシュボードはすべて CIM の標準フィールド名を使用します。CIM 準拠のデータ（TA でマッピングされたデータ）を用意することが ES 導入の前提条件です。',
    reference: 'Splunk Docs: Splunk ES and CIM',
    difficulty: 'medium',
  },
  {
    id: 'cim-025',
    domainId: 'cim',
    stem: 'CIM データモデルの加速を設定するために必要なものはどれか？',
    choices: [
      { key: 'A', text: '管理者権限と、対象データが CIM フィールドに正規化されていること（TA によるマッピングが完了していること）', isCorrect: true },
      { key: 'B', text: 'Splunk Enterprise Security ライセンスのみ', isCorrect: false },
      { key: 'C', text: '特別な設定は不要で、CIM Add-On インストールで自動的に加速される', isCorrect: false },
      { key: 'D', text: 'ディスク容量が 1TB 以上あること', isCorrect: false },
    ],
    explanation:
      'データモデルの加速を有効にするには管理者権限が必要です。また、加速が意味を持つためにはデータが CIM の対象フィールドに正規化されている必要があります（TA によるフィールドマッピングが正しく設定されていること）。加速設定は Settings > Data Models で各モデルごとに行います。',
    reference: 'Splunk Docs: Accelerate CIM data models',
    difficulty: 'hard',
  },
  {
    id: 'cim-026',
    domainId: 'cim',
    stem: 'CIM の「Malware」データモデルにデータを含めるために必要なタグはどれか？',
    choices: [
      { key: 'A', text: '`malware` と `attack` タグが必要', isCorrect: true },
      { key: 'B', text: '`virus` タグのみ必要', isCorrect: false },
      { key: 'C', text: '`threat` と `alert` タグが必要', isCorrect: false },
      { key: 'D', text: '`malware_attack` という単一タグが必要', isCorrect: false },
    ],
    explanation:
      'CIM の Malware データモデルにイベントを含めるには `malware` と `attack` の両方のタグが必要です。これらのタグはマルウェアの検出・ブロックイベントに付けることで、ES の Malware ダッシュボードや相関サーチで活用されます。',
    reference: 'Splunk CIM documentation: Malware data model',
    difficulty: 'hard',
  },
  {
    id: 'cim-027',
    domainId: 'cim',
    stem: 'CIM フィールドのマッピングをテスト・検証するためのアドオンはどれか？',
    choices: [
      { key: 'A', text: 'Splunk CIM Validator（または SA-cim-validator）', isCorrect: true },
      { key: 'B', text: 'Splunk DB Connect', isCorrect: false },
      { key: 'C', text: 'Splunk App for PCI Compliance', isCorrect: false },
      { key: 'D', text: 'Splunk ITSI（IT Service Intelligence）', isCorrect: false },
    ],
    explanation:
      'SA-cim-validator（Splunk CIM Validator）は TA による CIM フィールドマッピングが正しく機能しているかを検証するアドオンです。各データモデルに対して必要なフィールドが存在するか、値が適切なフォーマットかをチェックするレポートを提供します。',
    reference: 'Splunk Docs: Validate CIM compliance',
    difficulty: 'hard',
  },
]
