const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('<html><body><h1>Hello world</h1></body></html>')
})

const port = 3000
app.listen(port, function () {
  console.log(`Server listening on http://localhost:${port}`)
})