// @flow
import Element from './element'
import Article from './article'
import tag from '../utils/tag'
import style from '../styles/style.css'

import type { PlainElement } from './element'
import type { PlainArticle } from './article'
import type DocumentStructure from '../meta/document-structure'

export type PlainDocument = {
  title?: string,
  description?: string,
  articles?: Array<PlainArticle>,
  timestamps?: Array<string>,
}

export type HtmlOptions = {
  standalone?: boolean, // 単体でHTMLとして完結させるか
  elementId?: string, // トップレベル要素のid デフォルトは 'ordinance-format-jp'
}

/**
 * 文書
 *
 * 文書は1つの「概要」を含む
 * 文書は複数の条を含む
 * 複数のタイムスタンプを含む
 *
 * メタ情報として、ラベル一覧、および各elementの座標の解決も行う
 */
export default class Document {
  title: string
  description: string
  articles: Array<Article>
  timestamps: Array<string>

  constructor(plain?: PlainDocument) {
    const p = plain || {}
    this.title = p.title || ''
    this.description = p.description || ''
    this.articles = p.articles ? p.articles.map(pa => new Article(pa)) : []
    this.timestamps = p.timestamps || []
  }

  toHtml(ds: DocumentStructure, options: HtmlOptions): string {
    const elementId = options.elementId || 'ordinance-format-jp'
    const h1 = tag(
      'h1',
      this.title,
      { class: 'documentTitle' },
    )

    const description = tag(
      'div',
      this.description,
      { class: 'documentDescription' },
    )

    const articles = this.articles.map(article => article.toHtml(ds)).join('\n')
    const footer = this.renderTimestamps()

    const htmlWithoutLabelLinks = tag(
      'div',
      [h1, description, articles, footer].join('\n'),
      { id: elementId, class: 'ordinance-format-jp' }
    )

    const html = this.resolveLabels(htmlWithoutLabelLinks, ds)

    if (!options.standalone) {
      return html
    }
    // $FlowIssue(css-is-string)
    return `<html><head><style>\n${style}</style><body>\n${html}</body></html>`
  }

  toPlainText(ds: DocumentStructure): string {

    const articles = this.articles.map(article => article.toPlainText(ds)).join('\n\n')
    const footer = this.timestamps.map(ts => `  ` + ts).join('\n')
    return [this.title, this.description, articles, footer].join('\n\n')
  }

  renderTimestamps(): string {
    const inner = this.timestamps.map(ts => tag(
      'li',
      ts,
      { class: 'timestamp' }
    )).join('\n')

    return tag(
      'ol',
      inner,
      { class: 'timestamps' }
    )
  }

  resolveLabels(html: string, ds: DocumentStructure): string {
    return html.replace(/`\$?([^`]+)` */g, (x, label) => {
      try {
        return ds.getElementNameByLabel(label)
      }
      catch (e) {
        throw new Error(`不明なラベル: ${label}`)
      }
    })
  }
}
