// @flow
import Document from '../elements/document'
import type Element from '../elements/element'

type Position = Array<number>

const aiueo = 'アイウエオカキクケコサシスセソタチツテトナニヌネノ'.split('')
const elementNameConverters = [
  (num: number): string => `第${num}条`,
  (num: number): string => `${num}項`,
  (num: number): string => `（${num}）`,
  (num: number): string => `${aiueo[num - 1]}`,
  (num: number): string => `（${aiueo[num - 1]}）`,
  (num: number): string => `の${num}`,
  (num: number): string => `の${num}`,
  (num: number): string => `の${num}`,
  (num: number): string => `の${num}`,
  (num: number): string => `の${num}`,
]

function newPos(pos: Position, num: number): Position {
  const ret = pos.slice()
  ret.push(num)
  return ret
}

function appendElements(ds: DocumentStructure, el: Element, pos: Position, depth: number) {
  ds.elementsById[el.id] = el
  ds.positionsById[el.id] = pos
  ds.depthsById[el.id] = depth
  if (el.labelName) {
    ds.elementsByLabel[el.labelName] = el
  }
  el.items.forEach((item, i) => appendElements(ds, item, newPos(pos, i + 1), depth + 1))
}

/**
 * 文書構造
 */
export default class DocumentStructure {
  elementsById: { [id: string]: Element }
  elementsByLabel: { [label: string]: Element }
  positionsById: { [id: string]: Position }
  depthsById: { [id: string]: number }

  constructor(doc: Document) {
    doc.articles.forEach((article, i) => appendElements(this, article, [i + 1], 0))
  }

  getNumber(el: Element): number {
    const pos = this.positionsById[el.id]
    return pos[pos.length - 1]
  }

  getDepth(el: Element): number {
    return this.depthsById[el.id]
  }

  getElementNameByLabel(labelName: string): string {
    const el = this.elementsByLabel[labelName]
    const pos = this.positionsById[el.id]
    return pos.map((num, i) => elementNameConverters[i](num)).join('')
  }
}
