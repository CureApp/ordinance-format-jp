# 公文書、規則メーカー
公文書や規則用の目的で記載したMarkdown形式のテキストを、公文書のスタイルの整ったHTMLに変換するもの。

# できあがりの文書例


# インストール
```sh
npm install -g legal-doc-jp
```

# 使い方
```sh
legal-doc-jp <markdown file>
```

標準出力にHTMLが吐き出されます


# オプション
- `--nostyle`: styleタグをつけず、HTML構造のみ出力します。
- `--elementId <elementId>`: トップレベルのdivタグのid名です。

# Markdownの記載ルール


# JavaScript API
```js
const legalDocJp = require('legal-doc-jp')
const markdownText = require('fs').readFileSync('/path/to/somefile.md', 'utf8')
const html = legalDocJp(markdownText, { standalone: true, elementId: 'foo-bar' }) // rendered html
```
