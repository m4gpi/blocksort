// uses recursion to split the array in half until left with only one item
// For each leaf node, the numbers are sorted by comparing one at at time 
// between each array. The smaller value is shovelled into the returned results,
// the index incremented and then checked again
// Each returned array is then recompared with the next 'batch'

function merge (array, getValue) {
  if (!getValue) getValue = (i) => i

  return recurse(array)

  function recurse (a) {
    // break out of recursion if array length is 1
    if (a.length <= 1) return a
    // get center of array to...
    var half = Math.floor(a.length / 2)
    // slice each array in half and recurse
    let left = recurse(a.slice(0, half))
    let right = recurse(a.slice(half, a.length))
    // sort and merge arrays
    return merge(left, right)
  }

  function merge (left, right) {
    var array = []
    var l = 0
    var r = 0

    while (true) {
      // break loop if end of both arrays reached
      if (l >= left.length && r >= right.length) return array

      // compare values
      var result = getValue(left[l]) < getValue(right[r])

      // if right array is finished OR (left array isn't finished AND left is less than right)
      if (r >= right.length || (l < left.length && result)) {
        array.push(left[l])
        l += 1
      } else {
        array.push(right[r])
        r += 1
      }
    }
  }
}

module.exports = merge
