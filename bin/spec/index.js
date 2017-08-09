// @flow
import legalDocFormatJp, { format } from '../../src/index'
import fs from 'fs'
import Program from 'commander'
import { version } from '../../package.json'

let filePath
Program
  .version(version)
  .usage('<filePath> options')
  .action(function (path) {
     filePath = path
  })

Program
  .option('--nostyle', 'outputs only the HTML structure without the style tag')
  .option('--elementId <id>', 'id name of the top level div tag')

Program.parse(process.argv)

if (typeof filePath === 'undefined') {
   console.error('no filePath given!')
   process.exit(1)
}

let styled = !Program.nostyle,
    elementId = Program.elementId || 'corp-site-pp'
const markdownText = fs.readFileSync(filePath, 'utf8')
const html = format(markdownText, { standalone: styled, elementId: elementId })

console.log(html)
