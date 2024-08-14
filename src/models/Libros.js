


const { DataTypes, Op } = require('sequelize');
const { conexion } = require('../bdd/conexionDB');

const Libros = conexion.define('libros', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [1, 30]
        }
    },
    autor: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [1, 30]
        }
    },
    categoria: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [1, 30]
        }
    },
    anio_publicacion: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    ISBN: {
        type: DataTypes,
        allowNull: false
    }
},
    {
        tableName: 'libros',
        timestamps: false
    }
)

module.exports = Libros; 