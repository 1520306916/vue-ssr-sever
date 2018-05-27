const express = require("express")
const cors = require('cors')
const api = require("./api")
const app = express()

app.use(cors())
app.use('/api', api)
app.listen(5000, ()=> {
  console.log('5000')
})
  


