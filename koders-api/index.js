const express = require('express')
const app = express()
const koderslist = require('./kodersList.js') // TODO: create a file

app.use(express.json()) // esta funcion define el body

// app.post('/', (request, response) => {
//   console.log('body: ', request.body)
//   response.json(request.body)
// })

app.post('/koders', (request, response) => {
  const koder = request.body
  koderslist.push(koder)  
  response.json({
    success: true,
    message: 'Koder created',
    data: {
      koder
    }
  })
})

app.del('/koders/:id',(request, response) => {
  try {
    const { id: koderId } = request.params
    const koderIndex = koderslist.findIndex(koder => koder.id === parseInt(koderId))
    // console.log(koderIndex)
    if (koderIndex < 0) throw new Error(`Koder with id: ${koderId} not found`)
    koderslist.splice(koderIndex, 1)
    response.json({
      success: true,
      data: {
        koders: koderslist
      }
    })

  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      message: error.message,
      error
    })
  }
})

app.get('/koders', (request, response) => {
  const { name } = request.query
  console.log('name :',name )
  let koders = null
  if (name) {
    koders = koderslist.filter(koder => koder.name.includes(name))
  }
  response.json({
    success: true,
    data: {
      koders: koders || koderslist
    }
  })
})

app.get('/koders/:id', (request, response) => {
  try {
  const { id: koderId } = request.params
  const koder = koderslist.find((koder => koder.id === parseInt(koderId)))
  
  if (!koder) throw new Error(`Can't find koder with id ${koderId}`)
  response.json({
    success: true,
    data: {
      koder
    }
  })
} catch(error) {
  response.status(404)
  response.json({
    success: true,
    error: error.message
  })

}
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
