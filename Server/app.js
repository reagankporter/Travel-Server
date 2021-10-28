require('dotenv').config();
const Express = require ('express');
const app = Express();
const dbConnection = require('./db');
const controllers = require('./Controllers');

app.use(Express.json());

app.use('/user', controllers.userController);

app.use(require('./Middleware/validate-jwt'));

app.use ('/journal',controllers.journalController);

app.use('/bucketList', controllers.bucketListController);

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

app.use('/test', (req, res) => {
    res.send('This is a message from the test endpoint on the server!')
});