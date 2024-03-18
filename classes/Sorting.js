class Sorting {
  constructor(array) {
    this.array = array
  }

  bubbleSort() {
    for (i = 0; i < this.array.length; i++) {
      for (j = 0; j < this.array.length - 1; j++) {
        if (this.array[j] > this.array[j + 1]) {
          let temp = this.array[j]
          this.array[j] = this.array[j + 1]
          this.array[j + 1] = temp
        }
      }
    }
    return this.array
  }

  insertionSort() {
    for (i = 1; i < this.array.length; i++) {
      let tmp = this.array[i]
      j = i - 1
      while ((j >= 0) & (this.array[j] > tmp)) {
        this.array[j + 1] = this.array[j]
        j -= 1
      }
      this.array[j + 1] = tmp
    }
    return this.array
  }

  quickSort() {
    // Условие остановки, выхода из рекурсии, возвращем массив с 1 элементом
    if (this.array.length < 2) {
      return this.array
    }
    // Выбираем опорный элемент
    let pivot = this.array[0]
    // Определяем массивы для тех, что меньше и больше опорного
    const left = []
    const right = []

    // Проходим циклом по всем элементам из массива и разносим их в массивы созданные ранее согласно условию, больше опорного - в правый, меньше - в левый
    for (let i = 1; i < this.array.length; i++) {
      if (pivot > this.array[i]) {
        left.push(this.array[i])
      } else {
        right.push(this.array[i])
      }
    }
    // Рекурсивно повторяем процесс для новых двух массивов, текущий опорный элемент - кладем как первый в правый массив.
    return quickSort(left).concat(pivot, quickSort(right))
  }

  selectionSort() {
    for (i = 0; i < this.array.length; i++) {
      let min_index = i

      for (j = i + 1; j < this.array.length; j++) {
        if (this.array[min_index] > this.array[j]) {
          min_index = j
        }
      }
      ;[this.array[i], this.array[min_index]] = [
        this.array[min_index],
        this.array[i],
      ]
    }
    return this.array
  }
}

module.exports = Sorting
