// @flow
import Item from './item'
import type { PlainItem } from './item'

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
    this.items = plain.items ? plain.items.map(pItem => new Item(pItem)) : []
    this.appendix = plain.appendix || ''
  }
}
