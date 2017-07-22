// @flow

import Element from './element'
import type { PlainElement } from './element'

export type PlainArticle = {
  title: string
} & PlainElement

/**
 * 条
 */
export default class Article extends Element {
  title: string

  constructor(plain: PlainArticle) {
    super(plain)
    this.title = plain.title
  }
}
