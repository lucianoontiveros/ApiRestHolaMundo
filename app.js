const express = require('express')
const user = require('./user.controller')
const app  = express()
const port = 3000;
const mongoose = require('mongoose')


app.use(express.json())


// espress es un franwork, es una dependencia de terceros que tiene una utilidad. En este caso (const express)es una constante, pero en realidad es una funcion
// require nos sirve para traer las dependencias de terceros que instalemos. Es como un import. 
//enpoints son rutas a las que tu puedes llegar a traves de una peticion movil o de un dispositivo.

require('dotenv').config()
mongoose.connect(process.env.BASEDEDATOS)
app.get('/users', user.list);
app.post('/users', user.create);
app.get('/users/:id', user.get);
app.put('/users/:id' , user.update);
app.path('/users/:id', user.update);
app.delete('/users/:id', user.destroy);

app.use(express.static('app'))
app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/index.html`)
})

app.get('*', (req, res) => {
    res.status(404).send('Esta pagina no existe')
})

app.post('*', (req, res) => {
    res.status(404).send('Esta pagina no existe')
})

app.listen(port, () => { // esta funcion es la que se va ejecutar cuando nuestra aplicacion comienza a funcionar desde la terminal node app.js
    console.log('Arrancando la aplicacion')  
})