// @flow

import Document from '../elements/document'
import MarkdownParser from '../parsers/markdown-parser'

export default class DocumentFactory {

  constructor() {
  }

  createFromText(markdownText: string): Document {
    const parser = new MarkdownParser()
    const val = parser.parse(markdownText)
    console.log(val)
    return new Document({ title: 'タイトル' })
  }
}
