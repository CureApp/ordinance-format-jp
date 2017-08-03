// @flow

import Document from '../elements/document'
import marked from 'marked'
import Article from '../elements/article'
import Element from '../elements/element'
import Item from '../elements/item'


// inlineのみをrenderできるような設定
// label文法(codespan)だけはスルーするようにも設定
const inlineRenderer = new marked.Renderer()
inlineRenderer.paragraph = (v) => v
inlineRenderer.codespan = (v) => '`' + v + '`'

export default class DocumentFactory {

  constructor() {
  }

  createFromText(markdownText: string): Document {
    const tokens = new marked.Lexer().lex(markdownText)

    const doc = new Document()
    let id = 1
    let currentArticle: ?Article
    let itemStack: Array<Item> = []
    let inBlockquote = false

    tokens.forEach(token => {
      const currentItem = itemStack[itemStack.length - 1]

      switch(token.type) {
        case 'heading': {
          if (token.depth === 1) {
            doc.title = token.text
            break
          }
          // depth が 2以上のときはarticleとみなす
          const { labelName, text } = this.parseInline(token.text)
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

          const { labelName, text } = this.parseInline(token.text)

          if (inBlockquote) {
            const currentElement = currentItem || currentArticle
            currentElement.appendix = text
            break
          }

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
          const { labelName, text } = this.parseInline(token.text)
          currentItem.statement = text
          currentItem.labelName = labelName
          break
        }
        case 'code': {
          doc.timestamps = token.text.split('\n')
          break
        }
        case 'blockquote_start': {
          inBlockquote = true
          break
        }
        case 'blockquote_end': {
          inBlockquote = false
          break
        }
      }
    })

    return doc
  }

  parseInline(text: string): { labelName: string, text: string } {
    const t = marked(text, { renderer: inlineRenderer })
    let matched
    if (matched = t.match(/^`([^\$][^`]+)`( *)/)) {
      return { labelName: matched[1], text: t.slice(matched[1].length + matched[2].length + 2) }
    }
    return { labelName: '', text: t }
  }
}
