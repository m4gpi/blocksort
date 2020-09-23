// In the first step, a heap is built out of the data.
// The heap is often placed in an array with the layout of a complete binary tree.
// The complete binary tree maps the binary tree structure into the array indices; each array index represents a node;
//
// A max-heap is a complete binary tree in which the value in each internal node
// is greater than or equal to the values in the children of that node.

function heap (array, getValue) {
  if (!getValue) getValue = (i) => i

  var sorted = []
  var end = array.length - 1

  while (end >= 0) {
    heapify(0)
    swap(end)
    sorted.push(array.pop())
    end -= 1
  }

  return sorted

  function heapify (i) {
    var childStartI = (2 * i) + 1

    for (var i = 0; i < 2; i ++) {
      var actualChildI = childStartI + i
      var child = array[actualChildI]
      if (!child) return

      heapify(actualChildI)

      var result = getValue(array[i]) > getValue(array[actualChildI])
      if (!result) continue

      var a = array[i]
      array[i] = array[actualChildI]
      array[actualChildI] = a
    }
  }

  function swap (end) {
    var a = array[end]
    array[end] = array[0]
    array[0] = a
  }
}

module.exports = heap
