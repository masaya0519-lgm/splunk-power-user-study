import { Question } from '../types'

export const filteringFormattingQuestions: Question[] = [
  {
    id: 'ff-001',
    domainId: 'filtering-formatting',
    stem: '`eval` コマンドで status が 200 の場合 "success"、それ以外は "failure" を格納する正しい構文はどれか？',
    choices: [
      { key: 'A', text: '| eval result = if(status==200, "success", "failure")', isCorrect: true },
      { key: 'B', text: '| eval result = case(status==200, "success", "failure")', isCorrect: false },
      { key: 'C', text: '| eval result = status==200 ? "success" : "failure"', isCorrect: false },
      { key: 'D', text: '| eval result = iif(status=200, "success", "failure")', isCorrect: false },
    ],
    explanation:
      '`eval` の `if(条件, 真の値, 偽の値)` 関数を使います。`case()` は複数条件分岐に使いますが2条件のみなら `if()` が適切です。三項演算子（`?:`）は SPL では使えません。',
    reference: 'Splunk Docs: if eval function',
    difficulty: 'easy',
  },
  {
    id: 'ff-002',
    domainId: 'filtering-formatting',
    stem: '`where` コマンドと `search` コマンドの主な違いはどれか？',
    choices: [
      { key: 'A', text: '`where` は eval 式で条件を評価でき、`search` はキーワードベースのフィルタリングに使う', isCorrect: true },
      { key: 'B', text: '`search` はパイプラインの最初にしか使えない', isCorrect: false },
      { key: 'C', text: '`where` はインデックス検索に使い、`search` はフィールド検索に使う', isCorrect: false },
      { key: 'D', text: '両者に機能的な違いはない', isCorrect: false },
    ],
    explanation:
      '`where` は `eval` 式（例: `where len(field) > 5`、`where isnull(field)`）を使って条件を評価します。`search` はより直感的なキーワード検索やフィールド=値のフィルタリングに適しています。`search` はパイプライン中でも使用可能です。',
    reference: 'Splunk Docs: where command',
    difficulty: 'medium',
  },
  {
    id: 'ff-003',
    domainId: 'filtering-formatting',
    stem: '`fillnull` コマンドの説明として正しいのはどれか？',
    choices: [
      { key: 'A', text: 'null 値（空フィールド）を指定した値で埋める', isCorrect: true },
      { key: 'B', text: 'null のイベントを削除する', isCorrect: false },
      { key: 'C', text: 'フィールドが存在しないイベントを新規作成する', isCorrect: false },
      { key: 'D', text: '数値フィールドの null をゼロで自動補完する専用コマンド', isCorrect: false },
    ],
    explanation:
      '`fillnull` コマンドはフィールドの null 値を指定した値（デフォルトは "0"）で置き換えます。例: `| fillnull value="N/A"` とすると全フィールドの null が "N/A" に変換されます。特定フィールドのみ対象にするには `| fillnull value="N/A" field1 field2` と指定します。',
    reference: 'Splunk Docs: fillnull command',
    difficulty: 'easy',
  },
  {
    id: 'ff-004',
    domainId: 'filtering-formatting',
    stem: '`eval` コマンドで文字列を連結する正しい演算子はどれか？',
    choices: [
      { key: 'A', text: '+', isCorrect: false },
      { key: 'B', text: '.', isCorrect: false },
      { key: 'C', text: '&', isCorrect: false },
      { key: 'D', text: '+（文字列連結も + を使う）または `strcat` 関数', isCorrect: true },
    ],
    explanation:
      'eval での文字列連結は `+` 演算子を使います（例: `| eval fullname = first_name + " " + last_name`）。また `strcat` コマンドでも連結できます（例: `| strcat first_name " " last_name fullname`）。`,` は連結に使えません。',
    reference: 'Splunk Docs: eval string functions',
    difficulty: 'medium',
  },
  {
    id: 'ff-005',
    domainId: 'filtering-formatting',
    stem: '`where` コマンドでフィールドが null かどうかを判定する正しい構文はどれか？',
    choices: [
      { key: 'A', text: '| where isnull(field_name)', isCorrect: true },
      { key: 'B', text: '| where field_name = null', isCorrect: false },
      { key: 'C', text: '| where field_name == ""', isCorrect: false },
      { key: 'D', text: '| where field_name is null', isCorrect: false },
    ],
    explanation:
      'null 判定には `isnull(フィールド名)` 関数を使います。`= null` や `== null` は SPL では機能しません。null でないことを確認するには `isnotnull(フィールド名)` を使います。',
    reference: 'Splunk Docs: isnull eval function',
    difficulty: 'easy',
  },
  {
    id: 'ff-006',
    domainId: 'filtering-formatting',
    stem: '`eval` の `case()` 関数で「status が 200 なら "OK"、404 なら "Not Found"、それ以外なら "Other"」を実装する正しい構文はどれか？',
    choices: [
      { key: 'A', text: '| eval label = case(status==200, "OK", status==404, "Not Found", true(), "Other")', isCorrect: true },
      { key: 'B', text: '| eval label = case(status==200, "OK", status==404, "Not Found", "Other")', isCorrect: false },
      { key: 'C', text: '| eval label = switch(status, 200, "OK", 404, "Not Found", "Other")', isCorrect: false },
      { key: 'D', text: '| eval label = if(status==200, "OK", if(status==404, "Not Found", "Other"))', isCorrect: false },
    ],
    explanation:
      '`case()` 関数は `case(条件1, 値1, 条件2, 値2, ...)` の形式で、どの条件にも一致しないデフォルト値を設定するには最後に `true(), "デフォルト値"` を追加します。ネストした `if()` でも同じ結果になりますが、`case()` の方が読みやすいです。',
    reference: 'Splunk Docs: case eval function',
    difficulty: 'medium',
  },
  {
    id: 'ff-007',
    domainId: 'filtering-formatting',
    stem: '`eval` コマンドで数値を小数点2桁に丸める関数はどれか？',
    choices: [
      { key: 'A', text: 'round(field, 2)', isCorrect: true },
      { key: 'B', text: 'floor(field, 2)', isCorrect: false },
      { key: 'C', text: 'truncate(field, 2)', isCorrect: false },
      { key: 'D', text: 'format(field, "%.2f")', isCorrect: false },
    ],
    explanation:
      '`round(field, precision)` 関数で小数点以下の桁数を指定できます。例: `| eval kb = round(bytes/1024, 2)`。`floor()` は切り捨てで精度指定なし、`ceiling()` は切り上げです。',
    reference: 'Splunk Docs: Mathematical eval functions',
    difficulty: 'easy',
  },
  {
    id: 'ff-008',
    domainId: 'filtering-formatting',
    stem: '`fillnull value="unknown"` と `fillnull value="unknown" field1 field2` の違いはどれか？',
    choices: [
      { key: 'A', text: '前者はすべてのフィールドに適用し、後者は指定した field1、field2 にのみ適用する', isCorrect: true },
      { key: 'B', text: '前者はイベントを削除し、後者はフィールドのみ変更する', isCorrect: false },
      { key: 'C', text: '後者はエラーになる（フィールド指定は不可）', isCorrect: false },
      { key: 'D', text: '両者に機能的な違いはない', isCorrect: false },
    ],
    explanation:
      'フィールド名を指定しない `fillnull value="unknown"` はすべてのフィールドの null を置換します。特定フィールドのみを対象にするには `fillnull value="unknown" fieldA fieldB` のようにフィールド名を列挙します。',
    reference: 'Splunk Docs: fillnull command',
    difficulty: 'medium',
  },
  {
    id: 'ff-009',
    domainId: 'filtering-formatting',
    stem: '`eval` の `coalesce()` 関数の説明として正しいのはどれか？',
    choices: [
      { key: 'A', text: '複数のフィールドのうち最初の null でない値を返す', isCorrect: true },
      { key: 'B', text: '複数の数値フィールドを合計する', isCorrect: false },
      { key: 'C', text: 'フィールドの値を連結して1つの文字列にする', isCorrect: false },
      { key: 'D', text: '条件が真のときに特定の値を返す', isCorrect: false },
    ],
    explanation:
      '`coalesce(field1, field2, field3)` は引数を左から評価し、最初に null でない値を返します。異なるソースタイプでフィールド名が異なる場合（例: `src` と `src_ip`）に統一するために使えます。',
    reference: 'Splunk Docs: coalesce eval function',
    difficulty: 'medium',
  },
  {
    id: 'ff-010',
    domainId: 'filtering-formatting',
    stem: '`search` コマンドをパイプラインの途中で使う場合の用途として正しいのはどれか？',
    choices: [
      { key: 'A', text: '前のコマンドの結果をさらにキーワードや条件でフィルタリングする', isCorrect: true },
      { key: 'B', text: '新しいサーチをサブサーチとして実行する', isCorrect: false },
      { key: 'C', text: 'インデックスを再検索して追加データを取得する', isCorrect: false },
      { key: 'D', text: 'パイプラインの結果をリセットして最初から検索し直す', isCorrect: false },
    ],
    explanation:
      '`| search` はパイプラインの途中でも使用でき、前のステップの結果をさらにフィルタリングします。例: `... | stats count by status | search count > 10` で count が10を超えるもののみに絞れます。',
    reference: 'Splunk Docs: search command',
    difficulty: 'medium',
  },
]
