// require('dotenv').config()
const inquirer = require('inquirer')
const process = require('node:process')
const { performance } = require('node:perf_hooks')
const RandomArrayGenerator = require('./classes/RandomArrayGenerator')
const Sorting = require('./classes/Sorting')
const Searching = require('./classes/Searching')
const Monitoring = require('./classes/Monitoring')

let lenLimit = null
let minLimit = null
let maxLimit = null
let searchElementData = {}
let searchedElement = null
let searchedElementIndex = null
let randomArray = []
let sortedArray = []
let user_selection_sort = ''
let user_selection_search = ''
let monitoring

async function getUserInput() {
  // Функция `getUserInput` используется для получения пользовательского ввода с помощью библиотеки inquirerjs.
  // Она возвращает промис, который разрешается, когда пользователь вводит все необходимые значения.
  return inquirer
    .prompt([
      {
        type: 'input',
        name: 'lenLimit',
        message: 'Введите ограничение длины массива: ',
      },
      {
        type: 'input',
        name: 'minLimit',
        message: 'Введите минимальное ограничение значения элемента массива: ',
      },
      {
        type: 'input',
        name: 'maxLimit',
        message: 'Введите максимальное ограничение значения элемента массива: ',
      },
    ])
    .then((answers) => {
      // Если промис разрешается успешно, то мы получаем ответы пользователя
      // и присваиваем их соответствующим переменным.
      lenLimit = Number(answers.lenLimit)
      minLimit = Number(answers.minLimit)
      maxLimit = Number(answers.maxLimit)
      return { lenLimit, minLimit, maxLimit }
    })
    .catch((error) => {
      // Если возникает ошибка при чтении ввода, мы выводим сообщение об ошибке
      // и завершаем выполнение программы.
      console.log('Ошибка при чтении ввода: ' + error)
      process.exit(0)
    })
}

async function getRandomArray() {
  // Функция `getRandomArray` используется для получения случайного массива на основе введенных пользователем ограничений.
  // Она возвращает промис, который разрешается, когда массив сгенерирован.
  const { lenLimit, minLimit, maxLimit } = await getUserInput()
  randomArray = new RandomArrayGenerator(
    lenLimit,
    minLimit,
    maxLimit,
  ).generateRandomArray()

  console.log(`Длина массива: ${randomArray.length}`)

  if (randomArray.length <= 20) {
    console.log(`Итоговый массив: ${randomArray}`)
  } else {
    console.log(
      `Итоговый массив содержит более 20 элементов.\nПервые 10 элементов: ${randomArray.slice(
        0,
        10,
      )}\nПоследние 10 элементов: ${randomArray.slice(-10)}`,
    )
  }
}

async function getUserSortType() {
  return inquirer
    .prompt([
      {
        type: 'list',
        name: 'user_selection_sort',
        message: 'Выберите тип сортировки:',
        choices: ['selectionSort', 'insertionSort', 'quickSort', 'bubbleSort'],
      },
    ])
    .then((answer) => {
      // Если промис разрешается успешно, то мы получаем ответы пользователя
      // и присваиваем их соответствующим переменным.
      user_selection_sort = answer.user_selection_sort
      return user_selection_sort
    })
    .catch((error) => {
      console.log('Ошибка при чтении ввода: ' + error)
      process.exit(0)
    })
}

async function getSortedArray() {
  user_selection_sort = await getUserSortType()
  let sorting = new Sorting(randomArray.slice(0))
  // Сортировка массива
  switch (user_selection_sort) {
    case 'selectionSort':
      sortedArray = sorting.selectionSort()
      monitoring = new Monitoring(sorting.selectionSort()).fnTimer()
      monitoring = new Monitoring(sorting.selectionSort()).fnMemo()
      break
    case 'insertionSort':
      sortedArray = sorting.insertionSort()
      monitoring = new Monitoring(sorting.insertionSort()).fnTimer()
      monitoring = new Monitoring(sorting.insertionSort()).fnMemo()
      break
    case 'quickSort':
      sortedArray = sorting.quickSort()
      monitoring = new Monitoring(sorting.quickSort()).fnTimer()
      monitoring = new Monitoring(sorting.quickSort()).fnMemo()
      break
    case 'bubbleSort':
      sortedArray = sorting.bubbleSort()
      monitoring = new Monitoring(sorting.bubbleSort()).fnTimer()
      monitoring = new Monitoring(sorting.bubbleSort()).fnMemo()
      break
  }
  if (randomArray.length <= 20) {
    console.log(`Итоговый отсортированный массив: ${sortedArray}`)
  } else {
    console.log(
      `Итоговый отсортированный массив содержит более 20 элементов.\nПервые 10 элементов: ${sortedArray.slice(
        0,
        10,
      )}\nПоследние 10 элементов: ${sortedArray.slice(-10)}`,
    )
  }
}

