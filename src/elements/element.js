// @flow
import type Item, { PlainItem } from './item'

export type PlainElement = {
  id: string,
  labelName?: string,
  items?: Array<PlainItem>,
  appendix?: string,
}

/**
 * 条 または 項
 * elementは下位のItemを配列で持つ
 */
export default class Element {
  id: string
  labelName: string
  items: Array<Item>
  appendix: string

  constructor(plain: PlainElement) {
    this.id = plain.id
    this.labelName = plain.labelName || ''
    this.appendix = plain.appendix || ''
    this.constructItems(plain.items)
  }

  // template method to avoid circular dependencies (Item <=> Element)
  constructItems() {
    throw new Error('implement constructItems() method')
  }
}
