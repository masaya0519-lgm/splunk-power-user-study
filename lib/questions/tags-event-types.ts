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
  {
    id: 'tet-009',
    domainId: 'tags-event-types',
    stem: 'イベントタイプ（Event Type）を最も活用すべき場面はどれか？',
    choices: [
      { key: 'A', text: '特定のサーチ文字列を将来のサーチで再利用したいとき', isCorrect: true },
      { key: 'B', text: 'スケジュールを設定してレポートを定期実行したいとき', isCorrect: false },
      { key: 'C', text: 'フィールド値に意味のある名前を付けたいとき', isCorrect: false },
      { key: 'D', text: 'アラートを設定してメール通知を送りたいとき', isCorrect: false },
    ],
    explanation:
      'イベントタイプはサーチ文字列を名前付きで保存する知識オブジェクトです。同じサーチ条件を複数のサーチやダッシュボードで再利用したい場合に最も効果的です。単にスケジュール実行や通知が目的なら「アラート」や「レポート」が適切です。',
    reference: 'Splunk Docs: About event types',
    difficulty: 'medium',
  },
  {
    id: 'tet-010',
    domainId: 'tags-event-types',
    stem: '`tag=Priv*` のようなワイルドカードを使ったタグ検索の結果はどれか？',
    choices: [
      { key: 'A', text: '"Priv" で始まる名前のタグ（例: "Privileged"）が付いたすべてのイベントが返される', isCorrect: true },
      { key: 'B', text: '"Priv*" という名前のタグが付いたイベントのみが返される（ワイルドカードは機能しない）', isCorrect: false },
      { key: 'C', text: '正規表現として解釈され、"Priv" を含むすべてのタグが対象になる', isCorrect: false },
      { key: 'D', text: 'エラーになる（タグ検索にワイルドカードは使えない）', isCorrect: false },
    ],
    explanation:
      'タグ検索では `tag=Priv*` のようにワイルドカード（`*`）が使えます。この例では "Privileged"、"Private" など "Priv" で始まるすべてのタグが付いたイベントが返されます。これにより類似したタグのグループをまとめて検索できます。',
    reference: 'Splunk Docs: Search using tags with wildcards',
    difficulty: 'medium',
  },
  {
    id: 'tet-011',
    domainId: 'tags-event-types',
    stem: 'イベントタイプはどのような目的でデータを分類するか？',
    choices: [
      { key: 'A', text: 'サーチ文字列に一致するイベントをカテゴリ分けするためのフィールドを付与する', isCorrect: true },
      { key: 'B', text: 'イベントを物理的に異なるインデックスに移動する', isCorrect: false },
      { key: 'C', text: 'イベントを時間順に並べ替える', isCorrect: false },
      { key: 'D', text: 'イベントの生データを変換する', isCorrect: false },
    ],
    explanation:
      'イベントタイプはサーチ条件（文字列）でイベントを分類します。定義したイベントタイプにマッチするイベントには `eventtype` フィールドが追加されます。これによってイベントをカテゴリ別に検索・フィルタリングできます。',
    reference: 'Splunk Docs: About event types',
    difficulty: 'easy',
  },
  {
    id: 'tet-012',
    domainId: 'tags-event-types',
    stem: 'イベントタイプと保存済みサーチ（Saved Search）の主な違いはどれか？',
    choices: [
      { key: 'A', text: 'イベントタイプはサーチ文字列を知識オブジェクトとして他のサーチ内で再利用でき、保存済みサーチはスケジュール実行やアラートに使う', isCorrect: true },
      { key: 'B', text: 'イベントタイプは自動的にスケジュール実行され、保存済みサーチは手動実行のみ', isCorrect: false },
      { key: 'C', text: '保存済みサーチはイベントに `eventtype` フィールドを付与し、イベントタイプはレポートを保存する', isCorrect: false },
      { key: 'D', text: '両者は完全に同じ機能を持ち、どちらを使っても結果は同じ', isCorrect: false },
    ],
    explanation:
      'イベントタイプはサーチ文字列を名前付きで保存し、`eventtype=<名前>` や他のサーチの中で参照・再利用できます。一方、保存済みサーチ（Saved Search）はスケジュール実行、アラート通知、レポート生成に使います。将来のサーチで条件を再利用したい場合はイベントタイプが適切です。',
    reference: 'Splunk Docs: Event types vs saved searches',
    difficulty: 'medium',
  },
  {
    id: 'tet-013',
    domainId: 'tags-event-types',
    stem: 'タグはどのような用途に特に役立つか？',
    choices: [
      { key: 'A', text: '異なるソースタイプや異なるフィールド名で表現される関連データをグループ化する', isCorrect: true },
      { key: 'B', text: 'イベントを時系列グラフとして可視化する', isCorrect: false },
      { key: 'C', text: 'フィールドの値を数値から文字列に変換する', isCorrect: false },
      { key: 'D', text: 'インデックスをまたいだ高速検索のためのインデックスを作成する', isCorrect: false },
    ],
    explanation:
      'タグは異なるソースタイプや異なるフィールド名で同じ意味を持つデータをグループ化するのに役立ちます。例えば Cisco ファイアウォールの `action=deny` と Palo Alto の `result=block` の両方に `tag=block` を付けることで、`tag=block` で両方のログを一括検索できます。',
    reference: 'Splunk Docs: Tags and event types',
    difficulty: 'easy',
  },
  {
    id: 'tet-014',
    domainId: 'tags-event-types',
    stem: 'イベントタイプの「保存されるサーチ文字列」について正しい説明はどれか？',
    choices: [
      { key: 'A', text: 'パイプ（|）以降のコマンドは含まれず、基本的な検索条件のみが保存される', isCorrect: true },
      { key: 'B', text: 'stats や chart などのトランスフォームコマンドも含めて保存できる', isCorrect: false },
      { key: 'C', text: 'サーチ文字列全体（パイプ以降も含む）が保存される', isCorrect: false },
      { key: 'D', text: 'イベントタイプには時間範囲も含めて保存される', isCorrect: false },
    ],
    explanation:
      'イベントタイプに保存できるのはイベントを絞り込む基本的な検索条件のみです。`stats`、`chart` などの変換コマンド（パイプ以降）は含めることができません。また時間範囲もイベントタイプには保存されません。',
    reference: 'Splunk Docs: Create event types',
    difficulty: 'hard',
  },
  {
    id: 'tet-015',
    domainId: 'tags-event-types',
    stem: 'タグを使って関連データをグループ化する主なメリットはどれか？',
    choices: [
      { key: 'A', text: '複数のフィールドや値に同じタグを付けることで、異なるソースのデータを統一したキーワードで検索できる', isCorrect: true },
      { key: 'B', text: 'タグを使うとインデックス内のデータが自動整理される', isCorrect: false },
      { key: 'C', text: 'タグを使うとサーチ速度が向上する', isCorrect: false },
      { key: 'D', text: 'タグを使うとフィールドの値が自動的に変換される', isCorrect: false },
    ],
    explanation:
      '同じ概念を表す異なるフィールド値に同じタグを付けることで、`tag=<名前>` の1つのキーワードで複数のソースタイプ・フィールド値を一括検索できます。例: 複数ベンダーの "ログイン失敗" イベントに `tag=failed_authentication` を付けると横断検索が簡単になります。',
    reference: 'Splunk Docs: About tags',
    difficulty: 'easy',
  },
  {
    id: 'tet-016',
    domainId: 'tags-event-types',
    stem: 'イベントタイプを作成する方法として正しいのはどれか？',
    choices: [
      { key: 'A', text: 'サーチを実行した後、「Save As」メニューから「Event Type」を選択して保存する', isCorrect: true },
      { key: 'B', text: 'Settings > Knowledge > Event Types から空のフォームに直接入力して作成する', isCorrect: false },
      { key: 'C', text: 'サーチバーでイベントを右クリックして「Create Event Type」を選択する', isCorrect: false },
      { key: 'D', text: 'ダッシュボードのウィジェットをイベントタイプとして保存する', isCorrect: false },
    ],
    explanation:
      'イベントタイプを作成するには、サーチを実行した後、サーチバーの上部「Save As」ドロップダウンから「Event Type」を選択します。または Settings > Event Types から新規作成フォームを使うこともできます。サーチ結果を確認しながら作成できる前者がより実用的です。',
    reference: 'Splunk Docs: Create event types',
    difficulty: 'easy',
  },
  {
    id: 'tet-017',
    domainId: 'tags-event-types',
    stem: 'イベントタイプに設定できる「Priority（優先度）」の範囲と用途として正しいのはどれか？',
    choices: [
      { key: 'A', text: '1～10の整数で、数値が小さいほど優先度が高く、複数イベントタイプが同じイベントにマッチした際の順序を決める', isCorrect: true },
      { key: 'B', text: '1～100の整数で、数値が大きいほど優先度が高い', isCorrect: false },
      { key: 'C', text: '「Low」「Medium」「High」の3段階のみ', isCorrect: false },
      { key: 'D', text: '優先度はイベントタイプの検索速度に影響する', isCorrect: false },
    ],
    explanation:
      'イベントタイプの優先度（Priority）は1〜10の整数で設定します。数値が小さいほど優先度が高くなります。同じイベントに複数のイベントタイプがマッチした場合、優先度の高い（数値が小さい）イベントタイプが `eventtype` フィールドの先頭に表示されます。',
    reference: 'Splunk Docs: Event type settings',
    difficulty: 'medium',
  },
  {
    id: 'tet-018',
    domainId: 'tags-event-types',
    stem: 'イベントタイプに「Color」を設定する目的はどれか？',
    choices: [
      { key: 'A', text: 'サーチ結果の「Events」タブでそのイベントタイプに属するイベントを色で視覚的に区別する', isCorrect: true },
      { key: 'B', text: 'ダッシュボードのパネルの背景色を変える', isCorrect: false },
      { key: 'C', text: 'タグの色と同期させるために設定する', isCorrect: false },
      { key: 'D', text: 'チャートの系列色を指定する', isCorrect: false },
    ],
    explanation:
      'イベントタイプにカラーを設定すると、サーチ結果の Events タブでそのイベントタイプに分類されたイベントが指定した色でハイライト表示されます。複数のイベントタイプに異なる色を設定することで、イベントの分類を一目で把握できます。',
    reference: 'Splunk Docs: Event type settings - color',
    difficulty: 'easy',
  },
  {
    id: 'tet-019',
    domainId: 'tags-event-types',
    stem: '`tag::host=webserver` という構文の説明として正しいのはどれか？',
    choices: [
      { key: 'A', text: '`host` フィールドの値に "webserver" というタグが付いているイベントを検索する', isCorrect: true },
      { key: 'B', text: '`host` フィールドの値が "webserver" のイベントを検索する', isCorrect: false },
      { key: 'C', text: '"webserver" という名前のイベントタイプを検索する', isCorrect: false },
      { key: 'D', text: '`host=webserver` と同じ意味で、タグ指定の別構文', isCorrect: false },
    ],
    explanation:
      '`tag::<フィールド名>=<タグ名>` の形式は特定フィールドのタグを検索します。`tag::host=webserver` は `host` フィールドの値に "webserver" タグが付いているイベントを返します。`tag=webserver` は全フィールドで "webserver" タグを持つイベントを返すのとは異なります。',
    reference: 'Splunk Docs: Search using tags',
    difficulty: 'hard',
  },
  {
    id: 'tet-020',
    domainId: 'tags-event-types',
    stem: 'タグが自動的に追加する特別なフィールドはどれか？',
    choices: [
      { key: 'A', text: '`tag` フィールドにタグ名が追加される', isCorrect: true },
      { key: 'B', text: '`label` フィールドにタグ名が追加される', isCorrect: false },
      { key: 'C', text: '`_tag` フィールドにタグ名が追加される', isCorrect: false },
      { key: 'D', text: 'タグは検索の絞り込みにしか使えず、フィールドは追加されない', isCorrect: false },
    ],
    explanation:
      'イベントにタグが付いている場合、`tag` という名前のフィールドにタグ名の値が追加されます。イベントに複数のタグが付いている場合、`tag` フィールドはマルチバリューフィールドになります。`| stats values(tag) by host` のようにタグを集計に使うこともできます。',
    reference: 'Splunk Docs: About tags',
    difficulty: 'medium',
  },
  {
    id: 'tet-021',
    domainId: 'tags-event-types',
    stem: 'イベントタイプが検索結果のどのフィールドに格納されるか？',
    choices: [
      { key: 'A', text: '`eventtype` フィールドにイベントタイプ名が格納される', isCorrect: true },
      { key: 'B', text: '`event_type` フィールドに格納される', isCorrect: false },
      { key: 'C', text: '`type` フィールドに格納される', isCorrect: false },
      { key: 'D', text: 'イベントタイプはフィールドとして追加されない', isCorrect: false },
    ],
    explanation:
      'イベントタイプにマッチしたイベントには `eventtype` フィールドが追加され、そのイベントタイプ名が格納されます。1つのイベントが複数のイベントタイプにマッチする場合、`eventtype` はマルチバリューフィールドになります。`| stats count by eventtype` のような集計が可能です。',
    reference: 'Splunk Docs: About event types',
    difficulty: 'medium',
  },
  {
    id: 'tet-022',
    domainId: 'tags-event-types',
    stem: 'タグを無効化（disable）する方法として正しいのはどれか？',
    choices: [
      { key: 'A', text: 'Settings > Tags から対象タグを選び「Enabled」のチェックを外す（または「Disable」をクリック）', isCorrect: true },
      { key: 'B', text: 'タグを削除するしかなく、無効化はできない', isCorrect: false },
      { key: 'C', text: 'サーチで `tag!=<タグ名>` を指定して除外する', isCorrect: false },
      { key: 'D', text: 'タグを無効化するには管理者が `tags.conf` を直接編集する必要がある', isCorrect: false },
    ],
    explanation:
      'タグは Settings > Tags の一覧画面から個別に無効化（disable）できます。無効化したタグはサーチでは機能しなくなりますが、設定は保持されます。後から再度有効化することもできます。削除せずに一時的に止めたい場合に便利です。',
    reference: 'Splunk Docs: Manage tags',
    difficulty: 'medium',
  },
  {
    id: 'tet-023',
    domainId: 'tags-event-types',
    stem: 'イベントタイプとタグを組み合わせる主な使い方として正しいのはどれか？',
    choices: [
      { key: 'A', text: 'イベントタイプで複雑な条件のイベントを分類し、そのイベントタイプにタグを付けることで CIM のデータモデルと連携させる', isCorrect: true },
      { key: 'B', text: 'タグはイベントタイプの別名として使われる', isCorrect: false },
      { key: 'C', text: 'イベントタイプにタグを付けることはできない', isCorrect: false },
      { key: 'D', text: 'タグをイベントタイプに付けると、そのタグでのサーチ速度が向上する', isCorrect: false },
    ],
    explanation:
      'CIM では特定のイベントタイプにタグを付けることでデータモデルと連携します。例: `eventtype=splunk_authentication_failed` というイベントタイプに `tag=authentication` と `tag=failure` を付けると、CIM の Authentication データモデルがそのイベントを認識します。これがTA（Technology Add-On）の典型的な実装パターンです。',
    reference: 'Splunk Docs: Event types and CIM',
    difficulty: 'hard',
  },
  {
    id: 'tet-024',
    domainId: 'tags-event-types',
    stem: 'タグを作成する場所として正しいのはどれか？',
    choices: [
      { key: 'A', text: 'サーチ結果でフィールド値の横の「i」ボタンまたは「Edit Tags」から作成する', isCorrect: true },
      { key: 'B', text: 'Settings > Knowledge > Event Types から作成する', isCorrect: false },
      { key: 'C', text: 'ダッシュボードの「Add Panel」から作成する', isCorrect: false },
      { key: 'D', text: 'サーチバーにタグコマンドを入力して作成する', isCorrect: false },
    ],
    explanation:
      'タグはサーチ結果でフィールドの値をクリックしたときに表示されるポップアップの「Edit Tags」から作成します。またはサーチ結果のフィールドパネル（Fields Sidebar）から特定フィールドの値を展開して「Tag this value」を選択することもできます。Settings > Tags でも管理できます。',
    reference: 'Splunk Docs: Tag field values',
    difficulty: 'easy',
  },
  {
    id: 'tet-025',
    domainId: 'tags-event-types',
    stem: 'イベントタイプの「search string」（サーチ文字列）に含めることができないものはどれか？',
    choices: [
      { key: 'A', text: '`| stats count by host` のようなパイプ以降のコマンド', isCorrect: true },
      { key: 'B', text: '`status=404` のようなフィールド=値の条件', isCorrect: false },
      { key: 'C', text: '`error OR warning` のようなブール演算子', isCorrect: false },
      { key: 'D', text: '`index=web sourcetype=access_log` のような検索条件', isCorrect: false },
    ],
    explanation:
      'イベントタイプのサーチ文字列には、イベントを絞り込む基本的な検索条件（フィールド=値、キーワード、ブール演算子など）を含めることができます。ただし `|`（パイプ）以降の変換コマンド（`stats`、`chart`、`table` など）は含めることができません。時間範囲も保存されません。',
    reference: 'Splunk Docs: Create event types',
    difficulty: 'medium',
  },
]
