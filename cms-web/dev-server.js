// This server is needed to:
// 1 - Remove the need to disable CORS
// 2 - Be able to correctly serve components to IE11

const express = require('express')
const proxy = require('http-proxy-middleware')
const path = require('path')
const app = express()

app.use(
    ['/components', '/node_modules', '/src'],
    proxy({
        target: `http://localhost:8090`,
        changeOrigin: true
    })
)

app.use('/', express.static(__dirname))

app.listen(9999)
