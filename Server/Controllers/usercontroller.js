const router = require('express').Router();
const { UserModel } = require('../Models'); 

router.post('/register', async (req, res) => {

        let {username, email, password} = req.body.user;
         
        UserModel.create({

            username,
           email,
           password,
        })
    })

module.exports = router;