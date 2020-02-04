const http = require("http")

const server = http.createServer((request, response) => {
    console.log('request: :)')
    console.log('request: ', request.url)
    console.log('Method: ', request.method)
    if (request.url === '/jorge') {
        response.write('Hola Jorge')
    } else {
        response.write('No eres Jorge')
    }    
    response.end()
})

server.listen(8080, () => {
    console.log('server is listening localhost: 8080')    
})