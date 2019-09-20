const express = require('express')
const path = require('path')
const cors = require('cors')
const UA = require('@financial-times/polyfill-useragent-normaliser')

const app = express()
app.use(cors())
app.listen(8090)

// app.use('*', (request, response, next) => {
//     const userAgentFamily = new UA(request.headers['user-agent']).getFamily()
//     if (userAgentFamily === 'ie') {
//         // app.use('/src', (request, response, next) => {
            
//             // })
//         }
//         next()
//     })
    
app.use('/src', (request, response, next) => {
    const modulePath = request.path.split('.')[0]
    response.sendFile(path.join(__dirname,`node_modules/components-catalog/build/es5/packages${modulePath}/src${modulePath}.js`))
})

app.use('/node_modules', (request, response, next) => {
    response.sendFile(path.join(__dirname,`node_modules/components-catalog/build/es5/node_modules${request.path}`))
})

app.use('/components/es5', express.static(path.join(__dirname, 'node_modules/components-catalog/build/es5/packages/')))
app.use('/components', express.static(path.join(__dirname,'node_modules/components-catalog/build/es6/packages')))
