// @flow
import DocumentStructure from '../../../src/meta/document-structure'
import DocumentFactory from '../../../src/factories/document-factory'
import assert from 'power-assert'
import fs from 'fs'
import { resolve } from 'path'

describe('DocumentStructure', function() {

  before(function() {
    this.samplePath = resolve(__dirname + '/../../../bin/markdowns/sample.md')
    this.markdownText = fs.readFileSync(this.samplePath, 'utf8')
    this.document = new DocumentFactory().createFromText(this.markdownText)
  })

  describe('getElementNameByLabel',function() {

    it('should be ok with existing labalName ', function() {
      const docStr = new DocumentStructure(this.document)
      assert.doesNotThrow(x => { docStr.getElementNameByLabel('ラベル名') })
    })


    it('should throw error with not existing labalName ', function() {
      const docStr = new DocumentStructure(this.document)
      assert.throws(x => { docStr.getElementNameByLabel('labelName') })
    })


    it('should throw error when doc is empty', function() {
      const docStr = new DocumentStructure(this.document)
      docStr.doc = {}
      assert.throws(x => { docStr.getElementNameByLabel('labelName') })
    })

  })

})
