/**
 * functions here we have
 * 1. signUp_controller
 * 2. signIn_controller
 * 3. verifyEmail_controller
 */

// imports
const { User } = require('../../db/models');
const {
  genrateToken,
  setTokenCookie,
} = require('../../helpers/gen_setTokenCookie');

const signUp_controller = async (req, res) => {
  const { email, username, password } = req.body;
  try {
    const user = await User.create({ email, username, password });
    res.status(201).json({ userData: user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Can't add user" });
  }
};

// signIn controller
const signIn_controller = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      res.status(401).json({ msg: 'Invalid Credentials' });
    }
    const isValidPassword = await User.comparePassword(password, user.password);
    if (!isValidPassword) {
      res.status(401).json({ msg: 'Invalid Credentials' });
    }
    // generate Token and send this token with a cookie
    const token = genrateToken(user);
    setTokenCookie(res, token);
    res.status(200).json({ msg: 'Logged In', token });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  signUp_controller,
  signIn_controller,
};
