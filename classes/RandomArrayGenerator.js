class RandomArrayGenerator {
  constructor(lenLimit, minLimit, maxLimit) {
    this.lenLimit = lenLimit
    this.minLimit = minLimit
    this.maxLimit = maxLimit
  }

  generateRandomInteger() {
    return Math.floor(Math.random() * this.lenLimit)
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
