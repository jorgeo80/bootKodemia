const express = require('express')
const blog = require('../usecases/kodeblog')
const router = express.Router()

router.get('/', async (request, response) => {
  try { 
  const allBlogs = await blog.getAll()
  response.json({
    success: true,
    message: 'all blogs',
    data: {
      dataBlogs: allBlogs
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

router.post('/', async (request, response) => {
  try {
    const newBlog = await blog.create(request.body)
    response .json({
      success: true,
      message: 'Blog created',
      data: {
        dataBlog: newBlog
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
    const blogFound = await blog.getById(id)

    response.json({
      success: true,
      message: 'blog id found',
      data: {
        dataBlog: blogFound
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

router.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params
    const blogDeleted = await blog.deleteById(id)

    response.json({
      success: true,
      message: 'blog id deleted',
      data: {
        dataBlog: blogDeleted
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

router.patch('/:id', async (request, response) => {
  try {
    const { id } = request.params
    const blogPatched = await blog.updateById(id, request.body)

    response.json({
      success: true,
      message: 'blog id updated',
      data: {
        dataBlog: blogPatched
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