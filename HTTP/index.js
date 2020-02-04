const http = require("http")

const server = http.createServer((request, response) => {
    
    console.log(`Request: ${request.url}, Method: ${request.method}`)
    
    if (request.url === '/jorge') {
        if(request.method === 'GET'){
            response.write('Toma un Jorge')
        }
        if(request.method === 'POST'){
            response.write('Creando un Jorge')
        }
    } else {
        response.write('No eres Jorge')
    }    
    response.end()
})

server.listen(8080, () => {
    console.log('server is listening localhost: 8080')    
})