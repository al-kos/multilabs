// require('dotenv').config()

const RandomArrayGenerator = require('../classes/RandomArrayGenerator')
const Sorting = require('../classes/Sorting')
const Searching = require('../classes/Searching')
const Monitoring = require('../classes/Monitoring')

const express = require('express')
const expressHbs = require('express-handlebars')
const path = require('path')
const hbs = require('hbs')
const router = express.Router()
const bodyParser = require('body-parser')

const app = express()

app.set('view engine', 'hbs')

app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.json())
app.use(express.static('public'))

// app.use('/', (req, res) => {
//   res.render('main.hbs')
// })

app.get('/', (req, res) => {
  res.sendFile('/views/layouts/layout.html', { root: 'public' })
})

app.get('/algs', (req, res) => {
  res.sendFile('/views/partials/algoritms.html', { root: 'public' })
})

app.listen(5000, () => {
  console.log('Сервер запущен, порт 5000')
})
