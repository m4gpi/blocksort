module.exports = function BubbleSort (collection, sortfn) {
  var sorted = false
  while (!sorted) {
    sorted = true
    for(var i = 0; i <= collection.length; i++) {
      var result = sortfn(collection[i], collection[i + 1])
      if (result === true) {
        var a = collection[i]
        collection[i] = collection[i + 1]
        collection[i + 1] = a
        sorted = false
      }
    }
  }
  return collection
}
