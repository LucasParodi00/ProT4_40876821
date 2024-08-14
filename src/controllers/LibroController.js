const Libros = require("../models/Libros")



const getAll = async (req, res) => {
    try {
        const libros = await Libros.findAll();
        return res.status(200).json(libros);
    } catch (error) {
        return res.status(500).json({ mensaje: 'Ocurrio un error inesperado', error })
    }
}

const getOne = async (req, res) => {
    const { id } = req.params;
    try {
        const libro = await Libros.findByPk(id);
        res.status(200).json(libro);
    } catch (error) {
        res.status(500).json({ mensaje: 'Ocurrio un error inesperado', error })
    }
}

const setLibro = async (req, res) => {
    const { body } = req;

    const validar = await Libros.findOne({ where: { ISBN: body.ISBN } })

    if (validar) {
        return res.status(400).json({ mensaje: `El libro con el ISBN: ${body.ISBN} ya se encuentra registrado` })
    }

    try {
        const libro = await Libros.create(body);
        res.status(201).json(libro);
    } catch (error) {
        res.status(500).json({ mensaje: 'Ocurrio un error inesperado', error })
    }
}

const updateLibro = async (req, res) => {
    const { params, body } = req;
    const id = params.id;
    const datos = body;
    try {
        const libro = await Libros.update(datos, { where: { id }, logging: console.log });
        res.status(200).json({ mensaje: 'Libro actualizado', libro })
    } catch (error) {
        res.status(500).json({ mensaje: 'Ocurrio un error inesperado', error })
    }
}

const deleteLibro = async (req, res) => {
    try {
        const { id } = req.params;
        Libros.destroy({ where: { ISBN: id } })
        res.status(200).json({ mensaje: 'Libro eliminado', ISBN: id })
    } catch (error) {
        res.status(500).json({ mensaje: 'Ocurrio un error inesperado', error })
    }
}

module.exports = { getAll, getOne, updateLibro, deleteLibro, setLibro }