const express = require('express')
const server = express()

server.get('/jorge', (req, res) => {
    res.send('Toma un Jorge')    
})

server.post('/jorge', (req, res) => {
    res.send('Crea un Jorge')    
})

server.get('/middelwares', (req, res, next) => {
    console.log('Middleware 1')
    next()
}, (req, res, next) => {
    console.log('Middleware 2')
    next()
}, (req, res, next) => {
    console.log('Middleware 3')
    next()
}, (req, res) => {
    console.log('fin')
    res.send('fin')
})

server.use((req, res, next) => {
    console.log('Middleware NAME')
    next()
})

server.get('/koders/:id', (req, res) => {
    resp.send(`Koder: ${req.params.id}`)
})

server.get('/jorge/name', (req, res) => {
    res.send('Jorge')    
})


server.all('*', (req, res) => {
    res.send('No eres Jorge')    
})

server.listen(8080, () => {
    console.log('APP listening')
})