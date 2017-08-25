// @flow
import escapeHtml from '../../../src/utils/escape-html'
import assert from 'power-assert'
import fs from 'fs'
import { resolve } from 'path'

describe('escape-html', function() {
  
  before(function () {
    this.samplePath = resolve(__dirname + '/../data/sample.html')
    this.sampleHtml = fs.readFileSync(this.samplePath, 'utf8')
  })
  
  it('should be ok with unknown data', function() {
    assert.doesNotThrow(x => { escapeHtml(this.sampleHtml) })
  })
  
})