const express = require('express')
const koder = require('../usecases/koder')
const router = express.Router()

router.get('/', async (request, response) => {
  try { 
  const koders = await koder.getAll()
  response.json({
    success: true,
    message: 'all koders',
    data: {
      koders
    }
  })
  } catch(error) {
    response.status(400)
    response.json({
      success: false,
      message: error.message      
    })
  }
})

// POST /koders -> la raiz del router
// Objetivo: Crear un koder
// obtener los datos del koder de request.body
// pasar la data de caso de uso koder.create
// 

router.post('/', async (request, response) => {
  try {
    const newKoder = await koder.create(request.body)
    response .json({
      success: true,
      message: 'koder created',
      data: {
        koder: newKoder
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      message: error.message
    })
  }
})

router.get('/:id', async (request, response) => {
  try {
    const { id } = request.params
    const koderFound = await koder.getById(id)

    response.json({
      success: true,
      message: 'koder id found',
      data: {
        koder: koderFound
      }
    })

  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      message: error.message
    })
  }
})

module.exports = router