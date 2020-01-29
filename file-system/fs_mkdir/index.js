const fs = require('fs')

function makeDirFile(pathDir,fileName){
    fs.mkdir(pathDir, { recursive: true }, err => {
        if(err) throw err 
        console.log('Carpeta Creada')
    })
    fs.writeFile(pathDir + '/' + fileName,'Escritura de Prueba',
        err => err || console.log(`Salida`))
}

makeDirFile('test2','writeTest2.txt')