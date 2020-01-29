const fs = require('fs')

fs.copyFile('test.txt','test1.txt', err => err?err:console.log(`Archivo copiado`))