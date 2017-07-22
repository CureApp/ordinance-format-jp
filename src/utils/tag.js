// @flow

export type Attributes = { [key: string]: string }

import escapeHtml from './escape-html'

const through = (v: string): string => v

export default function tag(name: string, body?: string, attrs?: ?Attributes, noEscape?: boolean = false): string {
  const e = noEscape ? through : escapeHtml
  // $FlowIssue(object-loop)
  const attrsStr = !attrs ? '' : ' ' + Object.keys(attrs).map(key => `${key}="${attrs[key]}"`).join(' ')
  let html = `<${e(name)}${e(attrsStr)}`
  if (!body) {
    return html + ' />'
  }
  return `${html}>${e(body)}</${e(name)}>`
}
