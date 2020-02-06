const express = require('express')
const app = express()
const koderslist = require('./kodersList.js') // TODO: create a file

app.get('/koders', (request, response) => {
  response.json({
    success: true,
    data: {
      koders: koderslist
    }
  })
})

app.get('/koders/:id', (request, response) => {
  const { id: koderId } = request.params
  const koder = koderslist.find((koder => koder.id === parseInt(koderId)))
  response.json({
    success: true,
    data: {
      koder
    }
  })
})

app.get('/koders/name/:name', (request, response) => {
  const { name: koderName } = request.params
  const koders = koderslist.filter(koder => koder.name === koderName)
  response.json({
    success: true,
    data: {
      koders
    }
  })
})

app.listen(8080, () => {
  console.log('APP RUNNING')
})
