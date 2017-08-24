// @flow
import ordinanceFormatJp from '../../../src/index'
import DocumentFactory from '../../../src/factories/document-factory'
import assert from 'power-assert'
import fs from 'fs'
import { resolve } from 'path'


describe('ordinanceFormatJp', function() {

  before(function() {
    this.samplePath = resolve(__dirname + '/../../../bin/markdowns/sample.md')
    this.markdownText = fs.readFileSync(this.samplePath, 'utf8')
    this.document = new DocumentFactory().createFromText(this.markdownText)
  })

  describe('toHtml',function() {

    it('should throw error with unknown options', function() {
      const oF = new ordinanceFormatJp(this.markdownText)
      const options = { unknown:'unknown', unknown2: true }
      assert.throws(x => { oF.toHtml(options) })
    })

    it('should be ok with known options', function() {
      const oF = new ordinanceFormatJp(this.markdownText)
      const options = { standalone: true, elementId:'your id' }
      assert.doesNotThrow(x => { oF.toHtml(options) })
    })

    it('should be ok with empty option', function() {
      const oF = new ordinanceFormatJp(this.markdownText)
      const options = {}
      assert.doesNotThrow(x => { oF.toHtml(options) })
    })

    it('should throw error when option is object', function() {
      const oF = new ordinanceFormatJp(this.markdownText)
      const options = { standalone: true, elementId: { elementId: 'your id', elementId: 'your id' }}
      assert.throws(x => { oF.toHtml(options) })
    })

    it('should throw error when document is empty ', function() {
      const oF = new ordinanceFormatJp(this.markdownText)
      oF.document = ''
      const options = { standalone: true, elementId: 'corp-site-pp'}
      assert.throws(x => { oF.toHtml(options) })
    })


  })

  describe('toPlainText', function() {

    before(function() {
      this.samplePath = resolve(__dirname + '/../../../bin/markdowns/sample.md')
      this.markdownText = fs.readFileSync(this.samplePath, 'utf8')
    })

    it('can outputs plain text', function() {
      const samplePath = resolve(__dirname + '/../../../bin/markdowns/sample.txt')
      const sampleText = fs.readFileSync(this.samplePath, 'utf8')
      const oF = new ordinanceFormatJp(this.markdownText)
      const plainText = oF.toPlainText()
      assert(plainText === sampleText)
    })
  })
})
