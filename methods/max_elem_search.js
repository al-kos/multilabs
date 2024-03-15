function findMaxElement(arr) {
  let maxElement = arr[0]

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i]
    }
  }

  return maxElement
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(findMaxElement(arr)) // 10
