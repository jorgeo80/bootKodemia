const express = require('express')
const user = require('../usecases/user')
const router = express.Router()

router.post('/', async (request, response) => {
  try {
    const userCrated = await user.create(request.body)
    response.json({
      success: true,
      message: 'user created',
      data: {
        user: userCrated
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

router.post('/login', async (request, response) => {
  try {
    const { passwoord, email } = request.body
    if( !passwoord || !email) throw new Error('Unauthorized')
    const jwt = await user.login(email, passwoord)
    response.json({
      success: true,
      message: 'logged in',
      data: {
        token: jwt
      }
    })    
  } catch (error) {
    response.status(401)
    response.json({
      success: false,
      message: 'Unauthorized' //error.message      
    })
  }
})

router.delete('/', async (request, response) => {
  try {
    const { id } = request.params
    const userDeleted = await user.deleteById(id)
    response.json({
      success: true,
      message: 'user deleted',
      data: {
        user: userDeleted
      }
    })    
  } catch (error) {
    response.status(401)
    response.json({
      success: false,
      message: 'Unauthorized' //error.message      
    })
  }
})

module.exports = router