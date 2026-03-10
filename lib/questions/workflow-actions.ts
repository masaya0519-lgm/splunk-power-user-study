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
  {
    id: 'wa-009',
    domainId: 'workflow-actions',
    stem: 'GET ワークフローアクションの主な目的はどれか？',
    choices: [
      { key: 'A', text: 'フィールド値を URL に埋め込んで外部リソースから情報を取得する', isCorrect: true },
      { key: 'B', text: 'フォームデータを外部システムに送信する', isCorrect: false },
      { key: 'C', text: '新しい Splunk サーチを起動する', isCorrect: false },
      { key: 'D', text: 'データをインデックスに書き込む', isCorrect: false },
    ],
    explanation:
      'GET ワークフローアクションはイベントのフィールド値を URL パラメータとして外部リソース（WHOIS サイト、脅威インテリジェンスサービスなど）を開き、情報を取得するために使います。ブラウザが URL を GET リクエストで開きます。',
    reference: 'Splunk Docs: Create a GET workflow action',
    difficulty: 'easy',
  },
  {
    id: 'wa-010',
    domainId: 'workflow-actions',
    stem: 'GET ワークフローアクションを作成する際に必須の設定項目はどれか？',
    choices: [
      { key: 'A', text: 'アクション名、URI（URL）、Event Actions メニューでのラベル名', isCorrect: true },
      { key: 'B', text: 'アクション名と対象ソースタイプのみ', isCorrect: false },
      { key: 'C', text: 'URI と HTTP メソッドのみ', isCorrect: false },
      { key: 'D', text: 'アクション名、URI、Post Arguments の3つ', isCorrect: false },
    ],
    explanation:
      'GET ワークフローアクションを作成する際の必須項目は「アクション名（Name）」「URI（リンク先 URL）」「Event Actions メニューに表示するラベル（Label）」です。ラベルはユーザーがアクションを識別するために使われます。',
    reference: 'Splunk Docs: Create a GET workflow action',
    difficulty: 'medium',
  },
  {
    id: 'wa-011',
    domainId: 'workflow-actions',
    stem: 'POST ワークフローアクションで送信できるデータの種類はどれか？',
    choices: [
      { key: 'A', text: '平文の固定値とフィールド変数（$fieldname$）の両方を混在させて送信できる', isCorrect: true },
      { key: 'B', text: 'フィールド変数（$fieldname$）のみ送信できる', isCorrect: false },
      { key: 'C', text: '平文の固定値のみ送信できる', isCorrect: false },
      { key: 'D', text: 'POST アクションではデータの送信内容を指定できない', isCorrect: false },
    ],
    explanation:
      'POST ワークフローアクションでは「Post Arguments」に平文の固定値と `$fieldname$` 形式のフィールド変数の両方を混在させて送信できます。例: `ticket_source=splunk&ip=$src_ip$&description=$_raw$` のように固定値と動的なフィールド値を組み合わせた送信が可能です。',
    reference: 'Splunk Docs: Create a POST workflow action',
    difficulty: 'medium',
  },
  {
    id: 'wa-012',
    domainId: 'workflow-actions',
    stem: 'ワークフローアクションで `$fieldname$` の構文を使う目的はどれか？',
    choices: [
      { key: 'A', text: 'そのイベントの指定フィールドの実際の値に置き換えられる', isCorrect: true },
      { key: 'B', text: 'Splunk マクロを呼び出す', isCorrect: false },
      { key: 'C', text: 'eval 式を実行してフィールドを計算する', isCorrect: false },
      { key: 'D', text: 'ワイルドカードとしてすべてのフィールドを対象にする', isCorrect: false },
    ],
    explanation:
      'ワークフローアクションの URI や Post Arguments、サーチ文字列内で `$フィールド名$` を使うと、アクションを実行したイベントのそのフィールドの実際の値に置換されます。例: イベントの `src_ip` が "192.168.1.1" なら `$src_ip$` が "192.168.1.1" に置き換えられます。',
    reference: 'Splunk Docs: Workflow action field tokens',
    difficulty: 'easy',
  },
  {
    id: 'wa-013',
    domainId: 'workflow-actions',
    stem: 'Search タイプのワークフローアクションを実行したとき、どのような動作が起こるか？',
    choices: [
      { key: 'A', text: '定義したサーチ文字列（フィールド値が展開されたもの）で新しい Splunk サーチが起動する', isCorrect: true },
      { key: 'B', text: '外部の検索エンジンで検索が実行される', isCorrect: false },
      { key: 'C', text: '現在のサーチの時間範囲でサーチ文字列が追加フィルタとして追加される', isCorrect: false },
      { key: 'D', text: '指定したダッシュボードパネルのサーチが更新される', isCorrect: false },
    ],
    explanation:
      'Search タイプのワークフローアクションは、定義したサーチ文字列内のフィールドトークン（`$fieldname$`）をイベントの実際のフィールド値で置換し、新しい Splunk サーチを起動します。例えば特定 IP の過去ログを調査するサーチを素早く実行できます。',
    reference: 'Splunk Docs: Create a Search workflow action',
    difficulty: 'medium',
  },
  {
    id: 'wa-014',
    domainId: 'workflow-actions',
    stem: 'ワークフローアクションを特定のソースタイプのイベントにのみ表示させる設定はどれか？',
    choices: [
      { key: 'A', text: '「Apply only to」の設定でソースタイプや イベントタイプを指定する', isCorrect: true },
      { key: 'B', text: '「Permissions」設定でソースタイプ権限を指定する', isCorrect: false },
      { key: 'C', text: '「Constraints」フィールドにソースタイプを入力する', isCorrect: false },
      { key: 'D', text: 'アクション名にソースタイプを含める命名規則を使う', isCorrect: false },
    ],
    explanation:
      'ワークフローアクションの「Apply only to」設定でソースタイプやイベントタイプを指定することで、関連するイベントにのみアクションが表示されます。指定しない場合はすべてのイベントの Event Actions メニューに表示されます。',
    reference: 'Splunk Docs: Workflow action settings',
    difficulty: 'medium',
  },
  {
    id: 'wa-015',
    domainId: 'workflow-actions',
    stem: '外部のチケット管理システムにイベント情報を自動送信したい場合、最も適切なワークフローアクションのタイプはどれか？',
    choices: [
      { key: 'A', text: 'POST タイプ', isCorrect: true },
      { key: 'B', text: 'GET タイプ', isCorrect: false },
      { key: 'C', text: 'Search タイプ', isCorrect: false },
      { key: 'D', text: 'Alert タイプ', isCorrect: false },
    ],
    explanation:
      '外部システムにデータを送信するには POST タイプのワークフローアクションを使います。チケット管理システム（Jira、ServiceNow など）の REST API エンドポイントに HTTP POST でイベント情報を送信してチケットを自動作成するのに適しています。GET はページを開くだけで、Search は Splunk 内のサーチを実行します。',
    reference: 'Splunk Docs: Create a POST workflow action',
    difficulty: 'easy',
  },
  {
    id: 'wa-016',
    domainId: 'workflow-actions',
    stem: 'GET タイプのワークフローアクションを作成し、IP アドレスを外部の WHOIS サービスに送る場合、URI の設定方法はどれか？',
    choices: [
      { key: 'A', text: '`https://whois.example.com/?ip=$src_ip$` のように URL にフィールドトークンを埋め込む', isCorrect: true },
      { key: 'B', text: 'URI に `src_ip` フィールド名のみを指定し、Splunk が自動的に URL を生成する', isCorrect: false },
      { key: 'C', text: 'Post Arguments に IP アドレスを指定し、URI は基本 URL のみ設定する', isCorrect: false },
      { key: 'D', text: 'URI フィールドには固定 URL のみ設定でき、フィールド値を動的に埋め込むことはできない', isCorrect: false },
    ],
    explanation:
      'GET ワークフローアクションでフィールド値を URL に動的に埋め込むには、URI に `$フィールド名$` を含めます。例: `https://whois.example.com/?ip=$src_ip$` とすると、イベントの `src_ip` フィールドの値が URL に埋め込まれて外部サービスが開かれます。',
    reference: 'Splunk Docs: Create a GET workflow action',
    difficulty: 'medium',
  },
  {
    id: 'wa-017',
    domainId: 'workflow-actions',
    stem: 'ワークフローアクションを設定する場所として正しいのはどれか？',
    choices: [
      { key: 'A', text: 'Settings > Fields > Workflow Actions', isCorrect: true },
      { key: 'B', text: 'Settings > Knowledge > Workflow Actions', isCorrect: false },
      { key: 'C', text: 'Settings > Advanced Search > Workflow Actions', isCorrect: false },
      { key: 'D', text: 'Settings > Data > Workflow Actions', isCorrect: false },
    ],
    explanation:
      'ワークフローアクションは Settings > Fields > Workflow Actions から作成・管理します。フィールドに関連した知識オブジェクトのため Fields メニューに配置されています。',
    reference: 'Splunk Docs: Create workflow actions',
    difficulty: 'easy',
  },
  {
    id: 'wa-018',
    domainId: 'workflow-actions',
    stem: 'POST ワークフローアクションでフィールド値をリクエストボディに含める方法はどれか？',
    choices: [
      { key: 'A', text: 'POST フィールドの「Value」に `$フィールド名$` の形式で指定する', isCorrect: true },
      { key: 'B', text: 'URL のクエリパラメータとして `?field=$フィールド名$` と指定する', isCorrect: false },
      { key: 'C', text: 'POST アクションではフィールド値を含めることができない', isCorrect: false },
      { key: 'D', text: 'ヘッダー（Header）フィールドに `$フィールド名$` を指定する', isCorrect: false },
    ],
    explanation:
      'POST ワークフローアクションでは、「POST fields」セクションでキーと値のペアを設定します。値フィールドに `$フィールド名$` を指定することでイベントのフィールド値を動的に含めることができます。これにより外部システムへのデータ送信が可能になります。',
    reference: 'Splunk Docs: Create a POST workflow action',
    difficulty: 'medium',
  },
  {
    id: 'wa-019',
    domainId: 'workflow-actions',
    stem: 'ワークフローアクションの「Apply only to the following fields」設定の説明として正しいのはどれか？',
    choices: [
      { key: 'A', text: '指定したフィールドが存在するイベントにのみアクションを表示する', isCorrect: true },
      { key: 'B', text: '指定したフィールドのみをアクションに渡す', isCorrect: false },
      { key: 'C', text: '指定したフィールドの値のみを対象にURL を生成する', isCorrect: false },
      { key: 'D', text: 'フィールド値でフィルタリングしてアクションを表示する', isCorrect: false },
    ],
    explanation:
      '「Apply only to the following fields」を設定すると、指定したフィールドを持つイベントにのみワークフローアクションが Event Actions メニューに表示されます。例: `src_ip` フィールドを指定すると、`src_ip` を持つイベントのみにアクションが表示されます。',
    reference: 'Splunk Docs: Workflow action field restrictions',
    difficulty: 'medium',
  },
  {
    id: 'wa-020',
    domainId: 'workflow-actions',
    stem: 'ワークフローアクションの「Search」タイプで `$フィールド名$` を使う場合の説明として正しいのはどれか？',
    choices: [
      { key: 'A', text: 'サーチ文字列にフィールド値を埋め込んで新しいサーチを動的に実行できる', isCorrect: true },
      { key: 'B', text: 'サーチ結果をフィールド値でフィルタリングする', isCorrect: false },
      { key: 'C', text: 'フィールド値を別のインデックスで検索する', isCorrect: false },
      { key: 'D', text: 'フィールド名を変数として保存する', isCorrect: false },
    ],
    explanation:
      'Search タイプのワークフローアクションでは、サーチ文字列に `$フィールド名$` を含めることで、クリックしたイベントのフィールド値を使った動的なサーチを実行できます。例: `index=firewall src=$src_ip$ | stats count by dest` でクリックした IP の通信先を調査できます。',
    reference: 'Splunk Docs: Create a Search workflow action',
    difficulty: 'medium',
  },
  {
    id: 'wa-021',
    domainId: 'workflow-actions',
    stem: 'ワークフローアクションを特定のソースタイプのイベントにのみ表示するにはどうするか？',
    choices: [
      { key: 'A', text: '「Apply only to the following sourcetypes」フィールドに対象ソースタイプを指定する', isCorrect: true },
      { key: 'B', text: 'サーチ文字列に `sourcetype=xxx` を含める', isCorrect: false },
      { key: 'C', text: 'ソースタイプごとに別々のアクションを作成するしかない', isCorrect: false },
      { key: 'D', text: 'ワークフローアクションはすべてのイベントに表示され、ソースタイプでの絞り込みはできない', isCorrect: false },
    ],
    explanation:
      'ワークフローアクション設定の「Apply only to the following sourcetypes」にソースタイプを指定することで、そのソースタイプのイベントにのみアクションが表示されます。フィールド制限とソースタイプ制限を組み合わせることも可能です。',
    reference: 'Splunk Docs: Workflow action sourcetype restrictions',
    difficulty: 'medium',
  },
  {
    id: 'wa-022',
    domainId: 'workflow-actions',
    stem: 'ワークフローアクションを使ってユーザーが実行できる典型的なユースケースとして正しいのはどれか？',
    choices: [
      { key: 'A', text: 'イベントの IP アドレスをクリックすると、外部 WHOIS サービスでその IP の情報を検索する', isCorrect: true },
      { key: 'B', text: 'イベントを自動的に別のインデックスに移動する', isCorrect: false },
      { key: 'C', text: 'イベントのフィールドをリアルタイムで編集する', isCorrect: false },
      { key: 'D', text: 'アラートを送信する', isCorrect: false },
    ],
    explanation:
      'ワークフローアクションの典型的な使い方は、イベントのフィールド値（IP アドレス、ユーザー名、URL など）をコンテキストとして外部サービス（WHOIS、VirusTotal、ServiceNow など）に引き渡すことです。GET アクションで外部URLを開いたり、POST アクションでチケットシステムに送信したりできます。',
    reference: 'Splunk Docs: About workflow actions',
    difficulty: 'easy',
  },
  {
    id: 'wa-023',
    domainId: 'workflow-actions',
    stem: 'ワークフローアクションの「Show action in」設定で選択できるメニューはどれか？',
    choices: [
      { key: 'A', text: '「Events（イベントメニュー）」と「Fields（フィールドメニュー）」の2つ', isCorrect: true },
      { key: 'B', text: '「Toolbar」「Context Menu」「Action Bar」の3つ', isCorrect: false },
      { key: 'C', text: '「Header」「Footer」「Body」の3つ', isCorrect: false },
      { key: 'D', text: '「Dashboard」「Report」「Alert」の3つ', isCorrect: false },
    ],
    explanation:
      'ワークフローアクションの「Show action in」では、「Events（イベントの Event Actions ドロップダウン）」と「Fields（フィールドの値のドロップダウン）」のどちらに表示するかを選べます。両方を選択することも可能です。',
    reference: 'Splunk Docs: Workflow action display settings',
    difficulty: 'hard',
  },
  {
    id: 'wa-024',
    domainId: 'workflow-actions',
    stem: '`$_raw$` をワークフローアクションの URL に使うとどうなるか？',
    choices: [
      { key: 'A', text: 'イベントの生ログテキスト（_raw フィールドの値）が URL に埋め込まれる', isCorrect: true },
      { key: 'B', text: '「_raw」という文字列がそのまま URL に含まれる', isCorrect: false },
      { key: 'C', text: 'すべてのフィールドの値が URL に含まれる', isCorrect: false },
      { key: 'D', text: 'エラーになる（内部フィールドは使用不可）', isCorrect: false },
    ],
    explanation:
      'ワークフローアクションのフィールド変数は `$フィールド名$` の形式で、`_raw`、`_time`、`_sourcetype` などの内部フィールドも使用できます。`$_raw$` でイベントの生ログテキスト全体を URL に渡すことが可能です。',
    reference: 'Splunk Docs: Workflow action field variables',
    difficulty: 'medium',
  },
  {
    id: 'wa-025',
    domainId: 'workflow-actions',
    stem: 'GET ワークフローアクションで「Open in new tab」を設定する理由はどれか？',
    choices: [
      { key: 'A', text: '外部サービスのページを現在の Splunk セッションを維持したまま新しいタブで開くため', isCorrect: true },
      { key: 'B', text: 'Splunk の検索結果ページが自動更新されないようにするため', isCorrect: false },
      { key: 'C', text: '外部ページの読み込みを高速化するため', isCorrect: false },
      { key: 'D', text: '複数のイベントを同時に処理するため', isCorrect: false },
    ],
    explanation:
      'GET アクションで外部 URL を開く際に「Open in new tab」を設定すると、Splunk のサーチセッションを中断することなく外部サービスのページを新しいブラウザタブで開けます。現在のサーチ結果を保持しながら調査を続けられるため実用的です。',
    reference: 'Splunk Docs: GET workflow action settings',
    difficulty: 'easy',
  },
]
