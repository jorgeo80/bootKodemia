const express = require('express')

const kodeblogRouter =  require('./routes/kodeblog')

const app = express()

app.use(express.json())

app.use('/blogs', kodeblogRouter)

module.exports = app