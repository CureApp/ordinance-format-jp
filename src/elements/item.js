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
      { class: `item${depth}` }
    )
  }

  toPlainText(ds: DocumentStructure): string {
    const aiueo = 'アイウエオカキクケコサシスセソタチツテトナニヌネノ'.split('')
    const elementNameConverters = [
      (num: number): string => `第${num}条`,
      (num: number): string => `${num}.`,
      (num: number): string => `（${num}）`,
      (num: number): string => `${aiueo[num - 1]}`,
      (num: number): string => `（${aiueo[num - 1]}）`,
      (num: number): string => `の${num}`,
      (num: number): string => `の${num}`,
      (num: number): string => `の${num}`,
      (num: number): string => `の${num}`,
      (num: number): string => `の${num}`,
    ]
    const depth = ds.getDepth(this)
    const num = ds.getNumber(this)
    const spaces = '                 '.slice(0, depth * 2)
    const prefix = elementNameConverters[depth](num)
    const firstLine = spaces + prefix + ' ' + this.statement
    if (this.items.length === 0) {
      return firstLine
    }
    const sub = this.items.map(item => item.toPlainText(ds)).join('\n')
    return [firstLine, sub].join('\n')
  }

  renderItems(ds: DocumentStructure): string {
    if (this.items.length === 0) {
      return ''
    }

    // itemそれぞれに<li>タグをつけて囲む
    const inner = this.items.map(item => tag(
      'li',
      item.toHtml(ds),
      { class: 'subItem' }
    )).join('\n')

    return tag(
      'ol',
      inner,
      { class: 'subItems' }
    )
  }

  // this method should be implemented at Element,
  // but written here to avoid circular dependencies (Element <=> Item)
  constructItems(plainItems?: Array<PlainItem>) {
    this.items = plainItems ? plainItems.map(pItem => new Item(pItem)) : []
  }
}
