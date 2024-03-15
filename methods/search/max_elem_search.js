const RandomArrayGenerator = require('../../classes/RandomArrayGenerator')

let randomArrayGenerator = new RandomArrayGenerator(10, 1, 10)

let randomArray = randomArrayGenerator.generateRandomArray()

function findMaxElement(arr) {
  let maxElement = arr[0]

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i]
    }
  }
  console.log(`Максимальный элемент (кастомный метод): ${maxElement}`)
}

findMaxElement(randomArray)

let max = Math.max(...randomArray.filter((element) => element !== undefined))

console.log(`Максимальный элемент (стандартый метод): ${max}`)