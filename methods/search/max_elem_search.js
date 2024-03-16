function findMaxElement(arr) {
  let maxElement = arr[0]

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i]
    }
  }
  console.log(`Максимальный элемент (кастомный метод): ${maxElement}`)
  return maxElement
}

function findMaxElementStandart(arr) {
  let max = Math.max(...randomArray.filter((element) => element !== undefined))
  console.log(`Максимальный элемент (стандартый метод): ${max}`)
  return max
}

module.exports = {
  findMaxElement,
  findMaxElementStandart,
}
