const Koder = require('../models/koder')

// function create (kodersInfo) {
//   //const {name, email, gender, birthDate} = kodersInfo
//   const newKoder = new Koder(kodersInfo)
//   return newKoder.save()
//   // return Koder.create(kodersInfo) // esta forma sustituye a las 2 lineas de arriba
// }

const create = kodersInfo => new Koder(kodersInfo).save()

function getAll () {
  return Koder.find()  
}

function getById (id) {
  return Koder.findById(id)  
}

function deleteById (id) {
  return Koder.findByIdAndDelete(id)
}

function updateById (id, koderInfotoUpdate) {
  return Koder.findByIdAndUpdate(id, koderInfotoUpdate)
}

module.exports = {
  create,
  deleteById,
  getAll,
  getById,
  updateById
}