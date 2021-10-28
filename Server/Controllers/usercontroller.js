const router = require('express').Router();
const { UserModel } = require('../Models'); 
const User = require('../Models/user');
const { UniqueConstraintError } = require("sequelize/lib/errors");

router.post("/register", async (req, res) => {
          let { username, email, password } = req.body.user;
          try {
           const User = await UserModel.create({
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
                    message: "Email already in use",
                   });
                  } else {
                   res.status(500).json({
                    message: "Failed to register user",
                   });
              }
         }
        });



router.post("/login", async (req, res) => {
      let {username, email, password } = req.body.user;    
        await UserModel.findOne({
        where: {
              email: email,
        },
      });
    });


module.exports = router;