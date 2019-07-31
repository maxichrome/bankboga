const express = require('express')
const app = express()

const data = require('../data')
const utils = require('../utils')

function validateUsername(username) {
    if (username === undefined)
        return false

    const match = username.match(/^([A-Za-z0-9._ ]+)#\d{4}$/)

    if (match)
        return match[1]

    return false
}

function validatePassword(password) {
    if (password === undefined)
        return false

    if (password.length >= 16
        && password.includes('asdfasdf'))
        return true

    return false
}

app.route('/login')
    .get((req, res, next) => res.redirect('/'))
    .post((req, res, next) => {
        const username = req.body['username']
        const password = req.body['password']

        if (validateUsername(username) && validatePassword(password)) {
            const vUsername = validateUsername(username)
            res.cookie('userAuth', vUsername)
            res.redirect('/')
        } else {
            if (!validateUsername(username))
                res.redirect('/?error=user')
            else if (!validatePassword(password))
                res.redirect('/?error=pass')
            else
                res.redirect('/?error=yes')
        }
    })

app.route('/logout')
    .get((req, res, next) => {
        res.clearCookie('userAuth')
        res.redirect('/a/login')
    })

module.exports = app