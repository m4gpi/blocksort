// sometimes referred to as sinking sort, bubble sort is a simple sorting algorithm that repeatedly
// steps through the list to be sorted, compares each pair of adjacent items and swaps them if they
// are in the wrong order.

function bubble (array, getValue) {
  if (!getValue) getValue = (i) => i
  var sorted = false

  while (!sorted) {
    sorted = true

    for (var i = 0; i <= array.length; i++) {
      var result = getValue(array[i]) > getValue(array[i + 1])

      if (!result) continue
      var a = array[i]
      array[i] = array[i + 1]
      array[i + 1] = a
      sorted = false
    }
  }

  return array
}

module.exports = bubble
