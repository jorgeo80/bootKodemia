const fs = require('fs')

fs.appendFile('appendTest.txt', 'Linea Dos append', err => err || console.log('Texto ingresado'))