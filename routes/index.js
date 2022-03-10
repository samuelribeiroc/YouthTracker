const express = require('express')
const router = express.Router()

router.get('/home', (req, res) => {
    res.json({
        teste: 'teste'
    })
})

router.get('/series', (req, res) => {
    res.json({
        series: 'euphoria, glee'
    })
})

router.get('/inventory', (req, res) => {
    res.json({
        series: 'skam'
    })
})

module.exports = router