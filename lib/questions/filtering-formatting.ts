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
  {
    id: 'ff-011',
    domainId: 'filtering-formatting',
    stem: '`search` コマンドの動作として正しいのはどれか？',
    choices: [
      { key: 'A', text: 'パイプラインの途中でも使用でき、フィールド値の検索は大文字小文字を区別しない', isCorrect: true },
      { key: 'B', text: '`search` コマンドはパイプラインの最初にしか使えない', isCorrect: false },
      { key: 'C', text: '`search` コマンドはワイルドカードを使用できない', isCorrect: false },
      { key: 'D', text: 'フィールド値の検索は大文字小文字を厳密に区別する', isCorrect: false },
    ],
    explanation:
      '`search` コマンドはパイプの最初でも途中でも使用できます。フィールド値（例: `status=Error`）の検索は大文字小文字を区別しません。またワイルドカード（`*`）も使用できます。これらの特性は最初のサーチ文字列と同じです。',
    reference: 'Splunk Docs: search command',
    difficulty: 'medium',
  },
  {
    id: 'ff-012',
    domainId: 'filtering-formatting',
    stem: '`| fillnull value="Unknown"` を実行した場合の動作として正しいのはどれか？',
    choices: [
      { key: 'A', text: 'すべてのフィールドの null 値を "Unknown" に置き換える', isCorrect: true },
      { key: 'B', text: '空文字列（""）のフィールドも "Unknown" に置き換える', isCorrect: false },
      { key: 'C', text: 'null フィールドを持つイベントを削除する', isCorrect: false },
      { key: 'D', text: 'null フィールドに "Unknown" という新しいフィールド名を付ける', isCorrect: false },
    ],
    explanation:
      '`| fillnull value="Unknown"` はすべてのフィールドの null 値（値が存在しないフィールド）を "Unknown" に置き換えます。空文字列（""）は null ではないため対象外です。特定フィールドだけを対象にするには `| fillnull value="Unknown" fieldA fieldB` と指定します。',
    reference: 'Splunk Docs: fillnull command',
    difficulty: 'easy',
  },
  {
    id: 'ff-013',
    domainId: 'filtering-formatting',
    stem: '`eval` の `if()` 関数の引数の正しい順序はどれか？',
    choices: [
      { key: 'A', text: 'if(ブール条件, 真の値, 偽の値)', isCorrect: true },
      { key: 'B', text: 'if(真の値, ブール条件, 偽の値)', isCorrect: false },
      { key: 'C', text: 'if(ブール条件, 偽の値, 真の値)', isCorrect: false },
      { key: 'D', text: 'if(真の値, 偽の値, ブール条件)', isCorrect: false },
    ],
    explanation:
      '`eval` の `if()` 関数は `if(ブール条件, 真のとき返す値, 偽のとき返す値)` の順です。例: `| eval result = if(status==200, "OK", "Error")` では status が 200 のとき "OK"、それ以外は "Error" を返します。引数の順序を間違えると意図しない結果になります。',
    reference: 'Splunk Docs: if eval function',
    difficulty: 'easy',
  },
  {
    id: 'ff-014',
    domainId: 'filtering-formatting',
    stem: '`| stats count AS total` の `AS` 句の役割として正しいのはどれか？',
    choices: [
      { key: 'A', text: '集計結果のフィールド名を "count" から "total" に変更する', isCorrect: true },
      { key: 'B', text: '"total" という値を持つイベントのみをカウントする', isCorrect: false },
      { key: 'C', text: '"total" インデックスにある count フィールドを集計する', isCorrect: false },
      { key: 'D', text: 'count フィールドと total フィールドを結合する', isCorrect: false },
    ],
    explanation:
      '`AS` 句（または小文字の `as`）は集計関数の出力フィールド名を変更します。`stats count AS total` は count の結果を "total" という列名で出力します。これにより後続のコマンドで `total` という名前でそのフィールドを参照できます。',
    reference: 'Splunk Docs: stats command - AS clause',
    difficulty: 'easy',
  },
  {
    id: 'ff-015',
    domainId: 'filtering-formatting',
    stem: '`eval` コマンドで実行できないことはどれか？',
    choices: [
      { key: 'A', text: 'インデックスを直接変更する', isCorrect: true },
      { key: 'B', text: 'フィールド値のフォーマット変換（例: 数値を文字列に）', isCorrect: false },
      { key: 'C', text: '数値計算（例: bytes を KB に変換）', isCorrect: false },
      { key: 'D', text: '条件分岐（if/case による値の切り替え）', isCorrect: false },
    ],
    explanation:
      '`eval` コマンドは値のフォーマット変換、数値計算、条件分岐、文字列操作など多くの操作ができます。ただしインデックスへの書き込みや Splunk の保存データの変更はできません。`eval` は検索時にフィールドを動的に生成・変換するものです。',
    reference: 'Splunk Docs: eval command',
    difficulty: 'medium',
  },
  {
    id: 'ff-016',
    domainId: 'filtering-formatting',
    stem: '`| stats count as IP_count by IP | where IP_count > 5` の説明として正しいのはどれか？',
    choices: [
      { key: 'A', text: 'IP ごとのカウントを集計してから、カウントが5を超えるものだけに絞る', isCorrect: true },
      { key: 'B', text: 'IP フィールドの値が 5 より大きいイベントを取得し、カウントする', isCorrect: false },
      { key: 'C', text: '`where` は stats の後では使えないためエラーになる', isCorrect: false },
      { key: 'D', text: '`IP_count > 5` の条件は文字列比較として処理される', isCorrect: false },
    ],
    explanation:
      'このクエリは `stats` で IP ごとのカウントを `IP_count` として集計し、その後 `where` でカウントが5を超える IP のみに絞り込みます。`where` コマンドは `stats` などの後にパイプで繋いで使用できます。これは5回以上出現する IP を特定する典型的なパターンです。',
    reference: 'Splunk Docs: where command',
    difficulty: 'medium',
  },
  {
    id: 'ff-017',
    domainId: 'filtering-formatting',
    stem: '`| where A=B` という条件の動作として正しいのはどれか？',
    choices: [
      { key: 'A', text: 'フィールド A の値がフィールド B の値と等しいイベントを返す', isCorrect: true },
      { key: 'B', text: 'フィールド A の値が文字列 "B" と等しいイベントを返す', isCorrect: false },
      { key: 'C', text: 'A と B という名前のフィールドが同時に存在するイベントを返す', isCorrect: false },
      { key: 'D', text: 'エラーになる（where 句では引用符が必要）', isCorrect: false },
    ],
    explanation:
      '`where` コマンドでは引用符なしの値はフィールド名として扱われます。`| where A=B` は「フィールド A の値がフィールド B の値と等しいイベントを返す」という意味です。文字列 "B" と比較したい場合は `| where A="B"` と引用符が必要です。',
    reference: 'Splunk Docs: where command - field comparison',
    difficulty: 'hard',
  },
  {
    id: 'ff-018',
    domainId: 'filtering-formatting',
    stem: '`eval` の `coalesce(productName, productid)` の動作として正しいのはどれか？',
    choices: [
      { key: 'A', text: 'productName が null でなければ productName を返し、null であれば productid を返す', isCorrect: true },
      { key: 'B', text: 'productName と productid を連結して返す', isCorrect: false },
      { key: 'C', text: 'productid が null でなければ productid を返す', isCorrect: false },
      { key: 'D', text: '両方が null の場合は空文字列 "" を返す', isCorrect: false },
    ],
    explanation:
      '`coalesce()` は引数を左から順に評価し、最初に null でない値を返します。`coalesce(productName, productid)` は productName が null でなければその値を、null であれば productid の値を返します。両方 null の場合は null を返します（空文字列ではありません）。',
    reference: 'Splunk Docs: coalesce eval function',
    difficulty: 'medium',
  },
  {
    id: 'ff-019',
    domainId: 'filtering-formatting',
    stem: '`eval` の `case()` 関数でどの条件にも一致しない場合、何が返されるか？',
    choices: [
      { key: 'A', text: 'null（値なし）が返される', isCorrect: true },
      { key: 'B', text: '空文字列 "" が返される', isCorrect: false },
      { key: 'C', text: '"undefined" という文字列が返される', isCorrect: false },
      { key: 'D', text: 'エラーになりサーチが停止する', isCorrect: false },
    ],
    explanation:
      '`case()` 関数でどの条件にも一致しない場合は null が返されます。そのフィールドには値が存在しない状態になります。デフォルト値を設定したい場合は最後に `true(), "デフォルト値"` を追加します。例: `case(status==200, "OK", status==404, "Not Found", true(), "Other")`。',
    reference: 'Splunk Docs: case eval function',
    difficulty: 'medium',
  },
  {
    id: 'ff-020',
    domainId: 'filtering-formatting',
    stem: '`dedup` コマンドの説明として正しいのはどれか？',
    choices: [
      { key: 'A', text: '指定フィールドの値が重複するイベントを削除し、最初の1件のみを残す', isCorrect: true },
      { key: 'B', text: '重複するフィールドを削除する', isCorrect: false },
      { key: 'C', text: '同一のイベントを複数コピーする', isCorrect: false },
      { key: 'D', text: '指定フィールドの null 値を持つイベントを削除する', isCorrect: false },
    ],
    explanation:
      '`dedup <フィールド名>` は指定フィールドの値が同じイベントのうち、最初に現れたもの（デフォルトは最新のイベント）のみを残し、重複を削除します。複数フィールドを指定すると `| dedup field1, field2` のようにフィールドの組み合わせが重複するものを除外します。',
    reference: 'Splunk Docs: dedup command',
    difficulty: 'easy',
  },
  {
    id: 'ff-021',
    domainId: 'filtering-formatting',
    stem: '`sort` コマンドで `host` を昇順、`count` を降順で並べる正しい構文はどれか？',
    choices: [
      { key: 'A', text: '| sort host, -count', isCorrect: true },
      { key: 'B', text: '| sort ASC host DESC count', isCorrect: false },
      { key: 'C', text: '| sort +host -count', isCorrect: false },
      { key: 'D', text: '| sort host asc, count desc', isCorrect: false },
    ],
    explanation:
      '`sort` コマンドでは `-` を前置すると降順、前置しないか `+` を前置すると昇順になります。`| sort host, -count` は host を昇順、count を降順で並べます。`ASC`/`DESC` キーワードは使えません。',
    reference: 'Splunk Docs: sort command',
    difficulty: 'medium',
  },
  {
    id: 'ff-022',
    domainId: 'filtering-formatting',
    stem: '`table` コマンドの説明として正しいのはどれか？',
    choices: [
      { key: 'A', text: '指定したフィールドのみを列として表示し、それ以外のフィールドを除外する', isCorrect: true },
      { key: 'B', text: 'イベントをテーブル形式のビジュアライゼーションに変換する', isCorrect: false },
      { key: 'C', text: 'ルックアップテーブルを参照してフィールドを追加する', isCorrect: false },
      { key: 'D', text: 'データをデータベーステーブルにエクスポートする', isCorrect: false },
    ],
    explanation:
      '`table <フィールド1> <フィールド2> ...` は結果の列を指定したフィールドのみに絞ります。`fields` コマンドと似ていますが、`table` は列の順序も指定通りに並べ替えます。`fields` コマンドとの違いは、`table` が常に指定順で列を表示する点です。',
    reference: 'Splunk Docs: table command',
    difficulty: 'easy',
  },
  {
    id: 'ff-023',
    domainId: 'filtering-formatting',
    stem: '`fields` コマンドで `-` 記号を使う目的はどれか？',
    choices: [
      { key: 'A', text: '指定したフィールドを結果から除外する', isCorrect: true },
      { key: 'B', text: '指定したフィールドの値を降順にソートする', isCorrect: false },
      { key: 'C', text: '指定したフィールドの値を負の数にする', isCorrect: false },
      { key: 'D', text: '内部フィールド（_field）にアクセスする', isCorrect: false },
    ],
    explanation:
      '`| fields - _raw, _indextime` のように `-` を前置すると、指定フィールドを除外してそれ以外をすべて残します。`| fields host, status` のように `+` または何も付けない場合は指定したフィールドのみを保持します。',
    reference: 'Splunk Docs: fields command',
    difficulty: 'easy',
  },
  {
    id: 'ff-024',
    domainId: 'filtering-formatting',
    stem: '`eval` コマンドで `tostring(num, "commas")` を使うとどうなるか？',
    choices: [
      { key: 'A', text: '数値をカンマ区切りの文字列に変換する（例: 1234567 → "1,234,567"）', isCorrect: true },
      { key: 'B', text: '数値をカンマで区切った配列にする', isCorrect: false },
      { key: 'C', text: '"commas" という文字列と数値を連結する', isCorrect: false },
      { key: 'D', text: '数値を小数点付きの文字列に変換する', isCorrect: false },
    ],
    explanation:
      '`tostring(数値, "commas")` は数値を3桁ごとにカンマで区切った文字列に変換します。他にも `"hex"` で16進数変換、`"duration"` で秒数を "HH:MM:SS" 形式に変換できます。',
    reference: 'Splunk Docs: tostring eval function',
    difficulty: 'medium',
  },
  {
    id: 'ff-025',
    domainId: 'filtering-formatting',
    stem: '`filldown` コマンドの説明として正しいのはどれか？',
    choices: [
      { key: 'A', text: '直前の行の値をコピーして、null フィールドを埋める', isCorrect: true },
      { key: 'B', text: 'すべての null を 0 で埋める', isCorrect: false },
      { key: 'C', text: 'フィールドの値を下のイベントに移動する', isCorrect: false },
      { key: 'D', text: '指定フィールドの最小値で null を埋める', isCorrect: false },
    ],
    explanation:
      '`filldown <フィールド名>` は null 値を「直前の行（イベント）の値」で埋めます。例えばスプレッドシートの「下にコピー」と同じ動作です。時系列データで一定間隔のイベントに値を伝播させる場合に使います。`fillnull` がデフォルト値で埋めるのとは異なります。',
    reference: 'Splunk Docs: filldown command',
    difficulty: 'medium',
  },
  {
    id: 'ff-026',
    domainId: 'filtering-formatting',
    stem: '`eval` コマンドで `now()` 関数と `relative_time()` 関数の組み合わせの説明として正しいのはどれか？',
    choices: [
      { key: 'A', text: '`relative_time(now(), "-1d@d")` は昨日の開始時刻（Unix タイムスタンプ）を返す', isCorrect: true },
      { key: 'B', text: '`now()` は現在の日付を文字列で返す', isCorrect: false },
      { key: 'C', text: '`relative_time()` は時間帯（タイムゾーン）を変換する関数', isCorrect: false },
      { key: 'D', text: '`now()` と `relative_time()` は組み合わせて使えない', isCorrect: false },
    ],
    explanation:
      '`now()` は現在の Unix タイムスタンプ（秒数）を返します。`relative_time(now(), "-1d@d")` は「1日前の日の開始時刻」を返します。この組み合わせは時間ベースのフィルタリングや計算によく使われます。',
    reference: 'Splunk Docs: relative_time eval function',
    difficulty: 'hard',
  },
  {
    id: 'ff-027',
    domainId: 'filtering-formatting',
    stem: '`rex` コマンドを使って `_raw` フィールドから IP アドレスを抽出する正しい構文はどれか？',
    choices: [
      { key: 'A', text: '| rex "(?P<src_ip>\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3})"', isCorrect: true },
      { key: 'B', text: '| rex field=src_ip "\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}"', isCorrect: false },
      { key: 'C', text: '| extract src_ip="\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}"', isCorrect: false },
      { key: 'D', text: '| regex src_ip="(?P<ip>\\d+\\.\\d+\\.\\d+\\.\\d+)"', isCorrect: false },
    ],
    explanation:
      '`rex` コマンドは `(?P<フィールド名>正規表現)` の名前付きキャプチャグループを使ってフィールドを抽出します。デフォルトでは `_raw` フィールドに対して適用されます。別のフィールドを対象にするには `rex field=フィールド名 "..."` と指定します。',
    reference: 'Splunk Docs: rex command',
    difficulty: 'medium',
  },
]
