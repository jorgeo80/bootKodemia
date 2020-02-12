const user = require('../models/user')
const bcrypt =  require('../lib/bcrypt')
const jwt =  require('../lib/jwt')

async function create (userData) {
  const { password, ...restUserData } = userData
  const encryptedPassword = await bcrypt.hash(password) // encriptar(password)
  return user.create({
    password: encryptedPassword,
  ...restUserData
  })
}

function deleteById (id) {
  return user.findByIdAndDelete(id)
}

async function login (email, password) {
  const userFound = await user.findOne({ email })
  if (!user) throw new Error('Unauthorized')
  const isValidPassword = await bcrypt.compare(password, userFound.password)
  if (!isValidPassword) throw new Error('Unauthorized')
  return jwt.sign({ id: userFound._id })
}

module.exports = {
  create,
  deleteById,
  login
}