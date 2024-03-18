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
  console.log(body.lenLimit)
  let randomArray = []
  let sortedArray = []
  let searchedElementIndex = null

  if (body.lenLimit && body.minLimit && body.maxLimit) {
    randomArray = new RandomArrayGenerator(
      body.lenLimit,
      body.minLimit,
      body.maxLimit,
    ).generateRandomArray()
    console.log('Массив сформирован')
  } else {
    console.log('Косяк ввода или генератора')
  }

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
  } else {
    console.log('Косяк поиска')
  }

  res.json({
    randomArray: randomArray,
  })
  console.log(randomArray)
})

app.listen(5000, () => {
  console.log('Сервер запущен на порту 5000')
})
