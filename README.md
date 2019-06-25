# Blocksort 

A set of sorting algorithms, with benchmarks in `/test` to help you pick the one that suits your needs...

```js
const {
  merge,
  bubble,
  insertion,
  heap,
  radixLSD,
  radixMSD
} = require('./') 

var sort = [1146,1245,2221,75,24,6531,73,24,532,125,6,3562,765,2132]

// example of bubble sorting a dataset
var sorted = bubble(sort, (a, b) => a > b)
console.log(sorted)
// [ 6, 24, 24, 73, 75, 125, 532, 765, 1146, 1245, 2132, 2221, 3562, 6531 ]

// example of merge sorting a dataset
var sorted = merge(sort, (a, b) => a < b)
console.log(sorted)
// [ 6531, 3562, 2221, 2132, 1245, 1146, 765, 532, 125, 75, 73, 24, 24, 6 ]
```
