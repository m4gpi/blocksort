const { describe } = require('tape-plus')
const bubble = require('../lib/bubble')

const TO_SORT = [1146, 1245, 2221, 75, 24, 6531, 73, 24, 532, 125, 6, 3562, 765, 2132]

describe('Bubble Sort', (context) => {
  context('ascending order', (assert) => {
    assert.plan(1)

    var ascending = bubble(TO_SORT, (a, b) => a > b ? 1 : -1)

    assert.deepEqual(ascending, [ 6, 24, 24, 73, 75, 125, 532, 765, 1146, 1245, 2132, 2221, 3562, 6531 ])
  })

  context('descending order', (assert) => {
    assert.plan(1)

    var descending = bubble(TO_SORT, (a, b) => a < b ? 1 : -1)

    assert.deepEqual(descending, [ 6531, 3562, 2221, 2132, 1245, 1146, 765, 532, 125, 75, 73, 24, 24, 6 ])
  })

})
