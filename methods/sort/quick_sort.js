function quickSort(arr) {
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
  return quickSort(left).concat(pivot, quickSort(right))
}

module.exports = quickSort
