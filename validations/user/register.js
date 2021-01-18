const { body } = require('express-validator');

let userValidation = [
    body('name')
        .isAlpha()
        .withMessage('Must be only alphabetical chars')
        .isLength({ min: 5 })
        .withMessage('Must be at least 10 chars long'),
    // username must be an email
    body('username')
        .isEmail()
        .isLength({ min: 10 }),
    body('age')
        .isNumeric(),
    // password must be at least 5 chars long
    body('password', 'The password must be 5+ chars long and contain a number')
        .not()
        .isIn(['123', 'password', 'god'])
        .withMessage('Do not use a common word as the password')
        .isLength({ min: 5 })
        .matches(/\d/),
    body('bio')
        .isLength({ min: 12 })
        .withMessage('Bio must contain 12 characters.'),
    body('imageUrl')
]

module.exports = [
    userValidation
]