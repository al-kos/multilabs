const RandomArrayGenerator = require('../../classes/RandomArrayGenerator')

let randomArrayGenerator = new RandomArrayGenerator(100, -5, 5)

let randomArray = randomArrayGenerator.generateRandomArray()

function linearSearchWithWhile(array, element) {
  start_index = 0 //Стартовый индекс
  console.log(`Поиск элемента = ${element}. Цикл while.`)
  while ((start_index < array.length) & (array[start_index] != element)) {
    start_index++
  }
  if (start_index < array.length) {
    console.log(`Индекс искомого элемента ${element}: ${start_index}`)
    return start_index
  } else {
    console.log(`Элемент ${element} не найден`)
    return -1
  }
}

function linearSearchWithFor(array, element) {
  for (i = 0; i < array.length; i++) {
    if (array[i] == element) {
      console.log(`Индекс искомого элемента ${element}: ${i}`)
      return i
    }
  }
  console.log(`Элемент ${element} не найден`)
  return -1
}

linearSearchWithWhile(randomArray, 4)
linearSearchWithFor(randomArray, 4)
