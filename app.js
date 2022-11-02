const express = require('express')
const app = express()
const port = 5040

app.get('/', (req, res) => {
  res.send('Hello World! Good to meet you. I am Shreya, HEY HEY HEY - Bokuto-San')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})