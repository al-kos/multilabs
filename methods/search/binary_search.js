const RandomArrayGenerator = require('../../classes/RandomArrayGenerator')

let randomArrayGenerator = new RandomArrayGenerator(100, -10, 10)

let randomArray = randomArrayGenerator.generateRandomArray()

let sortedRandomArray = randomArray.sort((a, b) => a - b)

console.log(sortedRandomArray)

function binarySearch(array, element) {
  let low = 0
  let high = array.length - 1

  while (low <= high) {
    let mid = Math.round((low + high) / 2)
    let guess = array[mid]
    if (guess == element) {
      return mid
    } else if (guess > element) {
      high = mid - 1
    } else {
      low = mid + 1
    }
    return -1
  }
}

binarySearch(sortedRandomArray, 5)
