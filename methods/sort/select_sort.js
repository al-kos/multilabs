const RandomArrayGenerator = require('../../classes/RandomArrayGenerator')

let randomArrayGenerator = new RandomArrayGenerator(100, -5, 5)

let randomArray = randomArrayGenerator.generateRandomArray()

function selectionSort(array) {
  for (i = 0; i < array.length; i++) {
    let min_index = i

    for (j = i + 1; j < array.length; j++) {
      if (array[min_index] > array[j]) {
        min_index = j
      }
    }
    ;[array[i], array[min_index]] = [array[min_index], array[i]]
  }
  console.log(array)
  return array
}

selectionSort(randomArray)