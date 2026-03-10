import { Question } from '../types'

export const fieldAliasesCalcFieldsQuestions: Question[] = [
  {
    id: 'fa-001',
    domainId: 'field-aliases-calc-fields',
    stem: 'フィールドエイリアスを作成する主な目的はどれか？',
    choices: [
      { key: 'A', text: '異なるソースタイプで異なる名前を持つ同じ意味のフィールドを統一した名前で検索できるようにする', isCorrect: true },
      { key: 'B', text: 'フィールド名を短くしてサーチを効率化する', isCorrect: false },
      { key: 'C', text: 'フィールドの値を変換する', isCorrect: false },
      { key: 'D', text: 'インデックス時にフィールド名を変換する', isCorrect: false },
    ],
    explanation:
      'フィールドエイリアスはデータ正規化に使います。例えば Apache ログでは `clientip`、nginx ログでは `remote_addr` と呼ばれるフィールドに同じエイリアス `src_ip` を付けることで、`src_ip` で両方のソースタイプを一括検索できます。',
    reference: 'Splunk Docs: About field aliases',
    difficulty: 'easy',
  },
  {
    id: 'fa-002',
    domainId: 'field-aliases-calc-fields',
    stem: 'フィールドエイリアスを作成した後、元のフィールドはどうなるか？',
    choices: [
      { key: 'A', text: '元のフィールドはそのまま残り、エイリアス名でも同じ値にアクセスできる', isCorrect: true },
      { key: 'B', text: '元のフィールドは削除され、エイリアス名に置き換えられる', isCorrect: false },
      { key: 'C', text: '元のフィールドは非表示になるが存在は続ける', isCorrect: false },
      { key: 'D', text: '元のフィールドの値がエイリアスにコピーされ、元は null になる', isCorrect: false },
    ],
    explanation:
      'フィールドエイリアスは「別名」なので、元のフィールド（例: `clientip`）は残り、エイリアス（例: `src_ip`）でも同じ値にアクセスできます。`rename` コマンドとは異なり、元フィールドは削除されません。',
    reference: 'Splunk Docs: About field aliases',
    difficulty: 'easy',
  },
  {
    id: 'fa-003',
    domainId: 'field-aliases-calc-fields',
    stem: 'フィールドエイリアスは Settings のどこで作成するか？',
    choices: [
      { key: 'A', text: 'Settings > Fields > Field aliases', isCorrect: true },
      { key: 'B', text: 'Settings > Knowledge > Tags', isCorrect: false },
      { key: 'C', text: 'Settings > Data > Field Extractions', isCorrect: false },
      { key: 'D', text: 'Settings > Searches > Calculated Fields', isCorrect: false },
    ],
    explanation:
      'フィールドエイリアスは Settings > Fields > Field aliases から作成します。ソースタイプ（またはホスト・ソース）に紐付けて、元のフィールド名とエイリアス名のマッピングを定義します。',
    reference: 'Splunk Docs: Create field aliases',
    difficulty: 'easy',
  },
  {
    id: 'fa-004',
    domainId: 'field-aliases-calc-fields',
    stem: '計算フィールド（Calculated Field）は何をするのか？',
    choices: [
      { key: 'A', text: '`eval` 式の結果を毎回自動的に適用し、検索結果に新しいフィールドとして追加する', isCorrect: true },
      { key: 'B', text: 'インデックス時にフィールドを計算して保存する', isCorrect: false },
      { key: 'C', text: '既存フィールドの名前を変更する', isCorrect: false },
      { key: 'D', text: 'フィールドの値を暗号化して保護する', isCorrect: false },
    ],
    explanation:
      '計算フィールドは `eval` 式を保存した知識オブジェクトで、そのソースタイプのデータを検索するたびに自動的に適用されます。例: `bytes` フィールドから `kb = round(bytes/1024, 2)` を毎回自動計算します。',
    reference: 'Splunk Docs: About calculated fields',
    difficulty: 'medium',
  },
  {
    id: 'fa-005',
    domainId: 'field-aliases-calc-fields',
    stem: '計算フィールドは Settings のどこで作成するか？',
    choices: [
      { key: 'A', text: 'Settings > Fields > Calculated Fields', isCorrect: true },
      { key: 'B', text: 'Settings > Knowledge > Field Extractions', isCorrect: false },
      { key: 'C', text: 'Settings > Fields > Field Aliases', isCorrect: false },
      { key: 'D', text: 'Settings > Advanced Search > Macros', isCorrect: false },
    ],
    explanation:
      '計算フィールドは Settings > Fields > Calculated Fields で作成します。ソースタイプに紐付けて `eval` 式を定義します。定義したフィールドは対象ソースタイプのデータに自動的に追加されます。',
    reference: 'Splunk Docs: Create calculated fields',
    difficulty: 'easy',
  },
  {
    id: 'fa-006',
    domainId: 'field-aliases-calc-fields',
    stem: '計算フィールドで使える関数の制限として正しいのはどれか？',
    choices: [
      { key: 'A', text: '`eval` コマンドで使用できる関数であれば何でも使える', isCorrect: true },
      { key: 'B', text: '数値計算関数のみ使用できる', isCorrect: false },
      { key: 'C', text: '文字列関数は使用できない', isCorrect: false },
      { key: 'D', text: '他のフィールドを参照することはできない', isCorrect: false },
    ],
    explanation:
      '計算フィールドの式は `eval` コマンドと同じ関数・演算子が使えます。数値演算（`round`, `abs`）、文字列操作（`upper`, `len`）、条件分岐（`if`, `case`）など、`eval` でサポートされるすべての関数が利用可能です。',
    reference: 'Splunk Docs: Calculated fields',
    difficulty: 'medium',
  },
  {
    id: 'fa-007',
    domainId: 'field-aliases-calc-fields',
    stem: 'フィールドエイリアスと `rename` コマンドの主な違いはどれか？',
    choices: [
      { key: 'A', text: 'フィールドエイリアスは永続的な知識オブジェクトで元フィールドを保持し、`rename` はサーチ内でのみ有効で元フィールドが消える', isCorrect: true },
      { key: 'B', text: '`rename` は永続的な設定で、フィールドエイリアスはサーチ内のみ有効', isCorrect: false },
      { key: 'C', text: 'どちらも同じ機能で使い方が異なるだけ', isCorrect: false },
      { key: 'D', text: 'フィールドエイリアスはインデックス時に適用され、`rename` は検索時のみ', isCorrect: false },
    ],
    explanation:
      'フィールドエイリアスは Settings に保存される知識オブジェクトで、すべての検索に自動適用されます。元のフィールドも残ります。`rename` コマンドはそのサーチのみで有効で、元フィールドが新しい名前に変わります（元の名前は消えます）。',
    reference: 'Splunk Docs: Field aliases vs rename command',
    difficulty: 'medium',
  },
  {
    id: 'fa-008',
    domainId: 'field-aliases-calc-fields',
    stem: '計算フィールドの知識オブジェクトが適用されるタイミングはどれか？',
    choices: [
      { key: 'A', text: '検索時（サーチ実行時）にフィールドが動的に計算・追加される', isCorrect: true },
      { key: 'B', text: 'インデックス時にデータが保存される際に計算される', isCorrect: false },
      { key: 'C', text: 'データ取り込み時にフォワーダーで計算される', isCorrect: false },
      { key: 'D', text: 'ダッシュボード表示時のみ計算される', isCorrect: false },
    ],
    explanation:
      'フィールドエイリアスや計算フィールドは検索時（サーチタイム）に適用されます。インデックスに保存されるデータは変更されません。これが Splunk の「Late Binding Schema（遅延スキーマ）」の特徴です。',
    reference: 'Splunk Docs: Late binding schema',
    difficulty: 'medium',
  },
  {
    id: 'fa-009',
    domainId: 'field-aliases-calc-fields',
    stem: '計算フィールド（Calculated Field）は何をベースに作成する必要があるか？',
    choices: [
      { key: 'A', text: '既存の抽出フィールドに基づいて作成する', isCorrect: true },
      { key: 'B', text: 'インデックスに保存された生データに基づいて作成する', isCorrect: false },
      { key: 'C', text: '他の計算フィールドをベースに作成することはできない', isCorrect: false },
      { key: 'D', text: 'タグやイベントタイプをベースに作成する', isCorrect: false },
    ],
    explanation:
      '計算フィールドは既存の抽出フィールドを使って eval 式で計算を行います。例: `bytes` フィールドが既に抽出されていれば、`kb = round(bytes/1024, 2)` という計算フィールドを作れます。抽出フィールドが存在しない場合、計算フィールドの式が機能しません。',
    reference: 'Splunk Docs: About calculated fields',
    difficulty: 'medium',
  },
  {
    id: 'fa-010',
    domainId: 'field-aliases-calc-fields',
    stem: 'フィールドエイリアスは、どのオブジェクトに対して適用できるか？',
    choices: [
      { key: 'A', text: 'ソースタイプ（sourcetype）に対して適用する', isCorrect: true },
      { key: 'B', text: 'インデックスに対して適用する', isCorrect: false },
      { key: 'C', text: 'タグに対して適用する', isCorrect: false },
      { key: 'D', text: 'イベントタイプに対して適用する', isCorrect: false },
    ],
    explanation:
      'フィールドエイリアスはソースタイプ（sourcetype）に対して適用します。例: sourcetype=access_combined に対して `clientip` → `src_ip` というエイリアスを定義します。インデックス、タグ、イベントタイプに直接適用することはできません。',
    reference: 'Splunk Docs: About field aliases',
    difficulty: 'medium',
  },
  {
    id: 'fa-011',
    domainId: 'field-aliases-calc-fields',
    stem: 'フィールドエイリアスの「Overwrite field」チェックボックスを有効にした場合、何が起こるか？',
    choices: [
      { key: 'A', text: 'エイリアス先フィールド（新しい名前）の既存の値がエイリアス元フィールドの値で上書きされる', isCorrect: true },
      { key: 'B', text: '元のフィールドが削除される', isCorrect: false },
      { key: 'C', text: 'エイリアスが他のエイリアスを上書きする優先度が上がる', isCorrect: false },
      { key: 'D', text: '両フィールドが新しいフィールド名に統合される', isCorrect: false },
    ],
    explanation:
      '「Overwrite field」を有効にすると、エイリアス先フィールド（マッピング先の名前）に既に値が存在する場合でも、エイリアス元フィールドの値で上書きされます。例: `field1` → `field2` というエイリアスで Overwrite を有効にすると、field2 の既存の値が field1 の値に置き換えられます。',
    reference: 'Splunk Docs: Field alias - Overwrite field option',
    difficulty: 'hard',
  },
  {
    id: 'fa-012',
    domainId: 'field-aliases-calc-fields',
    stem: 'フィールドエイリアスを参照（利用）できる知識オブジェクトはどれか？',
    choices: [
      { key: 'A', text: '計算フィールド、ルックアップ、イベントタイプ、タグ', isCorrect: true },
      { key: 'B', text: '計算フィールドのみ', isCorrect: false },
      { key: 'C', text: 'ルックアップとタグのみ', isCorrect: false },
      { key: 'D', text: 'フィールドエイリアスは他の知識オブジェクトから参照できない', isCorrect: false },
    ],
    explanation:
      'フィールドエイリアスが定義されると、そのエイリアス名は計算フィールド（eval 式の中で参照）、ルックアップ定義（Input field として使用）、イベントタイプ（サーチ条件の中で使用）、タグ（フィールド値のタグ付け）から参照できます。',
    reference: 'Splunk Docs: About field aliases',
    difficulty: 'hard',
  },
  {
    id: 'fa-013',
    domainId: 'field-aliases-calc-fields',
    stem: '同じフィールドに2つの異なるソースタイプでフィールドエイリアスを作成する場合、どのように設定するか？',
    choices: [
      { key: 'A', text: 'ソースタイプごとに個別に2つの別々なエイリアスを作成する', isCorrect: true },
      { key: 'B', text: '1つのエイリアスに複数のソースタイプをカンマ区切りで指定できる', isCorrect: false },
      { key: 'C', text: 'ソースタイプをワイルドカードで指定して1つのエイリアスをまとめて作成できる', isCorrect: false },
      { key: 'D', text: 'フィールドエイリアスは1つのフィールドに1つしか作成できない', isCorrect: false },
    ],
    explanation:
      'フィールドエイリアスはソースタイプごとに1つずつ定義します。例えば sourcetype=syslog と sourcetype=cisco_asa の両方に同じエイリアスを付けたい場合、それぞれのソースタイプに対して別々のエイリアスを2つ作成する必要があります。',
    reference: 'Splunk Docs: Create field aliases',
    difficulty: 'medium',
  },
  {
    id: 'fa-014',
    domainId: 'field-aliases-calc-fields',
    stem: 'フィールドエイリアスがルックアップ定義で使われる場面はどれか？',
    choices: [
      { key: 'A', text: 'ルックアップの Input field として、エイリアス名をキーフィールドに指定することでデータ正規化後のルックアップが機能する', isCorrect: true },
      { key: 'B', text: 'ルックアップのOutput fieldにエイリアスを指定してフィールド名を変換する', isCorrect: false },
      { key: 'C', text: 'ルックアップテーブルの列名としてエイリアスを定義する', isCorrect: false },
      { key: 'D', text: 'フィールドエイリアスはルックアップとは独立して動作する', isCorrect: false },
    ],
    explanation:
      'フィールドエイリアスによって正規化されたフィールド名をルックアップの Input field（照合キー）として使用できます。例: 異なるソースタイプで `src_ip` エイリアスを定義しておけば、`src_ip` をキーとするルックアップが複数のソースタイプ横断で機能します。',
    reference: 'Splunk Docs: Field aliases in lookup definitions',
    difficulty: 'hard',
  },
  {
    id: 'fa-015',
    domainId: 'field-aliases-calc-fields',
    stem: '計算フィールドは Settings のどのメニューで作成するか？',
    choices: [
      { key: 'A', text: 'Settings > Fields > Calculated Fields', isCorrect: true },
      { key: 'B', text: 'Settings > Knowledge > Macros', isCorrect: false },
      { key: 'C', text: 'Settings > Fields > Field Aliases', isCorrect: false },
      { key: 'D', text: 'Settings > Advanced Search > Calculated Fields', isCorrect: false },
    ],
    explanation:
      '計算フィールドは Settings > Fields > Calculated Fields から作成します。作成時にアプリのコンテキスト、対象ソースタイプ、フィールド名（Name）、eval 式（Eval Expression）を設定します。保存後、対象ソースタイプのデータを検索するたびに自動的に適用されます。',
    reference: 'Splunk Docs: Create calculated fields',
    difficulty: 'easy',
  },
  {
    id: 'fa-016',
    domainId: 'field-aliases-calc-fields',
    stem: '計算フィールドとサーチ時の `eval` コマンドの最大の違いはどれか？',
    choices: [
      { key: 'A', text: '計算フィールドは知識オブジェクトとして永続化され、すべてのサーチに自動適用される。`eval` は単一サーチのみ有効', isCorrect: true },
      { key: 'B', text: '計算フィールドは `eval` より高速に動作する', isCorrect: false },
      { key: 'C', text: '`eval` コマンドは新しいフィールドを作成できないが、計算フィールドはできる', isCorrect: false },
      { key: 'D', text: '計算フィールドはインデックスに書き込まれ、`eval` はメモリ上のみ', isCorrect: false },
    ],
    explanation:
      '計算フィールドは Settings で一度定義すると、そのソースタイプのデータを検索するたびに自動的に適用されます。`eval` は書いたサーチの中だけで有効な一時的な計算です。繰り返し使う計算式は計算フィールドとして保存することで再利用性が高まります。',
    reference: 'Splunk Docs: Create calculated fields',
    difficulty: 'medium',
  },
  {
    id: 'fa-017',
    domainId: 'field-aliases-calc-fields',
    stem: 'フィールドエイリアスと `rename` コマンドの違いとして正しいのはどれか？',
    choices: [
      { key: 'A', text: 'フィールドエイリアスは元フィールドを保持するが、`rename` は元フィールドを削除する', isCorrect: true },
      { key: 'B', text: '`rename` は知識オブジェクトとして保存でき、フィールドエイリアスは一時的', isCorrect: false },
      { key: 'C', text: 'フィールドエイリアスはサーチ時にのみ機能し、インデックス時には効果がない（`rename` と同じ）', isCorrect: false },
      { key: 'D', text: '両者に機能的な違いはない', isCorrect: false },
    ],
    explanation:
      'フィールドエイリアスは「別名を追加」する機能で、元のフィールド（例: `clientip`）は残ったままエイリアス（例: `src_ip`）でも参照できます。`rename` コマンドはサーチ中にフィールド名を変更し、元の名前では参照できなくなります。',
    reference: 'Splunk Docs: Field aliases vs rename',
    difficulty: 'medium',
  },
  {
    id: 'fa-018',
    domainId: 'field-aliases-calc-fields',
    stem: '計算フィールドで使える式として正しいのはどれか？',
    choices: [
      { key: 'A', text: '`eval` 関数（if、case、round など）を含む任意の eval 式', isCorrect: true },
      { key: 'B', text: '算術演算（+、-、*、/）のみ使用可能', isCorrect: false },
      { key: 'C', text: '文字列操作（upper、lower など）は使用不可', isCorrect: false },
      { key: 'D', text: 'フィールド同士の参照のみで、関数は使用不可', isCorrect: false },
    ],
    explanation:
      '計算フィールドの「Eval Expression」には通常の `eval` コマンドで使えるすべての関数や演算子を使えます。例: `if(status==200, "OK", "Error")`、`round(bytes/1024, 2)`、`upper(username)` など。これにより柔軟な値の計算・変換が可能です。',
    reference: 'Splunk Docs: Calculated fields eval expressions',
    difficulty: 'easy',
  },
  {
    id: 'fa-019',
    domainId: 'field-aliases-calc-fields',
    stem: '複数のソースタイプで同じ意味のフィールドに同じエイリアスを付けたい場合、正しいアプローチはどれか？',
    choices: [
      { key: 'A', text: '各ソースタイプに対して個別にフィールドエイリアスを作成する', isCorrect: true },
      { key: 'B', text: '1つのエイリアス定義を作成し複数ソースタイプに同時適用する', isCorrect: false },
      { key: 'C', text: 'フィールドエイリアスはソースタイプをまたいで適用できないため不可能', isCorrect: false },
      { key: 'D', text: 'デフォルトのソースタイプ（*）に対してエイリアスを1つ作成する', isCorrect: false },
    ],
    explanation:
      'フィールドエイリアスはソースタイプ（または host や source）ごとに定義します。3種類のソースタイプで同じエイリアスを使いたい場合、3つのエイリアス定義を作成する必要があります。`props.conf` では各ソースタイプのスタンザに個別に設定します。',
    reference: 'Splunk Docs: Create field aliases',
    difficulty: 'medium',
  },
  {
    id: 'fa-020',
    domainId: 'field-aliases-calc-fields',
    stem: 'フィールドエイリアスを設定する際、Settings のどのメニューを使うか？',
    choices: [
      { key: 'A', text: 'Settings > Fields > Field Aliases', isCorrect: true },
      { key: 'B', text: 'Settings > Knowledge > Tags', isCorrect: false },
      { key: 'C', text: 'Settings > Advanced Search > Field Aliases', isCorrect: false },
      { key: 'D', text: 'Settings > Data > Data Models', isCorrect: false },
    ],
    explanation:
      'フィールドエイリアスは Settings > Fields > Field Aliases から作成します。作成時にアプリコンテキスト、適用先（ソースタイプ/host/source）、既存フィールド名（Existing field name）、新しいエイリアス名（Field alias）を設定します。',
    reference: 'Splunk Docs: Create field aliases',
    difficulty: 'easy',
  },
  {
    id: 'fa-021',
    domainId: 'field-aliases-calc-fields',
    stem: '計算フィールドはサーチパイプラインの処理順序においてどのタイミングで適用されるか？',
    choices: [
      { key: 'A', text: 'フィールド抽出と同じフェーズ（サーチコマンドの前）に自動適用される', isCorrect: true },
      { key: 'B', text: 'サーチの最後、`table` や `stats` の後に適用される', isCorrect: false },
      { key: 'C', text: 'インデックス書き込み時に適用される', isCorrect: false },
      { key: 'D', text: '`eval` コマンドを明示的に書いたときのみ適用される', isCorrect: false },
    ],
    explanation:
      '計算フィールドはフィールド抽出と同じタイミングで自動的に適用されます。つまりサーチの最初の段階でデータが取得された時点でフィールドが生成されます。そのため後続のコマンド（`stats`、`where` など）で計算フィールドをそのまま参照できます。',
    reference: 'Splunk Docs: Calculated fields',
    difficulty: 'hard',
  },
  {
    id: 'fa-022',
    domainId: 'field-aliases-calc-fields',
    stem: '`props.conf` でフィールドエイリアスを手動で設定する際の正しい記述はどれか？',
    choices: [
      { key: 'A', text: '[sourcetype_name] セクションに `FIELDALIAS-<name> = original_field AS alias_field` と記述する', isCorrect: true },
      { key: 'B', text: '[sourcetype_name] セクションに `ALIAS-<name> = original_field = alias_field` と記述する', isCorrect: false },
      { key: 'C', text: '`transforms.conf` の `[field_alias]` セクションに記述する', isCorrect: false },
      { key: 'D', text: '`fields.conf` にエイリアスのマッピングを記述する', isCorrect: false },
    ],
    explanation:
      '`props.conf` でフィールドエイリアスを手動設定するには `FIELDALIAS-<任意の名前> = 元のフィールド名 AS エイリアス名` の形式で記述します。複数のエイリアスを同じ行に書く場合はスペースで区切ります。例: `FIELDALIAS-ip = clientip AS src_ip remote_addr AS src_ip`',
    reference: 'Splunk Docs: props.conf - FIELDALIAS',
    difficulty: 'hard',
  },
  {
    id: 'fa-023',
    domainId: 'field-aliases-calc-fields',
    stem: 'CIM（Common Information Model）でフィールドエイリアスが重要な理由として正しいのはどれか？',
    choices: [
      { key: 'A', text: '異なるベンダーのデータを CIM の標準フィールド名に正規化するために使われる', isCorrect: true },
      { key: 'B', text: 'CIM データモデルの加速（Acceleration）に使用される', isCorrect: false },
      { key: 'C', text: 'CIM のルックアップテーブルを参照するために必要', isCorrect: false },
      { key: 'D', text: 'フィールドエイリアスは CIM とは無関係', isCorrect: false },
    ],
    explanation:
      'CIM は `src`、`dest`、`user` などの標準フィールド名を定義しています。ベンダーの TA（Technology Add-On）は各製品固有のフィールド名（例: `clientip`、`remote_addr`）を CIM の標準名にマッピングするためにフィールドエイリアスを広く使用します。これにより複数のデータソースを横断した統一的な分析が可能になります。',
    reference: 'Splunk Docs: CIM and field aliases',
    difficulty: 'medium',
  },
  {
    id: 'fa-024',
    domainId: 'field-aliases-calc-fields',
    stem: '計算フィールドで既存フィールドと同じ名前を指定した場合、どうなるか？',
    choices: [
      { key: 'A', text: '計算フィールドの値が既存フィールドの値を上書きする', isCorrect: true },
      { key: 'B', text: 'エラーになる（既存フィールド名は使用不可）', isCorrect: false },
      { key: 'C', text: '2つのフィールドが共存し、マルチバリューフィールドになる', isCorrect: false },
      { key: 'D', text: '既存フィールドが優先され、計算フィールドは無視される', isCorrect: false },
    ],
    explanation:
      '計算フィールドで既存フィールドと同じ名前を使うと、計算フィールドの値（eval 式の結果）が既存フィールドの値を上書きします。`eval` コマンドで同名フィールドに値を代入するのと同じ動作です。',
    reference: 'Splunk Docs: Calculated fields',
    difficulty: 'medium',
  },
  {
    id: 'fa-025',
    domainId: 'field-aliases-calc-fields',
    stem: 'フィールドエイリアスが適用されるデータの対象として正しいのはどれか？',
    choices: [
      { key: 'A', text: '新規取り込みデータと既存インデックスデータの両方に適用される（サーチ時に動的適用）', isCorrect: true },
      { key: 'B', text: 'エイリアス作成後に取り込まれた新規データにのみ適用される', isCorrect: false },
      { key: 'C', text: 'エイリアス作成時点でインデックスを再作成（re-index）する必要がある', isCorrect: false },
      { key: 'D', text: '指定したインデックスのデータにのみ適用される', isCorrect: false },
    ],
    explanation:
      'フィールドエイリアスはサーチ時に動的に適用されるため、エイリアスを作成する前にインデックスされたデータにも遡及して適用されます。インデックスの再作成（re-index）は不要です。これがサーチ時に適用される知識オブジェクトの大きなメリットです。',
    reference: 'Splunk Docs: About field aliases',
    difficulty: 'medium',
  },
]
