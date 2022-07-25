const Users = require('./User')
const User = {
// status nos informa si la respuesta tuvo exito y si viene un dato acompanada de esto. 
// 200 Ok. cuando queremos enviar un objeto un streing. 
// 201 Ok. creado. No es necesario que envia datos al cliente.
// 204 peticion con exito pero no vamos a devolver absolutamente nada. 
// el :id quiere decir que es un dato variable que va aparcer en la ruta.
    get: async (req, res) => {
        const { id } = req.params
        const user = await Users.findOne({ _id: id })
        res.status(200).send(user)
    },
    list: async (req, res) => {
        const users = await Users.find()
        res.status(200).send(users)
    },
    create: async (req, res) => {
        const user = new Users(req.body)
        const savedUser = await user.save()
        res.status(201).send(savedUser._id)
    },
    update: async (req, res) => {
        const { id } = req.params
        const user = await Users.findOne({ _id: id })
        Object.assign(user, req.body)
        await user.save()
        res.sendStatus(204)
    },
    destroy: async (req, res) => {
        const { id } = req.params
        const user = await Users.findOne({ _id: id })
        if(user){
            user.remove()
        }
        res.sendStatus(204)
    }
 }
 // En el caso que put, path, delete se corresponda con un 204 va ignorar totalmente el mensaje dado que no le estamos enviando nada. 
 module.exports = User // aqui estamos exportando 