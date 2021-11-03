const {Sequelize} = require('sequelize');

// const sequelize = new Sequelize("postgres://postgres:6655a365d362406995af1a41383ebb21@localhost:5432/Travel-Server");

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect:"postgres",
    ssl: process.env.ENVIROMENT === "production"
});

// const sequelize = new Sequelize('postgres://postgres:14b9c4a2e2ce45508f4991456a37ae47@localhost:5432/travel-server');  // Ginea's Postgres

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    ssl: process.env.ENVIRONMENT === 'production'
});

module.exports = sequelize;
