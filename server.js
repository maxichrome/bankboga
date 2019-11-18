const port = process.env['PORT'] || 8080

const express = require('express')
const path = require('path')
const https = require('https')
const fs = require('fs')

const app = express()

const utils = require('./utils')

app.set('view engine', 'pug')

app.use(require('body-parser').urlencoded({ extended: false }))
app.use(require('body-parser').json())
app.use(require('cookie-parser')())
app.use(express.static('static'))

app.use('/css', require('postcss-middleware')({
    src: (req) => {
        const splitPath = req.path.split('/')
        const file = splitPath.pop().split('.')
        file.pop()
        return path.join(__dirname, 'static', 'css', splitPath.join('/'), `${file}.pcss`)
    },
    plugins: [
        require('tailwindcss')('tailwind.config.js'),
        require('autoprefixer')(),
        require('postcss-import')(),
        require('postcss-nested')()
    ]
}))

app.get('*', (req, res, next) => {
    console.log(`Requested ${req.path}...`)

    next()
})

app.get('/', function (req, res) {
    if (req.cookies['userAuth'])
        return res.redirect('/b/accounts')

    res.render('landing', {
        query: req.query,
        ...utils.basicData(req)
    })
})

app.use('/a', require('./apps/userauth'))
app.use('/b', require('./apps/banking'))
app.use('/api', require('./apps/api'))

app.use('/pages', require('./apps/pages'))

app.get('*', function (req, res, next) {
    res.render('error', {
        error: '404',
        ...utils.basicData(req)
    })
})

app.use((err, req, res, next) => {
    res.render('error', {
        error: err.message || err.msg || err || 'Unknown error',
        ...utils.basicData(req)
    })
})

https.createServer({
	key: fs.readFileSync('server.key'),
	cert: fs.readFileSync('server.cert')
}, app).listen(port, () => {
	console.log(`Https server is listening! Port: ${port}`)
})

