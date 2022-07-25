const mongoose = require('mongoose')

const users = mongoose.model('User', {
        name: { type: String, required: true, minLength: 3},
        lastname: { type: String, required: true, minLength: 3}
})

module.exports = users 