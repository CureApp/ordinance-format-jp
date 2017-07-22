// @flow

import marked from 'marked'

export type ParsedData = {
}

export default class MarkdownParser extends marked.Renderer {

  parsedData: ParsedData

  constructor() {
    super()
    this.parsedData = {
      h1: [],
      h2: [],
    }
  }

  parse(markdownText: string) {
    const tokens = new marked.Lexer().lex(markdownText)
    tokens.forEach(token => console.log(token))
    return ''
  }

  codespan(str: string) {
    console.log(str)
    return { hello: str }
  }

  code(str: string) {
    console.log(str)

  }

  heading(str: string, level: number) {
    console.log(str)
    switch (level) {
    case 1:
      this.parsedData.h1.push(str)
      break
    case 2:
      this.parsedData.h2.push(str)
      break
    }
  }
}
