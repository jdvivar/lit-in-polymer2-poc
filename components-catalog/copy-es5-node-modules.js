const fs = require('fs-extra')
const path = require('path')

const originDirectory = path.normalize('build/es5/packages')
const destinationDirectory = path.normalize('node_modules')

console.log('\n====================\n')
console.log('Copying ES5 modules from ES5 builds into node_modules:\n')
main()
console.log('\n====================\n')

function main() {
    try {
        if (!fs.accessSync(originDirectory)) {
            fs.readdirSync(originDirectory).map(packageName => {
                const modulesDirectory = path.join(originDirectory, packageName, 'node_modules')
                if (!fs.accessSync(modulesDirectory)) {
                    fs.readdirSync(modulesDirectory).map(moduleName => {
                        copy(
                            path.join(modulesDirectory, moduleName),
                            path.join(destinationDirectory, moduleName)
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
        if (!fs.accessSync(destination) && !fs.accessSync(origin)) {
            fs.copySync(origin, destination)
            console.log(`✅ Copied ${origin} into ${destination}`)
        }
    } catch (e) {
        console.log(`❌ No access at ${e.path}`)
    }
}