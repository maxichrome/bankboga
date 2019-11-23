const express = require('express')
const app = express()

const data = require('../data')
const utils = require('../utils')

app.get('/rates', function (req, res, next) {
    res.render('rates', {
        ...utils.basicData(req)
    })
})

app.get('/contact', function (req, res, next) {
    res.render('contact', {
        ...utils.basicData(req)
    })
})

module.exports = app