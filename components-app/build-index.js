const jsdom = require('jsdom')
const path = require('path')
const fs = require('fs')

const originDirectory = path.join('node_modules', 'components-catalog', 'node_modules')

console.log('Adding modules from the catalog to index.html:\n')
main()

async function main() {
    const modulesList = readModules(originDirectory)
    const dom = await jsdom.JSDOM.fromFile('index.html.template')
    const newIndex = addModulesToIndex(dom, modulesList)
    writeFile('index.html', newIndex)
}

function writeFile(fileName, contents) {
    fs.writeFile(fileName, context, err => {
        if (err) {
            console.log(`❌ I can't write index.html`, err)
        } else {
            console.log(`✅ Created index.html successfully!\n`)
        }
    })
}

function addModulesToIndex(dom, modules) {
    const document = dom.window.document

    modules.forEach(module => {
        // Adding script modules to the head
        // e.g. <script type=module src=path/to/my-web-component/my-web-component.js></script>
        const script = document.createElement('script')
        script.type = 'module'
        script.src = path.join(originDirectory, module, `${module}.js`)
        document.head.appendChild(script)

        // Adding module element to the body
        // e.g. <my-web-component></my-web-component>
        const el = document.createElement(module)
        document.body.appendChild(el)
    })

    console.log(`Added modules for:`)
    console.log(modules)

    return dom.serialize()
}

function readModules(originDirectory) {
    try {
        if (!fs.accessSync(originDirectory)) {
            return fs.readdirSync(originDirectory)
        }
    } catch (e) {
        console.log(`❌ I can't read ${e.path}`)
    }
}