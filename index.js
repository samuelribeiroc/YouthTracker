const express = require('express')
const routes = require('./routes')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(routes)
app.use(cors())

app.use(express.static(__dirname + '/front'))

const port = 3001

app.listen(process.env.PORT || port, () => {
    console.log('server running on localhost: ', port)
})