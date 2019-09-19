const express = require('express')
const path = require('path')
const cors = require('cors')
const UA = require('@financial-times/polyfill-useragent-normaliser')

const app = require('express')()
app.use(cors())
app.listen(8090)

app.use('/components/es5', (request, res, next) => {
    const userAgentFamily = new UA(request.headers['user-agent']).getFamily()
    if (userAgentFamily === 'ie') {
        console.log('Using IE special routes...')
        app.use('/src', (request, res, next) => {
            console.log(request.originalUrl)
            next()
        })
    }
    next()
})

app.use('/components/es5', express.static(path.join(__dirname,
    'node_modules/components-catalog/build/es5/packages/'
)))
app.use('/components', express.static(path.join(__dirname,
    'node_modules/components-catalog/build/es6/packages'
)))
