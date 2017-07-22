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
    let id = 1
    let currentArticle: ?Article
    let itemStack: Array<Item> = []

    tokens.forEach(token => {
      const currentItem = itemStack[itemStack.length - 1]

      switch(token.type) {
        case 'heading': {
          if (token.depth === 1) {
            doc.title = token.text
            break
          }
          // depth が 2以上のときはarticleとみなす
          const { labelName, text } = this.getLabelFromText(token.text)
          const article = new Article({ id: (++id).toString(), title: text, labelName })
          doc.articles.push(article)
          currentArticle = article
          itemStack = []
          break
        }
        case 'paragraph': {
          // 第1条に達していないとき、descriptionと判断
          if (currentArticle == null) {
            doc.description = token.text
            break
          }

          const { labelName, text } = this.getLabelFromText(token.text)
          const paragraphItem = new Item({ id: (++id).toString(), statement: text, labelName })
          // $FlowIssue(he-is-not-null)
          currentArticle.items.push(paragraphItem)
          itemStack = [paragraphItem]
          break
        }
        case 'list_item_start': {
          const listItem = new Item({ id: (++id).toString() })
          currentItem.items.push(listItem)
          itemStack.push(listItem)
          break
        }
        case 'list_item_end': {
          itemStack.pop()
          break
        }

        case 'text': {
          const { labelName, text } = this.getLabelFromText(token.text)
          currentItem.statement = text
          currentItem.labelName = labelName
          break
        }
        case 'code': {
          doc.timestamps = token.text.split('¥n')
          break
        }
      }
    })

    return doc
  }

  getLabelFromText(text: string): { labelName: string, text: string } {
    let matched
    if (matched = text.match(/^`([^`]+)`/)) {
      return { labelName: matched[1], text: text.slice(matched[1].length + 2) }
    }
    return { labelName: '', text }
  }
}
