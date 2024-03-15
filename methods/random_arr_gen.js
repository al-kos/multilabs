/* 
Данный модуль создает массив случайных целых чисел заданной длины и случайным количеством элементов массива в заданых лимитах
*/

// Создание массива случайных целых чисел
module.exports = function generateRandomArray(arrLength, minLimit, maxLimit) {
  // Создание массива пустых элементов, длинной arrLength
  let array = Array(arrLength).fill(undefined)
  // Создание случайного числа непустых элементов в массиве
  let randomCount = Math.floor(Math.random() * arrLength)
  // Заполнения массива случайными целыми числами. Количество непустых элементов менее или равно длине массива
  for (let i = 0; i < randomCount; i++) {
    if (array[i] === undefined) {
      array[i] =
        Math.floor(Math.random() * (maxLimit - minLimit + 1)) + minLimit
    }
  }

  console.log(`Длина массива: ${array.length}`)
  console.log(
    `Количество непустых элементов: ${
      array.filter((element) => element !== undefined).length
    }`,
  )
  // Проверка количества непустых элементов и их вывод
  if (array.filter((element) => element !== undefined).length <= 20)
    console.log(
      `Итоговый массив: ${array.filter((element) => element !== undefined)}`,
    )
  else {
    console.log(
      `Итоговый массив содержит более 20 непустых элементов.\nПервые 10 элементов: ${array
        .filter((element) => element !== undefined)
        .slice(0, 10)}\nПоследние 10 элементов: ${array
        .filter((element) => element !== undefined)
        .slice(-10)}`,
    )
  }
  return array
}
