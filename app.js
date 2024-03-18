// require('dotenv').config()
const inquirer = require('inquirer')
const process = require('node:process')
const { performance } = require('node:perf_hooks')
const RandomArrayGenerator = require('./classes/RandomArrayGenerator')

let lenLimit = null
let minLimit = null
let maxLimit = null
let randomArray = []

async function getUserInput() {
  // Функция `getUserInput` используется для получения пользовательского ввода
  // с помощью библиотеки inquirerjs.
  // Она возвращает промис, который разрешается, когда пользователь вводит все
  // необходимые значения.
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

async function main() {
  // Функция `main` является точкой входа в программу и запускает все остальные функции
  await getRandomArray()
  process.exit(0)
}

main()
