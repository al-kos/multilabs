class RandomArrayGenerator {
  constructor(arrLength, minLimit, maxLimit) {
    this.arrLength = arrLength
    this.minLimit = minLimit
    this.maxLimit = maxLimit
  }

  generateRandomArray() {
    // Создание массива пустых элементов, длинной arrLength
    let array = Array(this.arrLength).fill(undefined)
    // Создание случайного числа непустых элементов в массиве
    let randomCount = Math.floor(Math.random() * this.arrLength)
    // Заполнения массива случайными целыми числами. Количество непустых элементов менее или равно длине массива
    for (let i = 0; i < randomCount; i++) {
      if (array[i] === undefined) {
        array[i] =
          Math.floor(Math.random() * (this.maxLimit - this.minLimit + 1)) +
          this.minLimit
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
    return array.filter((element) => element !== undefined)
  }
}

module.exports = RandomArrayGenerator
