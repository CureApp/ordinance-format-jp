// @flow
import { format } from '../../../src/index'
import assert from 'power-assert'
import fs from 'fs'
import { resolve } from 'path'


describe('ordinanceFormatJp', function() {

  before(function() {
    this.mdPath = resolve(__dirname + '/../data/sample.md')
    this.mdData = fs.readFileSync(this.mdPath, 'utf8')
    this.htmlPath = resolve(__dirname + '/../data/sample.html')
    this.htmlData = fs.readFileSync(this.htmlPath, 'utf8')
  })

  describe('formatMD2HTML',function() {

    it('can fomat markdown to HTML', function() {
      const formatedHTML = format(this.mdData, { standalone: false, elementId: 'corp-site-pp' })
      assert.deepEqual(formatedHTML, this.htmlData)
    })
  })
})
