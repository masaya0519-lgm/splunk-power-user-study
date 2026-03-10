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
  {
    id: 'tc-008',
    domainId: 'transforming-commands',
    stem: '`timechart count by host` を実行したとき、結果テーブルの X 軸（最初の列）として表示されるのはどれか？',
    choices: [
      { key: 'A', text: '_time（タイムスタンプ）', isCorrect: true },
      { key: 'B', text: 'host', isCorrect: false },
      { key: 'C', text: 'date', isCorrect: false },
      { key: 'D', text: 'count', isCorrect: false },
    ],
    explanation:
      '`timechart` コマンドでは X 軸は常に `_time`（時間）です。`by host` で指定した host は列（系列）になります。結果テーブルの最初の列は `_time`、以降の列が各ホスト名のカウント値となります。',
    reference: 'Splunk Docs: timechart command',
    difficulty: 'easy',
  },
  {
    id: 'tc-009',
    domainId: 'transforming-commands',
    stem: '`| chart sum(price) by product, region` を実行したとき、テーブルの行（X 軸）と列（系列）はどのように配置されるか？',
    choices: [
      { key: 'A', text: 'product が X 軸（行）、region が列（系列）になる', isCorrect: true },
      { key: 'B', text: 'region が X 軸（行）、product が列（系列）になる', isCorrect: false },
      { key: 'C', text: 'product と region を連結した文字列が X 軸になる', isCorrect: false },
      { key: 'D', text: 'region が X 軸、product と sum(price) が別々の列になる', isCorrect: false },
    ],
    explanation:
      '`chart <関数> by <フィールド1>, <フィールド2>` の構文では、最初のフィールド（product）が X 軸（行）になり、2番目のフィールド（region）が列（系列）になります。各セルに sum(price) の値が入ります。',
    reference: 'Splunk Docs: chart command - split-by clause',
    difficulty: 'medium',
  },
  {
    id: 'tc-010',
    domainId: 'transforming-commands',
    stem: '`stats`、`chart`、`timechart` コマンドが共通してサポートする機能はどれか？',
    choices: [
      { key: 'A', text: '同一の統計関数セット（count、sum、avg、max、min など）が使用できる', isCorrect: true },
      { key: 'B', text: '3つともビジュアライゼーションを自動生成する', isCorrect: false },
      { key: 'C', text: '3つとも時間を X 軸として使用する', isCorrect: false },
      { key: 'D', text: '3つとも `by` 句で複数フィールドを指定できない', isCorrect: false },
    ],
    explanation:
      '`stats`、`chart`、`timechart` はいずれも同じ統計関数（count、sum、avg、max、min、dc、values など）をサポートしています。違いは出力の形式と用途です。`stats` は汎用集計、`chart` は2次元テーブル、`timechart` は時系列グラフ向けです。',
    reference: 'Splunk Docs: Statistical and charting functions',
    difficulty: 'medium',
  },
  {
    id: 'tc-011',
    domainId: 'transforming-commands',
    stem: '`| chart count(action), sum(bytes) by product` を実行したとき、結果テーブルの列の順序として正しいのはどれか？',
    choices: [
      { key: 'A', text: 'product、count(action)、sum(bytes) の順', isCorrect: true },
      { key: 'B', text: 'count(action)、sum(bytes)、product の順', isCorrect: false },
      { key: 'C', text: 'product、sum(bytes)、count(action) の順', isCorrect: false },
      { key: 'D', text: 'アルファベット順で並ぶ', isCorrect: false },
    ],
    explanation:
      '`chart` で複数の集計関数を指定した場合、結果テーブルの列順序は「グループ化フィールド（by 句のフィールド）が最初」、次に「指定した集計関数の順（左から右）」になります。したがって product → count(action) → sum(bytes) の順になります。',
    reference: 'Splunk Docs: chart command - multiple functions',
    difficulty: 'hard',
  },
  {
    id: 'tc-012',
    domainId: 'transforming-commands',
    stem: '次のうち無効な（エラーになる）構文はどれか？',
    choices: [
      { key: 'A', text: '| chart count over host, status', isCorrect: true },
      { key: 'B', text: '| chart count by host, status', isCorrect: false },
      { key: 'C', text: '| chart count over host by status', isCorrect: false },
      { key: 'D', text: '| chart count by host', isCorrect: false },
    ],
    explanation:
      '`over` 句にはフィールドを1つしか指定できません。`| chart count over host, status` のように `over` の後にカンマ区切りで複数フィールドを指定するのは無効な構文です。複数フィールドで分割したい場合は `by` 句を使います（例: `| chart count by host, status`）。',
    reference: 'Splunk Docs: chart command syntax',
    difficulty: 'hard',
  },
  {
    id: 'tc-013',
    domainId: 'transforming-commands',
    stem: '`top` コマンドのデフォルト動作として正しいのはどれか？',
    choices: [
      { key: 'A', text: '上位10件のフィールド値とその件数・割合（percent）を返す', isCorrect: true },
      { key: 'B', text: '上位5件のフィールド値のみ返す', isCorrect: false },
      { key: 'C', text: '最も多い値のみを1件返す', isCorrect: false },
      { key: 'D', text: '件数のみを返し割合は計算しない', isCorrect: false },
    ],
    explanation:
      '`top <フィールド名>` はデフォルトで上位10件の値を返し、各値の件数（count）と割合（percent）の2列も自動的に追加されます。`limit=<数>` で件数を変更できます。逆順（下位）には `rare` コマンドを使います。',
    reference: 'Splunk Docs: top command',
    difficulty: 'easy',
  },
  {
    id: 'tc-014',
    domainId: 'transforming-commands',
    stem: '`stats count by host` と `chart count by host` の出力の違いとして正しいのはどれか？',
    choices: [
      { key: 'A', text: '`stats` は host と count の2列テーブルを出力し、`chart` も同様だが列が回転してホストが列ヘッダーになる場合がある', isCorrect: true },
      { key: 'B', text: '`stats` はビジュアライゼーションを生成し、`chart` はテーブルのみ生成する', isCorrect: false },
      { key: 'C', text: '`stats` は時間を考慮した集計、`chart` は時間を無視した集計', isCorrect: false },
      { key: 'D', text: '両者の出力は完全に同一である', isCorrect: false },
    ],
    explanation:
      '`stats count by host` は host 列と count 列の縦長テーブルを生成します。`chart count by host` は host の各値が列ヘッダーになる横長の形式（ピボット形式）になります。`chart` は系列が列として展開されるため、グラフ表示に適した形式です。',
    reference: 'Splunk Docs: stats vs chart',
    difficulty: 'medium',
  },
  {
    id: 'tc-015',
    domainId: 'transforming-commands',
    stem: '`top` コマンドで上位5件のみを表示し、残りを "OTHER" にまとめる正しい構文はどれか？',
    choices: [
      { key: 'A', text: '| top limit=5 useother=true countfield=count percentfield=percent host', isCorrect: false },
      { key: 'B', text: '| top limit=5 host', isCorrect: true },
      { key: 'C', text: '| top 5 host useother=true', isCorrect: false },
      { key: 'D', text: '| top host limit=5 others=true', isCorrect: false },
    ],
    explanation:
      '`top limit=5 host` で上位5件を返します。`useother` オプションはデフォルトで `true` のため、`| top limit=5 host` だけで残りの値が "OTHER" 行にまとめられます。`useother=false` にすると OTHER 行を非表示にできます。',
    reference: 'Splunk Docs: top command options',
    difficulty: 'medium',
  },
  {
    id: 'tc-016',
    domainId: 'transforming-commands',
    stem: '`rare` コマンドの説明として正しいのはどれか？',
    choices: [
      { key: 'A', text: '出現頻度が最も少ないフィールド値を返す（`top` の逆）', isCorrect: true },
      { key: 'B', text: 'フィールドに存在しない値を生成する', isCorrect: false },
      { key: 'C', text: 'イベントをランダムにサンプリングする', isCorrect: false },
      { key: 'D', text: '重複するイベントを削除する', isCorrect: false },
    ],
    explanation:
      '`rare <フィールド名>` は `top` コマンドの逆で、最も出現頻度が低いフィールド値を返します。デフォルトで下位10件を表示します。`top` と同様に `limit`、`useother`、`by` などのオプションが使えます。',
    reference: 'Splunk Docs: rare command',
    difficulty: 'easy',
  },
  {
    id: 'tc-017',
    domainId: 'transforming-commands',
    stem: '`stats dc(user) by src_ip` の `dc()` 関数の説明として正しいのはどれか？',
    choices: [
      { key: 'A', text: '`src_ip` ごとのユニークな `user` の数を返す', isCorrect: true },
      { key: 'B', text: '`src_ip` と `user` の組み合わせを降順で並べる', isCorrect: false },
      { key: 'C', text: '`user` フィールドの値を重複なしでリストアップする', isCorrect: false },
      { key: 'D', text: '`user` フィールドの合計数（重複含む）を返す', isCorrect: false },
    ],
    explanation:
      '`dc()` は "distinct count"（ユニーク数）を返す集計関数です。`stats dc(user) by src_ip` は各送信元 IP ごとに何人の異なるユーザーが存在するかを集計します。1つの IP から多数のユーザーアカウントが使われている場合の検出などに使います。',
    reference: 'Splunk Docs: dc statistical function',
    difficulty: 'medium',
  },
  {
    id: 'tc-018',
    domainId: 'transforming-commands',
    stem: '`timechart` コマンドで `useother=false` を設定すると何が変わるか？',
    choices: [
      { key: 'A', text: 'limit を超えた系列が "OTHER" 列にまとめられず、非表示になる', isCorrect: true },
      { key: 'B', text: 'X 軸に OTHER という値が追加される', isCorrect: false },
      { key: 'C', text: 'null 値を持つ時間バケットが除外される', isCorrect: false },
      { key: 'D', text: '全系列が表示される（limit が無効になる）', isCorrect: false },
    ],
    explanation:
      '`timechart limit=5 useother=false count by host` のように設定すると、上位5系列のみ表示され、残りの系列は "OTHER" としてまとめられず完全に非表示になります。デフォルトは `useother=true` で OTHER 列が表示されます。',
    reference: 'Splunk Docs: timechart command - useother option',
    difficulty: 'medium',
  },
  {
    id: 'tc-019',
    domainId: 'transforming-commands',
    stem: '`stats values(host)` と `stats list(host)` の違いとして正しいのはどれか？',
    choices: [
      { key: 'A', text: '`values()` は重複を除いたリストを返し、`list()` は重複を含む全値リストを返す', isCorrect: true },
      { key: 'B', text: '`list()` はアルファベット順でソートされ、`values()` は出現順', isCorrect: false },
      { key: 'C', text: '`values()` は最大100件に制限され、`list()` は無制限', isCorrect: false },
      { key: 'D', text: '両者に機能的な違いはない', isCorrect: false },
    ],
    explanation:
      '`values(フィールド)` は重複を除いたユニークな値のリストをアルファベット順で返します。`list(フィールド)` は重複を含むすべての値を時系列順で返します。ユニークなホスト名を確認したい場合は `values()`、実際のアクセス順序を確認したい場合は `list()` を使います。',
    reference: 'Splunk Docs: values and list statistical functions',
    difficulty: 'medium',
  },
  {
    id: 'tc-020',
    domainId: 'transforming-commands',
    stem: '`chart` コマンドで `usenull=false` を指定するとどうなるか？',
    choices: [
      { key: 'A', text: 'NULL 値を持つ系列（列）が結果から除外される', isCorrect: true },
      { key: 'B', text: 'NULL 値のセルが 0 に置換される', isCorrect: false },
      { key: 'C', text: 'NULL というラベルの列が追加される', isCorrect: false },
      { key: 'D', text: 'NULL を含むイベント全体が除外される', isCorrect: false },
    ],
    explanation:
      '`usenull=false` オプションを指定すると、フィールド値が null の系列（`by` 句で分割した場合に null 値を持つ列）が結果テーブルから除外されます。デフォルトは `usenull=true` で NULL 列が表示されます。',
    reference: 'Splunk Docs: chart command - usenull option',
    difficulty: 'hard',
  },
  {
    id: 'tc-021',
    domainId: 'transforming-commands',
    stem: '`stats` コマンドで `by` 句なしで `avg(response_time)` を実行した場合の結果はどれか？',
    choices: [
      { key: 'A', text: '全イベントの response_time の平均を1行で返す', isCorrect: true },
      { key: 'B', text: 'エラーになる（by 句が必須）', isCorrect: false },
      { key: 'C', text: 'イベントごとに個別の avg 値を返す', isCorrect: false },
      { key: 'D', text: 'response_time フィールドを持つイベントのみカウントする', isCorrect: false },
    ],
    explanation:
      '`stats avg(response_time)` のように `by` 句なしで実行すると、サーチ結果の全イベントを対象とした単一の集計値（1行）が返されます。グループ化なしの全体集計です。',
    reference: 'Splunk Docs: stats command',
    difficulty: 'easy',
  },
  {
    id: 'tc-022',
    domainId: 'transforming-commands',
    stem: '`timechart span=1d count` というコマンドを過去30日間で実行した場合、結果テーブルの行数はいくつか？',
    choices: [
      { key: 'A', text: '30行（1日1行）', isCorrect: true },
      { key: 'B', text: '1行（全期間の合計）', isCorrect: false },
      { key: 'C', text: '720行（30日 × 24時間）', isCorrect: false },
      { key: 'D', text: 'イベント件数と同じ行数', isCorrect: false },
    ],
    explanation:
      '`span=1d` を指定すると1日ごとに時間バケットが作られます。過去30日間では30個のバケットが生成されるため、結果テーブルには30行が返されます。',
    reference: 'Splunk Docs: timechart command - span option',
    difficulty: 'easy',
  },
  {
    id: 'tc-023',
    domainId: 'transforming-commands',
    stem: '`top` コマンドで `countfield=total_count` オプションを指定するとどうなるか？',
    choices: [
      { key: 'A', text: 'デフォルトの "count" 列名が "total_count" に変更される', isCorrect: true },
      { key: 'B', text: '"total_count" フィールドの値でソートされる', isCorrect: false },
      { key: 'C', text: '"total_count" というフィールドが集計対象になる', isCorrect: false },
      { key: 'D', text: 'エラーになる（countfield は top で使えない）', isCorrect: false },
    ],
    explanation:
      '`top` コマンドの `countfield` オプションはカウント列の名前を変更します。デフォルトは "count" ですが、`countfield=total_count` と指定すると列名が "total_count" になります。同様に `percentfield` でパーセント列の名前も変更できます。',
    reference: 'Splunk Docs: top command - countfield option',
    difficulty: 'hard',
  },
  {
    id: 'tc-024',
    domainId: 'transforming-commands',
    stem: '`stats` の `perc90(response_time)` 関数の説明として正しいのはどれか？',
    choices: [
      { key: 'A', text: 'response_time の90パーセンタイル値を返す', isCorrect: true },
      { key: 'B', text: 'response_time が 90 以下のイベント数を返す', isCorrect: false },
      { key: 'C', text: 'response_time の上位90%の平均を返す', isCorrect: false },
      { key: 'D', text: 'response_time を90で割った値の平均を返す', isCorrect: false },
    ],
    explanation:
      '`perc90(フィールド)` は指定フィールドの90パーセンタイル値を返します。つまり全データの90%がこの値以下になります。レスポンスタイムの分布分析（SLA 違反の検出など）に有用です。`percN()` で任意のパーセンタイルを計算できます（例: `perc95()`、`perc99()`）。',
    reference: 'Splunk Docs: perc statistical function',
    difficulty: 'hard',
  },
  {
    id: 'tc-025',
    domainId: 'transforming-commands',
    stem: '`chart` コマンドで `span` オプションを指定できるのはどのような場合か？',
    choices: [
      { key: 'A', text: '`over` または `by` 句で時間フィールド（_time）を使用している場合', isCorrect: true },
      { key: 'B', text: 'すべての `chart` コマンドで常に span を指定できる', isCorrect: false },
      { key: 'C', text: '`span` は `chart` ではなく `timechart` 専用オプション', isCorrect: false },
      { key: 'D', text: '数値フィールドを集計する場合にのみ span を指定できる', isCorrect: false },
    ],
    explanation:
      '`chart` コマンドでも `_time` フィールドを軸に使う場合は `span` オプションで時間バケットを指定できます。例: `| chart count over _time span=1h`。ただし `timechart` と異なり、`_time` を軸にしない通常の `chart` では `span` に意味はありません。',
    reference: 'Splunk Docs: chart command - span option',
    difficulty: 'hard',
  },
]
