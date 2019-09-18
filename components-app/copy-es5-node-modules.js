const fs = require('fs-extra')
const path = require('path')

const originDirectory = 'bower_components'
const destinationDirectory = 'node_modules'

console.log('\n====================\n')
console.log('Copying ES5 modules from ES5 builds into node_modules:\n')
main()
console.log('\n====================\n')

function main() {
    try {
        if (!fs.accessSync(originDirectory)) {
            fs.readdirSync(originDirectory).map(content => {
                const readModule = path.join(originDirectory, content, 'es5', 'node_modules')
                if (!fs.accessSync(readModule)) {
                    fs.readdirSync(readModule).map(content => {
                        copy(
                            path.join(readModule, content),
                            path.join(destinationDirectory, content)
                        )

                    })
                }
            })
        }
    } catch (e) {
        console.log(`❌ No ES5 build available at ${e.path}`)
    }
}

function copy(origin, destination) {
    try {
        if (!fs.accessSync(destinationDirectory) && !fs.accessSync(origin)) {
            fs.copySync(origin, destination)
            console.log(`✅ Copied ${origin} into ${destination}`)
        }
    } catch (e) {
        console.log(`❌ No access at ${e.path}`)
    }
}