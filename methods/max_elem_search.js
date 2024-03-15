const randomArray = require('./random_arr_gen')(100, -10, 10)

function findMaxElement(arr) {
  let maxElement = arr[0]

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i]
    }
  }
  console.log(maxElement)
  return maxElement
}

findMaxElement(randomArray)
