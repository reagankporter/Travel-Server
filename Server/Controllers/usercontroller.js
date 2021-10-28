const router = require('express').Router();
const { UserModel } = require('../Models'); 

router.post('/register', async (req, res) => {
         
        UserModel.create({
            username: 'testname456',
            email: 'user2@email.com',
            password: 'password1234'
        })
    })

module.exports = router;