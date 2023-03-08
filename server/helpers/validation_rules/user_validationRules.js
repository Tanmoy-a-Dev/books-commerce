const { body } = require('express-validator');
const { User } = require('../../db/models');

const user_validationRules = [
  body('email')
    .notEmpty()
    .withMessage('Email is required!')
    .isEmail()
    .withMessage('Must be a valid email !'),
  body('username')
    .notEmpty()
    .withMessage('Username is required !')
    .matches(/^[a-zA-Z][a-zA-Z0-9]{3,5}$/)
    .withMessage(
      'Username must be between 4 to 6 characters long, start with a letter and contain only letters and digits.'
    )
    .custom(async (value, { req }) => {
      const user = await User.findOne({ where: { username: value } });
      if (user) {
        throw new Error('Username is already taken!');
      }
      return true;
    }),
  body('password')
    .notEmpty()
    .withMessage('You must set a password')
    .matches(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/)
    .withMessage(
      'Password must be one lowercase letter (?=.*[a-z]), one uppercase letter (?=.*[A-Z]), one digit (?=.*[0-9]), one special character (?=.*[^A-Za-z0-9]), and is at least eight characters long(?=.{8,})'
    ),
];

module.exports = user_validationRules;
