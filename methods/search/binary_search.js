function binarySearch(array, element) {
  let low = 0
  let high = array.length - 1

  while (low <= high) {
    let mid = Math.round((low + high) / 2)
    let guess = array[mid]
    if (guess == element) {
      console.log(`Индекс искомого элемента ${element}: ${mid}`)
      return mid
    } else if (guess > element) {
      high = mid - 1
    } else if (guess < element) {
      low = mid + 1
    } else {
      console.log(`Элемент ${element} не найден`)
      return -1
    }
  }
  console.log(`Элемент ${element} не найден`)
  return -1
}

module.exports = binarySearch
