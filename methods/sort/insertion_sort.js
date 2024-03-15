const RandomArrayGenerator = require('../../classes/RandomArrayGenerator')

let randomArrayGenerator = new RandomArrayGenerator(100, -5, 5)

let randomArray = randomArrayGenerator.generateRandomArray()

function insertionSort(array) {
  for (i = 1; i < array.length; i++) {
    let tmp = array[i]
    j = i - 1
    while ((j >= 0) & (array[j] > tmp)) {
      array[j + 1] = array[j]
      j -= 1
    }
    array[j + 1] = tmp
  }
  console.log(
    `Исходный массив отсортирован по возрастанию методом сортировки вставками: \n${array}`,
  )
  return array
}
insertionSort(randomArray)
