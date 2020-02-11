const blog = require('../models/kodeblog')

const create = blogInfo => new blog(blogInfo).save()
const getAll = () => blog.find()
const getById = (id) => blog.findById(id)
const deleteById = (id) => blog.findByIdAndDelete(id)
const updateById = (id, blogInfotoUpdate) => blog.findByIdAndUpdate(id, blogInfotoUpdate)

module.exports = {
  create,
  deleteById,
  getAll,
  getById,
  updateById
}