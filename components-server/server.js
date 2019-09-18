const express = require('express')
const path = require('path')
const cors = require('cors')
const app = require('express')()
app.use(cors())
app.listen(8090)

app.use('/components/es5', express.static(path.join(__dirname,
    'node_modules/components-app/build/es5/node_modules/components-catalog/node_modules'
)))
app.use('/components', express.static(path.join(__dirname,
    'node_modules/components-app/build/es6/node_modules/components-catalog/node_modules'
)))
