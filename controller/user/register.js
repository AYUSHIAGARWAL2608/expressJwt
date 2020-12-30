'use strict';
// register a user using email and password
let userModel = require('../../models/user');
const jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
const config = require('config'); // get our config file
const utility = require('../../utility/utility');

let checkUserExist = (req, res, next) => {
    userModel.find(
        { username: req.body.username },
        (err, user) => {
            if (err) {
                return res.status(400).json({ success: false, isError: true, error: err })
            } else {
                if (user.length > 0) {
                    return res.status(201).json({ success: false, message: 'Username already exists. Choose other username.' })
                } else {
                    next();
                }
            }
        }
    );
}

let genrateHashPassword = (req, res, next) => {
    utility.hash(req.body.password, (err, hashPassword) => {
        if (err) {
            return res.status(400).json({ success: false, isError: true, error: err });
        } else {
            req.data = {};
            req.data.hashPassword = hashPassword;
            next();
        }
    })
}

let createUser = (req, res, next) => {
    let user = req.body;
    let userPayload = {
        username: user.username,
        password: req.data.hashPassword,
        name: user.name,
        age: user.age,
        bio: user.bio,
        dob: user.dob,
        imageUrl: user.imageUrl,
        created: Date.now(),
        updated: Date.now(),
    }
    userModel.create(
        userPayload,
        (err, user) => {
            if (err) {
                return res.status(400).json({ success: false, isError: true, error: err })
            } else {
                req.data.createdUser = JSON.parse(JSON.stringify(user));
                next();
            }
        });
}


let generateToken = (req, res) => {
    const payload = {
        username: req.data.createdUser.username,
        _id: req.data.createdUser._id,
        id: req.data.createdUser.id,
    };
    const token = jwt.sign(payload, config.secret, {
        expiresIn: config.tokenDuration // expires in 24 hours
    });
    delete req.data.createdUser.password;
    // return the information including token as JSON
    res.status(200).json({
        success: true,
        message: 'You are registered successfully.',
        token: token,
        user: req.data.createdUser,
    });
}

module.exports = [
    checkUserExist,
    genrateHashPassword,
    createUser,
    generateToken
]