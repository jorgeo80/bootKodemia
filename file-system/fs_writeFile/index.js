const fs = require('fs')

fs.writeFile('writetest.txt','Escritura de Prueba', err => err || console.log(`Salida`))