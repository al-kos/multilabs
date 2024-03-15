/* 
Данный модуль создает массив случайных целых чисел заданной длины и случайным количеством элементов массива в заданых лимитах
*/

// Создание массива случайных целых чисел
function generateRandomArray(lenLimit, minLimit, maxLimit) {
  // Создание числа элементов в массиве
  let randomCount = Math.floor(Math.random() * lenLimit * maxLimit)
  // Создание массива не более lenLimit
  let array = Array(randomCount)
  // Заполнения массива случайными целыми числами
  for (let i = 0; i < randomCount; i++) {
    array[i] = Math.floor(Math.random() * (maxLimit - minLimit + 1)) + minLimit
  }
  console.log(`Длина массива: ${array.length}`)
  // Проверка количества элементов и их вывод
  if (array.length <= 20) console.log(`Итоговый массив: ${array}`)
  else {
    console.log(
      `Итоговый массив содержит более 20 элементов.\nПервые 10 элементов: ${array.slice(
        0,
        10,
      )}\nПоследние 10 элементов: ${array.slice(-10)}`,
    )
  }
  return array
}

module.exports = generateRandomArray
