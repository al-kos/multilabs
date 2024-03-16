function selectionSort(array) {
  for (i = 0; i < array.length; i++) {
    let min_index = i

    for (j = i + 1; j < array.length; j++) {
      if (array[min_index] > array[j]) {
        min_index = j
      }
    }
    ;[array[i], array[min_index]] = [array[min_index], array[i]]
  }
  console.log(
    `Исходный массив отсортирован по возрастанию методом сортировки выбором: \n${array}`,
  )
  return array
}

module.exports = selectionSort
