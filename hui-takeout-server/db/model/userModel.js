const mongoose = require('mongoose')

var userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    pwd: { type: String, required: true },
    phone: String
})

var UsersModel = mongoose.model('users', userSchema)

module.exports = UsersModel