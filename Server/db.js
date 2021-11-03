const {Sequelize} = require('sequelize');

// const sequelize = new Sequelize("postgres://postgres:6655a365d362406995af1a41383ebb21@localhost:5432/Travel-Server");

// const sequelize = new Sequelize("postgres://postgres:maple2323@localhost:5432/traveljournal");

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    ssl: process.env.ENVIRONMENT === 'production'
});

module.exports = sequelize;
