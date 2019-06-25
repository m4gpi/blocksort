module.exports = function InsertionSort (collection, sortFn) {
  for(var i = 0; i < collection.length - 1; i++) {
    var next = i + 1
    while (next >= 0 && sortFn(collection[i], collection[next]) === 1) {
      var a = collection[next]
      collection[next] = collection[i]
      collection[i] = a
      i -= 1
      next -= 1
    }
  }
}
