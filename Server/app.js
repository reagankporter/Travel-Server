<<<<<<< HEAD
const Express = require('express');
const app = Express();
const dbConnection = require('./db');
const controllers = require("./Controllers");
     
     app.use('/journal', controllers.journalController);
     app.use('/user', controllers.userController);
     
    dbConnection.authenticate()
      .then(() => dbConnection.sync())
      .then(() => {
        app.listen(3000, () => {
          console.log(`[Server]: App is listening on 3000.`);
        });
      })
    .catch((err) => {
    console.log(`[Server]: Server crashed. Error = ${err}`);
});
=======
require('dotenv').config();
const Express = require ('express');
const app = Express();
const dbConnection = require('./db');
const controllers = require('./Controllers');

app.use(Express.json());

app.use('/user', controllers.userController);

app.use(require('./middleware/validate-jwt'));

app.use ('/journal',controllers.journalController);

dbConnection.authenticate()
    .then(() => dbConnection.sync())
    .then(() => {
        app.listen(3000, () => {
            console.log(`[Server]: App is listening on 3000.`);
        });
    })
    .catch((err) => {
        console.log(`[Server]: Server crashed.  Error = ${err}`);
    });
>>>>>>> d56ed01b0f3ae4ab05effc1c5aeaff7e2e5e82ce
