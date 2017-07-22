// @flow

export type Attributes = { [key: string]: string }

import e from './escape-html'

export default function tag(name: string, body?: string, attrs?: Attributes): string {
  // $FlowIssue(object-loop)
  const attrsStr = !attrs ? '' : ' ' + Object.keys(attrs).map(key => `${key}="${attrs[key]}"`).join(' ')
  let html = `<${e(name)}${e(attrsStr)}`
  if (!body) {
    return html + ' />'
  }
  return `${html}>${e(body)}</${e(name)}>`
}
