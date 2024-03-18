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
let randomArray = []
let sortedArray = []
let user_selection_sort = ''

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
  console.log(user_selection_sort)
  console.log(sorting)
  // Сортировка массива
  switch (user_selection_sort) {
    case 'selectionSort':
      sortedArray = sorting.selectionSort()
      break
    case 'insertionSort':
      sortedArray = sorting.insertionSort()
      break
    case 'quickSort':
      sortedArray = sorting.quickSort()
      console.log('this')
      break
    case 'bubbleSort':
      sortedArray = sorting.bubbleSort()
      break
  }
  console.log(`Сортированный массив: ${sortedArray}`)
}

// Функция `main` является точкой входа в программу и запускает все остальные функции
async function main() {
  // await getUserInput()
  await getRandomArray()
  await getSortedArray()
  process.exit(0)
}

main()
