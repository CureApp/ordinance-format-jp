// @flow
import LegalDocJp, { format } from '../../src/index'
import fs from 'fs'

let styled = true,
    elementId = 'corp-site-pp'
process.argv.forEach((arg, index) => {
  if (arg === '--nostyle') {
    styled = false
  } else if (arg === '--elementId') {
    elementId = process.argv[++index]
  }
})
const markdownText = fs.readFileSync(process.argv[2], 'utf8')
const html = format(markdownText, { standalone: styled, elementId: elementId })

console.log(html)
