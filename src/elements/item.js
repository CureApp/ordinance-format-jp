// @flow

import Element from './element'
import tag from '../utils/tag'

import type { PlainElement } from './element'
import type DocumentStructure from '../meta/document-structure'

export type PlainItem = {
    statement?: string,
} & PlainElement

/**
 * 項、およびそれ以下の概念
 */
export default class Item extends Element {
  statement: string

  constructor(plain: PlainItem) {
    super(plain)
    this.statement = plain.statement
  }

  toHtml(ds: DocumentStructure): string {
    const num = ds.getNumber(this)
    const depth = ds.getDepth(this)

    // 文
    const statement = tag(
      'div',
      this.statement,
      { class: 'statement'}
    )
    const itemsHtml = this.renderItems(ds)
    const appendix = this.renderAppendix()

    return tag(
      'div',
      [statement, itemsHtml, appendix].join('\n'),
      { class: `item${depth}` },
      true // no escape
    )
  }

  renderItems(ds: DocumentStructure): string {
    if (this.items.length === 0) {
      return ''
    }

    // itemそれぞれに<li>タグをつけて囲む
    const inner = this.items.map(item => tag(
      'li',
      item.toHtml(ds),
      { class: 'subItem' },
      true // no escape
    )).join('\n')

    return tag(
      'ol',
      inner,
      { class: 'subItems' },
      true
    )
  }

  // this method should be implemented at Element,
  // but written here to avoid circular dependencies (Element <=> Item)
  constructItems(plainItems?: Array<PlainItem>) {
    this.items = plainItems ? plainItems.map(pItem => new Item(pItem)) : []
  }
}
