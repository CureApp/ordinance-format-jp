// @flow
import Document from '../elements/document'
import type Element from '../elements/element'

function appendElements(ds: DocumentStructure, el: Element) {
  ds.elementsById[el.id] = el
  if (el.labelName) {
    ds.elementsByLabel[el.labelName] = el
  }
  el.items.forEach(item => appendElements(ds, item))
}

/**
 * 文書構造
 */
export default class DocumentStructure {
  elementsById: { [id: string]: Element }
  elementsByLabel: { [label: string]: Element }

  constructor(doc: Document) {
    doc.articles.forEach(article => appendElements(this, article))
  }
}
