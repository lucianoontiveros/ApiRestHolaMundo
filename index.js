const mongoose = require('mongoose')
require('dotenv').config()
mongoose.connect(process.env.BASEDEDATOS)

const User = mongoose.model('User', {
    username: String,
    edad: Number,

})
// modelo recibe el nombre de la coleccion y entre {} se agrega todo el objeto con la forma que queremos que tenga nuestra estructura. 
const crear = async () => {
    const user = new User({ username:'Luciano', edad: 31})
    const savedUser = await user.save()
    console.log(savedUser)
}


const buscarTodo = async () => {
    const users = await User.find()
    console.log(users)
}

const buscar = async () => {
    const user = await User.find({ username: 'chanchito feliz'})
    console.log(user)
}
// find devuelve un ARREGLO []

const buscarUno = async () => {
    const user = await User.findOne({ username: 'felipe'})
    console.log(user)
}
// findOne devuelve un OBJETO {}

const actualizar = async () => {
    const user = await User.findOne({ username: 'Luciano'})
    console.log(user)
    user.edad = 30
    await user.save()
}

const eliminar = async () => { 
    const user = await User.findOne({ username: 'chanchito feliz'})
    console.log(user)
    if (user){ 
        await user.remove() 
    } else {
        console.log('Lo siento el usuario no se encuentra')
    }
}


// tener en cuenta que al crear nuestro modelo const user usamos a User como minuscula. La razon es porque estamos creando una instancia de ese modelo. Por ello simplemente a modo de convencion lo ingresamos de esa forma.
