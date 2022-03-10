const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static(__dirname + '/front'))

app.get('/', (req, res) => {
    res.send('working')
})

const routes = require('./routes')
app.use('/api', routes)

const port = 3001

app.listen(port, () => {
    console.log('server running on localhost: ', port)
})