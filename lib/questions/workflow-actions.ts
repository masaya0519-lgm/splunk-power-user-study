import { Question } from '../types'

export const workflowActionsQuestions: Question[] = [
  {
    id: 'wa-001',
    domainId: 'workflow-actions',
    stem: 'ワークフローアクションで使用できるアクションタイプはどれか？',
    choices: [
      { key: 'A', text: 'GET、POST、Search の3種類', isCorrect: true },
      { key: 'B', text: 'GET、POST、PUT、DELETE の4種類', isCorrect: false },
      { key: 'C', text: 'Search と Alert の2種類', isCorrect: false },
      { key: 'D', text: 'HTTP、HTTPS、Search の3種類', isCorrect: false },
    ],
    explanation:
      'ワークフローアクションのタイプは「GET」（外部URLを開く）、「POST」（外部システムへデータ送信）、「Search」（新しい Splunk サーチを起動）の3種類です。',
    reference: 'Splunk Docs: About workflow actions',
    difficulty: 'easy',
  },
  {
    id: 'wa-002',
    domainId: 'workflow-actions',
    stem: 'GET ワークフローアクションの主な用途はどれか？',
    choices: [
      { key: 'A', text: 'フィールド値を URL パラメータとして外部ページを開く', isCorrect: true },
      { key: 'B', text: 'フィールドデータを外部システムに HTTP POST で送信する', isCorrect: false },
      { key: 'C', text: '新しい Splunk サーチを起動する', isCorrect: false },
      { key: 'D', text: '外部 REST API を呼び出してデータを取得し Splunk に追加する', isCorrect: false },
    ],
    explanation:
      'GET アクションはフィールド値を URL に埋め込んで外部ページをブラウザで開きます。例: IP アドレスフィールドから `https://whois.example.com/?ip=$clientip$` のような外部ルックアップサイトを開くのに使います。',
    reference: 'Splunk Docs: Create a GET workflow action',
    difficulty: 'easy',
  },
  {
    id: 'wa-003',
    domainId: 'workflow-actions',
    stem: 'POST ワークフローアクションで、フォームデータとしてフィールド値を送信する場合の設定はどれか？',
    choices: [
      { key: 'A', text: 'POST アクションの「Post arguments」に `フィールド名=フィールド参照` を設定する', isCorrect: true },
      { key: 'B', text: 'URL にクエリパラメータとして追加する', isCorrect: false },
      { key: 'C', text: '「Request headers」に JSON 形式で設定する', isCorrect: false },
      { key: 'D', text: 'POST アクションではフィールド値を送信できない', isCorrect: false },
    ],
    explanation:
      'POST アクションでは「URI」に宛先 URL を指定し、「Post arguments」にフォームデータを設定します。フィールド値は `$fieldname$` の形式で参照します。例: `ticket_description=$_raw$` のようにイベントの生データをチケットシステムに送れます。',
    reference: 'Splunk Docs: Create a POST workflow action',
    difficulty: 'medium',
  },
  {
    id: 'wa-004',
    domainId: 'workflow-actions',
    stem: 'Search ワークフローアクションで `$src_ip$` を使う場合の説明として正しいのはどれか？',
    choices: [
      { key: 'A', text: 'イベントの `src_ip` フィールドの値がサーチ文字列に展開される', isCorrect: true },
      { key: 'B', text: '`src_ip` という名前のマクロを呼び出す', isCorrect: false },
      { key: 'C', text: '`$src_ip$` はサーチ変数として事前に定義が必要', isCorrect: false },
      { key: 'D', text: '`src_ip` フィールドを新しいインデックスで検索する', isCorrect: false },
    ],
    explanation:
      'Search ワークフローアクションのサーチ文字列内で `$フィールド名$` を使うと、そのフィールドの実際の値に置換されます。例: `index=firewall src_ip=$src_ip$` とすると、クリックしたイベントの src_ip 値で新しいサーチが実行されます。',
    reference: 'Splunk Docs: Create a Search workflow action',
    difficulty: 'medium',
  },
  {
    id: 'wa-005',
    domainId: 'workflow-actions',
    stem: 'ワークフローアクションはどこから呼び出せるか？',
    choices: [
      { key: 'A', text: 'サーチ結果のイベントにある「Event Actions」メニューや、フィールド値の横のメニュー', isCorrect: true },
      { key: 'B', text: 'ダッシュボードのパネルのみ', isCorrect: false },
      { key: 'C', text: 'コマンドラインからのみ', isCorrect: false },
      { key: 'D', text: 'レポートのスケジュール設定からのみ', isCorrect: false },
    ],
    explanation:
      'ワークフローアクションはサーチ結果のイベント詳細パネルにある「Event Actions」ドロップダウン、またはフィールド値をクリックしたときのコンテキストメニューから実行できます。',
    reference: 'Splunk Docs: Use workflow actions',
    difficulty: 'easy',
  },
  {
    id: 'wa-006',
    domainId: 'workflow-actions',
    stem: 'ワークフローアクションの「Apply only to」設定の説明として正しいのはどれか？',
    choices: [
      { key: 'A', text: '特定のソースタイプやイベントタイプにのみアクションを表示するフィルタ設定', isCorrect: true },
      { key: 'B', text: 'アクションを実行できるユーザーの権限を設定する', isCorrect: false },
      { key: 'C', text: 'アクションが適用されるインデックスを指定する', isCorrect: false },
      { key: 'D', text: 'アクションの実行回数を制限する設定', isCorrect: false },
    ],
    explanation:
      '「Apply only to」設定で特定のソースタイプやイベントタイプに紐付けることで、無関係なイベントには表示されず関連するイベントにのみワークフローアクションが表示されます。',
    reference: 'Splunk Docs: Workflow action settings',
    difficulty: 'medium',
  },
  {
    id: 'wa-007',
    domainId: 'workflow-actions',
    stem: 'Search ワークフローアクションで「Open in new tab」チェックボックスを ON にすると何が変わるか？',
    choices: [
      { key: 'A', text: '新しいサーチが現在のウィンドウとは別のタブで開かれる', isCorrect: true },
      { key: 'B', text: '新しいサーチがバックグラウンドで実行される', isCorrect: false },
      { key: 'C', text: '新しいインデックスが作成される', isCorrect: false },
      { key: 'D', text: 'サーチがスケジュール実行される', isCorrect: false },
    ],
    explanation:
      'Search ワークフローアクションの「Open in new tab」を有効にすると、アクションを実行したときに新しいブラウザタブで Splunk サーチが開かれます。現在の作業を中断せずに詳細調査が可能です。',
    reference: 'Splunk Docs: Workflow action - Search type',
    difficulty: 'easy',
  },
  {
    id: 'wa-008',
    domainId: 'workflow-actions',
    stem: 'ワークフローアクションはどこで作成・管理するか？',
    choices: [
      { key: 'A', text: 'Settings > Fields > Workflow Actions', isCorrect: true },
      { key: 'B', text: 'Settings > Knowledge > Event Types', isCorrect: false },
      { key: 'C', text: 'Settings > Advanced Search > Workflow', isCorrect: false },
      { key: 'D', text: 'Settings > Data > Actions', isCorrect: false },
    ],
    explanation:
      'ワークフローアクションは Settings > Fields > Workflow Actions から作成・管理します。名前、タイプ（GET/POST/Search）、対象ソースタイプ、URL/サーチ文字列などを設定します。',
    reference: 'Splunk Docs: Create workflow actions',
    difficulty: 'easy',
  },
]
