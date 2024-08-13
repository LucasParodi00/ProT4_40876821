require('dotenv').config();

const { Sequelize } = require('sequelize');

const database = process.env.DATABASE;
const user = process.env.USER;
const password = process.env.PASSWORD;
const host = process.env.HOST;
const dialect = process.env.DIALECT;

const conexion = new Sequelize(
    database,
    user,
    password,
    {
        host,
        dialect
    }
);

const db = async () => {
    try {
        await conexion.authenticate();
        console.log('Se establecio la conexion con la base de datos');
    } catch (error) {
        console.log('Error en la conexion a la base de datos', error);
    }
}

module.exports = { db, conexion };