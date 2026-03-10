import { Question } from '../types'

export const macrosQuestions: Question[] = [
  {
    id: 'mc-001',
    domainId: 'macros',
    stem: 'Splunk マクロの説明として最も正しいのはどれか？',
    choices: [
      { key: 'A', text: 'サーチ文字列の断片を再利用可能なテンプレートとして保存し、バックティックで呼び出せる知識オブジェクト', isCorrect: true },
      { key: 'B', text: 'スケジュール実行されるサーチを保存する機能', isCorrect: false },
      { key: 'C', text: 'ダッシュボードのウィジェットを再利用するための機能', isCorrect: false },
      { key: 'D', text: 'Python スクリプトを Splunk から実行する機能', isCorrect: false },
    ],
    explanation:
      'マクロは SPL の一部（コマンド、フィルタ条件など）を名前を付けて保存する知識オブジェクトです。サーチでバックティック（`` ` ``）で囲んで呼び出します。引数を定義して動的な値を渡すこともできます。',
    reference: 'Splunk Docs: Define and use search macros',
    difficulty: 'easy',
  },
  {
    id: 'mc-002',
    domainId: 'macros',
    stem: '引数なしのマクロ `base_filter` を呼び出す正しい構文はどれか？',
    choices: [
      { key: 'A', text: '`base_filter`', isCorrect: true },
      { key: 'B', text: '$base_filter$', isCorrect: false },
      { key: 'C', text: '@base_filter', isCorrect: false },
      { key: 'D', text: '[base_filter]', isCorrect: false },
    ],
    explanation:
      'マクロはバックティック（`` ` ``）2つで囲んで呼び出します。例: `` `base_filter` ``。これがサーチ実行時にマクロの定義内容に展開されます。Splunk Web の「Search」バーでもバックティック入力が認識されます。',
    reference: 'Splunk Docs: Use search macros',
    difficulty: 'easy',
  },
  {
    id: 'mc-003',
    domainId: 'macros',
    stem: '引数を1つ持つマクロ `get_errors(1)` を作成する際、Settings で名前をどのように入力するか？',
    choices: [
      { key: 'A', text: 'get_errors(1)', isCorrect: true },
      { key: 'B', text: 'get_errors', isCorrect: false },
      { key: 'C', text: 'get_errors[1]', isCorrect: false },
      { key: 'D', text: 'get_errors{1}', isCorrect: false },
    ],
    explanation:
      '引数を持つマクロは名前に引数の数を括弧で付けて定義します。例: `get_errors(1)` は1引数のマクロです。定義内では引数を `$arg1$` のように参照します（引数名は設定時に定義）。',
    reference: 'Splunk Docs: Create search macros with arguments',
    difficulty: 'easy',
  },
  {
    id: 'mc-004',
    domainId: 'macros',
    stem: '引数2つのマクロ `filter_by(2)` で引数名を `index_name` と `sourcetype_name` と定義した場合、マクロ定義内での参照方法はどれか？',
    choices: [
      { key: 'A', text: '`$index_name$` と `$sourcetype_name$`', isCorrect: true },
      { key: 'B', text: '`{index_name}` と `{sourcetype_name}`', isCorrect: false },
      { key: 'C', text: '`$1$` と `$2$`', isCorrect: false },
      { key: 'D', text: '`@index_name` と `@sourcetype_name`', isCorrect: false },
    ],
    explanation:
      'マクロ定義内で引数を参照するには `$引数名$` の形式を使います（ドルサイン2つで囲む）。呼び出し時は `` `filter_by(web, access_combined)` `` のように引数値をカンマ区切りで渡します。',
    reference: 'Splunk Docs: Define arguments for a search macro',
    difficulty: 'medium',
  },
  {
    id: 'mc-005',
    domainId: 'macros',
    stem: '引数2つのマクロ `filter_by` を呼び出す正しい構文はどれか？（引数: "web", "access_combined"）',
    choices: [
      { key: 'A', text: '`filter_by(web, access_combined)`', isCorrect: true },
      { key: 'B', text: '`filter_by`("web", "access_combined")', isCorrect: false },
      { key: 'C', text: '`filter_by`(web)(access_combined)', isCorrect: false },
      { key: 'D', text: '$filter_by(web, access_combined)$', isCorrect: false },
    ],
    explanation:
      '引数付きマクロの呼び出しは `` `マクロ名(引数1, 引数2)` `` の形式です。引数値はカンマ区切りで渡します。文字列の引数でも引用符は不要です（マクロ定義側で処理します）。',
    reference: 'Splunk Docs: Use a search macro with arguments',
    difficulty: 'medium',
  },
  {
    id: 'mc-006',
    domainId: 'macros',
    stem: 'マクロの展開を確認するための Splunk のツールはどれか？',
    choices: [
      { key: 'A', text: 'Job Inspector（サーチジョブインスペクター）', isCorrect: true },
      { key: 'B', text: 'Field Extractor', isCorrect: false },
      { key: 'C', text: 'Settings > Macros', isCorrect: false },
      { key: 'D', text: 'Splunk Web の Developer Tools', isCorrect: false },
    ],
    explanation:
      'Job Inspector（サーチ後に「Job > Inspect Job」から開く）を使うと、マクロが展開された後の実際のサーチ文字列（Search Log の "search command"）を確認できます。デバッグに役立ちます。',
    reference: 'Splunk Docs: Use the search job inspector',
    difficulty: 'medium',
  },
  {
    id: 'mc-007',
    domainId: 'macros',
    stem: 'マクロに設定できる「Validation Expression」の説明として正しいのはどれか？',
    choices: [
      { key: 'A', text: '引数の値が正しい形式かを検証する eval 式で、条件を満たさない場合はエラーメッセージを表示する', isCorrect: true },
      { key: 'B', text: 'マクロの実行権限を検証するセキュリティ設定', isCorrect: false },
      { key: 'C', text: 'マクロの定義が正しい SPL かどうかを検証する', isCorrect: false },
      { key: 'D', text: 'マクロの実行結果が正しいかを検証するテスト機能', isCorrect: false },
    ],
    explanation:
      'Validation Expression は引数バリデーション用の eval 式です。例: `isint($port_num$)` のように入力値が整数かどうかをチェックし、偽の場合は「Validation Error Message」に設定したエラーメッセージが表示されます。',
    reference: 'Splunk Docs: Validate macro arguments',
    difficulty: 'hard',
  },
  {
    id: 'mc-008',
    domainId: 'macros',
    stem: 'マクロはどのアプリのコンテキストで動作するか？',
    choices: [
      { key: 'A', text: 'マクロが定義されているアプリ（共有設定に応じて他アプリからも利用可能）', isCorrect: true },
      { key: 'B', text: '常にグローバルコンテキストで動作する', isCorrect: false },
      { key: 'C', text: '作成したユーザーのプライベートコンテキストのみ', isCorrect: false },
      { key: 'D', text: '呼び出したサーチのインデックスコンテキストで動作する', isCorrect: false },
    ],
    explanation:
      'マクロはアプリ内で作成されますが、「Permissions」で「All apps（Global）」に設定すると他のアプリからも呼び出せます。「This app only」にすると定義したアプリ内のみで使用可能です。',
    reference: 'Splunk Docs: Manage knowledge object permissions',
    difficulty: 'medium',
  },
  {
    id: 'mc-009',
    domainId: 'macros',
    stem: 'マクロを使う主なメリットはどれか（2つ選べ）？ ※この問題は複数の正解の観点から1つを選択してください',
    choices: [
      { key: 'A', text: '複雑なサーチ条件を1か所で管理でき、変更時にすべての呼び出し箇所に自動反映される', isCorrect: true },
      { key: 'B', text: 'マクロを使うとサーチの実行速度が向上する', isCorrect: false },
      { key: 'C', text: 'マクロはインデックス時に実行されるため高速化できる', isCorrect: false },
      { key: 'D', text: 'マクロを使うと外部データベースへのアクセスが可能になる', isCorrect: false },
    ],
    explanation:
      'マクロの最大のメリットは「再利用性」と「保守性」です。よく使うフィルタ条件や計算式を1か所に集約でき、修正が必要な場合はマクロを更新するだけで、そのマクロを使用しているすべてのサーチに変更が反映されます。速度向上には直接貢献しません。',
    reference: 'Splunk Docs: About search macros',
    difficulty: 'medium',
  },
  {
    id: 'mc-010',
    domainId: 'macros',
    stem: 'マクロを呼び出すために使用する記号はどれか？',
    choices: [
      { key: 'A', text: 'バックティック（`` ` ``）でマクロ名を前後から囲む', isCorrect: true },
      { key: 'B', text: 'シングルクォート（\'\'）でマクロ名を囲む', isCorrect: false },
      { key: 'C', text: 'ドル記号（$$）でマクロ名を囲む', isCorrect: false },
      { key: 'D', text: 'アット記号（@）をマクロ名の前に付ける', isCorrect: false },
    ],
    explanation:
      'マクロはバックティック（`` ` ``）2つで囲んで呼び出します。例: `` `my_macro` `` や `` `convert_sales(euro,€,.79)` ``（引数付きの場合）。バックティックはキーボードの Esc キーの下または左上にある記号（`）です。シングルクォートや他の記号では機能しません。',
    reference: 'Splunk Docs: Use search macros',
    difficulty: 'easy',
  },
  {
    id: 'mc-011',
    domainId: 'macros',
    stem: '引数が3つのマクロを定義するとき、Settings での正しいマクロ名の形式はどれか？',
    choices: [
      { key: 'A', text: 'monthly_sales(3)', isCorrect: true },
      { key: 'B', text: 'monthly_sales[3]', isCorrect: false },
      { key: 'C', text: 'monthly_sales{3}', isCorrect: false },
      { key: 'D', text: 'monthly_sales/3', isCorrect: false },
    ],
    explanation:
      '引数を持つマクロの名前は `マクロ名(引数の数)` の形式です。引数が3つなら `monthly_sales(3)` と設定します。括弧（()）とその中の引数の数がマクロ定義の一部です。角括弧（[]）や波括弧（{}）は使いません。',
    reference: 'Splunk Docs: Create search macros with arguments',
    difficulty: 'easy',
  },
  {
    id: 'mc-012',
    domainId: 'macros',
    stem: 'マクロ内で引数変数を参照するための正しい構文はどれか？',
    choices: [
      { key: 'A', text: '`$variable_name$`（ドルサイン2つで変数名を囲む）', isCorrect: true },
      { key: 'B', text: '`{variable_name}`（波括弧で変数名を囲む）', isCorrect: false },
      { key: 'C', text: '`%variable_name%`（パーセント記号で変数名を囲む）', isCorrect: false },
      { key: 'D', text: '`@variable_name`（アット記号をプレフィックスに）', isCorrect: false },
    ],
    explanation:
      'マクロの定義内で引数を参照するには `$変数名$`（ドルサイン2つで囲む）の構文を使います。例: マクロ定義が `index=$idx$ sourcetype=$stype$` の場合、呼び出し時に渡した引数値で `$idx$` と `$stype$` が置換されます。',
    reference: 'Splunk Docs: Define arguments for a search macro',
    difficulty: 'medium',
  },
  {
    id: 'mc-013',
    domainId: 'macros',
    stem: 'サーチに `example(100,200)` が含まれているとき、呼び出されているマクロの名前はどれか？',
    choices: [
      { key: 'A', text: 'example(2)', isCorrect: true },
      { key: 'B', text: 'example(100,200)', isCorrect: false },
      { key: 'C', text: 'example', isCorrect: false },
      { key: 'D', text: 'example(1)', isCorrect: false },
    ],
    explanation:
      'マクロ名は `マクロベース名(引数の数)` で定義されます。`example(100,200)` はカンマ区切りで2つの引数（100と200）を渡しているため、呼び出されるマクロ名は `example(2)` です。実際の引数値（100、200）はマクロ名の一部ではなく、呼び出し時のパラメータです。',
    reference: 'Splunk Docs: Use a search macro with arguments',
    difficulty: 'hard',
  },
  {
    id: 'mc-014',
    domainId: 'macros',
    stem: 'マクロの後にパイプ（|）を続けることはできるか？',
    choices: [
      { key: 'A', text: 'できる。マクロの後には常にパイプを続けることができる', isCorrect: true },
      { key: 'B', text: 'できない。マクロはサーチの最後にしか使えない', isCorrect: false },
      { key: 'C', text: 'できない。マクロ自体がパイプを含んでいる場合のみ後続コマンドを実行できる', isCorrect: false },
      { key: 'D', text: 'マクロがコマンドを返す場合のみパイプを続けられる', isCorrect: false },
    ],
    explanation:
      'マクロの呼び出しの後には常にパイプ（|）を続けることができます。例: `` `base_filter` | stats count by host `` や `` `get_errors(400)` | timechart count by host `` のように、マクロの展開後の結果を次のコマンドに渡せます。',
    reference: 'Splunk Docs: About search macros',
    difficulty: 'medium',
  },
  {
    id: 'mc-015',
    domainId: 'macros',
    stem: 'マクロは固定された時間範囲を必要とするか？',
    choices: [
      { key: 'A', text: '必要ない。マクロはフレキシブルな時間範囲で使用でき、呼び出し側のサーチの時間範囲が適用される', isCorrect: true },
      { key: 'B', text: '必要がある。マクロには必ず時間範囲を定義しなければならない', isCorrect: false },
      { key: 'C', text: 'マクロはリアルタイムサーチ専用で時間範囲は指定できない', isCorrect: false },
      { key: 'D', text: 'マクロに時間範囲を定義した場合、呼び出し側の時間範囲は無視される', isCorrect: false },
    ],
    explanation:
      'マクロは時間範囲を持つ必要はありません。マクロが組み込まれたサーチを実行するときに設定した時間範囲（Time Range Picker）が適用されます。これによって同じマクロを異なる時間範囲で再利用できます。',
    reference: 'Splunk Docs: About search macros',
    difficulty: 'medium',
  },
  {
    id: 'mc-016',
    domainId: 'macros',
    stem: 'ネストされたマクロ（マクロの中でさらに別のマクロを呼ぶ）で、内部マクロに引数を渡す方法はどれか？',
    choices: [
      { key: 'A', text: '外部マクロの定義内でバックティックと括弧を使って内部マクロを呼び出す（例: `` `inner_macro($arg$)` ``）', isCorrect: true },
      { key: 'B', text: 'ネストされたマクロには引数を渡すことができない', isCorrect: false },
      { key: 'C', text: '外部マクロの引数が自動的に内部マクロに継承される', isCorrect: false },
      { key: 'D', text: 'マクロのネストは Splunk でサポートされていない', isCorrect: false },
    ],
    explanation:
      'マクロの定義内で他のマクロを呼び出すことができます（ネスト）。内部マクロに引数を渡すには、外部マクロの定義内でバックティックを使って内部マクロを呼び出す際に括弧内に引数を渡します。例: 外部マクロが `$value$` 引数を持つ場合、内部マクロへは `` `inner_macro($value$)` `` のように渡します。',
    reference: 'Splunk Docs: Nested macros',
    difficulty: 'hard',
  },
  {
    id: 'mc-017',
    domainId: 'macros',
    stem: 'Splunk マクロの定義（Settings）で設定できる項目として含まれないのはどれか？',
    choices: [
      { key: 'A', text: 'スケジュール実行の時間設定', isCorrect: true },
      { key: 'B', text: 'マクロ定義（サーチ文字列）', isCorrect: false },
      { key: 'C', text: '引数の名前と検証式（Validation Expression）', isCorrect: false },
      { key: 'D', text: 'マクロの説明（Description）', isCorrect: false },
    ],
    explanation:
      'マクロの Settings 画面で設定できるのは「マクロ定義（Definition）」「引数名」「検証式（Validation Expression）」「エラーメッセージ」「説明」「権限」などです。スケジュール実行の時間設定はマクロにはなく、保存済みサーチ（Saved Search）の機能です。',
    reference: 'Splunk Docs: Define and use search macros',
    difficulty: 'medium',
  },
  {
    id: 'mc-018',
    domainId: 'macros',
    stem: 'マクロの引数の検証式（Validation Expression）の目的はどれか？',
    choices: [
      { key: 'A', text: '渡された引数の値が期待する形式・条件を満たしているか確認し、問題があればカスタムエラーメッセージを表示する', isCorrect: true },
      { key: 'B', text: '引数の値をマクロ定義内で変換する', isCorrect: false },
      { key: 'C', text: '引数のデフォルト値を設定する', isCorrect: false },
      { key: 'D', text: '引数の入力補完（オートコンプリート）候補を定義する', isCorrect: false },
    ],
    explanation:
      '検証式（Validation Expression）は `eval` 式で記述します。引数の値が条件を満たさない場合（式が false を返した場合）、設定したエラーメッセージが表示されサーチが実行されません。例: 数値のみを受け付けたい場合 `isnum($threshold$)` を検証式に設定します。',
    reference: 'Splunk Docs: Validate macro arguments',
    difficulty: 'hard',
  },
  {
    id: 'mc-019',
    domainId: 'macros',
    stem: '2つの引数を持つマクロ `calculate_rate(2)` の定義で、引数を参照する正しい構文はどれか？',
    choices: [
      { key: 'A', text: '`$arg1$` と `$arg2$`（または定義時に指定した引数名を `$` で囲む）', isCorrect: true },
      { key: 'B', text: '`{arg1}` と `{arg2}`', isCorrect: false },
      { key: 'C', text: '`%1` と `%2`', isCorrect: false },
      { key: 'D', text: '`@arg1` と `@arg2`', isCorrect: false },
    ],
    explanation:
      'マクロ定義内で引数を参照するには引数名を `$` で囲みます。引数名は Settings でマクロを作成する際に「Arguments」フィールドに設定します。例: 引数名を `threshold` と定義した場合、マクロ定義内では `$threshold$` として参照します。',
    reference: 'Splunk Docs: Use arguments in macros',
    difficulty: 'medium',
  },
  {
    id: 'mc-020',
    domainId: 'macros',
    stem: 'マクロ内でさらに別のマクロを呼び出すことはできるか？',
    choices: [
      { key: 'A', text: 'できる。マクロ定義内でバックティックを使って別のマクロを呼び出せる（ネスト）', isCorrect: true },
      { key: 'B', text: 'できない。マクロはネストできない', isCorrect: false },
      { key: 'C', text: 'できるが、引数なしのマクロのみネスト可能', isCorrect: false },
      { key: 'D', text: 'できるが、最大2レベルまでに制限される', isCorrect: false },
    ],
    explanation:
      'マクロ定義の中で他のマクロをバックティックで囲んで呼び出すことができます（ネストされたマクロ）。例えばマクロ `top_errors` の定義内で `` `base_filter` `` を呼び出すことができます。ただし無限再帰は避ける必要があります。',
    reference: 'Splunk Docs: Search macros',
    difficulty: 'hard',
  },
  {
    id: 'mc-021',
    domainId: 'macros',
    stem: 'マクロを展開してサーチ文字列がどのように解釈されるか確認するためのコマンドはどれか？',
    choices: [
      { key: 'A', text: '`| macro expand` または Splunk Web の「Job Inspector」でマクロ展開結果を確認できる', isCorrect: false },
      { key: 'B', text: 'CTL+SHIFT+E（Expand Macros）ショートカットでサーチバーで展開確認できる', isCorrect: false },
      { key: 'C', text: 'サーチバーで `| noop` を付けてマクロを展開表示する', isCorrect: false },
      { key: 'D', text: 'Splunk Web のサーチバー上部「Expand Macros」ボタンまたは Job Inspector の「Search job properties」でマクロ展開後のサーチ文字列を確認できる', isCorrect: true },
    ],
    explanation:
      'マクロがどのように展開されるかを確認するには、サーチバー上部の「≡」メニューから「Expand Macros」を選択するか、サーチ実行後に「Job Inspector（検索ジョブインスペクタ）」の「Search job properties」でマクロ展開後のサーチ文字列（`normalized_search`）を確認できます。',
    reference: 'Splunk Docs: Examine macros',
    difficulty: 'medium',
  },
  {
    id: 'mc-022',
    domainId: 'macros',
    stem: 'マクロを Settings から作成する場合の正しいメニューパスはどれか？',
    choices: [
      { key: 'A', text: 'Settings > Advanced Search > Search Macros', isCorrect: true },
      { key: 'B', text: 'Settings > Knowledge > Macros', isCorrect: false },
      { key: 'C', text: 'Settings > Fields > Macros', isCorrect: false },
      { key: 'D', text: 'Settings > Data > Search Macros', isCorrect: false },
    ],
    explanation:
      'マクロは Settings > Advanced Search > Search Macros から作成・管理します。新規作成時は「New Macro」ボタンをクリックし、アプリコンテキスト、名前（引数ありの場合は `name(N)` 形式）、定義（Definition）などを入力します。',
    reference: 'Splunk Docs: Define search macros',
    difficulty: 'easy',
  },
  {
    id: 'mc-023',
    domainId: 'macros',
    stem: '引数付きマクロを呼び出す際、引数が期待するものと異なる型の値を渡した場合、デフォルトでどうなるか？',
    choices: [
      { key: 'A', text: '検証式（Validation Expression）を設定していない場合は検証なしにそのまま実行される', isCorrect: true },
      { key: 'B', text: '自動的に型変換されて実行される', isCorrect: false },
      { key: 'C', text: 'エラーメッセージが表示されサーチが停止する', isCorrect: false },
      { key: 'D', text: 'デフォルト値（空文字列）に置き換えられる', isCorrect: false },
    ],
    explanation:
      'マクロは基本的にテキスト置換で動作します。検証式（Validation Expression）を設定していない場合、引数に何が渡されても SPL に展開されてそのまま実行されます。型チェックは行われません。適切な検証を行うには Validation Expression に `isnum($arg$)` などの条件を明示的に設定する必要があります。',
    reference: 'Splunk Docs: Search macros',
    difficulty: 'hard',
  },
  {
    id: 'mc-024',
    domainId: 'macros',
    stem: 'マクロのパーミッション（権限）について正しいのはどれか？',
    choices: [
      { key: 'A', text: 'デフォルトは作成者のみが使用できるプライベートで、アプリ全体またはシステム全体に共有できる', isCorrect: true },
      { key: 'B', text: 'マクロは常にシステム全体で共有される', isCorrect: false },
      { key: 'C', text: 'マクロの共有には管理者権限が常に必要', isCorrect: false },
      { key: 'D', text: 'マクロはプライベートのみで共有設定はできない', isCorrect: false },
    ],
    explanation:
      'マクロはデフォルトでプライベート（作成者のみ）として保存されます。Settings > Advanced Search > Search Macros の一覧から「Permissions」を変更することで、アプリのすべてのユーザーやシステム全体に共有できます。共有されたマクロは他のユーザーもサーチで使用できます。',
    reference: 'Splunk Docs: Manage macro permissions',
    difficulty: 'medium',
  },
  {
    id: 'mc-025',
    domainId: 'macros',
    stem: '次のサーチ `index=web | \`calculate_kb(bytes)\`` において、マクロ `calculate_kb(1)` の定義が `eval kb=round($value$/1024,2)` だった場合、展開後はどのようになるか？',
    choices: [
      { key: 'A', text: '`index=web | eval kb=round(bytes/1024,2)`', isCorrect: true },
      { key: 'B', text: '`index=web | eval kb=round(calculate_kb/1024,2)`', isCorrect: false },
      { key: 'C', text: '`index=web | calculate_kb(bytes) | eval kb=round(bytes/1024,2)`', isCorrect: false },
      { key: 'D', text: 'マクロ名と引数名が異なるためエラーになる', isCorrect: false },
    ],
    explanation:
      'マクロはテキスト置換で動作します。`` `calculate_kb(bytes)` `` は `calculate_kb(1)` マクロの `$value$` 引数に "bytes" が渡され、定義の `$value$` がすべて "bytes" に置換されます。結果として `eval kb=round(bytes/1024,2)` が展開されます。',
    reference: 'Splunk Docs: Use search macros with arguments',
    difficulty: 'hard',
  },
]
