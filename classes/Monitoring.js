class Monitoring {
  constructor(fn) {
    this.fn = fn
  }

  fnTimer() {
    let startTime = performance.now()
    this.fn
    let endTime = performance.now()
    let executionTime = endTime - startTime
    console.log(`Время выполнения функции: ${executionTime} мс`)
  }
  fnMemo() {
    let memoryBefore = process.memoryUsage().heapUsed
    this.fn
    let memoryAfter = process.memoryUsage().heapUsed
    let result = ((memoryAfter - memoryBefore) / 8 / 1024).toFixed(2)
    console.log('Потребление памяти:', result, 'Kbyte')
  }
}

module.exports = Monitoring
