// @flow

import Document from '../elements/document'
import marked from 'marked'
import Article from '../elements/article'
import Element from '../elements/element'
import Item from '../elements/item'

export default class DocumentFactory {

  constructor() {
  }

  createFromText(markdownText: string): Document {
    const tokens = new marked.Lexer().lex(markdownText)

    const doc = new Document()
    let id = 0
    let currentElement: Article = new Article({ id })
    let prevDepth: number
    let currentDepth: number
    let items = []

    tokens.forEach(token => {
      prevDepth = currentDepth || 0
      currentDepth = token.depth

      // depthが減ったときはdocumentのarticlesに追加
      if (prevDepth > 1 && prevDepth > currentDepth) {
        currentElement.items.push(currentElement)
      }

      // depthが増えたときはdocumentのarticlesに追加
      if (prevDepth < currentDepth) {
        doc.articles.push(currentElement)
        id = id + 1
        currentElement = new Article({ id })
      }

      switch(token.type) {
        case 'heading': {
          if (currentDepth === 1) {
            doc.title = token.text
            break
          }
          currentElement.title = token.text
          break
        }
        case 'paragraph': {
          if (currentElement.items.length === 0) {
            doc.description = token.text
            break
          }
          currentElement.items.push(token.text)
          break
        }
        case 'list_item_start': {
          id = id + 1
          items.push(new Item({ id }))
          break
        }
        case 'list_item_end': {
          currentElement.items = items.slice()
          break
        }
        case 'text': {
          items[items.length - 1].statment = token.text
          break
        }
        case 'code': {
          doc.timestamps.push(token.text)
          break
        }
      }
      // console.log(token)
    })

    return doc
  }
}
