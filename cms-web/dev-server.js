const express = require('express')
const path = require('path')
const app = express()

const es5Path = 'node_modules/components-catalog/build/es5'
const es6Path = 'node_modules/components-catalog/build/es6/packages'
const port = process.argv[2] || 9999

app.use('/components/es5', express.static(path.join(__dirname, es5Path)))
app.use('/components', express.static(path.join(__dirname, es6Path)))
app.use('/', express.static(__dirname))

app.listen(port)

console.log(`Listening on port ${port} ...`)
