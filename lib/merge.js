module.exports = function MergeSort (collection, sortFn) {
  if (collection.length <= 1) return collection

  var half = Math.floor(collection.length / 2)
  let left = MergeSort(collection.slice(0, half), sortFn)
  let right = MergeSort(collection.slice(half, collection.length), sortFn)

  return merge(left, right)

  function merge (left, right) {
    var array = []
    var l = 0
    var r = 0
    var sorting = true

    while (sorting) {
      if (l >= left.length && r >= right.length) {
        sorting = false
        break
      }

      try {
        var result = sortFn(left[l], right[r])
      } catch (err) {
        console.error(err)
        return [...left, ...right]
      }

      if (r >= right.length || (l < left.length && result === 1)) {
        array.push(left[l])
        l += 1
      } else {
        array.push(right[r])
        r += 1
      }
    }
    return array
  }
}
