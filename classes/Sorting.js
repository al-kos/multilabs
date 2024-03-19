class Sorting {
  constructor(array) {
    this.array = array
  }

  bubbleSort() {
    for (let i = 0; i < this.array.length; i++) {
      for (let j = 0; j < this.array.length - 1; j++) {
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
    for (let i = 1; i < this.array.length; i++) {
      let tmp = this.array[i]
      let j = i - 1
      while ((j >= 0) & (this.array[j] > tmp)) {
        this.array[j + 1] = this.array[j]
        j -= 1
      }
      this.array[j + 1] = tmp
    }
    return this.array
  }

  quickSort(arr) {
    // Условие остановки, выхода из рекурсии, возвращем массив с 1 элементом
    if (arr.length < 2) {
      return arr
    }
    // Выбираем опорный элемент
    let pivot = arr[0]
    // Определяем массивы для тех, что меньше и больше опорного
    const left = []
    const right = []

    // Проходим циклом по всем элементам из массива и разносим их в массивы созданные ранее согласно условию, больше опорного - в правый, меньше - в левый
    for (let i = 1; i < arr.length; i++) {
      if (pivot > arr[i]) {
        left.push(arr[i])
      } else {
        right.push(arr[i])
      }
    }
    // Рекурсивно повторяем процесс для новых двух массивов, текущий опорный элемент - кладем как первый в правый массив.
    return this.quickSort(left).concat(pivot, this.quickSort(right))
  }

  selectionSort() {
    for (let i = 0; i < this.array.length; i++) {
      let min_index = i
      for (let j = i + 1; j < this.array.length; j++) {
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
