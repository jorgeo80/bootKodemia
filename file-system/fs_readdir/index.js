const fs = require('fs')

fs.readdir('test', 'utf8', (err, files) => {
    if (err) throw err
    console.log(`Archivos del Directorio: ${files}`)
})

