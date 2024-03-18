/*Если в бади есть свойство, то делай это, если есть другое - то другое. 
  А итоговую кнопку нужно повесить на другой роутер*/
require('dotenv').config()
const readline = require('node:readline')
const process = require('node:process')
const { performance } = require('node:perf_hooks')
const RandomArrayGenerator = require('../classes/RandomArrayGenerator')
const Sorting = require('../classes/Sorting')
const Searching = require('../classes/Searching')
const Monitoring = require('../classes/Monitoring')
const express = require('express')
const app = express()

app.use(express.json())
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile('/html/index.html', { root: 'public' })
})

app.post('/', (req, res) => {
  /*Если в бади есть свойство, то делай это, если есть другое - то другое. 
  А итоговую кнопку нужно повесить на другой роутер*/
  let body = req.body

  let randomArrayGenerator = new RandomArrayGenerator(
    body.lenLimit,
    body.minLimit,
    body.maxLimit,
  )
  const randomArray = randomArrayGenerator.generateRandomArray()

  let sortedArray = []
  let searchedElementIndex

  if (body.user_selection_sort) {
    let sorting = new Sorting(randomArray.slice(0))
    // Сортировка массива
    switch (body.user_selection_sort) {
      case 'selectionSort':
        sortedArray = Sorting.selectionSort()
        break
      case 'insertionSort':
        sortedArray = Sorting.insertionSort()
        break
      case 'quickSort':
        sortedArray = Sorting.quickSort()
        break
      case 'bubbleSort':
        sortedArray = Sorting.bubbleSort()
        break
    }
  }

  if (body.searchElement & body.user_selection_search) {
    let sorting = new Searching(randomArray.slice(0), body.searchElement)
    // Поиск элемента в массиве
    switch (body.user_selection_search) {
      case 'linearSearchWithWhile':
        searchedElementIndex = sorting.linearSearchWithWhile()
        break
      case 'linearSearchWithFor':
        searchedElementIndex = sorting.linearSearchWithFor()
        break
      case 'binary_search':
        searchedElementIndex = sorting.binarySearch()
        break
    }
  }
  res.json({
    randomArray: randomArray,
    sortedArray: sortedArray,
    searchedElementIndex: searchedElementIndex,
  })
})

app.listen(5000, () => {
  console.log('Сервер запущен на порту 5000')
})
