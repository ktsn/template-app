import assert from 'power-assert'
import index from '../src/main'

describe('Entry point', () => {
  it('should provide module', () => {
    const actual = index
    assert.deepStrictEqual(actual, {})
  })
})
