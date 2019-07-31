const express = require('express')
const app = express()

const data = require('../data')
const utils = require('../utils')

function employeeAuthenticated(req) {
    return req.cookies && (req.cookies['e_auth'] === 'employeeAuthenticated')
}

// app.use('*', (req, res, next) => {
//     if (!employeeAuthenticated(req))
//         return res.send({ error: 1, message: 'not authenticated' })

//     next()
// })

app.route('/accounts')
    .get((req, res, next) =>
        res.send(data.accounts))
    .post((req, res, next) => {
        if (typeof req.body === 'object') {
            data.accounts.push(req.body)
            res.end()
        } else return next('invalid data')
    })
    .patch((req, res, next) => {
        if (typeof req.body === 'object') {
            for (const number in req.body) {
                const account = data.accounts.find((account) => +account.number === +number)
                const acctIndex = data.accounts.indexOf(account)

                if (account)
                    data.accounts[acctIndex] = Object.assign((account || {}), req.body[number])
            }
        }
        else return next('invalid data')
    })
    .delete((req, res, next) => {

    })

module.exports = app