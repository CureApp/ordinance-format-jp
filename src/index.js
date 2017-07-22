// @flow
import DocumentFactory from './factories/document-factory'
import DocumentStructure from './meta/document-structure'
import type Document, { HtmlOptions } from './elements/document'

export function format(markdownText: string, options: HtmlOptions) {
  return new OrdinanceFormatJp(markdownText).toHtml(options)
}

export default class OrdinanceFormatJp {
  document: Document
  docStructure: DocumentStructure

  constructor(markdownText: string) {
    const title = markdownText
    this.document = new DocumentFactory().createFromText(markdownText)
  }

  toHtml(options: ?HtmlOptions): string {
    return this.document.toHtml(this.docStructure, options || {})
  }
}
