const express = require('express')
const server = express()

server.get('/', (req, res) => {
    res.send('No eres Jorge')    
})

server.get('/jorge', (req, res) => {
    res.send('Toma un Jorge')    
})

server.post('/jorge', (req, res) => {
    res.send('Crea un Jorge')    
})

server.listen(8080, () => {
    console.log('APP listening')
})