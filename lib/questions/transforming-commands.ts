import { Question } from '../types'

export const transformingCommandsQuestions: Question[] = [
  {
    id: 'tc-001',
    domainId: 'transforming-commands',
    stem: '`chart` コマンドで X 軸を `status`、Y 軸を `count` にする正しい構文はどれか？',
    choices: [
      { key: 'A', text: '| chart count over status', isCorrect: true },
      { key: 'B', text: '| chart status by count', isCorrect: false },
      { key: 'C', text: '| chart count by status', isCorrect: false },
      { key: 'D', text: '| chart status count', isCorrect: false },
    ],
    explanation:
      '`chart` コマンドでは `chart <集計関数> over <X軸フィールド>` または `chart <集計関数> by <分割フィールド>` の構文を使います。X 軸を指定するには `over` キーワードを使います。`chart count over status` で status ごとのカウントを折れ線・棒グラフで表示できます。',
    reference: 'Splunk Docs: chart command',
    difficulty: 'medium',
  },
  {
    id: 'tc-002',
    domainId: 'transforming-commands',
    stem: '`timechart` コマンドで host ごとのリクエスト数を1時間単位で集計する正しい構文はどれか？',
    choices: [
      { key: 'A', text: '| timechart span=1h count by host', isCorrect: true },
      { key: 'B', text: '| timechart count over host span=1h', isCorrect: false },
      { key: 'C', text: '| timechart 1h count by host', isCorrect: false },
      { key: 'D', text: '| timechart count host span=1h', isCorrect: false },
    ],
    explanation:
      '`timechart` の構文は `timechart [span=<間隔>] <集計関数> [by <フィールド>]` です。`span` で時間の粒度を指定し、`by` で分割フィールドを指定します。',
    reference: 'Splunk Docs: timechart command',
    difficulty: 'easy',
  },
  {
    id: 'tc-003',
    domainId: 'transforming-commands',
    stem: '`chart` コマンドで `by` に2つのフィールドを指定したとき（例: `| chart count by status, host`）、どのような結果になるか？',
    choices: [
      { key: 'A', text: 'status が X 軸、host が列（系列）になる2次元テーブルが生成される', isCorrect: true },
      { key: 'B', text: 'status と host を連結した文字列が X 軸になる', isCorrect: false },
      { key: 'C', text: 'エラーが発生し実行できない', isCorrect: false },
      { key: 'D', text: 'status のみで集計され host は無視される', isCorrect: false },
    ],
    explanation:
      '`chart count by status, host` では、status が X 軸の行、host が列（series）になるピボットテーブル形式の結果が得られます。各セルに count 値が入ります。',
    reference: 'Splunk Docs: chart command - split-by clause',
    difficulty: 'medium',
  },
  {
    id: 'tc-004',
    domainId: 'transforming-commands',
    stem: '`timechart` コマンドに `limit=5` オプションを付けると何が変わるか？',
    choices: [
      { key: 'A', text: '結果の行数を5行に制限する', isCorrect: false },
      { key: 'B', text: '上位5系列を表示し、残りを "OTHER" にまとめる', isCorrect: true },
      { key: 'C', text: '時間範囲を5時間に制限する', isCorrect: false },
      { key: 'D', text: '各時間バケットの最大イベント数を5に制限する', isCorrect: false },
    ],
    explanation:
      '`timechart limit=5 count by host` のように `limit` を指定すると、上位5系列のみ個別に表示し、残りの系列は "OTHER" にまとめられます。デフォルトの limit は 10 です。',
    reference: 'Splunk Docs: timechart command options',
    difficulty: 'medium',
  },
  {
    id: 'tc-005',
    domainId: 'transforming-commands',
    stem: '`chart` と `timechart` の本質的な違いはどれか？',
    choices: [
      { key: 'A', text: '`timechart` は X 軸が常に `_time`（時間）で自動的に時間バケット化される', isCorrect: true },
      { key: 'B', text: '`chart` はビジュアライゼーションを生成できるが `timechart` はテーブルのみ', isCorrect: false },
      { key: 'C', text: '`timechart` は `stats` の別名で機能は同じ', isCorrect: false },
      { key: 'D', text: '`chart` はリアルタイムサーチ専用', isCorrect: false },
    ],
    explanation:
      '`timechart` は X 軸が必ず `_time` になり、`span` オプションで時間粒度を制御します。`chart` は `over` や `by` で任意のフィールドを X 軸に指定できます。',
    reference: 'Splunk Docs: timechart vs chart',
    difficulty: 'easy',
  },
  {
    id: 'tc-006',
    domainId: 'transforming-commands',
    stem: '`timechart` で `span` を指定しない場合、Splunk はどのように動作するか？',
    choices: [
      { key: 'A', text: 'デフォルトで span=1h が適用される', isCorrect: false },
      { key: 'B', text: '選択した時間範囲に応じて自動的に適切な span が選ばれる', isCorrect: true },
      { key: 'C', text: 'エラーが発生し span の指定が必須になる', isCorrect: false },
      { key: 'D', text: 'イベント1件ごとに1バケットが作られる', isCorrect: false },
    ],
    explanation:
      'span を省略すると、Splunk はサーチの時間範囲に応じて最適な span を自動選択します（例: 過去24時間なら30分ごとなど）。これを「自動スパン」と呼びます。',
    reference: 'Splunk Docs: timechart command',
    difficulty: 'medium',
  },
  {
    id: 'tc-007',
    domainId: 'transforming-commands',
    stem: '`chart avg(response_time) over uri by status` というコマンドの説明として正しいのはどれか？',
    choices: [
      { key: 'A', text: 'uri ごとの平均 response_time を、status 別の列に分けて表示する', isCorrect: true },
      { key: 'B', text: 'status ごとの平均 response_time を uri 別に表示する', isCorrect: false },
      { key: 'C', text: 'uri と status のすべての組み合わせで平均を計算する単一列テーブル', isCorrect: false },
      { key: 'D', text: 'response_time の平均を uri と status の両方で X 軸にする', isCorrect: false },
    ],
    explanation:
      '`chart <関数> over <X軸> by <系列>` の構文です。`over uri` が X 軸（行）、`by status` が列（系列）になります。結果は URI ごとに各 HTTP ステータスの平均応答時間が並ぶテーブルになります。',
    reference: 'Splunk Docs: chart command',
    difficulty: 'hard',
  },
]
