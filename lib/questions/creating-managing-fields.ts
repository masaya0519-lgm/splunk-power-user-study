import { Question } from '../types'

export const creatingManagingFieldsQuestions: Question[] = [
  {
    id: 'cmf-001',
    domainId: 'creating-managing-fields',
    stem: 'Field Extractor (FX) を使って正規表現でフィールドを抽出する場合、どのメソッドを選択するか？',
    choices: [
      { key: 'A', text: 'Regular Expression', isCorrect: true },
      { key: 'B', text: 'Delimiter', isCorrect: false },
      { key: 'C', text: 'Pattern', isCorrect: false },
      { key: 'D', text: 'Regex Auto', isCorrect: false },
    ],
    explanation:
      'Field Extractor では「Regular Expression」と「Delimiter」の2つのメソッドを選べます。「Regular Expression」は正規表現の名前付きキャプチャグループ（`(?P<field_name>pattern)`）でフィールドを抽出します。',
    reference: 'Splunk Docs: Extract fields with the field extractor',
    difficulty: 'easy',
  },
  {
    id: 'cmf-002',
    domainId: 'creating-managing-fields',
    stem: 'Field Extractor でデリミタ（区切り文字）方式を使う場合に適したデータ形式はどれか？',
    choices: [
      { key: 'A', text: 'CSV や TSV など区切り文字で構造化されたデータ', isCorrect: true },
      { key: 'B', text: 'XML 形式のデータ', isCorrect: false },
      { key: 'C', text: 'JSON 形式のデータ', isCorrect: false },
      { key: 'D', text: '自由形式のログ（syslog など）', isCorrect: false },
    ],
    explanation:
      'デリミタ方式は CSV のようにカンマ、タブ、スペース、パイプ（|）などの区切り文字で列が分かれているデータに適しています。各列に名前を付けることでフィールドとして扱えます。',
    reference: 'Splunk Docs: Field Extractor - delimiter method',
    difficulty: 'easy',
  },
  {
    id: 'cmf-003',
    domainId: 'creating-managing-fields',
    stem: 'Field Extractor で作成したフィールド抽出はどこに保存されるか？',
    choices: [
      { key: 'A', text: 'props.conf と transforms.conf', isCorrect: true },
      { key: 'B', text: 'inputs.conf', isCorrect: false },
      { key: 'C', text: 'indexes.conf', isCorrect: false },
      { key: 'D', text: 'fields.conf', isCorrect: false },
    ],
    explanation:
      'Field Extractor で作成したフィールド抽出は、ソースタイプに紐付けられた設定として `props.conf`（正規表現パターン）と `transforms.conf`（変換ルール）に保存されます。',
    reference: 'Splunk Docs: Field extraction configuration files',
    difficulty: 'medium',
  },
  {
    id: 'cmf-004',
    domainId: 'creating-managing-fields',
    stem: 'Splunk で `EXTRACT-` 設定と `REPORT-` 設定の違いはどれか？',
    choices: [
      { key: 'A', text: '`EXTRACT-` はインライン正規表現で直接抽出し、`REPORT-` は transforms.conf のルールを参照する', isCorrect: true },
      { key: 'B', text: '`EXTRACT-` はインデックス時、`REPORT-` は検索時に適用される', isCorrect: false },
      { key: 'C', text: '`REPORT-` は正規表現を使えない', isCorrect: false },
      { key: 'D', text: '両者に機能的な違いはない', isCorrect: false },
    ],
    explanation:
      '`EXTRACT-` は props.conf 内に直接正規表現を記述します。`REPORT-` は transforms.conf に定義した変換ルール名を参照します。`REPORT-` の方が再利用性が高く複雑な抽出に向いています。',
    reference: 'Splunk Docs: props.conf field extraction settings',
    difficulty: 'hard',
  },
  {
    id: 'cmf-005',
    domainId: 'creating-managing-fields',
    stem: 'Field Extractor で正規表現抽出を行う際、フィールド名を指定するための正規表現構文はどれか？',
    choices: [
      { key: 'A', text: '(?P<field_name>pattern)', isCorrect: true },
      { key: 'B', text: '(?<field_name>pattern)', isCorrect: false },
      { key: 'C', text: '(<field_name>pattern)', isCorrect: false },
      { key: 'D', text: '(?:field_name=pattern)', isCorrect: false },
    ],
    explanation:
      'Splunk の正規表現フィールド抽出では Python 名前付きキャプチャグループ構文 `(?P<フィールド名>パターン)` を使います。例: `User=(?P<username>\\w+)` で "User=john" から "username=john" を抽出します。',
    reference: 'Splunk Docs: Named capture groups in field extractions',
    difficulty: 'medium',
  },
  {
    id: 'cmf-006',
    domainId: 'creating-managing-fields',
    stem: 'Field Extractor を起動する最も簡単な方法はどれか？',
    choices: [
      { key: 'A', text: 'サーチ結果でイベントのフィールド名の横にある「Extract New Fields」リンクをクリック', isCorrect: true },
      { key: 'B', text: 'Settings > Knowledge > Field Extractions から作成', isCorrect: false },
      { key: 'C', text: 'props.conf を直接編集する', isCorrect: false },
      { key: 'D', text: 'コマンドラインから splunk extract コマンドを実行する', isCorrect: false },
    ],
    explanation:
      'Field Extractor (FX) はサーチ結果のイベントをクリックし、イベント詳細パネルの下部にある「Extract New Fields」ボタンから起動するのが最も簡単です。Settings メニューからも起動できます。',
    reference: 'Splunk Docs: Getting to the field extractor',
    difficulty: 'easy',
  },
  {
    id: 'cmf-007',
    domainId: 'creating-managing-fields',
    stem: 'Field Extractor でデリミタ方式を選んだとき、デフォルト以外の区切り文字として指定できるものはどれか？',
    choices: [
      { key: 'A', text: 'カンマ、タブ、スペース、パイプ（|）など任意の1文字', isCorrect: true },
      { key: 'B', text: 'カンマのみ', isCorrect: false },
      { key: 'C', text: 'カンマとタブのみ', isCorrect: false },
      { key: 'D', text: '正規表現パターンのみ', isCorrect: false },
    ],
    explanation:
      'デリミタ方式ではカンマ、タブ、スペース、パイプなど任意の区切り文字を指定できます。Splunk の FX UI では一般的な区切り文字がプリセットされており、カスタム文字も入力可能です。',
    reference: 'Splunk Docs: Field Extractor - using delimiter method',
    difficulty: 'medium',
  },
  {
    id: 'cmf-008',
    domainId: 'creating-managing-fields',
    stem: 'フィールド抽出の「Inline」と「Transform」の違いとして正しいのはどれか？',
    choices: [
      { key: 'A', text: 'Inline は props.conf に直接パターンを記述し、Transform は transforms.conf の stanza を参照する', isCorrect: true },
      { key: 'B', text: 'Inline はインデックス時にのみ適用され、Transform は検索時に適用される', isCorrect: false },
      { key: 'C', text: 'Transform の方がパフォーマンスが低い', isCorrect: false },
      { key: 'D', text: '両者は異なる抽出メソッドを使用する', isCorrect: false },
    ],
    explanation:
      'Inline 抽出は props.conf の `EXTRACT-` 設定で直接正規表現を記述します。Transform 抽出は props.conf の `REPORT-` で transforms.conf の stanza を参照します。Transform は複数のソースタイプで同じ抽出ルールを共有できるため、再利用性が高いです。',
    reference: 'Splunk Docs: About transforms field extractions',
    difficulty: 'hard',
  },
]
