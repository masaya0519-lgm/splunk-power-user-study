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
  {
    id: 'cmf-009',
    domainId: 'creating-managing-fields',
    stem: 'Field Extractor のデリミタ方式でサポートされている区切り文字として含まれないのはどれか？',
    choices: [
      { key: 'A', text: 'コロン（:）', isCorrect: true },
      { key: 'B', text: 'パイプ（|）', isCorrect: false },
      { key: 'C', text: 'スペース（ ）', isCorrect: false },
      { key: 'D', text: 'タブ（\t）', isCorrect: false },
    ],
    explanation:
      'Field Extractor のデリミタ方式でサポートされている区切り文字はパイプ（|）、スペース、タブ、カンマなどです。コロン（:）は標準サポートされていません。コロン区切りのデータを抽出するには正規表現メソッドを使用します。',
    reference: 'Splunk Docs: Field Extractor - delimiter method',
    difficulty: 'medium',
  },
  {
    id: 'cmf-010',
    domainId: 'creating-managing-fields',
    stem: 'Field Extractor の正規表現モードで「Required」オプションを設定する意味はどれか？',
    choices: [
      { key: 'A', text: '指定した文字列を含むイベントのみがフィールド抽出の対象になる', isCorrect: true },
      { key: 'B', text: '抽出したフィールドが必ず値を持つことを強制する', isCorrect: false },
      { key: 'C', text: 'フィールドが必須入力項目としてダッシュボードに表示される', isCorrect: false },
      { key: 'D', text: '正規表現のマッチが必須であり、マッチしない場合はエラーになる', isCorrect: false },
    ],
    explanation:
      'Field Extractor の「Required」オプションに文字列を指定すると、その文字列を含むイベントのみがフィールド抽出の対象になります。これにより抽出ルールの適用範囲を絞り込み、誤抽出を防ぐことができます。',
    reference: 'Splunk Docs: Field Extractor - regex method options',
    difficulty: 'medium',
  },
  {
    id: 'cmf-011',
    domainId: 'creating-managing-fields',
    stem: 'Field Extractor でカスタム正規表現を使用することはできるか？',
    choices: [
      { key: 'A', text: 'できる。FX の UI でサンプルを選択した後、生成された正規表現を手動で編集できる', isCorrect: true },
      { key: 'B', text: 'できない。FX は自動生成された正規表現のみを使用する', isCorrect: false },
      { key: 'C', text: 'できない。カスタム正規表現は props.conf を直接編集する場合のみ有効', isCorrect: false },
      { key: 'D', text: 'できるが、管理者権限が必要', isCorrect: false },
    ],
    explanation:
      'Field Extractor ではサンプルイベントを選択して自動的に正規表現が生成されますが、生成された正規表現をその後 UI 上で手動編集することもできます。これによりカスタム正規表現を使った精密なフィールド抽出が可能です。',
    reference: 'Splunk Docs: Field Extractor - custom regex',
    difficulty: 'medium',
  },
  {
    id: 'cmf-012',
    domainId: 'creating-managing-fields',
    stem: 'Field Extractor で作成したフィールド抽出は、どのような知識オブジェクトとして保存されるか？',
    choices: [
      { key: 'A', text: 'フィールド抽出（Field Extraction）として Settings > Fields > Field Extractions に保存される', isCorrect: true },
      { key: 'B', text: 'フィールドエイリアスとして保存される', isCorrect: false },
      { key: 'C', text: '計算フィールドとして保存される', isCorrect: false },
      { key: 'D', text: 'マクロとして保存される', isCorrect: false },
    ],
    explanation:
      'Field Extractor (FX) で作成したフィールド抽出は、Splunk の知識オブジェクトとして Settings > Fields > Field Extractions に永続保存されます。ソースタイプや権限の設定も含めて管理されます。',
    reference: 'Splunk Docs: Field extractions as knowledge objects',
    difficulty: 'easy',
  },
  {
    id: 'cmf-013',
    domainId: 'creating-managing-fields',
    stem: '非構造化データ（syslog、アプリケーションログなど）からフィールドを抽出する場合、Field Extractor で推奨されるメソッドはどれか？',
    choices: [
      { key: 'A', text: '正規表現（Regular Expression）メソッド', isCorrect: true },
      { key: 'B', text: 'デリミタ（Delimiter）メソッド', isCorrect: false },
      { key: 'C', text: 'CSV メソッド', isCorrect: false },
      { key: 'D', text: 'JSON メソッド', isCorrect: false },
    ],
    explanation:
      '非構造化データ（syslog のような自由フォーマットのログ）からフィールドを抽出するには正規表現メソッドを使います。デリミタメソッドは CSV や TSV のように区切り文字で整理されたデータ向けです。JSON や XML などの構造化データには専用の設定が用意されています。',
    reference: 'Splunk Docs: Field Extractor - choosing a method',
    difficulty: 'easy',
  },
  {
    id: 'cmf-014',
    domainId: 'creating-managing-fields',
    stem: 'Splunk Web のサーチ結果から Field Extractor を起動するには、どのメニューを使うか？',
    choices: [
      { key: 'A', text: 'イベント詳細の「Event Actions」メニューから「Extract Fields」を選択する', isCorrect: true },
      { key: 'B', text: 'Settings > Data > Data Inputs から起動する', isCorrect: false },
      { key: 'C', text: 'サーチバーの「Search Mode」ドロップダウンから選択する', isCorrect: false },
      { key: 'D', text: 'ダッシュボードの「Edit」モードから起動する', isCorrect: false },
    ],
    explanation:
      'サーチ結果のイベントをクリックして展開し、イベント詳細の「Event Actions」メニューから「Extract Fields」を選択すると Field Extractor が起動します。選択したイベントがサンプルデータとして自動的に読み込まれます。',
    reference: 'Splunk Docs: Getting to the field extractor',
    difficulty: 'easy',
  },
  {
    id: 'cmf-015',
    domainId: 'creating-managing-fields',
    stem: 'Field Extractor で「Preview」ボタンをクリックする目的はどれか？',
    choices: [
      { key: 'A', text: '作成中の正規表現が他のイベントにどのように適用されるかを確認する', isCorrect: true },
      { key: 'B', text: 'フィールド抽出を保存してインデックスに適用する', isCorrect: false },
      { key: 'C', text: 'フィールドの値をグラフで表示する', isCorrect: false },
      { key: 'D', text: '抽出されたフィールドをダッシュボードに追加する', isCorrect: false },
    ],
    explanation:
      'Field Extractor の「Preview」ボタンを使うと、作成した正規表現がサンプルイベント以外の実際のデータにも正しく適用されるかを確認できます。誤抽出がないか確認した上で保存することが重要です。',
    reference: 'Splunk Docs: Field Extractor workflow',
    difficulty: 'easy',
  },
  {
    id: 'cmf-016',
    domainId: 'creating-managing-fields',
    stem: '`rex` コマンドで `mode=sed` オプションを使う目的はどれか？',
    choices: [
      { key: 'A', text: 'sed スタイルの置換式でフィールド値を変換する（フィールド抽出ではなく値の変換）', isCorrect: true },
      { key: 'B', text: '正規表現の構文を sed 形式に切り替える', isCorrect: false },
      { key: 'C', text: 'フィールドを sed という名前で抽出する', isCorrect: false },
      { key: 'D', text: 'セキュリティ強化モードでフィールドを抽出する', isCorrect: false },
    ],
    explanation:
      '`rex mode=sed` は sed の置換コマンド形式（`s/pattern/replacement/flags`）でフィールド値を変換します。例: `| rex mode=sed field=email "s/@.*$/@example.com/"` でメールアドレスのドメインを置換できます。フィールド抽出ではなく値の変換に使います。',
    reference: 'Splunk Docs: rex command - mode=sed',
    difficulty: 'hard',
  },
  {
    id: 'cmf-017',
    domainId: 'creating-managing-fields',
    stem: '`erex` コマンドの説明として正しいのはどれか？',
    choices: [
      { key: 'A', text: 'サンプルイベントの値を例として与えると、Splunk が自動的に正規表現を生成してフィールドを抽出する', isCorrect: true },
      { key: 'B', text: '`rex` の拡張版で、より高速に正規表現を適用できる', isCorrect: false },
      { key: 'C', text: 'フィールドの抽出エラーを無視して処理を継続する', isCorrect: false },
      { key: 'D', text: '外部ファイルの正規表現定義を読み込んで適用する', isCorrect: false },
    ],
    explanation:
      '`erex` は "example-based regular expression" の略で、`examples` オプションに抽出したい値の例を指定すると Splunk が自動的に正規表現を生成します。例: `| erex domain examples="splunk.com,cisco.com"` のように使います。生成された正規表現は `rex` コマンドとして保存できます。',
    reference: 'Splunk Docs: erex command',
    difficulty: 'medium',
  },
  {
    id: 'cmf-018',
    domainId: 'creating-managing-fields',
    stem: 'Field Extractor で作成したフィールド抽出の設定はどこに保存されるか？',
    choices: [
      { key: 'A', text: 'アプリの `transforms.conf` と `props.conf` に保存される', isCorrect: true },
      { key: 'B', text: 'Splunk のデータベースに保存される', isCorrect: false },
      { key: 'C', text: 'インデックスのメタデータとして保存される', isCorrect: false },
      { key: 'D', text: 'ユーザープロファイルの設定ファイルに保存される', isCorrect: false },
    ],
    explanation:
      'Field Extractor で作成したフィールド抽出は `transforms.conf`（正規表現の定義）と `props.conf`（ソースタイプへの適用設定）に自動的に書き込まれます。管理者は手動でこれらのファイルを編集して高度なカスタマイズも可能です。',
    reference: 'Splunk Docs: Use the field extractor to create custom fields',
    difficulty: 'medium',
  },
  {
    id: 'cmf-019',
    domainId: 'creating-managing-fields',
    stem: '`rex` コマンドで同じフィールドから複数の値を抽出する（マルチバリュー）正しい方法はどれか？',
    choices: [
      { key: 'A', text: '`| rex max_match=0 field=_raw "(?P<ip>\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3})"` で `max_match=0` を指定する', isCorrect: true },
      { key: 'B', text: '`| rex` を複数回パイプで繋ぐ', isCorrect: false },
      { key: 'C', text: '`| rex multivalue=true` オプションを使う', isCorrect: false },
      { key: 'D', text: 'デフォルトでマルチバリュー抽出が行われる', isCorrect: false },
    ],
    explanation:
      '`max_match` オプションを `0` にすると、パターンにマッチするすべての値を抽出してマルチバリューフィールドとして格納します。デフォルトの `max_match=1` では最初の1件のみ抽出されます。例えばログ内に複数の IP アドレスが含まれる場合に全て抽出できます。',
    reference: 'Splunk Docs: rex command - max_match option',
    difficulty: 'hard',
  },
  {
    id: 'cmf-020',
    domainId: 'creating-managing-fields',
    stem: 'Splunk の「スキーマオンザリード（schema on the read）」の説明として正しいのはどれか？',
    choices: [
      { key: 'A', text: 'データを取り込む際ではなく、サーチ実行時にフィールドを定義・抽出する仕組み', isCorrect: true },
      { key: 'B', text: 'インデックス時にスキーマを固定してデータを変換する仕組み', isCorrect: false },
      { key: 'C', text: 'データモデルのスキーマをサーチ結果に適用する機能', isCorrect: false },
      { key: 'D', text: 'ルックアップのスキーマをサーチ時に読み込む機能', isCorrect: false },
    ],
    explanation:
      'Splunk は「スキーマオンザリード」アーキテクチャを採用しており、生データをそのままインデックスに格納し、サーチ実行時にフィールドを動的に抽出・定義します。これにより事前にスキーマを決める必要がなく、同じデータから異なるフィールドを後から抽出することができます。',
    reference: 'Splunk Docs: About Splunk schema on the read',
    difficulty: 'medium',
  },
  {
    id: 'cmf-021',
    domainId: 'creating-managing-fields',
    stem: 'IFX（Interactive Field Extractor）の説明として正しいのはどれか？',
    choices: [
      { key: 'A', text: 'サンプルイベントのテキストをハイライトするだけで正規表現を自動生成するGUIツール', isCorrect: true },
      { key: 'B', text: 'インデックス時に起動するバックグラウンドフィールド抽出エンジン', isCorrect: false },
      { key: 'C', text: 'インターネット上のフィールド定義を自動インポートするツール', isCorrect: false },
      { key: 'D', text: 'Field Extractor の旧名称', isCorrect: false },
    ],
    explanation:
      'IFX（Interactive Field Extractor）は Field Extractor の正規表現モードにおける GUI です。サンプルイベントのテキストをクリック・ドラッグしてハイライトすると、Splunk が自動的に正規表現を生成します。正規表現を手書きしなくてもフィールド抽出を定義できます。',
    reference: 'Splunk Docs: IFX - Interactive Field Extractor',
    difficulty: 'easy',
  },
  {
    id: 'cmf-022',
    domainId: 'creating-managing-fields',
    stem: 'Field Extractor で作成したフィールド抽出のパーミッション（共有設定）について正しいのはどれか？',
    choices: [
      { key: 'A', text: 'デフォルトは作成者のみが利用可能で、必要に応じてアプリ全体またはシステム全体に共有できる', isCorrect: true },
      { key: 'B', text: 'デフォルトで全ユーザーに自動公開される', isCorrect: false },
      { key: 'C', text: 'フィールド抽出は常に管理者のみが参照できる', isCorrect: false },
      { key: 'D', text: 'パーミッションの変更は不可能で、作成者専用になる', isCorrect: false },
    ],
    explanation:
      'Field Extractor で作成した知識オブジェクトはデフォルトで「プライベート（自分だけ）」として保存されます。Settings > Fields から作成した抽出を選んで「Permissions」を変更することで、アプリのすべてのユーザーやシステム全体に共有できます。',
    reference: 'Splunk Docs: Manage knowledge object permissions',
    difficulty: 'medium',
  },
  {
    id: 'cmf-023',
    domainId: 'creating-managing-fields',
    stem: '`rex` コマンドでフィールド名に名前付きキャプチャグループを使う正しい正規表現構文はどれか？',
    choices: [
      { key: 'A', text: '`(?P<fieldname>pattern)`', isCorrect: true },
      { key: 'B', text: '`(?<fieldname>pattern)`', isCorrect: false },
      { key: 'C', text: '`(?:fieldname:pattern)`', isCorrect: false },
      { key: 'D', text: '`[fieldname:pattern]`', isCorrect: false },
    ],
    explanation:
      'Splunk の `rex` コマンドで使う正規表現は Python 形式の名前付きキャプチャグループ `(?P<フィールド名>正規表現)` を使います。例: `rex "User: (?P<username>\\w+)"` で "User: john" から "john" を `username` フィールドとして抽出します。',
    reference: 'Splunk Docs: rex command - named groups',
    difficulty: 'medium',
  },
  {
    id: 'cmf-024',
    domainId: 'creating-managing-fields',
    stem: 'Field Extractor の「Delimiter」メソッドで、フィールド名を指定する方法はどれか？',
    choices: [
      { key: 'A', text: 'GUIで各列の列ヘッダーをクリックして名前を入力する', isCorrect: true },
      { key: 'B', text: '最初の行にフィールド名が自動検出される', isCorrect: false },
      { key: 'C', text: '正規表現の名前付きグループで指定する', isCorrect: false },
      { key: 'D', text: 'フィールド名は列番号（field1, field2 等）として自動付与される', isCorrect: false },
    ],
    explanation:
      'デリミタメソッドでは Splunk がデータを区切り文字で分割した後、GUI で各列に名前を入力します。CSV のようなデータで最初の行がヘッダー行の場合は自動的にフィールド名として検出されることもありますが、基本的には GUI での手動入力で指定します。',
    reference: 'Splunk Docs: Field Extractor - Delimiter method',
    difficulty: 'medium',
  },
  {
    id: 'cmf-025',
    domainId: 'creating-managing-fields',
    stem: 'Splunk でフィールドを永続化（サーチのたびに再計算せずに保存する方法）するには何を使うか？',
    choices: [
      { key: 'A', text: 'Field Extractor でフィールド抽出を定義し `props.conf`/`transforms.conf` に保存する', isCorrect: true },
      { key: 'B', text: '`eval` コマンドで計算したフィールドは自動的にインデックスに保存される', isCorrect: false },
      { key: 'C', text: '`outputlookup` コマンドでフィールドをインデックスに書き込む', isCorrect: false },
      { key: 'D', text: 'フィールドを永続化する方法は Splunk には存在しない', isCorrect: false },
    ],
    explanation:
      'Field Extractor で定義したフィールド抽出は `props.conf` と `transforms.conf` に設定として保存されます。これにより同じソースタイプのデータを検索するたびに自動的にフィールドが抽出されます。`eval` はサーチ時の一時的な計算で、インデックスに保存されません。',
    reference: 'Splunk Docs: About fields',
    difficulty: 'medium',
  },
]
