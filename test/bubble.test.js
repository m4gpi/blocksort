const { describe } = require('tape-plus')
const bubble = require('../lib/bubble')
const crypto = require('crypto')

describe('bubble sort', (context) => {
  context('with integers', (assert) => {
    let sort = [1146, 1245, 2221, 75, 24, 6531, 73, 24, 532, 125, 6, 3562, 765, 2132]
    assert.plan(1)
    assert.deepEqual(bubble(sort), [ 6, 24, 24, 73, 75, 125, 532, 765, 1146, 1245, 2132, 2221, 3562, 6531 ])
  })

  context('with objects', (assert) => {
    let sort = [1146, 1245, 2221, 75, 24, 6531, 73, 24, 532, 125, 6, 3562, 765, 2132].map((n) => ({ key: crypto.randomBytes(6), value: n }))
    assert.plan(1)
    var results = bubble(sort, (o) => o && o.value)
    assert.deepEqual(results.map((o) => o.value), [ 6, 24, 24, 73, 75, 125, 532, 765, 1146, 1245, 2132, 2221, 3562, 6531 ])
  })
})
