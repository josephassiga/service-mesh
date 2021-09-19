const express = require('express')
const app = express()
const port = 3000

/*app.get('/', (req, res) => {
  res.send('Hello World!')
})*/

/**app.get('/health', (req, res) => {
  res.send('I am ready')
})*/

app.get('/xj2/api/map', (req, res) => {
  res.send('I in xj2 api map here.')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})