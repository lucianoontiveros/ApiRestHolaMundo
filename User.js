const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const esquema = new Schema({
        name: { type: String, required: true, minLength: 3},
        lastname: { type: String, required: true, minLength: 3},
      });

const users = mongoose.model('users', esquema)
module.exports = users