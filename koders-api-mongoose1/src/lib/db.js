const mongoose = require('mongoose')

const DB_PASSWORD = 'kodemia123'
const DB_NAME = 'kodemia'
const url = `mongodb+srv://jorgeo80:${DB_PASSWORD}@sexta-gen-zdpnv.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`

module.exports = mongoose.connect(url, { 
  useNewUrlParser: true,
  useUnifiedTopology:true
})