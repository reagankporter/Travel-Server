const router = require('express').Router();
const { UserModel } = require('../Models'); 
const { UniqueConstraintError } = require("sequelize/lib/errors");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


router.post('/register', async (req, res) => {


        let {username, email, password} = req.body.user;
         
        await UserModel.create({

            username,
            email,
            password,
        });
        res.send('This is our user/register endpoint!');
});


module.exports = router;