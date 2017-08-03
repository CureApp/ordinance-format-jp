# 公文書、規則メーカー
公文書や規則用の目的で記載したMarkdown形式のテキストを、公文書のスタイルの整ったHTMLに変換するもの。

# できあがりの文書例



# インストール
```sh
npm install -g legal-doc-format-jp
```

# 使い方
```sh
legal-doc-format-jp <markdown file>
```

標準出力にHTMLが吐き出されます


# オプション
- `--nostyle`: styleタグをつけず、HTML構造のみ出力します。
- `--elementId <elementId>`: トップレベルのdivタグのid名です。

# Markdownの記載ルール
- 文書のタイトル ```#```
- 条 ```##```
- 項
  - 項が1つである場合、頭に数字がつきません。
  - 複数存在する場合は、各項の頭に ```数字.``` すると各項が上から順に番号がふられ出力されます。
  - 入れ子にすることにより、より項の中に項が入れ子に出力出来ます。

- ラベルと参照
  - ラベルと参照機能は、各条項の頭にラベルとしてキーを設定し、同じキーを各条項の文中に用いることで参照することができる機能です。
    - ラベル、参照いずれも ```someKey``` で利用できますが、文頭で参照したい場合は必ず ```$someKey``` のようにキーの頭に ```$``` をつけてください。


# JavaScript API
```js
const legalDocJp = require('legal-doc-format-jp')
const markdownText = require('fs').readFileSync('/path/to/somefile.md', 'utf8')
const html = legalDocJp(markdownText, { standalone: true, elementId: 'foo-bar' }) // rendered html
```
