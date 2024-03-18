/*Если в бади есть свойство, то делай это, если есть другое - то другое. 
  А итоговую кнопку нужно повесить на другой роутер*/
const RandomArrayGenerator = require('../classes/RandomArrayGenerator')
const express = require('express')
const app = express()

app.use(express.json())
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile('/html/index.html', { root: 'public' })
})

app.post('/', async (req, res) => {
  /*Если в бади есть свойство, то делай это, если есть другое - то другое. 
  А итоговую кнопку нужно повесить на другой роутер*/
  let { lenLimit, minLimit, maxLimit } = req.body

  let randomArrayGenerator = await new RandomArrayGenerator(
    lenLimit,
    minLimit,
    maxLimit,
  )
  let randomArray = await randomArrayGenerator.generateRandomArray()

  res.json({
    randomArray: randomArray,
  })
})

app.listen(5000, async () => {
  console.log('Сервер запущен на порту 5000')
})
