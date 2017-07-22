// @flow
export type PlainLabel = {
  name: string,
  elementId: string,
}

/**
 * ラベル
 */
export default class Label {
  name: string
  elementId: string

  constructor(plain: PlainLabel) {
    this.name = plain.name
    this.elementId = plain.elementId
  }
}
