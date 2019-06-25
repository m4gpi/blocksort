module.exports = function HeapSort (collection, sortFn) {
  var sorted = []
  var end = collection.length - 1

  while (end > 0) {
    heapify(0)
    swap(end)
    sorted.push(collection.pop())
    end -= 1
  }

  return sorted

  function heapify (i) {
    var childStartI = (2 * i) + 1
    for(var i = 0; i < 2; i ++) {
      var actualChildI = childStartI + i
      var child = collection[actualChildI]
      if (!child) return
      heapify(actualChildI)
      var result = sortFn(collection[i], collection[actualChildI])
      if (result === 1) {
        var a = collection[i]
        collection[i] = collection[actualChildI]
        collection[actualChildI] = a
      }
    }
  }

  function swap (end) {
    var a = collection[end]
    collection[end] = collection[0]
    collection[0] = a
  }
}
