// @flow
import ordinanceFormatJp from '../../../src/index'
import DocumentFactory from '../../../src/factories/document-factory'
import assert from 'power-assert'
import fs from 'fs'
import { resolve } from 'path'


describe('ordinanceFormatJp', function() {

  before(function() {
    this.samplePath = resolve(__dirname + '/../data/sample.md')
    this.markdownText = fs.readFileSync(this.samplePath, 'utf8')
    this.document = new DocumentFactory().createFromText(this.markdownText)
    this.oF = new ordinanceFormatJp(this.markdownText)
  })

  describe('toHtml',function() {

    it('should throw error with unknown options', function() {
      const options = { unknown:'unknown', unknown2: true }
      assert.throws(x => { this.oF.toHtml(options) })
    })

    it('should be ok with known options', function() {
      const options = { standalone: true, elementId:'your id' }
      assert.doesNotThrow(x => { this.oF.toHtml(options) })
    })

    it('should be ok with empty option', function() {
      const options = {}
      assert.doesNotThrow(x => { this.oF.toHtml(options) })
    })

    it('should throw error when option is object', function() {
      const options = { standalone: true, elementId: { elementId: 'your id', elementId: 'your id' }}
      assert.throws(x => { this.oF.toHtml(options) })
    })
    
    it('can outputs formatedHTML', function() {
      const samplePath = resolve(__dirname + '/../data/sample2.html')
      const sampleHtml = fs.readFileSync(samplePath, 'utf8')
      const options = { standalone: false, elementId: 'corp-site-pp'}
      const formatedHTML = this.oF.toHtml(options)
      assert(sampleHtml === formatedHTML)
    })

    it('should throw error when document is empty ', function() {
      this.oF.document = ''
      const options = { standalone: true, elementId: 'corp-site-pp'}
      assert.throws(x => { this.oF.toHtml(options) })
    })
    
  })

  describe('toPlainText', function() {

    before(function() {
      this.samplePath = resolve(__dirname + '/../data/sample.md')
      this.markdownText = fs.readFileSync(this.samplePath, 'utf8')
      this.oF = new ordinanceFormatJp(this.markdownText)
    })

    it('can outputs plain text', function() {
      const samplePath = resolve(__dirname + '/../data/sample.txt')
      const sampleText = fs.readFileSync(samplePath, 'utf8')
      const plainText = this.oF.toPlainText()
      assert(sampleText === plainText)
    })
  })
})
