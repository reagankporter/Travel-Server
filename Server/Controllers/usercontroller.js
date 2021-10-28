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
        message: 'User Succesfully Registered! Thank you!',
        user: User
    });
    } catch (err) {

    if (err instanceof UniqueConstraintError) {
        res.status(409).json({
        message: "Email already in use",
    });
    } else {
        res.status(500).json({
        message: "Failed to register user! Try Again!",
        });
    }
}
});


module.exports = router;