
const express = require('express');
const { getAll, getOne, updateLibro, deleteLibro, setLibro } = require('../controllers/LibroController');
const route = express.Router();



route.get('/', getAll);
route.get('/:id', getOne);
route.put('/:id', updateLibro);
route.delete('/:id', deleteLibro);
route.post('/', setLibro);

module.exports = route;