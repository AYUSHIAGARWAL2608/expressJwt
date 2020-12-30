'use strict';

const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports.hash = (password, callback) => {
    bcrypt.genSalt(saltRounds,
        (err, salt) => {
            bcrypt.hash(password, salt,
                (err, hash) => {
                    callback(err, hash);
                });
        });
};

module.exports.checkHashPassword = (password, hash, callback) => {
    bcrypt.compare(password, hash,
        (err, res) => {
            callback(err, res);
        });
};

