// @flow
import Document from '../elements/document'
import type Element from '../elements/element'

function appendElements(ds: DocumentStructure, el: Element, num: number, depth: number) {
  ds.elementsById[el.id] = el
  ds.numbersById[el.id] = num
  ds.depthsById[el.id] = depth
  if (el.labelName) {
    ds.elementsByLabel[el.labelName] = el
  }
  el.items.forEach((item, i) => appendElements(ds, item, i + 1, depth + 1))
}

/**
 * 文書構造
 */
export default class DocumentStructure {
  elementsById: { [id: string]: Element }
  elementsByLabel: { [label: string]: Element }
  numbersById: { [id: string]: number }
  depthsById: { [id: string]: number }

  constructor(doc: Document) {
    doc.articles.forEach((article, i) => appendElements(this, article, i + 1, 0))
  }

  getNumber(el: Element): number {
    return this.numbersById[el.id]
  }

  getDepth(el: Element): number {
    return this.depthsById[el.id]
  }
}
