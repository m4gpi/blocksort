function insertion (array, getValue) {
  if (!getValue) getValue = (i) => i

  for (var i = 0; i < array.length - 1; i++) {
    var next = i + 1
    while (next >= 0 && getValue(array[i]) > getValue(array[next])) {
      var a = array[next]
      array[next] = array[i]
      array[i] = a
      i -= 1
      next -= 1
    }
  }

  return array
}

module.exports = insertion
