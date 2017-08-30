// @flow
import DocumentFactory from '../../../src/factories/document-factory'
import assert from 'power-assert'
import fs from 'fs'
import { resolve } from 'path'

describe('DocumentFactory', function() {

  before(function() {
    this.samplePath = resolve(__dirname + '/../data/sample.md')
    this.markdownText = fs.readFileSync(this.samplePath, 'utf8')
  })

  describe('checkFormat',function() {

    it('should throw error when markdownText is object', function() {
      const docFac = new DocumentFactory()
      const markdownText = { a: 'hoge', b: 'fuga' }
      assert.throws(x => { docFac.createFromText(markdownText) })
    })

    it('should be ok with md data', function() {
      const docFac = new DocumentFactory()
      assert.doesNotThrow(x => { docFac.createFromText(this.markdownText) })
    })

    it('should throw error when text is object', function() {
      const docFac = new DocumentFactory()
      const text = { a: 'hoge', b: 'fuga' }
      assert.throws(x => { docFac.parseInline(text) })
    })

    it('shoud be ok with a text', function() {
      const docFac = new DocumentFactory()
      const text = 'some text'
      assert.doesNotThrow(x => { docFac.parseInline(text) })
    })
  })
})
