const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:6655a365d362406995af1a41383ebb21@localhost:5432/Travel-Server');

<<<<<<< HEAD
module.exports = sequelize;

=======
 //const sequelize = new Sequelize("postgres://postgres:6655a365d362406995af1a41383ebb21@localhost:5432/Travel-Server")

const sequelize = new Sequelize("postgres://postgres:maple2323@localhost:5432/traveljournal")

// const sequelize = new Sequelize("postgres://postgres:6655a365d362406995af1a41383ebb21@localhost:5432/Travel-Server");
const sequelize = new Sequelize('postgres://postgres:14b9c4a2e2ce45508f4991456a37ae47@localhost:5432/travel-server');  // Ginea's Postgres

module.exports = sequelize;
>>>>>>> cab4267bbf8e914fff464a21e8fc4bc3b4eee41f
