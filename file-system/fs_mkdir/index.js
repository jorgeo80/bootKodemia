const fs = require('fs')

fs.mkdir('test1',function(err) {
    if(err){
        console.log(err);
        return 
    }
    console.log('Carpeta creada')
})