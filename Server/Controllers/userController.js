const router = require('express').Router();
const { UserModel } = require('../Models'); 
const User = require('../Models/user');
const { UniqueConstraintError } = require("sequelize/lib/errors");

router.post('/register', async (req, res) => {


    let {username, email, password} = req.body.user;
    try{
        await UserModel.create({

        username,
            email,
            password,
        });
            res.status(201).json({
              message: "User successfully registered",
              user: User,
            });
          } catch (err) {
            if (err instanceof UniqueConstraintError) {
              res.status(409).json({
                message: "Email already in use! Try again!",
              });
            } else {
              res.status(500).json({
                message: "Failed to register user ;(",
              });
            }
          }
});

router.post("/login", async (req, res) => {

try {
      let loginUser = await UserModel.findOne({

        where: {
              username: username,
        },
      });


        if (loginUser) {
            res.status(200).json({
              user: loginUser,
              message: "User successfully logged in!"
            });
        } else {
                res.status(401).json({
                message: 'Login failed'
              });
            }
          } catch (error) {
            res.status(500).json({
              message: "Failed to log user in"
            })
          }
    });


// router.post('/register', async (req, res) => {    
//     UserModel.create({
//         username: 'billybob',
//         email: 'billy@email.com',
//         password: 'password1234'
//     })
// })



module.exports = router;