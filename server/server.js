// require('dotenv').config()
// const path = require('path')

const RandomArrayGenerator = require('../classes/RandomArrayGenerator')
const Sorting = require('../classes/Sorting')
const Searching = require('../classes/Searching')
const Monitoring = require('../classes/Monitoring')

const express = require('express')
const { engine } = require('express-handlebars')
const handlebars = require('handlebars')
const bodyParser = require('body-parser')

const app = express()

app.engine(
  'handlebars',
  engine({
    defaultLayout: 'main',
  }),
)
app.set('view engine', 'handlebars')
app.set('views', './views')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.json())
app.use(express.static('public'))

app.get('/', (req, res) => res.render('home'))

app.get('/algs', (req, res) => res.render('algs'))

app.post('/algs', (req, res) => {
  const receivedData = req.body // Получаем данные, отправленные клиентом
  const responseString = JSON.stringify(receivedData)

  // Отправляем ответ в виде строки
  res.type('text/plain')
  res.send(responseString)
})

app.listen(5000, () => {
  console.log('Сервер запущен, порт 5000')
})
