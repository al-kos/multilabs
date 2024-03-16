require('dotenv').config()
const readline = require('node:readline')
const process = require('node:process')

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.question('Введите первое число: ', function (num1) {
  rl.question('Введите второе число: ', function (num2) {
    let sum = Number(num1) + Number(num2)
    console.log('Сумма чисел равна: ' + sum)
    rl.close()
  })
  rl.on('error', function (error) {
    console.log('Ошибка при чтении ввода: ' + error)
    rl.close()
  })
})
