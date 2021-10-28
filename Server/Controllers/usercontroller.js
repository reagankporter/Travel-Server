const router = require('express').Router();
const { UserModel } = require('../Models'); 

// router.post('/register', async (req, res) => {    
//     UserModel.create({
//         username: 'billybob',
//         email: 'billy@email.com',
//         password: 'password1234'
//     })
// })

router.post('/register', async (req, res) => {


        let {username, email, password} = req.body.user;
         
        await UserModel.create({

            username,
            email,
            password,
        });
        res.send('This is out user/register endpoint!');
});

module.exports = router;