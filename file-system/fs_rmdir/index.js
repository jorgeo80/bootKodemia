const fs = require('fs')

let path = 'test'
fs.rmdir(path, {recursive: true}, err => {
    if (err) throw err
    console.log(`Dirctorio Eliminado: ${path}`)
})
