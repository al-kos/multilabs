class RandomArrayGenerator {
  constructor(lenLimit, minLimit, maxLimit) {
    this.lenLimit = lenLimit
    this.minLimit = minLimit
    this.maxLimit = maxLimit
  }

  generateRandomInteger() {
    return Math.floor(Math.random() * (this.lenLimit * this.maxLimit))
  }

  generateRandomArray() {
    let randomCount = this.generateRandomInteger()
    let array = Array(randomCount)

    for (let i = 0; i < randomCount; i++) {
      array[i] =
        Math.floor(Math.random() * (this.maxLimit - this.minLimit + 1)) +
        this.minLimit
    }
    return array
  }
}

module.exports = RandomArrayGenerator

/*
    console.log(`Длина массива: ${array.length}`)
    if (array.length <= 20) console.log(`Итоговый массив: ${array}`)
    else {
      console.log(
        `Итоговый массив содержит более 20 элементов.\nПервые 10 элементов: ${array.slice(
          0,
          10,
        )}\nПоследние 10 элементов: ${array.slice(-10)}`,
      )
    }
*/
