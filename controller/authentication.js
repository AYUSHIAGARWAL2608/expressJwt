'use strict';


const jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
const config = require('config'); // get our config file
const MESSAGE = require('../messages/message');


let authentication = (req, res, next) => {

    // check post or url or header parameter for token verififation.
    const token = req.body.token || req.query.token || req.headers['x-access-token'];

    // decoded token
    if (token) {
        // verify secret key and 
        jwt.verify(token, config.secret,
            (err, decoded) => {
                if (err) {
                    return res.status(401).send({ success: false, message: Message.demo.auth.authFailed, tokenAuthorization: false })
                } else {
                    // save request decoded data for other routes
                    req.decoded = decoded;
                    next();
                }
            });
    } else {
        //return error when no token is provided.
        return res.status(403).send({
            success: false,
            message: Message.demo.auth.noToken
        });
    }
}

module.exports = authentication;