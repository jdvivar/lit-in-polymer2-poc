// This server is needed to:
// 1 - Remove the need to disable CORS
// 2 - Be able to correctly serve components to IE11

const express = require('express')
const proxy = require('http-proxy-middleware')
const path = require('path')
const app = express()

app.use(
    '/components',
    proxy({
        target: `http://localhost:8090`,
        changeOrigin: true
    })
)

app.use(
    '/SimpleWc1.js',
    proxy({
        target: `http://localhost:8090/components/es5/simple-wc-1`,
        changeOrigin: true
    })
)

app.use(
    '/SimpleWc2.js',
    proxy({
        target: `http://localhost:8090/components/es5/simple-wc-2`,
        changeOrigin: true
    })
)

app.use(
    '/node_modules',
    proxy({
        target: `http://localhost:8090/components/es5/simple-wc-1`,
        changeOrigin: true
    })
)

app.use('/', express.static(__dirname))

app.listen(9999)
