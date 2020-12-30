const { body } = require('express-validator');

let userValidation = [
    body('name')
        .isAlpha()
        .withMessage('Must be only alphabetical chars')
        .isLength({ min: 10 })
        .withMessage('Must be at least 10 chars long'),
    // username must be an email
    body('username')
        .isEmail().isLength({ min: 3 }),
    body('age')
        .isNumeric(),
    // password must be at least 5 chars long
    body('password')
        .isLength({ min: 5 }),
    body('bio')
        .isLength({ min: 12 }),
    body('imageUrl')
]

module.exports = [
    userValidation
]