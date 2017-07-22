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
    return tag('h2', this.title, { class: 'FF'})
  }

  // this method should be implemented at Element,
  // but written here to avoid circular dependencies (Element <=> Item)
  constructItems(plainItems?: Array<PlainItem>) {
    this.items = plainItems ? plainItems.map(pItem => new Item(pItem)) : []
  }
}
