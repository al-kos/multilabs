class Searching {
  constructor(array, element) {
    this.array = array
    this.element = element
  }

  linearSearchWithWhile() {
    console.log(`Поиск элемента = ${this.element}. Цикл while.`)

    start_index = 0
    while (
      (start_index < this.array.length) &
      (this.array[start_index] != this.element)
    ) {
      start_index++
    }
    if (start_index < this.array.length) {
      console.log(`Индекс искомого элемента ${this.element}: ${start_index}`)
      return start_index
    } else {
      console.log(`Элемент ${this.element} не найден`)
      return -1
    }
  }

  linearSearchWithFor() {
    console.log(`Поиск элемента = ${this.element}. Цикл for.`)

    for (let i = 0; i < this.array.length; i++) {
      if (this.array[i] == this.element) {
        console.log(`Индекс искомого элемента ${this.element}: ${i}`)
        return i
      }
    }
    console.log(`Элемент ${this.element} не найден`)
    return -1
  }

  binarySearch() {
    let low = 0
    let high = this.array.length - 1

    while (low <= high) {
      let mid = Math.round((low + high) / 2)
      let guess = this.array[mid]
      if (guess == this.element) {
        console.log(`Индекс искомого элемента ${this.element}: ${mid}`)
        return mid
      } else if (guess > this.element) {
        high = mid - 1
      } else if (guess < this.element) {
        low = mid + 1
      } else {
        console.log(`Элемент ${this.element} не найден`)
        return -1
      }
    }
    console.log(`Элемент ${this.element} не найден`)
    return -1
  }
}

module.exports = Searching
