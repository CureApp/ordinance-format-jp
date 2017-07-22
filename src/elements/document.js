// @flow
import Element from './element'
import Article from './article'

import type { PlainElement } from './element'
import type { PlainArticle } from './article'
import type DocumentStructure from '../meta/document-structure'

export type PlainDocument = {
  title: string,
  description: string,
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

  constructor(plain: PlainDocument) {
    this.title = plain.title
    this.description = plain.description
    this.articles = plain.articles ? plain.articles.map(pa => new Article(pa)) : []
    this.timestamps = plain.timestamps || []
  }

  toHtml(docStructure: DocumentStructure, options: HtmlOptions): string {
    return `${this.title}です`
  }
}
