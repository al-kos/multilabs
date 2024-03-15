class RandomArrayGenerator {
  constructor(lenLimit, minLimit, maxLimit) {
    this.lenLimit = lenLimit
    this.minLimit = minLimit
    this.maxLimit = maxLimit
  }

  generateRandomArray() {
    // Создание случайного числа элементов в массиве
    let randomCount = Math.floor(Math.random() * this.lenLimit * this.maxLimit)
    // Создание массива
    let array = Array(randomCount)
    // Заполнения массива случайными целыми числами
    for (let i = 0; i < randomCount; i++) {
      array[i] =
        Math.floor(Math.random() * (this.maxLimit - this.minLimit + 1)) +
        this.minLimit
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
}

module.exports = RandomArrayGenerator
