const jwt = require('jsonwebtoken');
const {UserModel} = require('../Models');

const validateJWT = async (req, res, next) => {
    if (req.method == 'OPTIONS') {
        next();
    } else if (
        req.headers.authorization &&
        req.headers.authorization.includes('Bearer')
    ) {
        const {authorization} = req.headers;
        console.log('authorization -->', authorization);
        const payload = authorization
        ? jwt.verify(
            authorization.includes('Bearer')
            ? authorization.includes.split('')[1]
            : authorization,
            process.env.JWT_SECRET
        )
        : undefined;

        console.log('payload -->', payload);

        if (payload) {
            let foundUser = await UserModel.findOne({where: {id: payload.id}});
            console.log('foundUser -->', foundUser);

            if (foundUser) {
                console.log('request -->', req);
                req.user = foundUser;
                next();
            } else {
                res.status(400).send({message: 'Bad Request / Not Authorized'});
            }
        } else {
            res.status(401).send({message: 'Unathorized / Invalid Token'});
        }
    } else {
        res.status(403).send({message: 'Forbidden!!!'});
    }
};

module.exports = validateJWT;