async function getUserSearchElement() {
  return inquirer
    .prompt([
      {
        type: 'input',
        name: 'searchElement',
        message: 'Введите элемент для поиска:',
      },
      {
        type: 'list',
        name: 'user_selection_search',
        message: 'Выберите тип сортировки:',
        choices: [
          'linearSearchWithWhile',
          'linearSearchWithFor',
          'binary_search',
        ],
      },
    ])
    .then((answers) => {
      return answers
    })
    .catch((error) => {
      console.log('Ошибка при чтении ввода: ' + error)
      process.exit(0)
    })
}

async function getSearchElementIndex() {
  searchElementData = await getUserSearchElement()
  searchedElement = Number(searchElementData.searchElement)
  user_selection_search = searchElementData.user_selection_search

  let unSortSearching = new Searching(randomArray.slice(0), searchedElement)
  let sortSearching = new Searching(sortedArray.slice(0), searchedElement)

  console.log(
    `Поиск индекса элемента ${searchedElement} в несортированном массиве`,
  )
  if (user_selection_search === 'linearSearchWithWhile') {
    searchedElementIndex = unSortSearching.linearSearchWithWhile()
    monitoring = new Monitoring(
      unSortSearching.linearSearchWithWhile(),
    ).fnTimer()
    monitoring = new Monitoring(
      unSortSearching.linearSearchWithWhile(),
    ).fnMemo()
    console.log(`Индекс искомого элемента: ${searchedElementIndex}`)
  } else if (user_selection_search === 'linearSearchWithFor') {
    searchedElementIndex = unSortSearching.linearSearchWithFor()
    monitoring = new Monitoring(unSortSearching.linearSearchWithFor()).fnTimer()
    monitoring = new Monitoring(unSortSearching.linearSearchWithFor()).fnMemo()
    console.log(`Индекс искомого элемента: ${searchedElementIndex}`)
  } else if (user_selection_search === 'binary_search') {
    console.log(`Бинарный поиск возможен только на отсортированном массиве`)
  }

  console.log(
    `Поиск индекса элемента ${searchedElement} в сортированном массиве`,
  )
  if (searchElementData.user_selection_search === 'linearSearchWithWhile') {
    searchedElementIndex = sortSearching.linearSearchWithWhile()
    monitoring = new Monitoring(sortSearching.linearSearchWithWhile()).fnTimer()
    monitoring = new Monitoring(sortSearching.linearSearchWithWhile()).fnMemo()
    console.log(`Индекс искомого элемента: ${searchedElementIndex}`)
  } else if (
    searchElementData.user_selection_search === 'linearSearchWithFor'
  ) {
    searchedElementIndex = sortSearching.linearSearchWithFor()
    monitoring = new Monitoring(sortSearching.linearSearchWithFor()).fnTimer()
    monitoring = new Monitoring(sortSearching.linearSearchWithFor()).fnMemo()
    console.log(`Индекс искомого элемента: ${searchedElementIndex}`)
  } else if (searchElementData.user_selection_search === 'binary_search') {
    searchedElementIndex = sortSearching.binarySearch()
    monitoring = new Monitoring(sortSearching.binarySearch()).fnTimer()
    monitoring = new Monitoring(sortSearching.binarySearch()).fnMemo()
    console.log(`Индекс искомого элемента: ${searchedElementIndex}`)
  }
}

// Функция `main` является точкой входа в программу и запускает все остальные функции
async function main() {
  await getRandomArray()
  await getSortedArray()
  await getSearchElementIndex()
  process.exit(0)
}

main()
