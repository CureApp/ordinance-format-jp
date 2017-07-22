// @flow
import type Item, { PlainItem } from './item'

export type PlainElement = {
  id: string,
  tagName: string,
  items: Array<PlainItem>,
  appendix: string,
}

/**
 * 条 または 項
 * elementは下位のItemを配列で持つ
 */
export default class Element {
  id: string
  tagName: string
  items: Array<Item>
  appendix: string
}
