const fs = require('fs')

fs.appendFile('appendFile.txt', 'Linea Dos append', err => err || console.log('Texto ingresado'))