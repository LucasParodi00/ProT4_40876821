
require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000

const rutasLibros = require('./src/routes/libros');

app.use(express.json());


app.use('/libros', rutasLibros);

app.get('/', (req, res) => {
    res.send('Bienvenidos a la API');
})




app.listen(port, () => {
    console.log('Servidor corriendo en el puerto', port);
})