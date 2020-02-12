const express = require('express')

const cors = require('cors')

const kodeblogRouter =  require('./routes/kodeblog')
const usersRouter =  require('./routes/user')

const app = express()
// para poder mandar a llamar la api desde cualquier front
app.use(cors()) 

app.use(express.json())

app.use('/blogs', kodeblogRouter)
app.use('/users', usersRouter)

module.exports = app