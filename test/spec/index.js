// @flow
import { format } from '../../src/index'
import fs from 'fs'

const markdownText = fs.readFileSync(__dirname + '/../markdowns/sample.md', 'utf8')
const html = format(markdownText, { withStyle: true })

console.log(html)
