const express = require('express')
const path = require('path')
const cors = require('cors')

const app = express()
app.use(cors())
app.listen(8090)

const es5PackagesPath = 'node_modules/components-catalog/build/es5/packages'
const es6PackagesPath = 'node_modules/components-catalog/build/es6/packages'

app.use('/components',  express.static(path.join(__dirname, es6PackagesPath)))
app.use('/components/es5', express.static(path.join(__dirname, es5PackagesPath)))

// Serving WRONG IE11 src requests as relative to the specific package src folder
// In order for this to work, the class definition and name should share the exact same name
app.use('/src', (request, response, next) => {
    const modulePath = request.path.split('.')[0]
    response.sendFile(path.join(__dirname,`node_modules/components-catalog/build/es5/packages${modulePath}/src${modulePath}.js`))
})

// Serving WRONG IE11 node_modules requests as relative to the es5/node_modules folder
app.use('/node_modules', (request, response, next) => {
    response.sendFile(path.join(__dirname,`node_modules/components-catalog/build/es5/node_modules${request.path}`))
})

// app.use('/components/es5', express.static(path.join(__dirname, 'node_modules/components-catalog/build/es5/packages/')))
// app.use('/components', express.static(path.join(__dirname,'node_modules/components-catalog/build/es6/packages')))
