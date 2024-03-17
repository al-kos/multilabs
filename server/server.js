const express = require('express')
const app = express()

app.use(express.json())
app.use(express.static(`public`))

app.get('/', (req, res) => {
  res.sendFile('/html/index.html', { root: 'public' })
})

app.post('/', (req, res) => {
  console.log(req.body)
})

app.listen(5000, () => {
  console.log('Сервер запущен на порту 5000')
})
