const process = require('node:process')
const { performance } = require('node:perf_hooks')

function fnTimer(fn) {
  let memoryBefore = process.memoryUsage().heapUsed
  let startTime = performance.now()
  fn
  let memoryAfter = process.memoryUsage().heapUsed
  let endTime = performance.now()
  let executionTime = endTime - startTime
  console.log(
    `Время начала выполнения: ${startTime}\nВремя завершения выполнения: ${endTime}\nВремя выполнения функции: ${executionTime} мс`,
  )
  console.log(
    'Потребление памяти:',
    ((memoryAfter - memoryBefore) / 8 / 1024).toFixed(2),
    'Kbyte',
  )
}

module.exports = fnTimer