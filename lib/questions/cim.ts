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
]
