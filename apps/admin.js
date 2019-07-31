const express = require('express')
const app = express()

const data = require('../data')
const utils = require('../utils')

function employeeAuthenticated(req) {
    return req.cookies && (req.cookies['e_auth'] === 'employeeAuthenticated')
}

app.get('/', (req, res, next) => {
    if (!employeeAuthenticated(req))
        return res.redirect('/admin/login')

    res.render('admin/panel', {
        ...data,
        ...utils.basicData(req)
    })
})

app.route('/login')
    .get((req, res, next) => {
        if (employeeAuthenticated(req))
            return res.redirect('/admin')

        res.render('admin/auth', {
            ...data,
            ...utils.basicData(req)
        })
    })
    .post((req, res, next) => {
        console.log(req.body)

        if (req.body.code.startsWith('a123'))
            res.cookie('e_auth', 'employeeAuthenticated')

        res.redirect('/admin')
    })

module.exports = app