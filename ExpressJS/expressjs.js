const express = require('express')
const server = express()

server.get('/jorge', (req, res) => {
    res.send('Toma un Jorge')    
})

server.post('/jorge', (req, res) => {
    res.send('Crea un Jorge')    
})

server.all('*', (req, res) => {
    res.send('No eres Jorge')    
})

server.listen(8080, () => {
    console.log('APP listening')
})