// @flow

import Element from './element'
import Item from './item'
import tag from '../utils/tag'
import type { PlainElement } from './element'
import type { PlainItem } from './item'
import type DocumentStructure from '../meta/document-structure'

export type PlainArticle = {
  title?: string
} & PlainElement

/**
 * 条
 */
export default class Article extends Element {
  title: string

  constructor(plain: PlainArticle) {
    super(plain)
    this.title = plain.title || ''
  }

  toHtml(ds: DocumentStructure): string {
    const num = ds.getNumber(this)

    // タイトル部
    const h2 = tag(
      'h2',
      `第${num}条 ${this.title}`,
      { class: 'articleTitle'}
    )

    const itemsHtml = this.renderItems(ds)
    const appendix = this.renderAppendix()

    return tag(
      'div',
      [h2, itemsHtml, appendix].join('\n'),
      { class: 'article' },
      true // no escape
    )
  }

  renderItems(ds: DocumentStructure): string {
    if (this.items.length === 0) {
      return ''
    }

    // 項が1つだけなら、<ol>ではなく<div>で囲む
    if (this.items.length === 1) {
      return tag(
        'div',
        this.items[0].toHtml(ds),
        { class: 'articleItems' },
        true // no escape
      )
    }

    // itemそれぞれに<li>タグをつけて囲む
    const inner = this.items.map(item => tag(
      'li',
      item.toHtml(ds),
      { class: 'articleItem' },
      true // no escape
    )).join('\n')

    return tag(
      'ol',
      inner,
      { class: 'articleItems' },
      true
    )
  }

  // this method should be implemented at Element,
  // but written here to avoid circular dependencies (Element <=> Item)
  constructItems(plainItems?: Array<PlainItem>) {
    this.items = plainItems ? plainItems.map(pItem => new Item(pItem)) : []
  }
}
