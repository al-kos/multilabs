function bubbleSort(array) {
  for (i = 0; i < array.length; i++) {
    for (j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j]
        array[j] = array[j + 1]
        array[j + 1] = temp
      }
    }
  }
  console.log(
    `Исходный массив отсортирован по возрастанию методом сортировки пузырьком: \n${array}`,
  )
  return array
}

module.exports = bubbleSort
