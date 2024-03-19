// require('dotenv').config()

const RandomArrayGenerator = require('../classes/RandomArrayGenerator')
const Sorting = require('../classes/Sorting')
const Searching = require('../classes/Searching')
const Monitoring = require('../classes/Monitoring')

const express = require('express')
const app = express()
const router = express.Router()

app.use(express.json())
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile('/views/layout.html', { root: 'public' })
})

app.get('/algs', (req, res) => {
  res.sendFile('/views/partials/algoritms.html', { root: 'public' })
})

app.listen(5000, () => {
  console.log('Сервер запущен, порт 5000')
})

/*
if (body.user_selection_sort) {
  let sorting = new Sorting(randomArray.slice(0))
  console.log(sorting)
  // Сортировка массива
  switch (body.user_selection_sort) {
    case 'selectionSort':
      sortedArray = sorting.selectionSort()
      break
    case 'insertionSort':
      sortedArray = sorting.insertionSort()
      break
    case 'quickSort':
      sortedArray = sorting.quickSort()
      break
    case 'bubbleSort':
      sortedArray = sorting.bubbleSort()
      break
  }
} else {
  console.log('Косяк сортировки')
}

if (body.searchElement && body.user_selection_search) {
  let searching = new Searching(randomArray.slice(0), body.searchElement)
  // Поиск элемента в массиве
  console.log(searching)
  switch (body.user_selection_search) {
    case 'linearSearchWithWhile':
      searchedElementIndex = searching.linearSearchWithWhile()
      break
    case 'linearSearchWithFor':
      searchedElementIndex = searching.linearSearchWithFor()
      break
    case 'binary_search':
      searchedElementIndex = searching.binarySearch()
      break
  }
}
*/
