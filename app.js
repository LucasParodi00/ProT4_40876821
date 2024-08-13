
require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000


app.use(express.json());

app.get('/', (req, res) => {
    res.send('Bienvenidos a la API');
})

// app.get('/libros',)

app.listen(port, () => {
    console.log('Servidor corriendo en el puerto 8001');
})