// @flow
import { format } from '../../src/index'
import fs from 'fs'

const markdownText = fs.readFileSync(__dirname + '/../markdowns/sample.md', 'utf8')
const html = format(markdownText, { standalone: true, elementId: 'sample' })

console.log(html)
