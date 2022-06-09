const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/hrithik007', (req, res) => {
res.send('Hello World! of Hrithik007')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})