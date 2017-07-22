// @flow
import Element from './element'
import Article from './article'
import tag from '../utils/tag'

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
  withStyle?: boolean
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
    const h1 = tag(
      'h1',
      this.title,
      { class: 'documentTitle' },
    )

    const description = tag(
      'h1',
      this.description,
      { class: 'documentDescription' },
    )

    const articles = this.articles.map(article => article.toHtml(ds)).join('¥n')
    const footer = this.renderTimestamps()

    const html = [h1, description, articles, footer].join('¥n')
    return this.resolveLabels(html, ds)
  }

  renderTimestamps(): string {
    const inner = this.timestamps.map(ts => tag(
      'li',
      ts,
      { class: 'timestamp' }
    )).join('¥n')

    return tag(
      'ol',
      inner,
      { class: 'timestamps' },
      true
    )
  }

  resolveLabels(html: string, ds: DocumentStructure): string {
    return html.replace(/`[^`]+/g, label => ds.getElementNameByLabel(label))
  }
}
