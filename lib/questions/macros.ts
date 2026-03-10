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
]
