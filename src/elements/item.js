// @flow

import Element from './element'
import type { PlainElement } from './element'

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

  // this method should be implemented at Element,
  // but written here to avoid circular dependencies (Element <=> Item)
  constructItems(plainItems?: Array<PlainItem>) {
    this.items = plainItems ? plainItems.map(pItem => new Item(pItem)) : []
  }
}
