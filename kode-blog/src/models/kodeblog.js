const mongoose = require('mongoose')
const kodeBlogsSchema = new mongoose.Schema({
  title: {
    type: String,
    minlength: 5,
    maxlength: 100,
    required: true,
    trim: true,
    toLowerCase: true
  },
  author: {
    type: String,
    minlength: 5,
    maxlength: 100,
    required: true,
    trim: true,
    toLowerCase: true
  },
  date: {
    type: Date,
    required: true
  },
  readTime: {
    type: String,
    minlength: 1,
    maxlength: 3,
    required: true,
    trim: true
  },
  image: {
    type: String,
    minlength: 5,
    maxlength: 100,
    required: true,
    trim: true,
    toLowerCase: true
  }
})

module.exports = mongoose.model('blogs', kodeBlogsSchema)