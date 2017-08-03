// @flow
import LegalDocJp, { format } from '../../src/index'
import fs from 'fs'

const markdownText = fs.readFileSync(__dirname + '/../markdowns/corp-site-pp.md', 'utf8')
const html = format(markdownText, { standalone: false, elementId: 'corp-site-pp' })

console.log(html)
