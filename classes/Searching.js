class Searching {
  constructor(array, element) {
    this.array = array
    this.element = element
  }

  linearSearchWithWhile() {
    let start_index = 0
    while (
      start_index < this.array.length &&
      this.array[start_index] != this.element
    ) {
      start_index++
    }
    if (start_index < this.array.length) {
      return start_index
    } else {
      return -1
    }
  }

  linearSearchWithFor() {
    for (let i = 0; i < this.array.length; i++) {
      if (this.array[i] == this.element) {
        return i
      }
    }
    return -1
  }

  binarySearch() {
    let low = 0
    let high = this.array.length - 1

    while (low <= high) {
      let mid = Math.round((low + high) / 2)
      let guess = this.array[mid]
      if (guess == this.element) {
        return mid
      } else if (guess > this.element) {
        high = mid - 1
      } else if (guess < this.element) {
        low = mid + 1
      } else {
        return -1
      }
    }
    return -1
  }
}

module.exports = Searching
