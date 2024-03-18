require('dotenv').config()
const readline = require('node:readline')
const process = require('node:process')
const { performance } = require('node:perf_hooks')
const RandomArrayGenerator = require('./classes/RandomArrayGenerator')
const Sorting = require('./classes/Sorting')
const Searching = require('./classes/Searching')
const Monitoring = require('./classes/Monitoring')

let randomArrayGenerator = await new RandomArrayGenerator(
  lenLimit,
  minLimit,
  maxLimit,
)
let randomArray = await randomArrayGenerator.generateRandomArray()

/*
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let lenLimit
let minLimit
let maxLimit

rl.question('Введите ограничение длины массива: ', (answer) => {
  lenLimit = Number(answer)
  rl.question(
    'Введите минимальное ограничение значения элемента массива: ',
    (answer) => {
      minLimit = Number(answer)
      rl.question(
        'Введите максимальное ограничение значения элемента массива: ',
        (answer) => {
          maxLimit = Number(answer)
          console.log('Success!')
          rl.close()
          process.exit(0)
        },
      )
    },
  )
  rl.on('error', function (error) {
    console.log('Ошибка при чтении ввода: ' + error)
    rl.close()
    process.exit(0)
  })
})
*/
/*
    console.log(`Длина массива: ${array.length}`)
    if (array.length <= 20) console.log(`Итоговый массив: ${array}`)
    else {
      console.log(
        `Итоговый массив содержит более 20 элементов.\nПервые 10 элементов: ${array.slice(
          0,
          10,
        )}\nПоследние 10 элементов: ${array.slice(-10)}`,
      )
    }
*/
