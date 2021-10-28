const router = require('express').Router();
const { UserModel } = require('../Models'); 

router.post('/register', async (req, res) => {
<<<<<<< HEAD
=======

        let {username, email, password} = req.body.user;
         
>>>>>>> cab4267bbf8e914fff464a21e8fc4bc3b4eee41f
        UserModel.create({

            username,
           email,
           password,
        })
    })

module.exports = router;