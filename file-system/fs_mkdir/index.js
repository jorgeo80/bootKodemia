const fs = require('fs')

fs.mkdir('test1', { recursive: true }, err => {
    if(err) throw err 
    console.log('Carpeta Creada')
})